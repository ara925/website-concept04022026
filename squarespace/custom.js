(() => {
  const assets = {
  banner: "https://cdn.jsdelivr.net/gh/ara925/website-concept04022026@main/src/assets/home-banner-building.jpg",
  cta: "https://cdn.jsdelivr.net/gh/ara925/website-concept04022026@main/src/assets/home-cta-building.jpg",
    logo: "https://images.squarespace-cdn.com/content/v1/69c88ba8bbe07315a5d85a47/958b15f2-e7af-4a34-8a24-cd0e8f0a4cc1/decker-logo.png",
  };

  const onReady = (fn) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn, { once: true });
    } else {
      fn();
    }
  };

  const normalizePath = () => {
    const path = window.location.pathname.replace(/\/+$/, "");
    return path || "/";
  };

  const getBodyRoot = () =>
    document.querySelector(".sqs-site-container") ||
    document.querySelector("#page") ||
    document.body;

  const heroSection = () => document.querySelector(".page-section");

  const ensureHeroEnhancements = () => {
    const hero = heroSection();
    if (!hero) return;

    const content = hero.querySelector(".sqs-block-content");
    if (!content) return;

    if (!content.querySelector(".decker-hero-subtitle")) {
      const subtitle = document.createElement("p");
      subtitle.className = "decker-hero-subtitle";
      subtitle.textContent =
        "We represent owners and operators of assisted living, memory care, skilled nursing, and independent living communities in the sale and financing of their properties.";
      content.appendChild(subtitle);
    }

    if (!content.querySelector(".decker-cta__actions")) {
      const actions = document.createElement("div");
      actions.className = "decker-cta__actions";
      actions.innerHTML = `
        <a class="sqs-block-button-element sqs-button-element--primary" href="/services">Our Services</a>
        <a class="sqs-block-button-element sqs-button-element--secondary" href="/buyer-registration">Register as a Buyer</a>
      `;
      content.appendChild(actions);
    }
  };

  const buildHomeSections = () => `
    <div class="decker-home-after-hero">
      <section class="decker-dark-band">
        <div class="decker-stats">
          <div class="decker-stat">
            <p class="decker-stat__value" data-decker-counter data-target="103478346" data-prefix="$" data-format="number" data-duration="2500">$0</p>
            <p class="decker-stat__label">Total Transaction Volume</p>
          </div>
          <div class="decker-stat">
            <p class="decker-stat__value" data-decker-counter data-target="11269" data-format="number" data-duration="2500">0</p>
            <p class="decker-stat__label">Buyers in Database</p>
            <p class="decker-stat__sublabel">+ 37 added in last 30 days</p>
          </div>
          <div class="decker-stat">
            <p class="decker-stat__value" data-decker-counter data-target="87.2" data-suffix="%" data-decimals="1" data-format="number" data-duration="2500">0.0%</p>
            <p class="decker-stat__label">Avg. % of Asking Price</p>
          </div>
        </div>
      </section>

      <section>
        <div class="decker-accent-line"></div>
        <p class="decker-eyebrow">What We Do</p>
        <h2>Our Services</h2>
        <div class="decker-card-grid">
          <article class="decker-card">
            <p class="decker-card__eyebrow">Brokerage</p>
            <h3 class="decker-card__title">Seniors Housing Brokerage</h3>
            <p class="decker-card__body">
              Seniors housing is more than real estate. When you're selling a senior living community,
              you're selling a building where people live and receive care every day. That changes
              everything about how a transaction should be managed. These are living, breathing businesses
              that serve the most vulnerable population in this country.
            </p>
            <a class="decker-card__cta" href="/services">Learn More</a>
          </article>
          <article class="decker-card">
            <p class="decker-card__eyebrow">Capital Markets</p>
            <h3 class="decker-card__title">Capital Markets Advisory</h3>
            <p class="decker-card__body">
              Debt placement, recapitalizations, and acquisition financing for seniors housing owners and
              operators. We have a deep network of banks, credit funds, private debt lenders, and family
              office funds that lend in the seniors housing asset class.
            </p>
            <a class="decker-card__cta" href="/services">Learn More</a>
          </article>
        </div>
      </section>

      <section class="decker-banner">
        <img src="${assets.banner}" alt="Senior living community campus">
        <div class="decker-banner__content">
          <p>Your Community. Our Commitment.</p>
        </div>
      </section>

      <section data-decker-testimonials class="decker-testimonial">
        <div class="decker-accent-line"></div>
        <p class="decker-eyebrow">Testimonials</p>
        <h2>What Our Clients Say</h2>

        <article data-decker-testimonial-item>
          <p class="decker-testimonial__quote">
            "After the vacated tenant left the property in a dilapidated condition, securing a new tenant
            became our immediate focus. Helios and his team not only secured a tenant willing to take on such a
            challenging assignment but also raised a considerable amount of funding from public funding sources
            to make the project financially viable."
          </p>
          <p class="decker-testimonial__name">Barry Chin</p>
          <p class="decker-testimonial__meta">Executive Board Member, Cornerstone Evangelical Baptist Church</p>
        </article>

        <article data-decker-testimonial-item hidden>
          <p class="decker-testimonial__quote">
            "What stood out most was his depth of market knowledge and the extensive database of transactions
            that he and his team tracked. When we finally decided to sell, Helios and his team delivered,
            achieving our pricing goals and exceeding expectations throughout the process."
          </p>
          <p class="decker-testimonial__name">Linda Zinnel</p>
          <p class="decker-testimonial__meta">Owner, Cottonwood Estates</p>
        </article>

        <article data-decker-testimonial-item hidden>
          <p class="decker-testimonial__quote">
            "Bill and his team have been an invaluable partner in financing our nursing homes and assisted
            living communities across the country. Their deep market expertise, responsiveness, and ability
            to deliver rapid financing solutions have made them our first call for every transaction."
          </p>
          <p class="decker-testimonial__name">Jone Chen</p>
          <p class="decker-testimonial__meta">Executive Chairman, EVA Care Group</p>
        </article>

        <div style="display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-top:2rem;">
          <div style="display:flex;gap:0.6rem;">
            <button type="button" data-decker-prev class="sqs-block-button-element sqs-button-element--secondary">Prev</button>
            <button type="button" data-decker-next class="sqs-block-button-element sqs-button-element--secondary">Next</button>
          </div>
          <div style="display:flex;gap:0.5rem;">
            <button type="button" data-decker-testimonial-dot aria-pressed="true" style="width:48px;height:2px;background:#3b82f6;border:0;"></button>
            <button type="button" data-decker-testimonial-dot aria-pressed="false" style="width:24px;height:2px;background:rgba(148,161,184,.45);border:0;"></button>
            <button type="button" data-decker-testimonial-dot aria-pressed="false" style="width:24px;height:2px;background:rgba(148,161,184,.45);border:0;"></button>
          </div>
        </div>
      </section>

      <section>
        <div class="decker-accent-line"></div>
        <p class="decker-eyebrow">Why Choose Us</p>
        <h2>The Decker Difference</h2>
        <div class="decker-difference-grid">
          <article class="decker-difference-card">
            <h3>Deep Market Knowledge</h3>
            <p>We built proprietary systems to track every licensed facility in our coverage states, monitor ownership changes in real time, and underwrite operations at a level that most brokers never reach.</p>
          </article>
          <article class="decker-difference-card">
            <h3>Integrity First</h3>
            <p>We invest the time to understand each client's business, community, and objectives before recommending a course of action. Owners deserve honest guidance on valuation, deal structure, and timing.</p>
          </article>
          <article class="decker-difference-card">
            <h3>Proprietary Buyer Database</h3>
            <p>Our actively managed database of qualified buyers allows us to confidentially match opportunities with the right acquirers and create targeted outreach that drives competitive tension.</p>
          </article>
        </div>
      </section>

      <section class="decker-cta">
        <img src="${assets.cta}" alt="Assisted living facility">
        <div class="decker-cta__inner">
          <div class="decker-accent-line"></div>
          <h2>Looking to Buy or Sell a Seniors Housing Community?</h2>
          <p>
            Whether you are a private owner exploring a sale, an organization evaluating strategic
            alternatives for a senior care asset, or a buyer seeking acquisition opportunities, we
            would welcome the chance to have a conversation.
          </p>
          <div class="decker-cta__actions">
            <a class="sqs-block-button-element sqs-button-element--primary" href="/contact">Contact Us</a>
            <a class="sqs-block-button-element sqs-button-element--secondary" href="/buyer-registration">Register as a Buyer</a>
          </div>
        </div>
      </section>
    </div>
  `;

  const buildFooter = () => `
    <footer class="decker-footer">
      <div class="decker-footer__grid">
        <div class="decker-footer__brand">
          <img src="${assets.logo}" alt="Decker Healthcare Group">
          <p>Seniors housing brokerage and capital markets advisory. Assisted living, skilled nursing, memory care, and independent living communities. Nationwide.</p>
        </div>
        <div>
          <p class="decker-footer__title">Company</p>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/team">Team</a>
          <a href="/careers">Careers</a>
        </div>
        <div>
          <p class="decker-footer__title">Services</p>
          <a href="/services">Seniors Housing Brokerage</a>
          <a href="/services">Capital Markets</a>
          <a href="/buyer-registration">Buyer Registration</a>
        </div>
        <div>
          <p class="decker-footer__title">Contact</p>
          <a href="mailto:info@deckerhealthcare.com">info@deckerhealthcare.com</a>
          <a href="/contact">Get in Touch</a>
        </div>
      </div>
      <div class="decker-footer__bottom">
        <p>&copy; 2026 Decker Healthcare Group. All rights reserved.</p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#" style="margin-left:1.5rem;">Terms of Service</a>
        </div>
      </div>
    </footer>
  `;

  const animateCounters = () => {
    const counters = document.querySelectorAll("[data-decker-counter]");
    if (!counters.length) return;

    const formatter = (value, node) => {
      const prefix = node.dataset.prefix || "";
      const suffix = node.dataset.suffix || "";
      const decimals = Number(node.dataset.decimals || 0);
      const format = node.dataset.format || "plain";
      const raw = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
      const withCommas =
        format === "number"
          ? Number(value).toLocaleString("en-US", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })
          : raw;
      return `${prefix}${withCommas}${suffix}`;
    };

    const run = (node) => {
      if (node.dataset.counterStarted === "true") return;
      node.dataset.counterStarted = "true";
      const target = Number(node.dataset.target || "0");
      const duration = Number(node.dataset.duration || "2200");
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        node.textContent = formatter(target * eased, node);
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 },
    );

    counters.forEach((counter) => observer.observe(counter));
  };

  const rotateTestimonials = () => {
    const root = document.querySelector("[data-decker-testimonials]");
    if (!root) return;

    const items = Array.from(root.querySelectorAll("[data-decker-testimonial-item]"));
    const dots = Array.from(root.querySelectorAll("[data-decker-testimonial-dot]"));
    const prev = root.querySelector("[data-decker-prev]");
    const next = root.querySelector("[data-decker-next]");
    if (!items.length) return;

    let index = 0;
    const render = () => {
      items.forEach((item, i) => {
        item.hidden = i !== index;
      });
      dots.forEach((dot, i) => {
        dot.setAttribute("aria-pressed", i === index ? "true" : "false");
        dot.style.background = i === index ? "#3b82f6" : "rgba(148,161,184,.45)";
        dot.style.width = i === index ? "48px" : "24px";
      });
    };

    prev?.addEventListener("click", () => {
      index = (index - 1 + items.length) % items.length;
      render();
    });

    next?.addEventListener("click", () => {
      index = (index + 1) % items.length;
      render();
    });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        render();
      });
    });

    render();
  };

  const enhanceHome = () => {
    const path = normalizePath();
    if (path !== "/") return;

    const root = getBodyRoot();
    const hero = heroSection();
    if (!root || !hero) return;

    document.body.classList.add("decker-site-shell", "decker-home-enhanced");
    ensureHeroEnhancements();

    if (!document.querySelector(".decker-home-after-hero")) {
      hero.insertAdjacentHTML("afterend", buildHomeSections());
    }

    if (!document.querySelector(".decker-footer")) {
      root.insertAdjacentHTML("beforeend", buildFooter());
    }
  };

  onReady(() => {
    enhanceHome();
    animateCounters();
    rotateTestimonials();
  });
})();
