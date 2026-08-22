const target = new Date("2026-12-01T00:00:00+01:00").getTime();
function tick(){const d=target-Date.now();const vals=d<=0?[0,0,0,0]:[Math.floor(d/86400000),Math.floor(d/3600000)%24,Math.floor(d/60000)%60,Math.floor(d/1000)%60];["days","hours","minutes","seconds"].forEach((id,i)=>document.getElementById(id).textContent=String(vals[i]).padStart(2,"0"));}
tick();setInterval(tick,1000);
document.getElementById("year").textContent=new Date().getFullYear();
const nav=document.querySelector("nav"),hamb=document.querySelector(".hamburger");hamb?.addEventListener("click",()=>nav.classList.toggle("open"));document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
function openModal(id){const m=document.getElementById(id);m.classList.add("active");m.setAttribute("aria-hidden","false");document.body.classList.add("modal-open");}
function closeModal(m){m.classList.remove("active");m.setAttribute("aria-hidden","true");document.body.classList.remove("modal-open");}
document.querySelectorAll(".open").forEach(b=>b.addEventListener("click",()=>openModal(b.dataset.modal)));
document.querySelectorAll(".modal").forEach(m=>{m.addEventListener("click",e=>{if(e.target===m)closeModal(m)});m.querySelector(".close")?.addEventListener("click",()=>closeModal(m));});
document.addEventListener("keydown",e=>{if(e.key==="Escape")document.querySelectorAll(".modal.active").forEach(closeModal)});

const vendorData={
 "Standard Retail Stall":{price:"₦60,000",details:["3 full days","Single canopy shell","1 table","2 chairs","Power outlet","2 vendor passes"]},
 "Food & Beverage Booth":{price:"₦80,000",details:["3 full days","Heavy-duty stall","Wash-area access","High-wattage power","3 vendor passes"]},
 "Premium Brand Pavilion":{price:"₦120,000",details:["3 full days","Double space","Prime central placement","Customized branding","5 passes"]}
};
const sponsorData={
 "Title / Headline Sponsor":{price:"₦6,000,000",details:["Exclusive naming rights","Prime stage and arena branding","15 VIP all-access passes","3-day activation pavilion","Day 1 keynote address","Daily livestream screen exposure","Dedicated PR blitz"]},
 "Gold Partner":{price:"₦3,000,000",details:["Stage LED and entry-arch co-branding","8 VIP passes","Complimentary trade-fair booth","Livestream mid-roll video ads","Direct product sampling rights"]},
 "Silver Partner":{price:"₦1,500,000",details:["Festival billboard, flyer and stage branding","4 VIP passes","Complimentary vendor stand","Social-media spotlight campaign"]},
 "Category / In-Kind Partner":{price:"IN-KIND",details:["Exclusive beverage, energy drink, telecom/internet or ticketing rights","Exclusive sales and sampling","Logo on event materials"]}
};
function renderPackage(box,data,name){box.classList.remove("hidden");box.innerHTML=`<h3>${name}</h3><div class="price">${data.price}</div><ul>${data.details.map(x=>`<li>${x}</li>`).join("")}</ul>`;box.scrollIntoView({behavior:"smooth",block:"nearest"});}
document.querySelectorAll("[data-vendor-package]").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll("[data-vendor-package]").forEach(x=>x.classList.remove("selected"));btn.classList.add("selected");const name=btn.dataset.vendorPackage;document.getElementById("vendor-choice").value=name;renderPackage(document.getElementById("vendorDetails"),vendorData[name],name);document.getElementById("vendorForm").classList.remove("hidden");}));
document.querySelectorAll("[data-sponsor-package]").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll("[data-sponsor-package]").forEach(x=>x.classList.remove("selected"));btn.classList.add("selected");const name=btn.dataset.sponsorPackage;document.getElementById("sponsor-choice").value=name;renderPackage(document.getElementById("sponsorDetails"),sponsorData[name],name);document.getElementById("sponsorForm").classList.remove("hidden");document.getElementById("sponsorActions").classList.remove("hidden");}));
const pay=document.getElementById("paySponsor"),notice=document.getElementById("paymentNotice");if(typeof SPONSOR_PAYMENT_URL!=="undefined"&&SPONSOR_PAYMENT_URL){pay.href=SPONSOR_PAYMENT_URL;notice.textContent="You can pay securely using the official payment link."}else{pay.addEventListener("click",e=>{e.preventDefault();alert("The official sponsorship payment link has not been added yet.")});}

const ticketData={
 "Regular":{price:"FREE",details:["General attendee access","Reservation required","Ticket confirmation after submission"]},
 "Silver Table":{price:"₦100,000",details:["Silver table experience","Reservation required","Table/seating allocation confirmed by organisers"]},
 "Gold Table":{price:"₦200,000",details:["Gold table experience","Reservation required","Table/seating allocation confirmed by organisers"]},
 "Diamond Table":{price:"₦500,000",details:["Diamond table experience","Reservation required","Table/seating allocation confirmed by organisers"]}
};
document.querySelectorAll("[data-ticket-package]").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll("[data-ticket-package]").forEach(x=>x.classList.remove("selected"));
 btn.classList.add("selected");
 const name=btn.dataset.ticketPackage;
 document.getElementById("ticket-choice").value=name;
 renderPackage(document.getElementById("ticketDetails"),ticketData[name],name);
 document.getElementById("ticketForm").classList.remove("hidden");
 const actions=document.getElementById("ticketActions");
 if(name==="Regular"){actions.classList.add("hidden");}
 else {actions.classList.remove("hidden");}
}));
const payTicket=document.getElementById("payTicket"),ticketNotice=document.getElementById("ticketPaymentNotice");
if(typeof TICKET_PAYMENT_URL!=="undefined"&&TICKET_PAYMENT_URL){payTicket.href=TICKET_PAYMENT_URL;ticketNotice.textContent="Use the official payment link to complete payment for the selected ticket/table."}
else{payTicket.addEventListener("click",e=>{e.preventDefault();alert("The official ticket payment link has not been added yet.")});}
