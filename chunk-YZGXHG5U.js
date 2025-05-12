import{m as f,u as M,y as P}from"./chunk-USQTMXMT.js";import{Ab as t,Bb as n,Cb as m,Cc as _,Hb as d,Rb as e,Rc as u,Tb as x,Ub as h,Va as p,Ya as l,gb as g,lb as c,sb as s,xc as C}from"./chunk-X4ZQZ54I.js";function b(r,i){r&1&&(t(0,"div",23),e(1,`
        `),t(2,"p"),e(3,"Hint: What's wrong with how passwords are handled?"),n(),e(4,`
      `),n())}function y(r,i){r&1&&(t(0,"div",24),e(1,`
        `),t(2,"p"),e(3,"\u{1F6A8} Multiple issues:"),n(),e(4,`
        `),t(5,"ul"),e(6,`
          `),t(7,"li"),e(8,"Hardcoded credentials (never store passwords in code)"),n(),e(9,`
          `),t(10,"li"),e(11,"Plain text comparison (should use hashing)"),n(),e(12,`
          `),t(13,"li"),e(14,"No rate limiting (vulnerable to brute force)"),n(),e(15,`
        `),n(),e(16,`
        `),t(17,"p"),e(18,"This is why real systems use proper authentication!"),n(),e(19,`
      `),n())}var O=class r{constructor(){this.showAnswer=!1}ngAfterViewInit(){setTimeout(()=>{window.scrollTo(0,0),document.documentElement.style.scrollBehavior="auto",requestAnimationFrame(()=>{window.scrollTo(0,0),document.documentElement.style.scrollBehavior=""})},100)}handleKeyboardEvent(i){i.key==="ArrowDown"&&(this.scrollToNextSection(),i.preventDefault()),i.key==="ArrowUp"&&(this.scrollToPrevSection(),i.preventDefault())}scrollToNextSection(){let i=window.scrollY,o=window.innerHeight,a=Math.ceil(i/o)*o;window.scrollTo({top:a,behavior:"smooth"})}scrollToPrevSection(){let i=window.scrollY,o=window.innerHeight;if(i<o*.1){window.scrollTo({top:0,behavior:"smooth"});return}let a=Math.floor(i/o)*o;window.scrollTo({top:a,behavior:"smooth"})}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=g({type:r,selectors:[["app-discover"]],hostBindings:function(o,a){o&1&&d("keydown",function(v){return a.handleKeyboardEvent(v)},!1,p)},decls:151,vars:5,consts:[[1,"discover-page"],[1,"panel","hero-panel"],[1,"content"],["routerLink","/challenges"],[1,"image-container"],[1,"world-icon"],[1,"scroll-hint"],[1,"hint-text"],[1,"panel","everyday-panel"],[1,"cards-grid"],[1,"card-example"],[1,"icon"],[1,"panel","challenge-panel"],[1,"challenge-box"],["class","hint",4,"ngIf"],[1,"answer-toggle",3,"click"],["class","answer",4,"ngIf"],[1,"cta-button"],["routerLink","/tutorials",1,"button","learn-more"],[1,"panel","impact-panel"],[1,"impact-stats"],[1,"stat"],[1,"callout"],[1,"hint"],[1,"answer"]],template:function(o,a){o&1&&(t(0,"div",0),e(1,`
  `),e(2,`
  `),t(3,"section",1),e(4,`
    `),t(5,"div",2),e(6,`
      `),t(7,"h1"),e(8,"Security Is Not A Destination, "),m(9,"br"),e(10,"It's A Journey"),n(),e(11,`
      `),t(12,"p"),e(13,"Every click, every app, every connection -- security matters. "),m(14,"br"),e(15,"Start your journey today."),n(),e(16,`
      `),t(17,"button",3),e(18,"Get Started"),n(),e(19,`
    `),n(),e(20,`
    `),t(21,"div",4),e(22,`
      `),t(23,"div",5),e(24,"\u{1F310}"),n(),e(25,`
    `),n(),e(26,`
    `),t(27,"div",6),e(28,`
      `),t(29,"span",7),e(30,"Scroll to explore"),n(),e(31,`
    `),n(),e(32,`
  `),n(),e(33,`

  `),e(34,`
  `),t(35,"section",8),e(36,`
    `),t(37,"h2"),e(38,"Security In Your Daily Life"),n(),e(39,`
    `),t(40,"div",9),e(41,`
      `),t(42,"div",10),e(43,`
        `),t(44,"div",11),e(45,"\u{1F4F1}"),n(),e(46,`
        `),t(47,"h3"),e(48,"Mobile Apps"),n(),e(49,`
        `),t(50,"p"),e(51,"Permissions you grant, data they collect"),n(),e(52,`
      `),n(),e(53,`
      `),t(54,"div",10),e(55,`
        `),t(56,"div",11),e(57,"\u{1F4BB}"),n(),e(58,`
        `),t(59,"h3"),e(60,"Web Browsing"),n(),e(61,`
        `),t(62,"p"),e(63,"Cookies, trackers, and secure connections"),n(),e(64,`
      `),n(),e(65,`
      `),t(66,"div",10),e(67,`
        `),t(68,"div",11),e(69,"\u{1F3E0}"),n(),e(70,`
        `),t(71,"h3"),e(72,"Smart Homes"),n(),e(73,`
        `),t(74,"p"),e(75,"Cameras, assistants, and IoT security"),n(),e(76,`
      `),n(),e(77,`
    `),n(),e(78,`
  `),n(),e(79,`

  `),e(80,`
  `),t(81,"section",12),e(82,`
    `),t(83,"h2"),e(84,"Try Your First Security Challenge"),n(),e(85,`
    `),t(86,"div",13),e(87,`
      `),t(88,"p"),e(89,"Can you spot the vulnerability in this login code?"),n(),e(90,`
      `),t(91,"pre")(92,"code"),e(93),n()(),e(94,`
      `),c(95,b,5,0,"div",14),e(96,`
      `),t(97,"div",15),d("click",function(){return a.showAnswer=!a.showAnswer}),e(98),n(),e(99,`
      `),c(100,y,20,0,"div",16),e(101,`
    `),n(),e(102,`
    `),t(103,"div",17),e(104,`
      `),t(105,"button",18),e(106,"Learn More!"),n(),e(107,`
    `),n(),e(108,`
  `),n(),e(109,`

  `),e(110,`
  `),t(111,"section",19),e(112,`
    `),t(113,"h2"),e(114,"Why Your Skills Matter"),n(),e(115,`
    `),t(116,"div",20),e(117,`
      `),t(118,"div",21),e(119,`
        `),t(120,"h3"),e(121,"300%"),n(),e(122,`
        `),t(123,"p"),e(124,"Increase in cyber attacks since 2020"),n(),e(125,`
      `),n(),e(126,`
      `),t(127,"div",21),e(128,`
        `),t(129,"h3"),e(130,"0 Days"),n(),e(131,`
        `),t(132,"p"),e(133,"Between vulnerability discovery and exploitation"),n(),e(134,`
      `),n(),e(135,`
      `),t(136,"div",21),e(137,`
        `),t(138,"h3"),e(139,"3.5M"),n(),e(140,`
        `),t(141,"p"),e(142,"Unfilled cybersecurity jobs worldwide"),n(),e(143,`
      `),n(),e(144,`
    `),n(),e(145,`
    `),t(146,"p",22),e(147,"The digital world needs more people who understand security"),n(),e(148,`
  `),n(),e(149,`
`),n(),e(150,`
`)),o&2&&(l(93),h(`
  // Vulnerable login check
  if (username == "admin" && password == "password123") `,"{",`
    grantAdminAccess();
  `,"}",`
      `),l(2),s("ngIf",!a.showAnswer),l(3),x(`
        `,a.showAnswer?"Hide Answer":"Reveal Answer",`
      `),l(2),s("ngIf",a.showAnswer))},dependencies:[_,C,u,M,f,P],styles:['@charset "UTF-8";html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;margin:0;background:linear-gradient(135deg,#2a2a4f 10%,#303c80 50%,#1a1a2e);background-attachment:fixed}.shell.layout-wrapper[_ngcontent-%COMP%]{display:flex;height:100vh;width:100vw;overflow:hidden;position:relative}.shell.layout-wrapper[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;overflow:hidden;height:100vh}.shell.layout-wrapper[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   header.main-header[_ngcontent-%COMP%]{-webkit-box-shadow:0 1px 5px -3px rgba(173,171,173,.5);-moz-box-shadow:0 1px 5px -3px rgba(173,171,173,.5);box-shadow:0 1px 5px -3px #adabad80;position:sticky;top:0;z-index:1000;width:100%}.shell.layout-wrapper[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex:1;overflow:auto;z-index:500;background-attachment:fixed}.shell.layout-wrapper[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-content-container[_ngcontent-%COMP%]{height:100%}.shell.layout-wrapper.overlay[_ngcontent-%COMP%]:after{width:100%;height:100%;content:"";position:absolute;right:0;top:0;background-color:#393b3d66;z-index:200}.main-container[_ngcontent-%COMP%]{background:var(--surface-1)}.discover-page[_ngcontent-%COMP%]{scroll-snap-type:y mandatory;overflow-y:scroll;height:100vh;scroll-behavior:smooth;scroll-padding-top:0;scroll-snap-stop:always;-ms-overflow-style:none;scrollbar-width:none;-webkit-overflow-scrolling:touch}.discover-page[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.panel[_ngcontent-%COMP%]{height:100vh;width:100%;display:flex;flex-direction:column;justify-content:center;position:relative;scroll-snap-align:start;scroll-margin-top:0}.panel.hero-panel[_ngcontent-%COMP%]{background:linear-gradient(135deg,#1a1a2e,#16213e);text-align:center;display:flex;flex-direction:column;justify-content:space-between;padding:5vh 30%;position:relative;min-height:100vh}.panel.hero-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin-top:10%;max-width:1000px;flex:0 1 auto}.panel.hero-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-size:3em;margin-bottom:1em;line-height:1.2}.panel.hero-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:gray;font-size:1.5rem;margin-bottom:2rem}.panel.hero-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#4e54c8;color:#fff;border:none;padding:1rem 2.5rem;font-size:1.2rem;border-radius:50px;cursor:pointer;transition:all .3s ease}.panel.hero-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#3a3fa0;transform:translateY(-2px);box-shadow:0 5px 15px #0003}.panel.hero-panel[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{flex:0 0 30vh;display:flex;justify-content:center;align-items:center;padding:0 0 12%;width:100%;position:relative}.panel.hero-panel[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .world-icon[_ngcontent-%COMP%]{position:static;transform:none;font-size:clamp(1em,6vw,8em);animation:_ngcontent-%COMP%_float 5s ease-in-out infinite}.panel.hero-panel[_ngcontent-%COMP%]   .scroll-hint[_ngcontent-%COMP%]{position:absolute;bottom:40px;left:0;right:0;text-align:center;color:#fff;animation:_ngcontent-%COMP%_bounce 2s infinite;z-index:10;pointer-events:none}.panel.hero-panel[_ngcontent-%COMP%]   .scroll-hint[_ngcontent-%COMP%]   .hint-text[_ngcontent-%COMP%]{color:#fff}.panel.hero-panel[_ngcontent-%COMP%]   .scroll-hint[_ngcontent-%COMP%]:after{content:"\\2193";display:block;margin-top:8px;font-size:1.5rem}.panel.everyday-panel[_ngcontent-%COMP%]{background:linear-gradient(135deg,#272736c5,#1d3473);text-align:center}.panel.everyday-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:10rem;color:#0b0b16e3}.panel.everyday-panel[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:1200px;margin:0 auto}.panel.everyday-panel[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-example[_ngcontent-%COMP%]{background:#fbf2ffa2;padding:2.5rem;border-radius:12px;box-shadow:0 10px 30px #0000000d;transition:all .3s ease}.panel.everyday-panel[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-example[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 15px 40px #0000001a}.panel.everyday-panel[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-example[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:3.5rem;margin-bottom:1.5rem}.panel.everyday-panel[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-example[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:1rem;color:#0f3460}.panel.everyday-panel[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-example[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#424447;line-height:1.6}.panel.everyday-panel[_ngcontent-%COMP%]   .scroll-hint[_ngcontent-%COMP%]{color:#0009}.panel.challenge-panel[_ngcontent-%COMP%]{background:#171732;color:#fff;text-align:center;justify-content:center}.panel.challenge-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;padding:1rem 0 3rem;color:#fff}.panel.challenge-panel[_ngcontent-%COMP%]   .challenge-box[_ngcontent-%COMP%]{background:#16213e;padding:3rem;border-radius:12px;max-width:800px;margin:0 auto 4rem;box-shadow:0 10px 30px #0003}.panel.challenge-panel[_ngcontent-%COMP%]   .challenge-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#f5f5f5;padding:1em 0}.panel.challenge-panel[_ngcontent-%COMP%]   .challenge-box[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:#0f3460;padding:1.5rem;border-radius:8px;text-align:left;overflow-x:auto;font-family:Courier New,monospace;font-size:1.2rem;line-height:1.6}.panel.challenge-panel[_ngcontent-%COMP%]   .challenge-box[_ngcontent-%COMP%]   .answer-toggle[_ngcontent-%COMP%]{display:inline-block;margin-top:1rem;padding:.8rem 1.5rem;background:#4e54c833;border-radius:50px;cursor:pointer;transition:all .3s ease}.panel.challenge-panel[_ngcontent-%COMP%]   .challenge-box[_ngcontent-%COMP%]   .answer-toggle[_ngcontent-%COMP%]:hover{background:#4e54c866}.panel.challenge-panel[_ngcontent-%COMP%]   .challenge-box[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]{background:#0003;padding:1.5rem;border-left:4px solid #4e54c8;margin-top:1.5rem;text-align:left;border-radius:0 8px 8px 0}.panel.challenge-panel[_ngcontent-%COMP%]   .challenge-box[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:1.5rem;margin:1rem 0}.panel.challenge-panel[_ngcontent-%COMP%]   .challenge-box[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.8rem}.panel.challenge-panel[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]{margin-bottom:2rem}.panel.challenge-panel[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{justify-content:center;padding:1rem;width:20rem;font-size:1.1rem;border-radius:20px}.panel.impact-panel[_ngcontent-%COMP%]{background:linear-gradient(135deg,#4e54c8,#8f94fb);color:#fff;text-align:center}.panel.impact-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:3rem}.panel.impact-panel[_ngcontent-%COMP%]   .impact-stats[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:4rem;margin:0 auto 3rem;max-width:1000px}.panel.impact-panel[_ngcontent-%COMP%]   .impact-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:3.5rem;margin-bottom:.5rem;font-weight:700}.panel.impact-panel[_ngcontent-%COMP%]   .impact-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;opacity:.9}.panel.impact-panel[_ngcontent-%COMP%]   .callout[_ngcontent-%COMP%]{font-size:1.5rem;max-width:600px;margin:0 auto;font-weight:500;line-height:1.6}@keyframes _ngcontent-%COMP%_bounce{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-10px)}60%{transform:translateY(-5px)}}@keyframes _ngcontent-%COMP%_float{0%{transform:translateY(0)}50%{transform:translateY(-20px)}to{transform:translateY(0)}}@media (max-width: 992px){.panel[_ngcontent-%COMP%]{padding:0 5%}.panel.hero-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.8rem}.panel[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media (max-width: 768px){.panel[_ngcontent-%COMP%]{padding:0 2rem}.panel.hero-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.2rem}.panel.hero-panel[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .world-icon[_ngcontent-%COMP%]{font-size:6rem}.panel[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;max-width:500px}.panel.impact-panel[_ngcontent-%COMP%]   .impact-stats[_ngcontent-%COMP%]{flex-direction:column;gap:2rem}}']})}};export{O as DiscoverComponent};
