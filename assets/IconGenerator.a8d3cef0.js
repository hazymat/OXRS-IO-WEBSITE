import{_ as c,o as p,c as u,a as e,K as _,$ as h,D as g,t as m,F as v,a0 as b,a1 as f,e as d}from"./app.89d8ee4e.js";const x={name:"app",data(){return{iconName:"",iconJson:"",hasError:!1}},methods:{async onChange(a){if(this.iconName===""){this.hasError=!0,a.target.value="";return}const t=a.target.files[0],i=await this.convertBase64(t);avatar.src=i,this.iconJson={addIcon:{name:this.iconName,imageBase64:i.split(",")[1]}}},convertBase64(a){return new Promise((t,i)=>{const r=new FileReader;r.readAsDataURL(a),r.onload=()=>{t(r.result)},r.onerror=s=>{i(s)}})},copy(a){let t=JSON.stringify(this.iconJson);navigator.clipboard.writeText(t)},inputHandler(a){if(this.iconName==""&&selectAvatar.files.length==1){let t=JSON.parse(JSON.stringify(this.iconJson));this.hasError=!0,t.addIcon.name="",this.iconJson=t}if(this.iconName!==""&&selectAvatar.files.length!==0){let t=JSON.parse(JSON.stringify(this.iconJson));this.hasError=!1,t.addIcon.name=this.iconName,this.iconJson=t}}}},n=a=>(b("data-v-5a9253eb"),a=a(),f(),a),y={class:"container"},N={class:"sub-container"},I=n(()=>e("label",{for:"icon"},"Icon Name:",-1)),J=n(()=>e("br",null,null,-1)),w=n(()=>e("br",null,null,-1)),S=n(()=>e("br",null,null,-1)),B=n(()=>e("br",null,null,-1)),E=n(()=>e("label",{for:"selectAvatar"},"Upload Image:",-1)),A=n(()=>e("br",null,null,-1)),C=n(()=>e("br",null,null,-1)),O=n(()=>e("br",null,null,-1)),D=n(()=>e("br",null,null,-1)),j=n(()=>e("div",{class:"sub-container output"},[e("label",{for:"avatar"},"Image Preview:"),e("br"),e("img",{class:"img",id:"avatar"})],-1)),k={class:"container code"},F={class:"language-json ext-json code-container"},G={class:"language-js"},H=d("				"),R=n(()=>e("span",{class:"lang"},null,-1)),T=d(`
				`),U=d(`
			`);function V(a,t,i,r,s,l){return p(),u(v,null,[e("div",y,[e("div",N,[I,J,w,_(e("input",{class:g({"text-danger":s.hasError}),type:"text",id:"icon-name",name:"icon","onUpdate:modelValue":t[0]||(t[0]=o=>s.iconName=o),onInput:t[1]||(t[1]=(...o)=>l.inputHandler&&l.inputHandler(...o)),placeholder:"enter icon",required:""},null,34),[[h,s.iconName]]),S,B,E,A,C,e("input",{id:"selectAvatar",type:"file",onChange:t[2]||(t[2]=o=>l.onChange(o))},null,32),O,D]),j]),e("div",k,[e("div",F,[e("button",{class:"copy",onClick:t[3]||(t[3]=o=>l.copy(o))},"copy"),e("pre",G,[H,R,T,e("pre",null,[e("code",null,m(s.iconJson),1)]),U])])])],64)}var q=c(x,[["render",V],["__scopeId","data-v-5a9253eb"],["__file","IconGenerator.vue"]]);export{q as default};
