(this["webpackJsonpreact-redux-firebase-app"]=this["webpackJsonpreact-redux-firebase-app"]||[]).push([[0],{216:function(e,t,a){e.exports=a(416)},221:function(e,t,a){},416:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(85);a(221),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(5),i=a(47),s=a.n(i),o=(a(229),a(231),a(234),a(13)),m=a(24),u=a(46),d=a(6),p=a(26);var E=Object(l.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})})).catch((function(t){return e({type:"SIGNOUT_ERR",err:t})}))}))}}}))((function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(d.c,{to:"/create"},"New Project")),r.a.createElement("li",{onClick:e.signOut},r.a.createElement("a",null,"Sign out")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initial)))}));function b(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(d.c,{to:"/signup"},"Sign up")),r.a.createElement("li",null," ",r.a.createElement(d.c,{to:"/signin"},"Sign in")))}var f=Object(l.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth.uid?r.a.createElement(E,{profile:e.profile}):r.a.createElement(b,null);return r.a.createElement("nav",{className:"nav-wrapper blue darken-3"},r.a.createElement("div",{className:"container col s12"},r.a.createElement(d.b,{to:"/",className:"brand-logo left"},"Project Manager")),r.a.createElement("div",{className:"col s12"},e.auth.isLoaded&&t))})),h=a(210),v=a(211),g=a(214),N=a(212),j=a(215),y=a(44),O=a.n(y),S=a(59);function w(e){var t=e.notifications,a={hidden:{opacity:0,x:"100vw"},visible:{opacity:1,x:0,transition:{delay:.5}}},n=t?t.map((function(e){return r.a.createElement(S.a.li,{key:e.id,variants:a,initial:"hidden",animate:"visible"},r.a.createElement("span",{className:"pink-text"},e.user),"\xa0\xa0",r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text"},O()(e.time.toDate()).fromNow()),r.a.createElement("hr",null))})):r.a.createElement("div",{style:{marginTop:100},className:"container blue-text"},r.a.createElement("div",{className:"preloader-wrapper small active"},r.a.createElement("div",{className:"spinner-layer spinner-blue-only"},r.a.createElement("div",{className:"circle-clipper left"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"gap-patch"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"circle-clipper right"},r.a.createElement("div",{className:"circle"})))));return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notification"),r.a.createElement("ul",{className:"notifications"},n))))}function x(e){var t=e.project;return r.a.createElement("div",{className:" card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement(d.b,{to:"/project/"+t.id},r.a.createElement("span",{className:"card-title"},t.title)),r.a.createElement("p",null,"posted by the ",t.autherName),r.a.createElement("p",{className:"grey-text"},O()(t.createat.toDate()).calendar())),r.a.createElement("hr",null))}function C(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return r.a.createElement(x,{project:e,key:e.id})})))}var F=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(C,{projects:this.props.projects})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(w,{notifications:this.props.notifications})))):r.a.createElement(p.a,{to:"/signin"})}}]),t}(n.Component),I=Object(o.d)(Object(l.b)((function(e){return{projects:e.firestore.ordered.project,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(m.firestoreConnect)([{collection:"project",orderBy:["createat","desc"]},{collection:"notifications",limit:5,orderBy:["time","desc"]}]))(F);var R=Object(o.d)(Object(l.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.project;return n?{project:n[a],auth:e.firebase.auth}:{project:null,auth:e.firebase.auth}})),Object(m.firestoreConnect)([{collection:"project"}]))((function(e){var t=e.project;return t&&e.auth.uid?r.a.createElement(S.a.div,{className:"container center",variants:{hidden:{opacity:0,x:"100vw"},visible:{opacity:1,x:0,transition:{delay:.5}}},initial:"hidden",animate:"visible"},r.a.createElement("div",{className:" card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement(S.a.div,{variants:{hidden:{opacity:0,x:"-100vw"},visible:{opacity:1,x:0,transition:{delay:.5}}},onClick:e.history.goBack,initial:"hidden",animate:"visible",style:{marginTop:-6},className:"left btn-floating btn-large waves-effect waves-light blue"},r.a.createElement("i",{className:"material-icons"},"reply")),r.a.createElement("span",{className:"card-title"},r.a.createElement("h3",null,t.title)),r.a.createElement("p",{className:""},t.content),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"card-action grey lighten-4"},r.a.createElement("p",null,"posted by the ",t.autherName),r.a.createElement("p",null,O()(t.createat.toDate()).calendar()))))):r.a.createElement("div",{className:"container center progress"},r.a.createElement("div",{className:"indeterminate blue"}))})),U=a(25),k=a(15),P=a(45);var G=Object(l.b)((function(e){return{state:e}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERR",err:t})}))}));var a}}}))((function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(P.a)(t,2),c=a[0],l=a[1],i=function(e){l(Object(k.a)({},c,Object(U.a)({},e.target.id,e.target.value)))};return e.state.firebase.auth.uid?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h5",{className:"grey-text text-darken-3 text-bold"},"Sign In"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.signIn(c)},className:"white"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:"",htmlFor:"email"},"Email"),r.a.createElement("input",{id:"email",type:"email",onChange:i})),r.a.createElement("br",null),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{id:"password",type:"password",onChange:i})),r.a.createElement("br",null),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0",type:"submit"},"Sign In")),e.state.auth.authStatus&&r.a.createElement("div",{className:"red-text center"},"Login Failed")))}));var _=Object(l.b)((function(e){return{auth:e.firebase.auth,signUpErr:e.auth.authStatus}}),(function(e){return{signUp:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=n.getFirestore,l=r(),i=c();l.auth().createUserWithEmailAndPassword(a.email,a.password).then((function(e){return i.collection("users").doc(e.user.uid).set({firstName:a.firstname,lastName:a.lastname,initial:a.firstname[0]+a.lastname[0]})})).then((function(){return e({type:"SIGNUP_SUCCESS"})})).catch((function(t){return e({type:"SIGNUP_ERR",err:t})}))}));var a}}}))((function(e){var t=Object(n.useState)({firstname:"",lastname:"",email:"",password:""}),a=Object(P.a)(t,2),c=a[0],l=a[1],i=function(e){l(Object(k.a)({},c,Object(U.a)({},e.target.id,e.target.value)))};return e.auth.uid?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",{className:"grey-text text-darken-3 text-bold"},"Sign Up"),r.a.createElement("br",null),e.signUpErr?r.a.createElement("div",{className:"red-text center"},e.signUpErr.message):null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.signUp(c)}},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:"",htmlFor:"firstname"},"First Name"),r.a.createElement("input",{id:"firstname",type:"text",onChange:i})),r.a.createElement("br",null),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:"",htmlFor:"lastname"},"Last Name"),r.a.createElement("input",{id:"lastname",type:"text",onChange:i})),r.a.createElement("br",null),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:"",htmlFor:"email"},"Email"),r.a.createElement("input",{id:"email",type:"email",onChange:i})),r.a.createElement("br",null),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{id:"password",type:"password",onChange:i})),r.a.createElement("br",null),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0",type:"submit"},"Sign Up"))))}));var T=Object(l.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{create:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=n.getFirestore,c=a().firebase.profile.firstName,l=a().firebase.auth.uid;r().collection("project").add({autherName:c,autherId:l,title:e.title,content:e.content,createat:new Date}).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){console.log("error")}))}}(t))}}}))((function(e){var t=Object(n.useState)({title:"",content:""}),a=Object(P.a)(t,2),c=a[0],l=a[1],i=function(e){l(Object(k.a)({},c,Object(U.a)({},e.target.id,e.target.value)))};return e.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h5",{className:"grey-text text-darken-3 text-bold"},"Create Project"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.create(c),e.history.push("/")},className:"white"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:"",htmlFor:"title"},"Title"),r.a.createElement("input",{id:"title",type:"text",onChange:i})),r.a.createElement("br",null),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{className:"materialize-textarea",id:"content",onChange:i})),r.a.createElement("br",null),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0",type:"submit"},"Create")))):r.a.createElement(p.a,{to:"/signin"})}));var L=Object(l.b)((function(e){return{isLoaded:e.firebase.auth.isLoaded}}))((function(e){return e.isLoaded?r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:I}),r.a.createElement(p.b,{path:"/project/:id",component:R}),r.a.createElement(p.b,{path:"/signin",component:G}),r.a.createElement(p.b,{path:"/signup",component:_}),r.a.createElement(p.b,{path:"/create",component:T})))):r.a.createElement("div",{style:{marginTop:100},className:"container blue-text center"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"indeterminate blue"})))})),z={authStatus:null},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return Object(k.a)({},e,{authStatus:null});case"LOGIN_ERR":return Object(k.a)({},e,{authStatus:"Login Failed"});case"SIGNOUT_SUCCESS":return console.log("signOut"),e;case"SIGNOUT_ERR":return console.log("signOut error",t.err),e;case"SIGNUP_SUCCESS":return Object(k.a)({},e,{authStatus:null});case"SIGNUP_ERR":return Object(k.a)({},e,{authStatus:t.err});default:return e}},D={projects:[{id:1,title:"i am project",content:"blan blan blan"},{id:2,title:"i am project",content:"blan blan blan"},{id:3,title:"i am project",content:"blan blan blan"}]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":case"CREATE_PROJECT_ERR":default:return e}},J=Object(o.c)({auth:A,project:B,firebase:m.firebaseReducer,firestore:u.firestoreReducer}),W=a(213),V={apiKey:"AIzaSyC3mVmh5beBRxC1NwZTWSVjN9EmGCYtg6Y",authDomain:"project-manager-in-reactjs.firebaseapp.com",databaseURL:"https://project-manager-in-reactjs.firebaseio.com",projectId:"project-manager-in-reactjs",storageBucket:"project-manager-in-reactjs.appspot.com",messagingSenderId:"427352758321",appId:"1:427352758321:web:218ce9483a84e5292e5d10",measurementId:"G-PX90GHV7G2"};s.a.initializeApp(V),s.a.firestore(),s.a.functions();var Y=Object(o.e)(J,{},Object(o.d)(Object(o.a)(W.a.withExtraArgument({getFirebase:m.getFirebase,getFirestore:u.getFirestore})),Object(u.reduxFirestore)(s.a,V,{useFirestoreForProfile:!0,userProfile:"users"}))),H={firebase:s.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:Y.dispatch,createFirestoreInstance:u.createFirestoreInstance};Object(c.render)(r.a.createElement(l.a,{store:Y},r.a.createElement(m.ReactReduxFirebaseProvider,H,r.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[216,1,2]]]);
//# sourceMappingURL=main.79ff40a1.chunk.js.map