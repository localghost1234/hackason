import{$b as E,Ab as i,Bb as n,Cc as F,Gb as P,Hb as w,Jc as A,Mc as D,Oc as $,Pc as z,Qc as B,Rb as t,Rc as N,Sa as f,Sb as m,Tb as b,Vb as y,Wb as x,Xb as v,Ya as o,Za as O,_,ac as k,gb as T,lb as d,oa as S,p as C,pa as M,sb as s,t as g,ub as h,wc as I,zc as j}from"./chunk-X4ZQZ54I.js";var p=class r{constructor(){this.mockTutorials=[{id:"1",title:"Metasploit Framework Crash Course",url:"https://youtu.be/abc123",thumbnail:"https://img.youtube.com/vi/abc123/mqdefault.jpg",duration:"15:22",difficulty:"Beginner",tech:"Metasploit",category:"Exploitation",description:"Learn basic Metasploit modules",datePosted:new Date("2023-09-10")},{id:"2",title:"XSS for Beginners",url:"https://youtu.be/def456",thumbnail:"https://img.youtube.com/vi/def456/mqdefault.jpg",duration:"10:05",difficulty:"Beginner",tech:"Burp Suite",category:"XSS",description:"Cross-site scripting fundamentals",datePosted:new Date("2023-10-01")},{id:"3",title:"Wi-Fi Hacking with Aircrack-ng",url:"https://youtu.be/jkl012",thumbnail:"https://img.youtube.com/vi/jkl012/mqdefault.jpg",duration:"18:30",difficulty:"Medium",tech:"Aircrack-ng",category:"Wireless",description:"Crack WPA2 passwords using Aircrack-ng",datePosted:new Date("2023-11-05")},{id:"4",title:"Advanced SQL Injection with SQLmap",url:"https://youtu.be/mno345",thumbnail:"https://img.youtube.com/vi/mno345/mqdefault.jpg",duration:"25:12",difficulty:"Advanced",tech:"SQLmap",category:"Injection",description:"Automate SQLi attacks with SQLmap",datePosted:new Date("2023-11-20")},{id:"5",title:"Reverse Engineering Malware with Ghidra",url:"https://youtu.be/pqr678",thumbnail:"https://img.youtube.com/vi/pqr678/mqdefault.jpg",duration:"30:50",difficulty:"Advanced",tech:"Ghidra",category:"Reverse Engineering",description:"Decompile and analyze malware samples",datePosted:new Date("2023-12-10")},{id:"6",title:"OSINT: Find Hidden Data with Maltego",url:"https://youtu.be/stu901",thumbnail:"https://img.youtube.com/vi/stu901/mqdefault.jpg",duration:"12:15",difficulty:"Beginner",tech:"Other",category:"OSINT",description:"Map relationships using open-source intelligence",datePosted:new Date("2024-01-05")}]}getTutorials(){return C(this.mockTutorials)}getCategories(){return[...new Set(this.mockTutorials.map(a=>a.category))]}getTechnologies(){return[...new Set(this.mockTutorials.map(a=>a.tech))]}static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275prov=_({token:r,factory:r.\u0275fac,providedIn:"root"})}};function Q(r,a){if(r&1&&(i(0,"option",9),t(1),n()),r&2){let e=a.$implicit;s("value",e),o(),m(e)}}function V(r,a){if(r&1&&(i(0,"option",9),t(1),n()),r&2){let e=a.$implicit;s("value",e),o(),m(e)}}function H(r,a){if(r&1){let e=P();i(0,"article",10),t(1,`
      `),i(2,"div",11),t(3,`
        `),i(4,"img",12),w("error",function(){let u=S(e).$implicit;return M(u.thumbnail="assets/fallback_thumbnail.png")}),n(),t(5,`
        `),i(6,"div",13),t(7),n(),t(8,`
        `),i(9,"a",14),t(10,"\u25B6"),n(),t(11,`
      `),n(),t(12,`

      `),i(13,"div",15),t(14,`
        `),i(15,"h3"),t(16),n(),t(17,`
        `),i(18,"div",16),t(19,`
          `),i(20,"span",17),t(21),n(),t(22,`
          `),i(23,"span",17),t(24),n(),t(25,`
        `),n(),t(26,`
        `),i(27,"p",18),t(28),n(),t(29,`
      `),n(),t(30,`
    `),n()}if(r&2){let e=a.$implicit;o(4),s("src",e.thumbnail||"assets/fallback_thumbnail.png",f)("alt",e.title),o(3),m(e.duration),o(2),s("href",e.url,f),o(7),m(e.title),o(4),h("tag-red",e.difficulty==="Advanced"),o(),b(`
            `,e.difficulty,`
          `),o(2),h("tag-blue",e.tech==="Metasploit"),o(),b(`
            `,e.tech,`
          `),o(4),m(e.description)}}var W=class r{constructor(a){this.tutorialsService=a;this.selectedCategory="all";this.selectedTech="all";this.tutorials$=this.tutorialsService.getTutorials(),this.categories$=this.tutorials$.pipe(g(e=>[...new Set(e.map(l=>l.category))])),this.technologies$=this.tutorials$.pipe(g(e=>[...new Set(e.map(l=>l.tech))]))}filterTutorials(a){return a.filter(e=>(this.selectedCategory==="all"||e.category===this.selectedCategory)&&(this.selectedTech==="all"||e.tech===this.selectedTech))}static{this.\u0275fac=function(e){return new(e||r)(O(p))}}static{this.\u0275cmp=T({type:r,selectors:[["ng-component"]],decls:48,vars:7,consts:[[1,"tutorials-page"],[1,"tutorials-header"],[1,"filter-controls"],[1,"filter-group"],[3,"ngModelChange","ngModel"],["value","all"],[3,"value",4,"ngFor","ngForOf"],[1,"tutorials-grid"],["class","tutorial-card",4,"ngFor","ngForOf"],[3,"value"],[1,"tutorial-card"],[1,"thumbnail-container"],[3,"error","src","alt"],[1,"duration-badge"],["target","_blank",1,"play-button",3,"href"],[1,"tutorial-info"],[1,"meta-tags"],[1,"tag"],[1,"description"]],template:function(e,l){e&1&&(i(0,"div",0),t(1,`
  `),i(2,"header",1),t(3,`
    `),i(4,"h1"),t(5,"Hacking Tutorials"),n(),t(6,`
    `),i(7,"div",2),t(8,`
      `),i(9,"div",3),t(10,`
        `),i(11,"label"),t(12,"Category:"),n(),t(13,`
        `),i(14,"select",4),v("ngModelChange",function(c){return x(l.selectedCategory,c)||(l.selectedCategory=c),c}),t(15,`
          `),i(16,"option",5),t(17,"All"),n(),t(18,`
          `),d(19,Q,2,2,"option",6),t(20,`
        `),n(),t(21,`
      `),n(),t(22,`

      `),i(23,"div",3),t(24,`
        `),i(25,"label"),t(26,"Technology:"),n(),t(27,`
        `),i(28,"select",4),v("ngModelChange",function(c){return x(l.selectedTech,c)||(l.selectedTech=c),c}),t(29,`
          `),i(30,"option",5),t(31,"All"),n(),t(32,`
          `),d(33,V,2,2,"option",6),t(34,`
        `),n(),t(35,`
      `),n(),t(36,`
    `),n(),t(37,`
  `),n(),t(38,`

  `),t(39,`
  `),i(40,"div",7),t(41,`
    `),t(42,`
    `),d(43,H,31,12,"article",8),E(44,"async"),t(45,`
  `),n(),t(46,`
`),n(),t(47,`
`)),e&2&&(o(14),y("ngModel",l.selectedCategory),o(5),s("ngForOf",l.categories$),o(9),y("ngModel",l.selectedTech),o(5),s("ngForOf",l.technologies$),o(10),s("ngForOf",k(44,5,l.tutorials$)))},dependencies:[F,I,j,N,z,B,$,A,D],styles:[".tutorials-page[_ngcontent-%COMP%]{background:linear-gradient(135deg,#2a2a4f 10%,#303c80 50%,#1a1a2e);height:100vh}.tutorials-header[_ngcontent-%COMP%]{margin-bottom:2rem}.tutorials-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem;color:#2c3e50;margin-bottom:1.5rem}.filter-controls[_ngcontent-%COMP%]{display:flex;gap:1.5rem;flex-wrap:wrap}.filter-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:500;color:#34495e}.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:.5rem;border:2px solid #e0e0e0;border-radius:6px;min-width:150px}.tutorials-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.5rem}.tutorial-card[_ngcontent-%COMP%]{background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 4px 12px #00000014;transition:transform .3s ease}.tutorial-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.thumbnail-container[_ngcontent-%COMP%]{position:relative;aspect-ratio:16/9;background:#000}.thumbnail-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;opacity:.9;transition:opacity .3s}.thumbnail-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{opacity:.7}.duration-badge[_ngcontent-%COMP%]{position:absolute;bottom:.5rem;right:.5rem;background:#000000b3;color:#fff;padding:.25rem .5rem;border-radius:4px;font-size:.8rem}.play-button[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2.5rem;color:#fff;opacity:0;transition:opacity .3s}.thumbnail-container[_ngcontent-%COMP%]:hover   .play-button[_ngcontent-%COMP%]{opacity:.9}.tutorial-info[_ngcontent-%COMP%]{padding:1.25rem}.tutorial-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .75rem;font-size:1.1rem;line-height:1.4}.meta-tags[_ngcontent-%COMP%]{display:flex;gap:.5rem;margin-bottom:.75rem}.tag[_ngcontent-%COMP%]{font-size:.75rem;padding:.25rem .75rem;border-radius:20px;background:#f0f0f0}.tag-red[_ngcontent-%COMP%]{background:#ffebee;color:#c62828}.tag-blue[_ngcontent-%COMP%]{background:#e3f2fd;color:#1565c0}.description[_ngcontent-%COMP%]{color:#666;font-size:.9rem;line-height:1.5;margin:0}"]})}};export{W as TutorialsComponent};
