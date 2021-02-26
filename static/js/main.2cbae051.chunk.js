(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(7),c=a.n(i),o=(a(15),a(10)),l=a(3),s=a(2),u=r.a.createContext(),d=a.p+"static/media/header-vector.70737bb4.svg",f=a(0);var p=function(e){return Object(f.jsx)("header",{className:"header",children:Object(f.jsx)("img",{src:d,alt:"Around The U.S.",className:"header__vector"})})};var m=function(e){var t=e.card,a=e.onCardSelect,n=e.onCardLike,i=e.onCardDelete,c=r.a.useContext(u),o=t.likes.length,l=t.owner._id===c._id,s=t.likes.some((function(e){return e._id===c._id})),d="location__delete-btn"+(l?" location__delete-btn_active":""),p="location__like-btn"+(s?" location__like-btn_active":"");return Object(f.jsxs)("li",{className:"location",children:[Object(f.jsx)("button",{type:"button","aria-label":"Delete",className:d,onClick:function(){i(t._id)}}),Object(f.jsx)("img",{src:t.link,alt:t.name,className:"location__image",onClick:function(){a(t._id,t.name,t.link)}}),Object(f.jsxs)("div",{className:"location__content-wrapper",children:[Object(f.jsx)("h2",{className:"location__name",children:t.name}),Object(f.jsxs)("div",{className:"location__likes-wrapper",children:[Object(f.jsx)("button",{type:"button","aria-label":"Like",className:p,onClick:function(){n(t._id,s)}}),Object(f.jsx)("p",{className:"location__num-likes",children:o})]})]})]})};var j=function(e){var t=e.onEditAvatar,a=e.onAddPlace,n=e.onEditProfile,i=e.onCardSelect,c=e.onCardLike,o=e.onCardDelete,l=e.cards,s=r.a.useContext(u);return Object(f.jsxs)("main",{className:"main-content",children:[Object(f.jsxs)("section",{className:"profile",children:[Object(f.jsxs)("div",{className:"profile__avatar-wrapper",children:[Object(f.jsx)("img",{src:s.avatar,alt:"profile avatar",className:"profile__avatar"}),Object(f.jsx)("div",{className:"profile__avatar-overlay",onClick:t})]}),Object(f.jsxs)("div",{className:"profile__info",children:[Object(f.jsx)("h1",{className:"profile__name",children:s.name}),Object(f.jsx)("button",{type:"button","aria-label":"Edit",className:"profile__edit-btn",onClick:n}),Object(f.jsx)("p",{className:"profile__self-description",children:s.about})]}),Object(f.jsx)("button",{type:"button","aria-label":"Add location",className:"profile__add-btn",onClick:a})]}),Object(f.jsx)("section",{className:"locations",children:Object(f.jsx)("ul",{className:"locations__collection",children:l.map((function(e){var t=e.name,a=e.link,n=e.likes,r=e._id,l=e.owner;return Object(f.jsx)(m,{card:{name:t,link:a,likes:n,_id:r,owner:l},onCardSelect:i,onCardLike:c,onCardDelete:o},r)}))})})]})};var b=function(e){return Object(f.jsx)("footer",{className:"footer",children:Object(f.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Around The U.S."})})};var _=function(e){var t=e.name,a=e.children,n=e.isOpen,i=e.onClose,c=e.additionalCssClassesStr,o=void 0===c?"":c,l=r.a.useRef();return Object(f.jsx)("div",{className:"overlay ".concat(o," ").concat(n?"overlay_opened":""),ref:l,onClick:function(e){e.target===l.current&&i()},children:Object(f.jsxs)("div",{className:"overlay__wrapper",children:[Object(f.jsx)("button",{type:"button","aria-label":"Close",className:"overlay__close-btn overlay__close-btn_type_".concat(t),onClick:i}),a]})})};var v=function(e){var t=e.card,a=e.onClose;return Object(f.jsx)(_,{name:"image-popup",isOpen:null!=t._id,onClose:a,additionalCssClassesStr:"overlay_dark",children:Object(f.jsxs)("figure",{className:"image-popup",children:[Object(f.jsx)("img",{src:t.link,alt:t.name,className:"image-popup__image"}),Object(f.jsx)("figcaption",{className:"image-popup__title",children:t.name})]})})};function h(e){console.log("Error: ".concat(e))}function O(e,t){var a=Object(l.a)({},e);return t.validity.valid?delete a[t.name]:a[t.name]=t.validationMessage,a}function x(e,t,a){var n="project-form__input-error";return n+" ".concat(n,"_field_").concat(t)+(null!=e[t]&&a?" ".concat(n,"_active"):"")}var g=function(e){var t=e.name,a=e.title,n=e.children,r=e.isOpen,i=e.onClose,c=e.onSubmit,o=e.isSubmitBtnDisabled,l=e.submitBtnText,s="project-form__submit-btn project-form__submit-btn_type_".concat(t)+(o?" project-form__submit-btn_disabled":"");return Object(f.jsx)(_,{name:t,isOpen:r,onClose:i,children:Object(f.jsxs)("form",{name:t,className:"project-form project-form_type_".concat(t),onSubmit:c,noValidate:!0,children:[Object(f.jsx)("h3",{className:"project-form__title project-form__title_type_".concat(t),children:a}),n,Object(f.jsx)("button",{type:"submit",className:s,disabled:o,children:l||"Submit"})]})})};var C=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,i=e.isUpdatingProfile,c=r.a.useState(""),o=Object(s.a)(c,2),l=o[0],d=o[1],p=r.a.useState(""),m=Object(s.a)(p,2),j=m[0],b=m[1],_=r.a.useState({}),v=Object(s.a)(_,2),h=v[0],C=v[1],y=r.a.useState(!1),N=Object(s.a)(y,2),k=N[0],S=N[1],P=r.a.useContext(u),D="profile-name",E="profile-description",B=x(h,D,t),w=x(h,E,t);function A(){var e=l.length<2||l.length>40||j.length<2||j.length>200;S(i||e||!t)}function T(e){var t=e.target;switch(t.name){case D:d(t.value);break;case E:b(t.value)}C(O(h,t))}function U(e){var t=e.target;C(O(h,t)),A()}return r.a.useEffect((function(){d(P.name),b(P.about)}),[P]),r.a.useEffect((function(){A()}),[l,j,i,t]),Object(f.jsxs)(g,{name:"profile-edit",title:"Edit profile",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n(l,j)},isSubmitBtnDisabled:k,submitBtnText:i?"Saving":"Save",children:[Object(f.jsxs)("div",{className:"project-form__field-wrapper project-form__field-wrapper_form_profile-edit",children:[Object(f.jsx)("input",{type:"text","aria-label":"Name",name:D,className:"project-form__input project-form__input_type_profile-edit-field",placeholder:"Name",minLength:2,maxLength:40,value:l,onChange:T,onBlur:U,required:!0}),Object(f.jsx)("p",{className:B,children:h[D]})]}),Object(f.jsxs)("div",{className:"project-form__field-wrapper project-form__field-wrapper_form_profile-edit",children:[Object(f.jsx)("input",{type:"text","aria-label":"About me",name:E,className:"project-form__input project-form__input_type_profile-edit-field",placeholder:"About me",minLength:2,maxLength:200,value:j,onChange:T,onBlur:U,required:!0}),Object(f.jsx)("p",{className:w,children:h[E]})]})]})};var y=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,i=e.isUpdatingAvatar,c=r.a.useState({}),o=Object(s.a)(c,2),l=o[0],u=o[1],d=r.a.useState(!0),p=Object(s.a)(d,2),m=p[0],j=p[1],b=r.a.createRef(),_="profile-avatar",v=x(l,_,t);function h(){var e=!b.current.validity.valid;j(i||e||!t)}function C(e){var t=e.target;u(O(l,t)),h()}return r.a.useEffect((function(){h()}),[i,t]),Object(f.jsx)(g,{name:"profile-img-change",title:"Change profile picture",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault();var t=b.current;n(t.value),t.value=""},isSubmitBtnDisabled:m,submitBtnText:i?"Saving":"Save",children:Object(f.jsxs)("div",{className:"project-form__field-wrapper project-form__field-wrapper_form_profile-img-change",children:[Object(f.jsx)("input",{type:"url","aria-label":"Avatar link",name:_,className:"project-form__input project-form__input_type_profile-img-change-field",placeholder:"Avatar link",ref:b,onChange:C,onBlur:C,required:!0}),Object(f.jsx)("p",{className:v,children:l["profile-avatar"]})]})})};var N=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,i=e.isCreatingPlace,c=r.a.useState({}),o=Object(s.a)(c,2),l=o[0],u=o[1],d=r.a.useState(!0),p=Object(s.a)(d,2),m=p[0],j=p[1],b=r.a.useRef({value:""}),_=r.a.useRef({value:""}),v="location-title",h="location-link",C=x(l,v,t),y=x(l,h,t);function N(){var e=!b.current.validity.valid||!_.current.validity.valid;j(i||e||!t)}function k(e){var t=e.target;u(O(l,t)),N()}return r.a.useEffect((function(){N()}),[i,t]),Object(f.jsxs)(g,{name:"location-create",title:"New place",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n(b.current.value,_.current.value),b.current.value="",_.current.value=""},isSubmitBtnDisabled:m,submitBtnText:i?"Saving":"Save",children:[Object(f.jsxs)("div",{className:"project-form__field-wrapper project-form__field-wrapper_form_location-create",children:[Object(f.jsx)("input",{type:"text","aria-label":"Title",name:v,className:"project-form__input project-form__input_type_location-create-field",placeholder:"Title",minLength:"2",maxLength:"30",ref:b,onChange:k,onBlur:k,required:!0}),Object(f.jsx)("p",{className:C,children:l[v]})]}),Object(f.jsxs)("div",{className:"project-form__field-wrapper project-form__field-wrapper_form_location-create",children:[Object(f.jsx)("input",{type:"url","aria-label":"Image link",name:h,className:"project-form__input project-form__input_type_location-create-field",placeholder:"Image link",ref:_,onChange:k,onBlur:k,required:!0}),Object(f.jsx)("p",{className:y,children:l[h]})]})]})};var k=function(e){var t=e.isOpen,a=e.onClose,n=e.onConfirmation,r=e.isDeletingAfterConfirming;return Object(f.jsx)(g,{name:"confirmation-prompt",title:"Are you sure?",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n()},isSubmitBtnDisabled:r||!t,submitBtnText:"Yes"})},S=a(8),P=a(9),D=new(function(){function e(t){var a=t.headers;Object(S.a)(this,e),this._baseUrl="https://around.nomoreparties.co/v1/group-8",this._headers=a}return Object(P.a)(e,[{key:"getInitialCards",value:function(){return this._fetchData({relativePathFromBase:"cards"})}},{key:"getUserProfile",value:function(){return this._fetchData({relativePathFromBase:"users/me"})}},{key:"createCard",value:function(e,t){return this._fetchData({relativePathFromBase:"cards",method:"POST",additionalHeaderProps:{"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})})}},{key:"updateUserProfile",value:function(e,t){return this._fetchData({relativePathFromBase:"users/me",method:"PATCH",additionalHeaderProps:{"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})})}},{key:"deleteCard",value:function(e){return this._fetchData({relativePathFromBase:"cards/".concat(e),method:"DELETE"})}},{key:"updateUserAvatar",value:function(e){return this._fetchData({relativePathFromBase:"users/me/avatar",method:"PATCH",additionalHeaderProps:{"Content-Type":"application/json"},body:JSON.stringify({avatar:e})})}},{key:"updateCardLikes",value:function(e,t){return this._fetchData({relativePathFromBase:"cards/likes/".concat(e),method:t?"PUT":"DELETE"})}},{key:"_fetchData",value:function(e){var t=e.relativePathFromBase,a=e.method,n=void 0===a?"GET":a,r=e.additionalHeaderProps,i=void 0===r?{}:r,c=e.body,o=void 0===c?null:c,s={method:n,headers:Object(l.a)(Object(l.a)({},this._headers),i)};null!==o&&(s.body=o);var u="".concat(this._baseUrl,"/").concat(t);return fetch(u,s).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}}]),e}())({headers:{authorization:"f9c51bc0-ecec-42b1-bdb4-bcfabdba3e4f"}}),E=a.p+"static/media/profile-avatar.5a8c9959.jpg";var B=function(){var e=r.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],i=r.a.useState(!1),c=Object(s.a)(i,2),d=c[0],m=c[1],_=r.a.useState(!1),O=Object(s.a)(_,2),x=O[0],g=O[1],S=r.a.useState({_id:null,link:"#",name:""}),P=Object(s.a)(S,2),B=P[0],w=P[1],A=r.a.useState({name:"Jacques Cousteau",about:"Explorer",avatar:E,_id:null}),T=Object(s.a)(A,2),U=T[0],L=T[1],F=r.a.useState([]),q=Object(s.a)(F,2),H=q[0],I=q[1],J=r.a.useState(null),R=Object(s.a)(J,2),M=R[0],z=R[1],G=r.a.useState(!1),V=Object(s.a)(G,2),Y=V[0],K=V[1],Q=r.a.useState(!1),W=Object(s.a)(Q,2),X=W[0],Z=W[1],$=r.a.useState(!1),ee=Object(s.a)($,2),te=ee[0],ae=ee[1],ne=r.a.useState(!1),re=Object(s.a)(ne,2),ie=re[0],ce=re[1],oe=x||a||d||M||B._id;function le(){g(!1),n(!1),m(!1),z(null),w(Object(l.a)(Object(l.a)({},B),{},{_id:null}))}function se(e){"Escape"===e.key&&le()}return r.a.useEffect((function(){oe?document.addEventListener("keydown",se):document.removeEventListener("keydown",se)}),[oe]),r.a.useEffect((function(){D.getUserProfile().then((function(e){var t=e._id,a=e.name,n=e.about,r=e.avatar;return L({_id:t,name:a,about:n,avatar:r})})).catch(h)}),[]),r.a.useEffect((function(){D.getInitialCards().then(I).catch(h)}),[]),Object(f.jsx)(u.Provider,{value:U,children:Object(f.jsxs)("div",{className:"page",children:[Object(f.jsx)(p,{}),Object(f.jsx)(j,{onEditAvatar:function(){g(!0)},onEditProfile:function(){n(!0)},onAddPlace:function(){m(!0)},onCardDelete:function(e){z(e)},onCardSelect:function(e,t,a){w({_id:e,name:t,link:a})},onCardLike:function(e,t){D.updateCardLikes(e,!t).then((function(t){var a=H.map((function(a){return a._id===e?t:a}));I(a)})).catch(h)},cards:H}),Object(f.jsx)(b,{}),Object(f.jsx)(C,{isOpen:a,onClose:le,onUpdateUser:function(e,t){Z(!0),D.updateUserProfile(e,t).then((function(e){return L(Object(l.a)(Object(l.a)({},U),{},{name:e.name,about:e.about}))})).catch(h).finally((function(){le(),Z(!1)}))},isUpdatingProfile:X}),Object(f.jsx)(N,{isOpen:d,onClose:le,onAddPlace:function(e,t){ae(!0),D.createCard(e,t).then((function(e){return I([e].concat(Object(o.a)(H)))})).catch(h).finally((function(){le(),ae(!1)}))},isCreatingPlace:te}),Object(f.jsx)(k,{isOpen:null!==M,onClose:le,onConfirmation:function(){ce(!0),D.deleteCard(M).then((function(e){console.log("returned:",e);var t=H.filter((function(e){return e._id!==M}));I(t)})).catch(h).finally((function(){le(),ce(!1)}))},isDeletingAfterConfirming:ie}),Object(f.jsx)(y,{isOpen:x,onClose:le,onUpdateAvatar:function(e){K(!0),D.updateUserAvatar(e).then((function(e){return L(Object(l.a)(Object(l.a)({},U),{},{avatar:e.avatar}))})).catch(h).finally((function(){le(),K(!1)}))},isUpdatingAvatar:Y}),Object(f.jsx)(v,{card:B,onClose:le})]})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(B,{})}),document.getElementById("root")),w()}},[[17,1,2]]]);
//# sourceMappingURL=main.2cbae051.chunk.js.map