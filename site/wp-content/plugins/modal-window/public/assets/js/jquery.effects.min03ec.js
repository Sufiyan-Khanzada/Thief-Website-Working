/*! jQuery UI - v1.12.1 - 2017-01-03
* http://jqueryui.com
* Includes: effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)})(function(b){b.ui=b.ui||{},b.ui.version="1.12.1";var d="ui-effects-",a="ui-effects-style",c="ui-effects-animated",g=b;b.effects={effect:{}},function(E,z){function w(l,o,h){var n=D[o.type]||{};return null==l?h||!o.def?null:o.def:(l=n.floor?~~l:parseFloat(l),isNaN(l)?o.def:n.mod?(l+n.mod)%n.mod:0>l?0:l>n.max?n.max:l)}function F(e){var h=x(),l=h._rgba=[];return e=e.toLowerCase(),y(v,function(p,G){var n,u=G.re.exec(e),i=u&&G.parse(u),s=G.space||"rgba";return i?(n=h[s](i),h[B[s].cache]=n[B[s].cache],l=h._rgba=n._rgba,!1):z}),l.length?("0,0,0,0"===l.join()&&E.extend(l,m.transparent),h):m[e]}function q(l,n,h){return h=(h+1)%1,1>6*h?l+6*(n-l)*h:1>2*h?n:2>3*h?l+6*(n-l)*(2/3-h):l}var m,C="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",j=/^([\-+])=\s*(\d+\.?\d*)/,v=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],x=E.Color=function(o,h,l,p){return new E.Color.fn.parse(o,h,l,p)},B={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},D={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},A=x.support={},k=E("<p>")[0],y=E.each;k.style.cssText="background-color:rgba(1,1,1,.5)",A.rgba=k.style.backgroundColor.indexOf("rgba")>-1,y(B,function(h,i){i.cache="_"+h,i.props.alpha={idx:3,type:"percent",def:1}}),x.fn=E.extend(x.prototype,{parse:function(G,h,o,e){if(G===z){return this._rgba=[null,null,null,null],this}(G.jquery||G.nodeType)&&(G=E(G).css(h),h=z);var i=this,t=E.type(G),s=this._rgba=[];return h!==z&&(G=[G,h,o,e],t="array"),"string"===t?this.parse(F(G)||m._default):"array"===t?(y(B.rgba.props,function(l,n){s[n.idx]=w(G[n.idx],n)}),this):"object"===t?(G instanceof x?y(B,function(l,n){G[n.cache]&&(i[n.cache]=G[n.cache].slice())}):y(B,function(n,l){var p=l.cache;y(l.props,function(r,u){if(!i[p]&&l.to){if("alpha"===r||null==G[r]){return}i[p]=l.to(i._rgba)}i[p][u.idx]=w(G[r],u,!0)}),i[p]&&0>E.inArray(null,i[p].slice(0,3))&&(i[p][3]=1,l.from&&(i._rgba=l.from(i[p])))}),this):z},is:function(h){var e=x(h),l=!0,o=this;return y(B,function(n,s){var i,p=e[s.cache];return p&&(i=o[s.cache]||s.to&&s.to(o._rgba)||[],y(s.props,function(u,r){return null!=p[r.idx]?l=p[r.idx]===i[r.idx]:z})),l}),l},_space:function(){var h=[],i=this;return y(B,function(e,l){i[l.cache]&&h.push(e)}),h.pop()},transition:function(p,H){var u=x(p),J=u._space(),I=B[J],i=0===this.alpha()?x("transparent"):this,G=i[I.cache]||I.to(i._rgba),h=G.slice();return u=u[I.cache],y(I.props,function(l,L){var s=L.idx,e=G[s],r=u[s],K=D[L.type]||{};null!==r&&(null===e?h[s]=r:(K.mod&&(r-e>K.mod/2?e+=K.mod:e-r>K.mod/2&&(e-=K.mod)),h[s]=w((r-e)*H+e,L)))}),this[J](h)},blend:function(o){if(1===this._rgba[3]){return this}var h=this._rgba.slice(),l=h.pop(),p=x(o)._rgba;return x(E.map(h,function(i,n){return(1-l)*p[n]+l*i}))},toRgbaString:function(){var l="rgba(",h=E.map(this._rgba,function(i,n){return null==i?n>2?1:0:i});return 1===h[3]&&(h.pop(),l="rgb("),l+h.join()+")"},toHslaString:function(){var l="hsla(",h=E.map(this.hsla(),function(i,n){return null==i&&(i=n>2?1:0),n&&3>n&&(i=Math.round(100*i)+"%"),i});return 1===h[3]&&(h.pop(),l="hsl("),l+h.join()+")"},toHexString:function(n){var h=this._rgba.slice(),l=h.pop();return n&&h.push(~~(255*l)),"#"+E.map(h,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),x.fn.parse.prototype=x.fn,B.hsla.to=function(P){if(null==P[0]||null==P[1]||null==P[2]){return[null,null,null,P[3]]}var L,J,Q=P[0]/255,H=P[1]/255,G=P[2]/255,N=P[3],p=Math.max(Q,H,G),I=Math.min(Q,H,G),K=p-I,M=p+I,O=0.5*M;return L=I===p?0:Q===p?60*(H-G)/K+360:H===p?60*(G-Q)/K+120:60*(Q-H)/K+240,J=0===K?0:0.5>=O?K/M:K/(2-M),[Math.round(L)%360,J,O,null==N?1:N]},B.hsla.from=function(n){if(null==n[0]||null==n[1]||null==n[2]){return[null,null,null,n[3]]}var G=n[0]/360,l=n[1],p=n[2],H=n[3],h=0.5>=p?p*(1+l):p+l-p*l,u=2*p-h;return[Math.round(255*q(u,h,G+1/3)),Math.round(255*q(u,h,G)),Math.round(255*q(u,h,G-1/3)),H]},y(B,function(i,t){var p=t.props,h=t.cache,e=t.to,r=t.from;x.fn[i]=function(o){if(e&&!this[h]&&(this[h]=e(this._rgba)),o===z){return this[h].slice()}var I,G=E.type(o),l="array"===G||"object"===G?o:arguments,H=this[h].slice();return y(p,function(n,J){var u=l["object"===G?n:J.idx];null==u&&(u=H[J.idx]),H[J.idx]=w(u,J)}),r?(I=x(r(H)),I[h]=H,I):x(H)},y(p,function(n,l){x.fn[n]||(x.fn[n]=function(J){var H,u=E.type(J),s="alpha"===n?this._hsla?"hsla":"rgba":i,G=this[s](),I=G[l.idx];return"undefined"===u?I:("function"===u&&(J=J.call(this,I),u=E.type(J)),null==J&&l.empty?this:("string"===u&&(H=j.exec(J),H&&(J=I+parseFloat(H[2])*("+"===H[1]?1:-1))),G[l.idx]=J,this[s](G)))})})}),x.hook=function(l){var h=l.split(" ");y(h,function(o,n){E.cssHooks[n]={set:function(t,G){var u,p,s="";if("transparent"!==G&&("string"!==E.type(G)||(u=F(G)))){if(G=x(u||G),!A.rgba&&1!==G._rgba[3]){for(p="backgroundColor"===n?t.parentNode:t;(""===s||"transparent"===s)&&p&&p.style;){try{s=E.css(p,"backgroundColor"),p=p.parentNode}catch(i){}}G=G.blend(s&&"transparent"!==s?s:"_default")}G=G.toRgbaString()}try{t.style[n]=G}catch(i){}}},E.fx.step[n]=function(i){i.colorInit||(i.start=x(i.elem,n),i.end=x(i.end),i.colorInit=!0),E.cssHooks[n].set(i.elem,i.start.transition(i.end,i.pos))}})},x.hook(C),E.cssHooks.borderColor={expand:function(h){var i={};return y(["Top","Right","Bottom","Left"],function(e,l){i["border"+l+"Color"]=h}),i}},m=E.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(g),function(){function k(q){var m,p,t=q.ownerDocument.defaultView?q.ownerDocument.defaultView.getComputedStyle(q,null):q.currentStyle,r={};if(t&&t.length&&t[0]&&t[t[0]]){for(p=t.length;p--;){m=t[p],"string"==typeof t[m]&&(r[b.camelCase(m)]=t[m])}}else{for(m in t){"string"==typeof t[m]&&(r[m]=t[m])}}return r}function h(q,o){var p,r,m={};for(p in o){r=o[p],q[p]!==r&&(l[p]||(b.fx.step[p]||!isNaN(parseFloat(r)))&&(m[p]=r))}return m}var j=["add","remove","toggle"],l={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};b.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(n,m){b.fx.step[m]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(g.style(e.elem,m,e.end),e.setAttr=!0)}}),b.fn.addBack||(b.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),b.effects.animateClass=function(q,p,i,m){var e=b.speed(p,i,m);return this.queue(function(){var u,n=b(this),t=n.attr("class")||"",s=e.children?n.find("*").addBack():n;s=s.map(function(){var o=b(this);return{el:o,start:k(this)}}),u=function(){b.each(j,function(o,r){q[r]&&n[r+"Class"](q[r])})},u(),s=s.map(function(){return this.end=k(this.el[0]),this.diff=h(this.start,this.end),this}),n.attr("class",t),s=s.map(function(){var v=this,o=b.Deferred(),r=b.extend({},e,{queue:!1,complete:function(){o.resolve(v)}});return this.el.animate(this.diff,r),o.promise()}),b.when.apply(b,s.get()).done(function(){u(),b.each(arguments,function(){var o=this.el;b.each(this.diff,function(r){o.css(r,"")})}),e.complete.call(n[0])})})},b.fn.extend({addClass:function(i){return function(e,m,q,p){return m?b.effects.animateClass.call(this,{add:e},m,q,p):i.apply(this,arguments)}}(b.fn.addClass),removeClass:function(i){return function(e,m,q,p){return arguments.length>1?b.effects.animateClass.call(this,{remove:e},m,q,p):i.apply(this,arguments)}}(b.fn.removeClass),toggleClass:function(i){return function(m,p,r,q,e){return"boolean"==typeof p||void 0===p?r?b.effects.animateClass.call(this,p?{add:m}:{remove:m},r,q,e):i.apply(this,arguments):b.effects.animateClass.call(this,{toggle:m},p,r,q)}}(b.fn.toggleClass),switchClass:function(q,m,p,t,r){return b.effects.animateClass.call(this,{add:m,remove:q},p,t,r)}})}(),function(){function i(l,j,k,m){return b.isPlainObject(l)&&(j=l,l=l.effect),l={effect:l},null==j&&(j={}),b.isFunction(j)&&(m=j,k=null,j={}),("number"==typeof j||b.fx.speeds[j])&&(m=k,k=j,j={}),b.isFunction(k)&&(m=k,k=null),j&&b.extend(l,j),k=k||j.duration,l.duration=b.fx.off?0:"number"==typeof k?k:k in b.fx.speeds?b.fx.speeds[k]:b.fx.speeds._default,l.complete=m||j.complete,l}function h(j){return !j||"number"==typeof j||b.fx.speeds[j]?!0:"string"!=typeof j||b.effects.effect[j]?b.isFunction(j)?!0:"object"!=typeof j||j.effect?!1:!0:!0}function e(k,m){var j=m.outerWidth(),l=m.outerHeight(),q=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,p=q.exec(k)||["",0,j,l,0];return{top:parseFloat(p[1])||0,right:"auto"===p[2]?j:parseFloat(p[2]),bottom:"auto"===p[3]?l:parseFloat(p[3]),left:parseFloat(p[4])||0}}b.expr&&b.expr.filters&&b.expr.filters.animated&&(b.expr.filters.animated=function(j){return function(k){return !!b(k).data(c)||j(k)}}(b.expr.filters.animated)),b.uiBackCompat!==!1&&b.extend(b.effects,{save:function(k,j){for(var l=0,m=j.length;m>l;l++){null!==j[l]&&k.data(d+j[l],k[0].style[j[l]])}},restore:function(k,j){for(var l,p=0,m=j.length;m>p;p++){null!==j[p]&&(l=k.data(d+j[p]),k.css(j[p],l))}},setMode:function(j,k){return"toggle"===k&&(k=j.is(":hidden")?"show":"hide"),k},createWrapper:function(m){if(m.parent().is(".ui-effects-wrapper")){return m.parent()}var k={width:m.outerWidth(!0),height:m.outerHeight(!0),"float":m.css("float")},l=b("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),q={width:m.width(),height:m.height()},p=document.activeElement;try{p.id}catch(j){p=document.body}return m.wrap(l),(m[0]===p||b.contains(m[0],p))&&b(p).trigger("focus"),l=m.parent(),"static"===m.css("position")?(l.css({position:"relative"}),m.css({position:"relative"})):(b.extend(k,{position:m.css("position"),zIndex:m.css("z-index")}),b.each(["top","left","bottom","right"],function(n,o){k[o]=m.css(o),isNaN(parseInt(k[o],10))&&(k[o]="auto")}),m.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),m.css(q),l.css(k).show()},removeWrapper:function(k){var j=document.activeElement;return k.parent().is(".ui-effects-wrapper")&&(k.parent().replaceWith(k),(k[0]===j||b.contains(k[0],j))&&b(j).trigger("focus")),k}}),b.extend(b.effects,{version:"1.12.1",define:function(l,j,k){return k||(k=j,j="effect"),b.effects.effect[l]=k,b.effects.effect[l].mode=j,k},scaledDimensions:function(k,m,j){if(0===m){return{height:0,width:0,outerHeight:0,outerWidth:0}}var l="horizontal"!==j?(m||100)/100:1,o="vertical"!==j?(m||100)/100:1;return{height:k.height()*o,width:k.width()*l,outerHeight:k.outerHeight()*o,outerWidth:k.outerWidth()*l}},clipToBox:function(j){return{width:j.clip.right-j.clip.left,height:j.clip.bottom-j.clip.top,left:j.clip.left,top:j.clip.top}},unshift:function(k,m,j){var l=k.queue();m>1&&l.splice.apply(l,[1,0].concat(l.splice(m,j))),k.dequeue()},saveStyle:function(j){j.data(a,j[0].style.cssText)},restoreStyle:function(j){j[0].style.cssText=j.data(a)||"",j.removeData(a)},mode:function(k,l){var j=k.is(":hidden");return"toggle"===l&&(l=j?"show":"hide"),(j?"hide"===l:"show"===l)&&(l="none"),l},getBaseline:function(k,m){var j,l;switch(k[0]){case"top":j=0;break;case"middle":j=0.5;break;case"bottom":j=1;break;default:j=k[0]/m.height}switch(k[1]){case"left":l=0;break;case"center":l=0.5;break;case"right":l=1;break;default:l=k[1]/m.width}return{x:l,y:j}},createPlaceholder:function(j){var k,m=j.css("position"),l=j.position();return j.css({marginTop:j.css("marginTop"),marginBottom:j.css("marginBottom"),marginLeft:j.css("marginLeft"),marginRight:j.css("marginRight")}).outerWidth(j.outerWidth()).outerHeight(j.outerHeight()),/^(static|relative)/.test(m)&&(m="absolute",k=b("<"+j[0].nodeName+">").insertAfter(j).css({display:/^(inline|ruby)/.test(j.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:j.css("marginTop"),marginBottom:j.css("marginBottom"),marginLeft:j.css("marginLeft"),marginRight:j.css("marginRight"),"float":j.css("float")}).outerWidth(j.outerWidth()).outerHeight(j.outerHeight()).addClass("ui-effects-placeholder"),j.data(d+"placeholder",k)),j.css({position:m,left:l.left,top:l.top}),k},removePlaceholder:function(k){var j=d+"placeholder",l=k.data(j);l&&(l.remove(),k.removeData(j))},cleanUp:function(j){b.effects.restoreStyle(j),b.effects.removePlaceholder(j)},setTransition:function(l,j,k,m){return m=m||{},b.each(j,function(p,n){var q=l.cssUnit(n);q[0]>0&&(m[n]=q[0]*k+q[1])}),m}}),b.fn.extend({effect:function(){function q(x){function y(){o.removeData(c),b.effects.cleanUp(o),"hide"===n.mode&&o.hide(),u()}function u(){b.isFunction(p)&&p.call(o[0]),b.isFunction(x)&&x()}var o=b(this);n.mode=w.shift(),b.uiBackCompat===!1||v?"none"===n.mode?(o[t](),u()):k.call(o[0],n,y):(o.is(":hidden")?"hide"===t:"show"===t)?(o[t](),u()):k.call(o[0],n,u)}var n=i.apply(this,arguments),k=b.effects.effect[n.effect],v=k.mode,j=n.queue,m=j||"fx",p=n.complete,t=n.mode,w=[],s=function(o){var l=b(this),r=b.effects.mode(l,t)||v;l.data(c,!0),w.push(r),v&&("show"===r||r===v&&"hide"===r)&&l.show(),v&&"none"===r||b.effects.saveStyle(l),b.isFunction(o)&&o()};return b.fx.off||!k?t?this[t](n.duration,p):this.each(function(){p&&p.call(this)}):j===!1?this.each(s).each(q):this.queue(m,s).queue(m,q)},show:function(j){return function(l){if(h(l)){return j.apply(this,arguments)}var k=i.apply(this,arguments);return k.mode="show",this.effect.call(this,k)}}(b.fn.show),hide:function(j){return function(l){if(h(l)){return j.apply(this,arguments)}var k=i.apply(this,arguments);return k.mode="hide",this.effect.call(this,k)}}(b.fn.hide),toggle:function(j){return function(l){if(h(l)||"boolean"==typeof l){return j.apply(this,arguments)}var k=i.apply(this,arguments);return k.mode="toggle",this.effect.call(this,k)}}(b.fn.toggle),cssUnit:function(l){var j=this.css(l),k=[];return b.each(["em","px","%","pt"],function(m,n){j.indexOf(n)>0&&(k=[parseFloat(j),n])}),k},cssClip:function(j){return j?this.css("clip","rect("+j.top+"px "+j.right+"px "+j.bottom+"px "+j.left+"px)"):e(this.css("clip"),this)},transfer:function(v,q){var A=b(this),m=b(v.to),k="fixed"===m.css("position"),y=b("body"),j=k?y.scrollTop():0,p=k?y.scrollLeft():0,t=m.offset(),x={top:t.top-j,left:t.left-p,height:m.innerHeight(),width:m.innerWidth()},z=A.offset(),w=b("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(v.className).css({top:z.top-j,left:z.left-p,height:A.innerHeight(),width:A.innerWidth(),position:k?"fixed":"absolute"}).animate(x,v.duration,v.easing,function(){w.remove(),b.isFunction(q)&&q()})}}),b.fx.step.clip=function(j){j.clipInit||(j.start=b(j.elem).cssClip(),"string"==typeof j.end&&(j.end=e(j.end,j.elem)),j.clipInit=!0),b(j.elem).cssClip({top:j.pos*(j.end.top-j.start.top)+j.start.top,right:j.pos*(j.end.right-j.start.right)+j.start.right,bottom:j.pos*(j.end.bottom-j.start.bottom)+j.start.bottom,left:j.pos*(j.end.left-j.start.left)+j.start.left})}}(),function(){var h={};b.each(["Quad","Cubic","Quart","Quint","Expo"],function(j,e){h[e]=function(i){return Math.pow(i,j+2)}}),b.extend(h,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(k){for(var l,j=4;((l=Math.pow(2,--j))-1)/11>k;){}return 1/Math.pow(4,3-j)-7.5625*Math.pow((3*l-2)/22-k,2)}}),b.each(h,function(k,j){b.easing["easeIn"+k]=j,b.easing["easeOut"+k]=function(e){return 1-j(1-e)},b.easing["easeInOut"+k]=function(e){return 0.5>e?j(2*e)/2:1-j(-2*e+2)/2}})}();var f=b.effects;b.effects.define("blind","hide",function(q,k){var m={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},u=b(this),t=q.direction||"up",j=u.cssClip(),p={clip:b.extend({},j)},h=b.effects.createPlaceholder(u);p.clip[m[t][0]]=p.clip[m[t][1]],"show"===q.mode&&(u.cssClip(p.clip),h&&h.css(b.effects.clipToBox(p)),p.clip=j),h&&h.animate(b.effects.clipToBox(p),q.duration,q.easing),u.animate(p,{queue:!1,duration:q.duration,easing:q.easing,complete:k})}),b.effects.define("bounce",function(F,B){var q,y,x,J=b(this),t=F.mode,A="hide"===t,C="show"===t,H=F.direction||"up",k=F.distance,G=F.times||5,w=2*G+(C||A?1:0),E=F.duration/w,D=F.easing,z="up"===H||"down"===H?"top":"left",K="up"===H||"left"===H,j=0,I=J.queue().length;for(b.effects.createPlaceholder(J),x=J.css(z),k||(k=J["top"===z?"outerHeight":"outerWidth"]()/3),C&&(y={opacity:1},y[z]=x,J.css("opacity",0).css(z,K?2*-k:2*k).animate(y,E,D)),A&&(k/=Math.pow(2,G-1)),y={},y[z]=x;G>j;j++){q={},q[z]=(K?"-=":"+=")+k,J.animate(q,E,D).animate(y,E,D),k=A?2*k:k/2}A&&(q={opacity:0},q[z]=(K?"-=":"+=")+k,J.animate(q,E,D)),J.queue(B),b.effects.unshift(J,I,w+1)}),b.effects.define("clip","hide",function(u,q){var w,m={},k=b(this),v=u.direction||"vertical",j="both"===v,p=j||"horizontal"===v,t=j||"vertical"===v;w=k.cssClip(),m.clip={top:t?(w.bottom-w.top)/2:w.top,right:p?(w.right-w.left)/2:w.right,bottom:t?(w.bottom-w.top)/2:w.bottom,left:p?(w.right-w.left)/2:w.left},b.effects.createPlaceholder(k),"show"===u.mode&&(k.cssClip(m.clip),m.clip=w),k.animate(m,{queue:!1,duration:u.duration,easing:u.easing,complete:q})}),b.effects.define("drop","hide",function(v,q){var z,m=b(this),k=v.mode,x="show"===k,j=v.direction||"left",p="up"===j||"down"===j?"top":"left",t="up"===j||"left"===j?"-=":"+=",w="+="===t?"-=":"+=",y={opacity:0};b.effects.createPlaceholder(m),z=v.distance||m["top"===p?"outerHeight":"outerWidth"](!0)/2,y[p]=t+z,x&&(m.css(y),y[p]=w+z,y.opacity=1),m.animate(y,{queue:!1,duration:v.duration,easing:v.easing,complete:q})}),b.effects.define("explode","hide",function(F,B){function q(){I.push(this),I.length===k*G&&y()}function y(){w.css({visibility:"visible"}),b(I).remove(),B()}var x,J,t,A,C,H,k=F.pieces?Math.round(Math.sqrt(F.pieces)):3,G=k,w=b(this),E=F.mode,D="show"===E,z=w.show().css("visibility","hidden").offset(),K=Math.ceil(w.outerWidth()/G),j=Math.ceil(w.outerHeight()/k),I=[];for(x=0;k>x;x++){for(A=z.top+x*j,H=x-(k-1)/2,J=0;G>J;J++){t=z.left+J*K,C=J-(G-1)/2,w.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-J*K,top:-x*j}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:K,height:j,left:t+(D?C*K:0),top:A+(D?H*j:0),opacity:D?0:1}).animate({left:t+(D?0:C*K),top:A+(D?0:H*j),opacity:D?1:0},F.duration||500,F.easing,q)}}}),b.effects.define("fade","toggle",function(k,h){var j="show"===k.mode;b(this).css("opacity",j?0:1).animate({opacity:j?1:0},{queue:!1,duration:k.duration,easing:k.easing,complete:h})}),b.effects.define("fold","hide",function(B,x){var H=b(this),t=B.mode,q="show"===t,E="hide"===t,j=B.size||15,w=/([0-9]+)%/.exec(j),y=!!B.horizFirst,D=y?["right","bottom"]:["bottom","right"],G=B.duration/2,C=b.effects.createPlaceholder(H),k=H.cssClip(),A={clip:b.extend({},k)},z={clip:b.extend({},k)},v=[k[D[0]],k[D[1]]],F=H.queue().length;w&&(j=parseInt(w[1],10)/100*v[E?0:1]),A.clip[D[0]]=j,z.clip[D[0]]=j,z.clip[D[1]]=0,q&&(H.cssClip(z.clip),C&&C.css(b.effects.clipToBox(z)),z.clip=k),H.queue(function(e){C&&C.animate(b.effects.clipToBox(A),G,B.easing).animate(b.effects.clipToBox(z),G,B.easing),e()}).animate(A,G,B.easing).animate(z,G,B.easing).queue(x),b.effects.unshift(H,F,4)}),b.effects.define("highlight","show",function(k,h){var j=b(this),l={backgroundColor:j.css("backgroundColor")};"hide"===k.mode&&(l.opacity=0),b.effects.saveStyle(j),j.css({backgroundImage:"none",backgroundColor:k.color||"#ffff99"}).animate(l,{queue:!1,duration:k.duration,easing:k.easing,complete:h})}),b.effects.define("size",function(F,B){var q,y,x,I=b(this),t=["fontSize"],A=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],C=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],H=F.mode,k="effect"!==H,G=F.scale||"both",w=F.origin||["middle","center"],E=I.css("position"),D=I.position(),z=b.effects.scaledDimensions(I),J=F.from||z,j=F.to||b.effects.scaledDimensions(I,0);b.effects.createPlaceholder(I),"show"===H&&(x=J,J=j,j=x),y={from:{y:J.height/z.height,x:J.width/z.width},to:{y:j.height/z.height,x:j.width/z.width}},("box"===G||"both"===G)&&(y.from.y!==y.to.y&&(J=b.effects.setTransition(I,A,y.from.y,J),j=b.effects.setTransition(I,A,y.to.y,j)),y.from.x!==y.to.x&&(J=b.effects.setTransition(I,C,y.from.x,J),j=b.effects.setTransition(I,C,y.to.x,j))),("content"===G||"both"===G)&&y.from.y!==y.to.y&&(J=b.effects.setTransition(I,t,y.from.y,J),j=b.effects.setTransition(I,t,y.to.y,j)),w&&(q=b.effects.getBaseline(w,z),J.top=(z.outerHeight-J.outerHeight)*q.y+D.top,J.left=(z.outerWidth-J.outerWidth)*q.x+D.left,j.top=(z.outerHeight-j.outerHeight)*q.y+D.top,j.left=(z.outerWidth-j.outerWidth)*q.x+D.left),I.css(J),("content"===G||"both"===G)&&(A=A.concat(["marginTop","marginBottom"]).concat(t),C=C.concat(["marginLeft","marginRight"]),I.find("*[width]").each(function(){var h=b(this),l=b.effects.scaledDimensions(h),m={height:l.height*y.from.y,width:l.width*y.from.x,outerHeight:l.outerHeight*y.from.y,outerWidth:l.outerWidth*y.from.x},e={height:l.height*y.to.y,width:l.width*y.to.x,outerHeight:l.height*y.to.y,outerWidth:l.width*y.to.x};y.from.y!==y.to.y&&(m=b.effects.setTransition(h,A,y.from.y,m),e=b.effects.setTransition(h,A,y.to.y,e)),y.from.x!==y.to.x&&(m=b.effects.setTransition(h,C,y.from.x,m),e=b.effects.setTransition(h,C,y.to.x,e)),k&&b.effects.saveStyle(h),h.css(m),h.animate(e,F.duration,F.easing,function(){k&&b.effects.restoreStyle(h)})})),I.animate(j,{queue:!1,duration:F.duration,easing:F.easing,complete:function(){var h=I.offset();0===j.opacity&&I.css("opacity",J.opacity),k||(I.css("position","static"===E?"relative":E).offset(h),b.effects.saveStyle(I)),B()}})}),b.effects.define("scale",function(l,j){var k=b(this),p=l.mode,m=parseInt(l.percent,10)||(0===parseInt(l.percent,10)?0:"effect"!==p?0:100),h=b.extend(!0,{from:b.effects.scaledDimensions(k),to:b.effects.scaledDimensions(k,m,l.direction||"both"),origin:l.origin||["middle","center"]},l);l.fade&&(h.from.opacity=1,h.to.opacity=0),b.effects.effect.size.call(this,h,j)}),b.effects.define("puff","hide",function(k,h){var j=b.extend(!0,{},k,{fade:!0,percent:parseInt(k.percent,10)||150});b.effects.effect.scale.call(this,j,h)}),b.effects.define("pulsate","show",function(v,q){var A=b(this),m=v.mode,k="show"===m,y="hide"===m,j=k||y,p=2*(v.times||5)+(j?1:0),t=v.duration/p,x=0,z=1,w=A.queue().length;for((k||!A.is(":visible"))&&(A.css("opacity",0).show(),x=1);p>z;z++){A.animate({opacity:x},t,v.easing),x=1-x}A.animate({opacity:x},t,v.easing),A.queue(q),b.effects.unshift(A,w,p+1)}),b.effects.define("shake",function(z,v){var E=1,q=b(this),m=z.direction||"left",C=z.distance||20,j=z.times||3,t=2*j+1,w=Math.round(z.duration/t),B="up"===m||"down"===m?"top":"left",D="up"===m||"left"===m,A={},k={},y={},x=q.queue().length;for(b.effects.createPlaceholder(q),A[B]=(D?"-=":"+=")+C,k[B]=(D?"+=":"-=")+2*C,y[B]=(D?"-=":"+=")+2*C,q.animate(A,w,z.easing);j>E;E++){q.animate(k,w,z.easing).animate(y,w,z.easing)}q.animate(k,w,z.easing).animate(A,w/2,z.easing).queue(v),b.effects.unshift(q,x,t+1)}),b.effects.define("slide","show",function(v,q){var A,m,k=b(this),y={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},j=v.mode,p=v.direction||"left",t="up"===p||"down"===p?"top":"left",x="up"===p||"left"===p,z=v.distance||k["top"===t?"outerHeight":"outerWidth"](!0),w={};b.effects.createPlaceholder(k),A=k.cssClip(),m=k.position()[t],w[t]=(x?-1:1)*z+m,w.clip=k.cssClip(),w.clip[y[p][1]]=w.clip[y[p][0]],"show"===j&&(k.cssClip(w.clip),k.css(t,w[t]),w.clip=A,w[t]=m),k.animate(w,{queue:!1,duration:v.duration,easing:v.easing,complete:q})});var f;b.uiBackCompat!==!1&&(f=b.effects.define("transfer",function(j,h){b(this).transfer(j,h)}))});