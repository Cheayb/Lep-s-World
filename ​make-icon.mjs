import fs from 'fs';
import { Resvg } from '@resvg/resvg-js';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#16a34a"/>
      <stop offset="100%" stop-color="#065f46"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#fde047" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#065f46" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1024" height="1024" rx="220" fill="url(#bg)"/>
  <rect width="1024" height="1024" rx="220" fill="url(#glow)"/>

  <!-- Gold Coin Top Right -->
  <circle cx="770" cy="240" r="105" fill="#facc15" stroke="#ca8a04" stroke-width="16"/>
  <circle cx="770" cy="240" r="72" fill="none" stroke="#fef08a" stroke-width="8"/>
  <rect x="756" y="195" width="28" height="90" rx="10" fill="#ca8a04"/>

  <!-- Leprechaun Hat -->
  <path d="M270 430 Q512 370 754 430 L700 220 Q512 180 324 220 Z" fill="#15803d" stroke="#052e16" stroke-width="18"/>
  <rect x="230" y="410" width="564" height="52" rx="26" fill="#22c55e" stroke="#052e16" stroke-width="18"/>
  <rect x="305" y="345" width="414" height="52" fill="#111827"/>
  <rect x="462" y="330" width="100" height="82" rx="14" fill="none" stroke="#facc15" stroke-width="18"/>

  <!-- Face & Beard -->
  <ellipse cx="512" cy="565" rx="215" ry="155" fill="#fed7aa" stroke="#052e16" stroke-width="18"/>
  <circle cx="435" cy="540" r="22" fill="#111827"/>
  <circle cx="589" cy="540" r="22" fill="#111827"/>
  <circle cx="428" cy="532" r="7" fill="#ffffff"/>
  <circle cx="582" cy="532" r="7" fill="#ffffff"/>
  <path d="M445 620 Q512 675 579 620" fill="none" stroke="#9a3412" stroke-width="14" stroke-linecap="round"/>

  <!-- Orange Beard -->
  <path d="M295 575 Q275 835 512 865 Q749 835 729 575 Q660 685 512 690 Q364 685 295 575 Z" fill="#ea580c" stroke="#052e16" stroke-width="18"/>
</svg>
`;

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1024 }
});
const pngData = resvg.render();
fs.writeFileSync('icon.png', pngData.asPng());
console.log('Generated icon.png successfully!');
