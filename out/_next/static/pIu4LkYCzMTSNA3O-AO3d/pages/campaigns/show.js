(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"LG/0":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/campaigns/show",function(){return a("T4VJ")}])},T4VJ:function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),r=a.n(n),c=a("HaE+"),i=a("1OyB"),s=a("vuIU"),o=a("Ji7U"),l=a("md7G"),u=a("foSv"),d=a("q1tI"),m=a.n(d),p=a("CafY"),h=a("4vrq"),b=a("z8k1"),f=(a("RIqP"),a("pVnL")),g=a.n(f),v=a("TSYQ"),O=a.n(v),j=(a("17x9"),a("ZeOK")),y=a("ICNK"),w=a("Y53p"),N=a("MZgk");function k(e){var t=e.children,a=e.className,n=e.computer,r=e.color,c=e.floated,i=e.largeScreen,s=e.mobile,o=e.only,l=e.stretched,u=e.tablet,d=e.textAlign,p=e.verticalAlign,h=e.widescreen,b=e.width,f=O()(r,Object(j.a)(l,"stretched"),Object(j.c)(o,"only"),Object(j.d)(d),Object(j.e)(c,"floated"),Object(j.f)(p),Object(j.g)(n,"wide computer"),Object(j.g)(i,"wide large screen"),Object(j.g)(s,"wide mobile"),Object(j.g)(u,"wide tablet"),Object(j.g)(h,"wide widescreen"),Object(j.g)(b,"wide"),"column",a),v=Object(y.a)(k,e),N=Object(w.a)(k,e);return m.a.createElement(N,g()({},v,{className:f}),t)}k.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],k.propTypes={},k.create=Object(N.e)(k,(function(e){return{children:e}}));var C=k;function x(e){var t=e.centered,a=e.children,n=e.className,r=e.color,c=e.columns,i=e.divided,s=e.only,o=e.reversed,l=e.stretched,u=e.textAlign,d=e.verticalAlign,p=O()(r,Object(j.a)(t,"centered"),Object(j.a)(i,"divided"),Object(j.a)(l,"stretched"),Object(j.c)(s,"only"),Object(j.c)(o,"reversed"),Object(j.d)(u),Object(j.f)(d),Object(j.g)(c,"column",!0),"row",n),h=Object(y.a)(x,e),b=Object(w.a)(x,e);return m.a.createElement(b,g()({},h,{className:p}),a)}x.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],x.propTypes={};var A=x;function E(e){var t=e.celled,a=e.centered,n=e.children,r=e.className,c=e.columns,i=e.container,s=e.divided,o=e.doubling,l=e.inverted,u=e.padded,d=e.relaxed,p=e.reversed,h=e.stackable,b=e.stretched,f=e.textAlign,v=e.verticalAlign,N=O()("ui",Object(j.a)(a,"centered"),Object(j.a)(i,"container"),Object(j.a)(o,"doubling"),Object(j.a)(l,"inverted"),Object(j.a)(h,"stackable"),Object(j.a)(b,"stretched"),Object(j.b)(t,"celled"),Object(j.b)(s,"divided"),Object(j.b)(u,"padded"),Object(j.b)(d,"relaxed"),Object(j.c)(p,"reversed"),Object(j.d)(f),Object(j.f)(v),Object(j.g)(c,"column",!0),"grid",r),k=Object(y.a)(E,e),C=Object(w.a)(E,e);return m.a.createElement(C,g()({},k,{className:N}),n)}E.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],E.Column=C,E.Row=A,E.propTypes={};var P=E,R=a("QetY"),S=a("oZBQ"),T=a("JX7q"),_=a("rePB"),q=a("vFsZ"),W=a("TbSc"),M=a("D1pA"),G=a("8cHP"),D=m.a.createElement;function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(l.a)(this,a)}}var J=function(e){Object(o.a)(a,e);var t=I(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return e=t.call.apply(t,[this].concat(s)),Object(_.a)(Object(T.a)(e),"state",{value:"",loading:!1,errorMessage:"",transaction_status_message_for_notched:"",message:""}),Object(_.a)(Object(T.a)(e),"onSubmit",function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(e.state.value<S.a.utils.fromWei(e.props.minimumContribution,"ether"))){t.next=4;break}return window.alert("Please give  minimum contribution as given"),t.abrupt("return");case 4:return n=Object(h.a)(e.props.address),e.setState({loading:!0,transaction_status_message_for_notched:"Waiting on transaction success...",errorMessage:""}),t.prev=6,t.next=9,S.a.eth.getAccounts();case 9:return c=t.sent,console.log(S.a.eth.getBalance(c[0])),t.next=13,n.methods.contribute().send({from:c[0],value:S.a.utils.toWei(e.state.value,"ether")});case 13:e.setState({message:"You suceessfully contibute to this  campaign"}),G.Router.replaceRoute("/campaigns/".concat(e.props.address)),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(6),e.setState({message:"Transaction failed",errorMessage:"Hey your metamask is not allow to complete the transaction !"+t.t0.message});case 20:e.setState({loading:!1,value:"",message:""});case 21:case"end":return t.stop()}}),t,null,[[6,17]])})));return function(e){return t.apply(this,arguments)}}()),e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return D(q.a,{onSubmit:this.onSubmit,error:!!this.state.errorMessage},D(q.a.Input,{min:"0",step:"any",type:"number",pattern:"[0-9]",label:D("h3",null,"Ammount to Contibute"),style:{width:"150px"},placeholder:"Ammount in ether",value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}}),D(R.a,{loading:this.state.loading,primary:!0},"Contribute"),D("h2",null,this.state.message),D(W.a,{error:!0,style:{width:"520px"},header:"Oops!",content:this.state.errorMessage}),D(W.a,{icon:!0,hidden:!this.state.loading,positive:!0},D(M.a,{name:"circle notched",loading:!0}),D(W.a.Content,null,this.state.transaction_status_message_for_notched)))}}]),a}(d.Component),K=m.a.createElement;function Y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(l.a)(this,a)}}var Z=function(e){Object(o.a)(a,e);var t=Y(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"renderCards",value:function(){var e=this.props,t=e.campaignBalance,a=e.manager,n=e.minimumContribution,r=e.approversCount,c=[{header:a,meta:"Address of manager ",description:"This manager created this campaign and able to create and finalize request to withdraw money",style:{overflowWrap:"break-word"}},{header:n,meta:"Minimum Contribution (in Wei) for this Campaign ",description:"Pledge to give minimum "+n+" wei to make this campaign successfull and become approver"},{header:e.requestsCount,meta:"Number of request",description:"A request tries to withdraw money from the contract .  Request must be approved by approvers"},{header:S.a.utils.fromWei(t,"ether"),meta:"Campaign balance(in ether)",description:"this campaign has funded  "+S.a.utils.fromWei(t,"ether")+" ether till now and manager allow to spent all money left "},{header:r,meta:"Number of approvers ",description:"Number of people who have already donated to this campaign"}];return K(b.a.Group,{items:c})}},{key:"render",value:function(){return K(p.a,null,K("h2",null,"Campaign Details"),K(P,null,K(P.Row,null,K(P.Column,{width:10},this.renderCards()),K(P.Column,{width:6},K(J,{address:this.props.address,minimumContribution:this.props.minimumContribution}))),K(P.Row,null,K(P.Column,null,K(G.Link,{route:"/campaigns/".concat(this.props.address,"/requests")},K("a",null,K(R.a,{primary:!0,floated:"left"},"View Requests")))))))}}],[{key:"getInitialProps",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(h.a)(t.query.address),e.next=3,a.methods.getSummary().call();case 3:return n=e.sent,e.abrupt("return",{address:t.query.address,minimumContribution:n[0],campaignBalance:n[1],requestsCount:n[2],approversCount:n[3],manager:n[4]});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),a}(d.Component);t.default=Z},z8k1:function(e,t,a){"use strict";a.d(t,"a",(function(){return K}));var n=a("pVnL"),r=a.n(n),c=a("lwsE"),i=a.n(c),s=a("W8MJ"),o=a.n(s),l=a("a1gu"),u=a.n(l),d=a("Nsbk"),m=a.n(d),p=a("PJYZ"),h=a.n(p),b=a("7W2i"),f=a.n(b),g=a("lSNA"),v=a.n(g),O=a("TSYQ"),j=a.n(O),y=(a("17x9"),a("q1tI")),w=a.n(y),N=a("ZeOK"),k=a("ICNK"),C=a("Y53p"),x=a("H+2d"),A=a("5XkN"),E=(a("Wt1U"),a("MZgk"));function P(e){var t=e.children,a=e.className,n=e.content,c=e.textAlign,i=j()(Object(N.d)(c),"description",a),s=Object(k.a)(P,e),o=Object(C.a)(P,e);return w.a.createElement(o,r()({},s,{className:i}),x.a.isNil(t)?n:t)}P.handledProps=["as","children","className","content","textAlign"],P.propTypes={};var R=P;function S(e){var t=e.children,a=e.className,n=e.content,c=e.textAlign,i=j()(Object(N.d)(c),"header",a),s=Object(k.a)(S,e),o=Object(C.a)(S,e);return w.a.createElement(o,r()({},s,{className:i}),x.a.isNil(t)?n:t)}S.handledProps=["as","children","className","content","textAlign"],S.propTypes={};var T=S;function _(e){var t=e.children,a=e.className,n=e.content,c=e.textAlign,i=j()(Object(N.d)(c),"meta",a),s=Object(k.a)(_,e),o=Object(C.a)(_,e);return w.a.createElement(o,r()({},s,{className:i}),x.a.isNil(t)?n:t)}_.handledProps=["as","children","className","content","textAlign"],_.propTypes={};var q=_;function W(e){var t=e.children,a=e.className,n=e.content,c=e.description,i=e.extra,s=e.header,o=e.meta,l=e.textAlign,u=j()(Object(N.a)(i,"extra"),Object(N.d)(l),"content",a),d=Object(k.a)(W,e),m=Object(C.a)(W,e);return x.a.isNil(t)?x.a.isNil(n)?w.a.createElement(m,r()({},d,{className:u}),Object(E.d)(T,(function(e){return{content:e}}),s,{autoGenerateKey:!1}),Object(E.d)(q,(function(e){return{content:e}}),o,{autoGenerateKey:!1}),Object(E.d)(R,(function(e){return{content:e}}),c,{autoGenerateKey:!1})):w.a.createElement(m,r()({},d,{className:u}),n):w.a.createElement(m,r()({},d,{className:u}),t)}W.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],W.propTypes={};var M=W,G=a("3WF5"),D=a.n(G);function I(e){var t=e.centered,a=e.children,n=e.className,c=e.content,i=e.doubling,s=e.items,o=e.itemsPerRow,l=e.stackable,u=e.textAlign,d=j()("ui",Object(N.a)(t,"centered"),Object(N.a)(i,"doubling"),Object(N.a)(l,"stackable"),Object(N.d)(u),Object(N.g)(o),"cards",n),m=Object(k.a)(I,e),p=Object(C.a)(I,e);if(!x.a.isNil(a))return w.a.createElement(p,r()({},m,{className:d}),a);if(!x.a.isNil(c))return w.a.createElement(p,r()({},m,{className:d}),c);var h=D()(s,(function(e){var t=e.key||[e.header,e.description].join("-");return w.a.createElement(K,r()({key:t},e))}));return w.a.createElement(p,r()({},m,{className:d}),h)}I.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],I.propTypes={};var J=I,K=function(e){function t(){var e,a;i()(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return a=u()(this,(e=m()(t)).call.apply(e,[this].concat(r))),v()(h()(a),"handleClick",(function(e){var t=a.props.onClick;t&&t(e,a.props)})),a}return f()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,a=e.centered,n=e.children,c=e.className,i=e.color,s=e.content,o=e.description,l=e.extra,u=e.fluid,d=e.header,m=e.href,p=e.image,h=e.link,b=e.meta,f=e.onClick,g=e.raised,v=j()("ui",i,Object(N.a)(a,"centered"),Object(N.a)(u,"fluid"),Object(N.a)(h,"link"),Object(N.a)(g,"raised"),"card",c),O=Object(k.a)(t,this.props),y=Object(C.a)(t,this.props,(function(){if(f)return"a"}));return x.a.isNil(n)?x.a.isNil(s)?w.a.createElement(y,r()({},O,{className:v,href:m,onClick:this.handleClick}),A.a.create(p,{autoGenerateKey:!1,defaultProps:{ui:!1,wrapped:!0}}),(o||d||b)&&w.a.createElement(M,{description:o,header:d,meta:b}),l&&w.a.createElement(M,{extra:!0},l)):w.a.createElement(y,r()({},O,{className:v,href:m,onClick:this.handleClick}),s):w.a.createElement(y,r()({},O,{className:v,href:m,onClick:this.handleClick}),n)}}]),t}(y.Component);v()(K,"Content",M),v()(K,"Description",R),v()(K,"Group",J),v()(K,"Header",T),v()(K,"Meta",q),v()(K,"handledProps",["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"]),K.propTypes={}}},[["LG/0",0,2,1,3,4,5]]]);