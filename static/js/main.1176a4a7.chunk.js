(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{24:function(e,s,t){},27:function(e,s,t){},47:function(e,s,t){"use strict";t.r(s);var a=t(2),c=t(16),n=t.n(c),i=(t(24),t(6)),r=t(7),l=t(9),j=t(8),d=t(13),o=t(17),h=t.n(o),b=(t(27),t(18)),m=t(5),O=t.n(m),u=t(1),x=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.project,s=this.props.data.github,t=this.props.data.name,a=this.props.data.description;return Object(u.jsxs)("header",{id:"home",children:[Object(u.jsx)(b.a,{type:"polygon",bg:!0}),Object(u.jsxs)("nav",{id:"nav-wrap",children:[Object(u.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(u.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(u.jsxs)("ul",{id:"nav",className:"nav",children:[Object(u.jsx)("li",{className:"current",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(u.jsx)("div",{className:"row banner",children:Object(u.jsxs)("div",{className:"banner-text",children:[Object(u.jsx)(O.a,{bottom:!0,children:Object(u.jsx)("h1",{className:"responsive-headline",children:t})}),Object(u.jsx)(O.a,{bottom:!0,duration:1200,children:Object(u.jsxs)("h3",{className:"scrambletext",children:[a,"."]})}),Object(u.jsx)("hr",{}),Object(u.jsx)(O.a,{bottom:!0,duration:2e3,children:Object(u.jsxs)("ul",{className:"social",children:[Object(u.jsxs)("a",{href:e,className:"button btn project-btn",children:[Object(u.jsx)("i",{className:"fa fa-linkedin-square"}),"LinkedIn"]}),Object(u.jsxs)("a",{href:s,className:"button btn github-btn",children:[Object(u.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(u.jsx)("p",{className:"scrolldown",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(u.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(a.Component),p=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:e.url,children:Object(u.jsx)("i",{className:e.className})})},e.name)}));return Object(u.jsx)("footer",{children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(O.a,{bottom:!0,children:Object(u.jsxs)("div",{className:"twelve columns",children:[Object(u.jsx)("ul",{className:"social-links",children:e}),Object(u.jsx)("ul",{className:"copyright",children:Object(u.jsx)("li",{children:"Sidharth Rao"})})]})}),Object(u.jsx)("div",{id:"go-top",children:Object(u.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(u.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(a.Component),f=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e="images/"+this.props.data.image,s=this.props.data.bio,t=(this.props.data.address.street,this.props.data.address.city),a=this.props.data.address.state,c=this.props.data.address.zip,n=this.props.data.phone,i=this.props.data.email;this.props.data.resumedownload;return Object(u.jsx)("section",{id:"about",children:Object(u.jsx)(O.a,{duration:1e3,children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"three columns",children:Object(u.jsx)("img",{className:"profile-pic",src:e,alt:"Sidharth Rao Profile Pic"})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("h2",{children:"About Me"}),Object(u.jsx)("p",{children:s}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columns contact-details",children:[Object(u.jsx)("h2",{children:"Contact Details"}),Object(u.jsxs)("p",{className:"address",children:[Object(u.jsx)("span",{children:"Sidharth Rao"}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:[t," ",a,", ",c]}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:n}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:i})]})]}),Object(u.jsx)("div",{className:"columns download",children:Object(u.jsx)("p",{children:Object(u.jsxs)("a",{href:"files/Resume.pdf",className:"button",download:!0,children:[Object(u.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),t}(a.Component),v=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"getRandomColor",value:function(){for(var e="#",s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var s=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.school}),Object(u.jsxs)("p",{className:"info",children:[e.degree," ",Object(u.jsx)("span",{children:"\u2022"}),Object(u.jsx)("em",{className:"date",children:e.graduated})]}),Object(u.jsx)("p",{children:"Field Team Lead, Builder, Programmer [Choate Robotics Team]\nDean's List [All Terms]\nChoate Cross Country JV\nVice President [Choate Aerospace Association]"})]},e.school)})),a=this.props.data.work.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.company}),Object(u.jsxs)("p",{className:"info",children:[e.title,Object(u.jsx)("span",{children:"\u2022"})," ",Object(u.jsx)("em",{className:"date",children:e.years})]}),Object(u.jsx)("p",{children:e.description})]},e.company)})),c=this.props.data.skills.map((function(s){var t=e.getRandomColor(),a="bar-expand "+s.name.toLowerCase(),c=s.level;s.image;return Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{style:{width:c,backgroundColor:t},className:a}),Object(u.jsx)("em",{children:s.name})]},s.name)}));return Object(u.jsxs)("section",{id:"resume",children:[Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row education",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Education"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:Object(u.jsx)("div",{className:"row item",children:Object(u.jsx)("div",{className:"twelve columns",children:t})})})]})}),Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row work",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Work"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:a})]})}),Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row skill",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Skills"})})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("p",{children:s}),Object(u.jsx)("div",{className:"bars",children:Object(u.jsx)("ul",{className:"skills",children:c})})]})]})})]})}}]),t}(a.Component),N=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s=this.props.data.address.street,t=this.props.data.address.city,a=this.props.data.address.state,c=this.props.data.address.zip,n=this.props.data.phone,i=this.props.data.contactmessage;return Object(u.jsxs)("section",{id:"contact",children:[Object(u.jsx)(m.Fade,{bottom:!0,duration:1e3,children:Object(u.jsxs)("div",{className:"row section-head",children:[Object(u.jsx)("div",{className:"two columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Get In Touch."})})}),Object(u.jsx)("div",{className:"ten columns",children:Object(u.jsx)("p",{className:"lead",children:i})})]})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(m.Slide,{left:!0,duration:1e3,children:Object(u.jsxs)("div",{className:"eight columns",children:[Object(u.jsx)("form",{target:"hidden_iframe",action:"https://docs.google.com/forms/d/e/1FAIpQLSd1YmM2T_xUxKuSpCgeVSK7r_ZaGL7KA_47R_nyiM7GdO9vQA/formResponse?",method:"post",id:"contactForm",name:"contactForm",children:Object(u.jsxs)("fieldset",{children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(u.jsx)("span",{className:"required",children:"*"})]}),Object(u.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"entry.1703954431",name:"entry.1703954431",onChange:this.handleChange})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(u.jsx)("span",{className:"required",children:"*"})]}),Object(u.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"entry.1396502853",name:"entry.1396502853",onChange:this.handleChange})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(u.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"entry.114815141",name:"entry.114815141",onChange:this.handleChange})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(u.jsx)("span",{className:"required",children:"*"})]}),Object(u.jsx)("textarea",{cols:"50",rows:"15",id:"entry.234805479",name:"entry.234805479"})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"submit",children:"Submit"})})]})}),Object(u.jsx)("iframe",{name:"hidden_iframe",id:"hidden_iframe",style:{display:"none"},onload:"if(submitted) {}"})]})}),Object(u.jsx)(m.Slide,{right:!0,duration:1e3,children:Object(u.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(u.jsxs)("div",{className:"widget widget_contact",children:[Object(u.jsx)("h4",{children:"Contact"}),Object(u.jsxs)("p",{className:"address",children:[e,Object(u.jsx)("br",{}),"sidharthmrao@gmail.com",s," ",Object(u.jsx)("br",{}),t,", ",a," ",c,Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:n})]})]}),Object(u.jsxs)("div",{className:"widget widget_tweets",children:[Object(u.jsx)("h4",{className:"widget-title",children:"My Friends' Websites:"}),Object(u.jsxs)("ul",{id:"twitter",children:[Object(u.jsx)("li",{children:Object(u.jsx)("span",{children:Object(u.jsx)("a",{href:"https://ryanyang.us",children:"Ryan Yang"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("span",{children:Object(u.jsx)("a",{href:"https://www.korvyakov.us",children:"Michael Korvyakov"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("span",{children:Object(u.jsx)("a",{href:"https://tsviii.wixsite.com/david",children:"David Garsten"})})})]})]})]})})]})]})}}]),t}(a.Component),g=t(19),w=t.n(g),y=0,C=(a.Component,function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=s.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),a}return Object(r.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(x,{data:this.state.resumeData.main}),Object(u.jsx)(f,{data:this.state.resumeData.main}),Object(u.jsx)(v,{data:this.state.resumeData.resume}),Object(u.jsx)(N,{data:this.state.resumeData.main}),Object(u.jsx)(p,{data:this.state.resumeData.main})]})}}]),t}(a.Component)),k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(s){var t=s.getCLS,a=s.getFID,c=s.getFCP,n=s.getLCP,i=s.getTTFB;t(e),a(e),c(e),n(e),i(e)}))};n.a.render(Object(u.jsx)(C,{}),document.getElementById("root")),k()}},[[47,1,2]]]);
//# sourceMappingURL=main.1176a4a7.chunk.js.map