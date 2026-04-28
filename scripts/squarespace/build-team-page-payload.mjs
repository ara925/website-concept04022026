import fs from "node:fs/promises";
import path from "node:path";

const root = path.resolve(".");
const outputPath = path.join(root, "squarespace", "team-page-code-block.html");

const assetBase =
  "https://cdn.jsdelivr.net/gh/ara925/website-concept04022026@main/src/assets";

const heroImage =
  "https://images.squarespace-cdn.com/content/69c88ba8bbe07315a5d85a47/cd995043-3c66-49ad-b9d7-0698789bb9ce/Decker+Group+Photo.jpg?content-type=image%2Fjpeg";
const bannerImage =
  "https://images.squarespace-cdn.com/content/69c88ba8bbe07315a5d85a47/da78eb4b-1355-468c-afc3-0d3bcc3159c8/facility-interior.jpg?content-type=image%2Fjpeg";

const teamMembers = [
  {
    key: "bill",
    name: "Bill Janis",
    title: "Managing Director",
    email: "bill@deckerhealthcare.com",
    phone: "(312) 493-9301",
    cardImage:
      "https://images.squarespace-cdn.com/content/69c88ba8bbe07315a5d85a47/281cd377-318f-44fc-a58a-e9ca754a29fa/Bill+Janis+-+Photo+4+Office+Background.jpg?content-type=image%2Fjpeg",
    bio: [
      "Bill Janis is the Managing Director of Decker Healthcare Group, where he leads the firm's seniors housing brokerage practice. He has spent his entire professional career in the seniors housing industry, beginning at the age of 19, and brings a firsthand understanding of how these communities are built, operated, and ultimately transitioned.",
      "Throughout his career, Bill has been involved in the sale and financing of over $400 million in seniors housing transactions. His approach is built on direct relationships with owner-operators, including the families, partnerships, and local organizations that built and run senior care communities. He understands their operations, their challenges, and the weight behind the decision to sell. That perspective, combined with deep underwriting expertise and hands on deal management, drives outcomes for his clients.",
      "In addition to his brokerage work, Bill is a licensed Assisted Living Administrator, reflecting a continued commitment to understanding the day-to-day operational realities of the communities he represents. This experience shapes how he underwrites facilities, advises clients, and communicates with buyers.",
      "Bill is also the chief editor of Decker's quarterly Market Trends Report, which provides analysis on operational trends across the seniors housing sector. The report is based on direct market engagement with stakeholders of all types and offers real time insight that owners, operators, and investors have benefited from.",
      "He has advised on transactions with particular expertise in family run communities, as well as assets affiliated with nonprofit organizations, faith-based systems, government entities, and critical access hospitals transitioning out of senior care operations.",
    ],
    gallery: [
      {
        src: "https://images.squarespace-cdn.com/content/69c88ba8bbe07315a5d85a47/281cd377-318f-44fc-a58a-e9ca754a29fa/Bill+Janis+-+Photo+4+Office+Background.jpg?content-type=image%2Fjpeg",
        alt: "Bill Janis portrait in office setting",
        label: "Office Background",
      },
      {
        src: `${assetBase}/bill-janis-industrial.jpg`,
        alt: "Bill Janis portrait with industrial background",
        label: "Industrial Background",
      },
      {
        src: `${assetBase}/bill-janis-secondary.jpg`,
        alt: "Bill Janis alternate portrait",
        label: "Alternate Portrait",
      },
    ],
  },
  {
    key: "justin",
    name: "Justin Valle",
    title: "Senior Associate",
    email: "justin@deckerhealthcare.com",
    phone: "(847) 987-9266",
    cardImage:
      "https://images.squarespace-cdn.com/content/69c88ba8bbe07315a5d85a47/a0d04b7f-527c-42a9-b594-4ee29d583133/Justin+Valle+-+Photo+1+Office+Background.jpg?content-type=image%2Fjpeg",
    bio: [
      "Justin Valle is a Senior Associate at Decker Healthcare Group, where he leads origination and client advisory across the firm's nationwide coverage. Justin specializes in identifying and engaging seniors housing owners and operators who may benefit from a transaction, building relationships through direct outreach and industry networking.",
      "With four years of experience in seniors housing brokerage, Justin has developed deep expertise in prospecting, market research, and deal origination, and is responsible for continuously updating and expanding the firm's buyer database.",
      "Justin also manages buyer and seller communications throughout the deal process and contributes to the firm's market intelligence and reporting efforts.",
    ],
    gallery: [
      {
        src: "https://images.squarespace-cdn.com/content/69c88ba8bbe07315a5d85a47/a0d04b7f-527c-42a9-b594-4ee29d583133/Justin+Valle+-+Photo+1+Office+Background.jpg?content-type=image%2Fjpeg",
        alt: "Justin Valle portrait in office setting",
        label: "Office Background",
      },
      {
        src: `${assetBase}/justin-valle-industrial.jpg`,
        alt: "Justin Valle portrait with industrial background",
        label: "Industrial Background",
      },
    ],
  },
  {
    key: "jeff",
    name: "Jeffrey Rhodes",
    title: "Managing Director",
    email: "jeff@deckerhealthcare.com",
    phone: "(662) 404-1668",
    cardImage:
      "https://images.squarespace-cdn.com/content/69c88ba8bbe07315a5d85a47/3ad00fc8-310d-4c8b-bf70-628f21c4fd14/Jeff+Rhodes+-+Photo+1+Office+Background+%281%29.png?content-type=image%2Fpng",
    bio: [
      "Jeff Rhodes is a Managing Director at Decker Healthcare Group, where he advises owners, operators, and investors across the seniors housing and long term care industry, helping them evaluate the sale, lease, or financing of their communities.",
      "Jeff's career in the senior care space began in 2004. He later became a partner at The Rhoman Group, Inc., where he serves as President and has been directly involved in the acquisition, development, and structuring of long term care assets across multiple states. His experience includes navigating certificate of need processes, bed licensing, and complex regulatory approvals tied to highly regulated healthcare environments.",
      "Throughout his career, Jeff has been involved in over $800 million in seniors housing and healthcare transactions. A core focus of his work has been within the certified Medicaid bed market, where he has helped source new bed allocations and facilitate the transfer of existing beds. His group has played a role in bringing thousands of beds to market over the past two decades, with particular depth in Texas, Mississippi, and Arkansas.",
      "Jeff is also actively involved in Valiant Healthcare Management, a leading provider of senior care throughout northern Louisiana. His operational involvement provides real time insight into staffing, care delivery, and financial performance, shaping how he evaluates opportunities and advises clients.",
    ],
    gallery: [
      {
        src: "https://images.squarespace-cdn.com/content/69c88ba8bbe07315a5d85a47/3ad00fc8-310d-4c8b-bf70-628f21c4fd14/Jeff+Rhodes+-+Photo+1+Office+Background+%281%29.png?content-type=image%2Fpng",
        alt: "Jeffrey Rhodes portrait in office setting",
        label: "Office Background",
      },
      {
        src: `${assetBase}/jeff-rhodes-industrial.png`,
        alt: "Jeffrey Rhodes portrait with industrial background",
        label: "Industrial Background",
      },
    ],
  },
  {
    key: "cullen",
    name: "Cullen Nguyen",
    title: "Associate",
    email: "cullen@deckerhealthcare.com",
    phone: "(317) 790-5895",
    cardImage:
      "https://images.squarespace-cdn.com/content/69c88ba8bbe07315a5d85a47/a78e8741-4bb6-4b90-83ff-709880c8dfb5/Cullen+Nguyen+-+Photo+1+Office+Background.jpg?content-type=image%2Fjpeg",
    bio: [
      "Cullen Nguyen is an Associate at Decker Healthcare Group, where he supports the firm's deal production, underwriting analysis, and market research. With a background in accounting and economics, Cullen brings a quantitative perspective to seniors housing transactions, with an understanding of both the macroeconomic trends shaping the industry and the day-to-day operational challenges that senior living professionals face.",
      "Cullen contributes to buyer database management, marketing material coordination, and data operations for active listings.",
    ],
    gallery: [
      {
        src: "https://images.squarespace-cdn.com/content/69c88ba8bbe07315a5d85a47/a78e8741-4bb6-4b90-83ff-709880c8dfb5/Cullen+Nguyen+-+Photo+1+Office+Background.jpg?content-type=image%2Fjpeg",
        alt: "Cullen Nguyen portrait in office setting",
        label: "Office Background",
      },
      {
        src: `${assetBase}/cullen-nguyen-industrial.jpg`,
        alt: "Cullen Nguyen portrait with industrial background",
        label: "Industrial Background",
      },
    ],
  },
];

const cardsMarkup = teamMembers
  .map(
    (member) => `
        <button class="team-card" type="button" onclick="openModal('${member.key}')">
          <img id="${member.key}" src="${member.cardImage}" alt="${member.name}">
          <div class="team-card-tag">View Profile</div>
          <div class="team-card-gradient"></div>
          <div class="team-card-info">
            <h3 style="color:#ffffff">${member.name}</h3>
            <p>${member.title}</p>
            <span>${member.gallery.length} Photos</span>
          </div>
        </button>`,
  )
  .join("");

const teamDataJson = JSON.stringify(teamMembers);

const html = String.raw`<style>
.page-section.vertical-alignment--middle:not(.content-collection):not(.gallery-section):not(.user-items-list-section):not(.editmode-changing-rowcount).section-height--small>.content-wrapper{padding-top:0;padding-bottom:0}
.fe-block-yui_3_17_2_1_1775732590002_737{background:#0a0f1c!important}
.sq-wrap{--bg:#0a0f1c;--bg-card:#0f1525;--bg-panel:#091221;--fg:#e2e8f0;--fg-muted:#8a9bb5;--primary:#3b82f6;--border:#1e2a3f;--border-strong:rgba(255,255,255,.1);font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--fg);line-height:1.5;-webkit-font-smoothing:antialiased}
.sq-wrap *,.sq-wrap *::before,.sq-wrap *::after{margin:0;padding:0;box-sizing:border-box}
.sq-wrap a{color:inherit;text-decoration:none}.sq-wrap img{max-width:100%;display:block}.sq-wrap ul{list-style:none}.sq-wrap button{font:inherit}
.sq-wrap .hero{position:relative;min-height:75vh;display:flex;align-items:flex-end;overflow:hidden;padding-top:80px}
.sq-wrap .hero-bg{position:absolute;inset:0}.sq-wrap .hero-bg img{width:100%;height:100%;object-fit:cover;object-position:center}
.sq-wrap .hero-bg::after{content:'';position:absolute;inset:0;background:rgba(10,15,28,.72)}
.sq-wrap .hero-gradient{position:absolute;bottom:0;left:0;right:0;height:160px;background:linear-gradient(to top,var(--bg),transparent)}
.sq-wrap .hero-content{position:relative;z-index:2;max-width:1400px;margin:0 auto;padding:0 48px 80px;width:100%}
.sq-wrap .accent-line{width:60px;height:3px;background:var(--primary);margin-bottom:24px}
.sq-wrap .label{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.2em;color:var(--primary);margin-bottom:16px}
.sq-wrap .heading-xl{font-size:clamp(2.5rem,5vw,4.5rem);font-weight:900;text-transform:uppercase;line-height:1;margin-bottom:24px;color:#fff}
.sq-wrap h2.heading{font-size:clamp(1.75rem,3.5vw,3rem);font-weight:700;text-transform:uppercase}
.sq-wrap .subtitle{font-size:1.15rem;color:#a0aec0;max-width:640px;line-height:1.7}
.sq-wrap .section{padding:96px 48px}
.sq-wrap .section-inner{max-width:1400px;margin:0 auto}
.sq-wrap .photo-banner{position:relative;height:40vh;overflow:hidden}
.sq-wrap .photo-banner img{width:100%;height:100%;object-fit:cover}
.sq-wrap .photo-banner-overlay{position:absolute;inset:0;background:rgba(10,15,28,.6);display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;padding:24px}
.sq-wrap .photo-banner-overlay p{font-size:clamp(1.5rem,3vw,2.5rem);font-weight:900;text-transform:uppercase;letter-spacing:.04em}
.sq-wrap .team-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2px}
.sq-wrap .team-card{position:relative;height:460px;overflow:hidden;cursor:pointer;border:1px solid rgba(255,255,255,.03);background:#08111f;text-align:left;transition:transform .35s ease,border-color .35s ease}
.sq-wrap .team-card:hover{transform:translateY(-4px);border-color:rgba(59,130,246,.28)}
.sq-wrap .team-card img{width:100%;height:100%;object-fit:cover;object-position:top;transition:transform .6s ease,filter .35s ease;filter:brightness(.55)}
.sq-wrap .team-card:hover img{transform:scale(1.03);filter:brightness(.82)}
.sq-wrap .team-card-tag{position:absolute;top:22px;left:22px;z-index:2;display:inline-flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(59,130,246,.35);background:rgba(10,15,28,.7);color:var(--primary);font-size:10px;font-weight:700;letter-spacing:.24em;text-transform:uppercase;backdrop-filter:blur(10px)}
.sq-wrap .team-card-gradient{position:absolute;inset:auto 0 0 0;height:65%;background:linear-gradient(to top,rgba(10,15,28,.97),rgba(10,15,28,.18),transparent)}
.sq-wrap .team-card-info{position:absolute;bottom:24px;left:24px;right:24px;z-index:2}
.sq-wrap .team-card-info h3{font-size:1.1rem;font-weight:700}
.sq-wrap .team-card-info p{font-size:.82rem;color:var(--primary);text-transform:uppercase;letter-spacing:.06em;margin-top:4px}
.sq-wrap .team-card-info span{display:block;margin-top:18px;padding-top:16px;border-top:1px solid rgba(255,255,255,.1);font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--fg-muted)}
.sq-wrap .modal-overlay{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;padding:28px;background:rgba(5,10,18,.84);backdrop-filter:blur(12px)}
.sq-wrap .modal-content{position:relative;width:min(1220px,100%);max-height:min(88vh,980px);display:grid;grid-template-columns:minmax(0,1.05fr) minmax(420px,.95fr);overflow:hidden;border:1px solid var(--border-strong);background:rgba(9,18,33,.96);box-shadow:0 35px 120px rgba(0,0,0,.55)}
.sq-wrap .modal-close{position:absolute;top:18px;right:18px;z-index:20;width:42px;height:42px;border-radius:999px;border:1px solid rgba(255,255,255,.12);background:rgba(5,10,18,.7);color:var(--fg-muted);cursor:pointer;transition:border-color .25s ease,color .25s ease,transform .25s ease}
.sq-wrap .modal-close:hover{color:var(--fg);border-color:rgba(59,130,246,.4);transform:translateY(-1px)}
.sq-wrap .modal-media{display:flex;flex-direction:column;background:#050b15;border-right:1px solid rgba(255,255,255,.08)}
.sq-wrap .modal-stage{position:relative;min-height:560px;flex:1}
.sq-wrap .modal-stage img{width:100%;height:100%;object-fit:cover;object-position:top}
.sq-wrap .modal-stage::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,#06101d,rgba(6,16,29,.18),rgba(6,16,29,.06))}
.sq-wrap .modal-stage::before{content:'';position:absolute;inset:0 auto auto 0;width:100%;height:120px;background:linear-gradient(to bottom,rgba(6,16,29,.78),transparent);z-index:1}
.sq-wrap .modal-stage-meta{position:absolute;left:28px;right:28px;bottom:28px;z-index:2;display:flex;align-items:flex-end;justify-content:space-between;gap:18px}
.sq-wrap .modal-photo-label{margin-bottom:10px;color:var(--primary);font-size:11px;font-weight:700;letter-spacing:.28em;text-transform:uppercase}
.sq-wrap .modal-photo-count{color:rgba(255,255,255,.72);font-size:.95rem}
.sq-wrap .modal-nav{display:flex;gap:10px}
.sq-wrap .modal-nav button{width:44px;height:44px;border-radius:999px;border:1px solid rgba(255,255,255,.14);background:rgba(5,10,18,.72);color:#fff;cursor:pointer;transition:border-color .25s ease,color .25s ease,transform .25s ease}
.sq-wrap .modal-nav button:hover{border-color:rgba(59,130,246,.45);color:var(--primary);transform:translateY(-1px)}
.sq-wrap .modal-thumbs{display:flex;gap:14px;overflow-x:auto;padding:22px 28px;border-top:1px solid rgba(255,255,255,.08);background:#06101d}
.sq-wrap .modal-thumb{flex:0 0 66px;height:82px;border:1px solid rgba(255,255,255,.12);overflow:hidden;background:none;cursor:pointer;opacity:.72;transition:opacity .25s ease,border-color .25s ease,transform .25s ease}
.sq-wrap .modal-thumb img{width:100%;height:100%;object-fit:cover;object-position:top}
.sq-wrap .modal-thumb:hover{opacity:1;transform:translateY(-2px)}
.sq-wrap .modal-thumb.is-active{opacity:1;border-color:var(--primary);box-shadow:0 0 0 1px rgba(59,130,246,.32)}
.sq-wrap .modal-panel{padding:34px 34px 32px 34px;overflow-y:auto}
.sq-wrap .modal-kicker{margin-bottom:12px;color:var(--primary);font-size:11px;font-weight:700;letter-spacing:.28em;text-transform:uppercase}
.sq-wrap .modal-name{font-size:clamp(2rem,3vw,3rem);font-weight:900;line-height:1;text-transform:uppercase;color:#fff}
.sq-wrap .modal-title{margin-top:14px;color:var(--primary);font-size:1rem;font-weight:600}
.sq-wrap .modal-contact{display:grid;gap:12px;margin:28px 0 22px}
.sq-wrap .modal-contact a{display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:999px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);color:var(--fg-muted);transition:border-color .25s ease,color .25s ease}
.sq-wrap .modal-contact a:hover{border-color:rgba(59,130,246,.4);color:#fff}
.sq-wrap .modal-contact-label{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;color:var(--primary);font-size:12px}
.sq-wrap .modal-stats{display:grid;grid-template-columns:220px 1fr;gap:14px;margin-bottom:24px}
.sq-wrap .modal-stat,.sq-wrap .modal-note{padding:18px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03)}
.sq-wrap .modal-stat-label,.sq-wrap .modal-note-label{color:var(--primary);font-size:11px;font-weight:700;letter-spacing:.24em;text-transform:uppercase}
.sq-wrap .modal-stat-value{margin-top:12px;font-size:2rem;font-weight:800;color:#fff}
.sq-wrap .modal-stat-copy,.sq-wrap .modal-note-copy{margin-top:10px;color:var(--fg-muted);font-size:.95rem;line-height:1.75}
.sq-wrap .modal-bio{display:grid;gap:18px;color:var(--fg-muted);font-size:.95rem;line-height:1.82}
@media (max-width: 1024px){.sq-wrap .team-grid{grid-template-columns:repeat(2,1fr)!important}.sq-wrap .modal-content{grid-template-columns:1fr;max-height:92vh}.sq-wrap .modal-media{border-right:none;border-bottom:1px solid rgba(255,255,255,.08)}.sq-wrap .modal-stage{min-height:440px}.sq-wrap .modal-stats{grid-template-columns:1fr}}
@media (max-width: 768px){.sq-wrap .section{padding:48px 20px}.sq-wrap .hero-content{padding:0 20px 40px}.sq-wrap .subtitle{font-size:1.05rem}.sq-wrap .team-grid{grid-template-columns:1fr!important}.sq-wrap .team-card{height:420px}.sq-wrap .modal-overlay{padding:12px}.sq-wrap .modal-content{max-height:94vh}.sq-wrap .modal-panel{padding:24px 20px 24px}.sq-wrap .modal-stage{min-height:360px}.sq-wrap .modal-stage-meta{left:18px;right:18px;bottom:18px;align-items:flex-start;flex-direction:column}.sq-wrap .modal-nav{align-self:flex-end}.sq-wrap .modal-thumbs{padding:18px 18px 20px}.sq-wrap .modal-stats{grid-template-columns:1fr}.sq-wrap .photo-banner{height:32vh}}
#jeff{object-position:0 -48px}#cullen{object-position:0 -10px}#justin{object-position:0 -10px}#bill{object-position:0 0}
</style>

<div class="sq-wrap" data-decker-team-gallery-page="true">
  <section class="hero">
    <div class="hero-bg">
      <img src="${heroImage}" alt="Team photo of Decker Healthcare Group">
    </div>
    <div class="hero-gradient"></div>
    <div class="hero-content">
      <div class="accent-line"></div>
      <h1 class="heading-xl">Our Team</h1>
      <p class="subtitle">A focused team of seniors housing professionals with direct transactional experience and deep market relationships.</p>
    </div>
  </section>

  <section class="section">
    <div class="section-inner">
      <div class="accent-line"></div>
      <p class="label">Leadership</p>
      <h2 class="heading" style="margin-bottom:64px; color:#ffffff">Meet Our Team</h2>

      <div class="team-grid">
${cardsMarkup}
      </div>

      <div class="modal-overlay" id="team-modal" aria-hidden="true" onclick="if(event.target===this)closeModal();">
        <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-name">
          <button onclick="closeModal()" class="modal-close" aria-label="Close profile window">&times;</button>

          <div class="modal-media">
            <div class="modal-stage">
              <img src="" alt="" id="modal-stage-img">
              <div class="modal-stage-meta">
                <div>
                  <p class="modal-photo-label" id="modal-photo-label"></p>
                  <p class="modal-photo-count" id="modal-photo-count"></p>
                </div>
                <div class="modal-nav">
                  <button type="button" onclick="stepModal(-1)" aria-label="Show previous photo">&#8592;</button>
                  <button type="button" onclick="stepModal(1)" aria-label="Show next photo">&#8594;</button>
                </div>
              </div>
            </div>
            <div class="modal-thumbs" id="modal-thumbs"></div>
          </div>

          <div class="modal-panel">
            <div class="accent-line" style="margin-bottom:18px"></div>
            <p class="modal-kicker">Leadership Profile</p>
            <h3 class="modal-name" id="modal-name"></h3>
            <p class="modal-title" id="modal-title"></p>
            <div class="modal-contact" id="modal-contact"></div>

            <div class="modal-stats">
              <div class="modal-stat">
                <p class="modal-stat-label">Gallery</p>
                <p class="modal-stat-value" id="modal-gallery-count"></p>
                <p class="modal-stat-copy">Additional portraits and alternate profile photography for this team member.</p>
              </div>
              <div class="modal-note">
                <p class="modal-note-label">Profile Window</p>
                <p class="modal-note-copy">This keeps the main Team page clean while opening a deeper profile view with more photography and a smoother presentation when a card is selected.</p>
              </div>
            </div>

            <div class="modal-bio" id="modal-bio"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="photo-banner">
    <img src="${bannerImage}" alt="Senior living facility interior">
    <div class="photo-banner-overlay"><p>Trusted Advisors in Seniors Housing</p></div>
  </section>

  <script>
  (function () {
    var teamData = ${teamDataJson};
    var modalState = { key: null, index: 0 };
    var modal = document.getElementById('team-modal');
    var stageImage = document.getElementById('modal-stage-img');
    var photoLabel = document.getElementById('modal-photo-label');
    var photoCount = document.getElementById('modal-photo-count');
    var modalName = document.getElementById('modal-name');
    var modalTitle = document.getElementById('modal-title');
    var modalContact = document.getElementById('modal-contact');
    var modalBio = document.getElementById('modal-bio');
    var modalThumbs = document.getElementById('modal-thumbs');
    var modalGalleryCount = document.getElementById('modal-gallery-count');

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function renderContact(member) {
      var links = [];
      if (member.email) {
        links.push('<a href="mailto:' + escapeHtml(member.email) + '"><span class="modal-contact-label">&#9993;</span><span>' + escapeHtml(member.email) + '</span></a>');
      }
      if (member.phone) {
        var tel = member.phone.replace(/[^0-9+]/g, '');
        links.push('<a href="tel:' + escapeHtml(tel) + '"><span class="modal-contact-label">&#9742;</span><span>' + escapeHtml(member.phone) + '</span></a>');
      }
      modalContact.innerHTML = links.join('');
    }

    function renderBio(member) {
      modalBio.innerHTML = member.bio.map(function (paragraph) {
        return '<p>' + escapeHtml(paragraph) + '</p>';
      }).join('');
    }

    function renderThumbs(member) {
      modalThumbs.innerHTML = member.gallery.map(function (photo, index) {
        var activeClass = index === modalState.index ? ' is-active' : '';
        return '<button class="modal-thumb' + activeClass + '" type="button" onclick="selectModalPhoto(' + index + ')" aria-label="Show ' + escapeHtml(member.name) + ' photo ' + (index + 1) + '"><img src="' + escapeHtml(photo.src) + '" alt="' + escapeHtml(photo.alt) + '"></button>';
      }).join('');
    }

    function renderPhoto(member) {
      var photo = member.gallery[modalState.index];
      if (!photo) return;
      stageImage.src = photo.src;
      stageImage.alt = photo.alt;
      photoLabel.textContent = photo.label;
      photoCount.textContent = 'Photo ' + (modalState.index + 1) + ' of ' + member.gallery.length;
      modalGalleryCount.textContent = String(member.gallery.length);
      renderThumbs(member);
    }

    function renderModal() {
      var member = teamData.find(function (entry) { return entry.key === modalState.key; });
      if (!member) return;
      modalName.textContent = member.name;
      modalTitle.textContent = member.title;
      renderContact(member);
      renderBio(member);
      renderPhoto(member);
    }

    window.openModal = function (key) {
      modalState.key = key;
      modalState.index = 0;
      renderModal();
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    window.closeModal = function () {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    window.selectModalPhoto = function (index) {
      var member = teamData.find(function (entry) { return entry.key === modalState.key; });
      if (!member) return;
      modalState.index = index;
      renderPhoto(member);
    };

    window.stepModal = function (direction) {
      var member = teamData.find(function (entry) { return entry.key === modalState.key; });
      if (!member) return;
      var total = member.gallery.length;
      modalState.index = (modalState.index + direction + total) % total;
      renderPhoto(member);
    };

    document.addEventListener('keydown', function (event) {
      if (modal.style.display !== 'flex') return;
      if (event.key === 'Escape') closeModal();
      if (event.key === 'ArrowRight') stepModal(1);
      if (event.key === 'ArrowLeft') stepModal(-1);
    });
  })();
  </script>
</div>`;

await fs.writeFile(outputPath, html, "utf8");
console.log(`Wrote ${path.relative(root, outputPath)}`);
