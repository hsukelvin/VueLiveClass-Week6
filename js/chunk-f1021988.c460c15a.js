(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f1021988"],{"00b4":function(e,t,a){"use strict";a("ac1f");var n=a("23e7"),c=a("da84"),o=a("c65b"),r=a("e330"),l=a("1626"),s=a("861d"),i=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),d=c.Error,u=r(/./.test);n({target:"RegExp",proto:!0,forced:!i},{test:function(e){var t=this.exec;if(!l(t))return u(this,e);var a=o(t,this,e);if(null!==a&&!s(a))throw new d("RegExp exec method returned something other than an Object or null");return!!a}})},"0b42":function(e,t,a){var n=a("da84"),c=a("e8b5"),o=a("68ee"),r=a("861d"),l=a("b622"),s=l("species"),i=n.Array;e.exports=function(e){var t;return c(e)&&(t=e.constructor,o(t)&&(t===i||c(t.prototype))?t=void 0:r(t)&&(t=t[s],null===t&&(t=void 0))),void 0===t?i:t}},"107c":function(e,t,a){var n=a("d039"),c=a("da84"),o=c.RegExp;e.exports=n((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"1d3d":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),c={class:"vld-parent"},o=Object(n["createElementVNode"])("h2",{class:"mt-5"},"購物車頁面",-1),r={class:"container mt-5"},l={class:"row"},s={class:"col-sm-6"},i={class:"text-end"},d=["disabled"],u={class:"table align-middle"},m=Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("th"),Object(n["createElementVNode"])("th",null,"品名"),Object(n["createElementVNode"])("th",{style:{width:"150px"}},"數量/單位"),Object(n["createElementVNode"])("th",null,"單價")])],-1),b=["disabled","onClick"],f={key:0,class:"fas fa-spinner fa-pulse"},p=Object(n["createTextVNode"])(" x "),O={key:0,class:"text-success"},v={class:"input-group input-group-sm"},j={class:"input-group mb-3"},g=["disabled","onUpdate:modelValue","onBlur"],h={class:"input-group-text",id:"basic-addon2"},x={class:"text-end"},V={key:0,class:"text-success"},E=Object(n["createElementVNode"])("td",{colspan:"3",class:"text-end"},"總計",-1),N={class:"text-end"},y={key:0},I=Object(n["createElementVNode"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),k={class:"text-end text-success"},C={class:"col-sm-6"};function w(e,t,a,w,S,B){var L=Object(n["resolveComponent"])("Loading"),R=Object(n["resolveComponent"])("VForm");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("div",c,[Object(n["createVNode"])(L,{active:S.isLoading,"onUpdate:active":t[0]||(t[0]=function(e){return S.isLoading=e})},null,8,["active"])]),o,Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("div",s,[Object(n["createElementVNode"])("div",i,[Object(n["createElementVNode"])("button",{class:"btn btn-outline-danger",type:"button",onClick:t[1]||(t[1]=function(){return B.deleteCartAllItem&&B.deleteCartAllItem.apply(B,arguments)}),disabled:S.btnStatus}," 清空購物車 ",8,d)]),Object(n["createElementVNode"])("table",u,[m,Object(n["createElementVNode"])("tbody",null,[S.cart.carts?(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],{key:0},Object(n["renderList"])(S.cart.carts,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:e.id},[Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:S.loadItemId===e.id,onClick:function(t){return B.deleteCartItem(e.id)}},[S.loadItemId===e.id?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",f)):Object(n["createCommentVNode"])("",!0),p],8,b)]),Object(n["createElementVNode"])("td",null,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.product.title)+" ",1),e.coupon?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",O,"已套用優惠券")):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("div",v,[Object(n["createElementVNode"])("div",j,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{min:"1",type:"number",class:"form-control",disabled:S.loadItemId===e.id,"onUpdate:modelValue":function(t){return e.qty=t},onBlur:function(t){return B.updateCartItem(e)}},null,40,g),[[n["vModelText"],e.qty,void 0,{number:!0}]]),Object(n["createElementVNode"])("span",h,Object(n["toDisplayString"])(e.product.unit),1)])])]),Object(n["createElementVNode"])("td",x,[S.cart.final_total!==S.cart.total?(Object(n["openBlock"])(),Object(n["createElementBlock"])("small",V,"折扣價：")):Object(n["createCommentVNode"])("",!0),Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(e.final_total),1)])])})),128)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("tfoot",null,[Object(n["createElementVNode"])("tr",null,[E,Object(n["createElementVNode"])("td",N,Object(n["toDisplayString"])(S.cart.total),1)]),S.cart.final_total!==S.cart.total?(Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",y,[I,Object(n["createElementVNode"])("td",k,Object(n["toDisplayString"])(S.cart.final_total),1)])):Object(n["createCommentVNode"])("",!0)])])]),Object(n["createElementVNode"])("div",C,[Object(n["createVNode"])(R)])])])],64)}a("99af"),a("b0c0");var S={class:"vld-parent"},B={class:"mb-3"},L=Object(n["createElementVNode"])("label",{for:"email",class:"form-label"},"Email",-1),R={class:"mb-3"},A=Object(n["createElementVNode"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),T={class:"mb-3"},U=Object(n["createElementVNode"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),$={class:"mb-3"},_=Object(n["createElementVNode"])("label",{for:"address",class:"form-label"},"收件人地址",-1),D={class:"mb-3"},F=Object(n["createElementVNode"])("label",{for:"message",class:"form-label"},"留言",-1),q=Object(n["createElementVNode"])("div",{class:"text-end"},[Object(n["createElementVNode"])("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function M(e,t,a,c,o,r){var l=Object(n["resolveComponent"])("Loading"),s=Object(n["resolveComponent"])("Field"),i=Object(n["resolveComponent"])("ErrorMessage"),d=Object(n["resolveComponent"])("Form");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("div",S,[Object(n["createVNode"])(l,{active:o.isLoading,"onUpdate:active":t[0]||(t[0]=function(e){return o.isLoading=e})},null,8,["active"])]),Object(n["createVNode"])(d,{onSubmit:r.createOrder},{default:Object(n["withCtx"])((function(e){var a=e.errors;return[Object(n["createElementVNode"])("div",B,[L,Object(n["createVNode"])(s,{id:"email",name:"email",type:"email",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":a["email"]}]),rules:"email|required",placeholder:"請輸入 Email",modelValue:o.user.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.user.email=e})},null,8,["class","modelValue"]),Object(n["createVNode"])(i,{name:"email",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",R,[A,Object(n["createVNode"])(s,{id:"name",name:"姓名",type:"text",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":a["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.user.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.user.name=e})},null,8,["class","modelValue"]),Object(n["createVNode"])(i,{name:"姓名",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",T,[U,Object(n["createVNode"])(s,{id:"tel",name:"電話",type:"tel",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":a["電話"]}]),placeholder:"請輸入電話",rules:r.isPhone,modelValue:o.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.user.tel=e})},null,8,["class","rules","modelValue"]),Object(n["createVNode"])(i,{name:"電話",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",$,[_,Object(n["createVNode"])(s,{id:"address",name:"地址",type:"text",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":a["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:o.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.user.address=e})},null,8,["class","modelValue"]),Object(n["createVNode"])(i,{name:"地址",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",D,[F,Object(n["withDirectives"])(Object(n["createElementVNode"])("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[5]||(t[5]=function(e){return o.message=e})}," ",512),[[n["vModelText"],o.message]])]),q]})),_:1},8,["onSubmit"])],64)}a("ac1f"),a("00b4");var z={data:function(){return{user:{},message:"",btnStatus:!0,isLoading:!1}},methods:{isPhone:function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"請輸入正確的電話號碼"},onSubmit:function(){},createOrder:function(e){var t={data:{user:this.user,message:this.message}};console.log(e),console.log(t),this.$http.post("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("skps0102","/order"),t).then((function(e){console.log(e)})).catch((function(e){console.log(e.response.data.message)}))}}},P=a("6b0d"),K=a.n(P);const J=K()(z,[["render",M]]);var Y=J,X={components:{VForm:Y},data:function(){return{cart:{},loadItemId:"",isLoading:!1,btnStatus:!1,user:{}}},methods:{getCart:function(){var e=this;this.isLoading=!0,this.axios.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("skps0102","/cart")).then((function(t){e.cart=t.data.data,0===e.cart.carts.length&&(e.btnStatus=!e.btnStatus),e.isLoading=!1})).catch((function(t){e.$swal(t.data.message)}))},deleteCartAllItem:function(){var e=this;this.isLoading=!0,this.axios.delete("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("skps0102","/carts")).then((function(t){e.getCart(),e.isLoading=!1,e.$swal(t.data.message)})).catch((function(t){e.$swal(t.data.message)}))},updateCartItem:function(e){var t=this,a=e.qty,n=e.id,c={data:{product_id:e.product_id,qty:a}};this.loadItemId=n,this.isLoading=!0,this.axios.put("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("skps0102","/cart/").concat(n),c).then((function(e){t.loadItemId="",t.isLoading=!1,t.getCart(),t.$swal(e.data.message)})).catch((function(e){t.$swal(e.data.message)}))},deleteCartItem:function(e){var t=this;this.loadItemId=e,this.isLoading=!0,this.axios.delete("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("skps0102","/cart/").concat(e)).then((function(e){t.loadItemId="",t.isLoading=!1,t.getCart(),t.$swal(e.data.message)})).catch((function(e){t.$swal(e.data.message)}))}},mounted:function(){this.getCart()}};const G=K()(X,[["render",w]]);t["default"]=G},"1dde":function(e,t,a){var n=a("d039"),c=a("b622"),o=a("2d00"),r=c("species");e.exports=function(e){return o>=51||!n((function(){var t=[],a=t.constructor={};return a[r]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,a){var n=a("0b42");e.exports=function(e,t){return new(n(e))(0===t?0:t)}},8418:function(e,t,a){"use strict";var n=a("a04b"),c=a("9bf2"),o=a("5c6c");e.exports=function(e,t,a){var r=n(t);r in e?c.f(e,r,o(0,a)):e[r]=a}},9263:function(e,t,a){"use strict";var n=a("c65b"),c=a("e330"),o=a("577e"),r=a("ad6d"),l=a("9f7f"),s=a("5692"),i=a("7c73"),d=a("69f3").get,u=a("fce3"),m=a("107c"),b=s("native-string-replace",String.prototype.replace),f=RegExp.prototype.exec,p=f,O=c("".charAt),v=c("".indexOf),j=c("".replace),g=c("".slice),h=function(){var e=/a/,t=/b*/g;return n(f,e,"a"),n(f,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),x=l.BROKEN_CARET,V=void 0!==/()??/.exec("")[1],E=h||V||x||u||m;E&&(p=function(e){var t,a,c,l,s,u,m,E=this,N=d(E),y=o(e),I=N.raw;if(I)return I.lastIndex=E.lastIndex,t=n(p,I,y),E.lastIndex=I.lastIndex,t;var k=N.groups,C=x&&E.sticky,w=n(r,E),S=E.source,B=0,L=y;if(C&&(w=j(w,"y",""),-1===v(w,"g")&&(w+="g"),L=g(y,E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==O(y,E.lastIndex-1))&&(S="(?: "+S+")",L=" "+L,B++),a=new RegExp("^(?:"+S+")",w)),V&&(a=new RegExp("^"+S+"$(?!\\s)",w)),h&&(c=E.lastIndex),l=n(f,C?a:E,L),C?l?(l.input=g(l.input,B),l[0]=g(l[0],B),l.index=E.lastIndex,E.lastIndex+=l[0].length):E.lastIndex=0:h&&l&&(E.lastIndex=E.global?l.index+l[0].length:c),V&&l&&l.length>1&&n(b,l[0],a,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(l[s]=void 0)})),l&&k)for(l.groups=u=i(null),s=0;s<k.length;s++)m=k[s],u[m[0]]=l[m[1]];return l}),e.exports=p},"99af":function(e,t,a){"use strict";var n=a("23e7"),c=a("da84"),o=a("d039"),r=a("e8b5"),l=a("861d"),s=a("7b0b"),i=a("07fa"),d=a("8418"),u=a("65f0"),m=a("1dde"),b=a("b622"),f=a("2d00"),p=b("isConcatSpreadable"),O=9007199254740991,v="Maximum allowed index exceeded",j=c.TypeError,g=f>=51||!o((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),h=m("concat"),x=function(e){if(!l(e))return!1;var t=e[p];return void 0!==t?!!t:r(e)},V=!g||!h;n({target:"Array",proto:!0,forced:V},{concat:function(e){var t,a,n,c,o,r=s(this),l=u(r,0),m=0;for(t=-1,n=arguments.length;t<n;t++)if(o=-1===t?r:arguments[t],x(o)){if(c=i(o),m+c>O)throw j(v);for(a=0;a<c;a++,m++)a in o&&d(l,m,o[a])}else{if(m>=O)throw j(v);d(l,m++,o)}return l.length=m,l}})},"9f7f":function(e,t,a){var n=a("d039"),c=a("da84"),o=c.RegExp,r=n((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),l=r||n((function(){return!o("a","y").sticky})),s=r||n((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:s,MISSED_STICKY:l,UNSUPPORTED_Y:r}},ac1f:function(e,t,a){"use strict";var n=a("23e7"),c=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},ad6d:function(e,t,a){"use strict";var n=a("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b0c0:function(e,t,a){var n=a("83ab"),c=a("5e77").EXISTS,o=a("e330"),r=a("9bf2").f,l=Function.prototype,s=o(l.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=o(i.exec),u="name";n&&!c&&r(l,u,{configurable:!0,get:function(){try{return d(i,s(this))[1]}catch(e){return""}}})},e8b5:function(e,t,a){var n=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},fce3:function(e,t,a){var n=a("d039"),c=a("da84"),o=c.RegExp;e.exports=n((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-f1021988.c460c15a.js.map