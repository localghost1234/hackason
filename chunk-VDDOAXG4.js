import{m as p,u as m,y as x}from"./chunk-USQTMXMT.js";import{Ab as t,Bb as n,Cb as r,Cc as d,Hb as s,Rb as e,Rc as C,Va as c,gb as g}from"./chunk-X4ZQZ54I.js";var M=class l{constructor(){this.showAnswer=!1}ngAfterViewInit(){setTimeout(()=>{window.scrollTo(0,0),document.documentElement.style.scrollBehavior="auto",requestAnimationFrame(()=>{window.scrollTo(0,0),document.documentElement.style.scrollBehavior=""})},100)}handleKeyboardEvent(i){i.key==="ArrowDown"&&(this.scrollToNextSection(),i.preventDefault()),i.key==="ArrowUp"&&(this.scrollToPrevSection(),i.preventDefault())}scrollToNextSection(){let i=window.scrollY,o=window.innerHeight,a=Math.ceil(i/o)*o;window.scrollTo({top:a,behavior:"smooth"})}scrollToPrevSection(){let i=window.scrollY,o=window.innerHeight;if(i<o*.1){window.scrollTo({top:0,behavior:"smooth"});return}let a=Math.floor(i/o)*o;window.scrollTo({top:a,behavior:"smooth"})}static{this.\u0275fac=function(o){return new(o||l)}}static{this.\u0275cmp=g({type:l,selectors:[["app-events"]],hostBindings:function(o,a){o&1&&s("keydown",function(P){return a.handleKeyboardEvent(P)},!1,c)},decls:156,vars:0,consts:[[1,"events-page"],[1,"panel","hero-panel"],[1,"content"],["routerLink","/register"],[1,"image-container"],[1,"tournament-icon"],[1,"scroll-hint"],[1,"hint-text"],[1,"panel","details-panel"],[1,"cards-grid"],[1,"card-detail"],[1,"icon"],[1,"panel","prizes-panel"],[1,"prizes-grid"],[1,"prize-tier"],[1,"prize-amount"],[1,"prize-desc"],[1,"sponsors"],[1,"sponsor-logos"],[1,"sponsor-logo"]],template:function(o,a){o&1&&(t(0,"div",0),e(1,`
  `),e(2,`
  `),t(3,"section",1),e(4,`
    `),t(5,"div",2),e(6,`
      `),t(7,"h1"),e(8,"Cybersecurity Showdown:"),r(9,"br"),e(10,"Ciudad Obreg\xF3n"),n(),e(11,`
      `),t(12,"p"),e(13,"Join the ultimate ethical hacking tournament"),r(14,"br"),e(15,"Test your skills against the best in Sonora"),n(),e(16,`
      `),t(17,"button",3),e(18,"Register Now"),n(),e(19,`
    `),n(),e(20,`
    `),t(21,"div",4),e(22,`
      `),t(23,"div",5),e(24,"\u{1F3C6}"),n(),e(25,`
    `),n(),e(26,`
    `),t(27,"div",6),e(28,`
      `),t(29,"span",7),e(30,"Scroll for details"),n(),e(31,`
    `),n(),e(32,`
  `),n(),e(33,`

  `),e(34,`
  `),t(35,"section",8),e(36,`
    `),t(37,"h2"),e(38,"Tournament Details"),n(),e(39,`
    `),t(40,"div",9),e(41,`
      `),t(42,"div",10),e(43,`
        `),t(44,"div",11),e(45,"\u{1F4C5}"),n(),e(46,`
        `),t(47,"h3"),e(48,"Date & Time"),n(),e(49,`
        `),t(50,"p"),e(51,"15/11/2024"),r(52,"br"),e(53,"9:00 AM - 6:00 PM"),n(),e(54,`
      `),n(),e(55,`
      `),t(56,"div",10),e(57,`
        `),t(58,"div",11),e(59,"\u{1F4CD}"),n(),e(60,`
        `),t(61,"h3"),e(62,"Location"),n(),e(63,`
        `),t(64,"p"),e(65,"Itson -- Campus Nainari"),r(66,"br"),e(67,"Sal\xF3n de Eventos"),n(),e(68,`
      `),n(),e(69,`
      `),t(70,"div",10),e(71,`
        `),t(72,"div",11),e(73,"\u{1F3AF}"),n(),e(74,`
        `),t(75,"h3"),e(76,"Format"),n(),e(77,`
        `),t(78,"p"),e(79,"CTF Competition"),r(80,"br"),e(81,"Web App Testing"),r(82,"br"),e(83,"Live Challenges"),n(),e(84,`
      `),n(),e(85,`
    `),n(),e(86,`
  `),n(),e(87,`

  `),e(88,`
  `),t(89,"section",12),e(90,`
    `),t(91,"h2"),e(92,"Prizes & Sponsors"),n(),e(93,`
    `),t(94,"div",13),e(95,`
      `),t(96,"div",14),e(97,`
        `),t(98,"h3"),e(99,"1st Place"),n(),e(100,`
        `),t(101,"p",15),e(102,"$20,000 MXN"),n(),e(103,`
        `),t(104,"p",16),e(105,"+ Bug Bounty Swag Pack"),n(),e(106,`
        `),t(107,"p",16),e(108,"+ HackerOne Invite"),n(),e(109,`
      `),n(),e(110,`
      `),t(111,"div",14),e(112,`
        `),t(113,"h3"),e(114,"2nd Place"),n(),e(115,`
        `),t(116,"p",15),e(117,"$10,000 MXN"),n(),e(118,`
        `),t(119,"p",16),e(120,"+ Security Tools License"),n(),e(121,`
      `),n(),e(122,`
      `),t(123,"div",14),e(124,`
        `),t(125,"h3"),e(126,"3rd Place"),n(),e(127,`
        `),t(128,"p",15),e(129,"$5,000 MXN"),n(),e(130,`
        `),t(131,"p",16),e(132,"+ Training Voucher"),n(),e(133,`
      `),n(),e(134,`
    `),n(),e(135,`
    `),t(136,"div",17),e(137,`
      `),t(138,"h3"),e(139,"Sponsored By:"),n(),e(140,`
      `),t(141,"div",18),e(142,`
        `),t(143,"div",19),e(144,"HackerOne"),n(),e(145,`
        `),t(146,"div",19),e(147,"TecNM"),n(),e(148,`
        `),t(149,"div",19),e(150,"SonoraSec"),n(),e(151,`
      `),n(),e(152,`
    `),n(),e(153,`
  `),n(),e(154,`
`),n(),e(155,`
`))},dependencies:[d,C,m,p,x],styles:['html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;margin:0;background:linear-gradient(135deg,#2a2a4f 10%,#303c80 50%,#1a1a2e);background-attachment:fixed}.shell.layout-wrapper[_ngcontent-%COMP%]{display:flex;height:100vh;width:100vw;overflow:hidden;position:relative}.shell.layout-wrapper[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;overflow:hidden;height:100vh}.shell.layout-wrapper[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   header.main-header[_ngcontent-%COMP%]{-webkit-box-shadow:0 1px 5px -3px rgba(173,171,173,.5);-moz-box-shadow:0 1px 5px -3px rgba(173,171,173,.5);box-shadow:0 1px 5px -3px #adabad80;position:sticky;top:0;z-index:1000;width:100%}.shell.layout-wrapper[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex:1;overflow:auto;z-index:500;background-attachment:fixed}.shell.layout-wrapper[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-content-container[_ngcontent-%COMP%]{height:100%}.shell.layout-wrapper.overlay[_ngcontent-%COMP%]:after{width:100%;height:100%;content:"";position:absolute;right:0;top:0;background-color:#393b3d66;z-index:200}.main-container[_ngcontent-%COMP%]{background:var(--surface-1)}.events-page[_ngcontent-%COMP%]{font-family:Segoe UI,Roboto,sans-serif;height:100vh;scroll-snap-type:y mandatory;overflow-y:scroll;scroll-behavior:smooth;scroll-snap-stop:always;-webkit-overflow-scrolling:touch}.events-page[_ngcontent-%COMP%], .events-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:not(.card-detail):not(.card-detail *){color:#fff}.events-page[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{height:100vh;scroll-snap-align:start;position:relative}.events-page[_ngcontent-%COMP%]   .hero-panel[_ngcontent-%COMP%]{background:linear-gradient(135deg,#1a1a2e,#4e2255);text-align:center;padding:5%;position:relative;overflow:hidden}.events-page[_ngcontent-%COMP%]   .hero-panel[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle,rgba(255,255,255,.1) 0%,transparent 70%);animation:_ngcontent-%COMP%_rotate 20s linear infinite}.events-page[_ngcontent-%COMP%]   .hero-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:relative;z-index:2}.events-page[_ngcontent-%COMP%]   .hero-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(2rem,5vw,4rem);margin-bottom:1.5rem;text-shadow:0 2px 10px rgba(0,0,0,.3)}.events-page[_ngcontent-%COMP%]   .hero-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:clamp(1rem,2vw,1.5rem);margin-bottom:2.5rem;opacity:.9}.events-page[_ngcontent-%COMP%]   .hero-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:linear-gradient(to right,#6a11cb,#2575fc);color:#fff;border:none;padding:1rem 3rem;font-size:1.1rem;border-radius:50px;cursor:pointer;transition:all .3s ease;box-shadow:0 4px 15px #0003}.events-page[_ngcontent-%COMP%]   .hero-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transform:translateY(-3px);box-shadow:0 7px 20px #0000004d}.events-page[_ngcontent-%COMP%]   .hero-panel[_ngcontent-%COMP%]   .tournament-icon[_ngcontent-%COMP%]{font-size:clamp(4rem,15vw,10rem);animation:_ngcontent-%COMP%_pulse 2s ease-in-out infinite;margin:2rem 0;text-shadow:0 0 20px rgba(255,215,0,.5)}.events-page[_ngcontent-%COMP%]   .details-panel[_ngcontent-%COMP%]{background:linear-gradient(135deg,#272736,#2d1d73);padding:7%}.events-page[_ngcontent-%COMP%]   .details-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;text-align:center;margin-bottom:3rem;position:relative}.events-page[_ngcontent-%COMP%]   .details-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after{content:"";display:block;width:100px;height:4px;background:linear-gradient(to right,#6a11cb,#2575fc);margin:1rem auto 0;border-radius:2px}.events-page[_ngcontent-%COMP%]   .details-panel[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;max-width:1200px;margin:0 auto}.events-page[_ngcontent-%COMP%]   .details-panel[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-detail[_ngcontent-%COMP%]{background:#fffffff2;padding:2.5rem;border-radius:16px;box-shadow:0 10px 30px #0000001a;transition:all .3s ease;text-align:center}.events-page[_ngcontent-%COMP%]   .details-panel[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-detail[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 15px 40px #0003}.events-page[_ngcontent-%COMP%]   .details-panel[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-detail[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:3.5rem;margin-bottom:1.5rem;color:#6a11cb}.events-page[_ngcontent-%COMP%]   .details-panel[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d1d73;font-size:1.5rem;margin-bottom:1rem}.events-page[_ngcontent-%COMP%]   .details-panel[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#555;line-height:1.6;font-size:1.1rem}.events-page[_ngcontent-%COMP%]   .prizes-panel[_ngcontent-%COMP%]{background:linear-gradient(135deg,#4e54c8,#8f94fb);padding:7%}.events-page[_ngcontent-%COMP%]   .prizes-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;text-align:center;margin-bottom:3rem;position:relative}.events-page[_ngcontent-%COMP%]   .prizes-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after{content:"";display:block;width:100px;height:4px;background:linear-gradient(to right,#6a11cb,#2575fc);margin:1rem auto 0;border-radius:2px}.events-page[_ngcontent-%COMP%]   .prizes-panel[_ngcontent-%COMP%]   .prizes-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;max-width:1200px;margin:0 auto 4rem}.events-page[_ngcontent-%COMP%]   .prizes-panel[_ngcontent-%COMP%]   .prizes-grid[_ngcontent-%COMP%]   .prize-tier[_ngcontent-%COMP%]{background:#fffffff2;padding:2.5rem;border-radius:16px;box-shadow:0 10px 30px #0000001a;text-align:center;transition:all .3s ease}.events-page[_ngcontent-%COMP%]   .prizes-panel[_ngcontent-%COMP%]   .prizes-grid[_ngcontent-%COMP%]   .prize-tier[_ngcontent-%COMP%]:hover{transform:scale(1.03)}.events-page[_ngcontent-%COMP%]   .prizes-panel[_ngcontent-%COMP%]   .prizes-grid[_ngcontent-%COMP%]   .prize-tier[_ngcontent-%COMP%]:nth-child(1){border-top:5px solid gold}.events-page[_ngcontent-%COMP%]   .prizes-panel[_ngcontent-%COMP%]   .prizes-grid[_ngcontent-%COMP%]   .prize-tier[_ngcontent-%COMP%]:nth-child(2){border-top:5px solid silver}.events-page[_ngcontent-%COMP%]   .prizes-panel[_ngcontent-%COMP%]   .prizes-grid[_ngcontent-%COMP%]   .prize-tier[_ngcontent-%COMP%]:nth-child(3){border-top:5px solid #cd7f32}.events-page[_ngcontent-%COMP%]   .prizes-panel[_ngcontent-%COMP%]   .prizes-grid[_ngcontent-%COMP%]   .prize-tier[_ngcontent-%COMP%]   .prize-amount[_ngcontent-%COMP%]{font-size:2.5rem;background:linear-gradient(to right,#6a11cb,#2575fc);-webkit-background-clip:text;background-clip:text;color:transparent;margin:1rem 0}.events-page[_ngcontent-%COMP%]   .prizes-panel[_ngcontent-%COMP%]   .sponsor-logos[_ngcontent-%COMP%]   .sponsor-logo[_ngcontent-%COMP%]{transition:all .3s ease}.events-page[_ngcontent-%COMP%]   .prizes-panel[_ngcontent-%COMP%]   .sponsor-logos[_ngcontent-%COMP%]   .sponsor-logo[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 5px 15px #0000001a}@keyframes _ngcontent-%COMP%_pulse{0%,to{transform:scale(1)}50%{transform:scale(1.1)}}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media (max-width: 768px){.events-page[_ngcontent-%COMP%]   .hero-panel[_ngcontent-%COMP%]{padding:0 1rem}.events-page[_ngcontent-%COMP%]   .details-panel[_ngcontent-%COMP%], .events-page[_ngcontent-%COMP%]   .prizes-panel[_ngcontent-%COMP%]{padding:3rem 1rem}.events-page[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%], .events-page[_ngcontent-%COMP%]   .prizes-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}']})}};export{M as EventsComponent};
