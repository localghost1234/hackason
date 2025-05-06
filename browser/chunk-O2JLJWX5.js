import{$b as h,Ab as t,Ac as U,Bb as n,Bc as N,Cb as T,Cc as Q,Gb as O,Hb as _,Ib as d,Ic as A,Jc as q,Mc as Y,Rb as e,Rc as G,Sa as S,Sb as P,Tb as p,Vb as V,Wb as R,Xb as $,Ya as o,Za as k,_ as F,ac as x,bc as L,gb as I,lb as m,oa as g,p as D,pa as u,sb as s,ub as w,wc as j,xc as B,zc as z}from"./chunk-X4ZQZ54I.js";var b=function(i){return i[i.State=0]="State",i[i.Transition=1]="Transition",i[i.Sequence=2]="Sequence",i[i.Group=3]="Group",i[i.Animate=4]="Animate",i[i.Keyframes=5]="Keyframes",i[i.Style=6]="Style",i[i.Trigger=7]="Trigger",i[i.Reference=8]="Reference",i[i.AnimateChild=9]="AnimateChild",i[i.AnimateRef=10]="AnimateRef",i[i.Query=11]="Query",i[i.Stagger=12]="Stagger",i}(b||{});function M(i,a){return{type:b.Trigger,name:i,definitions:a,options:{}}}function C(i,a=null){return{type:b.Animate,styles:a,timings:i}}function y(i){return{type:b.Style,styles:i,offset:null}}function v(i,a,r=null){return{type:b.Transition,expr:i,animation:a,options:r}}var E=class i{getPrograms(){return D([{id:"google",name:"Google VDP",logo:"/assets/logos/google.png",description:"Report vulnerabilities in Google services",public:!0,category:"Web",url:"https://bughunters.google.com",updatedAt:new Date("2023-10-01"),inScope:["*.google.com","*.youtube.com","Android apps (Play Store distribution only)"],outScope:["*.blogger.com","Google Cloud physical infrastructure","Social engineering"],rewards:{critical:15e3,high:8e3,medium:2e3,low:500},policyUrl:"https://google.com/security",launchDate:new Date("2020-05-01")},{id:"microsoft",name:"Microsoft Bounty Program",logo:"/assets/logos/microsoft.png",description:"Earn rewards for finding security vulnerabilities in Microsoft products and services. We welcome reports across our entire ecosystem.",public:!0,category:"Cloud, OS, Software",url:"https://www.microsoft.com/msrc/bounty",updatedAt:new Date("2023-09-15"),inScope:["*.microsoft.com","*.azure.com","Windows 10/11 (latest builds)","Microsoft 365 web applications","Xbox Live services"],outScope:["Microsoft Store apps (unless explicitly listed)","Third-party integrations","Social engineering/phishing","Physical security testing","DDoS vulnerabilities"],rewards:{critical:2e4,high:1e4,medium:2500,low:500},policyUrl:"https://www.microsoft.com/msrc/bounty-terms",launchDate:new Date("2013-06-15")}])}static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275prov=F({token:i,factory:i.\u0275fac,providedIn:"root"})}};function X(i,a){if(i&1){let r=O();t(0,"article",10),_("click",function(){let l=g(r).$implicit,f=d();return u(f.openModal(l))})("keyup.enter",function(){let l=g(r).$implicit,f=d();return u(f.openModal(l))}),e(1,`
      `),e(2,`
      `),t(3,"header",11),e(4,`
        `),t(5,"div",12),e(6,`
          `),t(7,"img",13),_("error",function(){let l=g(r).$implicit;return u(l.logo="assets/logos/default.png")}),n(),e(8,`
        `),n(),e(9,`
        `),t(10,"span",14),e(11),n(),e(12,`
      `),n(),e(13,`

      `),e(14,`
      `),t(15,"div",15),e(16,`
        `),t(17,"h3",16),e(18),n(),e(19,`
        `),t(20,"p",17),e(21),n(),e(22,`

        `),t(23,"div",18),e(24,`
          `),t(25,"span",19),e(26," "),t(27,"i",20),e(28,"\u{1F6E1}\uFE0F"),n(),e(29),n(),e(30,`
          `),t(31,"span",19),e(32," "),t(33,"i",20),e(34,"\u{1F4C5}"),n(),e(35),h(36,"date"),n(),e(37,`
        `),n(),e(38,`
      `),n(),e(39,`

      `),e(40,`
      `),t(41,"footer",21),e(42,`
        `),t(43,"a",22),e(44," View Program Details "),n(),e(45,`
      `),n(),e(46,`
    `),n()}if(i&2){let r=a.$implicit;o(7),s("src",r.logo||"assets/logos/default.png",S)("alt",r.name+" logo"),o(3),w("public",r.public),o(),p(`
          `,r.public?"PUBLIC":"PRIVATE",`
        `),o(7),P(r.name),o(3),p(`
          `,r.description||"No description provided",`
        `),o(8),p(" ",r.category||"Various"," "),o(6),p(" ",L(36,10,r.updatedAt,"MMM yyyy")," "),o(8),s("href",r.url,S)}}function J(i,a){if(i&1&&(t(0,"li"),e(1),n()),i&2){let r=a.$implicit;o(),P(r)}}function Z(i,a){if(i&1&&(t(0,"li"),e(1),n()),i&2){let r=a.$implicit;o(),P(r)}}function ee(i,a){i&1&&(t(0,"section",31),e(1,`
          `),t(2,"h3"),e(3,"Rewards"),n(),e(4,`
          `),t(5,"table",36),e(6,`
            `),e(7,`
          `),n(),e(8,`
        `),n())}function te(i,a){if(i&1&&(t(0,"tr"),e(1,`
            `),t(2,"td"),e(3,"Critical"),n(),e(4,`
            `),t(5,"td"),e(6),h(7,"number"),n(),e(8,`
          `),n()),i&2){let r=d(2);o(6),p("$",x(7,1,r.selectedProgram.rewards.critical),"")}}function ne(i,a){if(i&1&&(t(0,"tr"),e(1,`
            `),t(2,"td"),e(3,"High"),n(),e(4,`
            `),t(5,"td"),e(6),h(7,"number"),n(),e(8,`
          `),n()),i&2){let r=d(2);o(6),p("$",x(7,1,r.selectedProgram.rewards.high),"")}}function ie(i,a){if(i&1&&(t(0,"tr"),e(1,`
            `),t(2,"td"),e(3,"Medium"),n(),e(4,`
            `),t(5,"td"),e(6),h(7,"number"),n(),e(8,`
          `),n()),i&2){let r=d(2);o(6),p("$",x(7,1,r.selectedProgram.rewards.medium),"")}}function re(i,a){if(i&1&&(t(0,"tr"),e(1,`
            `),t(2,"td"),e(3,"Low"),n(),e(4,`
            `),t(5,"td"),e(6),h(7,"number"),n(),e(8,`
          `),n()),i&2){let r=d(2);o(6),p("$",x(7,1,r.selectedProgram.rewards.low),"")}}function oe(i,a){if(i&1){let r=O();t(0,"div",23),_("click",function(){g(r);let l=d();return u(l.closeModal())}),e(1,`
    `),e(2,`

    `),t(3,"div",24),_("click",function(l){return g(r),u(l.stopPropagation())}),e(4,`
      `),t(5,"button",25),_("click",function(){g(r);let l=d();return u(l.closeModal())}),e(6,"\xD7"),n(),e(7,`

      `),e(8,`
      `),t(9,"header",26),e(10,`
        `),t(11,"div",27),e(12,`
          `),T(13,"img",28),e(14,`
          `),t(15,"h2"),e(16),n(),e(17,`
          `),t(18,"span",14),e(19),n(),e(20,`
        `),n(),e(21,`
        `),t(22,"button",29),_("click",function(){g(r);let l=d();return u(l.closeModal())}),e(23,"\xD7"),n(),e(24,`
      `),n(),e(25,`

      `),e(26,`
      `),t(27,"div",30),e(28,`
        `),e(29,`
        `),t(30,"section",31),e(31,`
          `),t(32,"h3"),e(33,"Overview"),n(),e(34,`
          `),t(35,"p"),e(36),n(),e(37,`
        `),n(),e(38,`

        `),e(39,`
        `),t(40,"section",31),e(41,`
          `),t(42,"h3"),e(43,"Scope"),n(),e(44,`
          `),t(45,"div",32),e(46,`
            `),t(47,"div",33),e(48,`
              `),t(49,"h4"),e(50,"In-Scope"),n(),e(51,`
              `),t(52,"ul"),e(53,`
                `),m(54,J,2,1,"li",34),e(55,`
              `),n(),e(56,`
            `),n(),e(57,`
            `),t(58,"div",33),e(59,`
              `),t(60,"h4"),e(61,"Out-of-Scope"),n(),e(62,`
              `),t(63,"ul"),e(64,`
                `),m(65,Z,2,1,"li",34),e(66,`
              `),n(),e(67,`
            `),n(),e(68,`
          `),n(),e(69,`
        `),n(),e(70,`

        `),e(71,`
        `),m(72,ee,9,0,"section",35),e(73,`
      `),n(),e(74,`

      `),t(75,"table",36),e(76,`
        `),t(77,"thead"),e(78,`
          `),t(79,"tr"),e(80,`
            `),t(81,"th"),e(82,"Severity"),n(),e(83,`
            `),t(84,"th"),e(85,"Reward"),n(),e(86,`
          `),n(),e(87,`
        `),n(),e(88,`
        `),t(89,"tbody"),e(90,`
          `),m(91,te,9,3,"tr",37),e(92,`
          `),m(93,ne,9,3,"tr",37),e(94,`
          `),m(95,ie,9,3,"tr",37),e(96,`
          `),m(97,re,9,3,"tr",37),e(98,`
        `),n(),e(99,`
      `),n(),e(100,`

      `),e(101,`
      `),t(102,"footer",38),e(103,`
        `),t(104,"a",39),e(105," View Full Program Details "),n(),e(106,`
      `),n(),e(107,`
    `),n(),e(108,`
  `),n()}if(i&2){let r=d();s("@fadeInOut",void 0),o(3),s("@slideInOut",void 0),o(10),s("src",r.selectedProgram.logo,S)("alt",r.selectedProgram.name+" logo"),o(3),P(r.selectedProgram.name),o(2),w("public",r.selectedProgram.public),o(),p(`
            `,r.selectedProgram.public?"PUBLIC":"PRIVATE",`
          `),o(17),P(r.selectedProgram.description),o(18),s("ngForOf",r.selectedProgram.inScope),o(11),s("ngForOf",r.selectedProgram.outScope),o(7),s("ngIf",r.selectedProgram.rewards),o(19),s("ngIf",r.selectedProgram.rewards==null?null:r.selectedProgram.rewards.critical),o(2),s("ngIf",r.selectedProgram.rewards==null?null:r.selectedProgram.rewards.high),o(2),s("ngIf",r.selectedProgram.rewards==null?null:r.selectedProgram.rewards.medium),o(2),s("ngIf",r.selectedProgram.rewards==null?null:r.selectedProgram.rewards.low),o(7),s("href",r.selectedProgram.url,S)}}function ae(i,a){i&1&&(t(0,"div",40),e(1,"Loading programs..."),n())}var W=class i{constructor(a){this.programsService=a;this.searchQuery="";this.selectedProgram=null;this.programs$=this.programsService.getPrograms()}filterPrograms(a){return this.searchQuery?a.filter(r=>r.name.toLowerCase().includes(this.searchQuery.toLowerCase())||r.description.toLowerCase().includes(this.searchQuery.toLowerCase())):a}openModal(a){this.selectedProgram=a,document.body.style.overflow="hidden"}closeModal(){this.selectedProgram=null,document.body.style.overflow=""}static{this.\u0275fac=function(r){return new(r||i)(k(E))}}static{this.\u0275cmp=I({type:i,selectors:[["ng-component"]],decls:36,vars:8,consts:[[1,"programs-page"],[1,"programs-header"],[1,"search-container"],["type","text","placeholder","Search programs...",1,"search-input",3,"ngModelChange","ngModel"],[1,"search-button"],[1,"search-icon"],[1,"programs-grid"],["class","program-card","tabindex","0",3,"click","keyup.enter",4,"ngFor","ngForOf"],["class","modal-overlay",3,"click",4,"ngIf"],["class","loading",4,"ngIf"],["tabindex","0",1,"program-card",3,"click","keyup.enter"],[1,"card-header"],[1,"logo-container"],[1,"program-logo",3,"error","src","alt"],[1,"program-status"],[1,"card-body"],[1,"program-name"],[1,"program-description"],[1,"program-meta"],[1,"meta-item"],[1,"meta-icon"],[1,"card-footer"],["target","_blank","rel","noopener noreferrer",1,"program-link",3,"href"],[1,"modal-overlay",3,"click"],[1,"modal-content",3,"click"],[1,"modal-close",3,"click"],[1,"modal-header"],[1,"modal-header-content"],[1,"modal-logo",3,"src","alt"],["aria-label","Close modal",1,"modal-close",3,"click"],[1,"modal-body"],[1,"modal-section"],[1,"scope-container"],[1,"scope-column"],[4,"ngFor","ngForOf"],["class","modal-section",4,"ngIf"],[1,"rewards-table"],[4,"ngIf"],[1,"modal-footer"],["target","_blank",1,"program-button",3,"href"],[1,"loading"]],template:function(r,c){r&1&&(e(0,`
`),t(1,"div",0),e(2,`
  `),t(3,"section",1),e(4,`
    `),t(5,"h1"),e(6,"Vulnerability Programs"),n(),e(7,`
    `),t(8,"div",2),e(9,`
      `),t(10,"input",3),$("ngModelChange",function(f){return R(c.searchQuery,f)||(c.searchQuery=f),f}),n(),e(11,`
      `),t(12,"button",4),e(13,`
        `),t(14,"i",5),e(15,"\u{1F50D}"),n(),e(16,`
      `),n(),e(17,`
    `),n(),e(18,`
  `),n(),e(19,`

  `),e(20,`
  `),t(21,"div",6),e(22,`
    `),e(23,`
    `),m(24,X,47,13,"article",7),h(25,"async"),e(26,`
  `),n(),e(27,`

  `),e(28,`
  `),m(29,oe,109,17,"div",8),e(30,`

  `),e(31,`
  `),m(32,ae,2,0,"div",9),h(33,"async"),e(34,`
`),n(),e(35,`
`)),r&2&&(o(10),V("ngModel",c.searchQuery),o(14),s("ngForOf",x(25,4,c.programs$)),o(5),s("ngIf",c.selectedProgram),o(3),s("ngIf",x(33,6,c.programs$)===void 0))},dependencies:[Q,j,B,z,N,U,G,A,q,Y],styles:[".programs-header[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 2rem;padding:3rem 1rem}h1[_ngcontent-%COMP%]{font-size:2rem;color:#333;margin-bottom:1.5rem}.search-container[_ngcontent-%COMP%]{display:flex;max-width:600px;margin:0 auto}.search-input[_ngcontent-%COMP%]{flex:1;padding:.75rem 1rem;border:2px solid #e0e0e0;border-radius:8px 0 0 8px;font-size:1rem;outline:none}.search-input[_ngcontent-%COMP%]:focus{border-color:#4a6bff}.search-button[_ngcontent-%COMP%]{background:#4a6bff;color:#fff;border:none;padding:0 1.25rem;border-radius:0 8px 8px 0;cursor:pointer}.search-button[_ngcontent-%COMP%]:hover{background:#3a5bef}.programs-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.5rem;max-width:1200px;margin:0 auto;padding:0 1rem}.program-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px #00000014;transition:transform .3s ease,box-shadow .3s ease}.program-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 8px 16px #0000001f}.card-header[_ngcontent-%COMP%]{position:relative;height:32%;background:#f5f7fa}.card-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%;padding:1rem}.card-header[_ngcontent-%COMP%]   .program-logo[_ngcontent-%COMP%]{max-height:80px;max-width:80%;object-fit:contain}.card-body[_ngcontent-%COMP%]{padding:1.5rem}.program-name[_ngcontent-%COMP%]{font-size:1.25rem;margin:0 0 .75rem;color:#2c3e50}.program-description[_ngcontent-%COMP%]{color:#666;line-height:1.5;margin-bottom:1.25rem}.program-meta[_ngcontent-%COMP%]{display:flex;gap:1rem;font-size:.875rem;color:#7f8c8d}.meta-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem}.card-footer[_ngcontent-%COMP%]{padding:0 1.5rem 1.5rem}.program-link[_ngcontent-%COMP%]{display:block;text-align:center;padding:.75rem;background:#4a6bff;color:#fff;text-decoration:none;border-radius:8px;font-weight:500;transition:background .2s}.program-link[_ngcontent-%COMP%]:hover{background:#3a5bef}.loading[_ngcontent-%COMP%]{text-align:center;padding:2rem;color:#666}.modal-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#000000b3;z-index:1000;display:flex;justify-content:center;align-items:center}.modal-content[_ngcontent-%COMP%]{background:#fff;width:90%;max-width:800px;max-height:90vh;overflow-y:auto;border-radius:8px;position:relative}.modal-close[_ngcontent-%COMP%]{position:absolute;top:1rem;right:1rem;background:none;border:none;font-size:1.5rem;cursor:pointer;color:#666}.modal-close[_ngcontent-%COMP%]:hover{color:#333}.modal-header[_ngcontent-%COMP%]{padding:2rem 2rem 1rem;border-bottom:1px solid #eee;text-align:center}.modal-header[_ngcontent-%COMP%]   .modal-logo[_ngcontent-%COMP%]{max-height:60px;margin-bottom:1rem}.modal-body[_ngcontent-%COMP%]{padding:1.5rem 2rem}.modal-section[_ngcontent-%COMP%]{margin-bottom:2rem}.modal-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2c3e50;margin-bottom:1rem;padding-bottom:.5rem;border-bottom:2px solid #f0f0f0}.scope-container[_ngcontent-%COMP%]{display:flex;gap:2rem}.scope-container[_ngcontent-%COMP%]   .scope-column[_ngcontent-%COMP%]{flex:1}.scope-container[_ngcontent-%COMP%]   .scope-column[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#4a6bff;margin-bottom:.5rem}.scope-container[_ngcontent-%COMP%]   .scope-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.scope-container[_ngcontent-%COMP%]   .scope-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0;border-bottom:1px dashed #eee}.scope-container[_ngcontent-%COMP%]   .scope-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.rewards-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.rewards-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .rewards-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.75rem;text-align:left;border-bottom:1px solid #eee}.rewards-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#f9f9f9;font-weight:600}.modal-footer[_ngcontent-%COMP%]{padding:1.5rem 2rem;text-align:center;border-top:1px solid #eee}.program-status[_ngcontent-%COMP%]{position:absolute;top:1rem;left:1rem;padding:.25rem .75rem;border-radius:.8rem;font-size:.75rem;font-weight:700;text-transform:uppercase}.program-status.public[_ngcontent-%COMP%]{background:#4caf50;color:#fff}.program-status[_ngcontent-%COMP%]:not(.public){background:#ff9800;color:#fff}@media (max-width: 600px){.modal-header[_ngcontent-%COMP%]   .header-content-wrapper[_ngcontent-%COMP%]{flex-direction:column}.modal-header[_ngcontent-%COMP%]   .program-status[_ngcontent-%COMP%]{margin:0 auto .5rem 0}}"],data:{animation:[M("fadeInOut",[v(":enter",[y({opacity:0}),C("200ms ease-out",y({opacity:1}))]),v(":leave",[C("200ms ease-in",y({opacity:0}))])]),M("slideInOut",[v(":enter",[y({transform:"translateY(20px)"}),C("250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",y({transform:"translateY(0)"}))]),v(":leave",[C("200ms ease-in",y({transform:"translateY(20px)"}))])])]}})}};export{W as ProgramsComponent};
