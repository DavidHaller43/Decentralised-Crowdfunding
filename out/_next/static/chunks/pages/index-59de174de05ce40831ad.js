_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{RNiq:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),c=n("HaE+"),i=n("1OyB"),s=n("vuIU"),l=n("Ji7U"),o=n("md7G"),u=n("foSv"),d=n("q1tI"),p=n.n(d),m=n("z8k1"),f=n("QetY"),h=n("OIDg"),b=n("CafY"),N=n("8cHP"),O=p.a.createElement;function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}var v=function(e){Object(l.a)(n,e);var t=j(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"renderCampaigns",value:function(){var e=this.props.campaigns.map((function(e){return{header:e,description:O(N.Link,{route:"/campaigns/".concat(e)},O("a",null,"View Campaign")),fluid:!0}}));return O(m.a.Group,{items:e})}},{key:"render",value:function(){return O(b.a,null,O("div",null,O("h2",null,"Open Campaigns"),O(N.Link,{route:"/campaigns/new"},O("a",null,O(f.a,{floated:"right",content:"Create Campaign",icon:"plus circle",primary:!0,labelPosition:"right"}))),this.renderCampaigns()))}}],[{key:"getInitialProps",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.methods.getDeployedCampaigns().call();case 2:return t=e.sent,e.abrupt("return",{campaigns:t});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),n}(d.Component);t.default=v},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},z8k1:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var a=n("pVnL"),r=n.n(a),c=n("lwsE"),i=n.n(c),s=n("W8MJ"),l=n.n(s),o=n("a1gu"),u=n.n(o),d=n("Nsbk"),p=n.n(d),m=n("PJYZ"),f=n.n(m),h=n("7W2i"),b=n.n(h),N=n("lSNA"),O=n.n(N),j=n("TSYQ"),v=n.n(j),g=(n("17x9"),n("q1tI")),k=n.n(g),y=n("ZeOK"),E=n("ICNK"),C=n("Y53p"),x=n("H+2d"),w=n("5XkN"),P=(n("Wt1U"),n("MZgk"));function A(e){var t=e.children,n=e.className,a=e.content,c=e.textAlign,i=v()(Object(y.d)(c),"description",n),s=Object(E.a)(A,e),l=Object(C.a)(A,e);return k.a.createElement(l,r()({},s,{className:i}),x.a.isNil(t)?a:t)}A.handledProps=["as","children","className","content","textAlign"],A.propTypes={};var _=A;function R(e){var t=e.children,n=e.className,a=e.content,c=e.textAlign,i=v()(Object(y.d)(c),"header",n),s=Object(E.a)(R,e),l=Object(C.a)(R,e);return k.a.createElement(l,r()({},s,{className:i}),x.a.isNil(t)?a:t)}R.handledProps=["as","children","className","content","textAlign"],R.propTypes={};var T=R;function D(e){var t=e.children,n=e.className,a=e.content,c=e.textAlign,i=v()(Object(y.d)(c),"meta",n),s=Object(E.a)(D,e),l=Object(C.a)(D,e);return k.a.createElement(l,r()({},s,{className:i}),x.a.isNil(t)?a:t)}D.handledProps=["as","children","className","content","textAlign"],D.propTypes={};var G=D;function I(e){var t=e.children,n=e.className,a=e.content,c=e.description,i=e.extra,s=e.header,l=e.meta,o=e.textAlign,u=v()(Object(y.a)(i,"extra"),Object(y.d)(o),"content",n),d=Object(E.a)(I,e),p=Object(C.a)(I,e);return x.a.isNil(t)?x.a.isNil(a)?k.a.createElement(p,r()({},d,{className:u}),Object(P.d)(T,(function(e){return{content:e}}),s,{autoGenerateKey:!1}),Object(P.d)(G,(function(e){return{content:e}}),l,{autoGenerateKey:!1}),Object(P.d)(_,(function(e){return{content:e}}),c,{autoGenerateKey:!1})):k.a.createElement(p,r()({},d,{className:u}),a):k.a.createElement(p,r()({},d,{className:u}),t)}I.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],I.propTypes={};var K=I,J=n("3WF5"),Y=n.n(J);function q(e){var t=e.centered,n=e.children,a=e.className,c=e.content,i=e.doubling,s=e.items,l=e.itemsPerRow,o=e.stackable,u=e.textAlign,d=v()("ui",Object(y.a)(t,"centered"),Object(y.a)(i,"doubling"),Object(y.a)(o,"stackable"),Object(y.d)(u),Object(y.g)(l),"cards",a),p=Object(E.a)(q,e),m=Object(C.a)(q,e);if(!x.a.isNil(n))return k.a.createElement(m,r()({},p,{className:d}),n);if(!x.a.isNil(c))return k.a.createElement(m,r()({},p,{className:d}),c);var f=Y()(s,(function(e){var t=e.key||[e.header,e.description].join("-");return k.a.createElement(S,r()({key:t},e))}));return k.a.createElement(m,r()({},p,{className:d}),f)}q.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],q.propTypes={};var H=q,S=function(e){function t(){var e,n;i()(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return n=u()(this,(e=p()(t)).call.apply(e,[this].concat(r))),O()(f()(n),"handleClick",(function(e){var t=n.props.onClick;t&&t(e,n.props)})),n}return b()(t,e),l()(t,[{key:"render",value:function(){var e=this.props,n=e.centered,a=e.children,c=e.className,i=e.color,s=e.content,l=e.description,o=e.extra,u=e.fluid,d=e.header,p=e.href,m=e.image,f=e.link,h=e.meta,b=e.onClick,N=e.raised,O=v()("ui",i,Object(y.a)(n,"centered"),Object(y.a)(u,"fluid"),Object(y.a)(f,"link"),Object(y.a)(N,"raised"),"card",c),j=Object(E.a)(t,this.props),g=Object(C.a)(t,this.props,(function(){if(b)return"a"}));return x.a.isNil(a)?x.a.isNil(s)?k.a.createElement(g,r()({},j,{className:O,href:p,onClick:this.handleClick}),w.a.create(m,{autoGenerateKey:!1,defaultProps:{ui:!1,wrapped:!0}}),(l||d||h)&&k.a.createElement(K,{description:l,header:d,meta:h}),o&&k.a.createElement(K,{extra:!0},o)):k.a.createElement(g,r()({},j,{className:O,href:p,onClick:this.handleClick}),s):k.a.createElement(g,r()({},j,{className:O,href:p,onClick:this.handleClick}),a)}}]),t}(g.Component);O()(S,"Content",K),O()(S,"Description",_),O()(S,"Group",H),O()(S,"Header",T),O()(S,"Meta",G),O()(S,"handledProps",["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"]),S.propTypes={}}},[["vlRD",0,2,1,3,6]]]);