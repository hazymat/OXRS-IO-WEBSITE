import{_ as r}from"./security-circuit-diagram.036f790a.js";import{_ as c,r as d,o as p,c as u,a as e,b as n,w as a,d as l,e as t}from"./app.89d8ee4e.js";const h={},g=l('<h1 id="state-monitor-esp32" tabindex="-1"><a class="header-anchor" href="#state-monitor-esp32" aria-hidden="true">#</a> State Monitor ESP32</h1><p class="maker">by <b>Ben Jones</b></p><blockquote><p>SKU: OXRS-SHA-STATEMONITOR-ESP32-FW</p></blockquote><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>A state monitor for DIY home automation projects.</p><p>This system uses UTP cable (typically Cat-5e because it&#39;s cheap) to connect sensors to a central controller. The sensors can be buttons or switches mounted in wall plates for lighting control, reed sensors attached to doors or windows, PIR sensors for motion detection, or anything else that reports a digital state.</p><p>It also supports rotary encoders (using 2 data lines) to allow up/down control for media player volume, light dimming, etc. And security sensors with end-of-line (EOL) resistance detection (using 4 data lines).</p><hr><h3 id="how-does-it-work" tabindex="-1"><a class="header-anchor" href="#how-does-it-work" aria-hidden="true">#</a> How does it work?</h3><p>When an input state change is detected an MQTT message is published to the configured MQTT broker for further processing by your home automation system.</p><p>Each port can monitor up to 4 channels and are numbered:</p><table><thead><tr><th style="text-align:left;">Index</th><th style="text-align:left;">Port</th><th style="text-align:left;">Channel</th><th style="text-align:left;">Type</th><th style="text-align:left;">RJ45 Pin</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;">1</td><td style="text-align:left;">1</td><td style="text-align:left;">Input</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">1</td><td style="text-align:left;">2</td><td style="text-align:left;">Input</td><td style="text-align:left;">2</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;">1</td><td style="text-align:left;">3</td><td style="text-align:left;">Input</td><td style="text-align:left;">3</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;">1</td><td style="text-align:left;">4</td><td style="text-align:left;">Input</td><td style="text-align:left;">6</td></tr><tr><td style="text-align:left;">5</td><td style="text-align:left;">2</td><td style="text-align:left;">1</td><td style="text-align:left;">Input</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:left;">6</td><td style="text-align:left;">2</td><td style="text-align:left;">2</td><td style="text-align:left;">Input</td><td style="text-align:left;">2</td></tr><tr><td style="text-align:left;">7</td><td style="text-align:left;">2</td><td style="text-align:left;">3</td><td style="text-align:left;">Input</td><td style="text-align:left;">3</td></tr><tr><td style="text-align:left;">8</td><td style="text-align:left;">2</td><td style="text-align:left;">4</td><td style="text-align:left;">Input</td><td style="text-align:left;">6</td></tr><tr><td style="text-align:left;">...</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr></tbody></table>',12),f=t("The firmware is designed to run on hardware using MCP23017 I/O buffer chips via I2C, e.g. the "),y={href:"https://github.com/SuperHouse/LSC",target:"_blank",rel:"noopener noreferrer"},x=t("Light Switch Controller"),m=t("."),b=l('<p>A single I2C bus can support up to a maximum of 8x MCP23017 chips (addresses <code>0x20-0x27</code>). Therefore the maximum number of supported inputs is 128 (i.e. 8x MCP23017s * 16x I/O pins), or 32 ports.</p><h3 id="security-sensors" tabindex="-1"><a class="header-anchor" href="#security-sensors" aria-hidden="true">#</a> Security Sensors</h3><p>The new security monitor module (<strong>Monimod</strong>) allows you to connect security devices such as PIR sensors or door/window reed switches to your state monitor and provide a high level of security. Using all 4 inputs on a single RJ45 port the <strong>Monimod</strong> will report one of 5 states for a single security device. It achieves this by using two end-of-line (EOL) resistors connected to each security sensor.</p><p><img src="'+r+'" alt="State Monitor Security Sensor circuit diagram"></p><p>Resistor 1 (10K) is connected in series with the security alarm wiring, and resistor 2 (4K7) is connected across the alarm contact.</p>',5),_=t("The "),v=e("strong",null,"Monimod",-1),w=t(" connects between your sensor and state monitor hardware (e.g. the "),k={href:"https://github.com/SuperHouse/LSC",target:"_blank",rel:"noopener noreferrer"},I=t("LSC"),q=t(") and detects changes in voltage on the sensor cable. It translates the different voltage levels to binary signals which are sent to the state monitor via the 4 inputs, where the firmware will generate the necessary security events (see "),T=t("events"),S=t(")."),C=l(`<p><code>[Sensor] &lt;-----CAT5/6-----&gt; [Monimod] &lt;-----CAT5/6-----&gt; [LSC]</code></p><p>Currently a test version is being producted which is a single inline device, but plans are underway to produce a multi-port device (8 ports, 4-in 4-out) so multiple security sensors can be connected to your state monitor.</p><p>The <strong>Monimod</strong> will detect the following states for a security sensor wired up with EOL resistors;</p><table><thead><tr><th style="text-align:left;">State</th><th style="text-align:left;">LCD Display</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">Normal</td><td style="text-align:left;">Green</td><td style="text-align:left;">The sensor is in a safe state, e.g. no movement detected or door/window is closed</td></tr><tr><td style="text-align:left;">Alarm</td><td style="text-align:left;">Red</td><td style="text-align:left;">The sensor has been tripped, e.g. movement detected or door/window is opened</td></tr><tr><td style="text-align:left;">Tamper</td><td style="text-align:left;">Magenta (flashing)</td><td style="text-align:left;">The sensor wiring has been compromised (open circuited), e.g. a sensor cover has been removed or a cable has been cut</td></tr><tr><td style="text-align:left;">Short</td><td style="text-align:left;">Magenta (flashing)</td><td style="text-align:left;">The sensor wiring has been compromised (shorted), e.g. intentional attempt to bypass the sensor, or a nail/screw through the cable</td></tr><tr><td style="text-align:left;">Fault</td><td style="text-align:left;">Cyan (flashing)</td><td style="text-align:left;">The sensor has been unplugged or a system fault has been detected</td></tr></tbody></table><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>The firmware can be configured by publishing an MQTT message to this topic;</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[PREFIX/]conf/CLIENTID[/SUFFIX]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>where:</p><ul><li><code>PREFIX</code>: Optional topic prefix if required</li><li><code>CLIENTID</code>: Client id of device, defaults to <code>&lt;MACADDRESS&gt;</code></li><li><code>SUFFIX</code>: Optional topic suffix if required</li></ul><p>The message payload should be JSON and it&#39;s format is defined in a JSON schema document included in the adoption payload published here;</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[PREFIX/]stat/CLIENTID[/SUFFIX]/adopt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>See the <code>config</code> value in the <code>/adopt</code> payload.</p><h3 id="default-input-type" tabindex="-1"><a class="header-anchor" href="#default-input-type" aria-hidden="true">#</a> Default Input Type</h3>`,13),E=t("By default all inputs are initialised as type "),N=e("code",null,"switch",-1),P=t(". Individual inputs can then be configured as required ("),R=t("see below"),D=t("). However it is also possible to change this default. For example, if you are intending to use push buttons throughout your home, instead of setting individual config for each input, you can simply set the "),L=e("code",null,"defaultInputType",-1),A=t(" to "),M=e("code",null,"button",-1),O=t(" and be done with it."),F=l(`<table><thead><tr><th style="text-align:left;">Key</th><th style="text-align:left;">Mandatory</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>defaultInputType</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">Either <code>button</code>, <code>contact</code>, <code>press</code>, <code>rotary</code>, <code>security</code>, <code>switch</code> or <code>toggle</code></td></tr></tbody></table><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><p>To configure the default input type to be <code>button</code>;</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span> 
  <span class="token property">&quot;defaultInputType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;button&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can still override the default input type with specific configuration for individual inputs, see below.</p></div><h3 id="input-config" tabindex="-1"><a class="header-anchor" href="#input-config" aria-hidden="true">#</a> Input Config</h3><p>Each INPUT can be configured via the following properties;</p><table><thead><tr><th style="text-align:left;">Key</th><th style="text-align:left;">Mandatory</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>index</code></td><td style="text-align:left;">Mandatory</td><td style="text-align:left;">Index of the input to configure</td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">Either <code>button</code>, <code>contact</code>, <code>press</code>, <code>rotary</code>, <code>security</code>, <code>switch</code> or <code>toggle</code></td></tr><tr><td style="text-align:left;"><code>invert</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">Either <code>true</code> or <code>false</code></td></tr><tr><td style="text-align:left;"><code>disabled</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">Either <code>true</code> or <code>false</code></td></tr></tbody></table><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Inverting a normally-open (NO) button input will result in a constant stream of <code>hold</code> events!</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Disabling an input will stop any events being emitted!</p></div><h3 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h3><p>To configure input 4 to be a bi-stable switch, input 7 to be an inverted button, and input 8 to be a disabled contact sensor;</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span> 
  <span class="token property">&quot;inputs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;switch&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;invert&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
    <span class="token punctuation">{</span> <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;contact&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;disabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>A retained message will ensure the device auto-configures on startup.</p></div><h3 id="recommended-configurations" tabindex="-1"><a class="header-anchor" href="#recommended-configurations" aria-hidden="true">#</a> Recommended Configurations</h3><p>Below is a table showing possible connected devices and the supported input types. Check marks indicate the recommended configurations to ensure intended behavior.</p><table><thead><tr><th style="text-align:left;">Connected Device</th><th style="text-align:center;"><code>button</code></th><th style="text-align:center;"><code>contact</code></th><th style="text-align:center;"><code>press</code></th><th style="text-align:center;"><code>rotary</code></th><th style="text-align:center;"><code>security</code></th><th style="text-align:center;"><code>switch</code></th><th style="text-align:center;"><code>toggle</code></th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Bi-Stable Switch</strong></td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td></tr><tr><td style="text-align:left;"><strong>Door / Window Contact</strong></td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u274C</td></tr><tr><td style="text-align:left;"><strong>PIR</strong></td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u274C</td></tr><tr><td style="text-align:left;"><strong>Push Button</strong></td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u274C</td></tr><tr><td style="text-align:left;"><strong>Rotary Encoder</strong></td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u274C</td></tr></tbody></table><p>A rotary encoder requires two inputs, and a security sensor requires four inputs. You must configure each of the inputs connected to these devices the same, i.e. both inputs for a rotary encoder should be set to <code>rotary</code>, and all four inputs for a security sensor should be set to <code>security</code>. The status of the device is reported using the index of the last input.</p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><p>An input EVENT is reported to a topic of the form:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[PREFIX/]stat/CLIENTID[/SUFFIX]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>where;</p><ul><li><code>PREFIX</code>: Optional topic prefix if required</li><li><code>CLIENTID</code>: Client id of device, defaults to <code>&lt;MACADDRESS&gt;</code></li><li><code>SUFFIX</code>: Optional topic suffix if required</li></ul><p>The message payload is JSON and contains:</p><table><thead><tr><th style="text-align:left;">Key</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>port</code></td><td style="text-align:left;">Port this event occured on (1-32)</td></tr><tr><td style="text-align:left;"><code>channel</code></td><td style="text-align:left;">Channel this event occured on (1-4)</td></tr><tr><td style="text-align:left;"><code>index</code></td><td style="text-align:left;">Index of this event (1-128)</td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;">Event type (see below)</td></tr><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;">Event (see below)</td></tr></tbody></table><table><thead><tr><th style="text-align:left;">Event Type</th><th style="text-align:left;">Event</th></tr></thead><tbody><tr><td style="text-align:left;"><code>button</code></td><td style="text-align:left;"><code>single</code>, <code>double</code>, <code>triple</code>, <code>quad</code>, <code>penta</code>, or <code>hold</code></td></tr><tr><td style="text-align:left;"><code>contact</code></td><td style="text-align:left;"><code>open</code> or <code>closed</code></td></tr><tr><td style="text-align:left;"><code>press</code></td><td style="text-align:left;"><code>press</code></td></tr><tr><td style="text-align:left;"><code>rotary</code></td><td style="text-align:left;"><code>up</code> or <code>down</code></td></tr><tr><td style="text-align:left;"><code>security</code></td><td style="text-align:left;"><code>normal</code>, <code>alarm</code>, <code>tamper</code>, <code>short</code> or <code>fault</code></td></tr><tr><td style="text-align:left;"><code>switch</code></td><td style="text-align:left;"><code>on</code> or <code>off</code></td></tr><tr><td style="text-align:left;"><code>toggle</code></td><td style="text-align:left;"><code>toggle</code></td></tr></tbody></table><h3 id="examples-2" tabindex="-1"><a class="header-anchor" href="#examples-2" aria-hidden="true">#</a> Examples</h3><p>A contact opening on input 7;</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span> 
  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;channel&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;contact&quot;</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;open&quot;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A triple button click on input 4;</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span> 
  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;channel&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;triple&quot;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="index-calculator" tabindex="-1"><a class="header-anchor" href="#index-calculator" aria-hidden="true">#</a> Index Calculator</h2>`,32),j=e("h2",{id:"supported-hardware",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#supported-hardware","aria-hidden":"true"},"#"),t(" Supported Hardware")],-1),H=t("This firmware is compatible with the "),U={href:"https://github.com/SuperHouse/LSC",target:"_blank",rel:"noopener noreferrer"},X=t("Light Switch Controller"),B=t(" (LSC) and is designed to run on the "),V=t("RACK32"),J=t(" as part of the "),G={href:"https://oxrs.io",target:"_blank",rel:"noopener noreferrer"},K=t("OXRS"),W=t(" eco-system."),Q=l('<p>The LSC hardware provides 12V power down the cable, which can be used for powering sensors (e.g. PIRs), or illuminating LEDs.</p><p>The sensors or switches should pull one of 4 INPUT wires in the cable to GND to indicate that they have been activated.</p><p>The LSC hardware has physical pull up resistors to pull the INPUT wires high and detects when they are pulled low.</p><p>The RJ45 pinout for each port is;</p><table><thead><tr><th style="text-align:left;">PIN</th><th style="text-align:left;">DESCRIPTION</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;">INPUT 1</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">INPUT 2</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;">INPUT 3</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;">VIN</td></tr><tr><td style="text-align:left;">5</td><td style="text-align:left;">VIN</td></tr><tr><td style="text-align:left;">6</td><td style="text-align:left;">INPUT 4</td></tr><tr><td style="text-align:left;">7</td><td style="text-align:left;">GND</td></tr><tr><td style="text-align:left;">8</td><td style="text-align:left;">GND</td></tr></tbody></table><h2 id="further-information" tabindex="-1"><a class="header-anchor" href="#further-information" aria-hidden="true">#</a> Further Information</h2><h3 id="downloads" tabindex="-1"><a class="header-anchor" href="#downloads" aria-hidden="true">#</a> Downloads</h3>',7),Y=t("Download the "),z={href:"https://github.com/SuperHouse/OXRS-SHA-StateMonitor-ESP32-FW/releases",target:"_blank",rel:"noopener noreferrer"},Z=t("latest binary"),$=t(" of the firmware from GitHub."),tt=t("Download the "),et={href:"https://github.com/SuperHouse/OXRS-SHA-StateMonitor-ESP32-FW",target:"_blank",rel:"noopener noreferrer"},nt=t("source code"),st=t(" of the firmware from GitHub."),ot=e("h3",{id:"flash-binary",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flash-binary","aria-hidden":"true"},"#"),t(" Flash Binary")],-1),at=t("How to "),lt=t("flash the binary"),dt=t("."),it=e("h3",{id:"home-automation-integration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#home-automation-integration","aria-hidden":"true"},"#"),t(" Home Automation Integration")],-1),rt=e("p",null,"Below are some examples of how you could integrate with various home automation systems.",-1),ct={href:"https://www.home-assistant.io/",target:"_blank",rel:"noopener noreferrer"},pt=t("Home Assistant"),ut=t(" integration "),ht=t("examples"),gt=t("."),ft={href:"https://nodered.org/",target:"_blank",rel:"noopener noreferrer"},yt=t("Node-RED"),xt=t(" integration "),mt=t("examples"),bt=t("."),_t=e("h4",{id:"credits",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#credits","aria-hidden":"true"},"#"),t(" Credits")],-1),vt=e("li",null,[t("Jonathan Oxer "),e("a",{href:"mailto:jon@oxer.com.au"},"jon@oxer.com.au")],-1),wt=t("Ben Jones "),kt={href:"https://github.com/sumnerboy12",target:"_blank",rel:"noopener noreferrer"},It=t("https://github.com/sumnerboy12"),qt=t("Moin "),Tt={href:"https://github.com/moinmoin-sh",target:"_blank",rel:"noopener noreferrer"},St=t("https://github.com/moinmoin-sh"),Ct=e("h4",{id:"license",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#license","aria-hidden":"true"},"#"),t(" License")],-1),Et=e("p",null,[t("Copyright 2020-2022 SuperHouse Automation Pty Ltd "),e("a",{href:"www.superhouse.tv"},"www.superhouse.tv")],-1),Nt=e("p",null,'The software portion of this project is licensed under the Simplified BSD License. The "licence" folder within this project contains a copy of this license in plain text format.',-1);function Pt(Rt,Dt){const s=d("ExternalLinkIcon"),o=d("RouterLink"),i=d("IndexCalculator");return p(),u("div",null,[g,e("p",null,[f,e("a",y,[x,n(s)]),m]),b,e("p",null,[_,v,w,e("a",k,[I,n(s)]),q,n(o,{to:"/docs/firmware/state-monitor-esp32.html#events"},{default:a(()=>[T]),_:1}),S]),C,e("p",null,[E,N,P,n(o,{to:"/docs/firmware/state-monitor-esp32.html#input-config"},{default:a(()=>[R]),_:1}),D,L,A,M,O]),F,n(i),j,e("p",null,[H,e("a",U,[X,n(s)]),B,n(o,{to:"/docs/hardware/controllers/rack32.html"},{default:a(()=>[V]),_:1}),J,e("a",G,[K,n(s)]),W]),Q,e("p",null,[Y,e("a",z,[Z,n(s)]),$]),e("p",null,[tt,e("a",et,[nt,n(s)]),st]),ot,e("p",null,[at,n(o,{to:"/guides/getting-started.html#Firmware"},{default:a(()=>[lt]),_:1}),dt]),it,rt,e("p",null,[e("a",ct,[pt,n(s)]),ut,n(o,{to:"/guides/advanced/home_assistant.html"},{default:a(()=>[ht]),_:1}),gt]),e("p",null,[e("a",ft,[yt,n(s)]),xt,n(o,{to:"/guides/advanced/node_red.html"},{default:a(()=>[mt]),_:1}),bt]),_t,e("ul",null,[vt,e("li",null,[wt,e("a",kt,[It,n(s)])]),e("li",null,[qt,e("a",Tt,[St,n(s)])])]),Ct,Et,Nt])}var Mt=c(h,[["render",Pt],["__file","state-monitor-esp32.html.vue"]]);export{Mt as default};
