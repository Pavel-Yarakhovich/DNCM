import React from "react";
import "./waves.css";

export default () => (
<div class="waveWrapper waveAnimation">
  <div class="waveWrapperInner bgMiddle">
    <div class="wave waveMiddle" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')"}}></div>
  </div>
  <div class="waveWrapperInner bgBottom">
    <div class="wave waveBottom" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')"}}></div>
  </div>
</div>
)