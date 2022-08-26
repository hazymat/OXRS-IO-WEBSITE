import{_ as a,r,o as l,c as h,a as e,b as o,w as i,d,e as t}from"./app.89d8ee4e.js";var c="/images/io-config.png";const _={},u=d('<h1 id="state-io-esp32" tabindex="-1"><a class="header-anchor" href="#state-io-esp32" aria-hidden="true">#</a> State IO ESP32</h1><p class="maker">by <b>moin</b></p><blockquote><p>SKU: OXRS-SHA-StateIO-ESP32-FW</p></blockquote><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>',4),p=t("This FW combines the functionality of "),f=t("OXRS-SHA-StateMonitor-ESP32"),m=t(" and "),b=t("OXRS-SHA-StateController-ESP32"),w=t("."),g=e("p",null,"To perform this combined functionality the available number of 128x I/O lines is split into input and output partitions. The split can be configured at runtime.",-1),S=e("hr",null,null,-1),x=e("h3",{id:"how-does-it-work",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-does-it-work","aria-hidden":"true"},"#"),t(" How does it work?")],-1),y=e("p",null,"The maximum number of 128x I/O lines can be achieved by connecting up to 8x I/O expander chips (MCP23017 with 16x I/Os each) via the I2C bus to the Rack32 controller. The FW refers to these I/O lines with index numbers (1 .. 128). In the standard configuration all 128x I/O lines are configured as input (StateMonitor) or output (StateController). This FW allows you to split the 128x I/O lines into a lower partition of inputs and an upper partition of outputs. With this configurations a single Rack32 controller can monitor inputs as well as control outputs which could be useful for small scale or distributed applications.",-1),k=e("p",null,"Currently there are 5 supported configurations, with different partition sizes.",-1),I=t("The "),O={href:"https://github.com/OXRS-IO/OXRS-IO-AdminUI-WEB-APP",target:"_blank",rel:"noopener noreferrer"},C=t("AdminUI-WEB-APP"),v=t(" is the ideal tool to set your desired configuration."),R=e("p",null,[e("img",{src:c,alt:"IO split configurations"})],-1),P=e("p",null,"In the example above the FW is configured for 32x inputs and 96x outputs. The user has to make sure that the connected MCPs are configured properly (correct MCP address). Not all output MCPs need to be populated. The FW will automatically scan for installed MCPs and only allows configuration of existing MCPs.",-1),T=e("h2",{id:"configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),t(" Configuration")],-1),A=t("This FW is fully compatible with "),M={href:"https://oxrs.io",target:"_blank",rel:"noopener noreferrer"},E=t("OXRS"),W=t(" eco-system and is built using the standard OXRS "),H=t("Libraries"),B=t("All the functionality of the "),L=t("StateMonitor"),X=t(" applies to the input partition and "),D=t("StateController"),F=t(" functionality applies to the output partition. Please see their documentation for further details."),N=e("h2",{id:"downloads",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#downloads","aria-hidden":"true"},"#"),t(" Downloads")],-1),j=t("Download the latest version of the firmware on "),J={href:"https://github.com/SuperHouse/OXRS-SHA-StateIO-ESP32-FW",target:"_blank",rel:"noopener noreferrer"},V=t("Github"),U=t("."),q=e("h2",{id:"supported-hardware",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#supported-hardware","aria-hidden":"true"},"#"),t(" Supported Hardware")],-1),K=e("p",null,"Input devices",-1),z=t("I2CRJ45 / Light Switch Controller"),G=t(" by SuperHouse"),Q=e("p",null,"Output devices",-1),Y={href:"https://www.superhouse.tv/product/8-channel-relay-driver-shield/",target:"_blank",rel:"noopener noreferrer"},Z=t("8 Channel Relay Driver Shield"),$=t(" by SuperHouse"),ee={href:"https://bmdesigns.com.au/shop/relay128-128-channel-relay-driver/",target:"_blank",rel:"noopener noreferrer"},te=t("128 Channel Relay Driver"),oe=t(" by Bedrock Media Designs"),ne={href:"https://bmdesigns.com.au/shop/relay16-16-channel-relay-driver/",target:"_blank",rel:"noopener noreferrer"},se=t("16 Channel Relay Driver"),ie=t(" by Bedrock Media Designs"),re=t("And is designed to run on the "),ae=t("RACK32"),le=t(" as part of the "),he={href:"https://oxrs.io",target:"_blank",rel:"noopener noreferrer"},de=t("OXRS"),ce=t(" eco-system."),_e=e("hr",null,null,-1),ue=e("h4",{id:"credits",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#credits","aria-hidden":"true"},"#"),t(" Credits")],-1),pe=e("li",null,[t("Jonathan Oxer "),e("a",{href:"mailto:jon@oxer.com.au"},"jon@oxer.com.au")],-1),fe=t("Ben Jones "),me={href:"https://github.com/sumnerboy12",target:"_blank",rel:"noopener noreferrer"},be=t("https://github.com/sumnerboy12"),we=t("Moin "),ge={href:"https://github.com/moinmoin-sh",target:"_blank",rel:"noopener noreferrer"},Se=t("https://github.com/moinmoin-sh"),xe=e("hr",null,null,-1),ye=e("h4",{id:"license",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#license","aria-hidden":"true"},"#"),t(" License")],-1),ke=e("p",null,[t("Copyright 2020-2022 SuperHouse Automation Pty Ltd "),e("a",{href:"www.superhouse.tv"},"www.superhouse.tv")],-1),Ie=e("p",null,'The software portion of this project is licensed under the Simplified BSD License. The "licence" folder within this project contains a copy of this license in plain text format.',-1);function Oe(Ce,ve){const s=r("RouterLink"),n=r("ExternalLinkIcon");return l(),h("div",null,[u,e("p",null,[p,o(s,{to:"/docs/firmware/state-monitor-esp32.html"},{default:i(()=>[f]),_:1}),m,o(s,{to:"/docs/firmware/state-controller-esp32.html"},{default:i(()=>[b]),_:1}),w]),g,S,x,y,k,e("p",null,[I,e("a",O,[C,o(n)]),v]),R,P,T,e("p",null,[A,e("a",M,[E,o(n)]),W,o(s,{to:"/docs/libraries/"},{default:i(()=>[H]),_:1})]),e("p",null,[B,o(s,{to:"/docs/firmware/state-monitor-esp32.html"},{default:i(()=>[L]),_:1}),X,o(s,{to:"/docs/firmware/state-controller-esp32.html"},{default:i(()=>[D]),_:1}),F]),N,e("p",null,[j,e("a",J,[V,o(n)]),U]),q,K,e("ul",null,[e("li",null,[o(s,{to:"/docs/hardware/input-devices/I2CRJ45.html"},{default:i(()=>[z]),_:1}),G])]),Q,e("ul",null,[e("li",null,[e("a",Y,[Z,o(n)]),$]),e("li",null,[e("a",ee,[te,o(n)]),oe]),e("li",null,[e("a",ne,[se,o(n)]),ie])]),e("p",null,[re,o(s,{to:"/docs/hardware/controllers/rack32.html"},{default:i(()=>[ae]),_:1}),le,e("a",he,[de,o(n)]),ce]),_e,ue,e("ul",null,[pe,e("li",null,[fe,e("a",me,[be,o(n)])]),e("li",null,[we,e("a",ge,[Se,o(n)])])]),xe,ye,ke,Ie])}var Pe=a(_,[["render",Oe],["__file","state-io-esp32.html.vue"]]);export{Pe as default};
