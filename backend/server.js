const express=require('express');
const path=require('path');
const fs=require('fs');
const bcrypt=require('bcryptjs');
const cors=require('cors');

const app=express();
const PORT=process.env.PORT||3000;

app.use(cors());
app.use(express.json());

const dataDir=path.join(__dirname,'data'); 
if(!fs.existsSync(dataDir))fs.mkdirSync(dataDir);

const usersFile=path.join(dataDir,'users.json'), 
      eventsFile=path.join(dataDir,'events.json'), 
      bookingsFile=path.join(dataDir,'bookings.json');

const ensure=(f,d)=>{
  if(!fs.existsSync(f))
    fs.writeFileSync(f,JSON.stringify(d,null,2))
};

ensure(usersFile,[]);
ensure(bookingsFile,[]);
ensure(eventsFile,[
  {
    "id": 1,
    "title": "Jazz Night at Baller",
    "category": "music",
    "location": "Kalyani Nagar, Pune",
    "venue": "Baller",
    "address": "Kalyani Nagar, Pune, Maharashtra",
    "date": "14 Sep 2026",
    "time": "8:00 PM – 11:30 PM",
    "age": "18+",
    "price": "₹799 onwards",
    "description": "An intimate night of live jazz, cocktails and late-evening city energy at one of Kalyani Nagar’s favourite spots.",
    "image": "music",
    "ticket": "Book tickets",
    "status": "Tickets available"
  },
  {
    "id": 2,
    "title": "Vinyl & Velvet",
    "category": "nightlife",
    "location": "Koregaon Park, Pune",
    "venue": "The Daily All Day",
    "address": "Koregaon Park, Pune, Maharashtra",
    "date": "16 Sep 2026",
    "time": "9:00 PM – 1:00 AM",
    "age": "21+",
    "price": "₹599 onwards",
    "description": "A late-night vinyl session with selectors spinning soul, funk and house in a relaxed room.",
    "image": "nightlife",
    "ticket": "Reserve a spot",
    "status": "Limited"
  },
  {
    "id": 3,
    "title": "After Hours: New Voices",
    "category": "arts",
    "location": "Kothrud, Pune",
    "venue": "Monalisa Kalagram",
    "address": "Kothrud, Pune, Maharashtra",
    "date": "18 Sep 2026",
    "time": "6:00 PM – 9:00 PM",
    "age": "All ages",
    "price": "₹450",
    "description": "A contemporary showcase featuring emerging artists, visual work and conversations around new voices.",
    "image": "arts",
    "ticket": "Book tickets",
    "status": "Tickets available"
  },
  {
    "id": 4,
    "title": "The Sunday Table",
    "category": "food",
    "location": "Viman Nagar, Pune",
    "venue": "The Flour Works",
    "address": "Viman Nagar, Pune, Maharashtra",
    "date": "20 Sep 2026",
    "time": "12:30 PM – 3:30 PM",
    "age": "All ages",
    "price": "₹1,200",
    "description": "A long-table Sunday lunch bringing together seasonal plates, local chefs and curious food lovers.",
    "image": "food",
    "ticket": "Reserve a spot",
    "status": "Few spots left"
  },
  {
    "id": 5,
    "title": "Clay & Conversation",
    "category": "workshops",
    "location": "Baner, Pune",
    "venue": "The Studio Pottery",
    "address": "Baner, Pune, Maharashtra",
    "date": "22 Sep 2026",
    "time": "5:30 PM – 8:00 PM",
    "age": "16+",
    "price": "₹950",
    "description": "Make your own hand-built ceramic piece while meeting fellow makers over coffee.",
    "image": "workshops",
    "ticket": "Register",
    "status": "Open"
  },
  {
    "id": 6,
    "title": "Comedy After Dark",
    "category": "comedy",
    "location": "Deccan, Pune",
    "venue": "The Laugh Club",
    "address": "Deccan Gymkhana, Pune, Maharashtra",
    "date": "23 Sep 2026",
    "time": "8:30 PM – 10:30 PM",
    "age": "18+",
    "price": "₹499",
    "description": "A rotating line-up of stand-up comics for a sharp, intimate midweek laugh.",
    "image": "comedy",
    "ticket": "Book tickets",
    "status": "Tickets available"
  },
  {
    "id": 7,
    "title": "City Lights Sessions",
    "category": "music",
    "location": "Balewadi, Pune",
    "venue": "High Spirits Arena",
    "address": "Balewadi High Street, Pune, Maharashtra",
    "date": "25 Sep 2026",
    "time": "7:00 PM – 10:30 PM",
    "age": "18+",
    "price": "₹999",
    "description": "Live indie music, warm lights and a crowd built for discovering your next favourite band.",
    "image": "music",
    "ticket": "Book tickets",
    "status": "Tickets available"
  },
  {
    "id": 8,
    "title": "Frames of the City",
    "category": "arts",
    "location": "Shivajinagar, Pune",
    "venue": "Pune Art House",
    "address": "Shivajinagar, Pune, Maharashtra",
    "date": "27 Sep 2026",
    "time": "4:00 PM – 7:00 PM",
    "age": "All ages",
    "price": "Free",
    "description": "A free photography exhibition exploring everyday Pune through fresh local perspectives.",
    "image": "arts",
    "ticket": "View event",
    "status": "Free entry"
  },
  {
    "id": 9,
    "title": "Sunset Run Club",
    "category": "sports",
    "location": "Aundh, Pune",
    "venue": "Aundh Sports Ground",
    "address": "Aundh, Pune, Maharashtra",
    "date": "28 Sep 2026",
    "time": "6:00 AM – 8:00 AM",
    "age": "16+",
    "price": "₹199",
    "description": "A friendly 5K community run followed by coffee and introductions.",
    "image": "sports",
    "ticket": "Register",
    "status": "Open"
  },
  {
    "id": 10,
    "title": "Future Makers Meetup",
    "category": "tech",
    "location": "Hinjawadi, Pune",
    "venue": "Rajiv Gandhi Infotech Park",
    "address": "Hinjawadi Phase 1, Pune, Maharashtra",
    "date": "29 Sep 2026",
    "time": "6:30 PM – 9:00 PM",
    "age": "18+",
    "price": "₹299",
    "description": "Founders, developers and designers meet for practical talks, demos and new connections.",
    "image": "tech",
    "ticket": "Register",
    "status": "Open"
  },
  {
    "id": 11,
    "title": "Theatre Under the Stars",
    "category": "theatre",
    "location": "Camp, Pune",
    "venue": "Empress Garden",
    "address": "Camp, Pune, Maharashtra",
    "date": "30 Sep 2026",
    "time": "7:30 PM – 10:00 PM",
    "age": "12+",
    "price": "₹650",
    "description": "A beautiful open-air performance under the evening sky.",
    "image": "theatre",
    "ticket": "Book tickets",
    "status": "Tickets available"
  },
  {
    "id": 12,
    "title": "Mindful Sunday",
    "category": "wellness",
    "location": "Hadapsar, Pune",
    "venue": "Osho Garden Studio",
    "address": "Hadapsar, Pune, Maharashtra",
    "date": "1 Oct 2026",
    "time": "8:00 AM – 10:00 AM",
    "age": "16+",
    "price": "₹350",
    "description": "Gentle movement, guided breathwork and a slow morning reset.",
    "image": "wellness",
    "ticket": "Reserve a spot",
    "status": "Open"
  },
  {
    "id": 13,
    "title": "Design & Dosa",
    "category": "networking",
    "location": "Kharadi, Pune",
    "venue": "The Social",
    "address": "Kharadi, Pune, Maharashtra",
    "date": "2 Oct 2026",
    "time": "7:00 PM – 9:30 PM",
    "age": "18+",
    "price": "₹499",
    "description": "A casual creative-industry meetup over good food and short idea-sharing sessions.",
    "image": "networking",
    "ticket": "Register",
    "status": "Open"
  },
  {
    "id": 14,
    "title": "Street Style Pop-Up",
    "category": "fashion",
    "location": "Wakad, Pune",
    "venue": "Phoenix Marketcity Pop-up",
    "address": "Wakad, Pune, Maharashtra",
    "date": "3 Oct 2026",
    "time": "11:00 AM – 8:00 PM",
    "age": "All ages",
    "price": "Free",
    "description": "Independent labels, vintage finds and live styling sessions in one curated pop-up.",
    "image": "fashion",
    "ticket": "View event",
    "status": "Free entry"
  },
  {
    "id": 15,
    "title": "Little Explorers Day",
    "category": "family",
    "location": "Kharadi, Pune",
    "venue": "EON Garden",
    "address": "Kharadi, Pune, Maharashtra",
    "date": "4 Oct 2026",
    "time": "10:00 AM – 2:00 PM",
    "age": "All ages",
    "price": "₹299",
    "description": "Hands-on games, storytelling and creative corners for children and parents.",
    "image": "family",
    "ticket": "Register",
    "status": "Open"
  },
  {
    "id": 16,
    "title": "Coffee & Code",
    "category": "education",
    "location": "Viman Nagar, Pune",
    "venue": "91Springboard",
    "address": "Viman Nagar, Pune, Maharashtra",
    "date": "5 Oct 2026",
    "time": "10:30 AM – 1:00 PM",
    "age": "16+",
    "price": "₹250",
    "description": "A beginner-friendly coding session with coffee, pair programming and practical guidance.",
    "image": "education",
    "ticket": "Register",
    "status": "Open"
  },
  {
    "id": 17,
    "title": "Indie Film Evening",
    "category": "arts",
    "location": "Koregaon Park, Pune",
    "venue": "Local Film Room",
    "address": "Koregaon Park, Pune, Maharashtra",
    "date": "6 Oct 2026",
    "time": "6:30 PM – 9:00 PM",
    "age": "16+",
    "price": "₹399",
    "description": "A curated evening of independent short films followed by a relaxed audience discussion.",
    "image": "arts",
    "ticket": "Book tickets",
    "status": "Open"
  },
  {
    "id": 18,
    "title": "Rooftop House Party",
    "category": "nightlife",
    "location": "Kalyani Nagar, Pune",
    "venue": "Skyline Rooftop",
    "address": "Kalyani Nagar, Pune, Maharashtra",
    "date": "7 Oct 2026",
    "time": "9:00 PM – 1:00 AM",
    "age": "21+",
    "price": "₹899",
    "description": "House music, rooftop views and a late-night city atmosphere.",
    "image": "nightlife",
    "ticket": "Book tickets",
    "status": "Limited"
  }
]);

const read=f=>JSON.parse(fs.readFileSync(f,'utf8')); 
const write=(f,d)=>fs.writeFileSync(f,JSON.stringify(d,null,2));

app.get('/api/health',(req,res)=>res.json({ok:true,service:'Nexora API'}));

app.get('/api/events',(req,res)=>res.json(read(eventsFile)));

app.get('/api/events/:id',(req,res)=>{
  const e=read(eventsFile).find(x=>x.id===Number(req.params.id)); 
  if(!e)return res.status(404).json({message:'Event not found'});
  res.json(e)
});

app.post('/api/events',(req,res)=>{
  const events=read(eventsFile);
  const e={id:Date.now(),...req.body};
  events.push(e);
  write(eventsFile,events);
  res.status(201).json(e)
});

app.post('/api/events/:id/book',(req,res)=>{
  const e=read(eventsFile).find(x=>x.id===Number(req.params.id));
  if(!e)return res.status(404).json({message:'Event not found'});
  
  const b=read(bookingsFile);
  const booking={
    id:Date.now(),
    eventId:e.id,
    event:e.title,
    email:req.body?.email||'guest',
    createdAt:new Date().toISOString()
  };
  
  b.push(booking);
  write(bookingsFile,b);
  res.status(201).json({
    message:'Booking request received',
    booking
  })
});

app.post('/api/auth/register',async(req,res)=>{
  const {name,email,password}=req.body||{};
  
  if(!name||!email||!password)
    return res.status(400).json({
      message:'Please complete all fields.'
    });
  
  const users=read(usersFile);
  
  if(users.some(u=>u.email.toLowerCase()===email.toLowerCase()))
    return res.status(409).json({
      message:'An account with this email already exists.'
    });
  
  const user={
    id:Date.now(),
    name,
    email,
    password:await bcrypt.hash(password,10)
  };
  
  users.push(user);
  write(usersFile,users);
  
  res.status(201).json({
    message:'Account created successfully.',
    user:{
      id:user.id,
      name:user.name,
      email:user.email
    }
  })
});

app.post('/api/auth/login',async(req,res)=>{
  const {email,password}=req.body||{};
  
  const user=read(usersFile).find(
    u=>u.email.toLowerCase()===String(email).toLowerCase()
  );
  
  if(!user||!(await bcrypt.compare(password,user.password)))
    return res.status(401).json({
      message:'Invalid email or password.'
    });
  
  res.json({
    user:{
      id:user.id,
      name:user.name,
      email:user.email
    }
  })
});

app.use(express.static(path.join(__dirname,'..','frontend')));

app.listen(PORT,()=>console.log(`Nexora running at http://localhost:${PORT}`));