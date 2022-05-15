var ee=Object.defineProperty,te=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var G=(e,t,i)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,n=(e,t)=>{for(var i in t||(t={}))se.call(t,i)&&G(e,i,t[i]);if(D)for(var i of D(t))ie.call(t,i)&&G(e,i,t[i]);return e},a=(e,t)=>te(e,le(t));import{_ as ne,P as z,F as ae,b as re,p as V,a as oe,d as de,r as M}from"./PlantOverlay.ef2ae6ad.js";import{N as B,F as j}from"./Footbar.288c47c7.js";import{_ as L,r as O,o,c as p,a as d,w as g,b as r,u as R,v as b,F as v,i as y,g as P,t as C,f as N,d as H,l as ue,q as he,x as k,s as fe,m as ce}from"./index.f231ae81.js";const me={name:"FilterEnv",props:{filters:Object,params:Object,onFilterChange:Function,nPlants:Object,hardyData:Object},data(){return{}},computed:{filterSun(){return this.filters.SUN},filterSoil(){return this.filters.SOIL},filterMoisture(){return this.filters.MOISTURE},filterPh(){return this.filters.PH},filterSearch(){return this.filters.SEARCH},filterHuse(){return this.filters.HARDINESSUSE},filterHardiness(){return this.filters.HARDINESS}}},pe={class:"filters"},ge={class:"filter tag-filter oneline"},Se={class:"label"},_e={class:"filter tag-filter oneline"},ve={class:"label"},Oe={class:"filter tag-filter oneline"},ye={class:"label"},Pe={class:"filter tag-filter oneline"},Re={class:"label"},be={class:"filter tag-filter oneline"},Ee={class:"label"};function Ce(e,t,i,u,_,s){const c=O("el-option"),h=O("el-select"),m=O("el-row");return o(),p("div",pe,[d(m,null,{default:g(()=>[r("div",ge,[R(r("div",Se,"sun",512),[[b,s.filterSun.selected.length>0]]),d(h,{multiple:"","collapse-tags":"",modelValue:s.filterSun.selected,"onUpdate:modelValue":t[0]||(t[0]=l=>s.filterSun.selected=l),onChange:t[1]||(t[1]=l=>i.onFilterChange("SUN",l)),placeholder:"sun",class:"sun"},{default:g(()=>[(o(!0),p(v,null,y(s.filterSun.options,l=>(o(),P(c,{class:"sun",key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),r("div",_e,[R(r("div",ve,"moisture",512),[[b,s.filterMoisture.selected.length>0]]),d(h,{multiple:"","collapse-tags":"",modelValue:s.filterMoisture.selected,"onUpdate:modelValue":t[2]||(t[2]=l=>s.filterMoisture.selected=l),onChange:t[3]||(t[3]=l=>i.onFilterChange("MOISTURE",l)),placeholder:"moisture",class:"moisture"},{default:g(()=>[(o(!0),p(v,null,y(s.filterMoisture.options,l=>(o(),P(c,{class:"moisture",key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),r("div",Oe,[R(r("div",ye,"soil",512),[[b,s.filterSoil.selected.length>0]]),d(h,{multiple:"","collapse-tags":"",modelValue:s.filterSoil.selected,"onUpdate:modelValue":t[4]||(t[4]=l=>s.filterSoil.selected=l),onChange:t[5]||(t[5]=l=>i.onFilterChange("SOIL",l)),placeholder:"soil type",class:"soil"},{default:g(()=>[(o(!0),p(v,null,y(s.filterSoil.options,l=>(o(),P(c,{class:"soil",key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),r("div",Pe,[R(r("div",Re,"pH level",512),[[b,s.filterPh.selected.length>0]]),d(h,{multiple:"","collapse-tags":"",modelValue:s.filterPh.selected,"onUpdate:modelValue":t[6]||(t[6]=l=>s.filterPh.selected=l),onChange:t[7]||(t[7]=l=>i.onFilterChange("PH",l)),placeholder:"ph",class:"ph"},{default:g(()=>[(o(!0),p(v,null,y(s.filterPh.options,l=>(o(),P(c,{class:"ph",key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),r("div",be,[R(r("div",Ee,"hardiness application",512),[[b,s.filterHuse.selected.length>0]]),d(h,{multiple:"","collapse-tags":"",modelValue:s.filterHuse.selected,"onUpdate:modelValue":t[8]||(t[8]=l=>s.filterHuse.selected=l),onChange:t[9]||(t[9]=l=>i.onFilterChange("HARDINESSUSE",l)),placeholder:"where to grow?",class:"hardy"},{default:g(()=>[(o(!0),p(v,null,y(s.filterHuse.options,l=>(o(),P(c,{class:"hardy",key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1})])}var W=L(me,[["render",Ce]]);const we={name:"FilterEco",props:{filters:Object,params:Object,onFilterChange:Function,nPlants:Object,hardyData:Object},data(){return{}},computed:{filterGroup(){return this.filters.GROUP},filterSize(){return this.filters.SIZE},filterProp(){return this.filters.PROP},filterGrowth(){return this.filters.GROWTH},filterScent(){return this.filters.SCENT},filterPollin(){return this.filters.POLLINATORS}}},Ie={class:"filters"},Ue={class:"filter tag-filter oneline"},He={class:"label"},Ne={class:"filter tag-filter oneline"},Te={class:"label"},Fe={class:"filter tag-filter oneline"},Ve={class:"label"},Le={class:"filter tag-filter oneline"},Ae={class:"label"},ke={class:"filter tag-filter oneline"},De={class:"label"},Ge={class:"filter tag-filter oneline"},Me={class:"label"};function ze(e,t,i,u,_,s){const c=O("el-option"),h=O("el-select"),m=O("el-row");return o(),p("div",Ie,[d(m,null,{default:g(()=>[r("div",Ue,[R(r("div",He,"plant type",512),[[b,s.filterGroup.selected.length>0]]),d(h,{multiple:"","collapse-tags":"",modelValue:s.filterGroup.selected,"onUpdate:modelValue":t[0]||(t[0]=l=>s.filterGroup.selected=l),onChange:t[1]||(t[1]=l=>i.onFilterChange("GROUP",l)),placeholder:"plant type"},{default:g(()=>[(o(!0),p(v,null,y(s.filterGroup.options,l=>(o(),P(c,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),r("div",Ne,[R(r("div",Te,"size",512),[[b,s.filterSize.selected.length>0]]),d(h,{multiple:"","collapse-tags":"",modelValue:s.filterSize.selected,"onUpdate:modelValue":t[2]||(t[2]=l=>s.filterSize.selected=l),onChange:t[3]||(t[3]=l=>i.onFilterChange("SIZE",l)),placeholder:"size range"},{default:g(()=>[(o(!0),p(v,null,y(s.filterSize.options,l=>(o(),P(c,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),r("div",Fe,[R(r("div",Ve,"propagation",512),[[b,s.filterProp.selected.length>0]]),d(h,{multiple:"","collapse-tags":"",modelValue:s.filterProp.selected,"onUpdate:modelValue":t[4]||(t[4]=l=>s.filterProp.selected=l),onChange:t[5]||(t[5]=l=>i.onFilterChange("PROP",l)),placeholder:"propagation"},{default:g(()=>[(o(!0),p(v,null,y(s.filterProp.options,l=>(o(),P(c,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),r("div",Le,[R(r("div",Ae,"growth rate",512),[[b,s.filterGrowth.selected.length>0]]),d(h,{multiple:"","collapse-tags":"",modelValue:s.filterGrowth.selected,"onUpdate:modelValue":t[6]||(t[6]=l=>s.filterGrowth.selected=l),onChange:t[7]||(t[7]=l=>i.onFilterChange("GROWTH",l)),placeholder:"growth rate"},{default:g(()=>[(o(!0),p(v,null,y(s.filterGrowth.options,l=>(o(),P(c,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),r("div",ke,[R(r("div",De,"aroma",512),[[b,s.filterScent.selected.length>0]]),d(h,{multiple:"","collapse-tags":"",modelValue:s.filterScent.selected,"onUpdate:modelValue":t[8]||(t[8]=l=>s.filterScent.selected=l),onChange:t[9]||(t[9]=l=>i.onFilterChange("SCENT",l)),placeholder:"aroma"},{default:g(()=>[(o(!0),p(v,null,y(s.filterScent.options,l=>(o(),P(c,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),r("div",Ge,[R(r("div",Me,"pollinators",512),[[b,s.filterPollin.selected.length>0]]),d(h,{multiple:"","collapse-tags":"",modelValue:s.filterPollin.selected,"onUpdate:modelValue":t[10]||(t[10]=l=>s.filterPollin.selected=l),onChange:t[11]||(t[11]=l=>i.onFilterChange("POLLINATORS",l)),placeholder:"pollinators"},{default:g(()=>[(o(!0),p(v,null,y(s.filterPollin.options,l=>(o(),P(c,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1})])}var Z=L(we,[["render",ze]]);const Be={name:"Filtersearch",props:{filters:Object,params:Object,onFilterChange:Function,nPlants:Object},data(){return{}},computed:{filterSearch(){return this.filters.SEARCH}}},je={class:"search-field"},We={class:"filter search-filter"},Ze={class:"plant-counts"},qe={class:"count-label"},$e=N("Showing "),Je={class:"results-number"},Ke=N(" of "),Qe={class:"results-number"},Xe=N(" potential plants");function Ye(e,t,i,u,_,s){const c=O("el-input");return o(),p(v,null,[r("div",je,[r("div",We,[d(c,{placeholder:"i.e. vegetable",clearable:"",modelValue:s.filterSearch.selected,"onUpdate:modelValue":t[0]||(t[0]=h=>s.filterSearch.selected=h),onChange:t[1]||(t[1]=h=>i.onFilterChange("SEARCH",h))},null,8,["modelValue"])])]),r("div",Ze,[r("p",qe,[$e,r("span",Je,C(i.nPlants.show),1),Ke,r("span",Qe,C(i.nPlants.filtered),1),Xe])])],64)}var q=L(Be,[["render",Ye]]);const xe={name:"PlantCard",components:{},props:{id:String,latinname:String,commonname:String,synonyms:String,type:String,proptype:String,ediblerating:Number,imgthb:String}},et={class:"plant-card"},tt=r("div",{class:"image-slot"},[r("img",{src:ne,class:"error-image"})],-1),lt={class:"card-text"},st={class:"scientific-name"},it={class:"other-names"},nt={key:0},at={key:1},rt={key:2},ot={key:3},dt={class:"flag"},ut={key:0,class:"tag"},ht={class:"tag"};function ft(e,t,i,u,_,s){const c=O("el-image"),h=O("el-card");return o(),p("div",et,[d(h,{"body-style":{padding:"0px"},shadow:"hover"},{default:g(()=>[d(c,{src:i.imgthb,class:"card-image",fit:"cover",lazy:""},{error:g(()=>[tt]),_:1},8,["src"]),r("div",lt,[r("p",st,C(this.latinname),1),r("p",it,[this.commonname!==""?(o(),p("span",nt,"aka")):this.synonyms!==""?(o(),p("span",at,"aka")):H("",!0),N(" "+C(this.commonname)+" ",1),this.commonname!==""&&this.synonyms!==""&&this.synonyms.length<80?(o(),p("span",rt,",")):H("",!0),this.synonyms.length<80?(o(),p("span",ot,C(this.synonyms),1)):H("",!0)]),r("div",dt,[this.type!==""?(o(),p("p",ut,C(this.type),1)):H("",!0),r("p",ht,C(this.proptype),1)])])]),_:1})])}var $=L(xe,[["render",ft]]);const ct={id:"page"},mt={class:"search-filters"},pt=r("p",{class:"group-label"},"Environment:",-1),gt=r("p",{class:"group-label"},"Ecology:",-1),St=r("p",{class:"search-label"},"Search for names, uses, cultivation details, or origins:",-1),_t={class:"search-results"},vt=["id"],Ot={class:"load"},yt=N("load more"),Pt={name:"Dig",components:{Navbar:B,FilterEnv:W,FilterEco:Z,FilterSearch:q,PlantCard:$,PlantOverlay:z,Footbar:j},data(){return{plants:[],filters:ae,params:re,search:"",length:60}},mounted(){this.plants=V.map(e=>a(n({},e),{searchTarget:[e.latinname,e.commonname,e.synonyms,e.edibleuses,e.medicinaluses,e.materialuses,e.synonyms,e.propdetails,e.cultivationdetails,e.range,e.indigenoususe].join(" ").toLowerCase()})),this.populateFilters()},created(){let t=new URLSearchParams(window.location.search).get("filters");t&&(this.filters=t.split(","))},computed:{filteredPlants(){if(!this.plants.length)return[];const{SUN:e,SOIL:t,MOISTURE:i,PH:u,HARDINESSUSE:_,HARDINESS:s,GROUP:c,SIZE:h,PROP:m,GROWTH:l,SCENT:E,POLLINATORS:w,SEARCH:U}=this.filters,{SORT:T}=this.params,I=T.selected,A=T.asc,F=U.selected.toLowerCase();return this.updateURL(),this.plants.filter(S=>S.hardiness>=s.selected[0]&&S.hardiness<=s.selected[1]&&(!e.selected.length||e.selected.some(f=>S.sun.includes(f)))&&(!t.selected.length||t.selected.some(f=>S.soil.includes(f)))&&(!i.selected.length||i.selected.some(f=>S.moisture.includes(f)))&&(!u.selected.length||u.selected.some(f=>S.ph.includes(f)))&&(!_.selected.length||_.selected.some(f=>S.hardinessuse.includes(f)))&&(!c.selected.length||c.selected.some(f=>S.group.includes(f)))&&(!h.selected.length||h.selected.some(f=>S.size.includes(f)))&&(!m.selected.length||m.selected.some(f=>S.prop.includes(f)))&&(!l.selected.length||l.selected.some(f=>S.growth.includes(f)))&&(!E.selected.length||E.selected.some(f=>S.scent.includes(f)))&&(!w.selected.length||w.selected.some(f=>S.pollinators.includes(f)))&&(!F||S.searchTarget.indexOf(F)!==-1)).sort((S,f)=>A?oe(S[I],f[I]):de(S[I],f[I]))},hardyData(){if(!this.plants.length)return{filtered:[],all:[]};const e=[...M(this.plants,u=>u.length,u=>u.hardiness)].sort((u,_)=>u[0]-_[0]),t=M(this.filteredPlants,u=>u.length,u=>u.hardiness);return{filtered:e.map(([u])=>[u,t.get(u)||0]),all:e}},plantsLoaded(){return this.filteredPlants.slice(0,this.length)}},methods:{onFilterChange(e,t){e==="SUN"&&(this.filters=a(n({},this.filters),{SUN:a(n({},this.filters.SUN),{selected:t})})),e==="SOIL"&&(this.filters=a(n({},this.filters),{SOIL:a(n({},this.filters.SOIL),{selected:t})})),e==="MOISTURE"&&(this.filters=a(n({},this.filters),{MOISTURE:a(n({},this.filters.MOISTURE),{selected:t})})),e==="PH"&&(this.filters=a(n({},this.filters),{PH:a(n({},this.filters.PH),{selected:t})})),e==="HARDINESSUSE"&&(this.filters=a(n({},this.filters),{HARDINESSUSE:a(n({},this.filters.HARDINESSUSE),{selected:t})})),e==="HARDINESS"&&(this.filters=a(n({},this.filters),{HARDINESS:a(n({},this.filters.HARDINESS),{selected:t})})),e==="GROUP"&&(this.filters=a(n({},this.filters),{GROUP:a(n({},this.filters.GROUP),{selected:t})})),e==="SIZE"&&(this.filters=a(n({},this.filters),{SIZE:a(n({},this.filters.SIZE),{selected:t})})),e==="PROP"&&(this.filters=a(n({},this.filters),{PROP:a(n({},this.filters.PROP),{selected:t})})),e==="GROWTH"&&(this.filters=a(n({},this.filters),{GROWTH:a(n({},this.filters.GROWTH),{selected:t})})),e==="SCENT"&&(this.filters=a(n({},this.filters),{SCENT:a(n({},this.filters.SCENT),{selected:t})})),e==="POLLINATORS"&&(this.filters=a(n({},this.filters),{POLLINATORS:a(n({},this.filters.POLLINATORS),{selected:t})})),e==="SEARCH"&&(this.filters=a(n({},this.filters),{SEARCH:a(n({},this.filters.SEARCH),{selected:t})})),e==="SORT"&&(this.params=a(n({},this.params),{SORT:a(n({},this.params.SORT),{selected:t,asc:!0})})),e==="SORT_DIRECTION"&&(this.params=a(n({},this.params),{SORT:a(n({},this.params.SORT),{asc:!this.params.SORT.asc})}))},updateURL(){let e=new URLSearchParams;this.filters.SUN.selected.length>0&&e.set("sun",this.filters.SUN.selected),this.filters.MOISTURE.selected.length>0&&e.set("moisture",this.filters.MOISTURE.selected),this.filters.SOIL.selected.length>0&&e.set("soil",this.filters.SOIL.selected),this.filters.PH.selected.length>0&&e.set("ph",this.filters.PH.selected),this.filters.HARDINESSUSE.selected.length>0&&e.set("ph",this.filters.HARDINESSUSE.selected),history.replaceState(null,null,"?"+e.toString())},populateFilters(){if(!this.plants)return;let e=[],t=[],i=[],u=[],_=[],s=[1/0,-1/0],c=[],h=[],m=[],l=[],E=[],w=[];for(let U=0;U<this.plants.length;U++){const{sun:T,soil:I,moisture:A,ph:F,hardinessuse:S,hardiness:f,group:J,size:K,proptype:Q,growth:X,scent:Y,pollinators:x}=this.plants[U];e=[...e,...T].filter(Boolean),t=[...t,...I].filter(Boolean),i=[...i,...A].filter(Boolean),u=[...u,...F].filter(Boolean),_=[..._,S].filter(Boolean),s=[Math.min(f,s[0]),Math.max(f,s[1])],c=[...c,...J].filter(Boolean),h=[...h,K].filter(Boolean),m=[...m,Q].filter(Boolean),l=[...l,X].filter(Boolean),E=[...E,Y].filter(Boolean),w=[...w,...x].filter(Boolean)}this.filters=a(n({},this.filters),{SUN:a(n({},this.filters.SUN),{options:[...new Set(e)]}),SOIL:a(n({},this.filters.SOIL),{options:[...new Set(t)]}),MOISTURE:a(n({},this.filters.MOISTURE),{options:[...new Set(i)]}),PH:a(n({},this.filters.PH),{options:[...new Set(u)]}),HARDINESSUSE:a(n({},this.filters.HARDINESSUSE),{options:[...new Set(_)]}),HARDINESS:a(n({},this.filters.HARDINESS),{options:s,selected:s}),GROUP:a(n({},this.filters.GROUP),{options:[...new Set(c)].sort()}),SIZE:a(n({},this.filters.SIZE),{options:[...new Set(h)]}),PROP:a(n({},this.filters.PROP),{options:[...new Set(m)].sort()}),GROWTH:a(n({},this.filters.GROWTH),{options:[...new Set(l)].sort()}),SCENT:a(n({},this.filters.SCENT),{options:[...new Set(E)].sort()}),POLLINATORS:a(n({},this.filters.POLLINATORS),{options:[...new Set(w)].sort()})})},plantPass(e){const t={commonname:e.commonname,cultivationdetails:e.cultivationdetails,cultivationcite:e.cultivationcite,edibleuses:e.edibleuses,ediblecite:e.ediblecite,ediblerating:e.ediblerating,family:e.family,flowerendmonth:e.flowerendmonth,flowerstartmonth:e.flowerstartmonth,flowertype:e.flowertype,growth:e.growth,habitat:e.habitat,hardinessuse:e.hardinessuse,height:e.height,id:e.id,img:e.img,imgcreator:e.imgcreator,imgthb:e.imgthb,indigenoususe:e.indigenoususe,hazards:e.hazards,hazardscite:e.hazardscite,latinname:e.latinname,leaftype:e.leaftype,materialuses:e.materialuses,materialcite:e.materialcite,materialrating:e.materialrating,medicinaluses:e.medicinaluses,medicinalcite:e.medicinalcite,medicinalrating:e.medicinalrating,ovlink:e.ovlink,pfaflink:e.pfaflink,propdetails:e.propdetails,proptype:e.proptype,range:e.range,scent:e.scent,searchTarget:e.searchTarget,season:e.season,seedendmonth:e.seedendmonth,seedstartmonth:e.seedstartmonth,size:e.size,synonyms:e.synonyms,sun:e.sun,soil:e.soil,moisture:e.moisture,ph:e.ph,type:e.type,usda:e.usda,usdalink:e.usdalink,wslink:e.wslink,width:e.width};return this.plantDetails=t,{plantDetails:t}},loadMore(){this.length>this.filteredPlants.length||(this.length=this.length+60)}}},wt=ue(a(n({},Pt),{setup(e){const t=he(!1);return(i,u)=>{const _=O("el-row"),s=O("el-drawer"),c=O("Plus"),h=O("el-icon");return o(),p(v,null,[d(B),r("div",ct,[r("section",null,[r("div",mt,[d(_,{class:"filter-group"},{default:g(()=>[pt,d(W,{filters:i.filters,params:i.params,onFilterChange:i.onFilterChange,nPlants:{filtered:i.filteredPlants.length,all:k(V).length}},null,8,["filters","params","onFilterChange","nPlants"])]),_:1}),d(_,{class:"filter-group"},{default:g(()=>[gt,d(Z,{filters:i.filters,params:i.params,onFilterChange:i.onFilterChange,nPlants:{filtered:i.filteredPlants.length,all:k(V).length}},null,8,["filters","params","onFilterChange","nPlants"])]),_:1}),d(_,{class:"filter-group"},{default:g(()=>[St,d(q,{filters:i.filters,params:i.params,onFilterChange:i.onFilterChange,nPlants:{filtered:i.filteredPlants.length,all:k(V).length,show:i.plantsLoaded.length}},null,8,["filters","params","onFilterChange","nPlants"])]),_:1})])]),r("section",null,[r("div",_t,[(o(!0),p(v,null,y(i.plantsLoaded,(m,l)=>(o(),p("div",{key:l,id:m.id},[d($,{latinname:m.latinname,commonname:m.commonname,synonyms:m.synonyms,imgthb:m.imgthb,growth:m.growth,type:m.type,proptype:m.proptype,onFilterChange:i.onFilterChange,onClick:E=>{t.value=!0,i.plantPass(m)}},null,8,["latinname","commonname","synonyms","imgthb","growth","type","proptype","onFilterChange","onClick"])],8,vt))),128)),d(s,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=m=>t.value=m),direction:"rtl",size:"50%"},{default:g(()=>[(t.value=!0)?(o(),P(z,fe(ce({key:0},{plantDetails:i.plantDetails})),null,16)):H("",!0)]),_:1},8,["modelValue"])])]),r("div",Ot,[r("div",{class:"more",onClick:u[1]||(u[1]=(...m)=>i.loadMore&&i.loadMore(...m))},[d(h,null,{default:g(()=>[d(c)]),_:1}),yt,d(h,null,{default:g(()=>[d(c)]),_:1})])])]),d(j)],64)}}}));export{wt as default};
