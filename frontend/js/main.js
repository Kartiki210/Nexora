const API='http://localhost:3000/api';

const categories=[
['music','♫','Music','Live sets, intimate gigs & nights out.'],
['arts','◌','Arts & Culture','Galleries, theatre, film & culture.'],
['food','✦','Food & Drinks','Markets, tastings and table stories.'],
['workshops','✎','Workshops','Learn something new with good people.'],
['comedy','☻','Comedy','Stand-up, improv and funny nights.'],
['nightlife','◒','Nightlife','DJ sets, parties and late nights.'],
['sports','◈','Sports','Matches, runs and active weekends.'],
['festivals','✺','Festivals','Big energy, local celebrations.'],
['theatre','◐','Theatre','Stage stories and live performances.'],
['tech','⌁','Technology','Meetups, talks and maker sessions.'],
['networking','◎','Networking','Meet people, ideas and communities.'],
['wellness','♡','Wellness','Yoga, breathwork and mindful moments.'],
['education','⌘','Education','Talks, classes and skill-building.'],
['fashion','◇','Fashion','Pop-ups, showcases and style.'],
['family','♧','Kids & Family','Easygoing experiences for everyone.']
];

const fallbackEvents=[
{id:1,title:'Jazz Night at Baller',category:'music',location:'Kalyani Nagar, Pune',venue:'Baller',address:'Kalyani Nagar, Pune, Maharashtra',date:'14 Sep 2026',time:'8:00 PM – 11:30 PM',age:'18+',price:'₹799 onwards',description:'An intimate night of live jazz, cocktails and late-evening city energy at one of Kalyani Nagar’s favourite spots.',image:'music',ticket:'Book tickets',status:'Tickets available'},
{id:2,title:'Vinyl & Velvet',category:'nightlife',location:'Koregaon Park, Pune',venue:'The Daily All Day',address:'Koregaon Park, Pune, Maharashtra',date:'16 Sep 2026',time:'9:00 PM – 1:00 AM',age:'21+',price:'₹599 onwards',description:'A late-night vinyl session with selectors spinning soul, funk and house in a relaxed room.',image:'nightlife',ticket:'Reserve a spot',status:'Limited'},
{id:3,title:'After Hours: New Voices',category:'arts',location:'Kothrud, Pune',venue:'Monalisa Kalagram',address:'Kothrud, Pune, Maharashtra',date:'18 Sep 2026',time:'6:00 PM – 9:00 PM',age:'All ages',price:'₹450',description:'A contemporary showcase featuring emerging artists, visual work and conversations around new voices.',image:'arts',ticket:'Book tickets',status:'Tickets available'},
{id:4,title:'The Sunday Table',category:'food',location:'Viman Nagar, Pune',venue:'The Flour Works',address:'Viman Nagar, Pune, Maharashtra',date:'20 Sep 2026',time:'12:30 PM – 3:30 PM',age:'All ages',price:'₹1,200',description:'A long-table Sunday lunch bringing together seasonal plates, local chefs and curious food lovers.',image:'food',ticket:'Reserve a spot',status:'Few spots left'},
{id:5,title:'Clay & Conversation',category:'workshops',location:'Baner, Pune',venue:'The Studio Pottery',address:'Baner, Pune, Maharashtra',date:'22 Sep 2026',time:'5:30 PM – 8:00 PM',age:'16+',price:'₹950',description:'Make your own hand-built ceramic piece while meeting fellow makers over coffee.',image:'workshops',ticket:'Register',status:'Open'},
{id:6,title:'Comedy After Dark',category:'comedy',location:'Deccan, Pune',venue:'The Laugh Club',address:'Deccan Gymkhana, Pune, Maharashtra',date:'23 Sep 2026',time:'8:30 PM – 10:30 PM',age:'18+',price:'₹499',description:'A rotating line-up of stand-up comics for a sharp, intimate midweek laugh.',image:'comedy',ticket:'Book tickets',status:'Tickets available'},
{id:7,title:'City Lights Sessions',category:'music',location:'Balewadi, Pune',venue:'High Spirits Arena',address:'Balewadi High Street, Pune, Maharashtra',date:'25 Sep 2026',time:'7:00 PM – 10:30 PM',age:'18+',price:'₹999',description:'Live indie music, warm lights and a crowd built for discovering your next favourite band.',image:'music',ticket:'Book tickets',status:'Tickets available'},
{id:8,title:'Frames of the City',category:'arts',location:'Shivajinagar, Pune',venue:'Pune Art House',address:'Shivajinagar, Pune, Maharashtra',date:'27 Sep 2026',time:'4:00 PM – 7:00 PM',age:'All ages',price:'Free',description:'A free photography exhibition exploring everyday Pune through fresh local perspectives.',image:'arts',ticket:'View event',status:'Free entry'},
{id:9,title:'Sunset Run Club',category:'sports',location:'Aundh, Pune',venue:'Aundh Sports Ground',address:'Aundh, Pune, Maharashtra',date:'28 Sep 2026',time:'6:00 AM – 8:00 AM',age:'16+',price:'₹199',description:'A friendly 5K community run followed by coffee and introductions.',image:'sports',ticket:'Register',status:'Open'},
{id:10,title:'Future Makers Meetup',category:'tech',location:'Hinjawadi, Pune',venue:'Rajiv Gandhi Infotech Park',address:'Hinjawadi Phase 1, Pune, Maharashtra',date:'29 Sep 2026',time:'6:30 PM – 9:00 PM',age:'18+',price:'₹299',description:'Founders, developers and designers meet for practical talks, demos and new connections.',image:'tech',ticket:'Register',status:'Open'},
{id:11,title:'Theatre Under the Stars',category:'theatre',location:'Camp, Pune',venue:'Empress Garden',address:'Camp, Pune, Maharashtra',date:'30 Sep 2026',time:'7:30 PM – 10:00 PM',age:'12+',price:'₹650',description:'A beautiful open-air performance under the evening sky.',image:'theatre',ticket:'Book tickets',status:'Tickets available'},
{id:12,title:'Mindful Sunday',category:'wellness',location:'Hadapsar, Pune',venue:'Osho Garden Studio',address:'Hadapsar, Pune, Maharashtra',date:'1 Oct 2026',time:'8:00 AM – 10:00 AM',age:'16+',price:'₹350',description:'Gentle movement, guided breathwork and a slow morning reset.',image:'wellness',ticket:'Reserve a spot',status:'Open'},
{id:13,title:'Design & Dosa',category:'networking',location:'Kharadi, Pune',venue:'The Social',address:'Kharadi, Pune, Maharashtra',date:'2 Oct 2026',time:'7:00 PM – 9:30 PM',age:'18+',price:'₹499',description:'A casual creative-industry meetup over good food and short idea-sharing sessions.',image:'networking',ticket:'Register',status:'Open'},
{id:14,title:'Street Style Pop-Up',category:'fashion',location:'Wakad, Pune',venue:'Phoenix Marketcity Pop-up',address:'Wakad, Pune, Maharashtra',date:'3 Oct 2026',time:'11:00 AM – 8:00 PM',age:'All ages',price:'Free',description:'Independent labels, vintage finds and live styling sessions in one curated pop-up.',image:'fashion',ticket:'View event',status:'Free entry'},
{id:15,title:'Little Explorers Day',category:'family',location:'Kharadi, Pune',venue:'EON Garden',address:'Kharadi, Pune, Maharashtra',date:'4 Oct 2026',time:'10:00 AM – 2:00 PM',age:'All ages',price:'₹299',description:'Hands-on games, storytelling and creative corners for children and parents.',image:'family',ticket:'Register',status:'Open'},
{id:16,title:'Coffee & Code',category:'education',location:'Viman Nagar, Pune',venue:'91Springboard',address:'Viman Nagar, Pune, Maharashtra',date:'5 Oct 2026',time:'10:30 AM – 1:00 PM',age:'16+',price:'₹250',description:'A beginner-friendly coding session with coffee, pair programming and practical guidance.',image:'education',ticket:'Register',status:'Open'},
{id:17,title:'Indie Film Evening',category:'arts',location:'Koregaon Park, Pune',venue:'Local Film Room',address:'Koregaon Park, Pune, Maharashtra',date:'6 Oct 2026',time:'6:30 PM – 9:00 PM',age:'16+',price:'₹399',description:'A curated evening of independent short films followed by a relaxed audience discussion.',image:'arts',ticket:'Book tickets',status:'Open'},
{id:18,title:'Rooftop House Party',category:'nightlife',location:'Kalyani Nagar, Pune',venue:'Skyline Rooftop',address:'Kalyani Nagar, Pune, Maharashtra',date:'7 Oct 2026',time:'9:00 PM – 1:00 AM',age:'21+',price:'₹899',description:'House music, rooftop views and a late-night city atmosphere.',image:'nightlife',ticket:'Book tickets',status:'Limited'}
];

async function getEvents(){
  try{
    const r=await fetch(API+'/events');
    if(!r.ok) throw 0;
    return await r.json();
  }catch{
    return fallbackEvents;
  }
}

function categoryName(c){
  return (categories.find(x=>x[0]===c)||['','',c])[2];
}

function card(e){
  return `
  <article class="event-card" data-id="${e.id}" tabindex="0" role="link">
    <div class="event-img ${e.image||e.category}">
      <span class="tag">${categoryName(e.category)}</span>
      <button class="heart" data-id="${e.id}" aria-label="Save event">♡</button>
    </div>
    <div class="event-body">
      <div class="date">${e.date} · ${e.time}</div>
      <h3>${e.title}</h3>
      <p><span class="venue">${e.venue}</span> · ${e.location} · ${e.price}</p>
    </div>
  </article>`;
}

function wireCards(){
  document.querySelectorAll('.event-card').forEach(c=>{
    c.addEventListener('click',e=>{
      if(e.target.closest('.heart')) return;
      location.href=`event.html?id=${c.dataset.id}`;
    });

    c.addEventListener('keydown',e=>{
      if(e.key==='Enter'){
        location.href=`event.html?id=${c.dataset.id}`;
      }
    });
  });
}

function wireHearts(){
  document.querySelectorAll('.heart').forEach(b=>{
    const ids=JSON.parse(localStorage.getItem('nexoraSaved')||'[]');

    if(ids.includes(Number(b.dataset.id))){
      b.classList.add('saved');
      b.textContent='♥';
    }

    b.onclick=e=>{
      e.stopPropagation();

      b.classList.toggle('saved');
      b.textContent=b.classList.contains('saved')?'♥':'♡';

      let a=JSON.parse(localStorage.getItem('nexoraSaved')||'[]');
      let id=Number(b.dataset.id);

      a=b.classList.contains('saved')
        ?[...new Set([...a,id])]
        :a.filter(x=>x!==id);

      localStorage.setItem('nexoraSaved',JSON.stringify(a));
    };
  });
}

function renderCategories(){
  const el=document.getElementById('homeCategories');
  if(!el) return;

  el.innerHTML=categories.slice(0,8).map((c,i)=>`
    <a class="category-card" href="explore.html?category=${c[0]}">
      <span class="category-no">${String(i+1).padStart(2,'0')}</span>
      <div>
        <span class="category-icon">${c[1]}</span>
        <h3>${c[2]}</h3>
        <p>${c[3]}</p>
      </div>
      <span class="arrow">↗</span>
    </a>
  `).join('');
}

async function renderHome(){
  const el=document.getElementById('featuredEvents');
  if(!el) return;

  const ev=await getEvents();

  el.innerHTML=ev.slice(0,6).map(card).join('');

  wireHearts();
  wireCards();
}

function populateFilters(){
  const s=document.getElementById('categoryFilter');

  if(s){
    s.innerHTML=
      '<option value="all">All categories</option>'+
      categories.map(c=>`<option value="${c[0]}">${c[2]}</option>`).join('');
  }

  const dl=
    document.getElementById('exploreLocations')||
    document.getElementById('locationsList');

  if(dl){
    const locs=[
      ...new Set(fallbackEvents.map(e=>e.location.split(',')[0]))
    ].concat(['Pune']);

    dl.innerHTML=[
      ...new Set(locs)
    ].map(x=>`<option value="${x}">`).join('');
  }
}

async function renderExplore(){
  const el=document.getElementById('allEvents');
  if(!el) return;

  const events=await getEvents();

  populateFilters();

  const p=new URLSearchParams(location.search);

  document.getElementById('exploreSearch').value=
    p.get('search')||'';

  document.getElementById('categoryFilter').value=
    p.get('category')||'all';

  function apply(){
    const q=
      document.getElementById('exploreSearch')
      .value.trim().toLowerCase();

    const c=
      document.getElementById('categoryFilter').value;

    const city=
      document.getElementById('cityFilter')
      .value.trim().toLowerCase();

    let list=events.filter(e=>
      (c==='all'||e.category===c)&&
      (!q||
        `${e.title} ${e.category} ${categoryName(e.category)} ${e.venue} ${e.location} ${e.address}`
        .toLowerCase()
        .includes(q)
      )&&
      (!city||
        e.location.toLowerCase().includes(city)||
        e.address.toLowerCase().includes(city)
      )
    );

    el.innerHTML=list.length
      ?list.map(card).join('')
      :`
        <div class="empty-state">
          <h3>No events found</h3>
          <p>Try another neighbourhood, category or keyword.</p>
        </div>
      `;

    document.getElementById('resultCount').textContent=
      `${list.length} event${list.length===1?'':'s'}`;

    wireHearts();
    wireCards();
  }

  document.getElementById('applyFilters').onclick=apply;

  document.getElementById('clearFilters').onclick=()=>{
    document.getElementById('exploreSearch').value='';
    document.getElementById('categoryFilter').value='all';
    document.getElementById('cityFilter').value='';
    apply();
  };

  apply();
}

async function renderDetail(){
  const el=document.getElementById('eventDetail');
  if(!el) return;

  const events=await getEvents();

  const id=
    Number(new URLSearchParams(location.search).get('id'));

  const e=events.find(x=>x.id===id)||events[0];

  document.title=`${e.title} — Nexora`;

  el.innerHTML=`
    <div class="detail-image event-img ${e.image||e.category}"></div>

    <div class="detail-copy">

      <div class="eyebrow">
        ${categoryName(e.category)} · Nexora pick
      </div>

      <h1>${e.title}</h1>

      <p class="detail-description">
        ${e.description}
      </p>

      <div class="detail-meta-grid">

        <div class="meta-box">
          <span>Date</span>
          <strong>${e.date}</strong>
        </div>

        <div class="meta-box">
          <span>Time</span>
          <strong>${e.time}</strong>
        </div>

        <div class="meta-box">
          <span>Age</span>
          <strong>${e.age}</strong>
        </div>

        <div class="meta-box">
          <span>Entry</span>
          <strong>${e.price}</strong>
        </div>

      </div>

      <div class="detail-location">

        <b>📍 ${e.venue}</b>

        <p>${e.address}</p>

        <a
          class="map-link"
          target="_blank"
          href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e.address)}"
        >
          Open exact location in Google Maps ↗
        </a>

      </div>

      <div class="booking-box">

        <div class="price">
          ${e.price}
        </div>

        <button
          class="pill terracotta"
          id="bookBtn"
        >
          ${e.ticket} →
        </button>

      </div>

      <p id="bookingMsg" class="booking-msg"></p>

    </div>
  `;

  document.getElementById('bookBtn').onclick=async()=>{

    const user=localStorage.getItem('nexoraUser');

    if(!user){
      if(
        confirm(
          'Please create an account or log in to continue. Open login page?'
        )
      ){
        location.href='login.html';
      }

      return;
    }

    const tickets=prompt(
      'How many tickets would you like to book?',
      '1'
    );

    if(tickets===null) return;

    const quantity=parseInt(tickets);

    if(!quantity || quantity<1){
      alert('Please enter a valid number of tickets.');
      return;
    }

    const msg=document.getElementById('bookingMsg');

    msg.textContent='Booking your tickets...';

    try{

      const res=await fetch(
        API+`/events/${e.id}/book`,
        {
          method:'POST',

          headers:{
            'Content-Type':'application/json'
          },

          body:JSON.stringify({
            email:user,
            quantity:quantity
          })
        }
      );

      const data=await res.json();

      if(!res.ok){
        throw new Error(
          data.message||'Booking failed.'
        );
      }

      msg.textContent=
        `✅ ${data.message} You booked ${quantity} ticket${quantity>1?'s':''}.`;

    }catch(err){

      msg.textContent=
        '❌ '+(
          err.message||
          'Could not complete booking.'
        );

    }

  };
}

function menu(){
  const b=document.getElementById('menuBtn');
  const m=document.getElementById('mobileMenu');

  if(b&&m){
    b.onclick=()=>{
      m.classList.toggle('open');
    };
  }
}

function newsletter(){
  const f=document.getElementById('newsletterForm');

  if(f){
    f.onsubmit=e=>{
      e.preventDefault();

      document.getElementById('newsletterMsg').textContent=
        'You’re on the list. See you out there ✦';

      f.reset();
    };
  }
}

function eyeButtons(){
  document.querySelectorAll('.eye-btn').forEach(b=>{

    b.onclick=()=>{
      const i=document.getElementById(b.dataset.target);

      i.type=
        i.type==='password'
        ?'text'
        :'password';

      b.textContent='◉';

      b.setAttribute(
        'aria-label',
        i.type==='password'
        ?'Show password'
        :'Hide password'
      );
    };

  });
}

function auth(){

  const r=document.getElementById('registerForm');

  if(r){

    r.onsubmit=async e=>{

      e.preventDefault();

      const msg=document.getElementById('authMsg');

      try{

        const res=await fetch(
          API+'/auth/register',
          {
            method:'POST',

            headers:{
              'Content-Type':'application/json'
            },

            body:JSON.stringify({
              name:document.getElementById('registerName').value,
              email:document.getElementById('registerEmail').value,
              password:document.getElementById('registerPassword').value
            })
          }
        );

        const d=await res.json();

        if(!res.ok){
          throw Error(d.message);
        }

        localStorage.setItem(
          'nexoraUser',
          document.getElementById('registerEmail').value
        );

        msg.textContent=d.message;

        setTimeout(
          ()=>location.href='dashboard.html',
          700
        );

      }catch(err){

        msg.textContent=
          err.message||
          'Could not create account.';

      }

    };

  }

  const l=document.getElementById('loginForm');

  if(l){

    l.onsubmit=async e=>{

      e.preventDefault();

      const msg=document.getElementById('authMsg');

      try{

        const res=await fetch(
          API+'/auth/login',
          {
            method:'POST',

            headers:{
              'Content-Type':'application/json'
            },

            body:JSON.stringify({
              email:document.getElementById('loginEmail').value,
              password:document.getElementById('loginPassword').value
            })
          }
        );

        const d=await res.json();

        if(!res.ok){
          throw Error(d.message);
        }

        localStorage.setItem(
          'nexoraUser',
          d.user.email
        );

        location.href='dashboard.html';

      }catch(err){

        msg.textContent=err.message;

      }

    };

  }
}

async function dashboard(){

  const el=document.getElementById('savedEvents');

  if(!el) return;

  const ids=
    JSON.parse(
      localStorage.getItem('nexoraSaved')||'[]'
    );

  const events=await getEvents();

  const list=
    events.filter(e=>ids.includes(e.id));

  document.getElementById('savedCount').textContent=
    list.length;

  document.getElementById('dashboardUser').textContent=
    localStorage.getItem('nexoraUser')
    ?`Signed in as ${localStorage.getItem('nexoraUser')}`
    :'Your saved events and hosting tools live here.';

  el.innerHTML=
    list.length
    ?`
      <div class="events-grid">
        ${list.map(card).join('')}
      </div>
    `
    :`
      <p class="empty-state">
        No saved events yet.
        Explore something you love and tap the heart.
      </p>
    `;

  wireHearts();
  wireCards();
}

renderCategories();
populateFilters();
menu();
newsletter();
auth();
eyeButtons();
renderHome();
renderExplore();
renderDetail();
dashboard();