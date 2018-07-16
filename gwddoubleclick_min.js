(function(){'use strict';var f,h=function(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a},k=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")},l=function(a){if(k(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&k(a))return a;return null};function m(){this.v={}}m.prototype.add=function(a,b){a="string"==typeof a?a:a.getString();this.v[a]||(this.v[a]=[]);this.v[a].push(b)};var n=function(a){var b=[],c="object"==typeof gwd&&"GwdId"in gwd,d;for(d in a.v)b.push(c?new gwd.GwdId(d):d);return b},p=function(a,b){return b?a.v["string"==typeof b?b:b.getString()]||[]:[]};function q(a,b){this.i=a;this.W=b;this.F=this.J.bind(this)}q.prototype.observe=function(a){if(a.nodeType==Node.ELEMENT_NODE)for(var b=n(this.i),c=0;c<b.length;c++){var d=r(b[c]);if(d&&h(a,d)){var e=p(this.i,b[c]);e&&e.forEach(function(a){d.addEventListener(a.event,this.F,!1)}.bind(this))}}};var t=function(a,b){if(b.nodeType==Node.ELEMENT_NODE)for(var c=n(a.i),d=0;d<c.length;d++){var e=r(c[d]);if(e&&h(b,e)){var g=p(a.i,c[d]);g&&g.forEach(function(a){e.removeEventListener(a.event,this.F,!1)}.bind(a))}}};
q.prototype.J=function(a){this.W(a)};var r=function(a){return"string"==typeof a?document.getElementById(a):a.getElement(document)};document.registerElement("gwd-exit");document.registerElement("gwd-metric-event");document.registerElement("gwd-metric-configuration");document.registerElement("gwd-timer");var u=function(a,b,c){if(c){var d=document.createEvent("CustomEvent");d.initCustomEvent(a,!0,!0,c)}else d=document.createEvent("Event"),d.initEvent(a,!0,!0);b.dispatchEvent(d);return d};var w=function(){};goog.inherits(w,HTMLElement);f=w.prototype;
f.createdCallback=function(){document.body.style.opacity="0";this.P=this.ba.bind(this);this.H=this.da.bind(this);this.R=this.ca.bind(this);this.B=this.aa.bind(this);this.A=this.Z.bind(this);this.C=u.bind(null,"expandfinish",this);this.w=u.bind(null,"collapsefinish",this);this.O=this.$.bind(this);this.F=this.J.bind(this);this.T=this.ea.bind(this);this.V=this.fa.bind(this);this.c=this.h=null;this.s=this.u=!1;this.K=[];this.o=!1;this.L=this.hasAttribute("fullscreen");this.m=null;this.D=this.j=!1;this.G=
window.innerHeight>=window.innerWidth?1:2;this.g=this.b=null};
f.attachedCallback=function(){Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START,this.B);Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START,this.A);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_START,this.B);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START,this.A);Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH,this.C);Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH,this.w);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_FINISH,
this.C);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_FINISH,this.w);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_DIMENSIONS,this.O);this.a=this.querySelector("gwd-pagedeck")||this.querySelector("[is=gwd-pagedeck]");this.a.addEventListener("pagetransitionend",this.T,!1);this.b=document.getElementById(this.getAttribute("data-provider"));this.g=document.querySelector("gwd-data-binder");var a=this.querySelector("gwd-metric-configuration"),b=new m;if(a){a=Array.prototype.slice.call(a.getElementsByTagName("gwd-metric-event"));
for(var c=0;c<a.length;c++){var d=a[c],e=d.getAttribute("source");if(e){var g=d.getAttribute("exit");d={event:d.getAttribute("event"),ga:d.getAttribute("metric")||g,X:d.hasAttribute("cumulative"),exit:g};b.add(x(e),d)}}}this.i=b;this.S=new q(this.i,this.F);window.addEventListener("resize",this.V,!1)};
f.detachedCallback=function(){Enabler.removeEventListener(studio.events.StudioEvent.INIT,this.P);Enabler.removeEventListener(studio.events.StudioEvent.VISIBLE,this.H);Enabler.removeEventListener(studio.events.StudioEvent.PAGE_LOADED,this.R);Enabler.removeEventListener(studio.events.StudioEvent.EXPAND_START,this.B);Enabler.removeEventListener(studio.events.StudioEvent.COLLAPSE_START,this.A);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_START,this.B);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START,
this.A);Enabler.removeEventListener(studio.events.StudioEvent.EXPAND_FINISH,this.C);Enabler.removeEventListener(studio.events.StudioEvent.COLLAPSE_FINISH,this.w);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_FINISH,this.C);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_FINISH,this.w);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_DIMENSIONS,this.O);this.a.removeEventListener("pagetransitionend",this.T,!1);window.removeEventListener("resize",
this.V,!1);this.b&&this.h&&this.b.removeEventListener("ready",this.h);this.g&&this.c&&this.g.removeEventListener("bindingfinished",this.c)};f.initAd=function(){this.o=!1;var a=this.P;Enabler.removeEventListener(studio.events.StudioEvent.INIT,a);Enabler.addEventListener(studio.events.StudioEvent.INIT,a);Enabler.isInitialized()&&a()};f.exit=function(a,b,c,d,e){Enabler.exit(a,b);("undefined"==typeof d||d)&&y(this);c&&this.goToPage(e)};
f.exitOverride=function(a,b,c,d,e){Enabler.exitOverride(a,b);("undefined"==typeof d||d)&&y(this);c&&this.goToPage(e)};f.incrementCounter=function(a,b){Enabler.counter(a,b)};f.startTimer=function(a){Enabler.startTimer(a)};f.stopTimer=function(a){Enabler.stopTimer(a)};f.reportManualClose=function(){Enabler.reportManualClose()};
f.J=function(a){var b=a.target,c=x(b),d=c+": "+a.type;a:{var e=p(this.i,c);for(var g=0;g<e.length;g++)if(e[g].event==a.type){e=e[g];break a}e=void 0}e.exit&&a.detail&&a.detail.url?(d=c+": "+e.exit,a.detail["exit-id"]&&(d=a.detail["exit-id"]),b="",null!=a.detail["product-index"]&&(b=a.detail["product-index"]),this.b&&"dynamic_remarketing"==this.b.getAttribute("gwd-schema-id")?(c=a.detail["action-event"],e={},c&&(e.clickX=c.clientX||c.changedTouches[0].clientX,e.clickY=c.clientY||c.changedTouches[0].clientY),
Enabler.dynamicExit(d,a.detail.url,b,void 0,e)):Enabler.exitOverride(d,a.detail.url),a.detail.handled=!0,a.detail.collapse&&this.goToPage()):(a=l(b))&&a.gwdIsActive()&&this.incrementCounter(e.ga||d,e.X)};
f.ba=function(){var a=function(){if(this.hasAttribute("polite-load")){var a=this.R;Enabler.isPageLoaded()?a():Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED,a)}else a=this.H,Enabler.isVisible()?a():Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,a)}.bind(this);if(this.L){var b=function(c){(this.m=!!c.supported)&&u("fullscreensupport",this);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_SUPPORT,b);a()}.bind(this);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_SUPPORT,
b);Enabler.queryFullscreenSupport()}else a()};f.da=function(a){if(this.o)this.b&&this.N(null);else{var b;a&&(b=a.detail);var c=this.ia.bind(this,b);this.b&&(c=this.Y.bind(this,c));if(this.L){Enabler.setResponsiveExpanding(!0);var d=function(a){this.D=a;c()}.bind(this);Enabler.loadModule(studio.module.ModuleId.GDN,function(){var a=studio.sdk.gdn.getConfig();a.isInCreativeToolsetContext()?a.isInterstitial(d):c()})}else c()}};
f.ca=function(){var a=this.H;Enabler.isVisible()?a():Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,a)};f.Y=function(a){this.b?(this.h&&this.b.removeEventListener("ready",this.h),this.h=this.N.bind(this,a),this.b.isDataLoaded()&&this.h(),this.b.addEventListener("ready",this.h)):a()};
f.N=function(a){var b=!!a;if(this.g){this.c&&(this.g.removeEventListener("bindingfinished",this.c),this.c=null);var c=this.b.getData();c&&(b=this.a.getElementsBySelector("*"),b=b.concat(this.a.getPages()),this.g.bindData(c,b)?this.U(a):(this.c=this.U.bind(this,a),this.g.addEventListener("bindingfinished",this.c)),b=!1)}b&&a()};
f.U=function(a){this.c&&(this.g.removeEventListener("bindingfinished",this.c),this.c=null);if(this.o){var b=document.getElementsByTagName("gwd-text-helper");0<b.length&&b[0].refitAll()}a&&a()};f.ia=function(a){this.o||(this.o=!0,document.body.style.opacity="",u("adinitialized",this,a),this.D?(a=this.a.getPage(this.a.findPageIndexByAttributeValue("expanded",!0)),this.goToPage(a.id)):this.goToPage())};
f.goToPage=function(a,b,c,d,e){var g=this.a.getPage(this.a.currentIndex);if(a=a?this.a.getPage(a):this.a.getDefaultPage()){var v=!!g&&!!a&&!this.u&&!this.D&&!g.hasAttribute("expanded")&&a.hasAttribute("expanded");g=!!g&&!!a&&!this.s&&!this.D&&g.hasAttribute("expanded")&&!a.hasAttribute("expanded");v&&this.s||g&&this.u||((this.f=a.id,b&&(this.l={transition:b,duration:c,easing:d,direction:e}),v)?this.L&&!1!==this.m?this.m&&(this.j=!0,Enabler.requestFullscreenExpand()):Enabler.requestExpand():g?this.j?
Enabler.requestFullscreenCollapse():Enabler.requestCollapse():(this.s=this.u=!1,this.I()))}};f.aa=function(){u("expandstart",this);this.m?(this.j=!0,Enabler.finishFullscreenExpand()):Enabler.finishExpand();if(!this.f){var a=this.a.getPage(this.a.findPageIndexByAttributeValue("expanded",!0));a&&(this.f=a.id)}a=this.a.getPage(this.a.currentIndex);this.u=!!a&&this.f!=a.id;setTimeout(this.I.bind(this),30)};
f.Z=function(){u("collapsestart",this);this.j?(Enabler.finishFullscreenCollapse(),this.j=!1):Enabler.finishCollapse();this.f||(this.reportManualClose(),this.f=this.a.getDefaultPage().id);var a=this.a.getPage(this.a.currentIndex);this.s=!!a&&this.f!=a.id;setTimeout(this.I.bind(this),30)};f.fa=function(){if(!this.f){var a=window.innerHeight>=window.innerWidth?1:2;this.G!=a&&(this.G=a,(a=this.a.getPage(this.a.currentIndex))&&setTimeout(this.goToPage.bind(this,a.id),0))}};
f.$=function(a){a&&Enabler.setResponsiveSize(a.width,a.height)};f.I=function(){if(this.f){this.G=window.innerHeight>=window.innerWidth?1:2;var a=this.a.getOrientationSpecificPage(this.G,this.f);this.l?this.a.goToPage(a.id,this.l.transition,this.l.duration,this.l.easing,this.l.direction):this.a.goToPage(a.id);this.j&&a.classList.add("fs")}this.l=this.f=void 0};
f.ea=function(a){this.s=this.u=!1;if(a.target==this.a){var b=a.detail;a=b.outgoingPage;b=b.incomingPage;if(a&&(t(this.S,a),(a=a.querySelectorAll("video, gwd-video"))&&0<a.length))for(this.M=[];this.K.length;)studio.video.Reporter.detach(this.K.shift());this.S.observe(b);if((a=b.querySelectorAll("video, gwd-video"))&&0<a.length){b=studio.video&&studio.video.Reporter;var c=this.ha.bind(this);this.M=Array.prototype.slice.call(a);b?c():Enabler.loadModule(studio.module.ModuleId.VIDEO,c)}}};
f.ha=function(){for(var a,b;this.M.length;)if(b=this.M.shift(),a=x(b))studio.video.Reporter.attach(a,"gwd-video"==b.tagName.toLowerCase()?b.firstChild:b,b.autoplay),this.K.push(a)};var x=function(a){return"object"==typeof gwd&&"GwdId"in gwd?(new gwd.GwdId(a)).getString():"string"==typeof a?a:a.id},y=function(a){Array.prototype.slice.call(a.a.querySelectorAll("video, gwd-video, gwd-youtube, gwd-audio, audio")).forEach(function(a){a.pause()})};w.prototype.attributeChangedCallback=function(){};
document.registerElement("gwd-doubleclick",{prototype:w.prototype});}).call(this);
