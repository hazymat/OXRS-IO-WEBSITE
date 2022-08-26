import{_ as i,r,o as h,c as d,a as e,b as o,w as l,d as a,e as t}from"./app.89d8ee4e.js";var c="/images/pwm-controllers.jpg";const u={},_=a('<h1 id="pwm-controllers" tabindex="-1"><a class="header-anchor" href="#pwm-controllers" aria-hidden="true">#</a> PWM Controllers</h1><p class="maker">by <b>Austin&#39;s Creations</b></p><p><img src="'+c+'" alt="Austin&#39;s Creations PWM Controller"></p><p>WOAH, Look at all the LEDs</p><p>Lets be honest LEDs are everywhere and they look awesome. But most LED setups can be boring. Or maybe you dont want to spend the moeny on fully addressable LEDs becuase lets be honest in most cases they are overkill. Well that&#39;s where this collection of LED controllers comes in</p><p>These controllers are designed for controlling common anode 12-24v LED strips.</p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><ul><li>5 channel control or 16 channel (expanable) control</li><li>12-24V common andode led strip compatibility</li><li>30V 8A MOSFET per channel</li></ul><h2 id="choose-your-adventure" tabindex="-1"><a class="header-anchor" href="#choose-your-adventure" aria-hidden="true">#</a> Choose Your Adventure</h2><table><thead><tr><th style="text-align:left;">Controller</th><th style="text-align:left;">LED Features</th><th style="text-align:left;">MCU / Flash Size</th></tr></thead><tbody><tr><td style="text-align:left;">16CH I2C PWM Controller</td><td style="text-align:left;">16ch - I2C control and Expandble (requires extra controller)</td><td style="text-align:left;">ESP8266 or ESP32 - 4MB for both</td></tr><tr><td style="text-align:left;">LilyGO PWM Shield</td><td style="text-align:left;">5CH LED controller + I2C QWIIC</td><td style="text-align:left;">ESP32 4MB</td></tr><tr><td style="text-align:left;">D1 Mini PWM</td><td style="text-align:left;">5CH LED controller + I2C QWIIC</td><td style="text-align:left;">ESP8266 4MB</td></tr><tr><td style="text-align:left;">Athom Tasmota Wifi Bulb</td><td style="text-align:left;">5CH LED Controller running wifi only + OTA</td><td style="text-align:left;">ESP8285 2MB</td></tr></tbody></table>',10),p=t("All firmware can be found: "),f={href:"https://github.com/austinscreations/OXRS-AC-LEDController-ESP-FW",target:"_blank",rel:"noopener noreferrer"},b=t("Github"),m=t(" The firmware is now built using platformIO and github actions - all bin files can be found in the releases section for the various device configurations"),w=a('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>D1 Mini</p><ul><li>the D1 mini only requires one power input, either from 2.1mm jack or the terminal block. this will pwoer both the D1 Mini and your lights</li></ul><p>LilyGO</p><ul><li>The LilyGO can be powered from POE or it&#39;s on board usb c connection. The LED strip can be pwoered via teh 2.1mm jack or the terminal block. The sheild will <strong>NOT</strong> power the LilyGO</li></ul><p>Athom Tasmota Bulb</p><ul><li>the bulb only supports wifi operation and has no exposed serial terminal, while the firmware works; caution should be heeded as the device could brick and be difficult to repair</li></ul><p>Required to Run the 16Ch PWM Board</p>',8),g=t("Room8266"),y=t("Rack32"),x=e("h2",{id:"cases",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cases","aria-hidden":"true"},"#"),t(" Cases")],-1),C=e("p",null,"All these devices have 3d printable cases The 16ch cases, is designed to work with the room8266, and they link together with dovetails The LilyGO and D1 Mini case are designed with 2 lids, the main lid which is flat, allows everythign to be tucked away nicely, but with the use of a 3rd lid ontop of the main lid, you can now use cutouts that are on the main lid to hold I2C sensors. giving a seemless and adaptable case for holding parts together.",-1),k=t("Cases can be found on "),E={href:"https://github.com/austinscreations/PWM-Controllers/tree/main/3D%20Printable%20Cases",target:"_blank",rel:"noopener noreferrer"},L=t("Github"),v=e("h2",{id:"additional-resources",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#additional-resources","aria-hidden":"true"},"#"),t(" Additional Resources")],-1),M=t("Schematics and design files on "),D={href:"https://github.com/austinscreations/PWM-Controllers",target:"_blank",rel:"noopener noreferrer"},P=t("Github"),W=e("h2",{id:"where-to-buy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-buy","aria-hidden":"true"},"#"),t(" Where to Buy")],-1),A=t("Contact on Discord or "),I={href:"https://www.austinscreations.ca/",target:"_blank",rel:"noopener noreferrer"},O=t("Website"),T={class:"custom-container tip"},B=e("p",{class:"custom-container-title"},"Maker Info",-1),S=e("p",null,[e("strong",null,"Maker:"),t(" Austin's Creations")],-1),G=e("strong",null,"Link:",-1),R=t(),N={href:"https://www.austinscreations.ca/",target:"_blank",rel:"noopener noreferrer"},V=t("https://www.austinscreations.ca/");function F(H,j){const n=r("ExternalLinkIcon"),s=r("RouterLink");return h(),d("div",null,[_,e("p",null,[p,e("a",f,[b,o(n)]),m]),w,e("ul",null,[e("li",null,[o(s,{to:"/docs/hardware/controllers/room8266.html"},{default:l(()=>[g]),_:1})]),e("li",null,[o(s,{to:"/docs/hardware/controllers/rack32.html"},{default:l(()=>[y]),_:1})])]),x,C,e("p",null,[k,e("a",E,[L,o(n)])]),v,e("ul",null,[e("li",null,[M,e("a",D,[P,o(n)])])]),W,e("ul",null,[e("li",null,[A,e("a",I,[O,o(n)])])]),e("div",T,[B,S,e("p",null,[G,R,e("a",N,[V,o(n)])])])])}var Q=i(u,[["render",F],["__file","pwm-controllers.html.vue"]]);export{Q as default};
