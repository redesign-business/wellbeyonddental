const services = [
  "Family & preventive care",
  "Cosmetic dentistry",
  "Restorative dentistry",
  "Emergency treatment",
  "TMJ & sleep therapy",
  "Invisalign clear aligners",
];

const doctors = [
  { name: "Dr. Tammy Neugebauer", role: "Doctor of Dental Surgery", image: "/images/dr.tammy_-480x480-580a1ee0da.jpeg" },
  { name: "Dr. Mariangela Verano", role: "DDS", image: "/images/dr.-verano-480x480-f42b9a7af5.jpg" },
  { name: "Dr. Allison Lundgren", role: "DDS", image: "/images/dreamwave-photo-39-480x480-761ec28922.png" },
  { name: "Dr. Brandon Morales", role: "DDS", image: "/images/dreamwave-photo-45-480x480-3fe2b7e14e.png" },
];

const affiliations = [
  { name: "Spear Dental Education", image: "/images/spear-8a2b6bb866.jpg" },
  { name: "Healthy Start", image: "/images/healthy-start-569ce88f02.jpg" },
  { name: "AAPMD", image: "/images/aapmd-25763aeea7.jpg" },
  { name: "The Breathe Institute", image: "/images/breathe-institute-ambassador-2e9805998c.jpg" },
];

export default function Home() {
  return (
    <main>
      <style>{`
        :root { --ink:#173c3f; --cream:#f7f2e8; --paper:#fffdf8; --mint:#dcebe4; --coral:#ef765f; --line:rgba(23,60,63,.16); }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; background:var(--cream); color:var(--ink); font-family:Arial, Helvetica, sans-serif; }
        a { color:inherit; }
        img { display:block; max-width:100%; }
        .shell { width:min(1180px, calc(100% - 48px)); margin:auto; }
        .eyebrow { margin:0 0 18px; font-size:12px; font-weight:800; letter-spacing:.17em; text-transform:uppercase; }
        .eyebrow span { color:var(--coral); }
        h1,h2,h3,p { margin-top:0; }
        h1,h2 { font-family:Georgia, 'Times New Roman', serif; font-weight:400; letter-spacing:-.035em; }
        h1 { max-width:780px; margin-bottom:24px; font-size:clamp(52px,7.5vw,104px); line-height:.89; }
        h2 { margin-bottom:22px; font-size:clamp(40px,5.2vw,72px); line-height:.96; }
        h3 { font-size:19px; }
        p { line-height:1.65; }
        .button { display:inline-flex; align-items:center; justify-content:center; min-height:52px; padding:0 24px; border-radius:2px; background:var(--coral); color:white; font-size:13px; font-weight:800; letter-spacing:.06em; text-decoration:none; text-transform:uppercase; transition:.2s ease; }
        .button:hover { background:#d95f4b; transform:translateY(-2px); }
        .button:after { content:'↗'; margin-left:18px; font-size:17px; }
        .topline { padding:10px 24px; background:var(--ink); color:white; text-align:center; font-size:12px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; }
        nav { position:relative; z-index:5; border-bottom:1px solid var(--line); background:var(--cream); }
        .navinner { min-height:90px; display:flex; align-items:center; justify-content:space-between; gap:30px; }
        .logo img { width:190px; height:auto; }
        .navlinks { display:flex; align-items:center; gap:32px; }
        .navlinks>a:not(.button) { font-size:13px; font-weight:700; text-decoration:none; }
        .hero { position:relative; overflow:hidden; padding:86px 0 0; }
        .hero:before { content:''; position:absolute; width:560px; height:560px; right:-190px; top:-170px; border:1px solid var(--line); border-radius:50%; }
        .hero-copy { position:relative; z-index:2; }
        .hero-sub { display:flex; align-items:flex-end; justify-content:space-between; gap:36px; margin-bottom:70px; }
        .hero-sub p { max-width:480px; margin:0; font-size:18px; }
        .hero-media { position:relative; height:560px; overflow:hidden; background:var(--ink); }
        .hero-media>img { width:100%; height:100%; object-fit:cover; object-position:center 34%; opacity:.9; }
        .hero-card { position:absolute; left:max(24px, calc((100% - 1180px)/2)); bottom:28px; width:min(350px,calc(100% - 48px)); padding:26px; background:var(--paper); box-shadow:0 14px 40px rgba(20,40,40,.18); }
        .hero-card strong { display:block; margin-bottom:7px; font:400 25px Georgia,serif; }
        .hero-card p { margin:0; font-size:13px; }
        .fastbar { background:var(--ink); color:white; }
        .fastgrid { display:grid; grid-template-columns:repeat(4,1fr); }
        .fastitem { padding:24px; border-right:1px solid rgba(255,255,255,.15); text-align:center; font-size:12px; font-weight:800; letter-spacing:.08em; text-transform:uppercase; }
        .fastitem:last-child { border:0; }
        section { padding:120px 0; }
        .split { display:grid; grid-template-columns:1fr 1fr; gap:8vw; align-items:center; }
        .image-stack { position:relative; min-height:620px; }
        .image-stack .large { width:86%; height:560px; object-fit:cover; }
        .image-stack .small { position:absolute; right:0; bottom:0; width:44%; aspect-ratio:1; border:12px solid var(--cream); object-fit:cover; }
        .section-copy>p { max-width:530px; font-size:17px; }
        .checkgrid { display:grid; grid-template-columns:1fr 1fr; gap:0; margin:34px 0; border-top:1px solid var(--line); }
        .check { padding:16px 4px; border-bottom:1px solid var(--line); font-size:13px; font-weight:700; }
        .check:before { content:'✓'; margin-right:10px; color:var(--coral); }
        .team { background:var(--mint); }
        .section-head { display:flex; justify-content:space-between; align-items:flex-end; gap:32px; margin-bottom:50px; }
        .section-head h2 { max-width:700px; margin-bottom:0; }
        .section-head p { max-width:380px; margin:0; }
        .doctorgrid { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
        .doctor { margin:0; }
        .doctor img { width:100%; aspect-ratio:4/5; object-fit:cover; filter:saturate(.84); }
        .doctor figcaption { padding:18px 4px 0; }
        .doctor strong,.doctor span { display:block; }
        .doctor strong { font:400 20px Georgia,serif; }
        .doctor span { margin-top:6px; font-size:11px; font-weight:800; letter-spacing:.1em; text-transform:uppercase; opacity:.7; }
        .urgent { padding:0; display:grid; grid-template-columns:1.05fr .95fr; background:#f2ae77; }
        .urgent-media { min-height:650px; }
        .urgent-media img { width:100%; height:100%; object-fit:cover; }
        .urgent-copy { display:flex; align-items:center; padding:8vw; }
        .urgent-copy p { max-width:500px; font-size:17px; }
        .number { margin:30px 0; font:400 clamp(30px,4vw,50px) Georgia,serif; }
        .technology { background:var(--paper); }
        .tech-image { position:relative; }
        .tech-image img { width:100%; height:560px; object-fit:cover; }
        .tech-note { position:absolute; right:-30px; bottom:30px; width:220px; padding:25px; background:var(--ink); color:white; }
        .tech-note strong { display:block; font:400 27px Georgia,serif; }
        .tech-note span { font-size:11px; text-transform:uppercase; letter-spacing:.12em; }
        .affiliations { text-align:center; }
        .affiliations h2 { max-width:800px; margin-left:auto; margin-right:auto; }
        .affgrid { display:grid; grid-template-columns:repeat(4,1fr); margin-top:50px; border:1px solid var(--line); background:white; }
        .aff { min-height:190px; padding:30px; display:flex; align-items:center; justify-content:center; border-right:1px solid var(--line); }
        .aff:last-child { border:0; }
        .aff img { max-width:150px; max-height:100px; object-fit:contain; }
        .testimonial { padding:0 0 120px; }
        .quote { display:grid; grid-template-columns:.8fr 1.2fr; background:var(--ink); color:white; }
        .quote img { width:100%; height:100%; min-height:470px; object-fit:cover; }
        blockquote { margin:0; padding:8vw; display:flex; flex-direction:column; justify-content:center; }
        blockquote p { font:400 clamp(28px,4vw,48px)/1.15 Georgia,serif; }
        blockquote cite { font-size:12px; font-style:normal; font-weight:800; letter-spacing:.12em; text-transform:uppercase; }
        .faqgrid { display:grid; grid-template-columns:.8fr 1.2fr; gap:8vw; align-items:start; }
        .faqvisual img { width:100%; height:600px; object-fit:cover; }
        details { padding:24px 0; border-top:1px solid var(--line); }
        details:last-child { border-bottom:1px solid var(--line); }
        summary { cursor:pointer; list-style:none; font:400 21px Georgia,serif; }
        summary:after { content:'+'; float:right; color:var(--coral); }
        details[open] summary:after { content:'−'; }
        details p { margin:18px 40px 0 0; color:#466163; font-size:14px; }
        .final { padding:100px 0; background:var(--mint); }
        .finalinner { display:grid; grid-template-columns:1.2fr .8fr; gap:6vw; align-items:center; }
        .final h2 { margin:0; }
        .finalbox { padding:34px; border:1px solid var(--ink); }
        .finalbox p { margin-bottom:24px; }
        footer { padding:60px 0 30px; background:var(--ink); color:white; }
        .footergrid { display:grid; grid-template-columns:1.2fr .8fr .8fr; gap:50px; }
        .footerlogo { width:190px; margin-bottom:25px; filter:brightness(0) invert(1); }
        footer h3 { font:400 18px Georgia,serif; }
        footer p,footer a { font-size:13px; line-height:1.8; color:rgba(255,255,255,.74); }
        footer a { display:block; text-decoration:none; }
        .copyright { margin-top:50px; padding-top:24px; border-top:1px solid rgba(255,255,255,.14); font-size:11px; color:rgba(255,255,255,.5); }
        @media (max-width:800px) {
          .shell { width:min(100% - 30px,1180px); }
          .topline { font-size:10px; }
          .navinner { min-height:76px; }
          .logo img { width:145px; }
          .navlinks>a:not(.button) { display:none; }
          .navlinks .button { min-height:44px; padding:0 14px; font-size:10px; }
          .hero { padding-top:60px; }
          .hero-sub,.section-head { display:block; }
          .hero-sub .button { margin-top:25px; }
          .hero-media { height:450px; }
          .fastgrid { grid-template-columns:1fr 1fr; }
          .fastitem:nth-child(2) { border-right:0; }
          .fastitem { border-bottom:1px solid rgba(255,255,255,.15); }
          section { padding:80px 0; }
          .split,.urgent,.quote,.faqgrid,.finalinner,.footergrid { grid-template-columns:1fr; }
          .image-stack { min-height:490px; }
          .image-stack .large { height:440px; }
          .doctorgrid { grid-template-columns:1fr 1fr; }
          .urgent-media { min-height:430px; }
          .urgent-copy { padding:70px 24px; }
          .tech-note { right:10px; }
          .affgrid { grid-template-columns:1fr 1fr; }
          .aff:nth-child(2) { border-right:0; }
          .aff { border-bottom:1px solid var(--line); }
          blockquote { padding:60px 28px; }
          .faqvisual img { height:420px; }
        }
      `}</style>

      <div className="topline">Same-day appointments · Walk-ins welcome · Emergency care 7 days a week</div>
      <nav aria-label="Main navigation">
        <div className="shell navinner">
          <a className="logo" href="#top" aria-label="Well Beyond Dental home">
            <img src="/images/asset-1-2x-40f09b4b3f.png" alt="Well Beyond Dental" />
          </a>
          <div className="navlinks">
            <a href="#services">Services</a>
            <a href="#team">Our doctors</a>
            <a href="#why-us">Why us</a>
            <a href="#faq">FAQ</a>
            <a className="button" href="tel:7757863472">Book an appointment</a>
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="shell hero-copy">
          <p className="eyebrow"><span>Reno, Nevada</span> · Complete dental care</p>
          <h1>Your whole health starts with your smile.</h1>
          <div className="hero-sub">
            <p>One Reno practice. On-site specialists. Thoughtful care for every stage of life, from a first cleaning to a full smile transformation.</p>
            <a className="button" href="tel:7757863472">Book an appointment</a>
          </div>
        </div>
        <div className="hero-media">
          <img src="/images/wbd-our-services-7fb1a9e432.jpeg" alt="Well Beyond Dental care team working with a patient" />
          <div className="hero-card">
            <p className="eyebrow"><span>Best of Reno</span></p>
            <strong>Care that goes beyond teeth.</strong>
            <p>Comprehensive dentistry for the whole family at 9710 S McCarran Blvd.</p>
          </div>
        </div>
      </header>

      <div className="fastbar" aria-label="Patient conveniences">
        <div className="shell fastgrid">
          <div className="fastitem">Same-day appointments</div>
          <div className="fastitem">Walk-ins accepted</div>
          <div className="fastitem">On call 24/7</div>
          <div className="fastitem">No extra fees</div>
        </div>
      </div>

      <section id="services">
        <div className="shell split">
          <div className="image-stack">
            <img className="large" src="/images/great-smile-980x653-28dfc8784c.jpg" alt="Patient smiling during a visit at Well Beyond Dental" />
            <img className="small" src="/images/invisilign-01-480x480-cdec54cb35.webp" alt="Invisalign clear aligners" />
          </div>
          <div className="section-copy">
            <p className="eyebrow"><span>01</span> · Everything in one place</p>
            <h2>One practice, every part of your smile.</h2>
            <p>Our on-site dental specialists work together across prevention, restoration, cosmetics, airway health, and urgent care. That means fewer referrals and a plan shaped around the full picture of your health.</p>
            <div className="checkgrid">
              {services.map((service) => <div className="check" key={service}>{service}</div>)}
            </div>
            <a className="button" href="tel:7757863472">Book an appointment</a>
          </div>
        </div>
      </section>

      <section className="team" id="team">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span>Meet your care team</span></p>
              <h2>Four doctors. One standard of care.</h2>
            </div>
            <p>Experienced clinicians collaborate under one roof, so your care stays connected from routine exams to advanced treatment.</p>
          </div>
          <div className="doctorgrid">
            {doctors.map((doctor) => (
              <figure className="doctor" key={doctor.name}>
                <img src={doctor.image} alt={doctor.name} />
                <figcaption><strong>{doctor.name}</strong><span>{doctor.role}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="urgent" id="why-us">
        <div className="urgent-media">
          <img src="/images/well-beyond-emergency-services-980x653-31e8070079.jpg" alt="Well Beyond Dental providing emergency dental care" />
        </div>
        <div className="urgent-copy">
          <div>
            <p className="eyebrow"><span>02</span> · Here when it hurts</p>
            <h2>Dental emergencies do not check the calendar.</h2>
            <p>Severe tooth pain, a broken tooth, or another urgent concern? Our experienced team offers same-day visits, walk-ins, 24/7 on-call availability, and emergency treatment seven days a week.</p>
            <div className="number">(775) 786-3472</div>
            <a className="button" href="tel:7757863472">Book an appointment</a>
          </div>
        </div>
      </section>

      <section className="technology">
        <div className="shell split">
          <div className="section-copy">
            <p className="eyebrow"><span>Advanced technology</span> · Clearer answers</p>
            <h2>See more. Plan better. Treat precisely.</h2>
            <p>From detailed CBCT scans and digital X-rays to non-invasive cold laser therapy, our technology gives your care team better information and helps make treatment more efficient and comfortable.</p>
            <div className="checkgrid">
              <div className="check">3D dental imaging</div>
              <div className="check">Digital X-rays</div>
              <div className="check">Cold laser therapy</div>
              <div className="check">Digital smile planning</div>
            </div>
            <a className="button" href="tel:7757863472">Book an appointment</a>
          </div>
          <div className="tech-image">
            <img src="/images/digital-image-review-980x654-a632084782.jpg" alt="Dentist reviewing advanced 3D dental imaging" />
            <div className="tech-note"><strong>3D</strong><span>Complete diagnostic imaging</span></div>
          </div>
        </div>
      </section>

      <section className="affiliations">
        <div className="shell">
          <p className="eyebrow"><span>03</span> · Continuing education & affiliations</p>
          <h2>Specialized knowledge, backed by respected organizations.</h2>
          <p>Our professional affiliations reflect ongoing education in comprehensive, physiological, and airway-focused dentistry.</p>
          <div className="affgrid">
            {affiliations.map((affiliation) => (
              <div className="aff" key={affiliation.name}>
                <img src={affiliation.image} alt={affiliation.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="shell quote">
          <img src="/images/wbd-dr-tammy-3a371366c8.jpg" alt="Dr. Tammy Neugebauer, Best of Reno" />
          <blockquote>
            <p>“Everyone in this office is amazing and they make you feel really comfortable. I wouldn’t go anywhere else.”</p>
            <cite>Katrina Edwards · Patient</cite>
          </blockquote>
        </div>
      </section>

      <section id="faq">
        <div className="shell faqgrid">
          <div className="faqvisual">
            <img src="/images/smiling-dental-patient-980x653-9886451213.jpg" alt="Comfortable patient smiling at Well Beyond Dental" />
          </div>
          <div>
            <p className="eyebrow"><span>Good to know</span></p>
            <h2>Before your visit.</h2>
            <details>
              <summary>Can I be seen today?</summary>
              <p>Yes. Same-day appointments are available and walk-ins are accepted. Call our office so the team can prepare for your needs.</p>
            </details>
            <details>
              <summary>Do you treat dental emergencies?</summary>
              <p>Yes. We provide emergency dental treatment seven days a week and offer 24/7 on-call availability for urgent concerns.</p>
            </details>
            <details>
              <summary>Can my whole family come here?</summary>
              <p>Yes. Our team provides comprehensive dental care for the whole family, from preventive visits to restorative and cosmetic treatment.</p>
            </details>
            <details>
              <summary>What advanced services do you offer?</summary>
              <p>Services include 3D imaging, digital X-rays, cold laser therapy, Invisalign, same-day cosmetic dentistry, TMJ treatment, and sleep apnea therapy.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="final">
        <div className="shell finalinner">
          <div>
            <p className="eyebrow"><span>Better dental care is our mission</span></p>
            <h2>Ready to feel good about going to the dentist?</h2>
          </div>
          <div className="finalbox">
            <p>Same-day appointments are available at our Reno office. Let’s find the right next step for your smile.</p>
            <a className="button" href="tel:7757863472">Book an appointment</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell">
          <div className="footergrid">
            <div>
              <img className="footerlogo" src="/images/asset-1-2x-480x183-4cbc0eb27c.png" alt="Well Beyond Dental" />
              <p>Comprehensive care for healthier smiles and whole-body well-being in Reno, Nevada.</p>
            </div>
            <div>
              <h3>Visit us</h3>
              <p>9710 S McCarran Blvd<br />Reno, NV 89523</p>
              <a href="tel:7757863472">(775) 786-3472</a>
              <a href="mailto:info@wellbeyonddental.com">info@wellbeyonddental.com</a>
            </div>
            <div>
              <h3>Explore</h3>
              <a href="#services">Services</a>
              <a href="#team">Our doctors</a>
              <a href="#why-us">Emergency care</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
          <div className="copyright">© 2026 Well Beyond Dental. Reno, Nevada.</div>
        </div>
      </footer>
    </main>
  );
}
