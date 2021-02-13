/*Raphael JS*/
!function t(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.Raphael=r():e.Raphael=r()}(this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){var i,n;i=[r(1),r(3),r(4)],n=function(t){return t}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,r){var i,n;i=[r(2)],n=function(t){function e(r){if(e.is(r,"function"))return w?r():t.on("raphael.DOMload",r);if(e.is(r,Q))return e._engine.create[z](e,r.splice(0,3+e.is(r[0],$))).add(r);var i=Array.prototype.slice.call(arguments,0);if(e.is(i[i.length-1],"function")){var n=i.pop();return w?n.call(e._engine.create[z](e,i)):t.on("raphael.DOMload",function(){n.call(e._engine.create[z](e,i))})}return e._engine.create[z](e,arguments)}function r(t){if("function"==typeof t||Object(t)!==t)return t;var e=new t.constructor;for(var i in t)t[A](i)&&(e[i]=r(t[i]));return e}function i(t,e){for(var r=0,i=t.length;r<i;r++)if(t[r]===e)return t.push(t.splice(r,1)[0])}function n(t,e,r){function n(){var a=Array.prototype.slice.call(arguments,0),s=a.join("␀"),o=n.cache=n.cache||{},l=n.count=n.count||[];return o[A](s)?(i(l,s),r?r(o[s]):o[s]):(l.length>=1e3&&delete o[l.shift()],l.push(s),o[s]=t[z](e,a),r?r(o[s]):o[s])}return n}function a(){return this.hex}function s(t,e){for(var r=[],i=0,n=t.length;n-2*!e>i;i+=2){var a=[{x:+t[i-2],y:+t[i-1]},{x:+t[i],y:+t[i+1]},{x:+t[i+2],y:+t[i+3]},{x:+t[i+4],y:+t[i+5]}];e?i?n-4==i?a[3]={x:+t[0],y:+t[1]}:n-2==i&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[n-2],y:+t[n-1]}:n-4==i?a[3]=a[2]:i||(a[0]={x:+t[i],y:+t[i+1]}),r.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return r}function o(t,e,r,i,n){var a=-3*e+9*r-9*i+3*n,s=t*a+6*e-12*r+6*i;return t*s-3*e+3*r}function l(t,e,r,i,n,a,s,l,h){null==h&&(h=1),h=h>1?1:h<0?0:h;for(var u=h/2,c=12,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],p=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],d=0,g=0;g<c;g++){var v=u*f[g]+u,x=o(v,t,r,n,s),y=o(v,e,i,a,l),m=x*x+y*y;d+=p[g]*Y.sqrt(m)}return u*d}function h(t,e,r,i,n,a,s,o,h){if(!(h<0||l(t,e,r,i,n,a,s,o)<h)){var u=1,c=u/2,f=u-c,p,d=.01;for(p=l(t,e,r,i,n,a,s,o,f);H(p-h)>d;)c/=2,f+=(p<h?1:-1)*c,p=l(t,e,r,i,n,a,s,o,f);return f}}function u(t,e,r,i,n,a,s,o){if(!(W(t,r)<G(n,s)||G(t,r)>W(n,s)||W(e,i)<G(a,o)||G(e,i)>W(a,o))){var l=(t*i-e*r)*(n-s)-(t-r)*(n*o-a*s),h=(t*i-e*r)*(a-o)-(e-i)*(n*o-a*s),u=(t-r)*(a-o)-(e-i)*(n-s);if(u){var c=l/u,f=h/u,p=+c.toFixed(2),d=+f.toFixed(2);if(!(p<+G(t,r).toFixed(2)||p>+W(t,r).toFixed(2)||p<+G(n,s).toFixed(2)||p>+W(n,s).toFixed(2)||d<+G(e,i).toFixed(2)||d>+W(e,i).toFixed(2)||d<+G(a,o).toFixed(2)||d>+W(a,o).toFixed(2)))return{x:c,y:f}}}}function c(t,e){return p(t,e)}function f(t,e){return p(t,e,1)}function p(t,r,i){var n=e.bezierBBox(t),a=e.bezierBBox(r);if(!e.isBBoxIntersect(n,a))return i?0:[];for(var s=l.apply(0,t),o=l.apply(0,r),h=W(~~(s/5),1),c=W(~~(o/5),1),f=[],p=[],d={},g=i?0:[],v=0;v<h+1;v++){var x=e.findDotsAtSegment.apply(e,t.concat(v/h));f.push({x:x.x,y:x.y,t:v/h})}for(v=0;v<c+1;v++)x=e.findDotsAtSegment.apply(e,r.concat(v/c)),p.push({x:x.x,y:x.y,t:v/c});for(v=0;v<h;v++)for(var y=0;y<c;y++){var m=f[v],b=f[v+1],_=p[y],w=p[y+1],k=H(b.x-m.x)<.001?"y":"x",B=H(w.x-_.x)<.001?"y":"x",C=u(m.x,m.y,b.x,b.y,_.x,_.y,w.x,w.y);if(C){if(d[C.x.toFixed(4)]==C.y.toFixed(4))continue;d[C.x.toFixed(4)]=C.y.toFixed(4);var S=m.t+H((C[k]-m[k])/(b[k]-m[k]))*(b.t-m.t),A=_.t+H((C[B]-_[B])/(w[B]-_[B]))*(w.t-_.t);S>=0&&S<=1.001&&A>=0&&A<=1.001&&(i?g++:g.push({x:C.x,y:C.y,t1:G(S,1),t2:G(A,1)}))}}return g}function d(t,r,i){t=e._path2curve(t),r=e._path2curve(r);for(var n,a,s,o,l,h,u,c,f,d,g=i?0:[],v=0,x=t.length;v<x;v++){var y=t[v];if("M"==y[0])n=l=y[1],a=h=y[2];else{"C"==y[0]?(f=[n,a].concat(y.slice(1)),n=f[6],a=f[7]):(f=[n,a,n,a,l,h,l,h],n=l,a=h);for(var m=0,b=r.length;m<b;m++){var _=r[m];if("M"==_[0])s=u=_[1],o=c=_[2];else{"C"==_[0]?(d=[s,o].concat(_.slice(1)),s=d[6],o=d[7]):(d=[s,o,s,o,u,c,u,c],s=u,o=c);var w=p(f,d,i);if(i)g+=w;else{for(var k=0,B=w.length;k<B;k++)w[k].segment1=v,w[k].segment2=m,w[k].bez1=f,w[k].bez2=d;g=g.concat(w)}}}}}return g}function g(t,e,r,i,n,a){null!=t?(this.a=+t,this.b=+e,this.c=+r,this.d=+i,this.e=+n,this.f=+a):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function v(){return this.x+j+this.y}function x(){return this.x+j+this.y+j+this.width+" × "+this.height}function y(t,e,r,i,n,a){function s(t){return((c*t+u)*t+h)*t}function o(t,e){var r=l(t,e);return((d*r+p)*r+f)*r}function l(t,e){var r,i,n,a,o,l;for(n=t,l=0;l<8;l++){if(a=s(n)-t,H(a)<e)return n;if(o=(3*c*n+2*u)*n+h,H(o)<1e-6)break;n-=a/o}if(r=0,i=1,n=t,n<r)return r;if(n>i)return i;for(;r<i;){if(a=s(n),H(a-t)<e)return n;t>a?r=n:i=n,n=(i-r)/2+r}return n}var h=3*e,u=3*(i-e)-h,c=1-h-u,f=3*r,p=3*(n-r)-f,d=1-f-p;return o(t,1/(200*a))}function m(t,e){var r=[],i={};if(this.ms=e,this.times=1,t){for(var n in t)t[A](n)&&(i[ht(n)]=t[n],r.push(ht(n)));r.sort(Bt)}this.anim=i,this.top=r[r.length-1],this.percents=r}function b(r,i,n,a,s,o){n=ht(n);var l,h,u,c=[],f,p,d,v=r.ms,x={},m={},b={};if(a)for(w=0,B=Ee.length;w<B;w++){var _=Ee[w];if(_.el.id==i.id&&_.anim==r){_.percent!=n?(Ee.splice(w,1),u=1):h=_,i.attr(_.totalOrigin);break}}else a=+m;for(var w=0,B=r.percents.length;w<B;w++){if(r.percents[w]==n||r.percents[w]>a*r.top){n=r.percents[w],p=r.percents[w-1]||0,v=v/r.top*(n-p),f=r.percents[w+1],l=r.anim[n];break}a&&i.attr(r.anim[r.percents[w]])}if(l){if(h)h.initstatus=a,h.start=new Date-h.ms*a;else{for(var C in l)if(l[A](C)&&(pt[A](C)||i.paper.customAttributes[A](C)))switch(x[C]=i.attr(C),null==x[C]&&(x[C]=ft[C]),m[C]=l[C],pt[C]){case $:b[C]=(m[C]-x[C])/v;break;case"colour":x[C]=e.getRGB(x[C]);var S=e.getRGB(m[C]);b[C]={r:(S.r-x[C].r)/v,g:(S.g-x[C].g)/v,b:(S.b-x[C].b)/v};break;case"path":var T=Qt(x[C],m[C]),E=T[1];for(x[C]=T[0],b[C]=[],w=0,B=x[C].length;w<B;w++){b[C][w]=[0];for(var M=1,N=x[C][w].length;M<N;M++)b[C][w][M]=(E[w][M]-x[C][w][M])/v}break;case"transform":var L=i._,z=le(L[C],m[C]);if(z)for(x[C]=z.from,m[C]=z.to,b[C]=[],b[C].real=!0,w=0,B=x[C].length;w<B;w++)for(b[C][w]=[x[C][w][0]],M=1,N=x[C][w].length;M<N;M++)b[C][w][M]=(m[C][w][M]-x[C][w][M])/v;else{var F=i.matrix||new g,R={_:{transform:L.transform},getBBox:function(){return i.getBBox(1)}};x[C]=[F.a,F.b,F.c,F.d,F.e,F.f],se(R,m[C]),m[C]=R._.transform,b[C]=[(R.matrix.a-F.a)/v,(R.matrix.b-F.b)/v,(R.matrix.c-F.c)/v,(R.matrix.d-F.d)/v,(R.matrix.e-F.e)/v,(R.matrix.f-F.f)/v]}break;case"csv":var j=I(l[C])[q](k),D=I(x[C])[q](k);if("clip-rect"==C)for(x[C]=D,b[C]=[],w=D.length;w--;)b[C][w]=(j[w]-x[C][w])/v;m[C]=j;break;default:for(j=[][P](l[C]),D=[][P](x[C]),b[C]=[],w=i.paper.customAttributes[C].length;w--;)b[C][w]=((j[w]||0)-(D[w]||0))/v}var V=l.easing,O=e.easing_formulas[V];if(!O)if(O=I(V).match(st),O&&5==O.length){var Y=O;O=function(t){return y(t,+Y[1],+Y[2],+Y[3],+Y[4],v)}}else O=St;if(d=l.start||r.start||+new Date,_={anim:r,percent:n,timestamp:d,start:d+(r.del||0),status:0,initstatus:a||0,stop:!1,ms:v,easing:O,from:x,diff:b,to:m,el:i,callback:l.callback,prev:p,next:f,repeat:o||r.times,origin:i.attr(),totalOrigin:s},Ee.push(_),a&&!h&&!u&&(_.stop=!0,_.start=new Date-v*a,1==Ee.length))return Ne();u&&(_.start=new Date-_.ms*a),1==Ee.length&&Me(Ne)}t("raphael.anim.start."+i.id,i,r)}}function _(t){for(var e=0;e<Ee.length;e++)Ee[e].el.paper==t&&Ee.splice(e--,1)}e.version="2.2.0",e.eve=t;var w,k=/[, ]+/,B={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},C=/\{(\d+)\}/g,S="prototype",A="hasOwnProperty",T={doc:document,win:window},E={was:Object.prototype[A].call(T.win,"Raphael"),is:T.win.Raphael},M=function(){this.ca=this.customAttributes={}},N,L="appendChild",z="apply",P="concat",F="ontouchstart"in T.win||T.win.DocumentTouch&&T.doc instanceof DocumentTouch,R="",j=" ",I=String,q="split",D="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[q](j),V={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},O=I.prototype.toLowerCase,Y=Math,W=Y.max,G=Y.min,H=Y.abs,X=Y.pow,U=Y.PI,$="number",Z="string",Q="array",J="toString",K="fill",tt=Object.prototype.toString,et={},rt="push",it=e._ISURL=/^url\(['"]?(.+?)['"]?\)$/i,nt=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,at={NaN:1,Infinity:1,"-Infinity":1},st=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,ot=Y.round,lt="setAttribute",ht=parseFloat,ut=parseInt,ct=I.prototype.toUpperCase,ft=e._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Oswald"',"font-family":'"Oswald"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0,"class":""},pt=e._availableAnimAttrs={blur:$,"clip-rect":"csv",cx:$,cy:$,fill:"colour","fill-opacity":$,"font-size":$,height:$,opacity:$,path:"path",r:$,rx:$,ry:$,stroke:"colour","stroke-opacity":$,"stroke-width":$,transform:"transform",width:$,x:$,y:$},dt=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,gt=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,vt={hs:1,rg:1},xt=/,?([achlmqrstvxz]),?/gi,yt=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,mt=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,bt=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,_t=e._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,wt={},kt=function(t,e){return t.key-e.key},Bt=function(t,e){return ht(t)-ht(e)},Ct=function(){},St=function(t){return t},At=e._rectPath=function(t,e,r,i,n){return n?[["M",t+n,e],["l",r-2*n,0],["a",n,n,0,0,1,n,n],["l",0,i-2*n],["a",n,n,0,0,1,-n,n],["l",2*n-r,0],["a",n,n,0,0,1,-n,-n],["l",0,2*n-i],["a",n,n,0,0,1,n,-n],["z"]]:[["M",t,e],["l",r,0],["l",0,i],["l",-r,0],["z"]]},Tt=function(t,e,r,i){return null==i&&(i=r),[["M",t,e],["m",0,-i],["a",r,i,0,1,1,0,2*i],["a",r,i,0,1,1,0,-2*i],["z"]]},Et=e._getPath={path:function(t){return t.attr("path")},circle:function(t){var e=t.attrs;return Tt(e.cx,e.cy,e.r)},ellipse:function(t){var e=t.attrs;return Tt(e.cx,e.cy,e.rx,e.ry)},rect:function(t){var e=t.attrs;return At(e.x,e.y,e.width,e.height,e.r)},image:function(t){var e=t.attrs;return At(e.x,e.y,e.width,e.height)},text:function(t){var e=t._getBBox();return At(e.x,e.y,e.width,e.height)},set:function(t){var e=t._getBBox();return At(e.x,e.y,e.width,e.height)}},Mt=e.mapPath=function(t,e){if(!e)return t;var r,i,n,a,s,o,l;for(t=Qt(t),n=0,s=t.length;n<s;n++)for(l=t[n],a=1,o=l.length;a<o;a+=2)r=e.x(l[a],l[a+1]),i=e.y(l[a],l[a+1]),l[a]=r,l[a+1]=i;return t};if(e._g=T,e.type=T.win.SVGAngle||T.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==e.type){var Nt=T.doc.createElement("div"),Lt;if(Nt.innerHTML='<v:shape adj="1"/>',Lt=Nt.firstChild,Lt.style.behavior="url(#default#VML)",!Lt||"object"!=typeof Lt.adj)return e.type=R;Nt=null}e.svg=!(e.vml="VML"==e.type),e._Paper=M,e.fn=N=M.prototype=e.prototype,e._id=0,e.is=function(t,e){return e=O.call(e),"finite"==e?!at[A](+t):"array"==e?t instanceof Array:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||"array"==e&&Array.isArray&&Array.isArray(t)||tt.call(t).slice(8,-1).toLowerCase()==e},e.angle=function(t,r,i,n,a,s){if(null==a){var o=t-i,l=r-n;return o||l?(180+180*Y.atan2(-l,-o)/U+360)%360:0}return e.angle(t,r,a,s)-e.angle(i,n,a,s)},e.rad=function(t){return t%360*U/180},e.deg=function(t){return Math.round(180*t/U%360*1e3)/1e3},e.snapTo=function(t,r,i){if(i=e.is(i,"finite")?i:10,e.is(t,Q)){for(var n=t.length;n--;)if(H(t[n]-r)<=i)return t[n]}else{t=+t;var a=r%t;if(a<i)return r-a;if(a>t-i)return r-a+t}return r};var zt=e.createUUID=function(t,e){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t,e).toUpperCase()}}(/[xy]/g,function(t){var e=16*Y.random()|0,r="x"==t?e:3&e|8;return r.toString(16)});e.setWindow=function(r){t("raphael.setWindow",e,T.win,r),T.win=r,T.doc=T.win.document,e._engine.initWin&&e._engine.initWin(T.win)};var Pt=function(t){if(e.vml){var r=/^\s+|\s+$/g,i;try{var a=new ActiveXObject("htmlfile");a.write("<body>"),a.close(),i=a.body}catch(s){i=createPopup().document.body}var o=i.createTextRange();Pt=n(function(t){try{i.style.color=I(t).replace(r,R);var e=o.queryCommandValue("ForeColor");return e=(255&e)<<16|65280&e|(16711680&e)>>>16,"#"+("000000"+e.toString(16)).slice(-6)}catch(n){return"none"}})}else{var l=T.doc.createElement("i");l.title="Raphaël Colour Picker",l.style.display="none",T.doc.body.appendChild(l),Pt=n(function(t){return l.style.color=t,T.doc.defaultView.getComputedStyle(l,R).getPropertyValue("color")})}return Pt(t)},Ft=function(){return"hsb("+[this.h,this.s,this.b]+")"},Rt=function(){return"hsl("+[this.h,this.s,this.l]+")"},jt=function(){return this.hex},It=function(t,r,i){if(null==r&&e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t&&(i=t.b,r=t.g,t=t.r),null==r&&e.is(t,Z)){var n=e.getRGB(t);t=n.r,r=n.g,i=n.b}return(t>1||r>1||i>1)&&(t/=255,r/=255,i/=255),[t,r,i]},qt=function(t,r,i,n){t*=255,r*=255,i*=255;var a={r:t,g:r,b:i,hex:e.rgb(t,r,i),toString:jt};return e.is(n,"finite")&&(a.opacity=n),a};e.color=function(t){var r;return e.is(t,"object")&&"h"in t&&"s"in t&&"b"in t?(r=e.hsb2rgb(t),t.r=r.r,t.g=r.g,t.b=r.b,t.hex=r.hex):e.is(t,"object")&&"h"in t&&"s"in t&&"l"in t?(r=e.hsl2rgb(t),t.r=r.r,t.g=r.g,t.b=r.b,t.hex=r.hex):(e.is(t,"string")&&(t=e.getRGB(t)),e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t?(r=e.rgb2hsl(t),t.h=r.h,t.s=r.s,t.l=r.l,r=e.rgb2hsb(t),t.v=r.b):(t={hex:"none"},t.r=t.g=t.b=t.h=t.s=t.v=t.l=-1)),t.toString=jt,t},e.hsb2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(r=t.b,e=t.s,i=t.o,t=t.h),t*=360;var n,a,s,o,l;return t=t%360/60,l=r*e,o=l*(1-H(t%2-1)),n=a=s=r-l,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],qt(n,a,s,i)},e.hsl2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(r=t.l,e=t.s,t=t.h),(t>1||e>1||r>1)&&(t/=360,e/=100,r/=100),t*=360;var n,a,s,o,l;return t=t%360/60,l=2*e*(r<.5?r:1-r),o=l*(1-H(t%2-1)),n=a=s=r-l/2,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],qt(n,a,s,i)},e.rgb2hsb=function(t,e,r){r=It(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s;return a=W(t,e,r),s=a-G(t,e,r),i=0==s?null:a==t?(e-r)/s:a==e?(r-t)/s+2:(t-e)/s+4,i=(i+360)%6*60/360,n=0==s?0:s/a,{h:i,s:n,b:a,toString:Ft}},e.rgb2hsl=function(t,e,r){r=It(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s,o,l;return s=W(t,e,r),o=G(t,e,r),l=s-o,i=0==l?null:s==t?(e-r)/l:s==e?(r-t)/l+2:(t-e)/l+4,i=(i+360)%6*60/360,a=(s+o)/2,n=0==l?0:a<.5?l/(2*a):l/(2-2*a),{h:i,s:n,l:a,toString:Rt}},e._path2string=function(){return this.join(",").replace(xt,"$1")};var Dt=e._preload=function(t,e){var r=T.doc.createElement("img");r.style.cssText="position:absolute;left:-9999em;top:-9999em",r.onload=function(){e.call(this),this.onload=null,T.doc.body.removeChild(this)},r.onerror=function(){T.doc.body.removeChild(this)},T.doc.body.appendChild(r),r.src=t};e.getRGB=n(function(t){if(!t||(t=I(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:a};if("none"==t)return{r:-1,g:-1,b:-1,hex:"none",toString:a};!(vt[A](t.toLowerCase().substring(0,2))||"#"==t.charAt())&&(t=Pt(t));var r,i,n,s,o,l,h,u=t.match(nt);return u?(u[2]&&(s=ut(u[2].substring(5),16),n=ut(u[2].substring(3,5),16),i=ut(u[2].substring(1,3),16)),u[3]&&(s=ut((l=u[3].charAt(3))+l,16),n=ut((l=u[3].charAt(2))+l,16),i=ut((l=u[3].charAt(1))+l,16)),u[4]&&(h=u[4][q](gt),i=ht(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),n=ht(h[1]),"%"==h[1].slice(-1)&&(n*=2.55),s=ht(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),"rgba"==u[1].toLowerCase().slice(0,4)&&(o=ht(h[3])),h[3]&&"%"==h[3].slice(-1)&&(o/=100)),u[5]?(h=u[5][q](gt),i=ht(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),n=ht(h[1]),"%"==h[1].slice(-1)&&(n*=2.55),s=ht(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),("deg"==h[0].slice(-3)||"°"==h[0].slice(-1))&&(i/=360),"hsba"==u[1].toLowerCase().slice(0,4)&&(o=ht(h[3])),h[3]&&"%"==h[3].slice(-1)&&(o/=100),e.hsb2rgb(i,n,s,o)):u[6]?(h=u[6][q](gt),i=ht(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),n=ht(h[1]),"%"==h[1].slice(-1)&&(n*=2.55),s=ht(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),("deg"==h[0].slice(-3)||"°"==h[0].slice(-1))&&(i/=360),"hsla"==u[1].toLowerCase().slice(0,4)&&(o=ht(h[3])),h[3]&&"%"==h[3].slice(-1)&&(o/=100),e.hsl2rgb(i,n,s,o)):(u={r:i,g:n,b:s,toString:a},u.hex="#"+(16777216|s|n<<8|i<<16).toString(16).slice(1),e.is(o,"finite")&&(u.opacity=o),u)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:a}},e),e.hsb=n(function(t,r,i){return e.hsb2rgb(t,r,i).hex}),e.hsl=n(function(t,r,i){return e.hsl2rgb(t,r,i).hex}),e.rgb=n(function(t,e,r){function i(t){return t+.5|0}return"#"+(16777216|i(r)|i(e)<<8|i(t)<<16).toString(16).slice(1)}),e.getColor=function(t){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:t||.75},r=this.hsb2rgb(e.h,e.s,e.b);return e.h+=.075,e.h>1&&(e.h=0,e.s-=.2,e.s<=0&&(this.getColor.start={h:0,s:1,b:e.b})),r.hex},e.getColor.reset=function(){delete this.start},e.parsePathString=function(t){if(!t)return null;var r=Vt(t);if(r.arr)return Yt(r.arr);var i={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},n=[];return e.is(t,Q)&&e.is(t[0],Q)&&(n=Yt(t)),n.length||I(t).replace(yt,function(t,e,r){var a=[],s=e.toLowerCase();if(r.replace(bt,function(t,e){e&&a.push(+e)}),"m"==s&&a.length>2&&(n.push([e][P](a.splice(0,2))),s="l",e="m"==e?"l":"L"),"r"==s)n.push([e][P](a));else for(;a.length>=i[s]&&(n.push([e][P](a.splice(0,i[s]))),i[s]););}),n.toString=e._path2string,r.arr=Yt(n),n},e.parseTransformString=n(function(t){if(!t)return null;var r={r:3,s:4,t:2,m:6},i=[];return e.is(t,Q)&&e.is(t[0],Q)&&(i=Yt(t)),i.length||I(t).replace(mt,function(t,e,r){var n=[],a=O.call(e);r.replace(bt,function(t,e){e&&n.push(+e)}),i.push([e][P](n))}),i.toString=e._path2string,i});var Vt=function(t){var e=Vt.ps=Vt.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var r in e)e[A](r)&&r!=t&&(e[r].sleep--,!e[r].sleep&&delete e[r])}),e[t]};e.findDotsAtSegment=function(t,e,r,i,n,a,s,o,l){var h=1-l,u=X(h,3),c=X(h,2),f=l*l,p=f*l,d=u*t+3*c*l*r+3*h*l*l*n+p*s,g=u*e+3*c*l*i+3*h*l*l*a+p*o,v=t+2*l*(r-t)+f*(n-2*r+t),x=e+2*l*(i-e)+f*(a-2*i+e),y=r+2*l*(n-r)+f*(s-2*n+r),m=i+2*l*(a-i)+f*(o-2*a+i),b=h*t+l*r,_=h*e+l*i,w=h*n+l*s,k=h*a+l*o,B=90-180*Y.atan2(v-y,x-m)/U;return(v>y||x<m)&&(B+=180),{x:d,y:g,m:{x:v,y:x},n:{x:y,y:m},start:{x:b,y:_},end:{x:w,y:k},alpha:B}},e.bezierBBox=function(t,r,i,n,a,s,o,l){e.is(t,"array")||(t=[t,r,i,n,a,s,o,l]);var h=Zt.apply(null,t);return{x:h.min.x,y:h.min.y,x2:h.max.x,y2:h.max.y,width:h.max.x-h.min.x,height:h.max.y-h.min.y}},e.isPointInsideBBox=function(t,e,r){return e>=t.x&&e<=t.x2&&r>=t.y&&r<=t.y2},e.isBBoxIntersect=function(t,r){var i=e.isPointInsideBBox;return i(r,t.x,t.y)||i(r,t.x2,t.y)||i(r,t.x,t.y2)||i(r,t.x2,t.y2)||i(t,r.x,r.y)||i(t,r.x2,r.y)||i(t,r.x,r.y2)||i(t,r.x2,r.y2)||(t.x<r.x2&&t.x>r.x||r.x<t.x2&&r.x>t.x)&&(t.y<r.y2&&t.y>r.y||r.y<t.y2&&r.y>t.y)},e.pathIntersection=function(t,e){return d(t,e)},e.pathIntersectionNumber=function(t,e){return d(t,e,1)},e.isPointInsidePath=function(t,r,i){var n=e.pathBBox(t);return e.isPointInsideBBox(n,r,i)&&d(t,[["M",r,i],["H",n.x2+10]],1)%2==1},e._removedFactory=function(e){return function(){t("raphael.log",null,"Raphaël: you are calling to method “"+e+"” of removed object",e)}};var Ot=e.pathBBox=function(t){var e=Vt(t);if(e.bbox)return r(e.bbox);if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0};t=Qt(t);for(var i=0,n=0,a=[],s=[],o,l=0,h=t.length;l<h;l++)if(o=t[l],"M"==o[0])i=o[1],n=o[2],a.push(i),s.push(n);else{var u=Zt(i,n,o[1],o[2],o[3],o[4],o[5],o[6]);a=a[P](u.min.x,u.max.x),s=s[P](u.min.y,u.max.y),i=o[5],n=o[6]}var c=G[z](0,a),f=G[z](0,s),p=W[z](0,a),d=W[z](0,s),g=p-c,v=d-f,x={x:c,y:f,x2:p,y2:d,width:g,height:v,cx:c+g/2,cy:f+v/2};return e.bbox=r(x),x},Yt=function(t){var i=r(t);return i.toString=e._path2string,i},Wt=e._pathToRelative=function(t){var r=Vt(t);if(r.rel)return Yt(r.rel);e.is(t,Q)&&e.is(t&&t[0],Q)||(t=e.parsePathString(t));var i=[],n=0,a=0,s=0,o=0,l=0;"M"==t[0][0]&&(n=t[0][1],a=t[0][2],s=n,o=a,l++,i.push(["M",n,a]));for(var h=l,u=t.length;h<u;h++){var c=i[h]=[],f=t[h];if(f[0]!=O.call(f[0]))switch(c[0]=O.call(f[0]),c[0]){case"a":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]-n).toFixed(3),c[7]=+(f[7]-a).toFixed(3);break;case"v":c[1]=+(f[1]-a).toFixed(3);break;case"m":s=f[1],o=f[2];default:for(var p=1,d=f.length;p<d;p++)c[p]=+(f[p]-(p%2?n:a)).toFixed(3)}else{c=i[h]=[],"m"==f[0]&&(s=f[1]+n,o=f[2]+a);for(var g=0,v=f.length;g<v;g++)i[h][g]=f[g]}var x=i[h].length;switch(i[h][0]){case"z":n=s,a=o;break;case"h":n+=+i[h][x-1];break;case"v":a+=+i[h][x-1];break;default:n+=+i[h][x-2],a+=+i[h][x-1]}}return i.toString=e._path2string,r.rel=Yt(i),i},Gt=e._pathToAbsolute=function(t){var r=Vt(t);if(r.abs)return Yt(r.abs);if(e.is(t,Q)&&e.is(t&&t[0],Q)||(t=e.parsePathString(t)),!t||!t.length)return[["M",0,0]];var i=[],n=0,a=0,o=0,l=0,h=0;"M"==t[0][0]&&(n=+t[0][1],a=+t[0][2],o=n,l=a,h++,i[0]=["M",n,a]);for(var u=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),c,f,p=h,d=t.length;p<d;p++){if(i.push(c=[]),f=t[p],f[0]!=ct.call(f[0]))switch(c[0]=ct.call(f[0]),c[0]){case"A":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]+n),c[7]=+(f[7]+a);break;case"V":c[1]=+f[1]+a;break;case"H":c[1]=+f[1]+n;break;case"R":for(var g=[n,a][P](f.slice(1)),v=2,x=g.length;v<x;v++)g[v]=+g[v]+n,g[++v]=+g[v]+a;i.pop(),i=i[P](s(g,u));break;case"M":o=+f[1]+n,l=+f[2]+a;default:for(v=1,x=f.length;v<x;v++)c[v]=+f[v]+(v%2?n:a)}else if("R"==f[0])g=[n,a][P](f.slice(1)),i.pop(),i=i[P](s(g,u)),c=["R"][P](f.slice(-2));else for(var y=0,m=f.length;y<m;y++)c[y]=f[y];switch(c[0]){case"Z":n=o,a=l;break;case"H":n=c[1];break;case"V":a=c[1];break;case"M":o=c[c.length-2],l=c[c.length-1];default:n=c[c.length-2],a=c[c.length-1]}}return i.toString=e._path2string,r.abs=Yt(i),i},Ht=function(t,e,r,i){return[t,e,r,i,r,i]},Xt=function(t,e,r,i,n,a){var s=1/3,o=2/3;return[s*t+o*r,s*e+o*i,s*n+o*r,s*a+o*i,n,a]},Ut=function(t,e,r,i,a,s,o,l,h,u){var c=120*U/180,f=U/180*(+a||0),p=[],d,g=n(function(t,e,r){var i=t*Y.cos(r)-e*Y.sin(r),n=t*Y.sin(r)+e*Y.cos(r);return{x:i,y:n}});if(u)S=u[0],A=u[1],B=u[2],C=u[3];else{d=g(t,e,-f),t=d.x,e=d.y,d=g(l,h,-f),l=d.x,h=d.y;var v=Y.cos(U/180*a),x=Y.sin(U/180*a),y=(t-l)/2,m=(e-h)/2,b=y*y/(r*r)+m*m/(i*i);b>1&&(b=Y.sqrt(b),r=b*r,i=b*i);var _=r*r,w=i*i,k=(s==o?-1:1)*Y.sqrt(H((_*w-_*m*m-w*y*y)/(_*m*m+w*y*y))),B=k*r*m/i+(t+l)/2,C=k*-i*y/r+(e+h)/2,S=Y.asin(((e-C)/i).toFixed(9)),A=Y.asin(((h-C)/i).toFixed(9));S=t<B?U-S:S,A=l<B?U-A:A,S<0&&(S=2*U+S),A<0&&(A=2*U+A),o&&S>A&&(S-=2*U),!o&&A>S&&(A-=2*U)}var T=A-S;if(H(T)>c){var E=A,M=l,N=h;A=S+c*(o&&A>S?1:-1),l=B+r*Y.cos(A),h=C+i*Y.sin(A),p=Ut(l,h,r,i,a,0,o,M,N,[A,E,B,C])}T=A-S;var L=Y.cos(S),z=Y.sin(S),F=Y.cos(A),R=Y.sin(A),j=Y.tan(T/4),I=4/3*r*j,D=4/3*i*j,V=[t,e],O=[t+I*z,e-D*L],W=[l+I*R,h-D*F],G=[l,h];if(O[0]=2*V[0]-O[0],O[1]=2*V[1]-O[1],u)return[O,W,G][P](p);p=[O,W,G][P](p).join()[q](",");for(var X=[],$=0,Z=p.length;$<Z;$++)X[$]=$%2?g(p[$-1],p[$],f).y:g(p[$],p[$+1],f).x;return X},$t=function(t,e,r,i,n,a,s,o,l){var h=1-l;return{x:X(h,3)*t+3*X(h,2)*l*r+3*h*l*l*n+X(l,3)*s,y:X(h,3)*e+3*X(h,2)*l*i+3*h*l*l*a+X(l,3)*o}},Zt=n(function(t,e,r,i,n,a,s,o){var l=n-2*r+t-(s-2*n+r),h=2*(r-t)-2*(n-r),u=t-r,c=(-h+Y.sqrt(h*h-4*l*u))/2/l,f=(-h-Y.sqrt(h*h-4*l*u))/2/l,p=[e,o],d=[t,s],g;return H(c)>"1e12"&&(c=.5),H(f)>"1e12"&&(f=.5),c>0&&c<1&&(g=$t(t,e,r,i,n,a,s,o,c),d.push(g.x),p.push(g.y)),f>0&&f<1&&(g=$t(t,e,r,i,n,a,s,o,f),d.push(g.x),p.push(g.y)),l=a-2*i+e-(o-2*a+i),h=2*(i-e)-2*(a-i),u=e-i,c=(-h+Y.sqrt(h*h-4*l*u))/2/l,f=(-h-Y.sqrt(h*h-4*l*u))/2/l,H(c)>"1e12"&&(c=.5),H(f)>"1e12"&&(f=.5),c>0&&c<1&&(g=$t(t,e,r,i,n,a,s,o,c),d.push(g.x),p.push(g.y)),f>0&&f<1&&(g=$t(t,e,r,i,n,a,s,o,f),d.push(g.x),p.push(g.y)),{min:{x:G[z](0,d),y:G[z](0,p)},max:{x:W[z](0,d),y:W[z](0,p)}}}),Qt=e._path2curve=n(function(t,e){var r=!e&&Vt(t);if(!e&&r.curve)return Yt(r.curve);for(var i=Gt(t),n=e&&Gt(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o=(function(t,e,r){var i,n,a={T:1,Q:1};if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in a)&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"][P](Ut[z](0,[e.x,e.y][P](t.slice(1))));break;case"S":"C"==r||"S"==r?(i=2*e.x-e.bx,n=2*e.y-e.by):(i=e.x,n=e.y),t=["C",i,n][P](t.slice(1));break;case"T":"Q"==r||"T"==r?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"][P](Xt(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"][P](Xt(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"][P](Ht(e.x,e.y,t[1],t[2]));break;case"H":t=["C"][P](Ht(e.x,e.y,t[1],e.y));break;case"V":t=["C"][P](Ht(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"][P](Ht(e.x,e.y,e.X,e.Y))}return t}),l=function(t,e){if(t[e].length>7){t[e].shift();for(var r=t[e];r.length;)u[e]="A",n&&(c[e]="A"),t.splice(e++,0,["C"][P](r.splice(0,6)));t.splice(e,1),g=W(i.length,n&&n.length||0)}},h=function(t,e,r,a,s){t&&e&&"M"==t[s][0]&&"M"!=e[s][0]&&(e.splice(s,0,["M",a.x,a.y]),r.bx=0,r.by=0,r.x=t[s][1],r.y=t[s][2],g=W(i.length,n&&n.length||0))},u=[],c=[],f="",p="",d=0,g=W(i.length,n&&n.length||0);d<g;d++){i[d]&&(f=i[d][0]),"C"!=f&&(u[d]=f,d&&(p=u[d-1])),i[d]=o(i[d],a,p),"A"!=u[d]&&"C"==f&&(u[d]="C"),l(i,d),n&&(n[d]&&(f=n[d][0]),"C"!=f&&(c[d]=f,d&&(p=c[d-1])),n[d]=o(n[d],s,p),"A"!=c[d]&&"C"==f&&(c[d]="C"),l(n,d)),h(i,n,a,s,d),h(n,i,s,a,d);var v=i[d],x=n&&n[d],y=v.length,m=n&&x.length;a.x=v[y-2],a.y=v[y-1],a.bx=ht(v[y-4])||a.x,a.by=ht(v[y-3])||a.y,s.bx=n&&(ht(x[m-4])||s.x),s.by=n&&(ht(x[m-3])||s.y),s.x=n&&x[m-2],s.y=n&&x[m-1]}return n||(r.curve=Yt(i)),n?[i,n]:i},null,Yt),Jt=e._parseDots=n(function(t){for(var r=[],i=0,n=t.length;i<n;i++){var a={},s=t[i].match(/^([^:]*):?([\d\.]*)/);if(a.color=e.getRGB(s[1]),a.color.error)return null;a.opacity=a.color.opacity,a.color=a.color.hex,s[2]&&(a.offset=s[2]+"%"),r.push(a)}for(i=1,n=r.length-1;i<n;i++)if(!r[i].offset){for(var o=ht(r[i-1].offset||0),l=0,h=i+1;h<n;h++)if(r[h].offset){l=r[h].offset;break}l||(l=100,h=n),l=ht(l);for(var u=(l-o)/(h-i+1);i<h;i++)o+=u,r[i].offset=o+"%"}return r}),Kt=e._tear=function(t,e){t==e.top&&(e.top=t.prev),t==e.bottom&&(e.bottom=t.next),t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next)},te=e._tofront=function(t,e){e.top!==t&&(Kt(t,e),t.next=null,t.prev=e.top,e.top.next=t,e.top=t)},ee=e._toback=function(t,e){e.bottom!==t&&(Kt(t,e),t.next=e.bottom,t.prev=null,e.bottom.prev=t,e.bottom=t)},re=e._insertafter=function(t,e,r){Kt(t,r),e==r.top&&(r.top=t),e.next&&(e.next.prev=t),t.next=e.next,t.prev=e,e.next=t},ie=e._insertbefore=function(t,e,r){Kt(t,r),e==r.bottom&&(r.bottom=t),e.prev&&(e.prev.next=t),t.prev=e.prev,e.prev=t,t.next=e},ne=e.toMatrix=function(t,e){var r=Ot(t),i={_:{transform:R},getBBox:function(){return r}};return se(i,e),i.matrix},ae=e.transformPath=function(t,e){return Mt(t,ne(t,e))},se=e._extractTransform=function(t,r){if(null==r)return t._.transform;r=I(r).replace(/\.{3}|\u2026/g,t._.transform||R);var i=e.parseTransformString(r),n=0,a=0,s=0,o=1,l=1,h=t._,u=new g;if(h.transform=i||[],i)for(var c=0,f=i.length;c<f;c++){var p=i[c],d=p.length,v=I(p[0]).toLowerCase(),x=p[0]!=v,y=x?u.invert():0,m,b,_,w,k;"t"==v&&3==d?x?(m=y.x(0,0),b=y.y(0,0),_=y.x(p[1],p[2]),w=y.y(p[1],p[2]),u.translate(_-m,w-b)):u.translate(p[1],p[2]):"r"==v?2==d?(k=k||t.getBBox(1),u.rotate(p[1],k.x+k.width/2,k.y+k.height/2),n+=p[1]):4==d&&(x?(_=y.x(p[2],p[3]),w=y.y(p[2],p[3]),u.rotate(p[1],_,w)):u.rotate(p[1],p[2],p[3]),n+=p[1]):"s"==v?2==d||3==d?(k=k||t.getBBox(1),u.scale(p[1],p[d-1],k.x+k.width/2,k.y+k.height/2),o*=p[1],l*=p[d-1]):5==d&&(x?(_=y.x(p[3],p[4]),w=y.y(p[3],p[4]),u.scale(p[1],p[2],_,w)):u.scale(p[1],p[2],p[3],p[4]),o*=p[1],l*=p[2]):"m"==v&&7==d&&u.add(p[1],p[2],p[3],p[4],p[5],p[6]),h.dirtyT=1,t.matrix=u}t.matrix=u,h.sx=o,h.sy=l,h.deg=n,h.dx=a=u.e,h.dy=s=u.f,1==o&&1==l&&!n&&h.bbox?(h.bbox.x+=+a,h.bbox.y+=+s):h.dirtyT=1},oe=function(t){var e=t[0];switch(e.toLowerCase()){case"t":return[e,0,0];case"m":return[e,1,0,0,1,0,0];case"r":return 4==t.length?[e,0,t[2],t[3]]:[e,0];case"s":return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]}},le=e._equaliseTransform=function(t,r){r=I(r).replace(/\.{3}|\u2026/g,t),t=e.parseTransformString(t)||[],r=e.parseTransformString(r)||[];for(var i=W(t.length,r.length),n=[],a=[],s=0,o,l,h,u;s<i;s++){if(h=t[s]||oe(r[s]),u=r[s]||oe(h),h[0]!=u[0]||"r"==h[0].toLowerCase()&&(h[2]!=u[2]||h[3]!=u[3])||"s"==h[0].toLowerCase()&&(h[3]!=u[3]||h[4]!=u[4]))return;for(n[s]=[],a[s]=[],o=0,l=W(h.length,u.length);o<l;o++)o in h&&(n[s][o]=h[o]),o in u&&(a[s][o]=u[o])}return{from:n,to:a}};e._getContainer=function(t,r,i,n){var a;if(a=null!=n||e.is(t,"object")?t:T.doc.getElementById(t),null!=a)return a.tagName?null==r?{container:a,width:a.style.pixelWidth||a.offsetWidth,height:a.style.pixelHeight||a.offsetHeight}:{container:a,width:r,height:i}:{container:1,x:t,y:r,width:i,height:n}},e.pathToRelative=Wt,e._engine={},e.path2curve=Qt,e.matrix=function(t,e,r,i,n,a){return new g(t,e,r,i,n,a)},function(t){function r(t){return t[0]*t[0]+t[1]*t[1]}function i(t){var e=Y.sqrt(r(t));t[0]&&(t[0]/=e),t[1]&&(t[1]/=e)}t.add=function(t,e,r,i,n,a){var s=[[],[],[]],o=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],l=[[t,r,n],[e,i,a],[0,0,1]],h,u,c,f;for(t&&t instanceof g&&(l=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),h=0;h<3;h++)for(u=0;u<3;u++){for(f=0,c=0;c<3;c++)f+=o[h][c]*l[c][u];s[h][u]=f}this.a=s[0][0],this.b=s[1][0],this.c=s[0][1],this.d=s[1][1],this.e=s[0][2],this.f=s[1][2]},t.invert=function(){var t=this,e=t.a*t.d-t.b*t.c;return new g(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)},t.clone=function(){return new g(this.a,this.b,this.c,this.d,this.e,this.f)},t.translate=function(t,e){
this.add(1,0,0,1,t,e)},t.scale=function(t,e,r,i){null==e&&(e=t),(r||i)&&this.add(1,0,0,1,r,i),this.add(t,0,0,e,0,0),(r||i)&&this.add(1,0,0,1,-r,-i)},t.rotate=function(t,r,i){t=e.rad(t),r=r||0,i=i||0;var n=+Y.cos(t).toFixed(9),a=+Y.sin(t).toFixed(9);this.add(n,a,-a,n,r,i),this.add(1,0,0,1,-r,-i)},t.x=function(t,e){return t*this.a+e*this.c+this.e},t.y=function(t,e){return t*this.b+e*this.d+this.f},t.get=function(t){return+this[I.fromCharCode(97+t)].toFixed(4)},t.toString=function(){return e.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},t.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},t.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},t.split=function(){var t={};t.dx=this.e,t.dy=this.f;var n=[[this.a,this.c],[this.b,this.d]];t.scalex=Y.sqrt(r(n[0])),i(n[0]),t.shear=n[0][0]*n[1][0]+n[0][1]*n[1][1],n[1]=[n[1][0]-n[0][0]*t.shear,n[1][1]-n[0][1]*t.shear],t.scaley=Y.sqrt(r(n[1])),i(n[1]),t.shear/=t.scaley;var a=-n[0][1],s=n[1][1];return s<0?(t.rotate=e.deg(Y.acos(s)),a<0&&(t.rotate=360-t.rotate)):t.rotate=e.deg(Y.asin(a)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t},t.toTransformString=function(t){var e=t||this[q]();return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?"t"+[e.dx,e.dy]:R)+(1!=e.scalex||1!=e.scaley?"s"+[e.scalex,e.scaley,0,0]:R)+(e.rotate?"r"+[e.rotate,0,0]:R)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(g.prototype);for(var he=function(){this.returnValue=!1},ue=function(){return this.originalEvent.preventDefault()},ce=function(){this.cancelBubble=!0},fe=function(){return this.originalEvent.stopPropagation()},pe=function(t){var e=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,r=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft;return{x:t.clientX+r,y:t.clientY+e}},de=function(){return T.doc.addEventListener?function(t,e,r,i){var n=function(t){var e=pe(t);return r.call(i,t,e.x,e.y)};if(t.addEventListener(e,n,!1),F&&V[e]){var a=function(e){for(var n=pe(e),a=e,s=0,o=e.targetTouches&&e.targetTouches.length;s<o;s++)if(e.targetTouches[s].target==t){e=e.targetTouches[s],e.originalEvent=a,e.preventDefault=ue,e.stopPropagation=fe;break}return r.call(i,e,n.x,n.y)};t.addEventListener(V[e],a,!1)}return function(){return t.removeEventListener(e,n,!1),F&&V[e]&&t.removeEventListener(V[e],a,!1),!0}}:T.doc.attachEvent?function(t,e,r,i){var n=function(t){t=t||T.win.event;var e=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,n=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft,a=t.clientX+n,s=t.clientY+e;return t.preventDefault=t.preventDefault||he,t.stopPropagation=t.stopPropagation||ce,r.call(i,t,a,s)};t.attachEvent("on"+e,n);var a=function(){return t.detachEvent("on"+e,n),!0};return a}:void 0}(),ge=[],ve=function(e){for(var r=e.clientX,i=e.clientY,n=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,a=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft,s,o=ge.length;o--;){if(s=ge[o],F&&e.touches){for(var l=e.touches.length,h;l--;)if(h=e.touches[l],h.identifier==s.el._drag.id){r=h.clientX,i=h.clientY,(e.originalEvent?e.originalEvent:e).preventDefault();break}}else e.preventDefault();var u=s.el.node,c,f=u.nextSibling,p=u.parentNode,d=u.style.display;T.win.opera&&p.removeChild(u),u.style.display="none",c=s.el.paper.getElementByPoint(r,i),u.style.display=d,T.win.opera&&(f?p.insertBefore(u,f):p.appendChild(u)),c&&t("raphael.drag.over."+s.el.id,s.el,c),r+=a,i+=n,t("raphael.drag.move."+s.el.id,s.move_scope||s.el,r-s.el._drag.x,i-s.el._drag.y,r,i,e)}},xe=function(r){e.unmousemove(ve).unmouseup(xe);for(var i=ge.length,n;i--;)n=ge[i],n.el._drag={},t("raphael.drag.end."+n.el.id,n.end_scope||n.start_scope||n.move_scope||n.el,r);ge=[]},ye=e.el={},me=D.length;me--;)!function(t){e[t]=ye[t]=function(r,i){return e.is(r,"function")&&(this.events=this.events||[],this.events.push({name:t,f:r,unbind:de(this.shape||this.node||T.doc,t,r,i||this)})),this},e["un"+t]=ye["un"+t]=function(r){for(var i=this.events||[],n=i.length;n--;)i[n].name!=t||!e.is(r,"undefined")&&i[n].f!=r||(i[n].unbind(),i.splice(n,1),!i.length&&delete this.events);return this}}(D[me]);ye.data=function(r,i){var n=wt[this.id]=wt[this.id]||{};if(0==arguments.length)return n;if(1==arguments.length){if(e.is(r,"object")){for(var a in r)r[A](a)&&this.data(a,r[a]);return this}return t("raphael.data.get."+this.id,this,n[r],r),n[r]}return n[r]=i,t("raphael.data.set."+this.id,this,i,r),this},ye.removeData=function(t){return null==t?wt[this.id]={}:wt[this.id]&&delete wt[this.id][t],this},ye.getData=function(){return r(wt[this.id]||{})},ye.hover=function(t,e,r,i){return this.mouseover(t,r).mouseout(e,i||r)},ye.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)};var be=[];ye.drag=function(r,i,n,a,s,o){function l(l){(l.originalEvent||l).preventDefault();var h=l.clientX,u=l.clientY,c=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,f=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft;if(this._drag.id=l.identifier,F&&l.touches)for(var p=l.touches.length,d;p--;)if(d=l.touches[p],this._drag.id=d.identifier,d.identifier==this._drag.id){h=d.clientX,u=d.clientY;break}this._drag.x=h+f,this._drag.y=u+c,!ge.length&&e.mousemove(ve).mouseup(xe),ge.push({el:this,move_scope:a,start_scope:s,end_scope:o}),i&&t.on("raphael.drag.start."+this.id,i),r&&t.on("raphael.drag.move."+this.id,r),n&&t.on("raphael.drag.end."+this.id,n),t("raphael.drag.start."+this.id,s||a||this,l.clientX+f,l.clientY+c,l)}return this._drag={},be.push({el:this,start:l}),this.mousedown(l),this},ye.onDragOver=function(e){e?t.on("raphael.drag.over."+this.id,e):t.unbind("raphael.drag.over."+this.id)},ye.undrag=function(){for(var r=be.length;r--;)be[r].el==this&&(this.unmousedown(be[r].start),be.splice(r,1),t.unbind("raphael.drag.*."+this.id));!be.length&&e.unmousemove(ve).unmouseup(xe),ge=[]},N.circle=function(t,r,i){var n=e._engine.circle(this,t||0,r||0,i||0);return this.__set__&&this.__set__.push(n),n},N.rect=function(t,r,i,n,a){var s=e._engine.rect(this,t||0,r||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},N.ellipse=function(t,r,i,n){var a=e._engine.ellipse(this,t||0,r||0,i||0,n||0);return this.__set__&&this.__set__.push(a),a},N.path=function(t){t&&!e.is(t,Z)&&!e.is(t[0],Q)&&(t+=R);var r=e._engine.path(e.format[z](e,arguments),this);return this.__set__&&this.__set__.push(r),r},N.image=function(t,r,i,n,a){var s=e._engine.image(this,t||"about:blank",r||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},N.text=function(t,r,i){var n=e._engine.text(this,t||0,r||0,I(i));return this.__set__&&this.__set__.push(n),n},N.set=function(t){!e.is(t,"array")&&(t=Array.prototype.splice.call(arguments,0,arguments.length));var r=new ze(t);return this.__set__&&this.__set__.push(r),r.paper=this,r.type="set",r},N.setStart=function(t){this.__set__=t||this.set()},N.setFinish=function(t){var e=this.__set__;return delete this.__set__,e},N.getSize=function(){var t=this.canvas.parentNode;return{width:t.offsetWidth,height:t.offsetHeight}},N.setSize=function(t,r){return e._engine.setSize.call(this,t,r)},N.setViewBox=function(t,r,i,n,a){return e._engine.setViewBox.call(this,t,r,i,n,a)},N.top=N.bottom=null,N.raphael=e;var _e=function(t){var e=t.getBoundingClientRect(),r=t.ownerDocument,i=r.body,n=r.documentElement,a=n.clientTop||i.clientTop||0,s=n.clientLeft||i.clientLeft||0,o=e.top+(T.win.pageYOffset||n.scrollTop||i.scrollTop)-a,l=e.left+(T.win.pageXOffset||n.scrollLeft||i.scrollLeft)-s;return{y:o,x:l}};N.getElementByPoint=function(t,e){var r=this,i=r.canvas,n=T.doc.elementFromPoint(t,e);if(T.win.opera&&"svg"==n.tagName){var a=_e(i),s=i.createSVGRect();s.x=t-a.x,s.y=e-a.y,s.width=s.height=1;var o=i.getIntersectionList(s,null);o.length&&(n=o[o.length-1])}if(!n)return null;for(;n.parentNode&&n!=i.parentNode&&!n.raphael;)n=n.parentNode;return n==r.canvas.parentNode&&(n=i),n=n&&n.raphael?r.getById(n.raphaelid):null},N.getElementsByBBox=function(t){var r=this.set();return this.forEach(function(i){e.isBBoxIntersect(i.getBBox(),t)&&r.push(i)}),r},N.getById=function(t){for(var e=this.bottom;e;){if(e.id==t)return e;e=e.next}return null},N.forEach=function(t,e){for(var r=this.bottom;r;){if(t.call(e,r)===!1)return this;r=r.next}return this},N.getElementsByPoint=function(t,e){var r=this.set();return this.forEach(function(i){i.isPointInside(t,e)&&r.push(i)}),r},ye.isPointInside=function(t,r){var i=this.realPath=Et[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(i=e.transformPath(i,this.attr("transform"))),e.isPointInsidePath(i,t,r)},ye.getBBox=function(t){if(this.removed)return{};var e=this._;return t?(!e.dirty&&e.bboxwt||(this.realPath=Et[this.type](this),e.bboxwt=Ot(this.realPath),e.bboxwt.toString=x,e.dirty=0),e.bboxwt):((e.dirty||e.dirtyT||!e.bbox)&&(!e.dirty&&this.realPath||(e.bboxwt=0,this.realPath=Et[this.type](this)),e.bbox=Ot(Mt(this.realPath,this.matrix)),e.bbox.toString=x,e.dirty=e.dirtyT=0),e.bbox)},ye.clone=function(){if(this.removed)return null;var t=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(t),t},ye.glow=function(t){if("text"==this.type)return null;t=t||{};var e={width:(t.width||10)+(+this.attr("stroke-width")||1),fill:t.fill||!1,opacity:null==t.opacity?.5:t.opacity,offsetx:t.offsetx||0,offsety:t.offsety||0,color:t.color||"#000"},r=e.width/2,i=this.paper,n=i.set(),a=this.realPath||Et[this.type](this);a=this.matrix?Mt(a,this.matrix):a;for(var s=1;s<r+1;s++)n.push(i.path(a).attr({stroke:e.color,fill:e.fill?e.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(e.width/r*s).toFixed(3),opacity:+(e.opacity/r).toFixed(3)}));return n.insertBefore(this).translate(e.offsetx,e.offsety)};var we={},ke=function(t,r,i,n,a,s,o,u,c){return null==c?l(t,r,i,n,a,s,o,u):e.findDotsAtSegment(t,r,i,n,a,s,o,u,h(t,r,i,n,a,s,o,u,c))},Be=function(t,r){return function(i,n,a){i=Qt(i);for(var s,o,l,h,u="",c={},f,p=0,d=0,g=i.length;d<g;d++){if(l=i[d],"M"==l[0])s=+l[1],o=+l[2];else{if(h=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6]),p+h>n){if(r&&!c.start){if(f=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),u+=["C"+f.start.x,f.start.y,f.m.x,f.m.y,f.x,f.y],a)return u;c.start=u,u=["M"+f.x,f.y+"C"+f.n.x,f.n.y,f.end.x,f.end.y,l[5],l[6]].join(),p+=h,s=+l[5],o=+l[6];continue}if(!t&&!r)return f=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),{x:f.x,y:f.y,alpha:f.alpha}}p+=h,s=+l[5],o=+l[6]}u+=l.shift()+l}return c.end=u,f=t?p:r?c:e.findDotsAtSegment(s,o,l[0],l[1],l[2],l[3],l[4],l[5],1),f.alpha&&(f={x:f.x,y:f.y,alpha:f.alpha}),f}},Ce=Be(1),Se=Be(),Ae=Be(0,1);e.getTotalLength=Ce,e.getPointAtLength=Se,e.getSubpath=function(t,e,r){if(this.getTotalLength(t)-r<1e-6)return Ae(t,e).end;var i=Ae(t,r,1);return e?Ae(i,e).end:i},ye.getTotalLength=function(){var t=this.getPath();if(t)return this.node.getTotalLength?this.node.getTotalLength():Ce(t)},ye.getPointAtLength=function(t){var e=this.getPath();if(e)return Se(e,t)},ye.getPath=function(){var t,r=e._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return r&&(t=r(this)),t},ye.getSubpath=function(t,r){var i=this.getPath();if(i)return e.getSubpath(i,t,r)};var Te=e.easing_formulas={linear:function(t){return t},"<":function(t){return X(t,1.7)},">":function(t){return X(t,.48)},"<>":function(t){var e=.48-t/1.04,r=Y.sqrt(.1734+e*e),i=r-e,n=X(H(i),1/3)*(i<0?-1:1),a=-r-e,s=X(H(a),1/3)*(a<0?-1:1),o=n+s+.5;return 3*(1-o)*o*o+o*o*o},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){t-=1;var e=1.70158;return t*t*((e+1)*t+e)+1},elastic:function(t){return t==!!t?t:X(2,-10*t)*Y.sin((t-.075)*(2*U)/.3)+1},bounce:function(t){var e=7.5625,r=2.75,i;return t<1/r?i=e*t*t:t<2/r?(t-=1.5/r,i=e*t*t+.75):t<2.5/r?(t-=2.25/r,i=e*t*t+.9375):(t-=2.625/r,i=e*t*t+.984375),i}};Te.easeIn=Te["ease-in"]=Te["<"],Te.easeOut=Te["ease-out"]=Te[">"],Te.easeInOut=Te["ease-in-out"]=Te["<>"],Te["back-in"]=Te.backIn,Te["back-out"]=Te.backOut;var Ee=[],Me=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,16)},Ne=function(){for(var r=+new Date,i=0;i<Ee.length;i++){var n=Ee[i];if(!n.el.removed&&!n.paused){var a=r-n.start,s=n.ms,o=n.easing,l=n.from,h=n.diff,u=n.to,c=n.t,f=n.el,p={},d,g={},v;if(n.initstatus?(a=(n.initstatus*n.anim.top-n.prev)/(n.percent-n.prev)*s,n.status=n.initstatus,delete n.initstatus,n.stop&&Ee.splice(i--,1)):n.status=(n.prev+(n.percent-n.prev)*(a/s))/n.anim.top,!(a<0))if(a<s){var x=o(a/s);for(var y in l)if(l[A](y)){switch(pt[y]){case $:d=+l[y]+x*s*h[y];break;case"colour":d="rgb("+[Le(ot(l[y].r+x*s*h[y].r)),Le(ot(l[y].g+x*s*h[y].g)),Le(ot(l[y].b+x*s*h[y].b))].join(",")+")";break;case"path":d=[];for(var m=0,_=l[y].length;m<_;m++){d[m]=[l[y][m][0]];for(var w=1,k=l[y][m].length;w<k;w++)d[m][w]=+l[y][m][w]+x*s*h[y][m][w];d[m]=d[m].join(j)}d=d.join(j);break;case"transform":if(h[y].real)for(d=[],m=0,_=l[y].length;m<_;m++)for(d[m]=[l[y][m][0]],w=1,k=l[y][m].length;w<k;w++)d[m][w]=l[y][m][w]+x*s*h[y][m][w];else{var B=function(t){return+l[y][t]+x*s*h[y][t]};d=[["m",B(0),B(1),B(2),B(3),B(4),B(5)]]}break;case"csv":if("clip-rect"==y)for(d=[],m=4;m--;)d[m]=+l[y][m]+x*s*h[y][m];break;default:var C=[][P](l[y]);for(d=[],m=f.paper.customAttributes[y].length;m--;)d[m]=+C[m]+x*s*h[y][m]}p[y]=d}f.attr(p),function(e,r,i){setTimeout(function(){t("raphael.anim.frame."+e,r,i)})}(f.id,f,n.anim)}else{if(function(r,i,n){setTimeout(function(){t("raphael.anim.frame."+i.id,i,n),t("raphael.anim.finish."+i.id,i,n),e.is(r,"function")&&r.call(i)})}(n.callback,f,n.anim),f.attr(u),Ee.splice(i--,1),n.repeat>1&&!n.next){for(v in u)u[A](v)&&(g[v]=n.totalOrigin[v]);n.el.attr(g),b(n.anim,n.el,n.anim.percents[0],null,n.totalOrigin,n.repeat-1)}n.next&&!n.stop&&b(n.anim,n.el,n.next,null,n.totalOrigin,n.repeat)}}}Ee.length&&Me(Ne)},Le=function(t){return t>255?255:t<0?0:t};ye.animateWith=function(t,r,i,n,a,s){var o=this;if(o.removed)return s&&s.call(o),o;var l=i instanceof m?i:e.animation(i,n,a,s),h,u;b(l,o,l.percents[0],null,o.attr());for(var c=0,f=Ee.length;c<f;c++)if(Ee[c].anim==r&&Ee[c].el==t){Ee[f-1].start=Ee[c].start;break}return o},ye.onAnimation=function(e){return e?t.on("raphael.anim.frame."+this.id,e):t.unbind("raphael.anim.frame."+this.id),this},m.prototype.delay=function(t){var e=new m(this.anim,this.ms);return e.times=this.times,e.del=+t||0,e},m.prototype.repeat=function(t){var e=new m(this.anim,this.ms);return e.del=this.del,e.times=Y.floor(W(t,0))||1,e},e.animation=function(t,r,i,n){if(t instanceof m)return t;!e.is(i,"function")&&i||(n=n||i||null,i=null),t=Object(t),r=+r||0;var a={},s,o;for(o in t)t[A](o)&&ht(o)!=o&&ht(o)+"%"!=o&&(s=!0,a[o]=t[o]);if(s)return i&&(a.easing=i),n&&(a.callback=n),new m({100:a},r);if(n){var l=0;for(var h in t){var u=ut(h);t[A](h)&&u>l&&(l=u)}l+="%",!t[l].callback&&(t[l].callback=n)}return new m(t,r)},ye.animate=function(t,r,i,n){var a=this;if(a.removed)return n&&n.call(a),a;var s=t instanceof m?t:e.animation(t,r,i,n);return b(s,a,s.percents[0],null,a.attr()),a},ye.setTime=function(t,e){return t&&null!=e&&this.status(t,G(e,t.ms)/t.ms),this},ye.status=function(t,e){var r=[],i=0,n,a;if(null!=e)return b(t,this,-1,G(e,1)),this;for(n=Ee.length;i<n;i++)if(a=Ee[i],a.el.id==this.id&&(!t||a.anim==t)){if(t)return a.status;r.push({anim:a.anim,status:a.status})}return t?0:r},ye.pause=function(e){for(var r=0;r<Ee.length;r++)Ee[r].el.id!=this.id||e&&Ee[r].anim!=e||t("raphael.anim.pause."+this.id,this,Ee[r].anim)!==!1&&(Ee[r].paused=!0);return this},ye.resume=function(e){for(var r=0;r<Ee.length;r++)if(Ee[r].el.id==this.id&&(!e||Ee[r].anim==e)){var i=Ee[r];t("raphael.anim.resume."+this.id,this,i.anim)!==!1&&(delete i.paused,this.status(i.anim,i.status))}return this},ye.stop=function(e){for(var r=0;r<Ee.length;r++)Ee[r].el.id!=this.id||e&&Ee[r].anim!=e||t("raphael.anim.stop."+this.id,this,Ee[r].anim)!==!1&&Ee.splice(r--,1);return this},t.on("raphael.remove",_),t.on("raphael.clear",_),ye.toString=function(){return"Raphaël’s object"};var ze=function(t){if(this.items=[],this.length=0,this.type="set",t)for(var e=0,r=t.length;e<r;e++)!t[e]||t[e].constructor!=ye.constructor&&t[e].constructor!=ze||(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)},Pe=ze.prototype;Pe.push=function(){for(var t,e,r=0,i=arguments.length;r<i;r++)t=arguments[r],!t||t.constructor!=ye.constructor&&t.constructor!=ze||(e=this.items.length,this[e]=this.items[e]=t,this.length++);return this},Pe.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},Pe.forEach=function(t,e){for(var r=0,i=this.items.length;r<i;r++)if(t.call(e,this.items[r],r)===!1)return this;return this};for(var Fe in ye)ye[A](Fe)&&(Pe[Fe]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t][z](r,e)})}}(Fe));return Pe.attr=function(t,r){if(t&&e.is(t,Q)&&e.is(t[0],"object"))for(var i=0,n=t.length;i<n;i++)this.items[i].attr(t[i]);else for(var a=0,s=this.items.length;a<s;a++)this.items[a].attr(t,r);return this},Pe.clear=function(){for(;this.length;)this.pop()},Pe.splice=function(t,e,r){t=t<0?W(this.length+t,0):t,e=W(0,G(this.length-t,e));var i=[],n=[],a=[],s;for(s=2;s<arguments.length;s++)a.push(arguments[s]);for(s=0;s<e;s++)n.push(this[t+s]);for(;s<this.length-t;s++)i.push(this[t+s]);var o=a.length;for(s=0;s<o+i.length;s++)this.items[t+s]=this[t+s]=s<o?a[s]:i[s-o];for(s=this.items.length=this.length-=e-o;this[s];)delete this[s++];return new ze(n)},Pe.exclude=function(t){for(var e=0,r=this.length;e<r;e++)if(this[e]==t)return this.splice(e,1),!0},Pe.animate=function(t,r,i,n){(e.is(i,"function")||!i)&&(n=i||null);var a=this.items.length,s=a,o,l=this,h;if(!a)return this;n&&(h=function(){!--a&&n.call(l)}),i=e.is(i,Z)?i:h;var u=e.animation(t,r,i,h);for(o=this.items[--s].animate(u);s--;)this.items[s]&&!this.items[s].removed&&this.items[s].animateWith(o,u,u),this.items[s]&&!this.items[s].removed||a--;return this},Pe.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t);return this},Pe.getBBox=function(){for(var t=[],e=[],r=[],i=[],n=this.items.length;n--;)if(!this.items[n].removed){var a=this.items[n].getBBox();t.push(a.x),e.push(a.y),r.push(a.x+a.width),i.push(a.y+a.height)}return t=G[z](0,t),e=G[z](0,e),r=W[z](0,r),i=W[z](0,i),{x:t,y:e,x2:r,y2:i,width:r-t,height:i-e}},Pe.clone=function(t){t=this.paper.set();for(var e=0,r=this.items.length;e<r;e++)t.push(this.items[e].clone());return t},Pe.toString=function(){return"Raphaël‘s set"},Pe.glow=function(t){var e=this.paper.set();return this.forEach(function(r,i){var n=r.glow(t);null!=n&&n.forEach(function(t,r){e.push(t)})}),e},Pe.isPointInside=function(t,e){var r=!1;return this.forEach(function(i){if(i.isPointInside(t,e))return r=!0,!1}),r},e.registerFont=function(t){if(!t.face)return t;this.fonts=this.fonts||{};var e={w:t.w,face:{},glyphs:{}},r=t.face["font-family"];for(var i in t.face)t.face[A](i)&&(e.face[i]=t.face[i]);if(this.fonts[r]?this.fonts[r].push(e):this.fonts[r]=[e],!t.svg){e.face["units-per-em"]=ut(t.face["units-per-em"],10);for(var n in t.glyphs)if(t.glyphs[A](n)){var a=t.glyphs[n];if(e.glyphs[n]={w:a.w,k:{},d:a.d&&"M"+a.d.replace(/[mlcxtrv]/g,function(t){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[t]||"M"})+"z"},a.k)for(var s in a.k)a[A](s)&&(e.glyphs[n].k[s]=a.k[s])}}return t},N.getFont=function(t,r,i,n){if(n=n||"normal",i=i||"normal",r=+r||{normal:400,bold:700,lighter:300,bolder:800}[r]||400,e.fonts){var a=e.fonts[t];if(!a){var s=new RegExp("(^|\\s)"+t.replace(/[^\w\d\s+!~.:_-]/g,R)+"(\\s|$)","i");for(var o in e.fonts)if(e.fonts[A](o)&&s.test(o)){a=e.fonts[o];break}}var l;if(a)for(var h=0,u=a.length;h<u&&(l=a[h],l.face["font-weight"]!=r||l.face["font-style"]!=i&&l.face["font-style"]||l.face["font-stretch"]!=n);h++);return l}},N.print=function(t,r,i,n,a,s,o,l){s=s||"middle",o=W(G(o||0,1),-1),l=W(G(l||1,3),1);var h=I(i)[q](R),u=0,c=0,f=R,p;if(e.is(n,"string")&&(n=this.getFont(n)),n){p=(a||16)/n.face["units-per-em"];for(var d=n.face.bbox[q](k),g=+d[0],v=d[3]-d[1],x=0,y=+d[1]+("baseline"==s?v+ +n.face.descent:v/2),m=0,b=h.length;m<b;m++){if("\n"==h[m])u=0,w=0,c=0,x+=v*l;else{var _=c&&n.glyphs[h[m-1]]||{},w=n.glyphs[h[m]];u+=c?(_.w||n.w)+(_.k&&_.k[h[m]]||0)+n.w*o:0,c=1}w&&w.d&&(f+=e.transformPath(w.d,["t",u*p,x*p,"s",p,p,g,y,"t",(t-g)/p,(r-y)/p]))}}return this.path(f).attr({fill:"#000",stroke:"none"})},N.add=function(t){if(e.is(t,"array"))for(var r=this.set(),i=0,n=t.length,a;i<n;i++)a=t[i]||{},B[A](a.type)&&r.push(this[a.type]().attr(a));return r},e.format=function(t,r){var i=e.is(r,Q)?[0][P](r):arguments;return t&&e.is(t,Z)&&i.length-1&&(t=t.replace(C,function(t,e){return null==i[++e]?R:i[e]})),t||R},e.fullfill=function(){var t=/\{([^\}]+)\}/g,e=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,r=function(t,r,i){var n=i;return r.replace(e,function(t,e,r,i,a){e=e||i,n&&(e in n&&(n=n[e]),"function"==typeof n&&a&&(n=n()))}),n=(null==n||n==i?t:n)+""};return function(e,i){return String(e).replace(t,function(t,e){return r(t,e,i)})}}(),e.ninja=function(){if(E.was)T.win.Raphael=E.is;else{window.Raphael=void 0;try{delete window.Raphael}catch(t){}}return e},e.st=Pe,t.on("raphael.DOMload",function(){w=!0}),function(t,r,i){function n(){/in/.test(t.readyState)?setTimeout(n,9):e.eve("raphael.DOMload")}null==t.readyState&&t.addEventListener&&(t.addEventListener(r,i=function(){t.removeEventListener(r,i,!1),t.readyState="complete"},!1),t.readyState="loading"),n()}(document,"DOMContentLoaded"),e}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,r){var i,n;!function(r){var a="0.5.0",s="hasOwnProperty",o=/[\.\/]/,l=/\s*,\s*/,h="*",u=function(){},c=function(t,e){return t-e},f,p,d={n:{}},g=function(){for(var t=0,e=this.length;t<e;t++)if("undefined"!=typeof this[t])return this[t]},v=function(){for(var t=this.length;--t;)if("undefined"!=typeof this[t])return this[t]},x=Object.prototype.toString,y=String,m=Array.isArray||function(t){return t instanceof Array||"[object Array]"==x.call(t)};eve=function(t,e){var r=d,i=p,n=Array.prototype.slice.call(arguments,2),a=eve.listeners(t),s=0,o=!1,l,h=[],u={},x=[],y=f,m=[];x.firstDefined=g,x.lastDefined=v,f=t,p=0;for(var b=0,_=a.length;b<_;b++)"zIndex"in a[b]&&(h.push(a[b].zIndex),a[b].zIndex<0&&(u[a[b].zIndex]=a[b]));for(h.sort(c);h[s]<0;)if(l=u[h[s++]],x.push(l.apply(e,n)),p)return p=i,x;for(b=0;b<_;b++)if(l=a[b],"zIndex"in l)if(l.zIndex==h[s]){if(x.push(l.apply(e,n)),p)break;do if(s++,l=u[h[s]],l&&x.push(l.apply(e,n)),p)break;while(l)}else u[l.zIndex]=l;else if(x.push(l.apply(e,n)),p)break;return p=i,f=y,x},eve._events=d,eve.listeners=function(t){var e=m(t)?t:t.split(o),r=d,i,n,a,s,l,u,c,f,p=[r],g=[];for(s=0,l=e.length;s<l;s++){for(f=[],u=0,c=p.length;u<c;u++)for(r=p[u].n,n=[r[e[s]],r[h]],a=2;a--;)i=n[a],i&&(f.push(i),g=g.concat(i.f||[]));p=f}return g},eve.separator=function(t){t?(t=y(t).replace(/(?=[\.\^\]\[\-])/g,"\\"),t="["+t+"]",o=new RegExp(t)):o=/[\.\/]/},eve.on=function(t,e){if("function"!=typeof e)return function(){};for(var r=m(t)?m(t[0])?t:[t]:y(t).split(l),i=0,n=r.length;i<n;i++)!function(t){for(var r=m(t)?t:y(t).split(o),i=d,n,a=0,s=r.length;a<s;a++)i=i.n,i=i.hasOwnProperty(r[a])&&i[r[a]]||(i[r[a]]={n:{}});for(i.f=i.f||[],a=0,s=i.f.length;a<s;a++)if(i.f[a]==e){n=!0;break}!n&&i.f.push(e)}(r[i]);return function(t){+t==+t&&(e.zIndex=+t)}},eve.f=function(t){var e=[].slice.call(arguments,1);return function(){eve.apply(null,[t,null].concat(e).concat([].slice.call(arguments,0)))}},eve.stop=function(){p=1},eve.nt=function(t){var e=m(f)?f.join("."):f;return t?new RegExp("(?:\\.|\\/|^)"+t+"(?:\\.|\\/|$)").test(e):e},eve.nts=function(){return m(f)?f:f.split(o)},eve.off=eve.unbind=function(t,e){if(!t)return void(eve._events=d={n:{}});var r=m(t)?m(t[0])?t:[t]:y(t).split(l);if(r.length>1)for(var i=0,n=r.length;i<n;i++)eve.off(r[i],e);else{r=m(t)?t:y(t).split(o);var a,u,c,i,n,f,p,g=[d];for(i=0,n=r.length;i<n;i++)for(f=0;f<g.length;f+=c.length-2){if(c=[f,1],a=g[f].n,r[i]!=h)a[r[i]]&&c.push(a[r[i]]);else for(u in a)a[s](u)&&c.push(a[u]);g.splice.apply(g,c)}for(i=0,n=g.length;i<n;i++)for(a=g[i];a.n;){if(e){if(a.f){for(f=0,p=a.f.length;f<p;f++)if(a.f[f]==e){a.f.splice(f,1);break}!a.f.length&&delete a.f}for(u in a.n)if(a.n[s](u)&&a.n[u].f){var v=a.n[u].f;for(f=0,p=v.length;f<p;f++)if(v[f]==e){v.splice(f,1);break}!v.length&&delete a.n[u].f}}else{delete a.f;for(u in a.n)a.n[s](u)&&a.n[u].f&&delete a.n[u].f}a=a.n}}},eve.once=function(t,e){var r=function(){return eve.off(t,r),e.apply(this,arguments)};return eve.on(t,r)},eve.version=a,eve.toString=function(){return"You are running Eve "+a},"undefined"!=typeof t&&t.exports?t.exports=eve:(i=[],n=function(){return eve}.apply(e,i),!(void 0!==n&&(t.exports=n)))}(this)},function(t,e,r){var i,n;i=[r(1)],n=function(t){if(!t||t.svg){var e="hasOwnProperty",r=String,i=parseFloat,n=parseInt,a=Math,s=a.max,o=a.abs,l=a.pow,h=/[, ]+/,u=t.eve,c="",f=" ",p="http://www.w3.org/1999/xlink",d={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},g={};t.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var v=function(i,n){if(n){"string"==typeof i&&(i=v(i));for(var a in n)n[e](a)&&("xlink:"==a.substring(0,6)?i.setAttributeNS(p,a.substring(6),r(n[a])):i.setAttribute(a,r(n[a])))}else i=t._g.doc.createElementNS("http://www.w3.org/2000/svg",i),i.style&&(i.style.webkitTapHighlightColor="rgba(0,0,0,0)");return i},x=function(e,n){var h="linear",u=e.id+n,f=.5,p=.5,d=e.node,g=e.paper,x=d.style,y=t._g.doc.getElementById(u);if(!y){if(n=r(n).replace(t._radial_gradient,function(t,e,r){if(h="radial",e&&r){f=i(e),p=i(r);var n=2*(p>.5)-1;l(f-.5,2)+l(p-.5,2)>.25&&(p=a.sqrt(.25-l(f-.5,2))*n+.5)&&.5!=p&&(p=p.toFixed(5)-1e-5*n)}return c}),n=n.split(/\s*\-\s*/),"linear"==h){var b=n.shift();if(b=-i(b),isNaN(b))return null;var _=[0,0,a.cos(t.rad(b)),a.sin(t.rad(b))],w=1/(s(o(_[2]),o(_[3]))||1);_[2]*=w,_[3]*=w,_[2]<0&&(_[0]=-_[2],_[2]=0),_[3]<0&&(_[1]=-_[3],_[3]=0)}var k=t._parseDots(n);if(!k)return null;if(u=u.replace(/[\(\)\s,\xb0#]/g,"_"),e.gradient&&u!=e.gradient.id&&(g.defs.removeChild(e.gradient),delete e.gradient),!e.gradient){y=v(h+"Gradient",{id:u}),e.gradient=y,v(y,"radial"==h?{fx:f,fy:p}:{x1:_[0],y1:_[1],x2:_[2],y2:_[3],gradientTransform:e.matrix.invert()}),g.defs.appendChild(y);for(var B=0,C=k.length;B<C;B++)y.appendChild(v("stop",{offset:k[B].offset?k[B].offset:B?"100%":"0%","stop-color":k[B].color||"#fff","stop-opacity":isFinite(k[B].opacity)?k[B].opacity:1}))}}return v(d,{fill:m(u),opacity:1,"fill-opacity":1}),x.fill=c,x.opacity=1,x.fillOpacity=1,1},y=function(){var t=document.documentMode;return t&&(9===t||10===t)},m=function(t){if(y())return"url('#"+t+"')";var e=document.location,r=e.protocol+"//"+e.host+e.pathname+e.search;return"url('"+r+"#"+t+"')"},b=function(t){var e=t.getBBox(1);v(t.pattern,{patternTransform:t.matrix.invert()+" translate("+e.x+","+e.y+")"})},_=function(i,n,a){if("path"==i.type){for(var s=r(n).toLowerCase().split("-"),o=i.paper,l=a?"end":"start",h=i.node,u=i.attrs,f=u["stroke-width"],p=s.length,x="classic",y,m,b,_,w,k=3,B=3,C=5;p--;)switch(s[p]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":x=s[p];break;case"wide":B=5;break;case"narrow":B=2;break;case"long":k=5;break;case"short":k=2}if("open"==x?(k+=2,B+=2,C+=2,b=1,_=a?4:1,w={fill:"none",stroke:u.stroke}):(_=b=k/2,w={fill:u.stroke,stroke:"none"}),i._.arrows?a?(i._.arrows.endPath&&g[i._.arrows.endPath]--,i._.arrows.endMarker&&g[i._.arrows.endMarker]--):(i._.arrows.startPath&&g[i._.arrows.startPath]--,i._.arrows.startMarker&&g[i._.arrows.startMarker]--):i._.arrows={},"none"!=x){var S="raphael-marker-"+x,A="raphael-marker-"+l+x+k+B+"-obj"+i.id;t._g.doc.getElementById(S)?g[S]++:(o.defs.appendChild(v(v("path"),{"stroke-linecap":"round",d:d[x],id:S})),g[S]=1);var T=t._g.doc.getElementById(A),E;T?(g[A]++,E=T.getElementsByTagName("use")[0]):(T=v(v("marker"),{id:A,markerHeight:B,markerWidth:k,orient:"auto",refX:_,refY:B/2}),E=v(v("use"),{"xlink:href":"#"+S,transform:(a?"rotate(180 "+k/2+" "+B/2+") ":c)+"scale("+k/C+","+B/C+")","stroke-width":(1/((k/C+B/C)/2)).toFixed(4)}),T.appendChild(E),o.defs.appendChild(T),g[A]=1),v(E,w);var M=b*("diamond"!=x&&"oval"!=x);a?(y=i._.arrows.startdx*f||0,m=t.getTotalLength(u.path)-M*f):(y=M*f,m=t.getTotalLength(u.path)-(i._.arrows.enddx*f||0)),w={},w["marker-"+l]="url(#"+A+")",(m||y)&&(w.d=t.getSubpath(u.path,y,m)),v(h,w),i._.arrows[l+"Path"]=S,i._.arrows[l+"Marker"]=A,i._.arrows[l+"dx"]=M,i._.arrows[l+"Type"]=x,i._.arrows[l+"String"]=n}else a?(y=i._.arrows.startdx*f||0,m=t.getTotalLength(u.path)-y):(y=0,m=t.getTotalLength(u.path)-(i._.arrows.enddx*f||0)),i._.arrows[l+"Path"]&&v(h,{d:t.getSubpath(u.path,y,m)}),delete i._.arrows[l+"Path"],delete i._.arrows[l+"Marker"],delete i._.arrows[l+"dx"],delete i._.arrows[l+"Type"],delete i._.arrows[l+"String"];for(w in g)if(g[e](w)&&!g[w]){var N=t._g.doc.getElementById(w);N&&N.parentNode.removeChild(N)}}},w={"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},k=function(t,e,i){if(e=w[r(e).toLowerCase()]){for(var n=t.attrs["stroke-width"]||"1",a={round:n,square:n,butt:0}[t.attrs["stroke-linecap"]||i["stroke-linecap"]]||0,s=[],o=e.length;o--;)s[o]=e[o]*n+(o%2?1:-1)*a;v(t.node,{"stroke-dasharray":s.join(",")})}else v(t.node,{"stroke-dasharray":"none"})},B=function(i,a){var l=i.node,u=i.attrs,f=l.style.visibility;l.style.visibility="hidden";for(var d in a)if(a[e](d)){if(!t._availableAttrs[e](d))continue;var g=a[d];switch(u[d]=g,d){case"blur":i.blur(g);break;case"title":var y=l.getElementsByTagName("title");if(y.length&&(y=y[0]))y.firstChild.nodeValue=g;else{y=v("title");var m=t._g.doc.createTextNode(g);y.appendChild(m),l.appendChild(y)}break;case"href":case"target":var w=l.parentNode;if("a"!=w.tagName.toLowerCase()){var B=v("a");w.insertBefore(B,l),B.appendChild(l),w=B}"target"==d?w.setAttributeNS(p,"show","blank"==g?"new":g):w.setAttributeNS(p,d,g);break;case"cursor":l.style.cursor=g;break;case"transform":i.transform(g);break;case"arrow-start":_(i,g);break;case"arrow-end":_(i,g,1);break;case"clip-rect":var C=r(g).split(h);if(4==C.length){i.clip&&i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);var A=v("clipPath"),T=v("rect");A.id=t.createUUID(),v(T,{x:C[0],y:C[1],width:C[2],height:C[3]}),A.appendChild(T),i.paper.defs.appendChild(A),v(l,{"clip-path":"url(#"+A.id+")"}),i.clip=T}if(!g){var E=l.getAttribute("clip-path");if(E){var M=t._g.doc.getElementById(E.replace(/(^url\(#|\)$)/g,c));M&&M.parentNode.removeChild(M),v(l,{"clip-path":c}),delete i.clip}}break;case"path":"path"==i.type&&(v(l,{d:g?u.path=t._pathToAbsolute(g):"M0,0"}),i._.dirty=1,i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),"endString"in i._.arrows&&_(i,i._.arrows.endString,1)));break;case"width":if(l.setAttribute(d,g),i._.dirty=1,!u.fx)break;d="x",g=u.x;case"x":u.fx&&(g=-u.x-(u.width||0));case"rx":if("rx"==d&&"rect"==i.type)break;case"cx":l.setAttribute(d,g),i.pattern&&b(i),i._.dirty=1;break;case"height":if(l.setAttribute(d,g),i._.dirty=1,!u.fy)break;d="y",g=u.y;case"y":u.fy&&(g=-u.y-(u.height||0));case"ry":if("ry"==d&&"rect"==i.type)break;case"cy":l.setAttribute(d,g),i.pattern&&b(i),i._.dirty=1;break;case"r":"rect"==i.type?v(l,{rx:g,ry:g}):l.setAttribute(d,g),i._.dirty=1;break;case"src":"image"==i.type&&l.setAttributeNS(p,"href",g);break;case"stroke-width":1==i._.sx&&1==i._.sy||(g/=s(o(i._.sx),o(i._.sy))||1),l.setAttribute(d,g),u["stroke-dasharray"]&&k(i,u["stroke-dasharray"],a),
i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),"endString"in i._.arrows&&_(i,i._.arrows.endString,1));break;case"stroke-dasharray":k(i,g,a);break;case"fill":var N=r(g).match(t._ISURL);if(N){A=v("pattern");var L=v("image");A.id=t.createUUID(),v(A,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),v(L,{x:0,y:0,"xlink:href":N[1]}),A.appendChild(L),function(e){t._preload(N[1],function(){var t=this.offsetWidth,r=this.offsetHeight;v(e,{width:t,height:r}),v(L,{width:t,height:r})})}(A),i.paper.defs.appendChild(A),v(l,{fill:"url(#"+A.id+")"}),i.pattern=A,i.pattern&&b(i);break}var z=t.getRGB(g);if(z.error){if(("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&x(i,g)){if("opacity"in u||"fill-opacity"in u){var P=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c));if(P){var F=P.getElementsByTagName("stop");v(F[F.length-1],{"stop-opacity":("opacity"in u?u.opacity:1)*("fill-opacity"in u?u["fill-opacity"]:1)})}}u.gradient=g,u.fill="none";break}}else delete a.gradient,delete u.gradient,!t.is(u.opacity,"undefined")&&t.is(a.opacity,"undefined")&&v(l,{opacity:u.opacity}),!t.is(u["fill-opacity"],"undefined")&&t.is(a["fill-opacity"],"undefined")&&v(l,{"fill-opacity":u["fill-opacity"]});z[e]("opacity")&&v(l,{"fill-opacity":z.opacity>1?z.opacity/100:z.opacity});case"stroke":z=t.getRGB(g),l.setAttribute(d,z.hex),"stroke"==d&&z[e]("opacity")&&v(l,{"stroke-opacity":z.opacity>1?z.opacity/100:z.opacity}),"stroke"==d&&i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),"endString"in i._.arrows&&_(i,i._.arrows.endString,1));break;case"gradient":("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&x(i,g);break;case"opacity":u.gradient&&!u[e]("stroke-opacity")&&v(l,{"stroke-opacity":g>1?g/100:g});case"fill-opacity":if(u.gradient){P=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c)),P&&(F=P.getElementsByTagName("stop"),v(F[F.length-1],{"stop-opacity":g}));break}default:"font-size"==d&&(g=n(g,10)+"px");var R=d.replace(/(\-.)/g,function(t){return t.substring(1).toUpperCase()});l.style[R]=g,i._.dirty=1,l.setAttribute(d,g)}}S(i,a),l.style.visibility=f},C=1.2,S=function(i,a){if("text"==i.type&&(a[e]("text")||a[e]("font")||a[e]("font-size")||a[e]("x")||a[e]("y"))){var s=i.attrs,o=i.node,l=o.firstChild?n(t._g.doc.defaultView.getComputedStyle(o.firstChild,c).getPropertyValue("font-size"),10):10;if(a[e]("text")){for(s.text=a.text;o.firstChild;)o.removeChild(o.firstChild);for(var h=r(a.text).split("\n"),u=[],f,p=0,d=h.length;p<d;p++)f=v("tspan"),p&&v(f,{dy:l*C,x:s.x}),f.appendChild(t._g.doc.createTextNode(h[p])),o.appendChild(f),u[p]=f}else for(u=o.getElementsByTagName("tspan"),p=0,d=u.length;p<d;p++)p?v(u[p],{dy:l*C,x:s.x}):v(u[0],{dy:0});v(o,{x:s.x,y:s.y}),i._.dirty=1;var g=i._getBBox(),x=s.y-(g.y+g.height/2);x&&t.is(x,"finite")&&v(u[0],{dy:x})}},A=function(t){return t.parentNode&&"a"===t.parentNode.tagName.toLowerCase()?t.parentNode:t},T=function(e,r){function i(){return("0000"+(Math.random()*Math.pow(36,5)<<0).toString(36)).slice(-5)}var n=0,a=0;this[0]=this.node=e,e.raphael=!0,this.id=i(),e.raphaelid=this.id,this.matrix=t.matrix(),this.realPath=null,this.paper=r,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},E=t.el;T.prototype=E,E.constructor=T,t._engine.path=function(t,e){var r=v("path");e.canvas&&e.canvas.appendChild(r);var i=new T(r,e);return i.type="path",B(i,{fill:"none",stroke:"#000",path:t}),i},E.rotate=function(t,e,n){if(this.removed)return this;if(t=r(t).split(h),t.length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this.transform(this._.transform.concat([["r",t,e,n]])),this},E.scale=function(t,e,n,a){if(this.removed)return this;if(t=r(t).split(h),t.length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3])),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this},E.translate=function(t,e){return this.removed?this:(t=r(t).split(h),t.length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this.transform(this._.transform.concat([["t",t,e]])),this)},E.transform=function(r){var i=this._;if(null==r)return i.transform;if(t._extractTransform(this,r),this.clip&&v(this.clip,{transform:this.matrix.invert()}),this.pattern&&b(this),this.node&&v(this.node,{transform:this.matrix}),1!=i.sx||1!=i.sy){var n=this.attrs[e]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":n})}return this},E.hide=function(){return this.removed||(this.node.style.display="none"),this},E.show=function(){return this.removed||(this.node.style.display=""),this},E.remove=function(){var e=A(this.node);if(!this.removed&&e.parentNode){var r=this.paper;r.__set__&&r.__set__.exclude(this),u.unbind("raphael.*.*."+this.id),this.gradient&&r.defs.removeChild(this.gradient),t._tear(this,r),e.parentNode.removeChild(e),this.removeData();for(var i in this)this[i]="function"==typeof this[i]?t._removedFactory(i):null;this.removed=!0}},E._getBBox=function(){if("none"==this.node.style.display){this.show();var t=!0}var e=!1,r;this.paper.canvas.parentElement?r=this.paper.canvas.parentElement.style:this.paper.canvas.parentNode&&(r=this.paper.canvas.parentNode.style),r&&"none"==r.display&&(e=!0,r.display="");var i={};try{i=this.node.getBBox()}catch(n){i={x:this.node.clientLeft,y:this.node.clientTop,width:this.node.clientWidth,height:this.node.clientHeight}}finally{i=i||{},e&&(r.display="none")}return t&&this.hide(),i},E.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if("fill"==r&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==r)return this._.transform;for(var s=r.split(h),o={},l=0,c=s.length;l<c;l++)r=s[l],r in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r];return c-1?o:o[s[0]]}if(null==i&&t.is(r,"array")){for(o={},l=0,c=r.length;l<c;l++)o[r[l]]=this.attr(r[l]);return o}if(null!=i){var f={};f[r]=i}else null!=r&&t.is(r,"object")&&(f=r);for(var p in f)u("raphael.attr."+p+"."+this.id,this,f[p]);for(p in this.paper.customAttributes)if(this.paper.customAttributes[e](p)&&f[e](p)&&t.is(this.paper.customAttributes[p],"function")){var d=this.paper.customAttributes[p].apply(this,[].concat(f[p]));this.attrs[p]=f[p];for(var g in d)d[e](g)&&(f[g]=d[g])}return B(this,f),this},E.toFront=function(){if(this.removed)return this;var e=A(this.node);e.parentNode.appendChild(e);var r=this.paper;return r.top!=this&&t._tofront(this,r),this},E.toBack=function(){if(this.removed)return this;var e=A(this.node),r=e.parentNode;r.insertBefore(e,r.firstChild),t._toback(this,this.paper);var i=this.paper;return this},E.insertAfter=function(e){if(this.removed||!e)return this;var r=A(this.node),i=A(e.node||e[e.length-1].node);return i.nextSibling?i.parentNode.insertBefore(r,i.nextSibling):i.parentNode.appendChild(r),t._insertafter(this,e,this.paper),this},E.insertBefore=function(e){if(this.removed||!e)return this;var r=A(this.node),i=A(e.node||e[0].node);return i.parentNode.insertBefore(r,i),t._insertbefore(this,e,this.paper),this},E.blur=function(e){var r=this;if(0!==+e){var i=v("filter"),n=v("feGaussianBlur");r.attrs.blur=e,i.id=t.createUUID(),v(n,{stdDeviation:+e||1.5}),i.appendChild(n),r.paper.defs.appendChild(i),r._blur=i,v(r.node,{filter:"url(#"+i.id+")"})}else r._blur&&(r._blur.parentNode.removeChild(r._blur),delete r._blur,delete r.attrs.blur),r.node.removeAttribute("filter");return r},t._engine.circle=function(t,e,r,i){var n=v("circle");t.canvas&&t.canvas.appendChild(n);var a=new T(n,t);return a.attrs={cx:e,cy:r,r:i,fill:"none",stroke:"#000"},a.type="circle",v(n,a.attrs),a},t._engine.rect=function(t,e,r,i,n,a){var s=v("rect");t.canvas&&t.canvas.appendChild(s);var o=new T(s,t);return o.attrs={x:e,y:r,width:i,height:n,rx:a||0,ry:a||0,fill:"none",stroke:"#000"},o.type="rect",v(s,o.attrs),o},t._engine.ellipse=function(t,e,r,i,n){var a=v("ellipse");t.canvas&&t.canvas.appendChild(a);var s=new T(a,t);return s.attrs={cx:e,cy:r,rx:i,ry:n,fill:"none",stroke:"#000"},s.type="ellipse",v(a,s.attrs),s},t._engine.image=function(t,e,r,i,n,a){var s=v("image");v(s,{x:r,y:i,width:n,height:a,preserveAspectRatio:"none"}),s.setAttributeNS(p,"href",e),t.canvas&&t.canvas.appendChild(s);var o=new T(s,t);return o.attrs={x:r,y:i,width:n,height:a,src:e},o.type="image",o},t._engine.text=function(e,r,i,n){var a=v("text");e.canvas&&e.canvas.appendChild(a);var s=new T(a,e);return s.attrs={x:r,y:i,"text-anchor":"middle",text:n,"font-family":t._availableAttrs["font-family"],"font-size":t._availableAttrs["font-size"],stroke:"none",fill:"#000"},s.type="text",B(s,s.attrs),s},t._engine.setSize=function(t,e){return this.width=t||this.width,this.height=e||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e&&e.container,i=e.x,n=e.y,a=e.width,s=e.height;if(!r)throw new Error("SVG container not found.");var o=v("svg"),l="overflow:hidden;",h;return i=i||0,n=n||0,a=a||512,s=s||342,v(o,{height:s,version:1.1,width:a,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}),1==r?(o.style.cssText=l+"position:absolute;left:"+i+"px;top:"+n+"px",t._g.doc.body.appendChild(o),h=1):(o.style.cssText=l+"position:relative",r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o)),r=new t._Paper,r.width=a,r.height=s,r.canvas=o,r.clear(),r._left=r._top=0,h&&(r.renderfix=function(){}),r.renderfix(),r},t._engine.setViewBox=function(t,e,r,i,n){u("raphael.setViewBox",this,this._viewBox,[t,e,r,i,n]);var a=this.getSize(),o=s(r/a.width,i/a.height),l=this.top,h=n?"xMidYMid meet":"xMinYMin",c,p;for(null==t?(this._vbSize&&(o=1),delete this._vbSize,c="0 0 "+this.width+f+this.height):(this._vbSize=o,c=t+f+e+f+r+f+i),v(this.canvas,{viewBox:c,preserveAspectRatio:h});o&&l;)p="stroke-width"in l.attrs?l.attrs["stroke-width"]:1,l.attr({"stroke-width":p}),l._.dirty=1,l._.dirtyT=1,l=l.prev;return this._viewBox=[t,e,r,i,!!n],this},t.prototype.renderfix=function(){var t=this.canvas,e=t.style,r;try{r=t.getScreenCTM()||t.createSVGMatrix()}catch(i){r=t.createSVGMatrix()}var n=-r.e%1,a=-r.f%1;(n||a)&&(n&&(this._left=(this._left+n)%1,e.left=this._left+"px"),a&&(this._top=(this._top+a)%1,e.top=this._top+"px"))},t.prototype.clear=function(){t.eve("raphael.clear",this);for(var e=this.canvas;e.firstChild;)e.removeChild(e.firstChild);this.bottom=this.top=null,(this.desc=v("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël "+t.version)),e.appendChild(this.desc),e.appendChild(this.defs=v("defs"))},t.prototype.remove=function(){u("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null};var M=t.st;for(var N in E)E[e](N)&&!M[e](N)&&(M[N]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(N))}}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,r){var i,n;i=[r(1)],n=function(t){if(!t||t.vml){var e="hasOwnProperty",r=String,i=parseFloat,n=Math,a=n.round,s=n.max,o=n.min,l=n.abs,h="fill",u=/[, ]+/,c=t.eve,f=" progid:DXImageTransform.Microsoft",p=" ",d="",g={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},v=/([clmz]),?([^clmz]*)/gi,x=/ progid:\S+Blur\([^\)]+\)/g,y=/-?[^,\s-]+/g,m="position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",b=21600,_={path:1,rect:1,image:1},w={circle:1,ellipse:1},k=function(e){var i=/[ahqstv]/gi,n=t._pathToAbsolute;if(r(e).match(i)&&(n=t._path2curve),i=/[clmz]/g,n==t._pathToAbsolute&&!r(e).match(i)){var s=r(e).replace(v,function(t,e,r){var i=[],n="m"==e.toLowerCase(),s=g[e];return r.replace(y,function(t){n&&2==i.length&&(s+=i+g["m"==e?"l":"L"],i=[]),i.push(a(t*b))}),s+i});return s}var o=n(e),l,h;s=[];for(var u=0,c=o.length;u<c;u++){l=o[u],h=o[u][0].toLowerCase(),"z"==h&&(h="x");for(var f=1,x=l.length;f<x;f++)h+=a(l[f]*b)+(f!=x-1?",":d);s.push(h)}return s.join(p)},B=function(e,r,i){var n=t.matrix();return n.rotate(-e,.5,.5),{dx:n.x(r,i),dy:n.y(r,i)}},C=function(t,e,r,i,n,a){var s=t._,o=t.matrix,u=s.fillpos,c=t.node,f=c.style,d=1,g="",v,x=b/e,y=b/r;if(f.visibility="hidden",e&&r){if(c.coordsize=l(x)+p+l(y),f.rotation=a*(e*r<0?-1:1),a){var m=B(a,i,n);i=m.dx,n=m.dy}if(e<0&&(g+="x"),r<0&&(g+=" y")&&(d=-1),f.flip=g,c.coordorigin=i*-x+p+n*-y,u||s.fillsize){var _=c.getElementsByTagName(h);_=_&&_[0],c.removeChild(_),u&&(m=B(a,o.x(u[0],u[1]),o.y(u[0],u[1])),_.position=m.dx*d+p+m.dy*d),s.fillsize&&(_.size=s.fillsize[0]*l(e)+p+s.fillsize[1]*l(r)),c.appendChild(_)}f.visibility="visible"}};t.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var S=function(t,e,i){for(var n=r(e).toLowerCase().split("-"),a=i?"end":"start",s=n.length,o="classic",l="medium",h="medium";s--;)switch(n[s]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":o=n[s];break;case"wide":case"narrow":h=n[s];break;case"long":case"short":l=n[s]}var u=t.node.getElementsByTagName("stroke")[0];u[a+"arrow"]=o,u[a+"arrowlength"]=l,u[a+"arrowwidth"]=h},A=function(n,l){n.attrs=n.attrs||{};var c=n.node,f=n.attrs,g=c.style,v,x=_[n.type]&&(l.x!=f.x||l.y!=f.y||l.width!=f.width||l.height!=f.height||l.cx!=f.cx||l.cy!=f.cy||l.rx!=f.rx||l.ry!=f.ry||l.r!=f.r),y=w[n.type]&&(f.cx!=l.cx||f.cy!=l.cy||f.r!=l.r||f.rx!=l.rx||f.ry!=l.ry),m=n;for(var B in l)l[e](B)&&(f[B]=l[B]);if(x&&(f.path=t._getPath[n.type](n),n._.dirty=1),l.href&&(c.href=l.href),l.title&&(c.title=l.title),l.target&&(c.target=l.target),l.cursor&&(g.cursor=l.cursor),"blur"in l&&n.blur(l.blur),(l.path&&"path"==n.type||x)&&(c.path=k(~r(f.path).toLowerCase().indexOf("r")?t._pathToAbsolute(f.path):f.path),n._.dirty=1,"image"==n.type&&(n._.fillpos=[f.x,f.y],n._.fillsize=[f.width,f.height],C(n,1,1,0,0,0))),"transform"in l&&n.transform(l.transform),y){var A=+f.cx,E=+f.cy,M=+f.rx||+f.r||0,L=+f.ry||+f.r||0;c.path=t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",a((A-M)*b),a((E-L)*b),a((A+M)*b),a((E+L)*b),a(A*b)),n._.dirty=1}if("clip-rect"in l){var z=r(l["clip-rect"]).split(u);if(4==z.length){z[2]=+z[2]+ +z[0],z[3]=+z[3]+ +z[1];var P=c.clipRect||t._g.doc.createElement("div"),F=P.style;F.clip=t.format("rect({1}px {2}px {3}px {0}px)",z),c.clipRect||(F.position="absolute",F.top=0,F.left=0,F.width=n.paper.width+"px",F.height=n.paper.height+"px",c.parentNode.insertBefore(P,c),P.appendChild(c),c.clipRect=P)}l["clip-rect"]||c.clipRect&&(c.clipRect.style.clip="auto")}if(n.textpath){var R=n.textpath.style;l.font&&(R.font=l.font),l["font-family"]&&(R.fontFamily='"'+l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,d)+'"'),l["font-size"]&&(R.fontSize=l["font-size"]),l["font-weight"]&&(R.fontWeight=l["font-weight"]),l["font-style"]&&(R.fontStyle=l["font-style"])}if("arrow-start"in l&&S(m,l["arrow-start"]),"arrow-end"in l&&S(m,l["arrow-end"],1),null!=l.opacity||null!=l.fill||null!=l.src||null!=l.stroke||null!=l["stroke-width"]||null!=l["stroke-opacity"]||null!=l["fill-opacity"]||null!=l["stroke-dasharray"]||null!=l["stroke-miterlimit"]||null!=l["stroke-linejoin"]||null!=l["stroke-linecap"]){var j=c.getElementsByTagName(h),I=!1;if(j=j&&j[0],!j&&(I=j=N(h)),"image"==n.type&&l.src&&(j.src=l.src),l.fill&&(j.on=!0),null!=j.on&&"none"!=l.fill&&null!==l.fill||(j.on=!1),j.on&&l.fill){var q=r(l.fill).match(t._ISURL);if(q){j.parentNode==c&&c.removeChild(j),j.rotate=!0,j.src=q[1],j.type="tile";var D=n.getBBox(1);j.position=D.x+p+D.y,n._.fillpos=[D.x,D.y],t._preload(q[1],function(){n._.fillsize=[this.offsetWidth,this.offsetHeight]})}else j.color=t.getRGB(l.fill).hex,j.src=d,j.type="solid",t.getRGB(l.fill).error&&(m.type in{circle:1,ellipse:1}||"r"!=r(l.fill).charAt())&&T(m,l.fill,j)&&(f.fill="none",f.gradient=l.fill,j.rotate=!1)}if("fill-opacity"in l||"opacity"in l){var V=((+f["fill-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+t.getRGB(l.fill).o+1||2)-1);V=o(s(V,0),1),j.opacity=V,j.src&&(j.color="none")}c.appendChild(j);var O=c.getElementsByTagName("stroke")&&c.getElementsByTagName("stroke")[0],Y=!1;!O&&(Y=O=N("stroke")),(l.stroke&&"none"!=l.stroke||l["stroke-width"]||null!=l["stroke-opacity"]||l["stroke-dasharray"]||l["stroke-miterlimit"]||l["stroke-linejoin"]||l["stroke-linecap"])&&(O.on=!0),("none"==l.stroke||null===l.stroke||null==O.on||0==l.stroke||0==l["stroke-width"])&&(O.on=!1);var W=t.getRGB(l.stroke);O.on&&l.stroke&&(O.color=W.hex),V=((+f["stroke-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+W.o+1||2)-1);var G=.75*(i(l["stroke-width"])||1);if(V=o(s(V,0),1),null==l["stroke-width"]&&(G=f["stroke-width"]),l["stroke-width"]&&(O.weight=G),G&&G<1&&(V*=G)&&(O.weight=1),O.opacity=V,l["stroke-linejoin"]&&(O.joinstyle=l["stroke-linejoin"]||"miter"),O.miterlimit=l["stroke-miterlimit"]||8,l["stroke-linecap"]&&(O.endcap="butt"==l["stroke-linecap"]?"flat":"square"==l["stroke-linecap"]?"square":"round"),"stroke-dasharray"in l){var H={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};O.dashstyle=H[e](l["stroke-dasharray"])?H[l["stroke-dasharray"]]:d}Y&&c.appendChild(O)}if("text"==m.type){m.paper.canvas.style.display=d;var X=m.paper.span,U=100,$=f.font&&f.font.match(/\d+(?:\.\d*)?(?=px)/);g=X.style,f.font&&(g.font=f.font),f["font-family"]&&(g.fontFamily=f["font-family"]),f["font-weight"]&&(g.fontWeight=f["font-weight"]),f["font-style"]&&(g.fontStyle=f["font-style"]),$=i(f["font-size"]||$&&$[0])||10,g.fontSize=$*U+"px",m.textpath.string&&(X.innerHTML=r(m.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var Z=X.getBoundingClientRect();m.W=f.w=(Z.right-Z.left)/U,m.H=f.h=(Z.bottom-Z.top)/U,m.X=f.x,m.Y=f.y+m.H/2,("x"in l||"y"in l)&&(m.path.v=t.format("m{0},{1}l{2},{1}",a(f.x*b),a(f.y*b),a(f.x*b)+1));for(var Q=["x","y","text","font","font-family","font-weight","font-style","font-size"],J=0,K=Q.length;J<K;J++)if(Q[J]in l){m._.dirty=1;break}switch(f["text-anchor"]){case"start":m.textpath.style["v-text-align"]="left",m.bbx=m.W/2;break;case"end":m.textpath.style["v-text-align"]="right",m.bbx=-m.W/2;break;default:m.textpath.style["v-text-align"]="center",m.bbx=0}m.textpath.style["v-text-kern"]=!0}},T=function(e,a,s){e.attrs=e.attrs||{};var o=e.attrs,l=Math.pow,h,u,c="linear",f=".5 .5";if(e.attrs.gradient=a,a=r(a).replace(t._radial_gradient,function(t,e,r){return c="radial",e&&r&&(e=i(e),r=i(r),l(e-.5,2)+l(r-.5,2)>.25&&(r=n.sqrt(.25-l(e-.5,2))*(2*(r>.5)-1)+.5),f=e+p+r),d}),a=a.split(/\s*\-\s*/),"linear"==c){var g=a.shift();if(g=-i(g),isNaN(g))return null}var v=t._parseDots(a);if(!v)return null;if(e=e.shape||e.node,v.length){e.removeChild(s),s.on=!0,s.method="none",s.color=v[0].color,s.color2=v[v.length-1].color;for(var x=[],y=0,m=v.length;y<m;y++)v[y].offset&&x.push(v[y].offset+p+v[y].color);s.colors=x.length?x.join():"0% "+s.color,"radial"==c?(s.type="gradientTitle",s.focus="100%",s.focussize="0 0",s.focusposition=f,s.angle=0):(s.type="gradient",s.angle=(270-g)%360),e.appendChild(s)}return 1},E=function(e,r){this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=r,this.matrix=t.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},M=t.el;E.prototype=M,M.constructor=E,M.transform=function(e){if(null==e)return this._.transform;var i=this.paper._viewBoxShift,n=i?"s"+[i.scale,i.scale]+"-1-1t"+[i.dx,i.dy]:d,a;i&&(a=e=r(e).replace(/\.{3}|\u2026/g,this._.transform||d)),t._extractTransform(this,n+e);var s=this.matrix.clone(),o=this.skew,l=this.node,h,u=~r(this.attrs.fill).indexOf("-"),c=!r(this.attrs.fill).indexOf("url(");if(s.translate(1,1),c||u||"image"==this.type)if(o.matrix="1 0 0 1",o.offset="0 0",h=s.split(),u&&h.noRotation||!h.isSimple){l.style.filter=s.toFilter();var f=this.getBBox(),g=this.getBBox(1),v=f.x-g.x,x=f.y-g.y;l.coordorigin=v*-b+p+x*-b,C(this,1,1,v,x,0)}else l.style.filter=d,C(this,h.scalex,h.scaley,h.dx,h.dy,h.rotate);else l.style.filter=d,o.matrix=r(s),o.offset=s.offset();return null!==a&&(this._.transform=a,t._extractTransform(this,a)),this},M.rotate=function(t,e,n){if(this.removed)return this;if(null!=t){if(t=r(t).split(u),t.length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",t,e,n]])),this}},M.translate=function(t,e){return this.removed?this:(t=r(t).split(u),t.length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this._.bbox&&(this._.bbox.x+=t,this._.bbox.y+=e),this.transform(this._.transform.concat([["t",t,e]])),this)},M.scale=function(t,e,n,a){if(this.removed)return this;if(t=r(t).split(u),t.length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3]),isNaN(n)&&(n=null),isNaN(a)&&(a=null)),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this._.dirtyT=1,this},M.hide=function(){return!this.removed&&(this.node.style.display="none"),this},M.show=function(){return!this.removed&&(this.node.style.display=d),this},M.auxGetBBox=t.el.getBBox,M.getBBox=function(){var t=this.auxGetBBox();if(this.paper&&this.paper._viewBoxShift){var e={},r=1/this.paper._viewBoxShift.scale;return e.x=t.x-this.paper._viewBoxShift.dx,e.x*=r,e.y=t.y-this.paper._viewBoxShift.dy,e.y*=r,e.width=t.width*r,e.height=t.height*r,e.x2=e.x+e.width,e.y2=e.y+e.height,e}return t},M._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},M.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),t.eve.unbind("raphael.*.*."+this.id),t._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;this.removed=!0}},M.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if(r==h&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var s=r.split(u),o={},l=0,f=s.length;l<f;l++)r=s[l],r in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r];return f-1?o:o[s[0]]}if(this.attrs&&null==i&&t.is(r,"array")){for(o={},l=0,f=r.length;l<f;l++)o[r[l]]=this.attr(r[l]);return o}var p;null!=i&&(p={},p[r]=i),null==i&&t.is(r,"object")&&(p=r);for(var d in p)c("raphael.attr."+d+"."+this.id,this,p[d]);if(p){for(d in this.paper.customAttributes)if(this.paper.customAttributes[e](d)&&p[e](d)&&t.is(this.paper.customAttributes[d],"function")){var g=this.paper.customAttributes[d].apply(this,[].concat(p[d]));this.attrs[d]=p[d];for(var v in g)g[e](v)&&(p[v]=g[v])}p.text&&"text"==this.type&&(this.textpath.string=p.text),A(this,p)}return this},M.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&t._tofront(this,this.paper),this},M.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),t._toback(this,this.paper)),this)},M.insertAfter=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[e.length-1]),e.node.nextSibling?e.node.parentNode.insertBefore(this.node,e.node.nextSibling):e.node.parentNode.appendChild(this.node),t._insertafter(this,e,this.paper),this)},M.insertBefore=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[0]),e.node.parentNode.insertBefore(this.node,e.node),t._insertbefore(this,e,this.paper),this)},M.blur=function(e){var r=this.node.runtimeStyle,i=r.filter;return i=i.replace(x,d),0!==+e?(this.attrs.blur=e,r.filter=i+p+f+".Blur(pixelradius="+(+e||1.5)+")",r.margin=t.format("-{0}px 0 0 -{0}px",a(+e||1.5))):(r.filter=i,r.margin=0,delete this.attrs.blur),this},t._engine.path=function(t,e){var r=N("shape");r.style.cssText=m,r.coordsize=b+p+b,r.coordorigin=e.coordorigin;var i=new E(r,e),n={fill:"none",stroke:"#000"};t&&(n.path=t),i.type="path",i.path=[],i.Path=d,A(i,n),e.canvas&&e.canvas.appendChild(r);var a=N("skew");return a.on=!0,r.appendChild(a),i.skew=a,i.transform(d),i},t._engine.rect=function(e,r,i,n,a,s){var o=t._rectPath(r,i,n,a,s),l=e.path(o),h=l.attrs;return l.X=h.x=r,l.Y=h.y=i,l.W=h.width=n,l.H=h.height=a,h.r=s,h.path=o,l.type="rect",l},t._engine.ellipse=function(t,e,r,i,n){var a=t.path(),s=a.attrs;return a.X=e-i,a.Y=r-n,a.W=2*i,a.H=2*n,a.type="ellipse",A(a,{cx:e,cy:r,rx:i,ry:n}),a},t._engine.circle=function(t,e,r,i){var n=t.path(),a=n.attrs;return n.X=e-i,n.Y=r-i,n.W=n.H=2*i,n.type="circle",A(n,{cx:e,cy:r,r:i}),n},t._engine.image=function(e,r,i,n,a,s){var o=t._rectPath(i,n,a,s),l=e.path(o).attr({stroke:"none"}),u=l.attrs,c=l.node,f=c.getElementsByTagName(h)[0];return u.src=r,l.X=u.x=i,l.Y=u.y=n,l.W=u.width=a,l.H=u.height=s,u.path=o,l.type="image",f.parentNode==c&&c.removeChild(f),f.rotate=!0,f.src=r,f.type="tile",l._.fillpos=[i,n],l._.fillsize=[a,s],c.appendChild(f),C(l,1,1,0,0,0),l},t._engine.text=function(e,i,n,s){var o=N("shape"),l=N("path"),h=N("textpath");i=i||0,n=n||0,s=s||"",l.v=t.format("m{0},{1}l{2},{1}",a(i*b),a(n*b),a(i*b)+1),l.textpathok=!0,h.string=r(s),h.on=!0,o.style.cssText=m,o.coordsize=b+p+b,o.coordorigin="0 0";var u=new E(o,e),c={fill:"#000",stroke:"none",font:t._availableAttrs.font,text:s};u.shape=o,u.path=l,u.textpath=h,u.type="text",u.attrs.text=r(s),u.attrs.x=i,u.attrs.y=n,u.attrs.w=1,u.attrs.h=1,A(u,c),o.appendChild(h),o.appendChild(l),e.canvas.appendChild(o);var f=N("skew");return f.on=!0,o.appendChild(f),u.skew=f,u.transform(d),u},t._engine.setSize=function(e,r){var i=this.canvas.style;return this.width=e,this.height=r,e==+e&&(e+="px"),r==+r&&(r+="px"),i.width=e,i.height=r,i.clip="rect(0 "+e+" "+r+" 0)",this._viewBox&&t._engine.setViewBox.apply(this,this._viewBox),this},t._engine.setViewBox=function(e,r,i,n,a){t.eve("raphael.setViewBox",this,this._viewBox,[e,r,i,n,a]);var s=this.getSize(),o=s.width,l=s.height,h,u;return a&&(h=l/n,u=o/i,i*h<o&&(e-=(o-i*h)/2/h),n*u<l&&(r-=(l-n*u)/2/u)),this._viewBox=[e,r,i,n,!!a],this._viewBoxShift={dx:-e,dy:-r,scale:s},this.forEach(function(t){t.transform("...")}),this};var N;t._engine.initWin=function(t){var e=t.document;e.styleSheets.length<31?e.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"):e.styleSheets[0].addRule(".rvml","behavior:url(#default#VML)");try{!e.namespaces.rvml&&e.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),N=function(t){return e.createElement("<rvml:"+t+' class="rvml">')}}catch(r){N=function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},t._engine.initWin(t._g.win),t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e.container,i=e.height,n,a=e.width,s=e.x,o=e.y;if(!r)throw new Error("VML container not found.");var l=new t._Paper,h=l.canvas=t._g.doc.createElement("div"),u=h.style;return s=s||0,o=o||0,a=a||512,i=i||342,l.width=a,l.height=i,a==+a&&(a+="px"),i==+i&&(i+="px"),l.coordsize=1e3*b+p+1e3*b,l.coordorigin="0 0",l.span=t._g.doc.createElement("span"),l.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",h.appendChild(l.span),u.cssText=t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",a,i),1==r?(t._g.doc.body.appendChild(h),u.left=s+"px",u.top=o+"px",u.position="absolute"):r.firstChild?r.insertBefore(h,r.firstChild):r.appendChild(h),l.renderfix=function(){},l},t.prototype.clear=function(){t.eve("raphael.clear",this),this.canvas.innerHTML=d,this.span=t._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},t.prototype.remove=function(){t.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;return!0};var L=t.st;for(var z in M)M[e](z)&&!L[e](z)&&(L[z]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(z))}}.apply(e,i),!(void 0!==n&&(t.exports=n))}])});

/* qTip2 v2.1.1 tips modal viewport svg imagemap ie6 | qtip2.com | Licensed MIT, GPL | Thu Jul 11 2013 14:03:02 */
(function(t,e,s){(function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","imagesloaded"],t):jQuery&&!jQuery.fn.qtip&&t(jQuery)})(function(o){function n(t,e,i,s){this.id=i,this.target=t,this.tooltip=E,this.elements=elements={target:t},this._id=$+"-"+i,this.timers={img:{}},this.options=e,this.plugins={},this.cache=cache={event:{},target:o(),disabled:S,attr:s,onTooltip:S,lastClass:""},this.rendered=this.destroyed=this.disabled=this.waiting=this.hiddenDuringWait=this.positioning=this.triggering=S}function r(t){return t===E||"object"!==o.type(t)}function a(t){return!(o.isFunction(t)||t&&t.attr||t.length||"object"===o.type(t)&&(t.jquery||t.then))}function h(t){var e,i,s,n;return r(t)?S:(r(t.metadata)&&(t.metadata={type:t.metadata}),"content"in t&&(e=t.content,r(e)||e.jquery||e.done?e=t.content={text:i=a(e)?S:e}:i=e.text,"ajax"in e&&(s=e.ajax,n=s&&s.once!==S,delete e.ajax,e.text=function(t,e){var r=i||o(this).attr(e.options.content.attr)||"Loading...",a=o.ajax(o.extend({},s,{context:e})).then(s.success,E,s.error).then(function(t){return t&&n&&e.set("content.text",t),t},function(t,i,s){e.destroyed||0===t.status||e.set("content.text",i+": "+s)});return n?r:(e.set("content.text",r),a)}),"title"in e&&(r(e.title)||(e.button=e.title.button,e.title=e.title.text),a(e.title||S)&&(e.title=S))),"position"in t&&r(t.position)&&(t.position={my:t.position,at:t.position}),"show"in t&&r(t.show)&&(t.show=t.show.jquery?{target:t.show}:t.show===M?{ready:M}:{event:t.show}),"hide"in t&&r(t.hide)&&(t.hide=t.hide.jquery?{target:t.hide}:{event:t.hide}),"style"in t&&r(t.style)&&(t.style={classes:t.style}),o.each(N,function(){this.sanitize&&this.sanitize(t)}),t)}function l(t,e){for(var i,s=0,o=t,n=e.split(".");o=o[n[s++]];)n.length>s&&(i=o);return[i||t,n.pop()]}function c(t,e){var i,s,o;for(i in this.checks)for(s in this.checks[i])(o=RegExp(s,"i").exec(t))&&(e.push(o),("builtin"===i||this.plugins[i])&&this.checks[i][s].apply(this.plugins[i]||this,e))}function p(t){return H.concat("").join(t?"-"+t+" ":" ")}function d(t){if(this.tooltip.hasClass(te))return S;clearTimeout(this.timers.show),clearTimeout(this.timers.hide);var e=o.proxy(function(){this.toggle(M,t)},this);this.options.show.delay>0?this.timers.show=setTimeout(e,this.options.show.delay):e()}function u(t){if(this.tooltip.hasClass(te))return S;var e=o(t.relatedTarget),i=e.closest(G)[0]===this.tooltip[0],s=e[0]===this.options.show.target[0];if(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this!==e[0]&&"mouse"===this.options.position.target&&i||this.options.hide.fixed&&/mouse(out|leave|move)/.test(t.type)&&(i||s))try{t.preventDefault(),t.stopImmediatePropagation()}catch(n){}else{var r=o.proxy(function(){this.toggle(S,t)},this);this.options.hide.delay>0?this.timers.hide=setTimeout(r,this.options.hide.delay):r()}}function f(t){return this.tooltip.hasClass(te)||!this.options.hide.inactive?S:(clearTimeout(this.timers.inactive),this.timers.inactive=setTimeout(o.proxy(function(){this.hide(t)},this),this.options.hide.inactive),s)}function g(t){this.rendered&&this.tooltip[0].offsetWidth>0&&this.reposition(t)}function m(t,i,s){o(e.body).delegate(t,(i.split?i:i.join(re+" "))+re,function(){var t=T.api[o.attr(this,Y)];t&&!t.disabled&&s.apply(t,arguments)})}function v(t,i,s){var r,a,l,c,p,d=o(e.body),u=t[0]===e?d:t,f=t.metadata?t.metadata(s.metadata):E,g="html5"===s.metadata.type&&f?f[s.metadata.name]:E,m=t.data(s.metadata.name||"qtipopts");try{m="string"==typeof m?o.parseJSON(m):m}catch(v){}if(c=o.extend(M,{},T.defaults,s,"object"==typeof m?h(m):E,h(g||f)),a=c.position,c.id=i,"boolean"==typeof c.content.text){if(l=t.attr(c.content.attr),c.content.attr===S||!l)return S;c.content.text=l}if(a.container.length||(a.container=d),a.target===S&&(a.target=u),c.show.target===S&&(c.show.target=u),c.show.solo===M&&(c.show.solo=a.container.closest("body")),c.hide.target===S&&(c.hide.target=u),c.position.viewport===M&&(c.position.viewport=a.container),a.container=a.container.eq(0),a.at=new j(a.at,M),a.my=new j(a.my),t.data($))if(c.overwrite)t.qtip("destroy");else if(c.overwrite===S)return S;return t.attr(X,i),c.suppress&&(p=t.attr("title"))&&t.removeAttr("title").attr(ie,p).attr("title",""),r=new n(t,c,i,!!l),t.data($,r),t.one("remove.qtip-"+i+" removeqtip.qtip-"+i,function(){var t;(t=o(this).data($))&&t.destroy()}),r}function y(t){return t.charAt(0).toUpperCase()+t.slice(1)}function b(t,e){var i,o,n=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+ve.join(n+" ")+n).split(" "),a=0;if(me[e])return t.css(me[e]);for(;i=r[a++];)if((o=t.css(i))!==s)return me[e]=i,o}function w(t,e){return parseInt(b(t,e),10)}function x(t,e){this._ns="tip",this.options=e,this.offset=e.offset,this.size=[e.width,e.height],this.init(this.qtip=t)}function _(t,e){this.options=e,this._ns="-modal",this.init(this.qtip=t)}function q(t){this._ns="ie6",this.init(this.qtip=t)}var T,C,j,z,W,M=!0,S=!1,E=null,O="x",R="y",I="width",k="height",B="top",L="left",P="bottom",V="right",D="center",A="flipinvert",F="shift",N={},$="qtip",X="data-hasqtip",Y="data-qtip-id",H=["ui-widget","ui-tooltip"],G="."+$,U="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),Q=$+"-fixed",J=$+"-default",K=$+"-focus",Z=$+"-hover",te=$+"-disabled",ee="_replacedByqTip",ie="oldtitle";BROWSER={ie:function(){for(var t=3,i=e.createElement("div");(i.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->")&&i.getElementsByTagName("i")[0];);return t>4?t:0/0}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||S},C=n.prototype,C.render=function(t){if(this.rendered||this.destroyed)return this;var e=this,i=this.options,s=this.cache,n=this.elements,r=i.content.text,a=i.content.title,h=i.content.button,l=i.position,c="."+this._id+" ",p=[];return o.attr(this.target[0],"aria-describedby",this._id),this.tooltip=n.tooltip=tooltip=o("<div/>",{id:this._id,"class":[$,J,i.style.classes,$+"-pos-"+i.position.my.abbrev()].join(" "),width:i.style.width||"",height:i.style.height||"",tracking:"mouse"===l.target&&l.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":S,"aria-describedby":this._id+"-content","aria-hidden":M}).toggleClass(te,this.disabled).attr(Y,this.id).data($,this).appendTo(l.container).append(n.content=o("<div />",{"class":$+"-content",id:this._id+"-content","aria-atomic":M})),this.rendered=-1,this.positioning=M,a&&(this._createTitle(),o.isFunction(a)||p.push(this._updateTitle(a,S))),h&&this._createButton(),o.isFunction(r)||p.push(this._updateContent(r,S)),this.rendered=M,this._setWidget(),o.each(i.events,function(t,e){o.isFunction(e)&&tooltip.bind(("toggle"===t?["tooltipshow","tooltiphide"]:["tooltip"+t]).join(c)+c,e)}),o.each(N,function(t){var i;"render"===this.initialize&&(i=this(e))&&(e.plugins[t]=i)}),this._assignEvents(),o.when.apply(o,p).then(function(){e._trigger("render"),e.positioning=S,e.hiddenDuringWait||!i.show.ready&&!t||e.toggle(M,s.event,S),e.hiddenDuringWait=S}),T.api[this.id]=this,this},C.destroy=function(t){function e(){if(!this.destroyed){this.destroyed=M;var t=this.target,e=t.attr(ie);this.rendered&&this.tooltip.stop(1,0).find("*").remove().end().remove(),o.each(this.plugins,function(){this.destroy&&this.destroy()}),clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this._unassignEvents(),t.removeData($).removeAttr(Y).removeAttr("aria-describedby"),this.options.suppress&&e&&t.attr("title",e).removeAttr(ie),this._unbind(t),this.options=this.elements=this.cache=this.timers=this.plugins=this.mouse=E,delete T.api[this.id]}}return this.destroyed?this.target:(t!==M&&this.rendered?(tooltip.one("tooltiphidden",o.proxy(e,this)),!this.triggering&&this.hide()):e.call(this),this.target)},z=C.checks={builtin:{"^id$":function(t,e,i,s){var n=i===M?T.nextid:i,r=$+"-"+n;n!==S&&n.length>0&&!o("#"+r).length?(this._id=r,this.rendered&&(this.tooltip[0].id=this._id,this.elements.content[0].id=this._id+"-content",this.elements.title[0].id=this._id+"-title")):t[e]=s},"^prerender":function(t,e,i){i&&!this.rendered&&this.render(this.options.show.ready)},"^content.text$":function(t,e,i){this._updateContent(i)},"^content.attr$":function(t,e,i,s){this.options.content.text===this.target.attr(s)&&this._updateContent(this.target.attr(i))},"^content.title$":function(t,e,i){return i?(i&&!this.elements.title&&this._createTitle(),this._updateTitle(i),s):this._removeTitle()},"^content.button$":function(t,e,i){this._updateButton(i)},"^content.title.(text|button)$":function(t,e,i){this.set("content."+e,i)},"^position.(my|at)$":function(t,e,i){"string"==typeof i&&(t[e]=new j(i,"at"===e))},"^position.container$":function(t,e,i){this.tooltip.appendTo(i)},"^show.ready$":function(t,e,i){i&&(!this.rendered&&this.render(M)||this.toggle(M))},"^style.classes$":function(t,e,i,s){this.tooltip.removeClass(s).addClass(i)},"^style.width|height":function(t,e,i){this.tooltip.css(e,i)},"^style.widget|content.title":function(){this._setWidget()},"^style.def":function(t,e,i){this.tooltip.toggleClass(J,!!i)},"^events.(render|show|move|hide|focus|blur)$":function(t,e,i){tooltip[(o.isFunction(i)?"":"un")+"bind"]("tooltip"+e,i)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){var t=this.options.position;tooltip.attr("tracking","mouse"===t.target&&t.adjust.mouse),this._unassignEvents(),this._assignEvents()}}},C.get=function(t){if(this.destroyed)return this;var e=l(this.options,t.toLowerCase()),i=e[0][e[1]];return i.precedance?i.string():i};var se=/^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,oe=/^prerender|show\.ready/i;C.set=function(t,e){if(this.destroyed)return this;var i,n=this.rendered,r=S,a=this.options;return this.checks,"string"==typeof t?(i=t,t={},t[i]=e):t=o.extend({},t),o.each(t,function(e,i){if(!n&&!oe.test(e))return delete t[e],s;var h,c=l(a,e.toLowerCase());h=c[0][c[1]],c[0][c[1]]=i&&i.nodeType?o(i):i,r=se.test(e)||r,t[e]=[c[0],c[1],i,h]}),h(a),this.positioning=M,o.each(t,o.proxy(c,this)),this.positioning=S,this.rendered&&this.tooltip[0].offsetWidth>0&&r&&this.reposition("mouse"===a.position.target?E:this.cache.event),this},C._update=function(t,e){var i=this,s=this.cache;return this.rendered&&t?(o.isFunction(t)&&(t=t.call(this.elements.target,s.event,this)||""),o.isFunction(t.then)?(s.waiting=M,t.then(function(t){return s.waiting=S,i._update(t,e)},E,function(t){return i._update(t,e)})):t===S||!t&&""!==t?S:(t.jquery&&t.length>0?e.children().detach().end().append(t.css({display:"block"})):e.html(t),s.waiting=M,(o.fn.imagesLoaded?e.imagesLoaded():o.Deferred().resolve(o([]))).done(function(t){s.waiting=S,t.length&&i.rendered&&i.tooltip[0].offsetWidth>0&&i.reposition(s.event,!t.length)}).promise())):S},C._updateContent=function(t,e){this._update(t,this.elements.content,e)},C._updateTitle=function(t,e){this._update(t,this.elements.title,e)===S&&this._removeTitle(S)},C._createTitle=function(){var t=this.elements,e=this._id+"-title";t.titlebar&&this._removeTitle(),t.titlebar=o("<div />",{"class":$+"-titlebar "+(this.options.style.widget?p("header"):"")}).append(t.title=o("<div />",{id:e,"class":$+"-title","aria-atomic":M})).insertBefore(t.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(t){o(this).toggleClass("ui-state-active ui-state-focus","down"===t.type.substr(-4))}).delegate(".qtip-close","mouseover mouseout",function(t){o(this).toggleClass("ui-state-hover","mouseover"===t.type)}),this.options.content.button&&this._createButton()},C._removeTitle=function(t){var e=this.elements;e.title&&(e.titlebar.remove(),e.titlebar=e.title=e.button=E,t!==S&&this.reposition())},C.reposition=function(i,s){if(!this.rendered||this.positioning||this.destroyed)return this;this.positioning=M;var n,r,a=this.cache,h=this.tooltip,l=this.options.position,c=l.target,p=l.my,d=l.at,u=l.viewport,f=l.container,g=l.adjust,m=g.method.split(" "),v=h.outerWidth(S),y=h.outerHeight(S),b=0,w=0,x=h.css("position"),_={left:0,top:0},q=h[0].offsetWidth>0,T=i&&"scroll"===i.type,C=o(t),j=f[0].ownerDocument,z=this.mouse;if(o.isArray(c)&&2===c.length)d={x:L,y:B},_={left:c[0],top:c[1]};else if("mouse"===c&&(i&&i.pageX||a.event.pageX))d={x:L,y:B},i=!z||!z.pageX||!g.mouse&&i&&i.pageX?(!i||"resize"!==i.type&&"scroll"!==i.type?i&&i.pageX&&"mousemove"===i.type?i:(!g.mouse||this.options.show.distance)&&a.origin&&a.origin.pageX?a.origin:i:a.event)||i||a.event||z||{}:z,"static"!==x&&(_=f.offset()),j.body.offsetWidth!==(t.innerWidth||j.documentElement.clientWidth)&&(r=o(j.body).offset()),_={left:i.pageX-_.left+(r&&r.left||0),top:i.pageY-_.top+(r&&r.top||0)},g.mouse&&T&&(_.left-=z.scrollX-C.scrollLeft(),_.top-=z.scrollY-C.scrollTop());else{if("event"===c&&i&&i.target&&"scroll"!==i.type&&"resize"!==i.type?a.target=o(i.target):"event"!==c&&(a.target=o(c.jquery?c:elements.target)),c=a.target,c=o(c).eq(0),0===c.length)return this;c[0]===e||c[0]===t?(b=BROWSER.iOS?t.innerWidth:c.width(),w=BROWSER.iOS?t.innerHeight:c.height(),c[0]===t&&(_={top:(u||c).scrollTop(),left:(u||c).scrollLeft()})):N.imagemap&&c.is("area")?n=N.imagemap(this,c,d,N.viewport?m:S):N.svg&&c[0].ownerSVGElement?n=N.svg(this,c,d,N.viewport?m:S):(b=c.outerWidth(S),w=c.outerHeight(S),_=c.offset()),n&&(b=n.width,w=n.height,r=n.offset,_=n.position),_=this.reposition.offset(c,_,f),(BROWSER.iOS>3.1&&4.1>BROWSER.iOS||BROWSER.iOS>=4.3&&4.33>BROWSER.iOS||!BROWSER.iOS&&"fixed"===x)&&(_.left-=C.scrollLeft(),_.top-=C.scrollTop()),(!n||n&&n.adjustable!==S)&&(_.left+=d.x===V?b:d.x===D?b/2:0,_.top+=d.y===P?w:d.y===D?w/2:0)}return _.left+=g.x+(p.x===V?-v:p.x===D?-v/2:0),_.top+=g.y+(p.y===P?-y:p.y===D?-y/2:0),N.viewport?(_.adjusted=N.viewport(this,_,l,b,w,v,y),r&&_.adjusted.left&&(_.left+=r.left),r&&_.adjusted.top&&(_.top+=r.top)):_.adjusted={left:0,top:0},this._trigger("move",[_,u.elem||u],i)?(delete _.adjusted,s===S||!q||isNaN(_.left)||isNaN(_.top)||"mouse"===c||!o.isFunction(l.effect)?h.css(_):o.isFunction(l.effect)&&(l.effect.call(h,this,o.extend({},_)),h.queue(function(t){o(this).css({opacity:"",height:""}),BROWSER.ie&&this.style.removeAttribute("filter"),t()})),this.positioning=S,this):this},C.reposition.offset=function(t,i,s){function n(t,e){i.left+=e*t.scrollLeft(),i.top+=e*t.scrollTop()}if(!s[0])return i;var r,a,h,l,c=o(t[0].ownerDocument),p=!!BROWSER.ie&&"CSS1Compat"!==e.compatMode,d=s[0];do"static"!==(a=o.css(d,"position"))&&("fixed"===a?(h=d.getBoundingClientRect(),n(c,-1)):(h=o(d).position(),h.left+=parseFloat(o.css(d,"borderLeftWidth"))||0,h.top+=parseFloat(o.css(d,"borderTopWidth"))||0),i.left-=h.left+(parseFloat(o.css(d,"marginLeft"))||0),i.top-=h.top+(parseFloat(o.css(d,"marginTop"))||0),r||"hidden"===(l=o.css(d,"overflow"))||"visible"===l||(r=o(d)));while(d=d.offsetParent);return r&&(r[0]!==c[0]||p)&&n(r,1),i};var ne=(j=C.reposition.Corner=function(t,e){t=(""+t).replace(/([A-Z])/," $1").replace(/middle/gi,D).toLowerCase(),this.x=(t.match(/left|right/i)||t.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(t.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase(),this.forceY=!!e;var i=t.charAt(0);this.precedance="t"===i||"b"===i?R:O}).prototype;ne.invert=function(t,e){this[t]=this[t]===L?V:this[t]===V?L:e||this[t]},ne.string=function(){var t=this.x,e=this.y;return t===e?t:this.precedance===R||this.forceY&&"center"!==e?e+" "+t:t+" "+e},ne.abbrev=function(){var t=this.string().split(" ");return t[0].charAt(0)+(t[1]&&t[1].charAt(0)||"")},ne.clone=function(){return new j(this.string(),this.forceY)},C.toggle=function(t,i){var s=this.cache,n=this.options,r=this.tooltip;if(i){if(/over|enter/.test(i.type)&&/out|leave/.test(s.event.type)&&n.show.target.add(i.target).length===n.show.target.length&&r.has(i.relatedTarget).length)return this;s.event=o.extend({},i)}if(this.waiting&&!t&&(this.hiddenDuringWait=M),!this.rendered)return t?this.render(1):this;if(this.destroyed||this.disabled)return this;var a,h,l=t?"show":"hide",c=this.options[l],p=(this.options[t?"hide":"show"],this.options.position),d=this.options.content,u=this.tooltip.css("width"),f=this.tooltip[0].offsetWidth>0,g=t||1===c.target.length,m=!i||2>c.target.length||s.target[0]===i.target;return(typeof t).search("boolean|number")&&(t=!f),a=!r.is(":animated")&&f===t&&m,h=a?E:!!this._trigger(l,[90]),h!==S&&t&&this.focus(i),!h||a?this:(o.attr(r[0],"aria-hidden",!t),t?(s.origin=o.extend({},this.mouse),o.isFunction(d.text)&&this._updateContent(d.text,S),o.isFunction(d.title)&&this._updateTitle(d.title,S),!W&&"mouse"===p.target&&p.adjust.mouse&&(o(e).bind("mousemove."+$,this._storeMouse),W=M),u||r.css("width",r.outerWidth(S)),this.reposition(i,arguments[2]),u||r.css("width",""),c.solo&&("string"==typeof c.solo?o(c.solo):o(G,c.solo)).not(r).not(c.target).qtip("hide",o.Event("tooltipsolo"))):(clearTimeout(this.timers.show),delete s.origin,W&&!o(G+'[tracking="true"]:visible',c.solo).not(r).length&&(o(e).unbind("mousemove."+$),W=S),this.blur(i)),after=o.proxy(function(){t?(BROWSER.ie&&r[0].style.removeAttribute("filter"),r.css("overflow",""),"string"==typeof c.autofocus&&o(this.options.show.autofocus,r).focus(),this.options.show.target.trigger("qtip-"+this.id+"-inactive")):r.css({display:"",visibility:"",opacity:"",left:"",top:""}),this._trigger(t?"visible":"hidden")},this),c.effect===S||g===S?(r[l](),after()):o.isFunction(c.effect)?(r.stop(1,1),c.effect.call(r,this),r.queue("fx",function(t){after(),t()})):r.fadeTo(90,t?1:0,after),t&&c.target.trigger("qtip-"+this.id+"-inactive"),this)},C.show=function(t){return this.toggle(M,t)},C.hide=function(t){return this.toggle(S,t)},C.focus=function(t){if(!this.rendered||this.destroyed)return this;var e=o(G),i=this.tooltip,s=parseInt(i[0].style.zIndex,10),n=T.zindex+e.length;return i.hasClass(K)||this._trigger("focus",[n],t)&&(s!==n&&(e.each(function(){this.style.zIndex>s&&(this.style.zIndex=this.style.zIndex-1)}),e.filter("."+K).qtip("blur",t)),i.addClass(K)[0].style.zIndex=n),this},C.blur=function(t){return!this.rendered||this.destroyed?this:(this.tooltip.removeClass(K),this._trigger("blur",[this.tooltip.css("zIndex")],t),this)},C.disable=function(t){return this.destroyed?this:("boolean"!=typeof t&&(t=!(this.tooltip.hasClass(te)||this.disabled)),this.rendered&&this.tooltip.toggleClass(te,t).attr("aria-disabled",t),this.disabled=!!t,this)},C.enable=function(){return this.disable(S)},C._createButton=function(){var t=this,e=this.elements,i=e.tooltip,s=this.options.content.button,n="string"==typeof s,r=n?s:"Close tooltip";e.button&&e.button.remove(),e.button=s.jquery?s:o("<a />",{"class":"qtip-close "+(this.options.style.widget?"":$+"-icon"),title:r,"aria-label":r}).prepend(o("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),e.button.appendTo(e.titlebar||i).attr("role","button").click(function(e){return i.hasClass(te)||t.hide(e),S})},C._updateButton=function(t){if(!this.rendered)return S;var e=this.elements.button;t?this._createButton():e.remove()},C._setWidget=function(){var t=this.options.style.widget,e=this.elements,i=e.tooltip,s=i.hasClass(te);i.removeClass(te),te=t?"ui-state-disabled":"qtip-disabled",i.toggleClass(te,s),i.toggleClass("ui-helper-reset "+p(),t).toggleClass(J,this.options.style.def&&!t),e.content&&e.content.toggleClass(p("content"),t),e.titlebar&&e.titlebar.toggleClass(p("header"),t),e.button&&e.button.toggleClass($+"-icon",!t)},C._storeMouse=function(i){this.mouse={pageX:i.pageX,pageY:i.pageY,type:"mousemove",scrollX:t.pageXOffset||e.body.scrollLeft||e.documentElement.scrollLeft,scrollY:t.pageYOffset||e.body.scrollTop||e.documentElement.scrollTop}},C._bind=function(t,e,i,s,n){var r="."+this._id+(s?"-"+s:"");e.length&&o(t).bind((e.split?e:e.join(r+" "))+r,o.proxy(i,n||this))},C._unbind=function(t,e){o(t).unbind("."+this._id+(e?"-"+e:""))};var re="."+$;o(function(){m(G,["mouseenter","mouseleave"],function(t){var e="mouseenter"===t.type,i=o(t.currentTarget),s=o(t.relatedTarget||t.target),n=this.options;e?(this.focus(t),i.hasClass(Q)&&!i.hasClass(te)&&clearTimeout(this.timers.hide)):"mouse"===n.position.target&&n.hide.event&&n.show.target&&!s.closest(n.show.target[0]).length&&this.hide(t),i.toggleClass(Z,e)}),m("["+Y+"]",U,f)}),C._trigger=function(t,e,i){var s=o.Event("tooltip"+t);return s.originalEvent=i&&o.extend({},i)||this.cache.event||E,this.triggering=M,this.tooltip.trigger(s,[this].concat(e||[])),this.triggering=S,!s.isDefaultPrevented()},C._assignEvents=function(){var i=this.options,n=i.position,r=this.tooltip,a=i.show.target,h=i.hide.target,l=n.container,c=n.viewport,p=o(e),m=(o(e.body),o(t)),v=i.show.event?o.trim(""+i.show.event).split(" "):[],y=i.hide.event?o.trim(""+i.hide.event).split(" "):[],b=[];/mouse(out|leave)/i.test(i.hide.event)&&"window"===i.hide.leave&&this._bind(p,["mouseout","blur"],function(t){/select|option/.test(t.target.nodeName)||t.relatedTarget||this.hide(t)}),i.hide.fixed?h=h.add(r.addClass(Q)):/mouse(over|enter)/i.test(i.show.event)&&this._bind(h,"mouseleave",function(){clearTimeout(this.timers.show)}),(""+i.hide.event).indexOf("unfocus")>-1&&this._bind(l.closest("html"),["mousedown","touchstart"],function(t){var e=o(t.target),i=this.rendered&&!this.tooltip.hasClass(te)&&this.tooltip[0].offsetWidth>0,s=e.parents(G).filter(this.tooltip[0]).length>0;e[0]===this.target[0]||e[0]===this.tooltip[0]||s||this.target.has(e[0]).length||!i||this.hide(t)}),"number"==typeof i.hide.inactive&&(this._bind(a,"qtip-"+this.id+"-inactive",f),this._bind(h.add(r),T.inactiveEvents,f,"-inactive")),y=o.map(y,function(t){var e=o.inArray(t,v);return e>-1&&h.add(a).length===h.length?(b.push(v.splice(e,1)[0]),s):t}),this._bind(a,v,d),this._bind(h,y,u),this._bind(a,b,function(t){(this.tooltip[0].offsetWidth>0?u:d).call(this,t)}),this._bind(a.add(r),"mousemove",function(t){if("number"==typeof i.hide.distance){var e=this.cache.origin||{},s=this.options.hide.distance,o=Math.abs;(o(t.pageX-e.pageX)>=s||o(t.pageY-e.pageY)>=s)&&this.hide(t)}this._storeMouse(t)}),"mouse"===n.target&&n.adjust.mouse&&(i.hide.event&&this._bind(a,["mouseenter","mouseleave"],function(t){this.cache.onTarget="mouseenter"===t.type}),this._bind(p,"mousemove",function(t){this.rendered&&this.cache.onTarget&&!this.tooltip.hasClass(te)&&this.tooltip[0].offsetWidth>0&&this.reposition(t)})),(n.adjust.resize||c.length)&&this._bind(o.event.special.resize?c:m,"resize",g),n.adjust.scroll&&this._bind(m.add(n.container),"scroll",g)},C._unassignEvents=function(){var i=[this.options.show.target[0],this.options.hide.target[0],this.rendered&&this.tooltip[0],this.options.position.container[0],this.options.position.viewport[0],this.options.position.container.closest("html")[0],t,e];this.rendered?this._unbind(o([]).pushStack(o.grep(i,function(t){return"object"==typeof t}))):o(i[0]).unbind("."+this._id+"-create")},T=o.fn.qtip=function(t,e,i){var n=(""+t).toLowerCase(),r=E,a=o.makeArray(arguments).slice(1),l=a[a.length-1],c=this[0]?o.data(this[0],$):E;return!arguments.length&&c||"api"===n?c:"string"==typeof t?(this.each(function(){var t=o.data(this,$);if(!t)return M;if(l&&l.timeStamp&&(t.cache.event=l),!e||"option"!==n&&"options"!==n)t[n]&&t[n].apply(t,a);else{if(i===s&&!o.isPlainObject(e))return r=t.get(e),S;t.set(e,i)}}),r!==E?r:this):"object"!=typeof t&&arguments.length?s:(c=h(o.extend(M,{},t)),T.bind.call(this,c,l))},T.bind=function(t,e){return this.each(function(i){function n(t){function e(){c.render("object"==typeof t||r.show.ready),a.show.add(a.hide).unbind(l)}return c.disabled?S:(c.cache.event=o.extend({},t),c.cache.target=t?o(t.target):[s],r.show.delay>0?(clearTimeout(c.timers.show),c.timers.show=setTimeout(e,r.show.delay),h.show!==h.hide&&a.hide.bind(h.hide,function(){clearTimeout(c.timers.show)})):e(),s)}var r,a,h,l,c,p;return p=o.isArray(t.id)?t.id[i]:t.id,p=!p||p===S||1>p.length||T.api[p]?T.nextid++:p,l=".qtip-"+p+"-create",c=v(o(this),p,t),c===S?M:(T.api[p]=c,r=c.options,o.each(N,function(){"initialize"===this.initialize&&this(c)}),a={show:r.show.target,hide:r.hide.target},h={show:o.trim(""+r.show.event).replace(/ /g,l+" ")+l,hide:o.trim(""+r.hide.event).replace(/ /g,l+" ")+l},/mouse(over|enter)/i.test(h.show)&&!/mouse(out|leave)/i.test(h.hide)&&(h.hide+=" mouseleave"+l),a.show.bind("mousemove"+l,function(t){c._storeMouse(t),c.cache.onTarget=M}),a.show.bind(h.show,n),(r.show.ready||r.prerender)&&n(e),s)})},T.api={},o.each({attr:function(t,e){if(this.length){var i=this[0],s="title",n=o.data(i,"qtip");if(t===s&&n&&"object"==typeof n&&n.options.suppress)return 2>arguments.length?o.attr(i,ie):(n&&n.options.content.attr===s&&n.cache.attr&&n.set("content.text",e),this.attr(ie,e))}return o.fn["attr"+ee].apply(this,arguments)},clone:function(t){var e=(o([]),o.fn["clone"+ee].apply(this,arguments));return t||e.filter("["+ie+"]").attr("title",function(){return o.attr(this,ie)}).removeAttr(ie),e}},function(t,e){if(!e||o.fn[t+ee])return M;var i=o.fn[t+ee]=o.fn[t];o.fn[t]=function(){return e.apply(this,arguments)||i.apply(this,arguments)}}),o.ui||(o["cleanData"+ee]=o.cleanData,o.cleanData=function(t){for(var e,i=0;(e=o(t[i])).length;i++)if(e.attr(X))try{e.triggerHandler("removeqtip")}catch(s){}o["cleanData"+ee].apply(this,arguments)}),T.version="2.1.1",T.nextid=0,T.inactiveEvents=U,T.zindex=15e3,T.defaults={prerender:S,id:S,overwrite:M,suppress:M,content:{text:M,attr:"title",title:S,button:S},position:{my:"top left",at:"bottom right",target:S,container:S,viewport:S,adjust:{x:0,y:0,mouse:M,scroll:M,resize:M,method:"flipinvert flipinvert"},effect:function(t,e){o(this).animate(e,{duration:200,queue:S})}},show:{target:S,event:"mouseenter",effect:M,delay:90,solo:S,ready:S,autofocus:S},hide:{target:S,event:"mouseleave",effect:M,delay:0,fixed:S,inactive:S,leave:"window",distance:S},style:{classes:"",widget:S,width:S,height:S,def:M},events:{render:E,move:E,show:E,hide:E,toggle:E,visible:E,hidden:E,focus:E,blur:E}};var ae,he="margin",le="border",ce="color",pe="background-color",de="transparent",ue=" !important",fe=!!e.createElement("canvas").getContext,ge=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,me={},ve=["Webkit","O","Moz","ms"];fe||(createVML=function(t,e,i){return"<qtipvml:"+t+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(e||"")+' style="behavior: url(#default#VML); '+(i||"")+'" />'}),o.extend(x.prototype,{init:function(t){var e,i;i=this.element=t.elements.tip=o("<div />",{"class":$+"-tip"}).prependTo(t.tooltip),fe?(e=o("<canvas />").appendTo(this.element)[0].getContext("2d"),e.lineJoin="miter",e.miterLimit=100,e.save()):(e=createVML("shape",'coordorigin="0,0"',"position:absolute;"),this.element.html(e+e),t._bind(o("*",i).add(i),["click","mousedown"],function(t){t.stopPropagation()},this._ns)),t._bind(t.tooltip,"tooltipmove",this.reposition,this._ns,this),this.create()},_swapDimensions:function(){this.size[0]=this.options.height,this.size[1]=this.options.width},_resetDimensions:function(){this.size[0]=this.options.width,this.size[1]=this.options.height},_useTitle:function(t){var e=this.qtip.elements.titlebar;return e&&(t.y===B||t.y===D&&this.element.position().top+this.size[1]/2+this.options.offset<e.outerHeight(M))},_parseCorner:function(t){var e=this.qtip.options.position.my;return t===S||e===S?t=S:t===M?t=new j(e.string()):t.string||(t=new j(t),t.fixed=M),t},_parseWidth:function(t,e,i){var s=this.qtip.elements,o=le+y(e)+"Width";return(i?w(i,o):w(s.content,o)||w(this._useTitle(t)&&s.titlebar||s.content,o)||w(tooltip,o))||0},_parseRadius:function(t){var e=this.qtip.elements,i=le+y(t.y)+y(t.x)+"Radius";return 9>BROWSER.ie?0:w(this._useTitle(t)&&e.titlebar||e.content,i)||w(e.tooltip,i)||0},_invalidColour:function(t,e,i){var s=t.css(e);return!s||i&&s===t.css(i)||ge.test(s)?S:s},_parseColours:function(t){var e=this.qtip.elements,i=this.element.css("cssText",""),s=le+y(t[t.precedance])+y(ce),n=this._useTitle(t)&&e.titlebar||e.content,r=this._invalidColour,a=[];return a[0]=r(i,pe)||r(n,pe)||r(e.content,pe)||r(tooltip,pe)||i.css(pe),a[1]=r(i,s,ce)||r(n,s,ce)||r(e.content,s,ce)||r(tooltip,s,ce)||tooltip.css(s),o("*",i).add(i).css("cssText",pe+":"+de+ue+";"+le+":0"+ue+";"),a},_calculateSize:function(t){var e,i,s,o=t.precedance===R,n=this.options[o?"height":"width"],r=this.options[o?"width":"height"],a="c"===t.abbrev(),h=n*(a?.5:1),l=Math.pow,c=Math.round,p=Math.sqrt(l(h,2)+l(r,2)),d=[this.border/h*p,this.border/r*p];return d[2]=Math.sqrt(l(d[0],2)-l(this.border,2)),d[3]=Math.sqrt(l(d[1],2)-l(this.border,2)),e=p+d[2]+d[3]+(a?0:d[0]),i=e/p,s=[c(i*n),c(i*r)],o?s:s.reverse()},_calculateTip:function(t){var e=this.size[0],i=this.size[1],s=Math.ceil(e/2),o=Math.ceil(i/2),n={br:[0,0,e,i,e,0],bl:[0,0,e,0,0,i],tr:[0,i,e,0,e,i],tl:[0,0,0,i,e,i],tc:[0,i,s,0,e,i],bc:[0,0,e,0,s,i],rc:[0,0,e,o,0,i],lc:[e,0,e,i,0,o]};return n.lt=n.br,n.rt=n.bl,n.lb=n.tr,n.rb=n.tl,n[t.abbrev()]},create:function(){var t=this.corner=(fe||BROWSER.ie)&&this._parseCorner(this.options.corner);return(this.enabled=!!this.corner&&"c"!==this.corner.abbrev())&&(this.qtip.cache.corner=t.clone(),this.update()),this.element.toggle(this.enabled),this.corner},update:function(t,e){if(!this.enabled)return this;var i,s,n,r,a,h,l,c=(this.qtip.elements,this.element),p=c.children(),d=this.options,u=this.size,f=d.mimic,g=Math.round;t||(t=this.qtip.cache.corner||this.corner),f===S?f=t:(f=new j(f),f.precedance=t.precedance,"inherit"===f.x?f.x=t.x:"inherit"===f.y?f.y=t.y:f.x===f.y&&(f[t.precedance]=t[t.precedance])),s=f.precedance,t.precedance===O?this._swapDimensions():this._resetDimensions(),i=this.color=this._parseColours(t),i[1]!==de?(l=this.border=this._parseWidth(t,t[t.precedance]),d.border&&1>l&&(i[0]=i[1]),this.border=l=d.border!==M?d.border:l):this.border=l=0,r=this._calculateTip(f),h=this.size=this._calculateSize(t),c.css({width:h[0],height:h[1],lineHeight:h[1]+"px"}),a=t.precedance===R?[g(f.x===L?l:f.x===V?h[0]-u[0]-l:(h[0]-u[0])/2),g(f.y===B?h[1]-u[1]:0)]:[g(f.x===L?h[0]-u[0]:0),g(f.y===B?l:f.y===P?h[1]-u[1]-l:(h[1]-u[1])/2)],fe?(p.attr(I,h[0]).attr(k,h[1]),n=p[0].getContext("2d"),n.restore(),n.save(),n.clearRect(0,0,3e3,3e3),n.fillStyle=i[0],n.strokeStyle=i[1],n.lineWidth=2*l,n.translate(a[0],a[1]),n.beginPath(),n.moveTo(r[0],r[1]),n.lineTo(r[2],r[3]),n.lineTo(r[4],r[5]),n.closePath(),l&&("border-box"===tooltip.css("background-clip")&&(n.strokeStyle=i[0],n.stroke()),n.strokeStyle=i[1],n.stroke()),n.fill()):(r="m"+r[0]+","+r[1]+" l"+r[2]+","+r[3]+" "+r[4]+","+r[5]+" xe",a[2]=l&&/^(r|b)/i.test(t.string())?8===BROWSER.ie?2:1:0,p.css({coordsize:u[0]+l+" "+(u[1]+l),antialias:""+(f.string().indexOf(D)>-1),left:a[0]-a[2]*Number(s===O),top:a[1]-a[2]*Number(s===R),width:u[0]+l,height:u[1]+l}).each(function(t){var e=o(this);e[e.prop?"prop":"attr"]({coordsize:u[0]+l+" "+(u[1]+l),path:r,fillcolor:i[0],filled:!!t,stroked:!t}).toggle(!(!l&&!t)),!t&&e.html(createVML("stroke",'weight="'+2*l+'px" color="'+i[1]+'" miterlimit="1000" joinstyle="miter"'))})),e!==S&&this.calculate(t)},calculate:function(t){if(!this.enabled)return S;var e,i,s,n=this,r=this.qtip.elements,a=this.element,h=this.options.offset,l=(this.qtip.tooltip.hasClass("ui-widget"),{});return t=t||this.corner,e=t.precedance,i=this._calculateSize(t),s=[t.x,t.y],e===O&&s.reverse(),o.each(s,function(s,o){var a,c,p;o===D?(a=e===R?L:B,l[a]="50%",l[he+"-"+a]=-Math.round(i[e===R?0:1]/2)+h):(a=n._parseWidth(t,o,r.tooltip),c=n._parseWidth(t,o,r.content),p=n._parseRadius(t),l[o]=Math.max(-n.border,s?c:h+(p>a?p:-a)))}),l[t[e]]-=i[e===O?0:1],a.css({margin:"",top:"",bottom:"",left:"",right:""}).css(l),l},reposition:function(t,e,i){if(this.enabled){var o,n,r=e.cache,a=this.corner.clone(),h=i.adjusted,l=e.options.position.adjust.method.split(" "),c=l[0],p=l[1]||l[0],d={left:S,top:S,x:0,y:0},u={};this.corner.fixed!==M&&(c===F&&a.precedance===O&&h.left&&a.y!==D?a.precedance=a.precedance===O?R:O:c!==F&&h.left&&(a.x=a.x===D?h.left>0?L:V:a.x===L?V:L),p===F&&a.precedance===R&&h.top&&a.x!==D?a.precedance=a.precedance===R?O:R:p!==F&&h.top&&(a.y=a.y===D?h.top>0?B:P:a.y===B?P:B),a.string()===r.corner.string()||r.cornerTop===h.top&&r.cornerLeft===h.left||this.update(a,S)),o=this.calculate(a,h),o.right!==s&&(o.left=-o.right),o.bottom!==s&&(o.top=-o.bottom),o.user=this.offset,(d.left=c===F&&!!h.left)&&(a.x===D?u[he+"-left"]=d.x=o[he+"-left"]-h.left:(n=o.right!==s?[h.left,-o.left]:[-h.left,o.left],(d.x=Math.max(n[0],n[1]))>n[0]&&(i.left-=h.left,d.left=S),u[o.right!==s?V:L]=d.x)),(d.top=p===F&&!!h.top)&&(a.y===D?u[he+"-top"]=d.y=o[he+"-top"]-h.top:(n=o.bottom!==s?[h.top,-o.top]:[-h.top,o.top],(d.y=Math.max(n[0],n[1]))>n[0]&&(i.top-=h.top,d.top=S),u[o.bottom!==s?P:B]=d.y)),this.element.css(u).toggle(!(d.x&&d.y||a.x===D&&d.y||a.y===D&&d.x)),i.left-=o.left.charAt?o.user:c!==F||d.top||!d.left&&!d.top?o.left:0,i.top-=o.top.charAt?o.user:p!==F||d.left||!d.left&&!d.top?o.top:0,r.cornerLeft=h.left,r.cornerTop=h.top,r.corner=a.clone()
}},destroy:function(){this.qtip._unbind(this.qtip.tooltip,this._ns),this.qtip.elements.tip&&this.qtip.elements.tip.find("*").remove().end().remove()}}),ae=N.tip=function(t){return new x(t,t.options.style.tip)},ae.initialize="render",ae.sanitize=function(t){t.style&&"tip"in t.style&&(opts=t.style.tip,"object"!=typeof opts&&(opts=t.style.tip={corner:opts}),/string|boolean/i.test(typeof opts.corner)||(opts.corner=M))},z.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){this.create(),this.qtip.reposition()},"^style.tip.(height|width)$":function(t){this.size=size=[t.width,t.height],this.update(),this.qtip.reposition()},"^content.title|style.(classes|widget)$":function(){this.update()}},o.extend(M,T.defaults,{style:{tip:{corner:M,mimic:S,width:6,height:6,border:M,offset:0}}});var ye,be,we="qtip-modal",xe="."+we;be=function(){function i(t){if(o.expr[":"].focusable)return o.expr[":"].focusable;var e,i,s,n=!isNaN(o.attr(t,"tabindex")),r=t.nodeName&&t.nodeName.toLowerCase();return"area"===r?(e=t.parentNode,i=e.name,t.href&&i&&"map"===e.nodeName.toLowerCase()?(s=o("img[usemap=#"+i+"]")[0],!!s&&s.is(":visible")):!1):/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||n:n}function s(t){1>p.length&&t.length?t.not("body").blur():p.first().focus()}function n(t){if(l.is(":visible")){var e,i=o(t.target),n=r.tooltip,h=i.closest(G);e=1>h.length?S:parseInt(h[0].style.zIndex,10)>parseInt(n[0].style.zIndex,10),e||i.closest(G)[0]===n[0]||s(i),a=t.target===p[p.length-1]}}var r,a,h,l,c=this,p={};o.extend(c,{init:function(){function i(){var t=o(this);l.css({height:t.height(),width:t.width()})}return l=c.elem=o("<div />",{id:"qtip-overlay",html:"<div></div>",mousedown:function(){return S}}).hide(),o(t).bind("resize"+xe,i),i(),o(e.body).bind("focusin"+xe,n),o(e).bind("keydown"+xe,function(t){r&&r.options.show.modal.escape&&27===t.keyCode&&r.hide(t)}),l.bind("click"+xe,function(t){r&&r.options.show.modal.blur&&r.hide(t)}),c},update:function(t){r=t,p=t.options.show.modal.stealfocus!==S?t.tooltip.find("*").filter(function(){return i(this)}):[]},toggle:function(t,i,n){var a=(o(e.body),t.tooltip),p=t.options.show.modal,d=p.effect,u=i?"show":"hide",f=l.is(":visible"),g=o(xe).filter(":visible:not(:animated)").not(a);return c.update(t),i&&p.stealfocus!==S&&s(o(":focus")),l.toggleClass("blurs",p.blur),i&&l.css({left:0,top:0}).appendTo(e.body),l.is(":animated")&&f===i&&h!==S||!i&&g.length?c:(l.stop(M,S),o.isFunction(d)?d.call(l,i):d===S?l[u]():l.fadeTo(parseInt(n,10)||90,i?1:0,function(){i||l.hide()}),i||l.queue(function(t){l.css({left:"",top:""}),o(xe).length||l.detach(),t()}),h=i,r.destroyed&&(r=E),c)}}),c.init()},be=new be,o.extend(_.prototype,{init:function(t){var e=t.tooltip;return this.options.on?(t.elements.overlay=be.elem,e.addClass(we).css("z-index",N.modal.zindex+o(xe).length),t._bind(e,["tooltipshow","tooltiphide"],function(t,i,s){var n=t.originalEvent;if(t.target===e[0])if(n&&"tooltiphide"===t.type&&/mouse(leave|enter)/.test(n.type)&&o(n.relatedTarget).closest(overlay[0]).length)try{t.preventDefault()}catch(r){}else(!n||n&&!n.solo)&&this.toggle(t,"tooltipshow"===t.type,s)},this._ns,this),t._bind(e,"tooltipfocus",function(t,i){if(!t.isDefaultPrevented()&&t.target===e[0]){var s=o(xe),n=N.modal.zindex+s.length,r=parseInt(e[0].style.zIndex,10);be.elem[0].style.zIndex=n-1,s.each(function(){this.style.zIndex>r&&(this.style.zIndex-=1)}),s.filter("."+K).qtip("blur",t.originalEvent),e.addClass(K)[0].style.zIndex=n,be.update(i);try{t.preventDefault()}catch(a){}}},this._ns,this),t._bind(e,"tooltiphide",function(t){t.target===e[0]&&o(xe).filter(":visible").not(e).last().qtip("focus",t)},this._ns,this),s):this},toggle:function(t,e,i){return t&&t.isDefaultPrevented()?this:(be.toggle(this.qtip,!!e,i),s)},destroy:function(){this.qtip.tooltip.removeClass(we),this.qtip._unbind(this.qtip.tooltip,this._ns),be.toggle(this.qtip,S),delete this.qtip.elements.overlay}}),ye=N.modal=function(t){return new _(t,t.options.show.modal)},ye.sanitize=function(t){t.show&&("object"!=typeof t.show.modal?t.show.modal={on:!!t.show.modal}:t.show.modal.on===s&&(t.show.modal.on=M))},ye.zindex=T.zindex-200,ye.initialize="render",z.modal={"^show.modal.(on|blur)$":function(){this.destroy(),this.init(),this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth>0)}},o.extend(M,T.defaults,{show:{modal:{on:S,effect:M,blur:M,stealfocus:M,escape:M}}}),N.viewport=function(i,s,o,n,r,a,h){function l(t,e,i,o,n,r,a,h,l){var c=s[n],d=g[t],u=m[t],f=i===F,v=-_.offset[n]+x.offset[n]+x["scroll"+n],y=d===n?l:d===r?-l:-l/2,b=u===n?h:u===r?-h:-h/2,w=T&&T.size?T.size[a]||0:0,q=T&&T.corner&&T.corner.precedance===t&&!f?w:0,C=v-c+q,j=c+l-x[a]-v+q,z=y-(g.precedance===t||d===g[e]?b:0)-(u===D?h/2:0);return f?(q=T&&T.corner&&T.corner.precedance===e?w:0,z=(d===n?1:-1)*y-q,s[n]+=C>0?C:j>0?-j:0,s[n]=Math.max(-_.offset[n]+x.offset[n]+(q&&T.corner[t]===D?T.offset:0),c-z,Math.min(Math.max(-_.offset[n]+x.offset[n]+x[a],c+z),s[n]))):(o*=i===A?2:0,C>0&&(d!==n||j>0)?(s[n]-=z+o,p.invert(t,n)):j>0&&(d!==r||C>0)&&(s[n]-=(d===D?-z:z)+o,p.invert(t,r)),v>s[n]&&-s[n]>j&&(s[n]=c,p=g.clone())),s[n]-c}var c,p,d,u=o.target,f=i.elements.tooltip,g=o.my,m=o.at,v=o.adjust,y=v.method.split(" "),b=y[0],w=y[1]||y[0],x=o.viewport,_=o.container,q=i.cache,T=i.plugins.tip,C={left:0,top:0};return x.jquery&&u[0]!==t&&u[0]!==e.body&&"none"!==v.method?(c="fixed"===f.css("position"),x={elem:x,width:x[0]===t?x.width():x.outerWidth(S),height:x[0]===t?x.height():x.outerHeight(S),scrollleft:c?0:x.scrollLeft(),scrolltop:c?0:x.scrollTop(),offset:x.offset()||{left:0,top:0}},_={elem:_,scrollLeft:_.scrollLeft(),scrollTop:_.scrollTop(),offset:_.offset()||{left:0,top:0}},("shift"!==b||"shift"!==w)&&(p=g.clone()),C={left:"none"!==b?l(O,R,b,v.x,L,V,I,n,a):0,top:"none"!==w?l(R,O,w,v.y,B,P,k,r,h):0},p&&q.lastClass!==(d=$+"-pos-"+p.abbrev())&&f.removeClass(i.cache.lastClass).addClass(i.cache.lastClass=d),C):C},N.polys={polygon:function(t,e){var i,s,o,n={width:0,height:0,position:{top:1e10,right:0,bottom:0,left:1e10},adjustable:S},r=0,a=[],h=1,l=1,c=0,p=0;for(r=t.length;r--;)i=[parseInt(t[--r],10),parseInt(t[r+1],10)],i[0]>n.position.right&&(n.position.right=i[0]),i[0]<n.position.left&&(n.position.left=i[0]),i[1]>n.position.bottom&&(n.position.bottom=i[1]),i[1]<n.position.top&&(n.position.top=i[1]),a.push(i);if(s=n.width=Math.abs(n.position.right-n.position.left),o=n.height=Math.abs(n.position.bottom-n.position.top),"c"===e.abbrev())n.position={left:n.position.left+n.width/2,top:n.position.top+n.height/2};else{for(;s>0&&o>0&&h>0&&l>0;)for(s=Math.floor(s/2),o=Math.floor(o/2),e.x===L?h=s:e.x===V?h=n.width-s:h+=Math.floor(s/2),e.y===B?l=o:e.y===P?l=n.height-o:l+=Math.floor(o/2),r=a.length;r--&&!(2>a.length);)c=a[r][0]-n.position.left,p=a[r][1]-n.position.top,(e.x===L&&c>=h||e.x===V&&h>=c||e.x===D&&(h>c||c>n.width-h)||e.y===B&&p>=l||e.y===P&&l>=p||e.y===D&&(l>p||p>n.height-l))&&a.splice(r,1);n.position={left:a[0][0],top:a[0][1]}}return n},rect:function(t,e,i,s){return{width:Math.abs(i-t),height:Math.abs(s-e),position:{left:Math.min(t,i),top:Math.min(e,s)}}},_angles:{tc:1.5,tr:7/4,tl:5/4,bc:.5,br:.25,bl:.75,rc:2,lc:1,c:0},ellipse:function(t,e,i,s,o){var n=N.polys._angles[o.abbrev()],r=i*Math.cos(n*Math.PI),a=s*Math.sin(n*Math.PI);return{width:2*i-Math.abs(r),height:2*s-Math.abs(a),position:{left:t+r,top:e+a},adjustable:S}},circle:function(t,e,i,s){return N.polys.ellipse(t,e,i,i,s)}},N.svg=function(t,s,n){for(var r,a,h,l=o(e),c=s[0],p={};!c.getBBox;)c=c.parentNode;if(!c.getBBox||!c.parentNode)return S;switch(c.nodeName){case"rect":a=N.svg.toPixel(c,c.x.baseVal.value,c.y.baseVal.value),h=N.svg.toPixel(c,c.x.baseVal.value+c.width.baseVal.value,c.y.baseVal.value+c.height.baseVal.value),p=N.polys.rect(a[0],a[1],h[0],h[1],n);break;case"ellipse":case"circle":a=N.svg.toPixel(c,c.cx.baseVal.value,c.cy.baseVal.value),p=N.polys.ellipse(a[0],a[1],(c.rx||c.r).baseVal.value,(c.ry||c.r).baseVal.value,n);break;case"line":case"polygon":case"polyline":for(points=c.points||[{x:c.x1.baseVal.value,y:c.y1.baseVal.value},{x:c.x2.baseVal.value,y:c.y2.baseVal.value}],p=[],i=-1,len=points.numberOfItems||points.length;len>++i;)next=points.getItem?points.getItem(i):points[i],p.push.apply(p,N.svg.toPixel(c,next.x,next.y));p=N.polys.polygon(p,n);break;default:if(r=c.getBBox(),mtx=c.getScreenCTM(),root=c.farthestViewportElement||c,!root.createSVGPoint)return S;point=root.createSVGPoint(),point.x=r.x,point.y=r.y,tPoint=point.matrixTransform(mtx),p.position={left:tPoint.x,top:tPoint.y},point.x+=r.width,point.y+=r.height,tPoint=point.matrixTransform(mtx),p.width=tPoint.x-p.position.left,p.height=tPoint.y-p.position.top}return p.position.left+=l.scrollLeft(),p.position.top+=l.scrollTop(),p},N.svg.toPixel=function(t,e,i){var s,o,n=t.getScreenCTM(),r=t.farthestViewportElement||t;return r.createSVGPoint?(o=r.createSVGPoint(),o.x=e,o.y=i,s=o.matrixTransform(n),[s.x,s.y]):S},N.imagemap=function(t,e,i){e.jquery||(e=o(e));var s,n,r,a=e.attr("shape").toLowerCase().replace("poly","polygon"),h=o('img[usemap="#'+e.parent("map").attr("name")+'"]'),l=e.attr("coords"),c=l.split(",");if(!h.length)return S;if("polygon"===a)result=N.polys.polygon(c,i);else{if(!N.polys[a])return S;for(r=-1,len=c.length,n=[];len>++r;)n.push(parseInt(c[r],10));result=N.polys[a].apply(this,n.concat(i))}return s=h.offset(),s.left+=Math.ceil((h.outerWidth(S)-h.width())/2),s.top+=Math.ceil((h.outerHeight(S)-h.height())/2),result.position.left+=s.left,result.position.top+=s.top,result};var _e,qe='<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>';o.extend(q.prototype,{_scroll:function(){var e=this.qtip.elements.overlay;e&&(e[0].style.top=o(t).scrollTop()+"px")},init:function(i){var s=i.tooltip;1>o("select, object").length&&(this.bgiframe=i.elements.bgiframe=o(qe).appendTo(s),i._bind(s,"tooltipmove",this.adjustBGIFrame,this._ns,this)),this.redrawContainer=o("<div/>",{id:$+"-rcontainer"}).appendTo(e.body),i.elements.overlay&&i.elements.overlay.addClass("qtipmodal-ie6fix")&&(i._bind(t,["scroll","resize"],this._scroll,this._ns,this),i._bind(s,["tooltipshow"],this._scroll,this._ns,this)),this.redraw()},adjustBGIFrame:function(){var t,e,i=this.qtip.tooltip,s={height:i.outerHeight(S),width:i.outerWidth(S)},o=this.qtip.plugins.tip,n=this.qtip.elements.tip;e=parseInt(i.css("borderLeftWidth"),10)||0,e={left:-e,top:-e},o&&n&&(t="x"===o.corner.precedance?[I,L]:[k,B],e[t[1]]-=n[t[0]]()),this.bgiframe.css(e).css(s)},redraw:function(){if(1>this.qtip.rendered||this.drawing)return self;var t,e,i,s,o=this.qtip.tooltip,n=this.qtip.options.style,r=this.qtip.options.position.container;return this.qtip.drawing=1,n.height&&o.css(k,n.height),n.width?o.css(I,n.width):(o.css(I,"").appendTo(this.redrawContainer),e=o.width(),1>e%2&&(e+=1),i=o.css("maxWidth")||"",s=o.css("minWidth")||"",t=(i+s).indexOf("%")>-1?r.width()/100:0,i=(i.indexOf("%")>-1?t:1)*parseInt(i,10)||e,s=(s.indexOf("%")>-1?t:1)*parseInt(s,10)||0,e=i+s?Math.min(Math.max(e,s),i):e,o.css(I,Math.round(e)).appendTo(r)),this.drawing=0,self},destroy:function(){this.bgiframe&&this.bgiframe.remove(),this.qtip._unbind([t,this.qtip.tooltip],this._ns)}}),_e=N.ie6=function(t){return 6===BROWSER.ie?new q(t):S},_e.initialize="render",z.ie6={"^content|style$":function(){this.redraw()}}})})(window,document);

/**
 * @name Makeaclickablemap Clickable map jQuery plugin
 * @author Tamas Hajdu @ EZMapDesign Ltd. <info@ezmapdesign.com>
 * @copyright Tamas Hajdu - EZMapDesign Ltd. 2016
 * @version 1.0.3
 * @dependencies: raphael.js, qTip.js (included)
 * @description This plugin implements a clickable map functionality
 *  where each region can be customized using various settings, like fillColor, hoverColor etc.
 *  and example can be found below, that would give you an overview of the settings one can use to customize the map
 */
(function ( $ ) {
 	/*Plugin main*/
    $.fn.ezClickableMap = function(options) {
        var _cont = this;

		/**
		 *	ENTER THE CONFIGURATION BELOW
		 *	REFER TO THE DOCUMENTATION ON THE AVAILABLE GENERAL- AND REGION SPECIFIC SETTINGS
		 **/

        var _options = {
		    "size": {
		        "width": 960,
		        "height": 720,
		        "responsive": true
		    },
		    "background": {
		        "fill": "#FFFFFF",
		        "transparent": false
		    },
			"content": [
			    {
			      "name": "FO",
			      "svg": "m 447.45117,237.11853 1.1979,1.0648 0,0.3993 -1.331,-0.9317 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Faroe Islands"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "FO",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "UM",
			      "svg": "m 52.80967,405.35693 0,0 -0.1331,0 0.1331,0 z",
			      "active": true,
			      "fill": "#d19b24",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "United States"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "us.html"
			      },
			      "label": {
			        "text": "UM",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "US",
			      "svg": "m 127.21257,263.20613 -0.7986,-3.4606 3.0613,3.993 -0.1331,1.8634 z m -64.4204,101.5553 5.4571,1.9965 3.0613,3.4606 -2.7951,1.1979 -0.2662,-4.2592 z m 89.7094,-78.1297 0.2662,0.1331 -0.7986,-0.2662 0,-0.3993 z m 0.2662,-0.7986 0.2662,0.1331 -0.3993,0.2662 -0.3993,-0.1331 z m -25.289,-21.0298 0.2662,0 0,0.5324 -0.3993,-0.5324 z m -0.1331,-0.9317 0.3993,0.3993 -0.2662,0.2662 -0.2662,-0.1331 z m -0.6655,0 1.0648,1.7303 -1.1979,-0.9317 -0.1331,-0.9317 z m 4.3923,0.1331 -0.1331,0.3993 -0.5324,0 0.1331,-0.9317 z m -4.9247,-0.6655 0.1331,0.3993 -0.5324,0 0,-0.3993 z m 3.7268,-0.3993 0.3993,0.5324 -0.2662,0.5324 -0.2662,-0.7986 z m -4.6585,-0.1331 0.5324,-0.1331 0,0.3993 -0.5324,0.3993 z m 0.9317,0.1331 -0.1331,0 -0.2662,-0.3993 0.3993,0 z m -0.1331,-1.4641 0.2662,0.2662 -0.6655,0.2662 -0.2662,-0.5324 z m -1.331,-0.2662 0.3993,-0.5324 1.0648,-0.2662 -0.2662,0.3993 z m 3.4606,-1.0648 1.0648,0.3993 -0.5324,0.6655 -0.9317,-0.5324 z m -0.3993,-0.7986 0,0.5324 -1.0648,-0.2662 0.3993,-0.3993 z m -0.5324,-1.331 0.7986,0.7986 -0.5324,0.2662 -0.3993,0 z m -2.2627,-1.0648 1.9965,0.6655 -0.3993,1.5972 -1.331,0 z m -4.6585,-0.5324 -0.1331,0.7986 -0.5324,0.1331 0.2662,-0.6655 z m -1.9965,-2.7951 -0.2662,0.5324 -0.2662,-0.2662 0.2662,-0.6655 z m 121.9196,33.9405 -0.2662,0.5324 -1.331,0.6655 -0.1331,-0.2662 z m 7.7198,7.7198 0,0.5324 -0.3993,0 0.2662,-0.5324 z m 4.9247,-0.9317 0.1331,0.3993 -0.7986,0 0.3993,-0.2662 z m -128.8408,-33.1419 -0.7986,-3.3275 1.0648,-0.1331 0.7986,0.9317 z m -2.662,-4.1261 -0.5324,-1.8634 1.331,1.0648 0.5324,3.993 z m -46.0526,-3.7268 2.2627,-2.1296 0.5324,3.7268 -5.324,2.662 -1.4641,-1.5972 z m 76.9318,31.5447 -0.1331,0.1331 0,-0.1331 z m 60.8267,66.4169 -0.1331,-1.0648 -0.6655,-0.2662 -1.9965,-3.3275 -1.9965,-3.3275 -0.2662,-0.1331 -0.1331,-0.1331 -2.7951,-0.9317 -2.1296,2.5289 -3.4606,-1.8634 -0.9317,-2.3958 -4.2592,-3.4606 -4.2592,1.1979 -7.3205,0 -9.5832,-3.1944 -5.8564,-0.1331 -3.5937,-4.2592 -5.324,-1.5972 -7.8529,-12.6445 -1.7303,-4.5254 0.7986,-3.0613 -1.1979,-4.2592 1.7303,-8.5184 -1.7303,-8.9177 4.7916,0.7986 -0.1331,-0.2662 0.9317,0.7986 -0.9317,-0.9317 0,0 0.3993,-0.5324 -0.3993,0.3993 0,-2.3958 70.2768,0 6.3888,1.5972 3.0613,1.5972 4.7916,0.1331 -6.3888,3.8599 4.1261,0.6655 4.6585,-2.1296 0.1331,0.1331 -0.1331,-0.1331 1.4641,-0.7986 0.7986,0.1331 -1.4641,1.1979 2.3958,1.8634 6.1226,-0.9317 1.1979,1.0648 0.9317,-0.2662 0,0.6655 -1.5972,1.4641 -5.7233,-0.1331 -0.7986,2.662 0.9317,-0.9317 -0.2662,0.7986 -0.5324,0.9317 -0.2662,-0.2662 -1.331,5.0578 1.4641,5.0578 2.7951,-4.1261 -0.1331,-5.324 4.2592,-3.5937 2.7951,1.4641 0.3993,3.1944 2.3958,4.1261 -0.2662,1.1979 -0.3993,0.2662 -0.3993,-0.3993 -0.6655,1.0648 -0.9317,1.8634 4.5254,0.5324 7.0543,-4.2592 -0.3993,-0.5324 0,-0.5324 5.9895,-0.1331 2.3958,-3.5937 1.331,-1.1979 1.331,-0.3993 0,0 8.2522,-0.1331 3.0613,-2.662 2.662,-5.0578 3.5937,1.1979 0,4.2592 0.5324,0.3993 0.5324,0 -0.1331,1.0648 0.7986,0.2662 0.3993,1.1979 -3.1944,1.7303 -0.3993,0.2662 0,-0.1331 -0.5324,0.2662 0,-0.2662 -0.6655,0.1331 0.2662,0.3993 0,0 -4.5254,2.2627 -0.1331,4.9247 -5.8564,1.4641 -2.9282,1.8634 -0.1331,2.5289 -3.8599,5.324 -1.9965,-3.7268 -0.1331,6.9212 1.8634,3.5937 -1.9965,2.9282 -11.8459,8.2522 -0.7986,2.7951 3.5937,10.7811 -0.7986,4.5254 -1.8634,0 -4.3923,-7.4536 0.5324,-2.7951 -3.5937,-3.3275 -2.3958,1.331 -2.7951,-1.8634 -7.0543,-0.3993 -1.9965,0.7986 1.1979,3.1944 -3.8599,-0.1331 -2.5289,-1.8634 -6.2557,0.1331 -6.1226,3.7268 -2.662,4.1261 1.0648,2.2627 -2.7951,-0.2662 z m -81.8565,-86.7812 -0.1331,0.3993 -0.3993,-0.2662 0.5324,-0.1331 0,0 z m -11.7128,-11.7128 -1.9965,0 -4.1261,-3.1944 -11.4466,-3.993 -8.3853,-1.331 0,-1.4641 -4.6585,0 0.5324,3.3275 -4.2592,0 -6.3888,3.1944 1.1979,-5.9895 -6.9212,5.0578 1.9965,1.7303 -2.5289,3.1944 -4.7916,2.1296 -2.7951,3.5937 -3.993,2.2627 -6.7881,1.7303 -2.1296,1.8634 -6.2557,1.5972 11.3135,-6.655 6.655,-4.6585 1.7303,-4.9247 -4.9247,1.7303 -3.3275,-2.3958 -3.5937,1.8634 0.1331,-3.4606 -1.5972,-2.3958 -3.3275,1.1979 -3.4606,-1.9965 -4.2592,1.8634 -1.9965,-1.331 4.5254,-0.3993 2.7951,-2.1296 -3.993,-2.5289 5.0578,-6.9212 1.9965,0.9317 6.5219,-2.9282 -0.9317,-4.9247 -5.0578,2.2627 -7.7198,-0.7986 -4.7916,-4.6585 7.0543,-3.0613 3.993,-0.6655 0.1331,2.1296 4.6585,0.3993 0.3993,-4.3923 -5.1909,-0.3993 -1.0648,-2.1296 -6.3888,-3.1944 1.0648,-2.3958 4.7916,-0.2662 6.2557,-6.3888 5.7233,-2.1296 4.1261,-0.1331 3.0613,-2.2627 6.9212,2.5289 4.5254,-0.3993 0.9317,1.8634 7.0543,-0.3993 5.324,1.7303 6.3888,0.9317 3.3275,-0.6655 5.8564,2.1296 0,38.8652 4.6585,0.7986 4.5254,4.5254 4.9247,-3.4606 5.324,5.324 3.993,6.655 4.5254,2.3958 -2.2627,3.993 0.1331,-3.1944 -0.3993,-0.1331 -0.3993,-0.7986 -0.5324,0.5324 -0.7986,-0.2662 -0.9317,-1.331 -0.1331,-0.3993 -0.5324,-0.5324 0,0.1331 -4.7916,-6.3888 -0.1331,0 -0.2662,-0.2662 -0.5324,-0.2662 0,0.3993 0.3993,0.1331 -0.5324,0 1.0648,0.2662 0.6655,3.0613 -1.331,-0.2662 -1.0648,-3.0613 -2.2627,0 0.6655,1.331 -0.3993,1.7303 -1.8634,-1.5972 z m -95.832,21.9615 16.1051,-4.9247 2.662,-2.2627 -1.1979,1.9965 -6.1226,2.2627 z m 107.5448,-10.2487 0.1331,-0.2662 0,0.2662 -0.1331,0 0,0 z",
			      "active": true,
			      "fill": "#d19b24",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "United States"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "us.html"
			      },
			      "label": {
			        "text": "",
			        "active": true,
			        "posx": 212.9,
			        "posy": 314.7,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 10
			      }
			    },
			    {
			      "name": "JP",
			      "svg": "m 825.18897,296.88043 0,-0.1331 0.7986,0.5324 -0.3993,0.1331 z m -20.6305,33.4081 -1.7303,0.9317 -2.7951,-0.3993 3.7268,-4.2592 7.8529,-0.2662 3.3275,-3.993 3.1944,-0.7986 0.5324,-2.1296 2.3958,-0.7986 2.3958,-9.317 2.662,0.3993 1.5972,5.1909 -2.3958,3.0613 -1.331,6.1226 0.6655,1.5972 -6.655,2.9282 -4.2592,0.3993 -1.4641,2.7951 -2.2627,-0.7986 0.7986,-2.2627 -4.2592,0.3993 -1.9965,1.1979 4.3923,-0.5324 -5.324,4.5254 -0.6655,-2.1296 z m -7.0543,3.7268 -2.5289,-3.7268 1.7303,2.2627 1.5972,-1.4641 3.993,2.5289 -1.8634,4.5254 -2.7951,0.2662 z m 26.2207,-31.1454 2.5289,0 1.1979,-6.7881 4.7916,4.2592 4.3923,3.0613 -3.4606,0.6655 -2.3958,3.1944 -3.5937,-1.9965 -3.8599,0.9317 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Japan"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/japan.html"
			      },
			      "label": {
			        "text": "",
			        "active": true,
			        "posx": 840,
			        "posy": 330.53515625,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 10
			      }
			    },
			    {
			      "name": "SC",
			      "svg": "m 607.03807,431.71073 0.2662,0.3993 -0.1331,0.2662 -0.6655,-0.9317 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Seychelles"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "SC",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "FR",
			      "svg": "m 322.73647,291.95573 -0.5324,0.1331 -0.1331,-1.0648 0.2662,0.6655 z m 569.0025,182.4801 -0.7986,3.4606 -3.993,-2.1296 -2.7951,-4.1261 5.5902,4.2592 z m -586.7048,-100.4905 0.1331,-0.1331 0,0.2662 z m 179.8181,-72.4064 0,0.1331 -0.1331,0 0,0 -0.1331,0.1331 -3.1944,1.8634 -5.5902,-1.331 -1.8634,3.4606 -1.7303,0.2662 -1.331,-0.3993 -0.1331,0 0,0 -0.6655,-0.1331 0.1331,-0.3993 -0.7986,0.1331 -3.7268,-0.2662 -4.5254,-2.2627 0.7986,-0.5324 1.1979,-7.7198 -4.5254,-4.6585 -4.7916,-1.8634 -0.1331,-1.5972 4.2592,-1.0648 4.2592,0.7986 -1.331,-3.5937 4.3923,1.4641 4.5254,-3.0613 2.3958,-2.9282 4.1261,3.7268 4.2592,1.4641 0.3993,0.2662 0.9317,0 4.7916,1.5972 -1.5972,4.5254 -3.7268,3.1944 0.2662,0.9317 0.1331,-0.2662 0.2662,0 1.0648,-0.1331 -0.1331,0.9317 0.6655,0.6655 -1.0648,2.5289 z m -157.058,105.149 3.0613,-0.2662 3.1944,3.5937 -3.3275,4.6585 -4.1261,-0.3993 1.5972,-2.7951 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "France"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/france.html"
			      },
			      "label": {
			        "text": "",
			        "active": true,
			        "posx": 471.7450256347656,
			        "posy": 292.8709411621094,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 10
			      }
			    },
			    {
			      "name": "FM",
			      "svg": "m 868.97887,402.56183 0.2662,0.1331 0,0.2662 -0.2662,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Micronesia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "FM",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "CN",
			      "svg": "m 742.80007,371.15023 2.2627,-2.2627 3.5937,0.7986 -3.3275,3.993 z m -50.4449,-21.8284 -0.2662,-1.8634 -1.7303,0.3993 -7.7198,-1.331 -7.7198,-5.5902 -2.662,0.3993 -5.8564,-3.1944 -0.9317,-3.3275 2.9282,-0.6655 -1.4641,-4.5254 -2.9282,-3.3275 -1.0648,0.1331 -1.4641,-0.5324 -2.1296,-2.3958 -3.5937,-1.5972 -0.3993,-0.2662 1.331,-0.3993 -0.3993,-3.7268 -2.3958,-0.1331 -0.3993,-2.662 0.7986,-1.7303 7.1874,-2.662 3.3275,-0.3993 5.324,-3.4606 1.5972,-2.9282 -1.8634,-5.8564 5.5902,-1.5972 1.8634,-5.324 4.3923,1.1979 1.9965,-0.6655 0.6655,-4.3923 3.993,-2.2627 0.3993,-0.1331 0.7986,-0.1331 0.3993,1.8634 5.9895,3.0613 1.8634,3.4606 -0.3993,4.3923 6.655,0.7986 4.7916,1.9965 2.5289,4.9247 13.4431,0.6655 5.324,2.2627 3.7268,0 3.993,-1.5972 6.9212,-0.5324 6.2557,-3.8599 -1.331,-2.2627 1.4641,-1.9965 4.1261,1.0648 5.1909,-2.2627 2.3958,-2.662 8.3853,-1.9965 -3.4606,-3.4606 -1.9965,0 -0.1331,0.1331 -0.3993,0.5324 -4.2592,0.2662 -0.9317,-1.4641 3.0613,-5.4571 2.662,0.9317 3.5937,-2.7951 4.1261,-5.8564 -1.8634,-2.2627 1.9965,-1.7303 6.2557,-1.0648 6.2557,1.9965 5.9895,11.7128 3.3275,0.3993 4.2592,5.7233 3.5937,-0.1331 4.9247,-2.2627 0.9317,2.2627 -4.9247,8.3853 -0.6655,-0.7986 -1.4641,0.2662 -2.662,1.1979 0.7986,2.5289 -1.8634,4.6585 -6.3888,1.7303 0.2662,1.8634 -3.8599,-0.9317 -1.5972,2.3958 -4.1261,2.3958 -8.2522,3.993 2.9282,-5.1909 -2.7951,-1.331 -5.5902,5.1909 -3.1944,0.2662 4.3923,5.8564 3.1944,-2.1296 5.0578,1.331 -4.9247,2.662 -3.993,4.1261 2.662,2.1296 1.5972,4.6585 2.3958,1.9965 0.3993,2.9282 -2.5289,1.0648 3.5937,1.9965 -9.0508,12.9107 -5.9895,5.8564 -4.3923,0.2662 -1.4641,1.5972 -8.9177,2.2627 -1.9965,2.9282 -0.3993,-3.1944 -4.5254,0 -6.7881,-5.0578 -3.4606,2.2627 -4.6585,0.2662 -1.5972,0.3993 -0.7986,1.8634 -5.1909,-1.5972 0.9317,-2.3958 -2.3958,-2.662 -2.3958,0.5324 0.1331,-3.1944 2.5289,-2.2627 0,-4.6585 -3.4606,-1.7303 -3.0613,-3.1944 -3.7268,0.1331 -5.1909,3.8599 -2.5289,0.5324 -3.5937,-1.7303 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "China"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/china.html"
			      },
			      "label": {
			        "text": "CN",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "PT",
			      "svg": "m 446.91877,321.37083 -4.1261,0.5324 0.6655,-3.4606 -1.8634,-1.4641 1.9965,-6.2557 -0.1331,-3.5937 5.5902,0.1331 -0.9317,2.7951 -0.1331,5.9895 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Portugal"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "PT",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "SW",
			      "svg": "m 265.37037,379.66863 0,0 0,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "SW"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "SW",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "SH",
			      "svg": "m 765.82637,381.53203 0,0 0,0 0,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "SH"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "SH",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "BR",
			      "svg": "m 339.10777,420.53033 3.3275,0.3993 -1.0648,2.9282 -4.5254,0.7986 -0.5324,-2.9282 z m -9.7163,87.9791 1.0648,-2.1296 -0.1331,-0.3993 -9.317,-7.1874 -1.9965,0.2662 4.6585,-5.4571 4.9247,-2.9282 -0.1331,-4.1261 -1.8634,-0.1331 0.1331,-0.1331 -0.1331,-0.2662 0.9317,-1.9965 0,-1.7303 -2.9282,-0.2662 -0.5324,-3.4606 -1.9965,-1.4641 -3.993,-0.1331 -0.5324,-5.0578 1.5972,-5.1909 -2.3958,-4.7916 -4.2592,-0.1331 -0.7986,-6.3888 -3.4606,-0.6655 -3.1944,-2.2627 -3.3275,-0.5324 -2.5289,-3.3275 -0.1331,-3.8599 -3.0613,0.6655 -4.2592,2.662 -3.1944,0 -2.7951,0.1331 0.3993,-3.993 -4.2592,1.4641 -4.6585,-6.3888 2.2627,-2.9282 0.5324,-3.1944 5.4571,-2.3958 1.9965,0.1331 1.331,-7.0543 -1.5972,-3.1944 0.5324,-4.7916 6.3888,-0.9317 0,0 0,0 0,0 0,0 1.1979,2.1296 3.4606,1.4641 5.5902,-4.3923 -1.7303,-0.1331 -1.5972,-3.8599 7.8529,-0.6655 2.1296,-2.3958 3.0613,3.1944 -1.1979,3.0613 3.0613,3.8599 5.8564,-1.8634 1.331,-1.4641 3.4606,0.3993 4.1261,0.3993 3.3275,-4.6585 1.5972,0.3993 0.9317,4.2592 1.9965,1.331 0.2662,4.1261 -3.993,1.1979 1.8634,3.4606 3.5937,0.3993 3.8599,-3.5937 6.9212,1.9965 0.9317,3.4606 2.3958,-1.0648 5.324,1.5972 4.1261,-0.1331 7.1874,5.1909 4.1261,0.5324 1.9965,5.1909 -1.331,5.1909 -4.1261,3.993 -2.9282,4.7916 -2.2627,1.5972 0.2662,6.7881 -2.1296,9.1839 -5.9895,9.4501 -5.8564,0 -6.655,3.5937 -4.2592,4.7916 -0.3993,6.655 -3.993,5.4571 -2.2627,-0.7986 -3.5937,8.2522 -1.8634,1.7303 -0.3993,-0.2662 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Brazil"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "BR",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "KI",
			      "svg": "m 64.65557,415.07323 0.2662,0.5324 0.2662,0.2662 -0.5324,-0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Kiribati"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "KI",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "PH",
			      "svg": "m 776.74057,389.11873 5.1909,2.3958 -2.662,5.7233 -2.662,-3.4606 z m 5.9895,1.4641 1.9965,-2.3958 1.4641,3.7268 -2.3958,2.1296 z m -0.2662,10.9142 -5.5902,-0.9317 3.3275,-2.5289 1.331,1.4641 4.1261,-2.1296 0,-2.662 2.1296,3.0613 0.6655,3.993 -2.1296,-0.1331 -0.9317,4.3923 -2.9282,-1.4641 z m -12.5114,-8.5184 4.2592,-7.3205 -2.3958,-3.1944 -0.6655,-3.993 3.1944,-5.9895 3.0613,1.0648 0.6655,2.9282 -2.5289,3.0613 0.3993,4.5254 1.9965,-0.3993 4.9247,1.7303 -0.9317,5.0578 -2.2627,-4.5254 -3.7268,-1.331 -1.1979,4.5254 -2.2627,0.3993 -1.5972,3.993 -6.1226,5.1909 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Philippines"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "",
			        "active": true,
			        "posx": 812.0020751953125,
			        "posy": 383.4207763671875,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 10
			      }
			    },
			    {
			      "name": "MX",
			      "svg": "m 244.73987,367.42343 -0.6655,0.7986 0,-0.3993 0.1331,-0.3993 z m -50.8442,-3.0613 0.3993,0.1331 0.7986,1.0648 -0.6655,-0.5324 z m -13.4431,-7.4536 0.3993,0 0.2662,0.3993 0,0.1331 z m -0.5324,-1.331 -0.1331,0.5324 -0.1331,0 0.1331,-0.5324 z m -7.7198,-8.3853 -0.1331,0.1331 -0.2662,-0.2662 0.3993,-0.6655 z m -7.7198,-2.2627 -0.1331,0 -0.1331,-0.6655 0.2662,0.2662 z m 14.5079,0.5324 0.2662,-1.331 0.6655,0.5324 -0.3993,0.6655 z m -2.3958,-2.2627 0.7986,0.6655 0.1331,0.7986 -1.1979,-1.0648 z m 31.2785,-0.1331 -0.1331,0.2662 0.5324,0 1.9965,3.3275 1.9965,3.3275 0.5324,0.6655 0.2662,0.6655 2.3958,1.331 2.7951,0.2662 -1.8634,9.317 1.8634,4.9247 3.3275,5.0578 3.4606,1.5972 6.655,-1.331 2.3958,-1.331 1.4641,-4.9247 5.5902,-1.5972 3.5937,0.9317 -1.7303,2.7951 -1.0648,5.1909 -1.1979,-0.6655 -1.4641,1.5972 -0.6655,0.1331 -4.6585,0 -1.1979,1.4641 2.662,2.3958 -3.4606,0.7986 -1.1979,3.8599 -4.2592,-3.993 -2.3958,-0.9317 -4.3923,1.9965 -11.4466,-4.1261 -6.2557,-2.7951 -3.7268,-2.662 -1.8634,-2.7951 1.331,-2.7951 -1.5972,-3.0613 -6.3888,-7.0543 -2.9282,-1.4641 0,-2.5289 -6.7881,-6.2557 -2.3958,-5.9895 -3.8599,-1.7303 -0.2662,4.3923 2.662,2.5289 10.648,16.5044 -6.7881,-4.3923 -0.2662,-3.1944 -7.1874,-4.9247 2.5289,-1.7303 -4.1261,-3.5937 -3.7268,-7.7198 5.8564,0.1331 9.5832,3.1944 7.3205,0 4.2592,-1.1979 4.2592,3.4606 0.9317,2.3958 3.4606,1.8634 2.1296,-2.5289 z m 9.317,11.3135 -0.5324,1.331 0.2662,1.0648 0.6655,-2.3958 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Mexico"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "",
			        "active": true,
			        "posx": 176.09652709960938,
			        "posy": 383.4207763671875,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 11
			      }
			    },
			    {
			      "name": "BU",
			      "svg": "m 261.90977,379.93483 0,0 0,0 0,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "BU"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "BU",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "MV",
			      "svg": "m 652.82447,405.75623 0.6655,0.9317 -0.7986,0 0.2662,-0.5324 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Maldives"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "MV",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "SP",
			      "svg": "m 761.03477,392.71243 0,0 -0.1331,0 0.1331,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "SP"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "SP",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "GB",
			      "svg": "m 457.56677,250.29543 0.1331,0.2662 -0.2662,0.1331 -0.3993,-0.3993 z m 0.2662,-1.0648 0,0.6655 0.3993,0.1331 -1.0648,-0.1331 z m 0.6655,-0.2662 -0.5324,-0.2662 1.0648,0.3993 -0.2662,0.2662 z m 4.6585,-4.1261 -0.6655,1.8634 -0.1331,-1.331 -0.7986,-0.3993 z m 0.2662,-1.1979 0.3993,0.1331 -1.0648,0.2662 0.2662,-0.6655 z m 0.3993,-0.5324 -0.1331,0.3993 -0.3993,0 0.1331,-0.5324 z m -205.3733,127.6429 0.1331,-0.1331 0.5324,0.1331 -0.3993,0.1331 z m 24.8897,-6.5219 -0.5324,0 -0.1331,-0.2662 0.3993,0.1331 z m -1.331,-0.2662 -0.1331,0.2662 -0.3993,0 0.3993,-0.1331 z m 165.7095,-109.0089 0,-1.9965 2.1296,-1.1979 -0.2662,1.7303 z m 104.4835,72.9388 -0.1331,0 -0.1331,0 -0.1331,-0.1331 0,0 0.1331,0.1331 -0.2662,0 0,-0.1331 0,0 0,-0.1331 0.1331,0 0.3993,0 0,0 -0.2662,0 z m -0.3993,-0.1331 0,0 0,0 z m -99.5588,-3.3275 -0.1331,0.1331 0,-0.1331 z m 97.6954,4.3923 -0.2662,0 -0.3993,0 0.1331,-0.1331 z m -102.6201,-64.5535 2.3958,-0.7986 1.9965,2.2627 -1.8634,1.8634 -4.9247,-1.1979 z m 10.7811,-13.0438 -2.662,2.662 5.8564,1.7303 -3.5937,5.0578 3.993,1.7303 1.0648,3.3275 2.7951,1.8634 1.0648,3.5937 3.4606,1.0648 -2.5289,4.3923 1.7303,1.1979 -2.7951,1.331 -5.7233,0.3993 -0.1331,4.7916 -1.0648,-4.6585 -7.5867,1.1979 3.1944,-3.3275 2.7951,0 -5.7233,-2.2627 2.7951,-1.331 0.1331,-3.3275 2.5289,-0.5324 0.7986,-2.7951 -1.331,-2.3958 -2.5289,1.5972 -1.8634,-1.4641 1.1979,-2.3958 -3.5937,-6.655 2.662,-4.7916 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "United Kingdom"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "",
			        "active": true,
			        "posx": 469.8006286621094,
			        "posy": 260.65057373046875,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 10
			      }
			    },
			    {
			      "name": "GR",
			      "svg": "m 532.76827,327.36033 -3.993,0.6655 -3.0613,-1.0648 1.7303,-0.7986 z m 3.3275,-3.0613 1.5972,-0.7986 -0.3993,1.0648 -0.6655,0.6655 z m -1.0648,-1.1979 -0.5324,-0.2662 0.5324,-0.5324 -0.1331,0.3993 z m -0.6655,-1.331 0.2662,0.1331 -0.2662,0.2662 0.1331,-0.2662 z m -4.3923,0.2662 0.9317,-0.6655 0.1331,0.5324 -0.5324,1.0648 z m 2.9282,-1.8634 -0.6655,0.2662 -0.2662,-0.1331 0.2662,-0.1331 z m -0.6655,-2.7951 0.2662,0.7986 -0.5324,-0.1331 -0.2662,-0.6655 z m -1.5972,-4.3923 -0.5324,0.1331 0.5324,-1.4641 0.5324,0 z m -11.3135,-1.9965 0.2662,-0.1331 -0.2662,0.1331 -0.1331,-0.1331 0,-0.1331 0.1331,-0.1331 0.2662,0 1.9965,-0.7986 2.662,-0.6655 5.8564,0.2662 2.7951,-1.4641 0.7986,0.9317 -1.5972,1.9965 -2.5289,-0.7986 -6.1226,1.5972 -0.1331,1.331 7.1874,7.7198 -3.7268,-2.5289 -3.0613,2.1296 1.1979,3.3275 -3.3275,-0.7986 -1.331,-4.3923 -3.4606,-4.3923 0.9317,-0.3993 z m 14.9072,9.0508 -0.1331,0 -0.5324,-0.2662 0.3993,0 0.5324,0 0.2662,0.1331 z m -1.0648,-4.6585 0.3993,0.5324 -0.3993,0.2662 -1.5972,-0.6655 1.4641,-0.3993 0,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Greece"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "",
			        "active": true,
			        "posx": 513.242431640625,
			        "posy": 322.98004150390625,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 8
			      }
			    },
			    {
			      "name": "AS",
			      "svg": "m 30.98127,456.60043 -0.1331,0 -0.1331,0.2662 -0.2662,-0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "American Samoa"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "AS",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "DK",
			      "svg": "m 494.43547,264.67023 1.331,1.0648 -0.7986,0 -1.0648,-0.3993 z m -2.2627,0.1331 0.3993,0.1331 -0.2662,0.1331 -0.5324,-0.5324 z m 5.5902,-0.3993 -0.9317,0.5324 0,-0.3993 0.3993,-0.1331 z m -7.0543,-0.2662 0.6655,0.5324 -0.1331,0.2662 -0.5324,-0.1331 z m 2.662,0.5324 -0.2662,0.6655 -0.2662,-0.2662 0.9317,-1.1979 z m 4.5254,-2.662 -1.5972,3.5937 -2.2627,-3.4606 2.9282,-1.7303 z m -8.1191,3.1944 -1.4641,-0.3993 -0.3993,0 -1.4641,-5.8564 4.2592,-1.9965 1.1979,0.6655 1.4641,5.9895 -3.1944,-0.6655 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Denmark"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "DK",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "GL",
			      "svg": "m 330.85557,211.43023 0.2662,0.2662 -0.6655,0.1331 -0.2662,-0.2662 z m 1.9965,-1.0648 -2.3958,0.5324 0.2662,-0.2662 0.9317,-0.2662 z m -6.3888,-7.5867 -0.6655,0 -0.2662,-0.5324 0.6655,0.1331 z m 68.8127,-1.7303 5.9895,-1.4641 0,1.8634 -7.0543,1.0648 z m -65.8845,-1.331 -1.1979,-0.3993 0.9317,-0.9317 0.6655,0.9317 z m -5.4571,-8.2522 -0.5324,0.5324 -0.9317,-0.2662 0.6655,-0.2662 z m 1.7303,-0.1331 -1.4641,1.1979 -0.1331,-1.0648 0.9317,-0.2662 z m -3.3275,-5.324 0.7986,0.1331 -1.5972,0.1331 0,-0.5324 z m -0.5324,-3.0613 -1.4641,0 -1.1979,0 2.1296,-0.3993 z m -33.4081,-10.648 -1.0648,0 0.1331,-0.2662 1.0648,-0.1331 z m -6.655,-4.7916 2.1296,0.3993 -0.7986,0.2662 -2.1296,-0.3993 z m 3.3275,-0.2662 1.7303,0.5324 -2.1296,0 -0.5324,-0.3993 z m 10.2487,-18.1016 0.7986,0.2662 -0.5324,0.1331 -0.2662,-0.1331 z m 33.5412,58.6971 -3.1944,-1.9965 0.3993,-2.2627 3.993,0 2.7951,3.3275 z m 13.7093,-71.7409 9.9825,2.3958 -0.7986,1.9965 -5.4571,-1.7303 z m -11.8459,87.846 -0.3993,0 0,-0.2662 0,-0.1331 -0.2662,-0.1331 -0.9317,-3.4606 3.4606,-1.8634 -4.2592,-0.6655 1.9965,-4.7916 5.0578,-1.5972 0.9317,-5.1909 -7.7198,-3.0613 -1.8634,-1.5972 5.4571,0.1331 4.5254,1.7303 -4.7916,-4.1261 -0.2662,0.1331 -1.1979,-0.1331 0.3993,-0.7986 0.1331,0 -0.2662,-0.2662 3.0613,-0.7986 -2.5289,-0.2662 -1.0648,0.6655 -0.6655,-0.6655 1.0648,0 0.2662,0 -2.9282,-0.2662 -3.0613,1.5972 -1.5972,-1.4641 0.5324,-0.7986 0.3993,0.1331 0.3993,-0.2662 -0.3993,-0.2662 -0.1331,0.1331 0.7986,-1.4641 0.6655,-0.5324 0,-0.2662 -0.2662,0.1331 1.331,-2.2627 -1.331,-0.5324 0.1331,-0.1331 -1.0648,-0.3993 -0.1331,0 -0.2662,-0.1331 -0.3993,-1.9965 -0.7986,-0.3993 0.5324,0 0.2662,0.1331 -0.7986,-4.1261 -2.3958,-2.9282 -2.7951,-0.6655 -0.6655,-3.4606 -6.2557,-2.2627 -6.655,-1.0648 -1.331,1.1979 -5.5902,-0.6655 -0.6655,1.7303 -4.9247,-0.6655 -3.1944,-1.7303 4.2592,-1.5972 -6.1226,-0.5324 -1.331,-2.1296 10.5149,-0.9317 1.331,-1.331 -7.5867,0.7986 -9.317,-3.8599 0.7986,-1.9965 8.2522,-1.5972 3.3275,-1.5972 5.324,-0.1331 2.7951,-2.2627 -0.5324,-3.0613 -5.0578,-0.1331 -1.0648,-1.7303 11.4466,-5.1909 3.5937,0.9317 1.9965,-2.662 -1.7303,-1.4641 7.3205,-2.2627 10.5149,-1.5972 2.2627,1.5972 -0.5324,3.4606 2.1296,-3.0613 1.4641,0.1331 0.6655,0.1331 2.2627,0.1331 -0.1331,-0.1331 4.6585,0.3993 -4.2592,-3.5937 5.324,0.3993 7.7198,2.5289 2.1296,1.5972 3.7268,-3.8599 -5.1909,-2.3958 12.1121,0.1331 -11.8459,-0.6655 2.5289,-1.9965 12.2452,-0.1331 2.9282,-1.4641 15.8389,-1.331 4.6585,0.2662 12.7776,1.8634 -1.0648,0.6655 -11.979,0.3993 8.6515,0.5324 5.4571,-0.6655 1.8634,1.7303 7.986,1.7303 -2.7951,1.7303 -18.9002,1.331 -7.4536,1.7303 12.7776,-1.331 7.986,0.5324 -4.3923,3.4606 6.655,-1.9965 1.4641,-1.7303 4.5254,-0.3993 0.3993,3.4606 -4.7916,3.5937 2.9282,-0.5324 8.5184,-4.9247 3.993,1.5972 3.1944,-1.5972 4.7916,0.1331 6.5219,2.1296 -7.4536,4.1261 -7.0543,0.6655 3.1944,1.5972 -7.0543,2.2627 3.3275,0 -5.8564,3.5937 1.5972,1.331 -3.8599,1.7303 -2.3958,5.4571 5.5902,-0.2662 3.4606,1.5972 -6.655,1.331 5.4571,0.9317 -1.0648,2.3958 -4.5254,-0.9317 -3.0613,1.5972 0,2.1296 4.5254,-0.1331 1.4641,4.5254 5.1909,1.8634 -2.7951,0.2662 -2.3958,3.5937 -4.7916,0.9317 1.7303,3.1944 -4.3923,0.9317 -4.3923,-1.5972 -5.4571,1.7303 4.1261,3.993 5.1909,2.3958 -1.4641,0.9317 3.1944,2.1296 0.9317,3.3275 -4.7916,0.5324 -2.3958,-3.0613 -3.3275,-0.3993 -5.9895,1.331 -0.7986,2.3958 3.8599,-0.5324 -1.4641,2.2627 5.0578,-1.8634 7.4536,1.331 -9.8494,6.3888 -7.986,2.2627 -6.655,0.6655 -6.7881,7.1874 -8.1191,3.3275 -0.3993,-2.7951 -7.1874,7.8529 0.7986,2.662 -4.1261,4.5254 -1.1979,6.655 -1.5972,3.5937 -5.4571,-0.9317 -0.2662,-1.7303 -6.2557,-0.7986 -2.7951,-2.1296 -2.7951,-6.1226 -3.1944,-2.1296 0.2662,-3.7268 -1.9965,1.0648 0.1331,-3.4606 z m 75.6008,-32.6095 -3.0613,-0.5324 -2.9282,-1.331 3.0613,-1.1979 3.1944,1.7303 3.4606,1.8634 -2.662,-0.3993 2.3958,1.331 -0.5324,1.7303 -5.5902,-2.2627 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Greenland"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "GL",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "GU",
			      "svg": "m 834.77217,385.92433 -0.2662,0.5324 -0.1331,-0.3993 0.6655,-0.6655 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Guam"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "GU",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "MP",
			      "svg": "m 836.90177,381.93133 0.1331,-0.5324 0.3993,-0.1331 -0.2662,0.3993 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Northern Mariana Islands"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "MP",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "PR",
			      "svg": "m 299.44397,373.41293 -2.3958,0.9317 -2.2627,0 0,-1.5972 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Puerto Rico"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "PR",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "VI",
			      "svg": "m 300.77497,374.74393 0.5324,0 -0.9317,0.2662 0.1331,-0.2662 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Virgin Islands USA"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "VI",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "CA",
			      "svg": "m 264.30557,303.66853 0,0.2662 0.3993,0.2662 -6.2557,0.9317 -2.9282,0.6655 0,0 0,0 -0.3993,-0.3993 0.3993,-0.2662 0.2662,-1.1979 1.7303,-1.0648 1.0648,-5.8564 3.993,1.4641 -2.5289,-3.5937 -8.6515,-1.331 0,-0.6655 -0.9317,0.2662 -0.9317,-4.6585 -2.5289,-0.2662 -1.4641,-2.5289 -4.1261,-0.7986 -3.8599,3.3275 -4.7916,-0.1331 -3.0613,-1.5972 -6.3888,-1.5972 -70.2768,0 -0.5324,-0.2662 -0.2662,0.2662 -0.1331,0 -4.1261,-3.1944 -0.5324,-0.2662 -0.1331,0.1331 -0.1331,-0.1331 -0.3993,-0.2662 -0.1331,-0.1331 -0.1331,0 -0.1331,0.1331 0.3993,0.3993 0,-0.2662 4.2592,4.2592 -0.1331,-0.3993 0.6655,0.3993 0.6655,0 -0.9317,0.2662 0.2662,0.3993 -3.4606,0.1331 -3.0613,-1.9965 -0.2662,0 0.1331,-0.1331 -0.5324,-0.2662 -0.2662,0 0,-0.1331 -3.993,-2.5289 -0.2662,-2.662 3.4606,1.0648 0.1331,-0.1331 0.3993,0 -0.3993,-0.1331 -0.2662,0 0.1331,-0.1331 -3.1944,-1.5972 -0.3993,-3.0613 -0.3993,1.0648 -0.3993,-0.3993 0.2662,-0.5324 0.5324,-0.1331 0,0 -0.2662,0 -0.1331,-0.2662 0.2662,0 0,-0.1331 -0.1331,0 0.1331,-0.2662 0,0 -0.2662,-1.7303 -1.331,-1.1979 -0.6655,1.5972 -0.7986,-1.1979 0.1331,-0.3993 -0.3993,0 0,-0.3993 0.3993,-0.2662 0,0.5324 0.1331,-0.5324 0.7986,0.3993 -0.5324,-0.5324 -0.2662,0.1331 -0.1331,-0.1331 0.1331,-0.2662 -3.4606,-3.0613 0.3993,-1.7303 -0.3993,0.1331 0,-0.1331 0.3993,-0.5324 0.6655,-3.4606 -4.5254,-2.3958 -3.993,-6.655 -5.324,-5.324 -4.9247,3.4606 -4.5254,-4.5254 -4.6585,-0.7986 0,-38.8652 4.7916,0.6655 4.7916,2.5289 3.4606,0.1331 0.1331,-1.7303 6.655,-0.5324 7.1874,-3.4606 2.2627,0.6655 -4.3923,1.9965 10.5149,-3.0613 4.2592,4.2592 2.3958,-3.5937 0.2662,3.4606 3.7268,-2.2627 22.3608,5.8564 -3.4606,2.662 4.2592,1.0648 5.8564,-0.1331 3.0613,-1.0648 5.9895,2.7951 -0.2662,-0.3993 0.5324,-0.2662 0,0.3993 -0.1331,0.2662 1.8634,0.9317 -1.9965,-2.5289 5.9895,-4.1261 -5.0578,2.1296 -1.5972,-1.9965 6.2557,-1.1979 3.3275,3.7268 7.5867,1.5972 8.1191,-0.5324 -0.9317,-2.5289 7.1874,0.2662 -1.4641,3.5937 2.9282,2.5289 -0.3993,-5.0578 1.5972,0.1331 3.1944,-3.5937 -2.662,0.3993 0.7986,-3.0613 -4.7916,-1.8634 -0.6655,-6.655 4.9247,-3.3275 3.3275,2.5289 0.3993,2.7951 3.8599,3.3275 -3.3275,1.9965 6.1226,3.7268 0.3993,2.7951 3.4606,-4.3923 2.5289,2.2627 -1.1979,1.9965 2.2627,5.0578 4.1261,-4.1261 0.6655,-2.9282 2.3958,-1.331 -1.9965,-3.3275 7.3205,0.5324 3.1944,1.9965 0.2662,2.5289 -3.5937,0.7986 3.5937,4.3923 -0.6655,1.9965 -5.5902,3.4606 -7.8529,-1.0648 2.3958,1.1979 -3.8599,3.4606 -5.8564,-2.5289 1.5972,2.5289 5.0578,0.3993 -2.3958,4.2592 -5.0578,0.1331 -2.5289,2.3958 0,0.1331 0.7986,0.2662 -0.1331,0.1331 -0.1331,-0.2662 -0.5324,-0.1331 0.7986,1.9965 -5.1909,2.2627 -4.2592,6.3888 -1.1979,3.4606 1.0648,4.6585 3.1944,-0.1331 1.8634,4.7916 -0.6655,1.8634 4.2592,-1.1979 5.4571,1.4641 3.3275,2.9282 7.5867,2.9282 5.8564,0.6655 0,7.3205 6.5219,6.2557 3.1944,-4.1261 -1.5972,-6.2557 -1.5972,-1.7303 5.0578,-2.2627 2.7951,-2.662 -1.0648,-7.0543 -3.7268,-2.3958 3.1944,-4.5254 -2.2627,-3.993 1.5972,-2.3958 -1.5972,-3.1944 1.7303,-1.1979 6.9212,1.7303 2.7951,-1.331 5.0578,3.1944 -0.2662,1.1979 6.1226,2.2627 -1.0648,0.9317 0.9317,6.2557 4.5254,2.9282 4.7916,-2.7951 2.3958,-5.7233 1.9965,3.7268 6.9212,8.5184 -1.4641,1.7303 5.4571,5.324 6.3888,2.2627 -1.8634,0.9317 5.5902,2.662 0.5324,4.2592 -3.4606,2.662 -4.1261,0.7986 -3.1944,2.9282 -9.1839,0.3993 3.993,2.7951 -0.9317,0.9317 -5.4571,-2.3958 1.1979,-1.331 -6.3888,-0.2662 -2.3958,3.1944 -4.2592,1.8634 -5.8564,6.5219 -4.2592,1.7303 -4.3923,3.8599 -1.331,0.3993 -1.331,1.1979 -8.1191,1.8634 -0.2662,1.8634 0,0.2662 z m -120.4555,-23.8249 0.9317,0.2662 -0.6655,-0.3993 z m -1.0648,2.2627 -0.5324,0 0.3993,0.7986 0.5324,-0.1331 z m 142.0177,9.7163 -0.2662,0 0.6655,-0.5324 0,0.2662 z m -134.2979,-7.3205 0.3993,0.5324 0.5324,0.2662 -0.3993,-0.1331 z m -10.648,-7.8529 -0.5324,0 -0.1331,-0.5324 0.3993,-0.2662 z m 124.4485,-2.1296 -0.6655,0.3993 -0.7986,0.2662 0,-0.3993 z m -132.4345,0 -0.1331,0.1331 -0.1331,0.2662 0,-0.5324 z m 7.1874,0.2662 -0.2662,-0.2662 0.2662,-0.2662 0.1331,0 z m -0.1331,-0.6655 -0.1331,0.2662 -0.5324,0 0.2662,-0.2662 z m -1.0648,-0.9317 0.1331,0.5324 -0.1331,0.2662 -0.2662,-0.6655 z m 0.3993,-0.3993 0.1331,0.3993 -0.1331,0.2662 -0.5324,-0.5324 z m -7.986,-0.3993 0.5324,0 0,0.2662 -0.3993,0.1331 z m 8.3853,1.1979 -0.2662,-0.7986 0.2662,-0.6655 0.2662,1.0648 z m -2.3958,-1.4641 0.9317,0.6655 0,0.3993 -0.3993,-0.2662 z m 2.662,0.6655 0,-0.2662 -0.1331,-0.2662 0.3993,0 z m -3.3275,-1.5972 0.1331,0.3993 -0.2662,0 -0.2662,-0.5324 z m 0.3993,-0.2662 0.2662,0.5324 -0.2662,0 -0.2662,-0.6655 z m 122.3189,-0.2662 0.7986,0.1331 1.0648,1.7303 -3.4606,-1.1979 z m 3.993,0.2662 0.1331,0.1331 -0.3993,0.1331 0.1331,-0.3993 z m -129.2401,-1.0648 0.1331,-0.6655 1.5972,0.9317 -0.1331,0.7986 z m 1.1979,-0.5324 -0.6655,0 -0.1331,-0.2662 0.5324,-0.2662 z m 0.7986,-0.1331 1.1979,1.0648 -0.6655,0.3993 -1.8634,-2.1296 z m -2.2627,-1.5972 0.7986,0.1331 0.2662,0.3993 -0.9317,0.5324 z m -1.0648,-1.7303 0.9317,0 0.1331,0.7986 -0.7986,-0.2662 z m 132.0352,-1.0648 -0.7986,0.2662 -0.1331,-0.1331 1.5972,-0.2662 z m 0.7986,-4.1261 0.5324,-1.331 0.2662,0 -0.1331,0.9317 z m -1.5972,-1.9965 0,0.6655 -0.9317,0.7986 0.7986,-0.7986 z m -0.6655,-0.9317 -0.2662,0.1331 0.2662,-0.3993 0.2662,0.3993 z m 31.4116,-5.1909 -0.3993,-0.1331 0.1331,-0.2662 0.1331,0 z m -3.8599,-2.662 -0.7986,0.1331 0,-0.6655 0.6655,0 z m -28.8827,-2.5289 0.3993,-0.2662 0.1331,0.2662 -0.2662,0.1331 z m 41.7934,-0.3993 -0.3993,0.2662 -0.1331,-0.1331 0.2662,-0.5324 z m -40.8617,-0.3993 0.2662,0.1331 -0.2662,0.2662 -0.3993,0.1331 z m 38.9983,-2.662 0.6655,1.0648 -0.6655,-0.2662 -0.2662,-0.3993 z m -8.6515,0 0.6655,0.3993 -0.3993,0.6655 -1.0648,0 z m -25.8214,-1.0648 -0.2662,0.2662 -0.9317,0.2662 0.2662,-0.2662 z m 34.2067,-3.0613 -0.1331,1.1979 -1.5972,-1.0648 1.0648,-0.3993 z m -2.5289,-0.7986 0.2662,0.3993 -0.6655,-0.2662 0.3993,-0.2662 z m -68.9458,-0.3993 -0.5324,0.3993 -0.3993,-0.2662 0.5324,0 z m 70.8092,0 0.6655,0.6655 -0.9317,0 -0.2662,-0.3993 z m -36.6025,-1.7303 0.2662,1.5972 -1.0648,1.5972 -1.1979,-2.2627 z m -33.0088,0 0.1331,-0.1331 0.5324,0 -0.2662,0.2662 z m 70.543,-0.6655 0.7986,0 -0.5324,0.6655 -0.7986,-0.1331 z m -33.4081,0 -0.6655,-0.1331 1.1979,0 -0.3993,0.1331 z m 33.0088,0 -0.6655,0 0.2662,-0.1331 0.2662,-0.1331 z m -24.4904,-0.6655 1.0648,0.1331 0.2662,0.2662 -1.0648,-0.1331 z m 9.317,-0.5324 1.5972,1.0648 -1.4641,0.1331 -1.1979,-1.331 z m -28.7496,-0.5324 -2.662,3.1944 -1.9965,-1.1979 1.5972,-1.7303 z m 9.317,-1.9965 1.8634,0.1331 0.3993,1.0648 -0.9317,0.3993 z m 36.3363,-0.5324 -0.2662,0.5324 0,0.6655 -0.5324,-1.1979 z m -33.0088,-0.2662 1.4641,0.7986 -1.0648,0.2662 -1.1979,-0.6655 z m 32.8757,-0.3993 -0.2662,0 0,-0.2662 0.3993,0.1331 z m -33.9405,-0.9317 -0.5324,0.2662 -0.5324,-0.1331 0,-0.1331 z m 10.2487,-1.9965 -0.1331,0.7986 -0.1331,-0.1331 -0.1331,-0.7986 z m 28.2172,-5.1909 0.5324,0 0.2662,0.3993 -0.7986,-0.1331 z m -53.1069,-0.3993 -0.5324,0.1331 -0.1331,-0.2662 0.5324,0 z m -4.5254,-0.9317 0.7986,0.7986 0.1331,1.331 -1.0648,-0.9317 z m 1.8634,-0.2662 1.4641,0.6655 0.9317,1.4641 -1.8634,-0.6655 z m 3.0613,-0.7986 0.5324,0.1331 -0.1331,0.3993 -0.7986,-0.3993 z m 52.8407,-3.7268 0.1331,0 -1.1979,0.6655 0.3993,-0.6655 z m -3.0613,-0.6655 0.6655,0.1331 -0.2662,0.1331 -0.9317,-0.1331 z m -114.1998,-0.9317 0.2662,0 -0.1331,0.3993 -0.3993,-0.3993 z m 113.6674,0.1331 -0.5324,0 0.1331,-0.5324 0.3993,0.3993 z m -112.4695,-0.1331 -0.5324,0 0.1331,-0.5324 0.2662,0 z m -13.4431,-1.5972 -0.5324,0 1.1979,-0.1331 0,0.1331 z m 13.1769,0.1331 -0.5324,0 0.1331,-0.2662 0.2662,-0.1331 z m -2.7951,-0.3993 0.6655,0.1331 -0.1331,0.2662 -0.5324,-0.2662 z m -0.5324,-0.2662 0.1331,0.2662 -0.3993,-0.2662 0,-0.2662 z m -1.331,-0.5324 0.6655,-0.2662 -0.7986,0.5324 -0.7986,0.2662 z m 90.7742,0.3993 2.1296,0.3993 0,0.9317 -2.5289,-0.1331 z m -30.8792,0.5324 -0.5324,0.9317 -0.9317,-0.7986 0.5324,-1.7303 z m -64.4204,-1.1979 -0.2662,0 0.1331,-0.3993 0.3993,0 z m 91.839,-0.3993 1.4641,3.3275 -4.9247,1.331 0.6655,-4.3923 z m -8.6515,0.5324 -0.3993,-0.1331 0,-0.5324 0.9317,0.2662 z m -7.8529,-0.7986 0.2662,0.1331 -0.2662,0.1331 -0.3993,-0.2662 z m 20.2312,0.5324 -0.6655,-0.7986 0.3993,0 0.3993,0.3993 z m -93.3031,-1.4641 0,0.1331 0.1331,0.2662 -0.9317,0 z m 15.8389,0.7986 -1.331,-0.6655 1.0648,-0.1331 0.5324,0.2662 z m 66.1507,-1.0648 -0.1331,0.6655 -0.7986,0 0.6655,-0.5324 z m 10.3818,0.3993 -0.6655,0 -0.2662,-0.3993 0.2662,-0.1331 z m -0.9317,0 0.1331,0.9317 -1.4641,-0.7986 0.3993,-0.9317 z m -68.5465,-1.0648 -0.1331,0.9317 -1.331,-0.5324 0.7986,-0.5324 z m 4.1261,-0.5324 -0.6655,0.7986 -0.5324,-0.1331 0,-1.0648 z m 0.3993,-0.1331 -0.5324,-0.2662 0.2662,-0.6655 0.2662,0.2662 z m -91.839,-0.7986 0.1331,0.1331 -0.5324,-0.1331 0,-0.2662 z m 87.5798,0.1331 0.1331,-0.6655 0.2662,0.1331 -0.1331,0.3993 z m 28.3503,-1.1979 0.2662,0.5324 -0.3993,0.1331 -0.1331,-0.6655 z m 30.8792,-0.1331 0,0.6655 -1.0648,1.4641 -1.4641,-0.1331 z m -145.6114,-0.9317 0.3993,-0.2662 -0.3993,0.9317 -0.6655,-0.2662 z m 137.2261,0.6655 0.5324,0.1331 0.1331,0.2662 -1.0648,-0.2662 z m -21.5622,0.2662 -0.3993,0.6655 -0.3993,-0.3993 0.3993,-0.3993 z m 33.5412,-0.1331 0.9317,0.1331 -1.1979,1.1979 -0.6655,-0.6655 z m -61.7584,-0.6655 0.7986,0.3993 -0.6655,0.3993 -0.2662,-0.2662 z m 11.7128,0 1.331,0 0,0.9317 -1.0648,-0.5324 z m 74.8022,0 -0.7986,0.2662 -0.2662,-0.1331 0.5324,-0.3993 z m -72.2733,-0.2662 0.7986,0.3993 -0.9317,0.9317 0,-1.0648 z m -110.0737,0.1331 -0.6655,0.2662 -0.2662,-0.2662 0.2662,-0.2662 z m 155.1946,-0.3993 -1.4641,0.9317 -0.7986,-0.1331 1.4641,-1.0648 z m -4.3923,-0.6655 0.3993,0.9317 -3.0613,-0.2662 1.331,-0.5324 z m -7.1874,0.2662 -0.1331,0.1331 -0.6655,-0.2662 0.3993,-0.1331 z m -2.662,-0.1331 -0.3993,0.2662 -0.3993,-0.1331 0,-0.2662 z m -21.0298,-0.1331 0.1331,-0.2662 0.6655,0.2662 -0.1331,0.3993 z m -14.1086,-0.3993 -0.2662,0 -0.1331,-0.1331 0.3993,0 z m 26.3538,-0.9317 1.0648,0 -0.5324,0.6655 -1.4641,-0.6655 z m -75.0684,-1.9965 0.7986,0 -1.1979,0.2662 -0.3993,-0.2662 z m -1.0648,0 -0.9317,0 -0.1331,-0.1331 0.1331,-0.1331 z m -28.6165,-0.2662 -0.3993,0 -0.2662,0.2662 0.3993,-0.5324 z m 69.8775,-0.3993 0.5324,0 0.6655,1.0648 -1.0648,-0.3993 z m 70.1437,-3.4606 0.9317,-0.1331 -0.5324,0.6655 -0.6655,-0.2662 z m 1.0648,-0.5324 -0.6655,0 0.2662,-0.5324 0.3993,0 z m -81.191,-8.5184 -1.7303,2.2627 -3.3275,-4.2592 3.5937,-0.1331 z m 48.4484,100.2243 -0.2662,0 -0.6655,0 0.2662,-0.2662 z m -5.4571,-3.5937 0.2662,0.2662 -0.9317,0 0.1331,-0.3993 z m 13.9755,9.0508 0.7986,0.1331 0.2662,1.4641 -3.5937,-1.0648 z m -2.662,0.2662 -0.1331,0.2662 -0.3993,-0.1331 0.2662,-0.2662 z m -1.8634,-1.0648 0.6655,0.2662 -0.5324,0.3993 -0.2662,-0.3993 z m 19.5657,6.655 -0.3993,0.1331 0.1331,-0.2662 0.6655,0 z m -49.1139,-134.6972 6.1226,0.2662 -0.6655,1.4641 -6.3888,-0.1331 z m 91.3066,128.9739 -3.0613,1.7303 -1.331,-1.8634 2.3958,-3.1944 z m -184.8759,-23.0263 -0.5324,-0.6655 1.8634,-0.3993 0.2662,1.9965 z m -1.7303,-4.2592 3.4606,0.1331 -0.9317,3.0613 -2.1296,-0.6655 z m 136.2944,-6.655 -1.1979,0.5324 1.8634,-2.662 0.5324,0.7986 z m -44.1892,-53.9055 2.662,2.7951 -1.7303,1.8634 -7.8529,-2.5289 3.0613,-1.4641 0.9317,-2.3958 z m 5.5902,-30.2137 3.0613,2.3958 -0.2662,3.1944 -7.7198,-1.7303 1.0648,-2.3958 z m -48.1822,-11.1804 7.3205,-1.5972 2.662,0.7986 -1.4641,2.5289 -4.7916,1.0648 z m 10.648,-2.7951 -4.3923,-0.2662 -5.324,-0.1331 7.1874,-1.9965 z m 34.4729,-0.9317 2.5289,2.1296 -5.0578,1.8634 -3.8599,-3.993 0.6655,-1.8634 z m 73.205,135.4958 -0.7986,-0.2662 0.1331,-1.0648 -0.6655,-0.1331 -0.3993,-0.2662 0,-4.2592 -3.5937,-1.1979 -2.662,5.0578 -3.0613,2.662 -8.2522,0.1331 2.5289,-2.1296 -0.2662,0.3993 0.2662,-0.1331 -0.6655,0.3993 1.0648,0 0.1331,-0.2662 0.1331,-0.5324 -0.3993,0.2662 0.1331,-0.2662 -0.2662,0.1331 1.331,-1.1979 6.655,-3.0613 3.8599,-3.993 7.1874,-3.1944 3.1944,0 1.5972,2.5289 -3.3275,2.5289 2.7951,4.2592 1.1979,-1.4641 4.3923,1.331 3.4606,3.3275 -7.3205,1.9965 -4.3923,3.8599 -1.0648,-3.4606 3.7268,-4.2592 -3.4606,2.2627 z m -145.4783,-13.9755 -1.0648,-0.6655 0.7986,0.1331 0.2662,0.5324 0,0 z m 145.8776,-48.9808 -1.5972,-0.1331 4.2592,3.5937 -0.7986,1.331 -5.8564,-1.5972 -7.986,-3.7268 -4.5254,-5.8564 -3.0613,1.0648 -2.9282,-1.0648 -2.2627,1.7303 -2.9282,-0.6655 -0.6655,-2.3958 1.7303,-2.1296 4.2592,1.0648 5.8564,-1.0648 -2.5289,-2.9282 5.8564,-4.7916 -2.1296,-4.2592 -2.1296,-0.3993 -4.5254,-3.993 -8.5184,-4.9247 0.3993,1.9965 -7.5867,-1.1979 -0.9317,1.5972 -10.5149,-1.4641 -6.1226,-1.5972 -3.5937,-6.7881 2.9282,-6.655 2.9282,-2.1296 6.7881,-0.3993 -3.993,4.7916 0.6655,3.993 3.993,3.4606 -2.1296,-6.5219 1.331,-2.9282 5.9895,-2.5289 3.3275,0.1331 3.1944,4.7916 -1.4641,3.7268 2.662,-2.5289 2.2627,2.2627 3.3275,-3.4606 6.1226,1.1979 -0.2662,1.7303 5.7233,4.1261 1.4641,-1.8634 4.2592,2.5289 -1.0648,2.5289 3.3275,-1.4641 3.993,1.4641 3.1944,3.8599 -1.8634,0.2662 0.2662,0.1331 -0.6655,0.5324 -0.7986,-0.2662 0.7986,-0.3993 -1.8634,0.1331 4.9247,2.2627 -2.9282,1.7303 -0.6655,-0.1331 -0.5324,-0.1331 1.0648,0.3993 -0.9317,0.5324 3.7268,0.7986 0.7986,1.0648 0.2662,-0.2662 0.5324,0 0,0.3993 -0.7986,-0.1331 0.7986,1.0648 3.3275,-0.5324 4.1261,5.0578 3.4606,-0.5324 1.331,2.7951 -2.7951,0.6655 -0.1331,2.2627 -2.662,0.9317 0.2662,2.2627 -2.5289,-0.7986 -5.8564,-5.9895 -0.6655,2.2627 -2.1296,1.8634 5.9895,3.3275 0.2662,0.3993 0.1331,-0.1331 0.3993,-0.1331 0.1331,0.3993 -0.3993,0.1331 0.9317,1.1979 0,0.3993 0.1331,0 0.1331,0 0.6655,0.9317 0,0.2662 0,0 0.1331,0.5324 0.3993,0.3993 -0.5324,-0.2662 0,3.3275 -5.7233,-0.5324 0.2662,0.3993 0,0.1331 z m -12.2452,-34.606 -1.0648,0.6655 0.3993,0.5324 1.5972,-0.5324 z m -101.8215,3.4606 -0.9317,0.1331 -0.3993,-0.3993 1.0648,0.2662 0.2662,0 -5.7233,-1.8634 -9.1839,0.5324 -1.9965,-1.9965 6.5219,-2.3958 -5.9895,0.7986 -2.2627,-2.5289 4.3923,-4.7916 7.0543,-2.3958 2.1296,3.8599 1.8634,-1.9965 6.1226,1.9965 -0.2662,-1.9965 5.324,2.1296 2.2627,4.5254 -0.6655,-9.317 6.655,3.7268 3.5937,9.7163 7.8529,4.3923 -3.8599,-0.1331 1.331,3.4606 -3.8599,1.1979 -7.7198,-1.7303 -6.3888,1.9965 -10.9142,1.1979 -1.1979,-3.3275 -5.8564,-0.3993 -3.7268,-3.1944 8.3853,-1.4641 6.7881,0.2662 z m 73.0719,103.0194 1.4641,-0.2662 0,0 0,0 0.1331,0.2662 z m -95.2996,-130.0387 -4.9247,-0.5324 -1.0648,-1.5972 3.3275,-1.0648 6.9212,-4.9247 6.1226,-1.0648 1.331,4.6585 -3.0613,0.9317 -0.9317,2.2627 -2.9282,3.0613 -1.9965,-0.5324 4.3923,-2.662 -0.1331,-3.4606 -1.9965,0.2662 -1.4641,3.3275 z m 172.0983,116.0632 -2.1296,-1.9965 -4.9247,1.7303 0.1331,-2.662 -8.9177,0.3993 1.1979,-3.1944 5.0578,-9.1839 2.7951,1.1979 -2.7951,3.0613 3.1944,0.3993 -0.5324,1.8634 3.993,-1.1979 2.662,4.2592 z m -83.1875,-60.4274 -3.993,0.3993 2.3958,-1.9965 0.6655,-7.0543 9.1839,4.2592 2.1296,2.1296 3.3275,1.7303 -1.9965,1.4641 -6.5219,-2.662 -4.3923,3.993 z m 19.0333,-44.5885 4.7916,2.7951 -0.1331,1.331 -9.4501,-0.1331 -2.1296,-4.3923 z m -52.5745,11.5797 -4.7916,-4.3923 -5.4571,-3.0613 2.1296,-1.331 3.8599,1.7303 0.5324,-1.8634 -3.5937,-1.8634 1.331,-1.1979 7.4536,-1.7303 1.0648,-1.9965 -0.6655,2.7951 3.0613,3.7268 0.7986,6.1226 z m 21.8284,-12.7776 -4.2592,5.1909 -5.8564,0.3993 1.7303,1.4641 -4.2592,2.3958 -1.4641,-3.993 1.1979,-5.9895 3.993,-0.7986 z m -79.9931,-3.1944 3.5937,1.331 8.3853,0.9317 3.993,3.0613 -9.8494,4.1261 -3.7268,5.4571 -6.2557,1.8634 -2.5289,-2.7951 -4.6585,-1.331 5.4571,-8.7846 -2.5289,-2.9282 z m 51.5097,-6.3888 -1.1979,-3.5937 5.1909,2.7951 -2.9282,-4.2592 8.3853,1.331 0.6655,5.324 -1.5972,2.3958 -5.8564,0 -1.0648,-2.1296 2.3958,-1.1979 -7.1874,0.7986 -4.3923,-2.9282 -1.0648,-5.5902 -3.3275,-3.3275 4.2592,2.2627 0.9317,3.4606 z m -23.0263,-2.662 4.1261,-3.0613 0.6655,4.3923 7.7198,0.7986 0,1.7303 4.9247,1.9965 -12.3783,1.331 -1.0648,-0.7986 -7.1874,2.9282 -5.1909,0.2662 -1.8634,-1.331 8.9177,-2.7951 -10.2487,1.4641 -6.5219,-1.1979 4.1261,-5.9895 2.5289,-2.2627 2.3958,3.0613 2.3958,-0.3993 4.5254,3.8599 5.9895,0.2662 z m 79.0614,7.3205 -6.1226,2.1296 -4.3923,-0.5324 -10.5149,0.5324 -11.1804,-1.5972 -1.1979,-2.2627 0.9317,-3.3275 -2.5289,-2.662 -6.9212,-0.1331 -2.5289,-3.1944 7.986,0.3993 1.5972,1.5972 4.1261,-0.3993 5.324,2.662 -2.1296,0.6655 5.0578,2.7951 5.5902,0 5.8564,-1.5972 6.655,0.2662 3.7268,1.5972 -1.9965,2.2627 z m -62.0246,-24.2242 5.324,1.5972 5.324,2.7951 1.331,3.8599 -5.5902,0.2662 0.3993,-1.9965 -4.3923,0 -4.2592,-0.3993 2.2627,-1.1979 -1.331,-2.7951 -3.7268,-0.13",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Canada"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/canada.html"
			      },
			      "label": {
			        "text": "",
			        "active": true,
			        "posx": 190,
			        "posy": 260,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 10
			      }
			    },
			    {
			      "name": "ST",
			      "svg": "m 482.58957,419.99793 -0.3993,-0.3993 0.5324,-0.3993 0.2662,0.3993 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Sao Tome and Principe"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "ST",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "CV",
			      "svg": "m 402.33027,377.27283 5.4571,1.5972 -1.8634,3.3275 -2.3958,-4.5254 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Cape Verde"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "CV",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "DM",
			      "svg": "m 309.29337,380.46723 0.3993,0.3993 -0.2662,0.5324 -0.2662,-0.6655 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Dominica"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "DM",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "NL",
			      "svg": "m 479.92757,269.99423 -0.9317,0.2662 0.1331,-0.2662 1.0648,-0.1331 z m -174.7603,104.0842 -0.1331,0 0,-0.1331 z m 169.1701,-97.0299 1.0648,0 1.1979,0 -1.0648,0.5324 z m 9.8494,-6.3888 -0.5324,3.4606 -2.5289,4.9247 -2.5289,-2.3958 -1.9965,0.3993 -1.0648,-0.7986 3.1944,-4.6585 3.4606,-2.1296 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "The Netherlands"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "NL",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "JM",
			      "svg": "m 268.43167,372.88053 3.1944,1.4641 -2.662,0.5324 -2.9282,-1.4641 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Jamaica"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "JM",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "WS",
			      "svg": "m 26.72207,454.60393 0.1331,0.7986 -0.6655,0 -0.6655,-0.7986 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Samoa"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "WS",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "OM",
			      "svg": "m 609.16767,354.91203 -0.1331,0.1331 0,-0.2662 0.3993,0 z m -0.5324,-2.2627 0.7986,-0.7986 -0.2662,1.9965 -0.2662,-0.1331 z m -10.3818,18.9002 7.5867,-2.662 1.7303,-5.1909 -1.1979,-1.9965 1.5972,-5.8564 1.4641,-0.2662 1.9965,2.7951 4.1261,1.0648 2.662,3.5937 -5.4571,6.655 0.3993,1.7303 -6.1226,3.1944 -1.0648,2.1296 -4.9247,0.9317 -0.9317,-1.7303 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Oman"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "OM",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "VC",
			      "svg": "m 309.82577,386.98913 -0.1331,-0.3993 0.2662,-0.3993 0,0.3993 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Saint Vincent and Grenadines"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "VC",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "TR",
			      "svg": "m 531.96967,312.58623 -0.5324,0.2662 -0.2662,-0.1331 0.6655,-0.3993 z m 5.1909,-5.4571 2.7951,2.2627 -7.8529,1.4641 1.5972,-1.9965 -0.7986,-0.9317 1.8634,-1.0648 z m 42.8582,7.0543 -2.1296,0.7986 1.9965,6.5219 -5.1909,-0.5324 -0.9317,0.6655 -6.655,1.0648 -7.986,-0.2662 -1.8634,2.662 0.2662,-2.9282 -3.7268,0.5324 -4.3923,2.1296 -5.4571,-2.5289 -2.5289,2.2627 -6.3888,-3.5937 -0.7986,-0.9317 -0.2662,-0.2662 -1.331,-1.5972 2.1296,-1.7303 -1.5972,-1.0648 -0.1331,-0.2662 -0.6655,-0.3993 1.5972,-2.7951 6.1226,-0.1331 0.1331,-2.3958 5.1909,0.3993 5.324,-2.7951 6.655,0.7986 3.993,2.1296 6.655,0.3993 3.5937,-1.7303 3.1944,-0.2662 1.5972,1.4641 0.6655,2.9282 2.7951,1.331 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Turkey"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/turkey.html"
			      },
			      "label": {
			        "text": "TR",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "BD",
			      "svg": "m 700.87357,366.09243 -1.9965,-4.6585 -3.3275,2.662 -2.7951,-0.7986 -2.662,-6.7881 2.2627,-1.331 -1.1979,-3.5937 3.5937,1.331 1.331,2.2627 5.324,0.5324 -3.3275,3.5937 2.5289,-0.2662 1.0648,4.6585 0.1331,1.7303 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Bangladesh"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "BD",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "LC",
			      "svg": "m 310.49127,385.25883 -0.3993,-0.3993 0.3993,-0.5324 0.1331,0.3993 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Saint Lucia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "LC",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "NR",
			      "svg": "m 891.20657,421.59513 0,0 -0.1331,-0.1331 0.1331,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Nauru"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "NR",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "NO",
			      "svg": "m 518.79277,203.97663 -0.5324,0.2662 -0.5324,-0.2662 0.5324,-0.5324 z m -1.9965,0.3993 -0.6655,-0.2662 -0.5324,-0.7986 1.5972,0.6655 z m 6.7881,-1.5972 0.7986,0.5324 -1.4641,-0.1331 0.1331,-0.3993 z m 2.1296,-1.0648 0.3993,0.6655 -1.4641,0.7986 -0.6655,-0.5324 z m 0.7986,-0.5324 0.7986,0.5324 -1.0648,0.3993 -0.2662,-0.7986 z m -1.0648,-0.5324 -0.7986,1.1979 -2.3958,0.3993 0.9317,-1.0648 z m 1.7303,-0.7986 0,0.3993 -0.3993,-0.1331 0.1331,-0.3993 z m 3.993,-0.6655 0.7986,0.6655 -1.0648,0.3993 -0.6655,-0.5324 z m -10.648,-38.0666 1.9965,1.8634 -3.0613,0.2662 -2.2627,-1.5972 z m 13.4431,-0.2662 -0.7986,-0.3993 0.3993,-0.5324 0.6655,0.5324 z m 5.8564,-1.5972 -2.3958,0.5324 -0.6655,-0.1331 1.4641,-0.6655 z m -22.4939,-1.1979 1.5972,0.3993 -1.1979,0.3993 -0.7986,-0.2662 z m -0.1331,-1.331 -1.1979,0.1331 -0.1331,-0.2662 0.1331,-0.1331 z m 34.3398,-4.9247 -2.1296,0.5324 -3.0613,0.2662 -0.2662,-0.2662 z m -23.5587,-1.0648 -0.6655,0.1331 0.1331,-0.3993 0,-0.1331 z m -0.5324,-0.6655 0.2662,0.1331 -0.2662,0.1331 -0.5324,-0.1331 z m -10.7811,0.1331 -0.2662,-0.1331 0.2662,-0.1331 0.3993,0.1331 z m 3.4606,-1.1979 -0.5324,0.1331 -0.2662,-0.1331 0.5324,-0.1331 z m -1.331,0.2662 0,-0.3993 -0.6655,-0.3993 1.0648,0.2662 z m -13.7093,60.2943 1.7303,-1.9965 1.1979,2.7951 -2.3958,1.7303 z m 39.2645,-4.1261 -2.2627,1.9965 -2.5289,1.4641 1.0648,-1.9965 -3.7268,-2.662 -4.7916,1.7303 -1.0648,3.5937 -1.8634,1.4641 -2.3958,-1.1979 -3.8599,0.5324 -1.8634,-2.5289 -2.662,1.0648 -1.7303,3.0613 -4.6585,-0.7986 -5.0578,4.7916 0.6655,1.5972 -4.7916,3.993 0,3.3275 -2.2627,3.0613 0.7986,2.3958 -3.1944,0.2662 -1.8634,2.662 1.331,12.3783 -2.662,4.2592 -2.5289,-0.9317 -4.9247,3.7268 -5.0578,0.5324 -3.3275,-3.8599 1.0648,-3.4606 -2.5289,-3.8599 0.3993,-3.0613 5.324,-4.2592 4.7916,-1.7303 8.6515,-8.6515 3.5937,-6.2557 5.0578,-3.5937 4.2592,-4.2592 0.2662,-3.5937 2.9282,-0.3993 1.331,-1.0648 -0.1331,-1.331 1.1979,1.331 -2.1296,1.0648 4.7916,-0.6655 0.2662,-0.1331 0.1331,0 0.1331,-0.2662 0.3993,-0.3993 -0.2662,-0.2662 0.5324,-0.1331 0.1331,0 1.4641,-1.331 0.2662,0 0,0.1331 0.1331,0.1331 0,-0.1331 3.0613,0.3993 4.2592,-2.662 3.3275,-0.3993 -1.9965,3.5937 3.993,-3.993 -0.5324,2.662 2.7951,-3.3275 6.1226,1.7303 2.7951,1.9965 z m -1.9965,-0.1331 -0.3993,-0.3993 -0.3993,0.6655 0.9317,-0.2662 z m -12.6445,-32.7426 0,-0.2662 1.331,-0.9317 -1.331,1.1979 0,0 z m -4.6585,-4.1261 -1.7303,-1.0648 -4.2592,0.1331 1.8634,-2.662 -1.8634,-0.9317 5.1909,-0.9317 3.7268,2.3958 z m -17.1699,-15.7058 5.9895,3.5937 0.1331,1.5972 6.655,1.7303 -6.5219,2.1296 -1.9965,5.4571 -3.4606,4.9247 -6.2557,-3.3275 -1.1979,-1.8634 7.3205,-1.8634 -7.8529,0.5324 -0.2662,-1.5972 5.5902,-1.5972 -9.1839,0.7986 -4.3923,-3.8599 2.2627,-0.3993 -0.7986,-4.1261 7.0543,-1.0648 3.8599,1.5972 2.662,3.8599 -1.7303,-4.3923 z m 26.2207,-0.6655 0.9317,1.8634 -7.986,3.8599 -2.9282,-1.331 -5.324,0.2662 -2.9282,-1.4641 5.7233,-1.1979 -7.986,0.6655 -1.5972,-3.3275 3.0613,1.0648 2.662,-1.8634 5.0578,2.3958 3.5937,-1.7303 z m -4.3923,20.4974 -0.2662,0.2662 0.1331,-0.2662 0.1331,0 0,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Norway"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "",
			        "active": true,
			        "posx": 487.7995910644531,
			        "posy": 243.65162658691406,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 10
			      }
			    },
			    {
			      "name": "KN",
			      "svg": "m 306.23207,376.20803 -0.6655,-0.3993 0.1331,-0.1331 0.2662,0.2662 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Saint Kitts and Nevis"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "KN",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "BH",
			      "svg": "m 594.39357,352.25003 0.3993,0.1331 -0.1331,1.0648 -0.2662,-0.5324 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Bahrain"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "BH",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "TO",
			      "svg": "m 20.06707,474.96823 -0.1331,0.1331 -0.9317,-0.3993 0.5324,-0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Tonga"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "TO",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "FI",
			      "svg": "m 518.39347,245.63693 -0.1331,0.3993 -0.7986,0.1331 0.3993,-0.2662 z m -1.0648,0.1331 0.1331,-0.1331 -0.2662,0.5324 -0.3993,-0.2662 z m 0.3993,-0.6655 -0.7986,0.6655 -1.1979,-0.6655 1.1979,-0.3993 z m 3.0613,0.1331 0,0.2662 0.9317,-0.1331 -1.0648,0.3993 z m 2.1296,0.9317 0.1331,-0.7986 0.9317,0.2662 -0.7986,0.9317 z m -2.9282,-2.2627 0.1331,0.3993 -0.1331,0.3993 0,-0.5324 z m 0,-10.7811 0.2662,0.3993 -0.3993,0.2662 -0.2662,-0.3993 z m 9.1839,-7.1874 -0.6655,0.3993 -0.1331,-0.2662 0.2662,-0.1331 z m -7.8529,18.5009 -0.3993,-0.1331 -1.0648,-5.8564 0.6655,-4.9247 2.2627,-0.3993 6.1226,-6.2557 1.4641,-2.7951 -3.0613,-1.1979 -1.331,-9.317 -7.5867,-4.6585 2.662,-1.0648 1.8634,2.5289 3.8599,-0.5324 2.3958,1.1979 1.8634,-1.4641 1.0648,-3.5937 4.7916,-1.7303 3.7268,2.662 -1.0648,1.9965 -0.6655,3.5937 3.3275,2.3958 -2.2627,3.5937 1.9965,3.0613 -0.7986,4.7916 2.5289,3.993 -1.4641,1.0648 3.993,3.3275 -0.7986,1.5972 -8.7846,7.7198 -10.2487,2.1296 -3.4606,-1.1979 0.1331,-0.1331 -0.3993,0 0,0 -1.0648,-0.2662 0.2662,0.1331 -0.1331,0.2662 -0.3993,-0.3993 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Finland"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "FI",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "ID",
			      "svg": "m 765.29397,441.42703 3.8599,0.6655 -5.1909,1.1979 -2.9282,-0.6655 z m 27.0193,-27.0193 -0.3993,4.6585 -0.6655,4.5254 -0.7986,-6.3888 z m -10.5149,29.5482 0.6655,0.3993 0.3993,-0.7986 0.3993,-0.1331 0.7986,-0.3993 0.1331,0.5324 0.2662,0.7986 -3.993,2.2627 z m -15.5727,-34.2067 -0.5324,0.3993 0,-0.5324 z m 58.8302,17.0368 0,10.9142 0,5.5902 -2.3958,-2.5289 -6.1226,0.7986 3.0613,-2.7951 -2.662,-5.1909 -6.655,-2.1296 -2.5289,6.2557 -0.1331,-2.1296 -2.9282,-1.0648 1.1979,-3.5937 -3.1944,-3.8599 1.1979,-0.9317 -4.6585,-2.5289 4.7916,-2.3958 3.1944,0.7986 0.3993,3.7268 2.1296,2.9282 3.3275,-1.9965 -0.2662,-2.2627 4.2592,-0.3993 z m -36.4694,13.31 0.3993,-0.1331 1.7303,0.5324 0,0 -2.1296,-0.3993 z m 3.8599,-11.979 3.4606,-0.7986 3.1944,2.662 -6.655,-1.8634 z m 0,0 -0.3993,0 0,0 0.2662,-0.1331 0.1331,0.1331 z m -3.8599,11.979 -6.655,1.8634 -10.5149,0.6655 1.331,3.7268 -3.8599,-1.8634 3.1944,-3.1944 5.324,0.7986 1.7303,-1.0648 5.4571,-0.1331 2.2627,-1.1979 1.7303,0.3993 z m -44.0561,-0.2662 -7.3205,-0.7986 -2.662,-1.5972 1.4641,-2.2627 5.8564,0.9317 0.6655,1.1979 4.7916,0.5324 1.1979,-1.331 2.9282,1.1979 7.986,-0.1331 0,5.0578 -5.0578,-1.331 -6.3888,-0.2662 z m 32.0771,-5.7233 2.3958,-2.5289 -6.3888,-3.0613 -0.2662,5.7233 -2.3958,-0.3993 0.6655,-2.662 -2.1296,-4.2592 1.4641,-1.7303 1.7303,-6.7881 2.2627,-1.5972 7.5867,1.331 3.0613,-2.3958 -1.5972,3.3275 -10.648,0.1331 0.9317,4.5254 2.5289,-2.2627 4.3923,0.3993 -4.6585,3.1944 3.7268,6.2557 -0.5324,3.3275 z m -11.1804,-24.3573 0.6655,5.7233 2.9282,2.1296 -3.1944,0.7986 -2.9282,5.4571 -1.5972,5.4571 -3.4606,1.4641 -0.9317,-1.9965 -6.2557,0.3993 -0.1331,-1.9965 -3.7268,0.6655 -0.7986,-4.7916 -1.1979,0.3993 -1.5972,-5.324 1.9965,-3.1944 2.2627,3.0613 6.2557,-1.7303 3.8599,0.2662 3.4606,-7.4536 z m -49.247,-0.1331 6.9212,5.8564 1.7303,-0.6655 5.324,4.7916 -0.9317,2.5289 2.5289,0.6655 0.9317,3.4606 3.3275,-1.9965 -0.5324,10.2487 -2.7951,0.6655 -7.986,-6.7881 -7.8529,-13.0438 -5.324,-1.0648 2.9282,-1.331 -5.4571,-4.9247 -0.3993,-2.5289 5.5902,1.4641 z m 74.536,30.8792 1.4641,0.3993 3.8599,-0.9317 -3.4606,1.1979 -1.8634,-0.6655 z m 1.331,-12.3783 -3.3275,1.8634 -1.9965,-3.7268 2.9282,2.5289 2.3958,-0.6655 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Indonesia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "ID",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "MU",
			      "svg": "m 612.89447,471.77383 -0.1331,1.0648 -0.7986,0 0.3993,-1.1979 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Mauritius"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "MU",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "SE",
			      "svg": "m 512.53707,250.02923 0,0 0.1331,-0.3993 0.2662,-0.1331 z m 9.8494,-25.5552 0,-0.5324 0.3993,0.2662 0,0.2662 z m -27.2855,29.282 -0.6655,-1.4641 0.5324,-2.3958 2.662,-4.2592 -1.331,-12.3783 1.8634,-2.662 3.1944,-0.2662 -0.7986,-2.3958 2.2627,-3.0613 0,-3.3275 4.7916,-3.993 -0.6655,-1.5972 5.0578,-4.7916 4.6585,0.7986 1.7303,-3.0613 7.5867,4.6585 1.331,9.317 -5.8564,1.1979 -2.662,6.7881 -7.5867,5.5902 -1.8634,4.2592 0.5324,2.5289 4.5254,3.8599 -1.5972,2.2627 -4.3923,1.9965 -0.7986,2.662 0.1331,5.9895 -4.5254,0.3993 -1.331,2.662 -3.0613,0 -1.5972,-5.4571 -1.9965,-3.8599 0.2662,0 0.2662,-0.3993 -0.6655,0.1331 z m 0.6655,-1.0648 -0.7986,0.2662 0.1331,0.3993 0.7986,-0.2662 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Sweden"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/sweden.html"
			      },
			      "label": {
			        "text": "",
			        "active": true,
			        "posx": 509.4648742675781,
			        "posy": 228.54144287109375,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 10
			      }
			    },
			    {
			      "name": "TT",
			      "svg": "m 310.62437,392.71243 -0.2662,1.7303 -1.1979,-0.3993 -0.5324,-1.0648 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Trinidad and Tobago"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "TT",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "MY",
			      "svg": "m 721.37097,406.42173 0,0.5324 -0.2662,-0.1331 0,-0.3993 z m 44.3223,3.1944 0.2662,-0.1331 0.2662,0.2662 z m -6.9212,-1.7303 0.1331,-0.1331 0,0.2662 0.7986,1.331 -0.5324,-1.5972 2.5289,-3.0613 2.9282,-1.331 5.0578,3.7268 -4.2592,2.662 -4.3923,-0.6655 -3.4606,7.4536 -3.8599,-0.2662 -6.2557,1.7303 -2.2627,-3.0613 3.4606,1.331 0.7986,-2.1296 0.2662,0 0,-0.3993 0,-0.2662 3.993,-1.1979 2.5289,-3.7268 1.5972,1.4641 z m -37.8004,-3.993 2.5289,2.1296 2.3958,-1.5972 3.4606,3.5937 0,4.7916 2.1296,3.993 -2.2627,-0.5324 -5.324,-3.3275 -1.4641,-2.5289 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Malaysia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "MY",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "PA",
			      "svg": "m 267.23377,401.89633 -1.5972,-3.4606 -2.662,-0.9317 -2.2627,2.2627 1.1979,1.5972 -4.5254,0.5324 0.1331,-2.3958 -2.9282,0.3993 -0.3993,-0.7986 0,-0.1331 0,0 0,0 0,0 1.1979,-3.0613 3.8599,1.9965 3.5937,-2.1296 5.7233,2.3958 0.5324,1.8634 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Panama"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "PA",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "PW",
			      "svg": "m 808.55147,401.63013 0,-0.2662 0.1331,-0.3993 0.2662,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Palau"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "PW",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "TV",
			      "svg": "m 922.48507,441.82633 0,0 0,-0.1331 0,0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Tuvalu"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "TV",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "MH",
			      "svg": "m 901.72147,402.16253 0.3993,0.1331 0.1331,0 -0.1331,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Marshall Islands"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "MH",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "TH",
			      "svg": "m 726.42877,389.25183 0.1331,0.1331 0.2662,0.3993 -0.3993,0 z m -0.5324,15.1734 -2.3958,1.5972 -2.5289,-2.1296 -4.9247,-5.324 1.331,-4.6585 2.2627,-3.7268 -1.1979,-4.9247 -2.2627,-2.7951 1.4641,-3.4606 -3.5937,-6.1226 1.5972,-3.4606 5.1909,-1.331 2.9282,2.1296 -0.2662,5.324 7.3205,-2.2627 1.8634,4.6585 2.2627,2.1296 -1.0648,3.5937 -3.993,-0.2662 -3.3275,2.2627 1.4641,4.9247 -4.9247,-4.6585 -2.3958,0.1331 0,3.1944 -1.8634,3.993 -0.1331,3.5937 1.5972,-0.2662 1.4641,5.4571 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Thailand"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "TH",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "GD",
			      "svg": "m 308.76097,389.65113 -0.2662,0 0,-0.3993 0.2662,-0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Grenada"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "GD",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "EE",
			      "svg": "m 523.45127,251.49333 1.0648,0.7986 -2.1296,0.7986 -0.9317,-1.331 z m 1.8634,-0.1331 -0.3993,0.2662 -0.3993,-0.2662 0.2662,-0.2662 z m -0.3993,-1.5972 0.3993,0 0,0.2662 -0.5324,0 z m -1.1979,0.1331 0.7986,0.5324 -1.331,0.6655 -1.1979,-0.9317 z m 12.6445,0 -1.8634,0.7986 1.7303,2.9282 -0.2662,0.6655 -0.5324,1.0648 -5.1909,-1.9965 -2.5289,0.7986 -2.1296,-5.0578 6.3888,-1.5972 5.1909,0.5324 0.2662,0.2662 0.1331,0.2662 -0.1331,0 -0.2662,0.1331 0,0 0.1331,0 0,0 0.1331,0 -0.1331,0 -0.2662,0 -0.2662,0.5324 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Estonia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "EE",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "AG",
			      "svg": "m 308.36167,376.47423 0.2662,0.2662 -0.3993,0 -0.1331,-0.2662 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Antigua and Barbuda"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "AG",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "TW",
			      "svg": "m 770.48487,359.57053 1.331,0 2.5289,-4.1261 2.1296,-0.1331 -2.7951,8.5184 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Taiwan"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/taiwan.html"
			      },
			      "label": {
			        "text": "TW",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "BB",
			      "svg": "m 314.08497,386.98913 -0.2662,-0.1331 0.1331,-0.5324 0.3993,0.3993 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Barbados"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "BB",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "IT",
			      "svg": "m 497.23057,319.24123 8.3853,-1.0648 -1.0648,1.5972 -0.2662,3.1944 z m -7.4536,-9.7163 1.0648,1.9965 -0.6655,4.1261 -2.9282,0.5324 -0.5324,-5.7233 z m -4.9247,-7.986 -2.2627,-4.1261 1.0648,-2.5289 7.5867,-1.4641 1.1979,-1.5972 4.3923,-0.6655 3.8599,1.7303 -0.7986,0.7986 0.7986,2.2627 -3.993,0.7986 0.6655,3.4606 3.0613,2.1296 1.1979,2.9282 4.7916,3.3275 5.324,2.5289 -2.5289,0.3993 0.2662,3.3275 -2.7951,4.3923 -1.0648,-6.3888 -4.9247,-3.4606 -1.5972,0 -4.7916,-3.993 -2.7951,-4.5254 -3.3275,-1.331 z m 12.6445,5.8564 0,0 0,0 0,0 z m 0,-6.1226 0.1331,-0.2662 -0.1331,0 -0.1331,0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Italy"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "",
			        "active": true,
			        "posx": 497.2990417480469,
			        "posy": 314.3693542480469,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 8
			      }
			    },
			    {
			      "name": "MT",
			      "svg": "m 502.15527,324.83143 0.6655,0.2662 0,0.3993 -0.3993,-0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Malta"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "MT",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "VU",
			      "svg": "m 892.40447,455.40253 1.8634,2.9282 0.9317,5.0578 -2.2627,-1.0648 -2.1296,-3.4606 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Vanuatu"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "VU",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "SG",
			      "svg": "m 730.42177,416.53733 0.3993,0.2662 -0.3993,0.2662 -0.5324,-0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Singapore"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "SG",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "CY",
			      "svg": "m 551.80157,327.75963 0,0 0,0 z m 0.6655,-0.1331 0.2662,0.2662 -0.5324,0 -0.2662,-0.2662 0.2662,0 0.2662,0 z m -0.6655,0.1331 0,0 0.1331,0.1331 0,0 z m -0.1331,0.1331 -0.2662,0.3993 -1.4641,0.5324 -0.5324,-0.1331 -0.1331,0.1331 -1.1979,-1.1979 0.7986,-0.3993 0.1331,0.1331 0,-0.1331 0.1331,0 0,0 0.1331,0 0,0 0,0 0,0 1.7303,0.1331 0.6655,0.3993 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Cyprus"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "CY",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "LK",
			      "svg": "m 669.46197,395.64063 2.1296,0.7986 2.662,4.5254 -0.1331,2.5289 -4.2592,1.1979 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Sri Lanka"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "LK",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "KM",
			      "svg": "m 576.55817,450.61093 -0.6655,-0.5324 0.1331,-0.9317 0.3993,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Comoros"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "KM",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "FJ",
			      "svg": "m 917.16107,464.45333 7.0543,-2.7951 -4.2592,3.1944 0.6655,3.8599 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Fiji"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "FJ",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "RU",
			      "svg": "m 593.46187,209.16753 -3.8599,1.0648 -0.6655,-2.3958 2.3958,-1.0648 z m 17.9685,-57.233 -2.9282,-0.7986 6.2557,-0.7986 0.9317,3.3275 z m 19.2995,-5.9895 1.8634,1.5972 -5.9895,1.4641 -1.4641,-0.9317 z m -17.4361,-3.0613 1.331,1.331 -1.8634,2.1296 -4.6585,-0.2662 z m 315.7132,54.7041 0.7986,2.1296 -8.3853,1.0648 0.2662,-1.9965 3.4606,-1.5972 z m -104.8828,-11.8459 3.5937,0.1331 3.4606,1.8634 -0.5324,1.7303 -6.7881,-1.4641 z m 21.6953,-6.7881 3.7268,1.9965 -6.1226,0.3993 -5.4571,-2.2627 z m -329.6887,87.4467 1.5972,-0.7986 -1.9965,0.7986 0,0 0.7986,-1.5972 2.5289,-1.331 0.2662,0 -1.1979,1.1979 1.8634,-1.0648 3.993,1.331 -0.1331,1.8634 -0.2662,0 z m 282.7044,39.7969 -0.1331,-0.3993 -0.2662,-0.3993 1.8634,-4.6585 -0.7986,-2.5289 2.662,-1.1979 0.9317,2.2627 1.1979,-1.7303 4.9247,-8.3853 -0.9317,-2.2627 -4.9247,2.2627 -3.5937,0.1331 -4.2592,-5.7233 -3.3275,-0.3993 -5.9895,-11.7128 -6.2557,-1.9965 -6.2557,1.0648 -1.9965,1.7303 1.8634,2.2627 -4.1261,5.8564 -3.5937,2.7951 -2.662,-0.9317 -6.1226,-1.5972 -3.1944,2.2627 -5.8564,1.5972 -5.5902,-0.6655 -1.5972,-1.9965 -6.655,-1.8634 -4.1261,1.1979 -3.5937,-1.5972 -0.2662,-2.3958 -8.3853,-2.7951 -2.7951,3.8599 1.331,1.5972 -2.5289,2.662 -6.9212,-0.9317 -0.9317,-1.8634 -4.7916,-0.9317 -11.5797,5.5902 -0.7986,0.1331 -0.3993,0.1331 -5.324,-1.5972 -4.6585,-4.7916 -5.0578,0.9317 -1.8634,-1.8634 -1.8634,1.5972 -5.324,-8.3853 -3.4606,-2.3958 0.3993,-1.7303 -6.2557,3.0613 -7.8529,-1.8634 -0.7986,-4.1261 -14.3748,3.3275 -10.7811,1.5972 2.7951,2.662 -3.5937,1.4641 -1.331,2.7951 3.4606,1.4641 -0.2662,2.2627 -4.1261,0.7986 -2.9282,-1.5972 -5.324,-0.1331 -2.2627,1.7303 -5.8564,-3.3275 -7.0543,-0.3993 -4.7916,3.5937 -0.6655,2.5289 -2.2627,-2.1296 -2.662,6.7881 3.993,1.9965 2.9282,4.6585 -3.993,1.9965 -2.3958,3.3275 1.8634,5.0578 2.9282,3.5937 -2.1296,1.9965 -3.3275,-2.1296 -4.1261,-2.5289 -12.3783,-2.1296 -8.6515,-5.5902 2.3958,-0.5324 1.7303,-5.5902 1.5972,-2.3958 2.3958,0.1331 0.9317,-4.6585 -6.9212,-3.8599 -4.5254,0.2662 -1.4641,-2.9282 -2.2627,-0.1331 -0.9317,-3.7268 -5.1909,0.7986 -1.331,-3.0613 3.7268,-1.4641 -2.3958,-1.331 -2.2627,-6.3888 -6.9212,-1.8634 -1.331,-2.5289 -0.7986,-2.5289 0.5324,-1.0648 0.2662,-0.6655 0.5324,-1.7303 -0.3993,-1.9965 0.3993,-0.6655 0.2662,-0.3993 0.2662,-0.1331 0,0 -0.1331,0 0,0 0,0 0.1331,0 0.2662,-0.1331 -0.1331,-0.2662 -0.2662,-0.2662 4.6585,-2.5289 -5.1909,-1.4641 8.7846,-7.7198 0.7986,-1.5972 -3.993,-3.3275 1.4641,-1.0648 -2.5289,-3.993 0.7986,-4.7916 -1.9965,-3.0613 2.2627,-3.5937 -3.3275,-2.3958 0.6655,-3.5937 2.5289,-1.4641 2.2627,-1.9965 13.0438,2.7951 13.0438,6.655 0.7986,1.9965 -2.3958,3.4606 -6.3888,1.331 -11.3135,-2.662 -3.1944,-1.7303 6.9212,5.9895 0,3.5937 5.1909,-1.331 6.5219,2.5289 2.2627,-1.0648 -1.5972,-3.3275 7.0543,-4.9247 4.1261,3.8599 0.7986,-3.4606 -1.7303,-2.1296 1.0648,-4.6585 -2.3958,-1.5972 6.655,0.6655 1.9965,2.662 -4.5254,2.2627 2.2627,1.8634 4.9247,-0.3993 0.6655,-2.7951 7.986,-3.7268 5.8564,-1.8634 3.1944,3.1944 3.3275,-2.1296 3.3275,0.5324 3.993,-1.9965 1.9965,2.9282 3.1944,-3.4606 -5.9895,-4.3923 1.1979,-1.8634 4.2592,3.1944 8.7846,1.0648 7.8529,3.3275 2.662,2.1296 2.1296,-2.662 -2.7951,-2.5289 -3.0613,-0.3993 1.331,-5.1909 -1.0648,-2.662 3.993,-2.5289 1.1979,-4.1261 5.0578,-4.1261 1.8634,1.4641 -3.8599,1.5972 6.7881,0.9317 -2.5289,5.5902 2.1296,1.9965 -0.2662,9.9825 2.7951,1.8634 -5.324,8.1191 -3.0613,1.331 4.3923,0.3993 6.7881,-6.1226 -0.7986,-4.5254 4.9247,-1.331 2.3958,2.1296 -0.5324,3.3275 2.5289,-2.1296 -1.0648,-2.7951 -5.5902,-1.7303 -4.3923,0.2662 -0.6655,-2.3958 2.1296,-3.5937 -3.3275,-4.2592 4.7916,-3.1944 -0.5324,-3.8599 2.3958,-3.1944 2.7951,0.3993 -3.0613,3.5937 -0.7986,6.3888 6.5219,1.1979 -4.5254,-3.5937 3.993,0.3993 3.993,-6.1226 0.6655,3.4606 5.9895,3.3275 3.8599,-0.1331 -2.5289,1.9965 2.3958,4.5254 1.0648,-6.1226 -3.7268,-3.0613 -3.7268,-1.331 -0.3993,-5.0578 16.6375,-1.4641 -4.3923,-4.3923 4.1261,0.6655 7.5867,-4.9247 9.1839,-1.4641 5.7233,-2.2627 0.9317,-3.7268 0.7986,5.9895 3.4606,-0.6655 2.662,-2.7951 5.0578,-0.1331 0.7986,-2.9282 5.324,-3.0613 6.655,0.5324 -1.7303,1.9965 6.9212,2.3958 11.7128,0.6655 2.1296,2.1296 0.6655,4.9247 -4.1261,3.7268 3.3275,0.2662 -0.3993,5.1909 5.7233,-1.331 1.4641,-3.1944 0.5324,3.4606 5.8564,0.3993 -0.2662,1.4641 4.7916,1.4641 6.9212,0.5324 0.7986,-3.3275 3.3275,-1.7303 4.6585,2.3958 1.5972,-0.6655 6.1226,2.662 -1.331,4.5254 -2.662,-1.7303 4.7916,6.1226 4.5254,1.1979 2.5289,-4.6585 2.9282,2.1296 5.8564,-0.9317 10.3818,0.7986 -1.331,-4.9247 5.1909,-1.331 9.8494,1.0648 1.8634,3.4606 2.662,-2.3958 6.1226,0.7986 -1.4641,2.1296 6.2557,1.8634 1.8634,1.9965 9.4501,-0.9317 6.655,0.5324 2.9282,1.4641 0,3.5937 3.5937,1.9965 7.4536,-1.4641 7.4536,1.1979 3.3275,-2.3958 0.2662,3.5937 3.1944,1.9965 3.4606,-1.1979 -0.9317,-4.7916 12.5114,1.1979 4.6585,1.0648 9.7163,3.8599 0.3993,0.9317 8.6515,3.8599 2.1296,4.9247 1.0648,-1.8634 5.8564,0 5.1909,3.5937 -2.1296,2.1296 -4.1261,0.3993 -3.0613,5.0578 -6.3888,-2.9282 -2.7951,-2.5289 -5.8564,0 -1.0648,1.9965 -5.324,1.9965 3.5937,7.8529 -1.331,1.7303 -6.1226,-0.7986 -8.2522,3.5937 -7.3205,4.3923 -10.648,-0.1331 -4.1261,2.662 -2.9282,-1.0648 -1.4641,4.1261 -2.7951,3.3275 3.4606,1.331 -1.4641,3.4606 1.5972,2.1296 -3.1944,0.1331 0,4.5254 -5.324,2.3958 -1.0648,3.1944 -2.5289,1.331 -2.2627,4.5254 -2.5289,1.9965 -3.0613,-14.9072 1.1979,-5.324 3.7268,-3.8599 3.8599,-2.2627 7.4536,-7.4536 5.324,-3.5937 1.4641,-5.324 -3.3275,0.6655 -0.7986,2.7951 -7.1874,4.7916 0.5324,-5.324 -7.3205,0.6655 -6.5219,5.4571 -2.1296,3.3275 -6.9212,2.3958 -4.5254,-3.4606 -2.1296,1.9965 -12.3783,-0.6655 -3.3275,0.7986 -12.7776,11.4466 -5.9895,4.2592 3.3275,1.0648 3.993,-1.4641 -1.9965,3.4606 1.4641,1.5972 2.1296,-2.5289 2.662,0 4.2592,3.993 -2.5289,8.9177 -0.6655,6.7881 -5.324,7.1874 -7.5867,8.6515 -5.0578,2.5289 -3.4606,-1.9965 z m -189.1351,-157.7235 -4.1261,0.3993 -1.1979,2.9282 -4.3923,0.2662 3.4606,-3.7268 6.2557,0.1331 -2.9282,-1.1979 2.1296,-0.6655 6.3888,0.2662 -4.1261,2.1296 z m -5.324,40.3293 -0.3993,0 -1.4641,-2.2627 2.9282,-1.0648 5.7233,-7.1874 4.2592,-2.5289 13.5762,-2.2627 9.0508,-3.7268 3.4606,2.3958 -4.6585,2.5289 -14.641,3.993 -7.986,5.7233 -3.7268,4.6585 -1.7303,0 0.7986,0.1331 -2.662,4.5254 1.8634,4.9247 3.8599,2.5289 -6.2557,0.7986 -4.7916,-1.4641 -0.9317,-2.3958 -3.5937,-0.9317 2.2627,-2.3958 1.8634,-4.9247 z m 18.1016,-42.3258 -1.0648,4.2592 -4.6585,-1.4641 2.1296,-2.1296 3.5937,-0.6655 0,0 z m -35.4046,2.2627 0.5324,-0.1331 0.2662,0.1331 0,0 -0.7986,0 z m 0,0 -3.8599,1.7303 -2.5289,-1.1979 6.3888,-0.5324 z m 243.7061,134.9634 -1.7303,4.3923 2.1296,4.7916 -3.993,-0.2662 1.0648,-14.9072 -1.4641,-1.9965 0.2662,-5.5902 2.662,-1.0648 -0.6655,-2.1296 1.8634,3.993 0.3993,5.5902 2.1296,7.5867 z m -1.7303,-107.811 7.1874,1.8634 -4.2592,2.9282 -4.7916,-0.2662 -7.1874,1.7303 -7.5867,-4.1261 -0.9317,-2.1296 3.4606,1.331 4.7916,-3.1944 5.324,3.1944 0.9317,-3.0613 z m -110.3399,-11.7128 7.7198,-7.8529 7.0543,3.3275 2.662,3.3275 -2.2627,-1.1979 -3.8599,1.1979 z m -13.9755,-8.5184 3.0613,-3.1944 6.655,-0.3993 4.1261,0.6655 1.8634,2.1296 -1.331,4.9247 -4.2592,0.1331 -6.9212,-1.331 z m -116.8618,-6.9212 2.7951,-0.2662 4.5254,-2.3958 2.3958,2.9282 -5.0578,1.1979 -0.5324,1.9965 -7.3205,-0.9317 4.5254,-1.9965 -1.331,-0.5324 z m 114.3329,1.331 0.6655,-2.9282 6.9212,-1.7303 5.5902,3.4606 -1.8634,2.7951 -6.7881,0.6655 -1.8634,1.331 -3.0613,1.331 -3.8599,-2.2627 6.655,0.7986 -5.5902,-2.1296 z m -79.7269,-3.5937 0.9317,-2.7951 -0.3993,2.7951 -0.5324,0 0,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Russian Federation"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "RU",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "VA",
			      "svg": "m 497.49677,307.39533 0,0 0,0 0,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Vatican City State"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "VA",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "SM",
			      "svg": "m 497.49677,301.27273 -0.1331,-0.1331 0.1331,-0.1331 0.1331,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "San Marino"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "SM",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "KZ",
			      "svg": "m 593.72807,298.21143 -0.5324,-0.2662 0.1331,-0.3993 0.7986,0 z m 23.5587,-0.9317 -1.8634,-1.0648 0.3993,-0.2662 -0.6655,0.1331 -6.7881,1.7303 0.1331,11.3135 -4.6585,-3.0613 -4.3923,1.7303 0.6655,-2.9282 -1.9965,-0.3993 -4.1261,-5.5902 5.5902,-2.3958 1.4641,-4.6585 -4.7916,-0.7986 -5.0578,2.5289 -2.9282,-4.6585 -3.993,-1.9965 2.662,-6.7881 2.2627,2.1296 0.6655,-2.5289 4.7916,-3.5937 7.0543,0.3993 5.8564,3.3275 2.2627,-1.7303 5.324,0.1331 2.9282,1.5972 4.1261,-0.7986 0.2662,-2.2627 -3.4606,-1.4641 1.331,-2.7951 3.5937,-1.4641 -2.7951,-2.662 10.7811,-1.5972 14.3748,-3.3275 0.7986,4.1261 7.8529,1.8634 6.2557,-3.0613 -0.3993,1.7303 3.4606,2.3958 5.324,8.3853 1.8634,-1.5972 1.8634,1.8634 5.0578,-0.9317 4.6585,4.7916 5.324,1.5972 -3.993,2.2627 -0.6655,4.3923 -1.9965,0.6655 -4.3923,-1.1979 -1.8634,5.324 -5.5902,1.5972 1.8634,5.8564 -1.5972,2.9282 -4.5254,-2.1296 -8.2522,0.1331 -2.5289,-1.331 -1.7303,2.662 -4.2592,-1.331 -2.2627,1.8634 -4.7916,2.662 -1.1979,2.2627 -1.7303,-1.7303 -3.0613,0 -4.5254,-7.7198 -7.4536,0.6655 -4.9247,-4.2592 -0.9317,-2.662 -1.331,0.2662 z m 2.2627,-2.662 -0.6655,0 0.9317,0.2662 0,-0.2662 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Kazakhstan"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "KZ",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "AZ",
			      "svg": "m 580.55117,309.92423 -0.1331,0.1331 0,-0.1331 0.1331,0 z m -0.5324,4.2592 -0.1331,-0.1331 2.5289,0.3993 0.9317,1.9965 -1.7303,-0.3993 z m 4.2592,2.2627 -2.1296,-3.4606 -1.7303,-3.7268 3.8599,0.6655 -0.1331,-2.5289 3.3275,2.1296 2.1296,-1.9965 2.5289,3.7268 -1.7303,6.5219 -2.2627,-1.1979 -0.1331,-2.662 z m -3.1944,-6.2557 -0.1331,-0.1331 0,0 0,0.1331 z m 0.6655,1.0648 0,0 0.1331,-0.1331 -0.1331,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Azerbaijan"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "AZ",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "AM",
			      "svg": "m 581.08357,310.19043 -0.1331,0 0,-0.1331 0,0 z m 0.6655,1.0648 0,-0.1331 0.1331,0 -0.1331,0.1331 z m 2.5289,5.1909 -0.2662,-0.1331 -0.6655,0.1331 -0.9317,-1.9965 -2.5289,-0.3993 -2.7951,-1.331 -0.6655,-2.9282 1.9965,-0.3993 1.9965,-0.1331 1.7303,3.7268 z m -3.7268,-6.5219 0,0 -0.1331,0 0,0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "AM"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "AM",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "TJ",
			      "svg": "m 645.77017,310.19043 0,0.1331 -0.1331,-0.2662 0,0 z m 0,3.3275 0.1331,0.1331 -0.2662,0.1331 -0.2662,-0.2662 z m 7.7198,1.1979 0.3993,2.662 2.3958,0.1331 0.3993,3.7268 -4.1261,-0.6655 -4.2592,2.2627 0,-3.4606 -2.662,-1.331 -3.3275,3.5937 -3.8599,-0.2662 0.9317,-5.1909 3.3275,-5.4571 2.662,-0.6655 1.1979,2.3958 -4.1261,2.1296 5.4571,-0.2662 1.9965,1.1979 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Tajikistan"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "TJ",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "LS",
			      "svg": "m 537.55987,494.93323 3.1944,1.7303 -3.4606,3.7268 -2.662,-2.9282 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Lesotho"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "LS",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "UZ",
			      "svg": "m 648.69837,313.38483 -0.2662,0 0,-0.1331 0.2662,-0.1331 z m -1.5972,-0.3993 0.1331,0.3993 -0.3993,0.1331 -0.2662,-0.6655 z m -29.8144,-15.7058 1.1979,2.9282 0.3993,-1.9965 4.9247,4.2592 7.4536,-0.6655 4.5254,7.7198 3.0613,0 1.7303,1.7303 1.1979,-2.2627 4.7916,-2.662 -1.9965,1.9965 3.993,0.3993 3.5937,1.9965 -5.5902,1.7303 -1.1979,-2.3958 -2.662,0.6655 -3.3275,5.4571 -0.9317,5.1909 -1.331,0 -1.8634,-0.3993 -2.2627,-2.662 -8.1191,-5.1909 -1.1979,-3.0613 -4.7916,-1.1979 -0.5324,-2.7951 -3.3275,-1.4641 -2.3958,1.9965 -0.5324,-0.5324 -0.9317,1.1979 -0.1331,1.9965 -2.5289,-0.1331 -0.1331,-11.3135 6.7881,-1.7303 -0.7986,3.4606 1.0648,-3.3275 z m 28.4834,12.9107 -0.1331,-0.1331 0,0 0.1331,0.2662 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Uzbekistan"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "UZ",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "IN",
			      "svg": "m 690.35867,347.85773 1.7303,-0.3993 0.2662,1.8634 2.2627,1.5972 5.8564,-0.5324 -1.1979,-2.2627 2.5289,-0.5324 5.1909,-3.8599 3.7268,-0.1331 3.0613,3.1944 -1.5972,2.3958 -4.2592,2.3958 -2.3958,7.0543 -1.9965,-0.3993 -0.2662,4.3923 -1.5972,1.0648 -1.0648,-4.6585 -2.5289,0.2662 3.3275,-3.5937 -5.324,-0.5324 -1.331,-2.2627 -3.5937,-1.331 1.1979,3.5937 -2.2627,1.331 2.662,6.7881 -2.3958,0.6655 0,0 -0.1331,0 0,0.1331 -2.2627,0.6655 -2.1296,4.2592 -2.2627,0.1331 -7.986,8.6515 -5.1909,2.3958 0.1331,5.9895 -1.1979,3.4606 0,4.3923 -5.9895,5.7233 -2.5289,-2.1296 -1.7303,-5.5902 -2.662,-4.5254 -3.4606,-8.3853 -1.9965,-9.8494 -0.7986,-6.5219 -0.6655,2.9282 -2.7951,1.331 -4.5254,-3.3275 2.3958,-1.5972 -5.0578,-3.4606 7.3205,-2.2627 -3.993,-5.7233 2.5289,-3.3275 3.5937,0.2662 8.6515,-11.7128 -3.1944,-2.9282 -0.6655,-3.3275 5.1909,-0.3993 3.1944,-1.7303 1.8634,-1.1979 2.9282,3.3275 1.4641,4.5254 -2.9282,0.6655 0.9317,3.3275 5.8564,3.1944 -2.5289,3.7268 6.9212,3.7268 4.6585,0.3993 3.1944,2.1296 5.9895,-0.3993 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "India"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/india.html"
			      },
			      "label": {
			        "text": "",
			        "active": true,
			        "posx": 667.5952514648438,
			        "posy": 362.13922119140625,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 10
			      }
			    },
			    {
			      "name": "ES",
			      "svg": "m 458.23227,326.82793 0.1331,0.1331 -0.1331,0 0,-0.1331 z m -6.2557,-1.7303 0.2662,0.1331 0,0.1331 -0.1331,-0.1331 z m 0.1331,-0.6655 -2.9282,-2.3958 -2.2627,-0.6655 1.0648,-5.324 0.1331,-5.9895 0.9317,-2.7951 -5.5902,-0.1331 -1.1979,-3.5937 5.0578,-1.331 13.8424,0.5324 4.5254,2.2627 3.7268,0.2662 0.2662,0.5324 0.3993,-0.2662 0.6655,0.1331 0,0 0,-0.1331 0.1331,0.1331 0,0 1.331,0.3993 1.7303,-0.2662 0.1331,1.331 -5.7233,2.7951 -3.3275,4.6585 1.331,2.1296 -2.3958,3.4606 -3.4606,2.3958 -5.9895,0.2662 -2.2627,1.5972 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Spain"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "ES",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "MA",
			      "svg": "m 458.23227,326.96103 0.1331,0 0.1331,0.3993 1.5972,0.1331 1.1979,1.0648 1.331,7.4536 -6.1226,1.331 0,2.5289 -5.324,3.0613 -4.9247,0.6655 -2.5289,1.9965 0,2.7951 -0.3993,1.4641 -6.5219,0.6655 -1.1979,2.3958 0,0 0,0 0,0 -0.3993,0.9317 0,0 0,0 0,0 -1.0648,2.1296 -4.1261,3.8599 -1.9965,5.1909 -5.5902,0.1331 6.3888,-12.6445 3.993,-4.9247 5.9895,-2.9282 2.5289,-3.8599 -0.6655,-2.7951 3.3275,-5.324 4.3923,-2.1296 2.2627,-5.0578 1.331,-0.3993 0.1331,0.1331 0.1331,0.1331 2.3958,1.9965 3.5937,-0.5324 0,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Morocco"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "",
			        "active": true,
			        "posx": 409.3598937988281,
			        "posy": 338.0902404785156,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 10
			      }
			    },
			    {
			      "name": "EC",
			      "svg": "m 264.97107,416.53733 3.4606,1.9965 5.4571,1.9965 -0.6655,3.5937 -7.0543,4.6585 -1.8634,4.1261 -3.7268,-2.3958 0.5324,-1.7303 1.331,-1.8634 -2.7951,-0.7986 0,-3.1944 1.9965,-4.5254 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Ecuador"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "EC",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "CO",
			      "svg": "m 273.88877,420.53033 -5.4571,-1.9965 -3.4606,-1.9965 0.2662,-1.8634 3.993,-4.2592 -0.5324,-6.7881 -1.4641,-1.7303 1.8634,-1.8634 -0.5324,-1.8634 4.5254,-1.9965 0.2662,-2.7951 5.7233,-1.8634 4.5254,-2.9282 0.3993,1.4641 -3.993,3.7268 -0.2662,2.7951 2.2627,5.7233 5.0578,0.2662 1.7303,2.1296 5.0578,-0.1331 -1.0648,4.1261 1.4641,2.9282 -1.331,1.331 1.1979,1.9965 0,0 0,0 -6.3888,0.9317 -0.5324,4.7916 1.5972,3.1944 -1.331,7.0543 -1.9965,-1.0648 1.8634,-2.7951 -2.5289,-1.331 -5.5902,0.1331 -1.0648,-2.3958 z m 20.2312,-5.5902 0,0 1.1979,2.1296 -1.1979,-2.1296 0,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Colombia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "CO",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "TL",
			      "svg": "m 781.79837,443.95593 0.5324,-0.2662 0.5324,-0.1331 -0.3993,0.7986 z m 2.2627,-0.9317 5.324,-1.7303 -4.9247,3.0613 -0.2662,-0.7986 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Timor-Leste"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "TL",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "TZ",
			      "svg": "m 554.86287,449.67923 0,-0.2662 -0.1331,-0.1331 0,-0.1331 -0.3993,-0.1331 0,-0.1331 0,0 0,-0.1331 -0.6655,-3.3275 -0.5324,-0.5324 -0.2662,-0.2662 0,0 -0.2662,-0.2662 0,0 0,0 -0.2662,0.1331 -0.1331,0.3993 -1.331,-0.2662 -1.1979,-0.5324 -2.3958,-0.7986 -2.1296,-1.331 -3.0613,-6.7881 -0.6655,-3.7268 2.9282,-3.0613 -0.6655,-2.1296 0.6655,-1.9965 -0.9317,-1.331 0.9317,-0.1331 2.3958,0 0,0.1331 0.1331,-0.1331 0,0 0.2662,3.5937 3.3275,0.1331 2.1296,-3.5937 9.1839,5.0578 3.8599,4.1261 1.7303,1.4641 -1.331,8.7846 2.7951,4.5254 -7.5867,3.1944 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Tanzania"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "TZ",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "AR",
			      "svg": "m 290.92557,575.32563 0.1331,0.2662 -0.2662,0 z m 0,-0.1331 0,-7.4536 0.3993,2.2627 2.9282,2.662 6.9212,2.9282 -4.9247,0.5324 -1.7303,-0.2662 -0.6655,-0.1331 z m 26.4869,-69.7444 -0.9317,5.1909 3.7268,3.3275 1.1979,4.1261 -2.3958,3.7268 -3.7268,1.5972 -7.7198,0.6655 -0.6655,5.8564 -3.7268,0.9317 -2.7951,-1.4641 -0.3993,3.8599 3.3275,0.3993 0.3993,1.9965 -4.3923,2.7951 -0.6655,4.2592 -4.3923,1.8634 -0.7986,1.7303 4.2592,2.9282 0,3.1944 -4.1261,3.1944 -0.7986,3.1944 -3.3275,3.3275 1.8634,4.6585 -3.8599,-1.1979 -4.9247,-0.1331 -1.0648,-4.5254 -2.1296,0.3993 -1.0648,-3.993 3.3275,-3.993 2.3958,-9.7163 -1.8634,-1.7303 1.0648,-2.662 -1.331,-2.7951 1.0648,-2.7951 -0.5324,-4.1261 1.4641,-5.4571 1.331,-0.6655 -0.3993,-6.3888 1.5972,-1.331 1.5972,-7.7198 -2.1296,-5.0578 2.3958,-8.7846 3.4606,-4.1261 -0.6655,-5.7233 3.0613,-2.1296 0.3993,-3.1944 2.5289,-2.662 9.0508,1.1979 4.2592,4.1261 2.3958,0.5324 6.3888,3.8599 -2.662,5.1909 7.1874,0.2662 2.5289,-2.1296 0.3993,-2.9282 1.8634,0.1331 0.1331,4.1261 -4.9247,2.9282 -4.6585,5.4571 -1.5972,4.7916 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Argentina"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "",
			        "active": true,
			        "posx": 325.3095397949219,
			        "posy": 545.8551635742188,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 10
			      }
			    },
			    {
			      "name": "SA",
			      "svg": "m 589.20267,345.99433 1.1979,2.5289 3.1944,2.5289 1.7303,5.1909 0.3993,0.5324 0.5324,-0.1331 0.2662,0.7986 0.6655,0.1331 2.5289,3.5937 6.655,0.5324 1.1979,1.9965 -1.7303,5.1909 -7.5867,2.662 -7.3205,1.0648 -4.2592,3.8599 -5.8564,-0.7986 -5.0578,0.2662 -0.9317,2.5289 -4.6585,-8.2522 -4.7916,-4.7916 0,-3.3275 -9.8494,-14.7741 -1.5972,-0.2662 0.9317,-3.3275 2.7951,0.3993 4.9247,-3.5937 -2.662,-2.7951 5.5902,-1.7303 7.4536,2.9282 6.655,5.1909 4.7916,0.2662 2.2627,0.2662 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Saudi Arabia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/middle-east.html"
			      },
			      "label": {
			        "text": "SA",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "PK",
			      "svg": "m 655.75267,321.90323 3.5937,1.5972 2.1296,2.3958 0.6655,1.5972 -3.1944,1.7303 -5.1909,0.3993 0.6655,3.3275 3.1944,2.9282 -8.6515,11.7128 -3.5937,-0.2662 -2.5289,3.3275 3.993,5.7233 -7.3205,2.2627 -2.1296,-0.5324 -2.5289,-3.7268 -12.1121,0.6655 0.6655,-2.7951 3.1944,-1.0648 -0.9317,-4.3923 -2.1296,-0.9317 -2.662,-3.5937 8.2522,1.331 5.324,-1.1979 0.3993,-3.0613 4.5254,-2.5289 3.0613,-0.2662 1.7303,-5.9895 2.662,-0.1331 1.4641,-3.1944 -1.1979,-2.5289 3.5937,-2.2627 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Pakistan"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/pakistan.html"
			      },
			      "label": {
			        "text": "PK",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "YE",
			      "svg": "m 598.25347,371.54953 1.8634,4.3923 0.9317,1.7303 -2.1296,2.662 -6.7881,2.2627 -2.2627,1.8634 -7.3205,1.7303 -4.7916,1.9965 -1.1979,-0.6655 -1.7303,-9.0508 0.9317,-2.5289 5.0578,-0.2662 5.8564,0.7986 4.2592,-3.8599 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Yemen"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "YE",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "AE",
			      "svg": "m 609.16767,353.84723 0.2662,0.2662 0,1.4641 -1.4641,0.2662 -1.5972,5.8564 -6.655,-0.5324 -2.5289,-3.5937 6.5219,0.2662 4.9247,-5.1909 0.2662,1.0648 z m 0,1.0648 0.2662,-0.1331 -0.3993,0 0,0.2662 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Dubai"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/dubai.html"
			      },
			      "label": {
			        "text": "AE",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "KE",
			      "svg": "m 565.64397,432.11003 -3.8599,-4.1261 -9.1839,-5.0578 0.3993,-2.1296 -0.5324,-1.1979 2.3958,-3.5937 -2.5289,-6.5219 3.7268,-1.9965 1.331,1.0648 5.4571,2.5289 3.7268,0.5324 3.0613,-2.2627 2.9282,0.7986 -2.3958,2.9282 0,9.317 1.4641,2.1296 -3.4606,2.662 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Kenya"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "KE",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "PE",
			      "svg": "m 273.88877,420.53033 4.2592,2.9282 1.0648,2.3958 5.5902,-0.1331 2.5289,1.331 -1.8634,2.7951 1.9965,1.0648 -1.9965,-0.1331 -5.4571,2.3958 -0.5324,3.1944 -2.2627,2.9282 4.6585,6.3888 4.2592,-1.4641 -0.3993,3.993 2.7951,-0.1331 2.2627,3.993 -1.7303,7.7198 -1.7303,0.7986 2.3958,1.0648 0.1331,0 0.1331,0 -0.2662,0.6655 0.1331,0.1331 -1.5972,1.9965 0.3993,0.5324 -1.1979,1.9965 -1.0648,0.1331 -2.7951,-2.662 -9.4501,-5.0578 -2.7951,-3.3275 0.1331,-1.8634 -3.5937,-5.324 -3.3275,-7.8529 -2.5289,-3.5937 -2.9282,-1.8634 -0.3993,-4.6585 2.3958,-2.1296 -0.5324,1.7303 3.7268,2.3958 1.8634,-4.1261 7.0543,-4.6585 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Peru"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/peru.html"
			      },
			      "label": {
			        "text": "PE",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "DO",
			      "svg": "m 282.54027,372.88053 0,0 -0.1331,-0.1331 0,0 -0.1331,-0.1331 0.7986,-0.3993 -0.1331,-2.5289 4.6585,0.1331 3.993,2.662 -8.6515,1.5972 0.1331,-0.7986 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Dominican Republic"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "DO",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "HT",
			      "svg": "m 282.54027,372.88053 0,0 -0.1331,-0.1331 0,0 z m 0.3993,-3.1944 0.1331,2.5289 -0.7986,0.3993 0.1331,0.2662 0.1331,0 0.5324,0.3993 -0.1331,0.7986 -2.3958,-1.0648 -0.1331,-2.662 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Haiti"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "HT",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "AO",
			      "svg": "m 496.96437,434.77203 0,-0.6655 -0.5324,-1.1979 1.8634,-1.5972 0.7986,0.6655 -1.5972,1.0648 z m 28.3503,30.613 -6.5219,0.9317 -5.9895,-1.5972 -11.4466,0 -1.9965,-1.1979 -3.5937,0.7986 0,-3.7268 1.8634,-6.1226 2.9282,-3.0613 0.2662,-3.993 -1.8634,-4.1261 0.9317,-1.8634 -2.7951,-5.7233 2.2627,-0.6655 8.7846,0.1331 2.5289,5.5902 4.3923,-0.2662 0.5324,-2.5289 5.7233,0.6655 0,5.4571 1.1979,4.7916 4.3923,-1.0648 0,5.4571 -5.0578,0 0,8.2522 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Angola"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "AO",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "KH",
			      "svg": "m 739.73877,382.72993 0,6.1226 -7.7198,4.9247 -2.1296,-0.2662 -1.8634,-2.9282 -1.4641,-4.9247 3.3275,-2.2627 3.993,0.2662 4.1261,0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Cambodia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "KH",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "VN",
			      "svg": "m 732.01897,393.77723 7.7198,-4.9247 0,-6.1226 0.3993,-1.4641 -2.9282,-4.5254 -6.7881,-5.9895 2.7951,-1.9965 -2.2627,-2.3958 -2.3958,0.2662 -2.5289,-4.1261 4.6585,-0.2662 3.4606,-2.2627 6.7881,5.0578 -2.662,1.4641 -3.3275,5.0578 2.5289,3.993 5.4571,5.4571 1.8634,6.3888 -1.1979,3.993 -6.3888,4.6585 -4.3923,1.8634 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Vietnam"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "VN",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "MZ",
			      "svg": "m 554.59667,454.60393 -0.3993,-3.3275 0.6655,-1.5972 6.3888,0.3993 7.5867,-3.1944 1.0648,11.0473 -2.3958,4.2592 -7.1874,3.7268 -5.5902,5.324 -0.6655,1.4641 2.1296,4.3923 -0.9317,6.655 -6.655,3.7268 1.0648,2.3958 -1.4641,0 -0.5324,0 -0.2662,-1.5972 -0.2662,-0.7986 0.1331,-4.1261 -1.7303,-5.4571 4.3923,-6.2557 -0.1331,-8.7846 -6.5219,-2.662 -0.5324,-1.7303 7.5867,-2.5289 2.9282,0.9317 -0.2662,3.8599 2.2627,1.7303 1.7303,-1.331 0.1331,-3.5937 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Mozambique"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "MZ",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "CR",
			      "svg": "m 252.59277,392.44623 0.5324,1.0648 2.2627,2.3958 -1.1979,3.0613 0,0 -0.3993,-0.6655 -6.7881,-4.3923 0.3993,-1.8634 3.4606,0.2662 z m 1.9965,7.4536 -0.3993,-0.7986 0,-0.1331 0,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Costa Rica"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "CR",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "BJ",
			      "svg": "m 475.00287,390.44973 0.5324,2.7951 -2.662,3.993 -0.1331,6.7881 -2.1296,0.2662 -0.6655,0.1331 -0.1331,-7.1874 -1.7303,-4.9247 1.331,-1.1979 2.5289,-1.1979 1.0648,-1.1979 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Benin"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "BJ",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "NG",
			      "svg": "m 472.74017,404.02593 0.1331,-6.7881 2.662,-3.993 -0.5324,-2.7951 1.331,-4.5254 3.4606,-1.0648 3.7268,2.2627 2.2627,-0.9317 4.5254,1.331 4.6585,-1.331 2.662,0.7986 2.7951,-1.7303 1.1979,1.7303 1.5972,2.2627 -6.2557,9.8494 -2.3958,4.7916 -1.8634,-1.7303 -4.3923,3.3275 -0.6655,2.5289 -6.1226,1.331 -4.5254,-5.1909 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Nigeria"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "NG",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "IR",
			      "svg": "m 579.88567,321.50393 -1.9965,-6.5219 2.1296,-0.7986 1.5972,1.8634 1.7303,0.3993 0.6655,-0.1331 0.2662,0.1331 3.7268,-2.5289 0.1331,2.662 2.2627,1.1979 0.2662,1.9965 7.4536,3.4606 5.324,-0.7986 -0.2662,-1.4641 3.8599,-2.1296 4.5254,-0.5324 4.1261,1.5972 3.8599,3.1944 2.1296,0.1331 0.2662,2.7951 -1.8634,7.3205 0.6655,4.3923 2.5289,1.7303 -2.3958,2.7951 2.662,3.5937 2.1296,0.9317 0.9317,4.3923 -3.1944,1.0648 -0.6655,2.7951 -10.9142,-1.5972 -2.3958,-3.8599 -3.993,1.9965 -8.6515,-3.993 -3.4606,-6.2557 -3.8599,0.6655 -2.1296,-2.9282 -0.7986,-3.8599 -5.0578,-4.5254 2.3958,-5.1909 -2.662,-0.5324 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Iran"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "IR",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "SV",
			      "svg": "m 241.94477,386.05743 -2.3958,0.3993 -3.3275,-1.1979 -0.1331,-0.2662 1.9965,-1.4641 4.2592,1.4641 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "El Salvador"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/El_Salvador.html"
			      },
			      "label": {
			        "text": "SV",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "CL",
			      "svg": "m 290.92557,567.73893 0,7.4536 -0.2662,0 0.2662,0.1331 -0.1331,0.2662 -3.3275,-0.3993 -1.4641,1.4641 -1.8634,-3.3275 2.2627,-4.2592 2.1296,-1.5972 -2.9282,0.6655 -0.7986,3.5937 -3.4606,-1.0648 -1.1979,2.2627 -2.3958,-2.5289 2.1296,-1.9965 -2.9282,-0.3993 0.6655,-4.9247 -3.1944,-1.5972 2.1296,-1.1979 -0.6655,-4.6585 0.1331,3.0613 -2.9282,-1.0648 1.4641,-5.9895 1.1979,2.3958 -0.3993,-2.662 1.1979,-3.0613 -2.9282,-0.3993 2.3958,-3.8599 1.1979,1.8634 1.9965,-2.2627 -3.0613,-1.5972 1.4641,-3.1944 0.6655,3.0613 2.7951,-8.3853 -1.1979,-1.7303 -1.9965,5.8564 -2.662,0.9317 2.5289,-6.5219 0.1331,-4.7916 1.1979,-1.4641 -1.0648,-5.1909 3.7268,-7.5867 2.1296,-7.8529 -0.3993,-9.5832 2.7951,-9.7163 -0.3993,-6.1226 1.331,-4.3923 -0.7986,-8.2522 1.0648,-0.1331 1.1979,-1.9965 2.662,5.0578 -0.7986,2.662 2.2627,6.2557 1.7303,0 -0.3993,3.1944 -3.0613,2.1296 0.6655,5.7233 -3.4606,4.1261 -2.3958,8.7846 2.1296,5.0578 -1.5972,7.7198 -1.5972,1.331 0.3993,6.3888 -1.331,0.6655 -1.4641,5.4571 0.5324,4.1261 -1.0648,2.7951 1.331,2.7951 -1.0648,2.662 1.8634,1.7303 -2.3958,9.7163 -3.3275,3.993 1.0648,3.993 2.1296,-0.3993 1.0648,4.5254 4.9247,0.1331 3.8599,1.1979 -1.9965,0.3993 z m 3.5937,8.1191 1.7303,1.0648 -5.324,-0.3993 -3.3275,-0.3993 6.2557,-0.3993 0.3993,0 z",
			      "active": true,
			      "fill": "#d17024",
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Chile"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/chile.html"
			      },
			      "label": {
			        "text": "CL",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "SL",
			      "svg": "m 436.53697,402.69493 -3.7268,-1.7303 -0.9317,-3.7268 1.9965,-1.9965 3.1944,-0.3993 2.5289,3.8599 -0.7986,1.8634 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Sierra Leone"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "SL",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "GW",
			      "svg": "m 427.48617,392.31313 -2.2627,-0.6655 -2.1296,-2.7951 3.993,-0.9317 3.7268,0 0,2.5289 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Guinea-Bissau"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "GW",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "HR",
			      "svg": "m 512.93637,305.79813 -1.7303,-1.1979 -0.3993,-0.2662 0.5324,0.2662 1.4641,0.7986 0,0.1331 z m -12.5114,-9.5832 4.3923,0.1331 3.0613,-3.3275 2.1296,1.7303 3.993,0.1331 0.2662,2.3958 0,0.9317 -5.324,-1.331 -2.9282,0.3993 1.0648,2.9282 3.4606,3.993 -6.9212,-3.8599 0,-2.9282 -2.2627,0.9317 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Croatia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "HR",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "BZ",
			      "svg": "m 238.61727,374.61083 0.6655,-0.1331 1.4641,-1.5972 0.2662,3.993 -1.8634,2.7951 -0.7986,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Belize"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "BZ",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "ZA",
			      "svg": "m 547.67547,489.87543 0.5324,0 1.4641,0 -1.331,4.6585 -5.0578,6.3888 -8.3853,7.5867 -5.7233,1.8634 -5.8564,-0.5324 -7.4536,2.1296 -4.6585,-5.4571 0.9317,-3.1944 -4.3923,-8.6515 6.7881,0.9317 2.1296,-1.4641 0,-9.9825 4.3923,5.7233 3.4606,-4.2592 4.5254,1.4641 8.6515,-8.5184 2.9282,-1.1979 2.5289,0.3993 2.3958,0.1331 1.7303,5.4571 -0.1331,4.1261 -2.7951,1.1979 0.7986,2.1296 z m -10.1156,5.0578 -2.9282,2.5289 2.662,2.9282 3.4606,-3.7268 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "South Africa"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "ZA",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "CF",
			      "svg": "m 523.98367,392.44623 1.9965,2.7951 1.4641,2.9282 5.5902,5.1909 2.662,3.993 -4.6585,-0.7986 -7.8529,3.0613 -4.9247,-0.5324 -2.2627,-1.8634 -2.9282,1.9965 0.1331,2.2627 -5.1909,0 -0.9317,3.0613 -2.662,-3.8599 -1.9965,-5.7233 2.7951,-3.8599 7.986,-1.331 1.1979,-2.3958 3.4606,-0.3993 5.1909,-4.6585 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Central African Republic"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "CF",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "SD",
			      "svg": "m 527.44427,398.16953 -1.4641,-2.9282 -1.9965,-2.7951 -1.9965,-7.3205 2.662,-4.9247 2.2627,-0.1331 0,-9.8494 2.5289,-1.331 0,-5.324 15.972,0 14.3748,0 1.5972,8.7846 2.7951,1.8634 -4.1261,2.3958 -1.1979,7.3205 -2.1296,4.1261 -4.1261,8.1191 -2.2627,-3.4606 0.1331,-3.5937 -2.9282,0.5324 0.7986,2.5289 -2.9282,3.1944 -3.1944,-1.1979 -2.9282,2.3958 -5.8564,-0.5324 -3.7268,-1.9965 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Sudan"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "SD",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "LY",
			      "svg": "m 529.44077,363.56353 0,5.324 -2.5289,1.331 -20.3643,-10.5149 -2.5289,1.1979 -1.9965,1.0648 -5.7233,-2.3958 -1.0648,-2.1296 -3.8599,-1.4641 -1.5972,-3.4606 1.0648,-1.0648 0,-7.1874 -0.7986,-3.0613 1.4641,-3.3275 3.7268,-2.9282 -0.1331,-1.9965 9.317,2.2627 2.2627,3.0613 3.3275,0.5324 4.3923,2.3958 1.7303,-0.6655 0.3993,-3.5937 4.3923,-3.3275 8.9177,3.5937 -1.1979,4.1261 0.7986,2.7951 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Libya"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "LY",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "CD",
			      "svg": "m 540.22187,428.64943 -0.2662,4.3923 1.0648,4.1261 2.662,3.8599 -4.2592,0.6655 -1.4641,1.5972 0.5324,0.7986 -0.3993,5.1909 1.7303,2.3958 1.8634,-0.5324 -1.4641,3.3275 -5.1909,-4.7916 -1.1979,1.0648 -6.1226,-1.5972 -0.7986,-1.331 -4.3923,1.0648 -1.1979,-4.7916 0,-5.4571 -5.7233,-0.6655 -0.5324,2.5289 -4.3923,0.2662 -2.5289,-5.5902 -8.7846,-0.1331 -1.8634,0.5324 -0.5324,-0.7986 0.5324,-1.7303 1.5972,-1.0648 3.3275,-0.9317 1.1979,1.331 3.4606,-3.7268 0.1331,-3.0613 3.8599,-3.993 0.7986,-6.7881 1.331,-3.3275 -0.1331,-2.2627 2.9282,-1.9965 2.2627,1.8634 4.9247,0.5324 7.8529,-3.0613 4.6585,0.7986 2.3958,1.9965 3.5937,-0.6655 2.662,2.662 -0.2662,2.662 1.331,0.6655 -1.8634,1.7303 -0.1331,0.6655 -1.331,1.0648 -0.6655,2.2627 -0.9317,1.0648 0.7986,0 -0.1331,1.0648 0,1.1979 -0.5324,0.3993 -0.3993,0.3993 -0.6655,0.6655 -0.1331,1.331 0,0.3993 0.2662,0.1331 0.5324,0.9317 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Congo Dem. Rep."
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "CD",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "KW",
			      "svg": "m 588.00477,341.86823 0.3993,1.8634 0.7986,2.2627 -2.5289,-1.331 -2.2627,-0.2662 1.4641,-2.3958 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Kuwait"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "KW",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "PG",
			      "svg": "m 825.05587,443.29043 0,-5.5902 0,-10.9142 7.7198,3.0613 4.5254,2.662 -0.1331,1.5972 4.3923,1.1979 -1.331,1.9965 5.8564,7.0543 3.8599,-0.2662 -0.1331,2.9282 -6.9212,-0.9317 -4.7916,-5.324 -5.9895,-1.331 -0.9317,3.5937 z m 36.2032,-6.3888 -1.5972,-3.7268 -3.7268,-1.331 -2.1296,-2.5289 -5.8564,-2.7951 -0.7986,-2.2627 1.4641,1.9965 4.6585,2.1296 2.7951,2.9282 3.7268,1.5972 3.4606,4.2592 z m -11.979,-0.7986 -6.1226,-1.331 7.4536,-0.7986 1.331,-3.1944 2.2627,0.3993 -0.6655,2.662 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Papua New Guinea"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "PG",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "DE",
			      "svg": "m 489.24457,289.29373 0,0 0,0 z m -1.331,-24.4904 0.3993,0 1.4641,0.3993 5.1909,3.0613 5.5902,-2.3958 0.9317,1.8634 0.5324,0.5324 -0.1331,0 0.1331,0.1331 -0.3993,-0.3993 0.5324,1.0648 0.9317,3.8599 0.3993,5.8564 -5.8564,1.5972 -0.2662,2.1296 3.5937,3.1944 -4.1261,3.4606 -6.2557,0.5324 -1.7303,-0.9317 0.3993,0.5324 -1.8634,0.2662 -2.2627,0 1.5972,-4.5254 -4.7916,-1.5972 0.3993,-1.1979 -0.9317,-1.0648 0.6655,-0.5324 -0.9317,-1.5972 2.5289,-4.9247 0.5324,-3.4606 0.2662,-1.7303 4.2592,-0.5324 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Germany"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/germany.html"
			      },
			      "label": {
			        "text": "DE",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "CH",
			      "svg": "m 485.11847,289.55993 2.2627,0 1.8634,-0.2662 0,0 0,0 0,0 0.7986,0.5324 0.1331,0 0.2662,0.2662 -0.3993,0.5324 -0.1331,0.5324 0.2662,0.1331 1.331,0.6655 0.9317,-0.1331 -1.1979,1.5972 -7.5867,1.4641 -0.6655,-0.6655 0.1331,-0.9317 -0.3993,-0.3993 -0.6655,0.5324 -0.3993,0.2662 -0.2662,-0.9317 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Switzerland"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "CH",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "ER",
			      "svg": "m 558.85587,383.92783 1.1979,-7.3205 4.1261,-2.3958 2.7951,7.4536 3.7268,1.1979 4.9247,5.0578 -1.0648,0.7986 -0.7986,-0.2662 -3.8599,-4.1261 -7.5867,-1.9965 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Eritrea"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "ER",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "IE",
			      "svg": "m 447.31807,264.27093 -2.3958,2.1296 4.9247,1.1979 0.6655,3.993 -0.9317,2.662 -8.7846,2.5289 -1.5972,-1.5972 3.8599,-4.6585 -2.7951,-0.3993 0.3993,-3.3275 3.1944,0.2662 0.7986,-3.1944 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Ireland"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "",
			        "active": true,
			        "posx": 432.3032531738281,
			        "posy": 267.2612609863281,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 10
			      }
			    },
			    {
			      "name": "KP",
			      "svg": "m 798.83517,306.19743 -2.662,2.2627 0.1331,2.1296 -5.5902,3.3275 2.1296,3.3275 -3.0613,0.9317 -1.1979,1.331 -4.7916,-1.9965 1.7303,-2.3958 -2.7951,-2.2627 4.1261,-2.3958 1.5972,-2.3958 3.8599,0.9317 -0.2662,-1.8634 6.3888,-1.7303 0.2662,0.3993 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "KP"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "KP",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "KR",
			      "svg": "m 788.58647,319.50743 1.1979,-1.331 3.0613,-0.9317 2.5289,3.8599 0.2662,5.1909 -2.1296,2.2627 -5.7233,0.3993 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "South Korea"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/south_korea.html"
			      },
			      "label": {
			        "text": "KR",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "GY",
			      "svg": "m 312.88707,398.56883 7.1874,6.2557 -0.1331,1.4641 -2.1296,3.3275 3.993,5.7233 -5.8564,1.8634 -3.0613,-3.8599 1.1979,-3.0613 -3.0613,-3.1944 -1.5972,-1.8634 2.662,-3.0613 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Guyana"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "GY",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "HN",
			      "svg": "m 241.01307,380.06793 5.8564,-0.6655 4.1261,0.3993 2.9282,2.1296 -4.2592,0.5324 -6.3888,4.6585 -0.5324,-0.6655 -0.7986,-0.3993 0.3993,-1.0648 -4.2592,-1.4641 0.5324,-1.7303 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Honduras"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/honduras.html"
			      },
			      "label": {
			        "text": "HN",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "MM",
			      "svg": "m 700.87357,366.09243 0.9317,-0.6655 -0.1331,-1.7303 1.5972,-1.0648 0.2662,-4.3923 1.9965,0.3993 2.3958,-7.0543 4.2592,-2.3958 1.5972,-2.3958 3.4606,1.7303 0,4.6585 -2.5289,2.2627 -0.1331,3.1944 2.3958,-0.5324 2.3958,2.662 -0.9317,2.3958 5.1909,1.5972 -1.1979,0.6655 -1.5972,2.662 -5.1909,1.331 -1.5972,3.4606 3.5937,6.1226 -1.4641,3.4606 2.2627,2.7951 1.1979,4.9247 -2.2627,3.7268 -0.3993,-7.3205 -3.4606,-9.8494 -4.5254,3.3275 -3.1944,-0.7986 1.0648,-3.8599 -1.5972,-4.9247 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Myanmar"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "MM",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "GA",
			      "svg": "m 490.70867,417.73523 3.993,0 0,-3.0613 0,-0.2662 4.9247,0.3993 -0.1331,2.2627 3.1944,0.7986 -1.5972,2.9282 1.5972,0.9317 -0.9317,4.7916 -4.2592,-1.4641 -2.2627,1.0648 0.6655,3.4606 -1.7303,0.6655 -4.7916,-5.324 -1.4641,-3.1944 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Gabon"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "GA",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "GQ",
			      "svg": "m 494.70167,414.67393 0,3.0613 -3.993,0 0.1331,-2.3958 -0.1331,-1.0648 0.5324,0.3993 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Equatorial Guinea"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "GQ",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "NI",
			      "svg": "m 247.40187,392.04693 -4.9247,-4.5254 0.7986,-0.3993 6.3888,-4.6585 4.2592,-0.5324 -1.8634,9.317 0.5324,1.1979 -1.7303,-0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Nicaragua"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "NI",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "LV",
			      "svg": "m 535.43027,255.35323 0.7986,2.5289 1.331,2.5289 -1.4641,1.1979 -2.5289,0.5324 -4.3923,-2.7951 -7.0543,0 -2.662,1.331 1.7303,-5.4571 2.2627,-0.6655 2.662,2.7951 1.5972,-3.1944 2.5289,-0.7986 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Latvia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "LV",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "UG",
			      "svg": "m 546.87687,422.79303 0,-0.1331 0,0.1331 z m -0.1331,0 -2.3958,0 -0.9317,0.1331 -1.331,1.0648 -0.9317,-0.2662 0,-1.1979 0.1331,-1.0648 0.6655,-0.7986 -0.5324,-0.2662 0.6655,-2.2627 1.331,-1.0648 2.3958,-1.7303 -0.3993,-0.6655 -1.331,-0.6655 0.2662,-2.662 6.7881,-0.6655 1.1979,-1.1979 2.5289,6.5219 -2.3958,3.5937 -3.5937,0.2662 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Uganda"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "UG",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "MW",
			      "svg": "m 554.72977,449.27993 0,-0.1331 0,0 z m -0.3993,-0.3993 0,0 0,-0.1331 0,0.1331 z m -1.1979,-3.993 -0.2662,-0.2662 0,0 z m -0.5324,-0.5324 0,0 0,0 z m -2.9282,-0.2662 1.1979,0.5324 1.331,0.2662 1.0648,9.317 1.331,0.3993 2.5289,2.9282 -0.1331,3.5937 -1.7303,1.331 -2.2627,-1.7303 0.2662,-3.8599 -2.9282,-0.9317 0.1331,-8.1191 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Malawi"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "MW",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "SX",
			      "svg": "m 576.02577,390.98213 2.5289,2.662 7.986,-1.8634 3.993,-0.1331 0,4.5254 -2.5289,3.7268 -2.5289,0 -7.4536,-2.5289 -3.5937,-4.1261 0.7986,-0.9317 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "SX"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "SX",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "TM",
			      "svg": "m 611.16417,307.26223 1.9965,0.7986 -0.5324,-1.4641 2.3958,-1.9965 3.3275,1.4641 0.5324,2.7951 4.7916,1.1979 1.1979,3.0613 8.1191,5.1909 2.2627,2.662 -4.3923,0.7986 -0.7986,2.3958 -5.5902,3.1944 -2.5289,-1.331 -0.2662,-2.7951 -2.1296,-0.1331 -3.8599,-3.1944 -4.1261,-1.5972 -4.5254,0.5324 -3.8599,2.1296 -0.9317,-7.7198 -2.1296,-0.2662 0.5324,-2.7951 1.9965,1.0648 2.5289,-1.4641 -1.9965,-2.9282 -3.7268,0.9317 4.3923,-1.7303 4.6585,3.0613 2.5289,0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Turkmenistan"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "TM",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "ZM",
			      "svg": "m 538.49157,444.08903 1.5972,-1.8634 -0.6655,-0.5324 4.2592,-0.6655 1.1979,1.4641 0.2662,-0.5324 2.1296,1.331 2.3958,0.7986 0.7986,3.7268 -0.1331,8.1191 -7.5867,2.5289 0.5324,1.7303 -3.993,1.0648 -0.2662,1.1979 -1.5972,0.7986 -1.4641,0.7986 -1.331,2.1296 -0.7986,0.2662 -3.7268,-0.6655 -2.662,-0.7986 -2.1296,0.3993 -3.4606,-3.8599 0,-8.2522 5.0578,0 0,-5.4571 0.7986,1.331 6.1226,1.5972 1.1979,-1.0648 5.1909,4.7916 1.4641,-3.3275 -1.8634,0.5324 -1.7303,-2.3958 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Zambia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "ZM",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "NC",
			      "svg": "m 552.20087,327.62653 -0.3993,0 -0.1331,0 -0.7986,-0.3993 -1.5972,0 0,0 0,0 0,0 -0.1331,0 0,0 4.7916,-1.4641 -1.4641,1.8634 z m -3.3275,-0.3993 0.1331,0 -0.1331,0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "New Caledonia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "NC",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "MR",
			      "svg": "m 443.72437,349.32183 7.986,5.0578 1.7303,1.1979 -4.3923,0 2.662,25.1559 -15.8389,-0.1331 -1.331,1.9965 -5.324,-4.9247 -5.0578,0.5324 -0.5324,1.5972 1.331,-5.5902 -1.331,-3.7268 0.9317,-2.1296 -2.2627,-1.4641 0.2662,-1.4641 10.1156,0 0,-4.5254 2.5289,-1.1979 0,-5.8564 0,0 0,0 0,0 0,-0.9317 0.3993,0 0,0 0,0 0,0 7.986,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Mauritania"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "MR",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "DZ",
			      "svg": "m 453.44067,355.57753 -1.7303,-1.1979 -7.986,-5.0578 0,-0.9317 0,-2.7951 2.5289,-1.9965 4.9247,-0.6655 5.324,-3.0613 0,-2.5289 6.1226,-1.331 -1.331,-7.4536 -1.1979,-1.0648 8.3853,-3.993 16.1051,-1.7303 3.0613,0.3993 -0.9317,6.655 -1.8634,2.1296 3.993,5.1909 1.1979,5.0578 0.7986,3.0613 0,7.1874 -1.0648,1.0648 1.5972,3.4606 3.8599,1.4641 1.0648,2.1296 -11.4466,7.0543 -4.2592,3.7268 -3.993,0.7986 -5.9895,-2.7951 -1.8634,-2.3958 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Algeria"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "DZ",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "LT",
			      "svg": "m 519.99067,263.60543 -0.2662,-1.5972 -0.2662,-1.331 2.662,-1.331 7.0543,0 4.3923,2.7951 -2.9282,4.7916 -5.0578,1.331 0,-0.7986 -1.7303,-0.6655 0.1331,-1.8634 z m -0.9317,-0.1331 0.3993,-0.7986 -0.1331,0.7986 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Lithuania"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "LT",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "ET",
			      "svg": "m 572.29897,391.51453 -0.2662,0.2662 0.2662,0.2662 0.3993,0.3993 2.5289,-0.1331 -0.7986,0.9317 3.5937,4.1261 7.4536,2.5289 2.5289,0 -7.7198,7.8529 -2.3958,-0.1331 -5.324,2.5289 -2.9282,-0.7986 -3.0613,2.2627 -3.7268,-0.5324 -5.4571,-2.5289 -3.0613,-5.1909 -3.8599,-4.6585 2.1296,-2.5289 4.1261,-8.1191 2.1296,-4.1261 3.4606,-1.5972 7.5867,1.9965 3.8599,4.1261 -1.5972,2.3958 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Ethiopia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "ET",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "GH",
			      "svg": "m 468.74717,404.82453 -8.2522,3.4606 -2.662,-0.9317 0,-0.1331 0.3993,0.1331 0.2662,-0.1331 -0.9317,-4.3923 1.8634,-3.4606 -0.5324,-3.1944 -0.1331,-3.8599 6.655,-0.3993 1.331,2.3958 0.3993,8.5184 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Ghana"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "GH",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "SI",
			      "svg": "m 500.42497,296.21493 0,-0.1331 0.2662,-0.1331 -0.7986,-2.2627 0.7986,-0.7986 2.1296,0.5324 3.993,-1.5972 0.3993,0 0.6655,1.1979 -3.0613,3.3275 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Slovenia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "SI",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "GT",
			      "svg": "m 239.14967,379.66863 0.7986,0.3993 1.0648,0 -2.3958,1.7303 -0.5324,1.7303 -1.9965,1.4641 0.1331,0.2662 -3.1944,-0.5324 -2.2627,-1.5972 1.1979,-3.8599 3.4606,-0.7986 -2.662,-2.3958 1.1979,-1.4641 4.6585,0 -0.2662,5.0578 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Guatemala"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/guatemala.html"
			      },
			      "label": {
			        "text": "GT",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "BA",
			      "svg": "m 510.80677,304.33403 -0.2662,-0.1331 0,0 -3.4606,-3.993 -1.0648,-2.9282 2.9282,-0.3993 5.324,1.331 0.9317,-0.1331 -0.5324,4.2592 -1.8634,1.7303 0,1.331 -1.4641,-0.7986 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Bosnia and Herzegovina"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "BA",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "JO",
			      "svg": "m 556.06077,338.80693 0.2662,-0.2662 -0.2662,-0.1331 -0.1331,0 0.1331,-0.2662 0.2662,0 0.1331,-1.1979 0,-2.3958 0.3993,-0.3993 2.662,1.331 5.0578,-3.0613 0.7986,2.5289 0.1331,1.0648 -5.5902,1.7303 2.662,2.7951 -4.9247,3.5937 -2.7951,-0.3993 0.1331,-0.5324 -0.1331,-0.1331 0.5324,-2.3958 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Jordan"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/middle-east.html"
			      },
			      "label": {
			        "text": "JO",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "SY",
			      "svg": "m 564.57917,332.41813 -5.0578,3.0613 -2.662,-1.331 0.3993,-0.5324 -0.1331,-1.331 1.9965,-2.2627 -1.7303,-1.1979 -0.1331,-2.2627 0,-1.4641 1.8634,-2.662 7.986,0.2662 6.655,-1.0648 -2.5289,1.7303 -0.3993,5.0578 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Syria"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/middle-east.html"
			      },
			      "label": {
			        "text": "SY",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "MC",
			      "svg": "m 484.71917,301.67203 0,0.1331 -0.1331,0 0.1331,-0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Monaco"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "MC",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "AL",
			      "svg": "m 519.19207,310.45663 0,0 0,-0.1331 z m -3.993,-3.7268 0,-0.3993 0,-0.2662 0.7986,-1.0648 0.9317,0.3993 1.0648,1.0648 0.2662,0.9317 -0.3993,1.0648 0.5324,1.331 0,0.5324 0.2662,0 0.2662,0 0.2662,0 -0.1331,0.1331 0.1331,0 0,0.1331 -0.1331,0.1331 0.1331,0 0,0.1331 0.1331,0.1331 0,0.1331 0,-0.1331 -1.5972,2.662 -0.9317,0.3993 -1.8634,-2.9282 0.2662,-3.5937 -0.1331,-0.3993 z m 0,-0.5324 0,0 -0.1331,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Albania"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "AL",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "UY",
			      "svg": "m 330.32317,505.98053 -1.1979,1.331 0.2662,1.1979 0,0.2662 0.3993,0.2662 -3.993,3.4606 -7.4536,-1.331 -1.331,-1.5972 0.3993,-4.1261 0,-1.5972 1.5972,-4.7916 1.9965,-0.2662 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Uruguay"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "UY",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "CNM",
			      "svg": "m 552.46707,327.62653 0,0 0,0 -0.2662,0 0,0 z m -3.5937,-0.3993 0,0 0,0.1331 0.1331,-0.1331 0,0 0,0.1331 z m 0.2662,0 0,0 0,0 0.1331,0 0,0 z m 2.5289,0.3993 0,0.1331 0,0 -0.6655,-0.3993 -1.7303,-0.1331 0,0 1.5972,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "CNM"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "CNM",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "MN",
			      "svg": "m 765.29397,288.89443 0.9317,-0.2662 -0.3993,-0.3993 1.9965,0 3.4606,3.4606 -8.3853,1.9965 -2.3958,2.662 -5.1909,2.2627 -4.1261,-1.0648 -1.4641,1.9965 1.331,2.2627 -6.2557,3.8599 -6.9212,0.5324 -3.993,1.5972 -3.7268,0 -5.324,-2.2627 -13.4431,-0.6655 -2.5289,-4.9247 -4.7916,-1.9965 -6.655,-0.7986 0.3993,-4.3923 -1.8634,-3.4606 -5.9895,-3.0613 -0.3993,-1.8634 11.5797,-5.5902 4.7916,0.9317 0.9317,1.8634 6.9212,0.9317 2.5289,-2.662 -1.331,-1.5972 2.7951,-3.8599 8.3853,2.7951 0.2662,2.3958 3.5937,1.5972 4.1261,-1.1979 6.655,1.8634 1.5972,1.9965 5.5902,0.6655 5.8564,-1.5972 3.1944,-2.2627 6.1226,1.5972 -3.0613,5.4571 0.9317,1.4641 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Mongolia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "MN",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "RW",
			      "svg": "m 539.68947,427.05223 -0.2662,-0.1331 0,-0.3993 1.1979,-1.1979 -0.3993,-0.7986 0.3993,-0.3993 0.5324,-0.3993 0.9317,0.2662 1.331,-1.0648 0.9317,1.331 -0.6655,1.9965 -1.7303,0.6655 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Rwanda"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "RW",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "SO",
			      "svg": "m 572.56517,410.14853 5.324,-2.5289 2.3958,0.1331 7.7198,-7.8529 2.5289,-3.7268 0,-4.5254 5.9895,-1.4641 -1.1979,5.9895 -7.3205,12.7776 -4.9247,5.0578 -6.5219,4.6585 -4.9247,5.8564 -1.4641,-2.1296 0,-9.317 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Somalia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "SO",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "BO",
			      "svg": "m 289.72767,461.65823 -0.1331,-0.3993 0.3993,0.3993 -0.1331,0 z m -1.0648,3.3275 -0.3993,-0.5324 1.5972,-1.9965 1.1979,-0.5324 -1.9965,-2.1296 1.7303,-7.7198 -2.2627,-3.993 3.1944,0 4.2592,-2.662 3.0613,-0.6655 0.1331,3.8599 2.5289,3.3275 3.3275,0.5324 3.1944,2.2627 3.4606,0.6655 0.7986,6.3888 4.2592,0.1331 2.3958,4.7916 -1.5972,5.1909 -2.3958,-2.2627 -6.7881,0.9317 -2.2627,6.9212 -9.0508,-1.1979 -2.5289,2.662 -1.7303,0 -2.2627,-6.2557 0.7986,-2.662 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Bolivia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "BO",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "CM",
			      "svg": "m 499.62637,414.80703 -4.9247,-0.3993 0,0.2662 -3.4606,0 -0.5324,-0.3993 -0.3993,-3.8599 -2.662,-2.3958 0.6655,-2.5289 4.3923,-3.3275 1.8634,1.7303 2.3958,-4.7916 6.2557,-9.8494 -1.5972,-2.2627 0.6655,-0.1331 -0.1331,0.5324 0.5324,-0.1331 3.0613,7.5867 -4.3923,0.9317 3.0613,2.9282 0.7986,2.3958 -2.7951,3.8599 1.9965,5.7233 2.662,3.8599 -0.1331,1.331 z m 2.7951,-27.951 0,0.1331 0,-0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Cameroon"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "CM",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "CG",
			      "svg": "m 499.62637,414.80703 7.3205,1.0648 0.1331,-1.331 0.9317,-3.0613 5.1909,0 -1.331,3.3275 -0.7986,6.7881 -3.8599,3.993 -0.1331,3.0613 -3.4606,3.7268 -1.1979,-1.331 -3.3275,0.9317 -0.7986,-0.6655 -1.8634,1.5972 -0.5324,-1.0648 -1.7303,-1.5972 1.7303,-0.6655 -0.6655,-3.4606 2.2627,-1.0648 4.2592,1.4641 0.9317,-4.7916 -1.5972,-0.9317 1.5972,-2.9282 -3.1944,-0.7986 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Congo"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "CG",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "EH",
			      "svg": "m 422.29527,366.89103 -0.1331,-0.2662 0.2662,-1.4641 5.5902,-0.1331 1.9965,-5.1909 4.1261,-3.8599 1.0648,-2.1296 0,0 0,5.8564 -2.5289,1.1979 0,4.5254 -10.1156,0 z m 21.4291,-18.5009 0,0.9317 -0.1331,3.5937 -7.986,0 0,0 0,0 1.1979,-2.3958 6.5219,-0.6655 z m -8.1191,4.5254 -0.3993,0.9317 0,0 0,-0.9317 0.3993,0 0,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Western Sahara"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "EH",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "RS",
			      "svg": "m 514.66667,302.33753 0.5324,-4.2592 -0.9317,0.1331 0,-0.9317 -0.2662,-2.3958 1.5972,-0.7986 1.7303,0.1331 3.1944,3.0613 3.0613,2.9282 0.6655,3.4606 -1.4641,2.3958 -1.0648,0 -0.9317,0.2662 -2.1296,-3.1944 -1.0648,1.331 -1.8634,-1.0648 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Serbia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "RS",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "ME",
			      "svg": "m 514.66667,302.33753 1.0648,1.0648 1.8634,1.0648 -0.7986,0.3993 0.1331,0.5324 -0.9317,-0.3993 -0.7986,1.0648 0,0.1331 -0.1331,0 -0.5324,0 0.6655,0.5324 -0.1331,0.3993 0.1331,0.3993 -1.5972,-1.331 -0.6655,-0.3993 -0.1331,-0.2662 0,-0.1331 0,-1.331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Montenegro"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "ME",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "TG",
			      "svg": "m 468.08167,392.31313 1.7303,4.9247 0.1331,7.1874 -0.5324,0.1331 -0.6655,0.2662 -1.5972,-1.9965 -0.3993,-8.5184 -1.331,-2.3958 1.5972,0.3993 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Togo"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "TG",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "LA",
			      "svg": "m 723.63367,364.76143 0.7986,-1.8634 1.5972,-0.3993 2.5289,4.1261 2.3958,-0.2662 2.2627,2.3958 -2.7951,1.9965 6.7881,5.9895 2.9282,4.5254 -0.3993,1.4641 -1.7303,1.0648 -4.1261,-0.1331 1.0648,-3.5937 -2.2627,-2.1296 -1.8634,-4.6585 -7.3205,2.2627 0.2662,-5.324 -2.9282,-2.1296 1.5972,-2.662 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Lao PDR"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "LA",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "AF",
			      "svg": "m 656.68437,321.23773 -1.331,0.3993 0.3993,0.2662 -5.0578,0.5324 -3.5937,2.2627 1.1979,2.5289 -1.4641,3.1944 -2.662,0.1331 -1.7303,5.9895 -3.0613,0.2662 -4.5254,2.5289 -0.3993,3.0613 -5.324,1.1979 -8.2522,-1.331 2.3958,-2.7951 -2.5289,-1.7303 -0.6655,-4.3923 1.8634,-7.3205 2.5289,1.331 5.5902,-3.1944 0.7986,-2.3958 4.3923,-0.7986 1.8634,0.3993 1.331,0 3.8599,0.2662 3.3275,-3.5937 2.662,1.331 0,3.4606 4.2592,-2.2627 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Afghanistan"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "AF",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "UA",
			      "svg": "m 522.25337,286.89793 0.3993,-0.9317 0.5324,-1.331 3.993,-4.7916 -1.1979,-3.3275 5.4571,-1.331 9.0508,1.8634 6.2557,-2.5289 5.1909,-0.7986 0.9317,3.7268 2.2627,0.1331 1.4641,2.9282 4.5254,-0.2662 6.9212,3.8599 -0.9317,4.6585 -2.3958,-0.1331 -1.5972,2.3958 -8.6515,3.0613 1.9965,3.3275 -4.1261,2.2627 -2.7951,-3.8599 2.2627,-0.9317 -5.1909,-0.9317 -1.4641,-1.331 -3.7268,4.5254 -2.2627,-0.1331 -1.4641,-0.6655 1.8634,-3.1944 2.9282,0.2662 -2.1296,-4.7916 -3.8599,-1.8634 -2.9282,0.5324 -3.4606,1.1979 -5.9895,-0.1331 -0.6655,-0.5324 z m 20.3643,6.5219 0.6655,0.9317 0.2662,-0.2662 -0.7986,-0.7986 z m 9.8494,0.9317 2.3958,1.331 -0.3993,-1.1979 -1.5972,-0.7986 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Ukraine"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "UA",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "SK",
			      "svg": "m 523.18507,284.63523 -0.5324,1.331 -0.3993,0.9317 -4.2592,-0.3993 -6.7881,2.5289 -1.7303,-0.7986 -0.7986,-1.1979 0.2662,-0.7986 2.9282,-1.5972 1.8634,-1.4641 7.7198,0.5324 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Slovakia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "SK",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "JK",
			      "svg": "m 664.00487,326.29553 -1.8634,1.1979 -0.6655,-1.5972 1.4641,0.5324 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "JK"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "JK",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "BG",
			      "svg": "m 538.62467,301.67203 -2.2627,4.1261 0.7986,1.331 -2.3958,-0.2662 -1.8634,1.0648 -2.7951,1.4641 -5.8564,-0.2662 0.1331,-1.331 -1.5972,-1.7303 1.4641,-2.3958 -0.6655,-3.4606 6.7881,1.7303 4.2592,-1.5972 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Bulgaria"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "BG",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "RO",
			      "svg": "m 538.62467,301.67203 -3.993,-1.331 -4.2592,1.5972 -6.7881,-1.7303 -3.0613,-2.9282 -3.1944,-3.0613 2.3958,-0.5324 2.1296,-3.8599 2.2627,-1.4641 5.9895,0.1331 3.4606,-1.1979 4.2592,5.324 -0.1331,3.7268 1.4641,0.6655 2.2627,0.1331 -2.662,2.7951 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Romania"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "RO",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "QA",
			      "svg": "m 595.32527,356.24303 1.8634,-3.0613 -0.9317,3.4606 -0.5324,0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Qatar"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "QA",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "LI",
			      "svg": "m 490.04317,290.62473 0.2662,0.3993 -0.1331,0.2662 -0.2662,-0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Liechtenstein"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "LI",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "AT",
			      "svg": "m 490.17627,291.29023 0.1331,-0.2662 -0.2662,-0.3993 0.3993,-0.5324 -0.2662,-0.2662 0.2662,0 0.1331,-0.1331 6.2557,-0.5324 4.1261,-3.4606 2.9282,-0.6655 5.0578,1.1979 -0.2662,0.7986 0.7986,1.1979 -1.4641,0.7986 -1.1979,2.7951 -3.993,1.5972 -2.1296,-0.5324 -3.8599,-1.7303 -4.3923,0.6655 -0.9317,0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Austria"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "AT",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "SZ",
			      "svg": "m 547.14307,487.47963 0.2662,0.7986 0.2662,1.5972 -2.5289,0.9317 -0.7986,-2.1296 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Swaziland"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "SZ",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "HU",
			      "svg": "m 522.25337,286.89793 1.1979,0.9317 0.6655,0.5324 -2.2627,1.4641 -2.1296,3.8599 -2.3958,0.5324 -1.7303,-0.1331 -1.5972,0.7986 -3.993,-0.1331 -2.1296,-1.7303 -0.6655,-1.1979 -0.3993,0 1.1979,-2.7951 1.4641,-0.7986 1.7303,0.7986 6.7881,-2.5289 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Hungary"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "HU",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "NE",
			      "svg": "m 475.00287,390.44973 -1.9965,-1.7303 -1.0648,1.1979 -3.5937,-2.9282 -1.9965,-4.7916 8.3853,-1.1979 1.7303,-2.662 0.1331,-7.1874 3.993,-0.7986 4.2592,-3.7268 11.4466,-7.0543 5.7233,2.3958 1.9965,-1.0648 0.3993,4.1261 2.1296,2.9282 -1.331,9.0508 -5.1909,6.5219 0.3993,1.7303 -2.7951,1.7303 -2.662,-0.7986 -4.6585,1.331 -4.5254,-1.331 -2.2627,0.9317 -3.7268,-2.2627 -3.4606,1.0648 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Niger"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "NE",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "LU",
			      "svg": "m 481.92407,283.43733 -0.9317,0 -0.3993,-0.2662 -0.2662,-1.1979 1.0648,-0.7986 0.9317,1.0648 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Luxemburg"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "LU",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "AD",
			      "svg": "m 469.41267,305.26573 0.7986,-0.1331 -0.1331,0.3993 -0.3993,0.2662 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Andorra"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "AD",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "CI",
			      "svg": "m 458.49847,407.22033 -7.5867,0.2662 -4.3923,1.7303 0.1331,-3.7268 -2.7951,-1.7303 0.2662,-2.662 1.5972,-4.7916 -0.2662,-1.8634 4.3923,-0.2662 1.8634,-0.3993 2.1296,1.8634 5.0578,0.5324 0.5324,3.1944 -1.8634,3.4606 z m -0.6655,0.1331 -0.3993,-0.1331 0.3993,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "CÃ´te d\\'Ivoire"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "CI",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "LR",
			      "svg": "m 446.51947,409.21683 -4.3923,-1.9965 -5.5902,-4.5254 2.2627,-2.1296 0.7986,-1.8634 1.9965,0.3993 0.9317,2.9282 1.5972,-0.9317 -0.2662,2.662 2.7951,1.7303 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Liberia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "LR",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "BN",
			      "svg": "m 758.90517,408.01893 0.2662,-0.1331 0,-0.1331 0.5324,1.5972 z m -2.662,0.5324 1.4641,-0.2662 1.0648,-0.3993 -0.9317,2.1296 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Brunei Darussalam"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "BN",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "BE",
			      "svg": "m 481.39167,281.17463 -1.0648,0.7986 0.2662,1.1979 -4.2592,-1.4641 -4.1261,-3.7268 1.5972,-0.7986 0.5324,-0.1331 1.1979,0.5324 1.0648,-0.5324 0.1331,0.1331 -0.1331,-0.1331 1.9965,-0.3993 2.5289,2.3958 0.9317,1.5972 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Belgium"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "BE",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "IQ",
			      "svg": "m 589.46887,342.00133 -1.0648,-0.2662 -0.3993,0.1331 -2.1296,0.1331 -1.4641,2.3958 -4.7916,-0.2662 -6.655,-5.1909 -7.4536,-2.9282 -0.1331,-1.0648 -0.7986,-2.5289 6.2557,-3.993 0.3993,-5.0578 2.5289,-1.7303 0.9317,-0.6655 5.1909,0.5324 1.331,3.4606 2.662,0.5324 -2.3958,5.1909 5.0578,4.5254 0.7986,3.8599 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Iraq"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "IQ",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "GE",
			      "svg": "m 580.41807,309.25873 -1.9965,0.1331 -1.9965,0.3993 -1.5972,-1.4641 -3.1944,0.2662 -0.1331,-3.4606 -3.8599,-2.3958 12.3783,2.1296 4.1261,2.5289 0.1331,2.5289 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Georgia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "GE",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "GM",
			      "svg": "m 423.09387,386.98913 -0.1331,-0.7986 0.6655,-0.5324 4.2592,-0.5324 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Gambia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "GM",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "TD",
			      "svg": "m 502.68767,387.25533 0.7986,-0.2662 -1.0648,-0.1331 0,0 -0.2662,-0.1331 0.1331,0.1331 -0.6655,0.1331 -1.1979,-1.7303 -0.3993,-1.7303 5.1909,-6.5219 1.331,-9.0508 -2.1296,-2.9282 -0.3993,-4.1261 2.5289,-1.1979 20.3643,10.5149 0,9.8494 -2.2627,0.1331 -2.662,4.9247 1.9965,7.3205 -0.9317,-0.1331 -5.1909,4.6585 -3.4606,0.3993 -1.1979,2.3958 -7.986,1.331 -0.7986,-2.3958 -3.0613,-2.9282 4.3923,-0.9317 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Chad"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "TD",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "KV",
			      "svg": "m 518.26037,307.39533 -0.2662,-0.9317 -1.0648,-1.0648 -0.1331,-0.5324 0.7986,-0.3993 1.0648,-1.331 2.1296,3.1944 -1.1979,0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "KV"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "KV",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "LB",
			      "svg": "m 555.26217,333.21673 1.1979,-2.2627 0.9317,-2.1296 1.7303,1.1979 -1.9965,2.2627 -0.9317,0.9317 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Lebanon"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "LB",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "DJ",
			      "svg": "m 575.22717,392.31313 -2.5289,0.1331 -0.3993,-0.3993 0.2662,-0.2662 -0.2662,-0.2662 -0.1331,-0.6655 1.5972,-2.3958 0.7986,0.2662 1.0648,-0.7986 0.6655,1.8634 -0.2662,1.1979 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Djibouti"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "DJ",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "BI",
			      "svg": "m 541.41977,431.44453 -0.7986,-1.331 -0.3993,-1.4641 0,-0.6655 -0.5324,-0.9317 2.2627,-0.1331 1.7303,-0.6655 0.6655,2.1296 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "BI"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "BI",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "SR",
			      "svg": "m 326.59637,414.27463 -3.4606,-0.3993 -1.331,1.4641 -3.993,-5.7233 2.1296,-3.3275 0.6655,-1.331 7.4536,0.5324 -0.2662,1.1979 0.3993,4.7916 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Suriname"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "SR",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "IL",
			      "svg": "m 552.99947,338.27453 1.5972,-2.7951 0.6655,-2.2627 0.9317,0 0.9317,-0.9317 0.1331,1.331 -0.3993,0.5324 -0.3993,0.3993 0,2.3958 -0.5324,0.6655 0.1331,0.5324 -0.1331,0.2662 0.1331,0 -0.1331,0.2662 0.1331,0.1331 -0.6655,1.8634 -0.5324,2.3958 -0.1331,0.2662 0,0 -0.1331,-0.6655 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Palestine/Israel"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/middle-east.html"
			      },
			      "label": {
			        "text": "IL",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "ML",
			      "svg": "m 451.71037,393.77723 -1.8634,0.3993 -4.3923,0.2662 -3.0613,-5.9895 -3.8599,1.4641 -1.7303,-1.1979 -1.8634,-3.4606 -0.3993,-2.662 1.331,-1.9965 15.8389,0.1331 -2.662,-25.1559 4.3923,0 15.3065,10.3818 1.8634,2.3958 5.9895,2.7951 -0.1331,7.1874 -1.7303,2.662 -8.3853,1.1979 -2.3958,-0.3993 -8.5184,4.2592 -2.7951,3.7268 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Mali"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "ML",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "SN",
			      "svg": "m 423.09387,388.85253 -0.1331,-1.1979 0.1331,-0.6655 4.7916,-1.8634 -4.2592,0.5324 -1.4641,-3.4606 1.4641,-2.3958 0.5324,-1.5972 5.0578,-0.5324 5.324,4.9247 0.3993,2.662 1.8634,3.4606 -2.5289,0.1331 -3.4606,-0.9317 -3.7268,0 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Senegal"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "SN",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "GN",
			      "svg": "m 430.81367,387.92083 3.4606,0.9317 2.5289,-0.1331 1.7303,1.1979 3.8599,-1.4641 3.0613,5.9895 0.2662,1.8634 -1.5972,4.7916 -1.5972,0.9317 -0.9317,-2.9282 -1.9965,-0.3993 -2.5289,-3.8599 -3.1944,0.3993 -1.9965,1.9965 -1.331,-1.9965 -3.0613,-2.9282 3.3275,-1.8634 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Guinea"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "GN",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "ZW",
			      "svg": "m 530.10627,465.78433 3.7268,0.6655 0.7986,-0.2662 2.7951,-2.9282 0,0 1.5972,-0.7986 0.2662,-1.1979 3.993,-1.0648 6.5219,2.662 0.1331,8.7846 -4.3923,6.2557 -2.3958,-0.1331 -2.5289,-0.3993 -3.4606,-1.5972 -0.7986,-2.9282 -3.993,-2.662 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Zimbabwe"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "ZW",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "PL",
			      "svg": "m 515.73147,266.40053 -0.5324,0.6655 0.9317,-0.6655 7.4536,0.3993 0.2662,0 1.7303,0.6655 0,0.7986 1.0648,4.3923 -1.8634,1.1979 1.1979,2.662 1.1979,3.3275 -3.993,4.7916 -1.7303,-0.9317 -7.7198,-0.5324 -0.6655,-1.1979 -9.5832,-3.1944 -0.3993,-5.8564 -0.9317,-3.8599 0.9317,-0.5324 -1.0648,-0.1331 -0.1331,-0.1331 0.1331,0 10.3818,-3.1944 3.3275,1.331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Poland"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "PL",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "MK",
			      "svg": "m 519.19207,310.45663 0,0 0,0.1331 z m 3.5937,-4.3923 1.5972,1.7303 -0.1331,1.331 -2.662,0.6655 -1.9965,0.7986 -0.3993,-0.5324 0,0.3993 0,-0.1331 0,0 -0.2662,0 -0.2662,0 0.1331,-0.5324 -0.3993,0 -0.5324,-1.331 0.3993,-1.0648 1.331,-0.9317 1.1979,-0.1331 0.9317,-0.2662 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Macedonia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "MK",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "PY",
			      "svg": "m 327.52807,482.28873 -0.3993,1.0648 -0.5324,2.662 0.1331,0.2662 -0.1331,0.1331 -0.3993,2.9282 -2.5289,2.1296 -7.1874,-0.2662 2.662,-5.1909 -6.3888,-3.8599 -2.3958,-0.5324 -4.2592,-4.1261 2.2627,-6.9212 6.7881,-0.9317 2.3958,2.2627 0.5324,5.0578 3.993,0.1331 1.9965,1.4641 0.5324,3.4606 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Paraguay"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "PY",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "BY",
			      "svg": "m 525.98017,276.51613 -1.1979,-2.662 1.8634,-1.1979 -1.0648,-4.3923 5.0578,-1.331 2.9282,-4.7916 2.5289,-0.5324 1.4641,-1.1979 6.9212,1.8634 2.2627,6.3888 2.3958,1.331 -3.7268,1.4641 1.331,3.0613 -6.2557,2.5289 -9.0508,-1.8634 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Belarus"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "BY",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "CZ",
			      "svg": "m 513.73497,283.17113 -1.8634,1.4641 -2.9282,1.5972 -5.0578,-1.1979 -2.9282,0.6655 -3.5937,-3.1944 0.2662,-2.1296 5.8564,-1.5972 9.5832,3.1944 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Czech Republic"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "CZ",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "BF",
			      "svg": "m 468.08167,392.31313 -1.0648,0 -1.5972,-0.3993 -6.655,0.3993 0.1331,3.8599 -5.0578,-0.5324 -2.1296,-1.8634 0.9317,-3.993 2.7951,-3.7268 8.5184,-4.2592 2.3958,0.3993 1.9965,4.7916 3.5937,2.9282 -2.5289,1.1979 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Burkina Faso"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "BF",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "NA",
			      "svg": "m 525.31467,465.38503 2.1296,-0.3993 2.662,0.7986 -4.2592,1.7303 -0.6655,-1.1979 -5.9895,0.7986 0.1331,9.5832 -2.662,0.1331 0,7.3205 0,9.9825 -2.1296,1.4641 -6.7881,-0.9317 -2.9282,-3.4606 -1.8634,-7.4536 -0.5324,-6.1226 -5.9895,-9.9825 -0.6655,-3.3275 3.5937,-0.7986 1.9965,1.1979 11.4466,0 5.9895,1.5972 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Namibia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "NA",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "TN",
			      "svg": "m 495.10097,332.95053 0.1331,1.9965 -3.7268,2.9282 -1.4641,3.3275 -1.1979,-5.0578 -3.993,-5.1909 1.8634,-2.1296 0.9317,-6.655 2.9282,-1.1979 3.5937,6.1226 -2.5289,2.662 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Tunisia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "TN",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "BT",
			      "svg": "m 699.27637,348.12393 1.1979,2.2627 -5.8564,0.5324 -2.2627,-1.5972 3.3275,-2.9282 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Bhutan"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "BT",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "KG",
			      "svg": "m 646.56877,312.45313 5.5902,-1.7303 -3.5937,-1.9965 -3.993,-0.3993 1.9965,-1.9965 2.2627,-1.8634 4.2592,1.331 1.7303,-2.662 2.5289,1.331 8.2522,-0.1331 4.5254,2.1296 -5.324,3.4606 -3.3275,0.3993 -7.1874,2.662 -0.7986,1.7303 -3.5937,0.7986 -1.9965,-1.1979 -5.4571,0.2662 z m -0.7986,1.0648 -0.3993,0 0.2662,0.2662 0.2662,-0.1331 z m 2.9282,-0.1331 0,-0.2662 -0.2662,0.1331 0,0.1331 z m -1.5972,-0.3993 -0.5324,-0.1331 0.2662,0.6655 0.3993,-0.1331 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Kyrgyzstan"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "KG",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "MD",
			      "svg": "m 537.69297,296.34803 0.1331,-3.7268 -4.2592,-5.324 2.9282,-0.5324 3.8599,1.8634 2.1296,4.7916 -2.9282,-0.2662 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Moldova"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "MD",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "SS",
			      "svg": "m 552.33397,409.48303 -1.1979,1.1979 -6.7881,0.6655 -2.662,-2.662 -3.5937,0.6655 -2.3958,-1.9965 -2.662,-3.993 -5.5902,-5.1909 2.2627,-4.1261 3.7268,1.9965 5.8564,0.5324 2.9282,-2.3958 3.1944,1.1979 2.9282,-3.1944 -0.7986,-2.5289 2.9282,-0.5324 -0.1331,3.5937 2.2627,3.4606 -2.1296,2.5289 3.8599,4.6585 3.0613,5.1909 -1.331,-1.0648 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "South Sudan"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "SS",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "BW",
			      "svg": "m 530.10627,465.78433 2.2627,4.3923 3.993,2.662 0.7986,2.9282 3.4606,1.5972 -2.9282,1.1979 -8.6515,8.5184 -4.5254,-1.4641 -3.4606,4.2592 -4.3923,-5.7233 0,-7.3205 2.662,-0.1331 -0.1331,-9.5832 5.9895,-0.7986 0.6655,1.1979 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Botswana"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "BW",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "SB",
			      "svg": "m 873.10497,442.49183 -1.4641,-1.4641 0,0 0,0 1.4641,0.9317 0,0.5324 z m 0,0 0.6655,0.6655 2.2627,-1.0648 0.9317,2.662 0,0 0,0 -3.8599,0.3993 0,-2.662 z m 3.8599,2.5289 0,-0.2662 0,0 0,0 0.1331,0 -0.1331,0.2662 z m -5.324,-3.993 -2.3958,-1.5972 -1.8634,1.0648 -1.7303,-1.9965 4.3923,0.9317 1.5972,1.5972 0,0 z m 5.324,3.993 0.6655,2.2627 -3.0613,2.5289 2.3958,-4.7916 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Solomon Islands"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "SB",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "VE",
			      "svg": "m 295.31787,417.06973 -1.1979,-2.1296 0,0 0,0 0,0 -1.1979,-1.9965 1.331,-1.331 -1.4641,-2.9282 1.0648,-4.1261 -5.0578,0.1331 -1.7303,-2.1296 -5.0578,-0.2662 -2.2627,-5.7233 0.2662,-2.7951 3.993,-3.7268 -1.9965,5.1909 2.7951,0.2662 -1.4641,-2.7951 3.7268,-1.5972 3.1944,0 2.3958,2.5289 4.2592,-0.5324 3.8599,1.4641 5.1909,-1.7303 1.1979,1.8634 5.7233,3.8599 -0.7986,3.5937 -2.662,3.0613 1.5972,1.8634 -2.1296,2.3958 -7.8529,0.6655 1.5972,3.8599 1.7303,0.1331 -5.5902,4.3923 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Venezuela"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "VE",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "NZ",
			      "svg": "m 898.12777,547.64083 -7.3205,-1.0648 0.3993,-3.4606 3.5937,-3.4606 7.0543,-4.3923 2.5289,-5.1909 4.3923,0 0.9317,2.9282 -4.5254,5.7233 -2.7951,1.7303 -1.7303,4.3923 z m 16.3713,-16.9037 -3.7268,0.5324 1.5972,-3.0613 -3.7268,-2.662 2.662,-4.7916 -1.1979,-3.3275 -3.1944,-4.1261 1.9965,-0.6655 3.1944,3.5937 2.1296,4.1261 3.7268,0.9317 2.9282,-0.6655 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "New Zealand"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "NZ",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "CU",
			      "svg": "m 269.36337,367.68963 -3.993,-0.5324 -1.4641,-2.3958 -9.0508,-3.0613 -4.3923,2.5289 0.2662,-1.5972 5.9895,-2.2627 5.0578,0.3993 3.3275,1.4641 11.4466,6.5219 -8.7846,0.6655 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Cuba"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "CU",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "AU",
			      "svg": "m 837.96657,538.19073 -1.9965,-2.9282 -3.0613,-7.7198 5.4571,3.3275 5.0578,-1.7303 -0.5324,7.986 z m -1.5972,-76.2663 2.662,7.1874 6.7881,3.7268 1.1979,4.6585 3.0613,1.1979 0.2662,2.3958 2.5289,1.4641 2.9282,4.5254 1.4641,8.3853 -2.7951,9.9825 -1.8634,1.1979 -4.1261,8.6515 -0.5324,4.6585 -4.2592,0.9317 -4.6585,2.662 -3.8599,-0.6655 0.1331,-1.7303 -3.7268,2.7951 -7.3205,-2.3958 -2.3958,-2.5289 -1.8634,-4.7916 -5.8564,1.4641 3.4606,-8.3853 -1.5972,0 -4.5254,5.1909 -3.8599,-7.0543 -7.7198,-2.7951 -12.5114,2.1296 -5.324,2.662 -1.4641,2.1296 -9.0508,0 -3.993,2.7951 -6.2557,-0.1331 -2.5289,-2.1296 1.7303,-2.2627 0.1331,-4.6585 -4.2592,-11.979 -2.7951,-4.2592 3.0613,0 -1.7303,-3.3275 0.5324,-5.1909 5.7233,-4.1261 12.9107,-3.7268 3.4606,-3.8599 1.5972,-4.1261 1.4641,2.3958 0.1331,-3.4606 2.1296,0.3993 0,-2.7951 6.3888,-3.993 3.1944,2.5289 3.7268,1.0648 -0.7986,-1.7303 5.324,-8.1191 0,2.662 4.3923,-1.5972 4.9247,1.4641 3.5937,-1.1979 1.0648,1.331 -3.7268,6.655 9.0508,5.1909 2.5289,2.1296 2.1296,-0.6655 2.1296,-6.1226 -0.1331,-6.655 1.331,-5.9895 1.1979,1.4641 3.4606,9.7163 3.5937,1.0648 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Australia"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/australia.html"
			      },
			      "label": {
			        "text": "",
			        "active": true,
			        "posx": 806.0020751953125,
			        "posy": 485.4144592285156,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 10
			      }
			    },
			    {
			      "name": "BS",
			      "svg": "m 273.62257,357.70713 -6.2557,-6.5219 6.5219,6.655 0.6655,2.7951 -2.3958,-1.4641 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Bahamas"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "BS",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "MG",
			      "svg": "m 592.79637,462.45683 -5.7233,19.2995 -1.331,3.0613 -4.9247,1.5972 -2.7951,-1.5972 -2.1296,-7.3205 3.1944,-5.9895 -1.331,-6.655 1.331,-3.3275 7.7198,-2.7951 1.8634,-4.3923 2.662,-3.7268 1.7303,2.7951 1.331,6.2557 -2.1296,0.2662 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Madagascar"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "MG",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "IS",
			      "svg": "m 409.78387,224.60713 -6.5219,-0.5324 5.0578,-3.993 3.1944,1.9965 0.9317,2.662 2.1296,-3.1944 6.3888,0.6655 2.662,-2.2627 4.7916,1.8634 2.9282,4.1261 -2.662,2.7951 -8.1191,2.7951 -2.5289,1.331 -6.2557,-1.9965 -3.8599,0.1331 2.5289,-2.2627 -1.8634,-1.7303 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Iceland"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "IS",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "EG",
			      "svg": "m 554.72977,343.33233 -1.5972,4.7916 -4.2592,-3.3275 7.4536,13.5762 0.3993,2.7951 3.0613,2.3958 -14.3748,0 -15.972,0 0,-19.4326 -0.7986,-2.7951 1.1979,-4.1261 9.9825,2.3958 3.3275,-1.8634 4.3923,1.1979 5.4571,-0.6655 1.5972,4.3923 z",
			      "active": true,
			      "fill": "#d17024",
			      "hoveredfill": "#3B729F",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Egypt"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/middle-east.html"
			      },
			      "label": {
			        "text": "EG",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    },
			    {
			      "name": "NP",
			      "svg": "m 672.25707,341.33583 2.662,-0.3993 7.7198,5.5902 7.7198,1.331 0.1331,3.0613 -5.9895,0.3993 -3.1944,-2.1296 -4.6585,-0.3993 -6.9212,-3.7268 z",
			      "active": true,
			      "fill": "#88898c",
			      "hoveredfill": "#E84142",
			      "inactivefill": "#FF0000",
			      "strokefill": "#333",
			      "strokewidth": 1,
			      "stroke-hoveredwidth": 3,
			      "stroketype": "solid",
			      "glow": true,
			      "tooltip": {
			        "active": true,
			        "text": "Nepal"
			      },
			      "url": {
			        "openinnew": true,
			        "text": "zz_chapters/no_chapter_yet.html"
			      },
			      "label": {
			        "text": "NP",
			        "active": false,
			        "posx": 0,
			        "posy": 0,
			        "fill": "#000000",
			        "hoveredfill": "#000000",
			        "font": "Oswald",
			        "size": 15
			      }
			    }
			],
		    "frames": []
		};

		/**
		 *	DO NOT EDIT BELOW THIS LINE UNLESS YOU KNOW WHAT YOU ARE DOING
		 **/

		var _selectedStateNames = [];

        var _defaults = {
        	"map": {
        		"container": _cont,
        		"glow": false, 
        		"stroketypes":{'solid': '', 'dashed':'- ', 'none':''}
        	}
        };

        //Unite the default and the incoming object literals, storing the options
        var _settings = $.extend({}, _defaults, _options, options);

		function _createMap(){
			/*Set up the map in the a parent container*/
			_settings.map.canvas = new Raphael(_settings.map.container[0], "100%", "100%");
        	_settings.map.canvas.setViewBox(0, 0, _settings.size.width, _settings.size.height, true);
        	_drawContent();	
		}
		function _setBackground(){
	        if(_settings.background.transparent){
				_settings.map.container.addClass('transparent');
	        }
	        else
	        {
				_settings.map.container.removeClass('transparent').css({'background-color': _settings.background.fill});
	        }	
		}		
		function _drawContent(){
			_setBackground();
	        for(i=0;i<_settings.content.length;i++){
	            var current = _settings.content[i];
				
	            /*Create a Raphael path from svg path provided and appeand to the current object*/
	            
				if(typeof current["area"] === "undefined"){
				    current["area"] = _settings.map.canvas.path(current.svg);
	            }
				
	            /*Also store the DOM representation of the area*/
	            if(typeof current["areadom"] === "undefined"){
				    current["areadom"] = current.area[0];
				}
	            

				current['qtip'] = $(current['area'].node).qtip({
	                content:current.tooltip.text,               
	                position: {
	                    target: 'mouse',
	                    adjust: { x: 20, y: 20 },
	                    viewport: $(window)
	                },	                
	                style: {
	                    classes: 'qtip-bootstrap',
	                    tip:{
	                        corner: false
	                    }
	                }
	            });


	            current['api'] = current['qtip'].qtip('api');		
	            current['api'].enable();

	            	            	            
	            /*Create the labels*/
	            if(current.label.active){
	                if(typeof current["rlabel"] === "undefined"){
					    current["rlabel"] = _settings.map.canvas.text(current.label.posx, current.label.posy, current.label.text);
					}

					current['label-qtip'] = $(current['rlabel'].node).qtip({
		                content:current.tooltip.text,               
		                position: {
		                    target: 'mouse',
		                    adjust: { x: 20, y: 20 },
		                    viewport: $(window)
		                },	                
		                style: {
		                    classes: 'qtip-bootstrap',
		                    tip:{
		                        corner: false
		                    }
		                }
		            });

	            	current['label-qtip-api'] = current['label-qtip'].qtip('api');		
	            	current['label-qtip-api'].enable();
	            }
	            
				
	            /*Assign fill and stroke styles to the area*/
	            _assignStyle("area", current);
	            

	            /*Handle events like mouseover, touchstart etc.*/
	            _handleEvents(current);
	        }			
		}
		function _assignStyle(type, current){
			switch(type){
			    case "area":          
	                current["area"].attr({"fill": current.fill, "stroke": current.strokefill, "stroke-width": current.strokewidth, "stroke-dasharray": _settings.map.stroketypes[current.stroketype], "stroke-linejoin":"round"});				

	                $(current["areadom"]).attr('fill-rule', 'evenodd');
	                
	                if(current.hasOwnProperty('rlabel')){
	                   current["rlabel"].attr({"font-size": current.label.size, "fill": current.label.fill}); 
	                }
	        
			        //Apply style 'inactive' if the area is marked inactive
	                if(!current.active){
	                    current["area"].attr({'fill': current['inactivefill']});
	                }			
				break;
				case "frame":
				    current["area"].attr({"fill-opacity": 0});
				break;
			}	
		}	
		function _followURL(urlobj){
	        if(urlobj.openinnew){
	            window.open(urlobj.text);
	        }
	        else
	        {
	             window.top.location =  urlobj.text;
	        }	
		}				
		function _areaClicked(){
	        var selected = this.data("fullobj");
	        if(!selected['active']){return;}
			if(selected.url.text != ""){
				_followURL(selected.url);
			}			
		}
		function _labelClicked(){
	        var selected = this.data("fullobj");
	        if(!selected['active']){return;}
			if(selected.url.text != ""){
				_followURL(selected.url);
			}
		}
		function _handleEvents(current){

			current['area'].data('fullobj', current);

			_settings.map.container.click(function(e){
				  let svg = $(_settings.map.container[0]).find('svg').get(0);
				  var pt = svg.createSVGPoint(), svgP;
				  
				  pt.x = e.clientX;
				  pt.y = e.clientY;
				  svgP = pt.matrixTransform(svg.getScreenCTM().inverse());
				  console.clear();
				  console.log(svgP.x, svgP.y);
			});


			current['area'].hover(function(a){
				if(!current['active']){return;}
				current.area.attr({cursor: "pointer"});
				current.area.toFront();				
				current.area.animate({fill: current.hoveredfill, "stroke-width": current["stroke-hoveredwidth"]}, 300);
		        if(current.hasOwnProperty('rlabel')){
		            current.rlabel.toFront();
		            current['rlabel'].animate({'fill': current.label.hoveredfill});
		        }				
				current['api'].toggle(true, a);	
			},
			function(b){
				if(!current['active']){return;}
				current.area.animate({"fill": current.fill, "stroke-width": current["strokewidth"]}, 300);
		        if(current.hasOwnProperty('rlabel')){
		            current['rlabel'].animate({'fill': current.label.fill});
		        }				
				current['api'].toggle(false, b);	
			});

	        current['area'].click(_areaClicked);
	        
	        if(current.hasOwnProperty('rlabel')){

	        	current['rlabel'].data('fullobj', current);
	            current['rlabel'].hover(function(a){

					if(!current['active']){return;}
					current.rlabel.attr({cursor: "pointer"});
					current.area.toFront();
					current.rlabel.toFront();
					current.area.animate({fill: current.hoveredfill, "stroke-width": current["stroke-hoveredwidth"]}, 300);
					current.rlabel.animate({'fill': current.label.hoveredfill});
					current['label-qtip-api'].toggle(true, a);	
	            }, function(b){
					if(!current['active']){return;}
					current.area.animate({"fill": current.fill, "stroke-width": current["strokewidth"]}, 300);
					current.rlabel.animate({'fill': current.label.fill});
					current['label-qtip-api'].toggle(false, b);
	            });
	            current['rlabel'].click(_labelClicked);

	        }	
		}
		function findWithAttr(array, attr, value) {
		    for(var i = 0; i < array.length; i += 1) {
		        if(array[i][attr] === value) {
		            return i;
		        }
		    }
		    return -1;
		}		
		this.set = function(handler, args){
			console.log(args);
			var index = findWithAttr(_settings.content, "name", handler);
			if(index > -1){
				_settings.content[index]["area"].unmouseover(_areaHovered);
				_settings.content[index]["area"].unmouseout(_areaLeft);
				_settings.content[index]["area"].untouchstart();
				_settings.content[index]["area"].untouchend();
				_settings.content[index]["area"].unclick(_areaClicked);

				if( _settings.content[index].hasOwnProperty('rlabel') ){
					_settings.content[index]["rlabel"].unmouseover(_areaHovered);
					_settings.content[index]["rlabel"].unmouseout(_areaLeft);
					//_settings.content[index]["rlabel"].untouchstart();
					//_settings.content[index]["rlabel"].untouchend();
					_settings.content[index]["rlabel"].unclick(_areaClicked);					
				}

				_settings.content[index] = $.extend({}, _settings.content[index], args, {"fillRule": "evenodd"});

				_assignStyle("area", _settings.content[index]);
				
				_handleEvents(_settings.content[index]);
			}
		}
		this.getSelectedAreaNames = function(){
			return _selectedStateNames;
		}
        _createMap();

        return this;
    };
}( jQuery ));