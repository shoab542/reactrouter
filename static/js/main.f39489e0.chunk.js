(this["webpackJsonpreact-router-6-upgrade"]=this["webpackJsonpreact-router-6-upgrade"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={form:"QuoteForm_form__2PL5G",loading:"QuoteForm_loading__2rVw7",control:"QuoteForm_control__15edm",actions:"QuoteForm_actions__1ybho"}},function(e,t,n){e.exports={header:"MainNavigation_header__2cydJ",logo:"MainNavigation_logo__1qwf3",nav:"MainNavigation_nav__2Ghd-",active:"MainNavigation_active__2i8q2"}},,function(e,t,n){e.exports={form:"NewCommentForm_form__kgtgi",loading:"NewCommentForm_loading__1U8Xh",control:"NewCommentForm_control__3elLF",actions:"NewCommentForm_actions__228Gm"}},,,,function(e,t,n){e.exports={list:"QuoteList_list__Dn1Zu",sorting:"QuoteList_sorting__2QboW"}},,,function(e,t,n){e.exports={item:"QuoteItem_item__16pHu"}},,,function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__2e-0M"}},function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__2SHUU"}},function(e,t,n){e.exports={quote:"HighlightedQuote_quote__2tcps"}},function(e,t,n){e.exports={comments:"Comments_comments__MXCHD"}},function(e,t,n){e.exports={item:"CommentItem_item__1UxP0"}},function(e,t,n){e.exports={comments:"CommentsList_comments__23qfp"}},function(e,t,n){e.exports={card:"Card_card__38zI8"}},function(e,t,n){e.exports={main:"Layout_main__9Vmfr"}},,,,,function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(22),r=n.n(c),s=n(4),a=(n(38),n(2)),o=n(1),i=n(23),u=n.n(i),j=n(0),d=function(e){return Object(j.jsxs)("li",{className:u.a.item,children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("blockquote",{children:Object(j.jsx)("p",{children:e.text})}),Object(j.jsx)("figcaption",{children:e.author})]}),Object(j.jsx)(s.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},l=n(20),m=n.n(l),b=function(e){var t,n,c=Object(a.h)(),r=Object(a.i)(),s="asc"===new URLSearchParams(r.search).get("sort"),i=(t=e.quotes,n=s,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(j.jsxs)(o.Fragment,{children:[Object(j.jsx)("div",{className:m.a.sorting,children:Object(j.jsxs)("button",{onClick:function(){c.push({pathname:r.pathname,search:"?sort=".concat(s?"desc":"asc")})},children:["Sort ",s?"Descending":"Ascending"]})}),Object(j.jsx)("ul",{className:m.a.list,children:i.map((function(e){return Object(j.jsx)(d,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},h=n(26),x=n.n(h),f=function(){return Object(j.jsx)("div",{className:x.a.spinner})},p=n(27),O=n.n(p),v=function(){return Object(j.jsxs)("div",{className:O.a.noquotes,children:[Object(j.jsx)("p",{children:"No quotes found!"}),Object(j.jsx)(s.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})},_=n(12),g=n(5),N=n.n(g),w=n(9),q=n(11);function C(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}var y=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(o.useReducer)(C,{status:t?"pending":null,data:null,error:null}),c=Object(q.a)(n,2),r=c[0],s=c[1],a=Object(o.useCallback)(function(){var t=Object(w.a)(N.a.mark((function t(n){var c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:c=t.sent,s({type:"SUCCESS",responseData:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),s({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(_.a)({sendRequest:a},r)},k="https://react-http-dd3a4-default-rtdb.firebaseio.com/";function S(){return F.apply(this,arguments)}function F(){return(F=Object(w.a)(N.a.mark((function e(){var t,n,c,r,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(k,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(r in c=[],n)s=Object(_.a)({id:r},n[r]),c.push(s);return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(w.a)(N.a.mark((function e(t){var n,c,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(k,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not fetch quote.");case 8:return r=Object(_.a)({id:t},c),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return A.apply(this,arguments)}function A(){return(A=Object(w.a)(N.a.mark((function e(t){var n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(k,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return D.apply(this,arguments)}function D(){return(D=Object(w.a)(N.a.mark((function e(t){var n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(k,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:c.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return M.apply(this,arguments)}function M(){return(M=Object(w.a)(N.a.mark((function e(t){var n,c,r,s,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(k,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not get comments.");case 8:for(s in r=[],c)a=Object(_.a)({id:s},c[s]),r.push(a);return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=function(){var e=y(S,!0),t=e.sendRequest,n=e.status,c=e.data,r=e.error;return Object(o.useEffect)((function(){t()}),[t]),"pending"===n?Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(f,{})}):r?Object(j.jsx)("p",{className:"centered focused",children:r}):"completed"!==n||c&&0!==c.length?Object(j.jsx)(b,{quotes:c}):Object(j.jsx)(v,{})},P=n(28),J=n.n(P),T=function(e){return Object(j.jsxs)("figure",{className:J.a.quote,children:[Object(j.jsx)("p",{children:e.text}),Object(j.jsx)("figcaption",{children:e.author})]})},G=n(29),H=n.n(G),V=n(16),X=n.n(V),z=function(e){var t=Object(o.useRef)(),n=y(I),c=n.sendRequest,r=n.status,s=n.error,a=e.onAddedComment;Object(o.useEffect)((function(){"completed"!==r||s||a()}),[r,s,a]);var i=function(n){n.preventDefault();var r=t.current.value;c({commentData:{text:r},quoteId:e.quoteId})};return Object(j.jsxs)("form",{className:X.a.form,onSubmit:i,children:["pending"===r&&Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(f,{})}),Object(j.jsxs)("div",{className:X.a.control,onSubmit:i,children:[Object(j.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(j.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(j.jsx)("div",{className:X.a.actions,children:Object(j.jsx)("button",{className:"btn",children:"Add Comment"})})]})},B=n(30),W=n.n(B),Y=function(e){return Object(j.jsx)("li",{className:W.a.item,children:Object(j.jsx)("p",{children:e.text})})},Z=n(31),K=n.n(Z),$=function(e){return Object(j.jsx)("ul",{className:K.a.comments,children:e.comments.map((function(e){return Object(j.jsx)(Y,{text:e.text},e.id)}))})},ee=function(){var e=Object(o.useState)(!1),t=Object(q.a)(e,2),n=t[0],c=t[1],r=Object(a.j)().quoteId,s=y(L),i=s.sendRequest,u=s.status,d=s.data;Object(o.useEffect)((function(){i(r)}),[r,i]);var l,m=Object(o.useCallback)((function(){i(r)}),[i,r]);return"pending"===u&&(l=Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(f,{})})),"completed"===u&&d&&d.length>0&&(l=Object(j.jsx)($,{comments:d})),"completed"!==u||d&&0!==d.length||(l=Object(j.jsx)("p",{className:"centered",children:"No comments were added yet!"})),Object(j.jsxs)("section",{className:H.a.comments,children:[Object(j.jsx)("h2",{children:"User Comments"}),!n&&Object(j.jsx)("button",{className:"btn",onClick:function(){c(!0)},children:"Add a Comment"}),n&&Object(j.jsx)(z,{quoteId:r,onAddedComment:m}),l]})},te=function(){var e=Object(a.k)(),t=Object(a.j)().quoteId,n=y(E,!0),c=n.sendRequest,r=n.status,i=n.data,u=n.error;return Object(o.useEffect)((function(){c(t)}),[c,t]),"pending"===r?Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(f,{})}):u?Object(j.jsx)("p",{className:"centered",children:u}):i.text?Object(j.jsxs)(o.Fragment,{children:[Object(j.jsx)(T,{text:i.text,author:i.author}),Object(j.jsx)(a.c,{path:e.path,exact:!0,children:Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(s.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),Object(j.jsx)(a.c,{path:"".concat(e.path,"/comments"),children:Object(j.jsx)(ee,{})})]}):Object(j.jsx)("p",{children:"No quote found!"})},ne=n(32),ce=n.n(ne),re=function(e){return Object(j.jsx)("div",{className:ce.a.card,children:e.children})},se=n(13),ae=n.n(se),oe=function(e){var t=Object(o.useState)(!1),n=Object(q.a)(t,2),c=n[0],r=n[1],s=Object(o.useRef)(),i=Object(o.useRef)();return Object(j.jsxs)(o.Fragment,{children:[Object(j.jsx)(a.a,{when:c,message:function(e){return"Are you sure you want to leave? All your entered data will be lost!"}}),Object(j.jsx)(re,{children:Object(j.jsxs)("form",{onFocus:function(){r(!0)},className:ae.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=i.current.value;e.onAddQuote({author:n,text:c})},children:[e.isLoading&&Object(j.jsx)("div",{className:ae.a.loading,children:Object(j.jsx)(f,{})}),Object(j.jsxs)("div",{className:ae.a.control,children:[Object(j.jsx)("label",{htmlFor:"author",children:"Author"}),Object(j.jsx)("input",{type:"text",id:"author",ref:s})]}),Object(j.jsxs)("div",{className:ae.a.control,children:[Object(j.jsx)("label",{htmlFor:"text",children:"Text"}),Object(j.jsx)("textarea",{id:"text",rows:"5",ref:i})]}),Object(j.jsx)("div",{className:ae.a.actions,children:Object(j.jsx)("button",{onClick:function(){r(!1)},className:"btn",children:"Add Quote"})})]})})]})},ie=function(){var e=y(R),t=e.sendRequest,n=e.status,c=Object(a.h)();Object(o.useEffect)((function(){"completed"===n&&c.push("/quotes")}),[n,c]);return Object(j.jsx)(oe,{isLoading:"pending"===n,onAddQuote:function(e){t(e)}})},ue=function(){return Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)("p",{children:"Page not found!"})})},je=n(33),de=n.n(je),le=n(14),me=n.n(le),be=function(){return Object(j.jsxs)("header",{className:me.a.header,children:[Object(j.jsx)("div",{className:me.a.logo,children:"Great Quotes"}),Object(j.jsx)("nav",{className:me.a.nav,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/quotes",activeClassName:me.a.active,children:"All Quotes"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/new-quote",activeClassName:me.a.active,children:"Add a Quote"})})]})})]})},he=function(e){return Object(j.jsxs)(o.Fragment,{children:[Object(j.jsx)(be,{}),Object(j.jsx)("main",{className:de.a.main,children:e.children})]})};var xe=function(){return Object(j.jsx)(he,{children:Object(j.jsxs)(a.e,{children:[Object(j.jsx)(a.c,{path:"/",exact:!0,children:Object(j.jsx)(a.b,{to:"/quotes"})}),Object(j.jsx)(a.c,{path:"/quotes",exact:!0,children:Object(j.jsx)(U,{})}),Object(j.jsx)(a.c,{path:"/quotes/:quoteId",children:Object(j.jsx)(te,{})}),Object(j.jsx)(a.c,{path:"/new-quote",children:Object(j.jsx)(ie,{})}),Object(j.jsx)(a.c,{path:"*",children:Object(j.jsx)(ue,{})})]})})};r.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(xe,{})}),document.getElementById("root"))}],[[46,1,2]]]);
//# sourceMappingURL=main.f39489e0.chunk.js.map