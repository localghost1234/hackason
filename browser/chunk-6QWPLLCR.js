import{$b as h,Ab as n,Ac as $,Bb as i,Bc as j,Cb as T,Cc as Q,Gb as M,Hb as _,Ib as d,Ic as q,Jc as N,Mc as W,Rb as e,Rc as G,Sa as P,Sb as b,Tb as p,Vb as V,Wb as R,Xb as A,Ya as o,Za as F,_ as k,ac as x,bc as B,gb as I,lb as m,oa as g,p as D,pa as u,sb as s,ub as O,wc as U,xc as z,zc as L}from"./chunk-X4ZQZ54I.js";var w=function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t}(w||{});function E(t,a){return{type:w.Trigger,name:t,definitions:a,options:{}}}function S(t,a=null){return{type:w.Animate,styles:a,timings:t}}function y(t){return{type:w.Style,styles:t,offset:null}}function C(t,a,r=null){return{type:w.Transition,expr:t,animation:a,options:r}}var v=class t{getPrograms(){return D([{id:"google",name:"Google VDP",logo:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",description:"Report vulnerabilities in Google services",public:!0,category:"Web",url:"https://bughunters.google.com",updatedAt:new Date("2023-10-01"),inScope:["*.google.com","*.youtube.com","Android apps (Play Store distribution only)"],outScope:["*.blogger.com","Google Cloud physical infrastructure","Social engineering"],rewards:{critical:15e3,high:8e3,medium:2e3,low:500},policyUrl:"https://google.com/security",launchDate:new Date("2020-05-01")},{id:"microsoft",name:"Microsoft Bounty Program",logo:"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b",description:"Earn rewards for finding security vulnerabilities in Microsoft products and services. We welcome reports across our entire ecosystem.",public:!0,category:"Cloud, OS, Software",url:"https://www.microsoft.com/msrc/bounty",updatedAt:new Date("2023-09-15"),inScope:["*.microsoft.com","*.azure.com","Windows 10/11 (latest builds)","Microsoft 365 web applications","Xbox Live services"],outScope:["Microsoft Store apps (unless explicitly listed)","Third-party integrations","Social engineering/phishing","Physical security testing","DDoS vulnerabilities"],rewards:{critical:2e4,high:1e4,medium:2500,low:500},policyUrl:"https://www.microsoft.com/msrc/bounty-terms",launchDate:new Date("2013-06-15")},{id:"apple",name:"Apple Security Bounty",logo:"https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?20230330",description:"Rewards for vulnerabilities in Apple operating systems, hardware, and services.",public:!0,category:"Mobile, OS, Hardware",url:"https://developer.apple.com/security-bounty",updatedAt:new Date("2023-11-01"),inScope:["iOS/macOS kernel vulnerabilities","iCloud web interfaces","Secure Enclave","Apple Pay implementation"],outScope:["Third-party apps on App Store","Beta/Pre-release software","Physical device attacks"],rewards:{critical:25e3,high:15e3,medium:5e3,low:1e3},policyUrl:"https://support.apple.com/security-bounty",launchDate:new Date("2016-08-01")},{id:"facebook",name:"Meta Bug Bounty",logo:"https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",description:"Rewards for security vulnerabilities affecting Facebook, Instagram, WhatsApp, and other Meta services.",public:!0,category:"Social Media",url:"https://www.facebook.com/whitehat",updatedAt:new Date("2023-10-15"),inScope:["facebook.com domains","Instagram Android/iOS apps","WhatsApp Web","Oculus Store payments"],outScope:["Third-party integrations","Social engineering","Theoretical vulnerabilities"],rewards:{critical:3e4,high:15e3,medium:3e3,low:500},policyUrl:"https://www.facebook.com/whitehat/bounty",launchDate:new Date("2011-07-01")},{id:"tesla",name:"Tesla Vehicle Security",logo:"https://www.tesla.com/themes/custom/tesla_frontend/assets/favicons/favicon-196x196.png",description:"Rewards for vulnerabilities affecting Tesla vehicles and energy products.",public:!0,category:"Automotive",url:"https://www.tesla.com/bugbounty",updatedAt:new Date("2023-09-20"),inScope:["Vehicle firmware (latest versions)","Tesla Mobile App","Charging infrastructure","Vehicle-to-Grid systems"],outScope:["Physical vehicle damage","Social engineering","Third-party charging stations"],rewards:{critical:5e4,high:2e4,medium:5e3,low:1e3},policyUrl:"https://www.tesla.com/legal/security",launchDate:new Date("2014-10-01")},{id:"uber",name:"Uber Bug Bounty",logo:"https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg",description:"Rewards for security vulnerabilities in Uber apps, services, and infrastructure.",public:!0,category:"Transportation",url:"https://hackerone.com/uber",updatedAt:new Date("2023-08-10"),inScope:["uber.com domains","Driver/Rider apps","Payment processing","Uber Eats restaurant portal"],outScope:["Uber-owned websites without sensitive data","Physical attacks on drivers","Rate limiting/DDoS"],rewards:{critical:2e4,high:1e4,medium:3e3,low:500},policyUrl:"https://www.uber.com/legal/security",launchDate:new Date("2016-05-01")},{id:"coinbase",name:"Coinbase Security Program",logo:"https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg",description:"Rewards for vulnerabilities affecting Coinbase cryptocurrency exchange and wallet services.",public:!0,category:"Blockchain",url:"https://hackerone.com/coinbase",updatedAt:new Date("2023-11-05"),inScope:["coinbase.com domains","Mobile wallet apps","Coinbase Pro API","USD Coin (USDC) smart contracts"],outScope:["Coinbase Commerce plugins","Social engineering","Blockchain protocol vulnerabilities"],rewards:{critical:5e4,high:25e3,medium:5e3,low:500},policyUrl:"https://www.coinbase.com/security",launchDate:new Date("2014-03-01")}])}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}};function J(t,a){t&1&&(n(0,"span",23),e(1,"...read more"),i())}function X(t,a){if(t&1){let r=M();n(0,"article",9),_("click",function(){let c=g(r).$implicit,f=d();return u(f.openModal(c))})("keyup.enter",function(){let c=g(r).$implicit,f=d();return u(f.openModal(c))}),e(1,`
      `),e(2,`
      `),n(3,"header",10),e(4,`
        `),n(5,"div",11),e(6,`
          `),n(7,"img",12),_("error",function(){let c=g(r).$implicit;return u(c.logo="images/default/no-image.png")}),i(),e(8,`
        `),i(),e(9,`
        `),n(10,"span",13),e(11),i(),e(12,`
      `),i(),e(13,`

      `),e(14,`
      `),n(15,"div",14),e(16,`
        `),n(17,"h3"),e(18),i(),e(19,`
        `),n(20,"div",15),e(21,`
          `),n(22,"p",16),e(23),m(24,J,2,0,"span",17),e(25,`
          `),i(),e(26,`
        `),i(),e(27,`
      `),i(),e(28,`

      `),e(29,`
      `),n(30,"footer",18),e(31,`
        `),n(32,"div",19),e(33,`
          `),n(34,"span",20),e(35," "),n(36,"i",21),e(37,"\u{1F6E1}\uFE0F"),i(),e(38),i(),e(39,`
          `),n(40,"span",20),e(41," "),n(42,"i",21),e(43,"\u{1F4C5}"),i(),e(44),h(45,"date"),i(),e(46,`
        `),i(),e(47,`
        `),n(48,"a",22),e(49," View Program Details "),i(),e(50,`
      `),i(),e(51,`
    `),i()}if(t&2){let r=a.$implicit,l=d();o(7),s("src",r.logo,P)("alt",r.name+" logo"),o(3),O("public",r.public),o(),p(`
          `,r.public?"PUBLIC":"PRIVATE",`
        `),o(7),b(r.name),o(5),p(`
            `,r.description||"No description provided",`
            `),o(),s("ngIf",l.isLongDescription(r.description)),o(14),p(" ",r.category||"Various"," "),o(6),p(" ",B(45,11,r.updatedAt,"MMM yyyy")," "),o(4),s("href",r.url,P)}}function Z(t,a){if(t&1&&(n(0,"li"),e(1),i()),t&2){let r=a.$implicit;o(),b(r)}}function ee(t,a){if(t&1&&(n(0,"li"),e(1),i()),t&2){let r=a.$implicit;o(),b(r)}}function te(t,a){if(t&1&&(n(0,"tr"),e(1,`
                `),n(2,"td"),e(3,"Critical"),i(),e(4,`
                `),n(5,"td"),e(6),h(7,"number"),i(),e(8,`
              `),i()),t&2){let r=d(3);o(6),p("$",x(7,1,r.selectedProgram.rewards.critical),"")}}function ne(t,a){if(t&1&&(n(0,"tr"),e(1,`
                `),n(2,"td"),e(3,"High"),i(),e(4,`
                `),n(5,"td"),e(6),h(7,"number"),i(),e(8,`
              `),i()),t&2){let r=d(3);o(6),p("$",x(7,1,r.selectedProgram.rewards.high),"")}}function ie(t,a){if(t&1&&(n(0,"tr"),e(1,`
                `),n(2,"td"),e(3,"Medium"),i(),e(4,`
                `),n(5,"td"),e(6),h(7,"number"),i(),e(8,`
              `),i()),t&2){let r=d(3);o(6),p("$",x(7,1,r.selectedProgram.rewards.medium),"")}}function re(t,a){if(t&1&&(n(0,"tr"),e(1,`
                `),n(2,"td"),e(3,"Low"),i(),e(4,`
                `),n(5,"td"),e(6),h(7,"number"),i(),e(8,`
              `),i()),t&2){let r=d(3);o(6),p("$",x(7,1,r.selectedProgram.rewards.low),"")}}function oe(t,a){if(t&1&&(n(0,"section",32),e(1,`
          `),n(2,"h3"),e(3,"Rewards"),i(),e(4,`

          `),n(5,"table",40),e(6,`
            `),n(7,"thead"),e(8,`
              `),n(9,"tr"),e(10,`
                `),n(11,"th"),e(12,"Severity"),i(),e(13,`
                `),n(14,"th"),e(15,"Reward"),i(),e(16,`
              `),i(),e(17,`
            `),i(),e(18,`
            `),n(19,"tbody"),e(20,`
              `),m(21,te,9,3,"tr",41),e(22,`
              `),m(23,ne,9,3,"tr",41),e(24,`
              `),m(25,ie,9,3,"tr",41),e(26,`
              `),m(27,re,9,3,"tr",41),e(28,`
            `),i(),e(29,`
          `),i(),e(30,`
        `),i()),t&2){let r=d(2);o(21),s("ngIf",r.selectedProgram.rewards==null?null:r.selectedProgram.rewards.critical),o(2),s("ngIf",r.selectedProgram.rewards==null?null:r.selectedProgram.rewards.high),o(2),s("ngIf",r.selectedProgram.rewards==null?null:r.selectedProgram.rewards.medium),o(2),s("ngIf",r.selectedProgram.rewards==null?null:r.selectedProgram.rewards.low)}}function ae(t,a){t&1&&(n(0,"div",42),e(1,"Loading programs..."),i())}function se(t,a){if(t&1){let r=M();n(0,"div",24),_("click",function(){g(r);let c=d();return u(c.closeModal())}),e(1,`
    `),e(2,`

    `),n(3,"div",25),_("click",function(c){return g(r),u(c.stopPropagation())}),e(4,`
      `),n(5,"button",26),_("click",function(){g(r);let c=d();return u(c.closeModal())}),e(6,"\xD7"),i(),e(7,`

      `),e(8,`
      `),n(9,"header",27),e(10,`
        `),n(11,"div",28),e(12,`
          `),T(13,"img",29),e(14,`
          `),n(15,"h2"),e(16),i(),e(17,`
          `),n(18,"span",13),e(19),i(),e(20,`
        `),i(),e(21,`
        `),n(22,"button",30),_("click",function(){g(r);let c=d();return u(c.closeModal())}),e(23,"\xD7"),i(),e(24,`
      `),i(),e(25,`

      `),e(26,`
      `),n(27,"div",31),e(28,`
        `),e(29,`
        `),n(30,"section",32),e(31,`
          `),n(32,"h3"),e(33,"Overview"),i(),e(34,`
          `),n(35,"p"),e(36),i(),e(37,`
        `),i(),e(38,`

        `),e(39,`
        `),n(40,"section",32),e(41,`
          `),n(42,"h3"),e(43,"Scope"),i(),e(44,`
          `),n(45,"div",33),e(46,`
            `),n(47,"div",34),e(48,`
              `),n(49,"h4"),e(50,"In-Scope"),i(),e(51,`
              `),n(52,"ul"),e(53,`
                `),m(54,Z,2,1,"li",35),e(55,`
              `),i(),e(56,`
            `),i(),e(57,`
            `),n(58,"div",34),e(59,`
              `),n(60,"h4"),e(61,"Out-of-Scope"),i(),e(62,`
              `),n(63,"ul"),e(64,`
                `),m(65,ee,2,1,"li",35),e(66,`
              `),i(),e(67,`
            `),i(),e(68,`
          `),i(),e(69,`
        `),i(),e(70,`

        `),e(71,`
        `),m(72,oe,31,4,"section",36),e(73,`

        `),e(74,`
        `),n(75,"footer",37),e(76,`
          `),n(77,"a",38),e(78," View Full Program Details "),i(),e(79,`
        `),i(),e(80,`
      `),i(),e(81,`
    `),i(),e(82,`

    `),e(83,`
    `),m(84,ae,2,0,"div",39),h(85,"async"),e(86,`
  `),i()}if(t&2){let r=d();s("@fadeInOut",void 0),o(3),s("@slideInOut",void 0),o(10),s("src",r.selectedProgram.logo,P)("alt",r.selectedProgram.name+" logo"),o(3),b(r.selectedProgram.name),o(2),O("public",r.selectedProgram.public),o(),p(`
            `,r.selectedProgram.public?"PUBLIC":"PRIVATE",`
          `),o(17),b(r.selectedProgram.description),o(18),s("ngForOf",r.selectedProgram.inScope),o(11),s("ngForOf",r.selectedProgram.outScope),o(7),s("ngIf",r.selectedProgram.rewards),o(5),s("href",r.selectedProgram.url,P),o(7),s("ngIf",x(85,14,r.programs$)===void 0)}}var Y=class t{constructor(a){this.programsService=a;this.searchQuery="";this.selectedProgram=null;this.programs$=this.programsService.getPrograms()}filterPrograms(a){return this.searchQuery?a.filter(r=>r.name.toLowerCase().includes(this.searchQuery.toLowerCase())||r.description.toLowerCase().includes(this.searchQuery.toLowerCase())):a}isLongDescription(a){return a.length>100}openModal(a){this.selectedProgram=a,document.body.style.overflow="hidden"}closeModal(){this.selectedProgram=null,document.body.style.overflow=""}static{this.\u0275fac=function(r){return new(r||t)(F(v))}}static{this.\u0275cmp=I({type:t,selectors:[["ng-component"]],decls:32,vars:5,consts:[[1,"programs-page"],[1,"programs-header"],[1,"search-container"],["type","text","placeholder","Search programs...",1,"search-input",3,"ngModelChange","ngModel"],[1,"search-button"],[1,"search-icon"],[1,"programs-grid"],["class","program-card","tabindex","0",3,"click","keyup.enter",4,"ngFor","ngForOf"],["class","modal-overlay",3,"click",4,"ngIf"],["tabindex","0",1,"program-card",3,"click","keyup.enter"],[1,"card-header"],[1,"logo-container"],[1,"program-logo",3,"error","src","alt"],[1,"program-status"],[1,"card-body"],[1,"program-description-container"],[1,"program-description"],["class","read-more",4,"ngIf"],[1,"card-footer"],[1,"program-meta"],[1,"meta-item"],[1,"meta-icon"],["target","_blank","rel","noopener noreferrer",1,"program-link",3,"href"],[1,"read-more"],[1,"modal-overlay",3,"click"],[1,"modal-content",3,"click"],[1,"modal-close",3,"click"],[1,"modal-header"],[1,"modal-header-content"],[1,"modal-logo",3,"src","alt"],["aria-label","Close modal",1,"modal-close",3,"click"],[1,"modal-body"],[1,"modal-section"],[1,"scope-container"],[1,"scope-column"],[4,"ngFor","ngForOf"],["class","modal-section",4,"ngIf"],[1,"modal-footer"],["target","_blank",1,"program-button",3,"href"],["class","loading",4,"ngIf"],[1,"rewards-table"],[4,"ngIf"],[1,"loading"]],template:function(r,l){r&1&&(e(0,`
`),n(1,"div",0),e(2,`
  `),n(3,"section",1),e(4,`
    `),n(5,"h1"),e(6,"Vulnerability Programs"),i(),e(7,`
    `),n(8,"div",2),e(9,`
      `),n(10,"input",3),A("ngModelChange",function(f){return R(l.searchQuery,f)||(l.searchQuery=f),f}),i(),e(11,`
      `),n(12,"button",4),e(13,`
        `),n(14,"i",5),e(15,"\u{1F50D}"),i(),e(16,`
      `),i(),e(17,`
    `),i(),e(18,`
  `),i(),e(19,`

  `),e(20,`
  `),n(21,"div",6),e(22,`
    `),e(23,`
    `),m(24,X,52,14,"article",7),h(25,"async"),e(26,`
  `),i(),e(27,`

  `),e(28,`
  `),m(29,se,87,16,"div",8),e(30,`
`),i(),e(31,`
`)),r&2&&(o(10),V("ngModel",l.searchQuery),o(14),s("ngForOf",x(25,3,l.programs$)),o(5),s("ngIf",l.selectedProgram))},dependencies:[Q,U,z,L,j,$,G,q,N,W],styles:['.programs-page[_ngcontent-%COMP%]{background:linear-gradient(135deg,#2a2a4f 10%,#303c80 50%,#1a1a2e);height:100vh}.programs-header[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 2rem;padding:3rem 1rem}h1[_ngcontent-%COMP%]{font-size:2rem;color:#fff;margin-bottom:1.5rem}.search-container[_ngcontent-%COMP%]{display:flex;max-width:600px;margin:0 auto}.search-input[_ngcontent-%COMP%]{flex:1;padding:.75rem 1rem;border:2px solid #e0e0e0;border-radius:8px 0 0 8px;font-size:1rem;outline:none}.search-input[_ngcontent-%COMP%]:focus{border-color:#4a6bff}.search-button[_ngcontent-%COMP%]{background:#4a6bff;color:#fff;border:none;padding:0 1.25rem;border-radius:0 8px 8px 0;cursor:pointer}.search-button[_ngcontent-%COMP%]:hover{background:#3a5bef}.programs-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:2rem;max-width:85vw;margin:0 auto}.program-card[_ngcontent-%COMP%]{width:auto;height:22em;display:flex;flex-direction:column;background:#fff;border-radius:.8rem;overflow:hidden;box-shadow:0 4px 12px #00000014;transition:transform .3s ease,box-shadow .3s ease}.program-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 8px 16px #0000001f}.card-header[_ngcontent-%COMP%]{position:relative;height:30%;background:#181552}.card-header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%;padding:1rem}.card-header[_ngcontent-%COMP%]   .program-logo[_ngcontent-%COMP%]{max-height:60%;max-width:80%}.card-body[_ngcontent-%COMP%]{flex:1;align-items:center;justify-content:center;padding:.6rem 1.25rem;overflow:hidden}.card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem;color:#2c3e50}.card-body[_ngcontent-%COMP%]   .program-description-container[_ngcontent-%COMP%]{position:relative;font-size:.85rem!important}.card-body[_ngcontent-%COMP%]   .program-description-container[_ngcontent-%COMP%]   .program-description[_ngcontent-%COMP%]{--max-lines: 3;display:-webkit-box;-webkit-line-clamp:var(--max-lines);-webkit-box-orient:vertical;overflow:hidden;line-height:1.2}.card-body[_ngcontent-%COMP%]   .program-description-container[_ngcontent-%COMP%]   .program-description[_ngcontent-%COMP%]:after{content:"";position:absolute;right:1;bottom:0;height:1rem;width:5rem;background:linear-gradient(to right,#fff0,#fff 80%);z-index:50}.card-body[_ngcontent-%COMP%]   .program-description-container[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;color:#4a6bff;text-decoration:underline;cursor:pointer;background:#fff;z-index:100}.card-body[_ngcontent-%COMP%]   .program-description-container[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%]:hover{text-decoration:none}.card-body[_ngcontent-%COMP%]   .program-description-container[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%]:not(:first-child){display:none}.card-footer[_ngcontent-%COMP%]{padding:0 1.5rem 1.5rem}.card-footer[_ngcontent-%COMP%]   .program-meta[_ngcontent-%COMP%]{display:flex;gap:.8rem;font-size:.8rem;color:#7f8c8d}.card-footer[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.2rem}.program-link[_ngcontent-%COMP%]{display:block;text-align:center;padding:.75rem;background:#4a6bff;color:#fff;text-decoration:none;border-radius:8px;font-weight:500;transition:background .2s}.program-link[_ngcontent-%COMP%]:hover{background:#3a5bef}.loading[_ngcontent-%COMP%]{text-align:center;padding:2rem;color:#666}.modal-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#000000b3;z-index:1000;display:flex;justify-content:center;align-items:center}.modal-content[_ngcontent-%COMP%]{background:#fff;width:min(90%,800px);max-height:min(90vh,800px);overflow-y:auto;border-radius:8px;position:relative}.modal-close[_ngcontent-%COMP%]{position:absolute;top:1rem;right:1rem;background:none;border:none;font-size:1.5rem;cursor:pointer;color:#666}.modal-close[_ngcontent-%COMP%]:hover{color:#333}.modal-header[_ngcontent-%COMP%]{padding:2rem 2rem 1rem;border-bottom:2px solid #d7d6d6;text-align:center}.modal-header[_ngcontent-%COMP%]   .modal-logo[_ngcontent-%COMP%]{max-height:60px;margin-bottom:1rem}.modal-body[_ngcontent-%COMP%]{padding:1.5rem 2rem}.modal-section[_ngcontent-%COMP%]{margin-bottom:2rem}.modal-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2c3e50;margin-bottom:1rem;padding-bottom:.5rem;border-bottom:1px solid #d7d6d6}.scope-container[_ngcontent-%COMP%]{display:flex;gap:2rem}.scope-container[_ngcontent-%COMP%]   .scope-column[_ngcontent-%COMP%]{flex:1}.scope-container[_ngcontent-%COMP%]   .scope-column[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#4a6bff;margin-bottom:.5rem}.scope-container[_ngcontent-%COMP%]   .scope-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.scope-container[_ngcontent-%COMP%]   .scope-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0;border-bottom:1px solid #d7d6d6}.scope-container[_ngcontent-%COMP%]   .scope-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.rewards-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.rewards-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .rewards-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.75rem;text-align:left;border-bottom:1px solid #d7d6d6}.rewards-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#f9f9f9;font-weight:600}.modal-footer[_ngcontent-%COMP%]{padding:1.5rem 2rem;text-align:center;border-top:1px solid #d7d6d6}.program-status[_ngcontent-%COMP%]{position:absolute;top:1rem;left:1rem;padding:.25rem .75rem;border-radius:.8rem;font-size:.75rem;font-weight:700;text-transform:uppercase}.program-status.public[_ngcontent-%COMP%]{background:#4caf50;color:#fff}.program-status[_ngcontent-%COMP%]:not(.public){background:#ff9800;color:#fff}@media (max-width: 600px){.programs-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media (max-width: 600px){.modal-header[_ngcontent-%COMP%]   .header-content-wrapper[_ngcontent-%COMP%]{flex-direction:column}.modal-header[_ngcontent-%COMP%]   .program-status[_ngcontent-%COMP%]{margin:0 auto .5rem 0}}'],data:{animation:[E("fadeInOut",[C(":enter",[y({opacity:0}),S("200ms ease-out",y({opacity:1}))]),C(":leave",[S("200ms ease-in",y({opacity:0}))])]),E("slideInOut",[C(":enter",[y({transform:"translateY(20px)"}),S("250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",y({transform:"translateY(0)"}))]),C(":leave",[S("200ms ease-in",y({transform:"translateY(20px)"}))])])]}})}};export{Y as ProgramsComponent};
