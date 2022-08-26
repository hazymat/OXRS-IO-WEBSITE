import{_ as i,r,o as s,c as o,a as e,b as d,e as a,d as n}from"./app.89d8ee4e.js";const h={},l=e("h1",{id:"getting-started-guide",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started-guide","aria-hidden":"true"},"#"),a(" Getting Started Guide")],-1),c=e("p",null,"A great adventure awaits those using the OXRS platform, and with the help of this guide you'll be able to pick your adventure.",-1),u={class:"custom-container tip"},p=e("p",{class:"custom-container-title"},"Notice",-1),f=a("These docs are work in progress, if you have any issues getting things setup drop us a message on the SuperHouse "),m={href:"https://discord.gg/H6bbrAtS",target:"_blank",rel:"noopener noreferrer"},_=a("Discord"),g=n(`<h2 id="choose-your-adventure" tabindex="-1"><a class="header-anchor" href="#choose-your-adventure" aria-hidden="true">#</a> Choose Your Adventure</h2><p>Pick Your</p><ul><li>IO options</li><li>Controller(s)</li><li>Display(s)</li><li>Cases --- rack mount or 3D printed?</li><li>Firmware, the basic flashing / updating guide</li></ul><h2 id="io-options" tabindex="-1"><a class="header-anchor" href="#io-options" aria-hidden="true">#</a> IO Options</h2><h2 id="controllers" tabindex="-1"><a class="header-anchor" href="#controllers" aria-hidden="true">#</a> Controllers</h2><h2 id="displays" tabindex="-1"><a class="header-anchor" href="#displays" aria-hidden="true">#</a> Displays</h2><h2 id="cases" tabindex="-1"><a class="header-anchor" href="#cases" aria-hidden="true">#</a> Cases</h2><h2 id="firmware" tabindex="-1"><a class="header-anchor" href="#firmware" aria-hidden="true">#</a> Firmware</h2><p><em>WIP - to be updated soon</em></p><p>For basic loading of firmware, it&#39;s recomended that if firmwware is already loaded to use OTA. otherwise it&#39;s recomended to use esptool.py or espflasher and with those 2 programs you can flash teh required bin file. for editing and uploading the raw firmware with arduino or platformIO check out the advanced guide</p><p>with esptool.py the cmd line is listed below: (this is an example for esp32)</p><p>The last item in the cmd is the name of the bin file to load.</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>esptool.py --chip esp32 --port &quot;COM9&quot; --baud 921600 --before default_reset --after hard_reset write_flash -z --flash_mode dio --flash_freq 40m --flash_size detect 0x10000 OXRS-SHA-StateMonitor-ESP32-FW.ino.esp32.bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13);function b(v,w){const t=r("ExternalLinkIcon");return s(),o("div",null,[l,c,e("div",u,[p,e("p",null,[f,e("a",m,[_,d(t)])])]),g])}var y=i(h,[["render",b],["__file","index.html.vue"]]);export{y as default};
