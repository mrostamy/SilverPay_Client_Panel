"use strict";(self.webpackChunksilverpay_panel=self.webpackChunksilverpay_panel||[]).push([[84],{8503:function(e,s,a){a.r(s),a.d(s,{default:function(){return A}});var l=a(2791),r=a(6871),n=a(2250),i=a(6555),c=a(5705),d=a(3504),t=a(5537),m=a(8086),o=a(8448),h=a(184),x=function(){var e=(0,n.$)(i.K),s=(0,n.$)(t.c);(0,n.$)(m.e);function a(){}var r={id:"",name:"",username:"",gender:"",age:"",phoneNumber:"",photoUrl:"",city:"",address:"",lastActive:"",photos:void 0,bankCards:void 0},x=o.Ry().shape({name:o.Z_().min(2,"too short").max(20,"too long").required("required"),username:o.Z_().email("invalid email format"),city:o.Z_(),phoneNumber:o.Rx().min(11,"11 character").max(11,"11 character")});(0,l.useEffect)((function(){e.getUser("2ab3c7d1-a3ff-46df-b045-54c5735a1c00").then((function(e){console.log(e),s.success(e.name,"")})).catch((function(e){console.log(e.message),s.error(e,"")}))}));return(0,h.jsx)("section",{className:"content",children:(0,h.jsx)("div",{className:"container-fluid",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-md-3",children:(0,h.jsx)("div",{className:"card card-primary card-outline",children:(0,h.jsxs)("div",{className:"card-body box-profile",children:[(0,h.jsx)("div",{className:"text-center",children:(0,h.jsx)("img",{className:"profile-user-img img-fluid img-circle",src:"",alt:"User profile picture"})}),(0,h.jsx)("h3",{className:"profile-username text-center",children:""}),(0,h.jsx)("p",{className:"text-muted text-center",children:""}),(0,h.jsx)("ul",{className:"list-group list-group-unbordered mb-3",children:(0,h.jsxs)("li",{className:"list-group-item",children:[(0,h.jsx)("b",{children:"\u0622\u062e\u0631\u06cc\u0646 \u0648\u0631\u0648\u062f"})," ",(0,h.jsx)("a",{className:"float-right",children:""})]})}),(0,h.jsx)("a",{href:"#",className:"btn btn-primary btn-block",children:(0,h.jsx)("b",{children:"\u062f\u0646\u0628\u0627\u0644 \u06a9\u0631\u062f\u0646"})})]})})}),(0,h.jsx)("div",{className:"col-md-9",children:(0,h.jsxs)("div",{className:"card",children:[(0,h.jsx)("div",{className:"card-header p-2",children:(0,h.jsxs)("ul",{className:"nav nav-pills",children:[(0,h.jsx)("li",{className:"nav-item",children:(0,h.jsx)("a",{className:"nav-link active",href:"#prof_pic","data-toggle":"tab",children:"\u0639\u06a9\u0633 \u067e\u0631\u0648\u0641\u0627\u06cc\u0644                                        "})}),(0,h.jsx)("li",{className:"nav-item",children:(0,h.jsx)("a",{className:"nav-link",href:"#profile","data-toggle":"tab",children:"\u0645\u0634\u062e\u0635\u0627\u062a \u06a9\u0627\u0631\u0628\u0631\u06cc"})}),(0,h.jsx)("li",{className:"nav-item",children:(0,h.jsx)("a",{className:"nav-link",href:"#reset_passowrd","data-toggle":"tab",children:"\u0628\u0627\u0632\u06cc\u0627\u0628\u06cc \u0631\u0645\u0632 \u0639\u0628\u0648\u0631"})}),(0,h.jsx)("li",{className:"nav-item",children:(0,h.jsx)("a",{className:"nav-link",href:"#bankcard","data-toggle":"tab",children:"\u06a9\u0627\u0631\u062a \u0628\u0627\u0646\u06a9\u06cc                                        "})})]})}),(0,h.jsx)("div",{className:"card-body",children:(0,h.jsxs)("div",{className:"tab-content",children:[(0,h.jsx)("div",{className:"active tab-pane",id:"prof_pic",children:(0,h.jsx)("p",{children:"\u0639\u06a9\u0633 \u06a9\u0627\u0631\u0628\u0631"})}),(0,h.jsxs)("div",{className:"tab-pane",id:"profile",children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h3",{className:"card-title",children:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0634\u062e\u0635\u06cc"})}),(0,h.jsx)(c.J9,{initialValues:r,onSubmit:function(a){e.insertUser(a).then((function(e){console.log(e),s.success("\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0631\u0633\u0627\u0644 \u0634\u062f\u0646\u062f","kkkk")})).catch((function(e){console.log(e.message),s.error(e.message,"error")}))},validationSchema:x,children:function(e){var s=e.dirty;e.isSubmitting;return(0,h.jsxs)(c.l0,{role:"form",children:[s?(0,h.jsxs)("div",{className:"alert alert-warning",children:[(0,h.jsx)("h6",{children:"\u0647\u0634\u062f\u0627\u0631!"}),(0,h.jsxs)("p",{style:{backgroundColor:"white !important"},children:[" \u0634\u0645\u0627 \u062a\u063a\u06cc\u06cc\u0631\u06cc \u062f\u0631 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0627\u0646\u062c\u0627\u0645 \u062f\u0627\u062f\u0647 \u0627\u06cc\u062f .\u0644\u0637\u0641\u0627  \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0631\u0627",(0,h.jsx)(d.rU,{to:"#",style:{textDecorationLine:"none",color:" !important"},onClick:a,children:" \u0630\u062e\u06cc\u0631\u0647 "}),"  \u0646\u0645\u0627\u06cc\u06cc\u062f. "]})]}):null,(0,h.jsxs)("div",{className:"card-body",children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{htmlFor:"name",children:"\u0646\u0627\u0645"}),(0,h.jsx)(c.gN,{type:"text",className:"form-control",id:"name",name:"name",placeholder:"\u0646\u0627\u0645 \u062e\u0648\u062f  \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"}),(0,h.jsx)(c.Bc,{name:"name",className:"error"})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{htmlFor:"phoneNumber",children:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644"}),(0,h.jsx)(c.gN,{type:"text",className:"form-control",id:"phoneNumber",name:"phoneNumber",placeholder:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"}),(0,h.jsx)(c.Bc,{name:"phoneNumber"})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{children:"\u062c\u0646\u0633\u06cc\u062a"}),(0,h.jsxs)("select",{className:"form-control select2 select2-hidden-accessible",style:{width:"100%"},"aria-hidden":"true",children:[(0,h.jsx)("option",{value:"male",children:"\u0645\u0631\u062f"}),(0,h.jsx)("option",{value:"female",children:"\u0632\u0646"})]})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{htmlFor:"city",children:"\u0634\u0647\u0631"}),(0,h.jsx)(c.gN,{type:"text",className:"form-control",id:"city",name:"city",placeholder:" \u0634\u0647\u0631\u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{children:"\u0622\u062f\u0631\u0633"}),(0,h.jsx)("textarea",{className:"form-control",rows:3,placeholder:"\u0648\u0627\u0631\u062f \u06a9\u0631\u062f\u0646 \u0622\u062f\u0631\u0633 ..."})]})]}),(0,h.jsx)("div",{className:"card-footer",id:"btnId",children:(0,h.jsx)("button",{type:"submit",disabled:!s,className:"btn btn-primary",children:"\u0627\u0631\u0633\u0627\u0644"})})]})}})]}),(0,h.jsx)("div",{className:"tab-pane",id:"reset_passowrd",children:(0,h.jsxs)("form",{role:"form",children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{htmlFor:"oldpassword",children:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0642\u0628\u0644\u06cc"}),(0,h.jsx)("input",{type:"text",className:"form-control",id:"oldpassword",name:"oldpassword",placeholder:"\u067e\u0633\u0648\u0631\u062f \u0642\u0628\u0644\u06cc \u062e\u0648\u062f  \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{htmlFor:"password",children:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f"}),(0,h.jsx)("input",{type:"text",className:"form-control",id:"oldpassword",name:"oldpassword",placeholder:"\u067e\u0633\u0648\u0631\u062f \u062c\u062f\u06cc\u062f \u062e\u0648\u062f  \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{htmlFor:"repeatpassword",children:"\u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631  \u062c\u062f\u06cc\u062f"}),(0,h.jsx)("input",{type:"text",className:"form-control",id:"repeatpassword",name:"repetpassword",placeholder:"\u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631  \u062c\u062f\u06cc\u062f \u062e\u0648\u062f  \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"})]}),(0,h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u0627\u0631\u0633\u0627\u0644"})]})}),(0,h.jsxs)("div",{className:"tab-pane",id:"bankcard",children:[(0,h.jsxs)("div",{className:"alert alert-info",children:[(0,h.jsx)("h6",{children:"\u062a\u0648\u062c\u0647!"}),(0,h.jsx)("p",{children:"\u0627\u0644\u0632\u0627\u0645\u0627 \u0628\u0627\u06cc\u062f \u062d\u0633\u0627\u0628 \u0628\u0627\u0646\u06a9\u06cc \u0634\u062e\u0635\u06cc \u06a9\u0647 \u0645\u062f\u0627\u0631\u06a9 \u0627\u06cc\u0634\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u0634\u062f\u0647 \u062b\u0628\u062a \u0634\u0648\u062f "})]}),(0,h.jsxs)("div",{className:"alert alert-warning",children:[(0,h.jsx)("h6",{children:"\u0647\u0634\u062f\u0627\u0631!"}),(0,h.jsx)("p",{children:"\u0647\u06cc\u0686 \u06af\u0648\u0646\u0647 \u0645\u0633\u0626\u0648\u0644\u06cc\u062a\u06cc \u0631\u0627 \u062f\u0631 \u0642\u0628\u0627\u0644 \u0648\u0627\u0631\u06cc\u0632  \u0648\u062c\u0647 \u0628\u0647 \u062d\u0633\u0627\u0628 \u062f\u06cc\u06af\u0631\u0627\u0646 \u0631\u0627 \u0646\u0645\u06cc\u067e\u0630\u0628\u0631\u062f "})]}),(0,h.jsxs)("form",{role:"form",children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{htmlFor:"bankname",children:"\u0646\u0627\u0645 \u0628\u0627\u0646\u06a9"}),(0,h.jsx)("input",{type:"text",className:"form-control",id:"bankname",name:"bankname",placeholder:"\u0646\u0627\u0645 \u0628\u0627\u0646\u06a9 \u0631\u0627 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f"})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{htmlFor:"cardowner",children:"\u0646\u0627\u0645 \u0635\u0627\u062d\u0628 \u06a9\u0627\u0631\u062a"}),(0,h.jsx)("input",{type:"text",className:"form-control",id:"cardowner",name:"cardowner",placeholder:"\u0646\u0627\u0645 \u0635\u0627\u062d\u0628 \u06a9\u0627\u0631\u062a \u0628\u0627\u0646\u06a9\u06cc \u0631\u0627 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f"})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{htmlFor:"shaba",children:"\u0634\u0645\u0627\u0631\u0647 \u0634\u0628\u0627"}),(0,h.jsx)("input",{type:"text",className:"form-control",id:"shaba",name:"shaba",placeholder:"\u0634\u0645\u0627\u0631\u0647 \u0634\u0628\u0627\u06cc \u062e\u0648\u062f \u0631\u0627  \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f"})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{htmlFor:"accountnumber",children:"\u0634\u0645\u0627\u0631\u0647 \u062d\u0633\u0627\u0628"}),(0,h.jsx)("input",{type:"text",className:"form-control",id:"accountnumber",name:"accountnumber",placeholder:"\u0634\u0645\u0627\u0631\u0647 \u062d\u0633\u0627\u0628  \u062e\u0648\u062f \u0631\u0627  \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f"})]}),(0,h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u0627\u0631\u0633\u0627\u0644"})]})]})]})})]})})]})})})},j=function(){return(0,h.jsx)("div",{className:"content-header",children:(0,h.jsx)("div",{className:"container-fluid",children:(0,h.jsxs)("div",{className:"row mb-2",children:[(0,h.jsx)("div",{className:"col-sm-6",children:(0,h.jsx)("h1",{className:"m-0 text-dark",children:"\u0635\u0641\u062d\u0647 \u0633\u0631\u06cc\u0639"})}),(0,h.jsx)("div",{className:"col-sm-6",children:(0,h.jsxs)("ol",{className:"breadcrumb float-sm-left",children:[(0,h.jsx)("li",{className:"breadcrumb-item",children:(0,h.jsx)("a",{href:"#",children:"\u062e\u0627\u0646\u0647"})}),(0,h.jsx)("li",{className:"breadcrumb-item active",children:"\u0635\u0641\u062d\u0647 \u0633\u0631\u06cc\u0639"})]})})]})})})},p=function(){return(0,h.jsxs)("div",{className:"content-wrapper",children:[(0,h.jsx)(j,{}),(0,h.jsx)(r.j3,{})]})},N=a(2612),f=a(7596),u=function(){var e=(0,r.s0)(),s=new m.e,a=(0,N.TD)(localStorage.getItem("token")||"");return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h1",{children:"Dashbord"}),s.IsLogin()?(0,h.jsx)("p",{children:"user is logged in"}):null,a?(0,h.jsx)("p",{children:a.sub}):null,(0,h.jsx)("button",{onClick:function(){s.logout()&&(e("/auth/login"),f.Am.success("logout successfully",{theme:"colored"}))},children:"logout"})]})},v=function(){return(0,h.jsx)("aside",{className:"control-sidebar control-sidebar-dark",children:(0,h.jsxs)("div",{className:"p-3",children:[(0,h.jsx)("h5",{children:"Title"}),(0,h.jsx)("p",{children:"Sidebar content"})]})})},b=function(){return(0,h.jsxs)("footer",{className:"main-footer",children:[(0,h.jsx)("div",{className:"float-right d-none d-sm-inline",children:"Anything you want"}),(0,h.jsxs)("strong",{children:["CopyLeft \xa9 2018 ",(0,h.jsx)("a",{href:"http://github.com/hesammousavi/",children:"\u062d\u0633\u0627\u0645 \u0645\u0648\u0633\u0648\u06cc"}),"."]})]})},g=function(){return(0,h.jsxs)("nav",{className:"main-header navbar navbar-expand bg-white navbar-light border-bottom",children:[(0,h.jsxs)("ul",{className:"navbar-nav",children:[(0,h.jsx)("li",{className:"nav-item",children:(0,h.jsx)("a",{className:"nav-link","data-widget":"pushmenu",href:"#",children:(0,h.jsx)("i",{className:"fa fa-bars"})})}),(0,h.jsx)("li",{className:"nav-item d-none d-sm-inline-block",children:(0,h.jsx)("a",{href:"index3.html",className:"nav-link",children:"\u062e\u0627\u0646\u0647"})}),(0,h.jsx)("li",{className:"nav-item d-none d-sm-inline-block",children:(0,h.jsx)("a",{href:"#",className:"nav-link",children:"\u062a\u0645\u0627\u0633"})})]}),(0,h.jsx)("form",{className:"form-inline ml-3",children:(0,h.jsxs)("div",{className:"input-group input-group-sm",children:[(0,h.jsx)("input",{className:"form-control form-control-navbar",type:"search",placeholder:"\u062c\u0633\u062a\u062c\u0648","aria-label":"Search"}),(0,h.jsx)("div",{className:"input-group-append",children:(0,h.jsx)("button",{className:"btn btn-navbar",type:"submit",children:(0,h.jsx)("i",{className:"fa fa-search"})})})]})}),(0,h.jsxs)("ul",{className:"navbar-nav mr-auto",children:[(0,h.jsxs)("li",{className:"nav-item dropdown",children:[(0,h.jsxs)("a",{className:"nav-link","data-toggle":"dropdown",href:"#",children:[(0,h.jsx)("i",{className:"fa fa-comments-o"}),(0,h.jsx)("span",{className:"badge badge-danger navbar-badge",children:"3"})]}),(0,h.jsxs)("div",{className:"dropdown-menu dropdown-menu-lg dropdown-menu-left",children:[(0,h.jsx)("a",{href:"#",className:"dropdown-item",children:(0,h.jsxs)("div",{className:"media",children:[(0,h.jsx)("img",{src:"dist/img/user1-128x128.jpg",alt:"User Avatar",className:"img-size-50 ml-3 img-circle"}),(0,h.jsxs)("div",{className:"media-body",children:[(0,h.jsxs)("h3",{className:"dropdown-item-title",children:["\u062d\u0633\u0627\u0645 \u0645\u0648\u0633\u0648\u06cc",(0,h.jsx)("span",{className:"float-left text-sm text-danger",children:(0,h.jsx)("i",{className:"fa fa-star"})})]}),(0,h.jsx)("p",{className:"text-sm",children:"\u0628\u0627 \u0645\u0646 \u062a\u0645\u0627\u0633 \u0628\u06af\u06cc\u0631 \u0644\u0637\u0641\u0627..."}),(0,h.jsxs)("p",{className:"text-sm text-muted",children:[(0,h.jsx)("i",{className:"fa fa-clock-o mr-1"})," 4 \u0633\u0627\u0639\u062a \u0642\u0628\u0644"]})]})]})}),(0,h.jsx)("div",{className:"dropdown-divider"}),(0,h.jsx)("a",{href:"#",className:"dropdown-item",children:(0,h.jsxs)("div",{className:"media",children:[(0,h.jsx)("img",{src:"dist/img/user8-128x128.jpg",alt:"User Avatar",className:"img-size-50 img-circle ml-3"}),(0,h.jsxs)("div",{className:"media-body",children:[(0,h.jsxs)("h3",{className:"dropdown-item-title",children:["\u067e\u06cc\u0645\u0627\u0646 \u0627\u062d\u0645\u062f\u06cc",(0,h.jsx)("span",{className:"float-left text-sm text-muted",children:(0,h.jsx)("i",{className:"fa fa-star"})})]}),(0,h.jsx)("p",{className:"text-sm",children:"\u0645\u0646 \u067e\u06cc\u0627\u0645\u062a\u0648 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0631\u062f\u0645"}),(0,h.jsxs)("p",{className:"text-sm text-muted",children:[(0,h.jsx)("i",{className:"fa fa-clock-o mr-1"})," 4 \u0633\u0627\u0639\u062a \u0642\u0628\u0644"]})]})]})}),(0,h.jsx)("div",{className:"dropdown-divider"}),(0,h.jsx)("a",{href:"#",className:"dropdown-item",children:(0,h.jsxs)("div",{className:"media",children:[(0,h.jsx)("img",{src:"dist/img/user3-128x128.jpg",alt:"User Avatar",className:"img-size-50 img-circle ml-3"}),(0,h.jsxs)("div",{className:"media-body",children:[(0,h.jsxs)("h3",{className:"dropdown-item-title",children:["\u0633\u0627\u0631\u0627 \u0648\u06a9\u06cc\u0644\u06cc",(0,h.jsx)("span",{className:"float-left text-sm text-warning",children:(0,h.jsx)("i",{className:"fa fa-star"})})]}),(0,h.jsx)("p",{className:"text-sm",children:"\u067e\u0631\u0648\u0698\u0647 \u0627\u062a\u0648\u0646 \u0639\u0627\u0644\u06cc \u0628\u0648\u062f \u0645\u0631\u0633\u06cc \u0648\u0627\u0642\u0639\u0627"}),(0,h.jsxs)("p",{className:"text-sm text-muted",children:[(0,h.jsx)("i",{className:"fa fa-clock-o mr-1"}),"4 \u0633\u0627\u0639\u062a \u0642\u0628\u0644"]})]})]})}),(0,h.jsx)("div",{className:"dropdown-divider"}),(0,h.jsx)("a",{href:"#",className:"dropdown-item dropdown-footer",children:"\u0645\u0634\u0627\u0647\u062f\u0647 \u0647\u0645\u0647 \u067e\u06cc\u0627\u0645\u200c\u0647\u0627"})]})]}),(0,h.jsxs)("li",{className:"nav-item dropdown",children:[(0,h.jsxs)("a",{className:"nav-link","data-toggle":"dropdown",href:"#",children:[(0,h.jsx)("i",{className:"fa fa-bell-o"}),(0,h.jsx)("span",{className:"badge badge-warning navbar-badge",children:"15"})]}),(0,h.jsxs)("div",{className:"dropdown-menu dropdown-menu-lg dropdown-menu-left",children:[(0,h.jsx)("span",{className:"dropdown-item dropdown-header",children:"15 \u0646\u0648\u062a\u06cc\u0641\u06cc\u06a9\u06cc\u0634\u0646"}),(0,h.jsx)("div",{className:"dropdown-divider"}),(0,h.jsxs)("a",{href:"#",className:"dropdown-item",children:[(0,h.jsx)("i",{className:"fa fa-envelope ml-2"})," 4 \u067e\u06cc\u0627\u0645 \u062c\u062f\u06cc\u062f",(0,h.jsx)("span",{className:"float-left text-muted text-sm",children:"3 \u062f\u0642\u06cc\u0642\u0647"})]}),(0,h.jsx)("div",{className:"dropdown-divider"}),(0,h.jsxs)("a",{href:"#",className:"dropdown-item",children:[(0,h.jsx)("i",{className:"fa fa-users ml-2"})," 8 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062f\u0648\u0633\u062a\u06cc",(0,h.jsx)("span",{className:"float-left text-muted text-sm",children:"12 \u0633\u0627\u0639\u062a"})]}),(0,h.jsx)("div",{className:"dropdown-divider"}),(0,h.jsxs)("a",{href:"#",className:"dropdown-item",children:[(0,h.jsx)("i",{className:"fa fa-file ml-2"})," 3 \u06af\u0632\u0627\u0631\u0634 \u062c\u062f\u06cc\u062f",(0,h.jsx)("span",{className:"float-left text-muted text-sm",children:"2 \u0631\u0648\u0632"})]}),(0,h.jsx)("div",{className:"dropdown-divider"}),(0,h.jsx)("a",{href:"#",className:"dropdown-item dropdown-footer",children:"\u0645\u0634\u0627\u0647\u062f\u0647 \u0647\u0645\u0647 \u0646\u0648\u062a\u06cc\u0641\u06cc\u06a9\u06cc\u0634\u0646"})]})]}),(0,h.jsx)("li",{className:"nav-item",children:(0,h.jsx)("a",{className:"nav-link","data-widget":"control-sidebar","data-slide":"true",href:"#",children:(0,h.jsx)("i",{className:"fa fa-th-large"})})})]})]})},w=a.p+"static/media/AdminLTELogo.dc3925d09dcdabe76306.png",y=function(){return(0,h.jsxs)("aside",{className:"main-sidebar sidebar-dark-primary elevation-4",children:[(0,h.jsxs)("a",{href:"#",className:"brand-link",children:[(0,h.jsx)("img",{src:w,alt:"AdminLTE Logo",className:"brand-image img-circle elevation-3",style:{opacity:".8"}}),(0,h.jsx)("span",{className:"brand-text font-weight-light",children:"\u067e\u0646\u0644 \u0645\u062f\u06cc\u0631\u06cc\u062a"})]}),(0,h.jsx)("div",{className:"sidebar",children:(0,h.jsx)("div",{children:(0,h.jsx)("nav",{className:"mt-2",children:(0,h.jsxs)("ul",{className:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu","data-accordion":"false",children:[(0,h.jsx)("li",{className:"nav-item",children:(0,h.jsxs)("a",{href:"#",className:"nav-link",children:[(0,h.jsx)("i",{className:"nav-icon fa fa-home"}),(0,h.jsxs)("p",{children:["\u062f\u0627\u0634\u0628\u0648\u0631\u062f",(0,h.jsx)("span",{className:"right badge badge-danger",children:"\u062c\u062f\u06cc\u062f"})]})]})}),(0,h.jsxs)("li",{className:"nav-item has-treeview menu-open",children:[(0,h.jsxs)("a",{href:"#",className:"nav-link ",children:[(0,h.jsx)("i",{className:"nav-icon fa fa-info"}),(0,h.jsxs)("p",{children:["\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0634\u0645\u0627",(0,h.jsx)("i",{className:"right fa fa-angle-left"})]})]}),(0,h.jsxs)("ul",{className:"nav nav-treeview",children:[(0,h.jsx)("li",{className:"nav-item",children:(0,h.jsxs)("a",{href:"#",className:"nav-link ",children:[(0,h.jsx)("i",{className:"nav-icon fa fa-user"}),(0,h.jsx)("p",{children:"\u067e\u0631\u0648\u0641\u0627\u06cc\u0644"})]})}),(0,h.jsx)("li",{className:"nav-item",children:(0,h.jsxs)("a",{href:"#",className:"nav-link",children:[(0,h.jsx)("i",{className:"nav-icon fa fa-book"}),(0,h.jsx)("p",{children:"\u0645\u062f\u0627\u0631\u06a9"})]})})]})]}),(0,h.jsx)("li",{className:"nav-item",children:(0,h.jsxs)("a",{href:"#",className:"nav-link",children:[(0,h.jsx)("i",{className:"nav-icon fa fa-user"}),(0,h.jsx)("p",{children:"\u067e\u0631\u0648\u0641\u0627\u06cc\u0644"})]})})]})})})})]})},k=function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("h1",{children:"DOCUMENTS"})})},F=function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("h1",{style:{color:"red"},children:"Not Found 404 "})})},A=function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"wrapper",children:[(0,h.jsx)(g,{}),(0,h.jsx)(y,{}),(0,h.jsxs)(r.Z5,{children:[(0,h.jsxs)(r.AW,{path:"/",element:(0,h.jsx)(p,{}),children:[(0,h.jsx)(r.AW,{index:!0,element:(0,h.jsx)(r.Fg,{to:"/panel/dashboard",replace:!0})}),(0,h.jsx)(r.AW,{path:"dashboard",element:(0,h.jsx)(u,{})}),(0,h.jsxs)(r.AW,{path:"userinfo",children:[(0,h.jsx)(r.AW,{index:!0,element:(0,h.jsx)(r.Fg,{to:"profile"})}),(0,h.jsx)(r.AW,{path:"profile",element:(0,h.jsx)(x,{})}),(0,h.jsx)(r.AW,{path:"docs",element:(0,h.jsx)(k,{})})]})]}),(0,h.jsx)(r.AW,{path:"*",element:(0,h.jsx)(F,{})})]}),(0,h.jsx)(v,{}),(0,h.jsx)(b,{})]})})}}}]);
//# sourceMappingURL=84.430ab657.chunk.js.map