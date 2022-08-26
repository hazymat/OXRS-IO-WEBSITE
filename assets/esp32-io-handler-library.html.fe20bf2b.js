import{_ as c,r as a,o as l,c as d,a as n,b as t,w as p,d as o,e}from"./app.89d8ee4e.js";const r={},u=o('<h1 id="esp32-i-o-handler-library" tabindex="-1"><a class="header-anchor" href="#esp32-i-o-handler-library" aria-hidden="true">#</a> ESP32 I/O handler library</h1><p class="maker">by <b>SuperHouse Automation</b></p><blockquote><p>SKU: OXRS-IO-IOHandler-ESP32-LIB</p></blockquote><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>This library serves two functions, for input monitoring and output control. It can monitor buttons, switches, contacts, or any binary sensor, and report events back to the caller. It can also listen for binary commands and passes control events back to the caller.</p><p>Typically used with MCP23017 I2C I/O buffers to detect digital signals being pulled to GND (inputs) and to control relays (outputs).</p><hr><h3 id="how-does-it-work" tabindex="-1"><a class="header-anchor" href="#how-does-it-work" aria-hidden="true">#</a> How does it work?</h3><p>The library contains two classes which can be used independently or together, depending on what your firmware is trying to do.</p><h3 id="usm-input-h" tabindex="-1"><a class="header-anchor" href="#usm-input-h" aria-hidden="true">#</a> <code>USM_Input.h</code></h3><p>Monitors and maintains state for up to 16 inputs. Takes 16 bits of binary data and checks each value against an internal state machine to determine if any input events have occurred.</p><h3 id="usm-output-h" tabindex="-1"><a class="header-anchor" href="#usm-output-h" aria-hidden="true">#</a> <code>USM_Output.h</code></h3><p>Waits for commands and generates control events for up to 16 outputs. Keeps track of output state and handles interlocking and timers.</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><h3 id="usm-input-h-1" tabindex="-1"><a class="header-anchor" href="#usm-input-h-1" aria-hidden="true">#</a> <code>USM_Input.h</code></h3><p>Each of the 16 inputs can be configured as either <code>BUTTON</code>, <code>CONTACT</code>, <code>PRESS</code>, <code>ROTARY</code>, <code>SECURITY</code>, <code>SWITCH</code> or <code>TOGGLE</code>. Different events will be generated depending on the configured type, and the sequence of state changes.</p><p>Each of the 16 inputs can also be inverted, so events are generated on <code>LOW</code> -&gt; <code>HIGH</code> transitions instead of <code>HIGH</code> -&gt; <code>LOW</code>.</p><h4 id="rotary-encoders" tabindex="-1"><a class="header-anchor" href="#rotary-encoders" aria-hidden="true">#</a> Rotary Encoders</h4>',18),h=e("A pair of inputs can be set as "),m=n("code",null,"ROTARY",-1),k=e(" inputs, and connected to an "),v={href:"https://lastminuteengineers.com/rotary-encoder-arduino-tutorial/",target:"_blank",rel:"noopener noreferrer"},b=e("incremental rotary encoder"),f=e(". The library will decode the signals from the encoder and generate "),y=n("code",null,"LOW_EVENT",-1),g=e(" (clockwise) or "),_=n("code",null,"HIGH_EVENT",-1),x=e(" (counter clockwise) events, depending which way the encoder is turned."),w=o(`<table><thead><tr><th style="text-align:left;">Encoder Direction</th><th style="text-align:left;">I/O Event</th></tr></thead><tbody><tr><td style="text-align:left;">Clockwise</td><td style="text-align:left;"><code>LOW_EVENT</code></td></tr><tr><td style="text-align:left;">Counter Clockwise</td><td style="text-align:left;"><code>HIGH_EVENT</code></td></tr></tbody></table><h4 id="security-sensors" tabindex="-1"><a class="header-anchor" href="#security-sensors" aria-hidden="true">#</a> Security Sensors</h4><p>A set of 4 inputs can be set as <code>SECURITY</code> inputs, and connected to a security monitor module (<strong>Monimod</strong>). This module is capable of reading the end-of-line (EOL) resistance of your security sensor and detecting one of 5 possible states; <code>normal</code>, <code>alarm</code>, <code>tamper</code>, <code>short</code> or <code>fault</code>. The library will decode the 4 inputs from the <strong>Monimod</strong> and generate the appropriate event, ready for your firmware to act upon.</p><p>The table below shows the state of the 4 inputs from the <strong>Monimod</strong> for each sensor state, and what I/O event is generated as a result;</p><table><thead><tr><th style="text-align:left;">Sensor State</th><th style="text-align:left;">CH1</th><th style="text-align:left;">CH2</th><th style="text-align:left;">CH3</th><th style="text-align:left;">CH4</th><th style="text-align:left;">I/O Event</th></tr></thead><tbody><tr><td style="text-align:left;">Normal</td><td style="text-align:left;">OFF</td><td style="text-align:left;">ON</td><td style="text-align:left;">OFF</td><td style="text-align:left;">ON</td><td style="text-align:left;"><code>HIGH_EVENT</code></td></tr><tr><td style="text-align:left;">Alarm</td><td style="text-align:left;">OFF</td><td style="text-align:left;">ON</td><td style="text-align:left;">ON</td><td style="text-align:left;">ON</td><td style="text-align:left;"><code>LOW_EVENT</code></td></tr><tr><td style="text-align:left;">Tamper</td><td style="text-align:left;">ON</td><td style="text-align:left;">OFF</td><td style="text-align:left;">ON</td><td style="text-align:left;">ON</td><td style="text-align:left;"><code>TAMPER_EVENT</code></td></tr><tr><td style="text-align:left;">Short</td><td style="text-align:left;">OFF</td><td style="text-align:left;">ON</td><td style="text-align:left;">OFF</td><td style="text-align:left;">OFF</td><td style="text-align:left;"><code>SHORT_EVENT</code></td></tr><tr><td style="text-align:left;">Fault</td><td style="text-align:left;">?</td><td style="text-align:left;">?</td><td style="text-align:left;">?</td><td style="text-align:left;">?</td><td style="text-align:left;"><code>FAULT_EVENT</code></td></tr></tbody></table><h4 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h4><ul><li><code>setType(input, type)</code>: Set the input type</li><li><code>setInvert(input, invert)</code>: Invert input handling</li><li><code>setDisabled(input, disabled)</code>: Disable an input (stop processing events)</li></ul><h4 id="code-example" tabindex="-1"><a class="header-anchor" href="#code-example" aria-hidden="true">#</a> Code Example</h4><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;Adafruit_MCP23X17.h&gt;</span>        <span class="token comment">// For MCP23017 I/O buffers</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;OXRS_Input.h&gt;</span>               <span class="token comment">// For input handling</span></span>

<span class="token comment">// I/O buffers</span>
Adafruit_MCP23X17 mcp23017<span class="token punctuation">;</span>

<span class="token comment">// Input handlers</span>
OXRS_Input oxrsInput<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Initialise the MCP chip (assume at address 0x20)</span>
  mcp23017<span class="token punctuation">.</span><span class="token function">begin_I2C</span><span class="token punctuation">(</span><span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Set every pin to be INPUT with internal PULLUPs enabled</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">uint8_t</span> pin <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> pin <span class="token operator">&lt;</span> <span class="token number">16</span><span class="token punctuation">;</span> pin<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    mcp23017<span class="token punctuation">.</span><span class="token function">pinMode</span><span class="token punctuation">(</span>pin<span class="token punctuation">,</span> INPUT_PULLUP<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// Initialise the input handler</span>
  oxrsInput<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span>inputEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Configurate types and invert state here</span>
  <span class="token comment">//oxrsInput.setType(0, BUTTON);</span>
  <span class="token comment">//oxrsInput.setInvert(0, 1);</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Read the values for all 16 inputs on this MCP in one hit</span>
  <span class="token keyword">uint16_t</span> io_value <span class="token operator">=</span> mcp23017<span class="token punctuation">.</span><span class="token function">readGPIOAB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Check for any input events</span>
  oxrsInput<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> io_value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">inputEvent</span><span class="token punctuation">(</span><span class="token keyword">uint8_t</span> id<span class="token punctuation">,</span> <span class="token keyword">uint8_t</span> input<span class="token punctuation">,</span> <span class="token keyword">uint8_t</span> type<span class="token punctuation">,</span> <span class="token keyword">uint8_t</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Code to handle the event goes in here!</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usm-output-h-1" tabindex="-1"><a class="header-anchor" href="#usm-output-h-1" aria-hidden="true">#</a> <code>USM_Output.h</code></h3><p>Each of the 16 outputs can be configured as either <code>MOTOR</code>, <code>RELAY</code>, or <code>TIMER</code>. Different control signals will be generated depending on the configured type.</p><h4 id="interlocking" tabindex="-1"><a class="header-anchor" href="#interlocking" aria-hidden="true">#</a> Interlocking</h4><p>Interlocking two outputs allows them to control equipment such as roller blinds, garage doors, louvre roofing etc.</p><p>If two outputs are interlocked it means they can&#39;t be <code>on</code> at the same time. E.g. if output A and B are interlocked, and an <code>on</code> command is sent to output B while output A is <code>on</code>, output A will automatically turn <code>off</code> and after a short delay output B will then turn <code>on</code>.</p><h4 id="timers" tabindex="-1"><a class="header-anchor" href="#timers" aria-hidden="true">#</a> Timers</h4><p>Timers allow an output to automatically turn <code>off</code> a set number of seconds after being turned <code>on</code> (configurable but defaults to 60 seconds).</p><p>If another <code>on</code> command is sent while the timer is running, it will reset to zero and begin counting down again. If an <code>off</code> command is sent the timer will be cancelled and the output turned <code>off</code> immediately.</p><h4 id="functions-1" tabindex="-1"><a class="header-anchor" href="#functions-1" aria-hidden="true">#</a> Functions</h4><ul><li><code>setType(output, type)</code>: Set the output type</li><li><code>setInterlock(output, interlock)</code>: Interlock an output with another</li><li><code>setTimer(output, seconds)</code>: Set the timer duration (in seconds)</li><li><code>setDisabled(output, disabled)</code>: Disable an output (stop processing events)</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The only difference between <code>MOTOR</code> and <code>RELAY</code> outputs is the interlock delay. For <code>MOTOR</code> outputs the delay is 2000ms, for <code>RELAY</code> outputs it is only 500ms.</p></div><h4 id="code-example-1" tabindex="-1"><a class="header-anchor" href="#code-example-1" aria-hidden="true">#</a> Code Example</h4><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;Adafruit_MCP23X17.h&gt;</span>        <span class="token comment">// For MCP23017 I/O buffers</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;OXRS_Output.h&gt;</span>              <span class="token comment">// For output handling</span></span>

<span class="token comment">// I/O buffers</span>
Adafruit_MCP23X17 mcp23017<span class="token punctuation">;</span>

<span class="token comment">// Input handlers</span>
OXRS_Output oxrsOutput<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Initialise the MCP chip (assume at address 0x20)</span>
  mcp23017<span class="token punctuation">.</span><span class="token function">begin_I2C</span><span class="token punctuation">(</span><span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Set every pin to OUTPUT</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">uint8_t</span> pin <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> pin <span class="token operator">&lt;</span> <span class="token number">16</span><span class="token punctuation">;</span> pin<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    mcp23017<span class="token punctuation">.</span><span class="token function">pinMode</span><span class="token punctuation">(</span>pin<span class="token punctuation">,</span> OUTPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// Initialise the output handler</span>
  oxrsOutput<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span>outputEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Configurate types, interlocks and timers here</span>
  <span class="token comment">//oxrsOutput.setInterlock(0, 1);</span>
  <span class="token comment">//oxrsOutput.setInterlock(1, 0);</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Check for any output events</span>
  oxrsOutput<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Need a way to receive commands - e.g. serial input or MQTT messages</span>
  <span class="token comment">//oxrsOutput.handleCommand(0, output, RELAY_ON);</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">outputEvent</span><span class="token punctuation">(</span><span class="token keyword">uint8_t</span> id<span class="token punctuation">,</span> <span class="token keyword">uint8_t</span> output<span class="token punctuation">,</span> <span class="token keyword">uint8_t</span> type<span class="token punctuation">,</span> <span class="token keyword">uint8_t</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Code to handle the event goes in here!</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="downloads" tabindex="-1"><a class="header-anchor" href="#downloads" aria-hidden="true">#</a> Downloads</h2>`,23),O=e("Download the latest version of the firmware on "),I={href:"https://github.com/OXRS-IO/OXRS-IO-IOHandler-ESP32-LIB",target:"_blank",rel:"noopener noreferrer"},T=e("Github"),E=e("."),C=n("h2",{id:"supported-hardware",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#supported-hardware","aria-hidden":"true"},"#"),e(" Supported Hardware")],-1),S=n("p",null,"Designed to run on ESP32 based devices.",-1),N=e("Rack32"),R=n("hr",null,null,-1),P=n("h4",{id:"credits",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#credits","aria-hidden":"true"},"#"),e(" Credits")],-1),L={href:"https://oxrs.io/",target:"_blank",rel:"noopener noreferrer"},M=e("OXRS"),F=e(" Core Team"),H=n("hr",null,null,-1),A=n("h4",{id:"license",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#license","aria-hidden":"true"},"#"),e(" License")],-1),U=e("Found "),X={href:"https://github.com/OXRS-IO/OXRS-IO-IOHandler-ESP32-LIB/blob/main/LICENSE",target:"_blank",rel:"noopener noreferrer"},V=e("here"),B=e(".");function D(G,Y){const s=a("ExternalLinkIcon"),i=a("RouterLink");return l(),d("div",null,[u,n("p",null,[h,m,k,n("a",v,[b,t(s)]),f,y,g,_,x]),w,n("p",null,[O,n("a",I,[T,t(s)]),E]),C,S,n("ul",null,[n("li",null,[t(i,{to:"/docs/hardware/controllers/rack32.html"},{default:p(()=>[N]),_:1})])]),R,P,n("ul",null,[n("li",null,[n("a",L,[M,t(s)]),F])]),H,A,n("p",null,[U,n("a",X,[V,t(s)]),B])])}var q=c(r,[["render",D],["__file","esp32-io-handler-library.html.vue"]]);export{q as default};
