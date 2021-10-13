(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{232:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(49),o=n.n(s),i=(n(232),n(20)),c=n(21),l=n(46),d=n(24),h=n(23),u=n(80),j=n(22),b=n(3),p=n(393),O=n(431),g=n(432),x=n(419),m=n(410),f=n(421),v=n(427),C=n(409),w=n(407),y=n(208),S=n.n(y),E=n(62),k=n(192),I=n(70),M=n(60),A="error",L="warning",D={open:!1,type:"success",message:""},R=Object(M.b)({name:"alert",initialState:D,reducers:{openAlert:function(e,t){e.open=!0,e.type=t.payload.type,e.message=t.payload.message},closeAlert:function(e){e.open=!1}}}),T=R.actions,W=T.openAlert,P=T.closeAlert,B=R.reducer,N=n(1),F=["component","auth"],H=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).showMessage=r.showMessage.bind(Object(l.a)(r)),r}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.auth.isLoggedin||this.showMessage()}},{key:"showMessage",value:function(){var e={type:A,message:"\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4."};this.props.openAlert(e)}},{key:"render",value:function(){var e=this.props,t=e.component,n=e.auth,r=Object(k.a)(e,F);return Object(N.jsx)(j.b,Object(E.a)(Object(E.a)({},r),{},{render:function(e){return n.isLoggedin?Object(N.jsx)(t,Object(E.a)({},e)):Object(N.jsx)(j.a,{to:{pathname:"/",state:{from:e.location}}})}}))}}]),n}(a.a.Component),U={openAlert:W},z=Object(j.g)(Object(I.b)((function(e){return{auth:e.auth}}),U)(H)),J=n(4),G=n(198),V=n.n(G),q=n(31),K=n(394),Q=Object(b.a)("div")((function(e){var t=e.theme;return Object(J.a)({position:"relative",borderRadius:10,backgroundColor:Object(p.a)(K.a[100],.3),"&:hover":{backgroundColor:Object(p.a)(K.a[100],.5)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),X=Object(b.a)("div")((function(e){var t=e.theme;return{padding:t.spacing(0,1),color:t.palette.primary.main,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),Y=Object(b.a)(q.c)((function(e){var t=e.theme;return{variant:"filled","& .MuiInputBase-input":Object(J.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),Z=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(N.jsxs)(Q,{children:[Object(N.jsx)(X,{children:Object(N.jsx)(V.a,{})}),Object(N.jsx)(Y,{placeholder:"\uac80\uc0c9...",inputProps:{"aria-label":"search"}})]})}}]),n}(a.a.Component),$=n(116),_=n.n($),ee=n(415),te=n(417),ne=n(420),re=n(404),ae=n(422),se=n(423),oe=n(412),ie=n(425),ce=n(424),le=n(401),de=n(426),he=n(406),ue=n(201),je=n.n(ue),be=n(200),pe=n.n(be),Oe=n(199),ge=n.n(Oe),xe=Object(M.b)({name:"auth",initialState:{isLoggedin:!1,token:""},reducers:{authenticationSuccess:function(e,t){e.isLoggedin=!0,e.token=t.payload,_.a.defaults.headers.common.Authorization="Bearer "+e.token,sessionStorage.setItem("token",e.token)}}}),me=xe.actions.authenticationSuccess,fe=xe.reducer,ve=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleOpenSnackbar=function(e){r.setState({snackbar:{open:!0,message:e}})},r.handleCloseSnackbar=function(){r.setState({snackbar:{open:!1,message:""}})},r.handleChange=function(e){r.setState(Object(J.a)({},e.target.name,e.target.value)),"studentId"===e.target.name&&""!==e.target.value&&r.setState({studentIdError:!1,studentIdErrorMessage:""}),"password"===e.target.name&&""!==e.target.value&&r.setState({passwordError:!1,passwordErrorMessage:""})},r.handleClose=function(){r.setState({studentId:"",password:"",showPassword:!1,studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:"",snackbar:{open:!1,message:""},login:{error:!1,message:""}}),r.props.onClose()},r.handleClickShowPassword=function(){r.setState({showPassword:!r.state.showPassword})},r.validate=function(){var e={studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:""};return""===r.state.studentId?(e.studentIdError=!0,e.studentIdErrorMessage="\ud559\ubc88\uc744 \uc785\ub825\ud558\uc138\uc694."):(e.studentIdError=!1,e.studentIdErrorMessage=""),""===r.state.password?(e.passwordError=!0,e.passwordErrorMessage="\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694."):(e.passwordError=!1,e.passwordErrorMessage=""),r.setState({studentIdError:e.studentIdError,studentIdErrorMessage:e.studentIdErrorMessage,passwordError:e.passwordError,passwordErrorMessage:e.passwordErrorMessage}),!e.studentIdError&&!e.passwordError},r.handleSubmit=function(e){e.preventDefault();var t={username:r.state.studentId,password:r.state.password};r.validate()&&_.a.post("/api/v1/auth/authenticate",t).then((function(e){r.props.authenticationSuccess(e.data.token),r.handleClose()})).catch((function(e){if(e.response){var t=e.response.data;if(r.setState({login:{error:!t.result,message:t.message}}),t.result){var n={type:L,message:t.message};r.props.openAlert(n)}}}))},r.state={studentId:"",password:"",showPassword:!1,studentIdError:!1,studentIdErrorMessage:"",passwordError:!1,passwordErrorMessage:"",snackbar:{open:!1,message:""},login:{error:!1,message:""}},r}return Object(c.a)(n,[{key:"render",value:function(){return Object(N.jsxs)(ee.a,{open:this.props.open,onClose:this.handleClose,children:[Object(N.jsxs)(te.a,{children:["\ub85c\uadf8\uc778",this.props.onClose?Object(N.jsx)(x.a,{"arial-label":"close",onClick:this.handleClose,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(N.jsx)(ge.a,{})}):null]}),Object(N.jsx)(ne.a,{children:Object(N.jsxs)(f.a,{component:"form",noValidate:!0,sx:{width:"100%"},onSubmit:this.handleSubmit,children:[Object(N.jsx)(re.a,{margin:"normal",error:this.state.studentIdError,helperText:this.state.studentIdErrorMessage,id:"student-id",name:"studentId",label:"\ud559\ubc88",value:this.state.studentId,onChange:this.handleChange,type:"text",fullWidth:!0}),Object(N.jsxs)(ae.a,{margin:"normal",error:this.state.passwordError,fullWidth:!0,variant:"outlined",children:[Object(N.jsx)(se.a,{htmlFor:"outlined-adornment-password",children:"\ube44\ubc00\ubc88\ud638"}),Object(N.jsx)(oe.a,{margin:"dense",id:"password",name:"password",label:"\ube44\ubc00\ubc88\ud638",value:this.state.password,onChange:this.handleChange,type:this.state.showPassword?"text":"password",fullWidth:!0,endAdornment:Object(N.jsx)(ie.a,{position:"end",children:Object(N.jsx)(x.a,{"aria-label":"toggle password visibility",onClick:this.handleClickShowPassword,edge:"end",children:this.state.showPassword?Object(N.jsx)(pe.a,{}):Object(N.jsx)(je.a,{})})})}),Object(N.jsx)(ce.a,{error:this.state.passwordError,children:this.state.passwordErrorMessage})]}),this.state.login.error?Object(N.jsx)(ae.a,{margin:"dense",error:!0,fullWidth:!0,children:Object(N.jsx)(le.a,{error:!0,children:this.state.login.message})}):null,Object(N.jsx)(de.a,{control:Object(N.jsx)(he.a,{}),label:"\uc790\ub3d9 \ub85c\uadf8\uc778"}),Object(N.jsx)(v.a,{fullWidth:!0,variant:"contained",size:"large",type:"submit",sx:{mt:1,mb:2},children:"\ub85c\uadf8\uc778"})]})}),Object(N.jsx)(C.a,{open:this.state.snackbar.open,onClose:this.handleCloseSnackbar,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(N.jsx)(w.a,{onClose:this.handleCloseSnackbar,severity:"warning",sx:{width:"100%"},children:this.state.snackbar.message})})]})}}]),n}(r.Component),Ce={authenticationSuccess:me,openAlert:W},we=Object(I.b)((function(e){return{auth:e.auth}}),Ce)(ve),ye=n(413),Se=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"stringToColor",value:function(e){for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);for(var r="#",a=0;a<3;a++){r+="00".concat((t>>8*a&255).toString(16)).substr(-2)}return r}},{key:"stringAvatar",value:function(e){return{sx:{bgcolor:this.stringToColor(e)},children:e.substring(1,e.length)}}},{key:"render",value:function(){var e=this.props.user;return Object(N.jsx)(ye.a,Object(E.a)({},this.stringAvatar(e.name)))}}]),n}(a.a.Component),Ee=n(428),ke=n(414),Ie=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(N.jsx)(Ee.a,{maxWidth:!1,children:Object(N.jsx)(ke.a,{container:!0,alignContent:"center",style:{minHeight:"100vh",maxHeight:"100vh"},children:Object(N.jsx)(f.a,{textAlign:"center",mx:"auto",children:"Hello World"})})})}}]),n}(r.Component),Me=Ie,Ae=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(N.jsx)(Ee.a,{maxWidth:!1,children:Object(N.jsx)(ke.a,{container:!0,alignContent:"center",style:{minHeight:"100vh",maxHeight:"100vh"},children:Object(N.jsx)(f.a,{textAlign:"center",mx:"auto",children:"\ud765\ubcf4 \ud398\uc774\uc9c0"})})})}}]),n}(a.a.Component),Le=Ae,De=n(429),Re=n(202),Te=n.n(Re),We=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(N.jsxs)(Ee.a,{maxWidth:!1,children:[Object(N.jsx)(u.b,{to:"/write",children:Object(N.jsx)(De.a,{color:"primary","aria-label":"add",sx:{position:"absolute",bottom:16,right:16},href:"/write",children:Object(N.jsx)(Te.a,{})})}),"Hello Board!"]})}}]),n}(r.Component),Pe=n(418),Be=n(430),Ne=n(58),Fe=n(416),He=n(403),Ue=n(203),ze=n.n(Ue),Je=n(204),Ge=n.n(Je),Ve=n(205),qe=n.n(Ve),Ke=n(206),Qe=n.n(Ke),Xe=n(207),Ye=n.n(Xe),Ze=Object(b.a)("div")((function(e){e.theme;return{}})),$e=Object(b.a)(Fe.a)((function(e){e.theme;return{marginBottom:10}})),_e=Object(b.a)("div")((function(e){return{position:"relative",padding:"14px",border:"1px solid #ccc",borderRadius:4,cursor:"text",height:512,"&:hover":{borderColor:e.theme.palette.text.primary},overflow:"auto"}})),et=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onClickUndo=function(){r.onChange(Ne.EditorState.undo(r.props.editorState))},r.onClickRedo=function(){r.onChange(Ne.EditorState.redo(r.props.editorState))},r.onToggleInlineStyle=function(e){return function(t){t.preventDefault(),r.onChange(Ne.RichUtils.toggleInlineStyle(r.props.editorState,e))}},r.hasInlineStyle=function(e){return r.props.editorState.getCurrentInlineStyle().has(e)},r.setEditor=function(e){r.editor=e},r.onFocusEditor=function(){r.editor&&r.editor.focus()},r.onChange=r.props.onChange.bind(Object(l.a)(r)),r}return Object(c.a)(n,[{key:"render",value:function(){return Object(N.jsxs)(Ze,{className:"RichEditor-root",children:[Object(N.jsx)($e,{className:"RichEditor-controls",elevation:2,children:Object(N.jsxs)(ke.a,{container:!0,children:[Object(N.jsx)(He.a,{title:"\uc2e4\ud589 \ucde8\uc18c",children:Object(N.jsx)(x.a,{onClick:this.onClickUndo.bind(this),children:Object(N.jsx)(ze.a,{})})}),Object(N.jsx)(He.a,{title:"\ub2e4\uc2dc \uc2e4\ud589",children:Object(N.jsx)(x.a,{onClick:this.onClickRedo.bind(this),children:Object(N.jsx)(Ge.a,{})})}),Object(N.jsx)(Be.a,{orientation:"vertical",flexItem:!0}),Object(N.jsx)(He.a,{title:"\uad75\uac8c",children:Object(N.jsx)(x.a,{color:this.hasInlineStyle("BOLD")?"primary":"default",onMouseDown:this.onToggleInlineStyle("BOLD"),children:Object(N.jsx)(qe.a,{})})}),Object(N.jsx)(He.a,{title:"\uae30\uc6c0\uc77c\uaf34",children:Object(N.jsx)(x.a,{color:this.hasInlineStyle("ITALIC")?"primary":"default",onMouseDown:this.onToggleInlineStyle("ITALIC"),children:Object(N.jsx)(Qe.a,{})})}),Object(N.jsx)(He.a,{title:"\ubc11\uc904",children:Object(N.jsx)(x.a,{color:this.hasInlineStyle("UNDERLINE")?"primary":"default",onMouseDown:this.onToggleInlineStyle("UNDERLINE"),children:Object(N.jsx)(Ye.a,{})})}),Object(N.jsx)(Be.a,{orientation:"vertical",flexItem:!0})]})}),Object(N.jsx)(_e,{className:"RichEditor-editor",align:"left",onClick:this.onFocusEditor,children:Object(N.jsx)(Ne.Editor,{ref:this.setEditor,editorState:this.props.editorState,onChange:this.props.onChange,placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694..."})})]})}}]),n}(a.a.Component),tt=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onClickUndo=function(){r.onEditorStateChange(Ne.EditorState.undo(r.state.editorState))},r.onClickRedo=function(){r.onEditorStateChange(Ne.EditorState.redo(r.state.editorState))},r.onToggleInlineStyle=function(e){return function(t){t.preventDefault(),r.onEditorStateChange(Ne.RichUtils.toggleInlineStyle(r.state.editorState,e))}},r.onEditorChange=function(e){r.setState({editorState:e})},r.state={editorState:Ne.EditorState.createEmpty()},r}return Object(c.a)(n,[{key:"render",value:function(){return Object(N.jsx)(Ee.a,{maxWidth:!1,children:Object(N.jsx)(ke.a,{container:!0,alignContent:"center",style:{minHeight:"100vh",maxHeight:"100vh"},children:Object(N.jsxs)(f.a,{textAlign:"center",mx:"auto",width:"1024px",maxWidth:"1024px",children:[Object(N.jsx)(Pe.a,{align:"left",gutterBottom:!0,variant:"h4",children:"\uac8c\uc2dc\ubb3c \uc791\uc131"}),Object(N.jsx)(Be.a,{}),Object(N.jsxs)(f.a,{component:"form",children:[Object(N.jsx)(ae.a,{margin:"normal",sx:{width:"100%"},children:Object(N.jsx)(oe.a,{placeholder:"\uc81c\ubaa9"})}),Object(N.jsx)(ae.a,{margin:"normal",sx:{width:"100%"},children:Object(N.jsx)(et,{editorState:this.state.editorState,onChange:this.onEditorChange.bind(this)})}),Object(N.jsx)(v.a,{fullWidth:!0,variant:"contained",sx:{mt:1,mb:2},children:"\uc791\uc131"})]})]})})})}}]),n}(a.a.Component),nt=Object(b.a)(O.a)((function(e){e.theme;return{backdropFilter:"blur(10px)",boxShadow:"inset 0px -1px 1px #eaeef3",backgroundColor:Object(p.a)("#ffffff",.72)}})),rt=Object(b.a)(u.b)((function(e){var t=e.theme;return{textDecoration:"inherit","&:visited":{color:t.palette.primary.main,textDecoration:"inherit"},"&:hover":{color:t.palette.primary.dark,textDecoration:"inherit"}}})),at=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={open:!1},r.handleClickOpen=r.handleClickOpen.bind(Object(l.a)(r)),r.handleClose=r.handleClose.bind(Object(l.a)(r)),r.handleCloseAlert=r.handleCloseAlert.bind(Object(l.a)(r)),r}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=sessionStorage.getItem("token");null!==e&&this.props.authenticationSuccess(e)}},{key:"handleClickOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"handleCloseAlert",value:function(){this.props.closeAlert()}},{key:"render",value:function(){var e=this.props,t=e.auth,n=e.user;return Object(N.jsxs)(u.a,{children:[Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(nt,{children:Object(N.jsxs)(g.a,{children:[Object(N.jsx)(u.b,{style:{color:"inherit"},to:"/",children:Object(N.jsx)(x.a,{size:"large",edge:"start",color:"primary","aria-label":"home",sx:{mr:2},children:Object(N.jsx)(S.a,{})})}),Object(N.jsxs)(m.a,{"aria-label":"breadcrumb",children:[Object(N.jsx)(rt,{to:"#",sx:{my:1,mx:1.5},children:"\uacf5\uc9c0\uc0ac\ud56d"}),Object(N.jsx)(rt,{to:"/board",sx:{my:1,mx:1.5},children:"\uac8c\uc2dc\ud310"})]}),Object(N.jsx)(f.a,{sx:{flexGrow:1}}),Object(N.jsx)(Z,{}),t.isLoggedin?Object(N.jsx)("div",{children:Object(N.jsx)(x.a,{"aria-label":"user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",children:Object(N.jsx)(Se,{user:n})})}):Object(N.jsx)(v.a,{color:"primary",onClick:this.handleClickOpen,children:"\ub85c\uadf8\uc778"})]})}),Object(N.jsx)(we,{open:this.state.open,onClose:this.handleClose}),Object(N.jsx)(C.a,{open:this.props.alert.open,onClose:this.handleCloseAlert,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(N.jsx)(w.a,{onClose:this.handleCloseAlert,severity:this.props.alert.type,sx:{width:"100%"},children:this.props.alert.message})})]}),Object(N.jsxs)(j.d,{children:[Object(N.jsx)(j.b,{exact:!0,path:"/",component:t.isLoggedin?Me:Le}),Object(N.jsx)(z,{exact:!0,path:"/board",component:We}),Object(N.jsx)(z,{path:"/write",component:tt})]})]})}}]),n}(a.a.Component),st={authenticationSuccess:me,openAlert:W,closeAlert:P},ot=Object(I.b)((function(e){return{alert:e.alert,auth:e.auth,user:e.user}}),st)(at),it=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,433)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),s(e),o(e)}))},ct=n(56),lt=Object(M.b)({name:"user",initialState:{studentId:"",name:""},reducers:{setName:function(e,t){e.name=t.payload}}}).reducer,dt=Object(ct.b)({alert:B,auth:fe,user:lt}),ht=Object(M.a)({reducer:dt});o.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(I.a,{store:ht,children:Object(N.jsx)(ot,{})})}),document.getElementById("root")),it()}},[[357,1,2]]]);
//# sourceMappingURL=main.52a3adfc.chunk.js.map