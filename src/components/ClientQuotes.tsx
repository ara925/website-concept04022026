import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "After the vacated tenant left the property in a dilapidated condition, securing a new tenant became our immediate focus. Helios and his team not only secured a tenant willing to take on such a challenging assignment but also raised a considerable amount of funding from public funding sources to make the project financially viable. After going to market, tours were set up immediately, and preliminary terms were agreed upon with a tenant within 30 days.",
    name: "Barry Chin",
    title: "Executive Board Member",
    org: "Cornerstone Evangelical Baptist Church",
  },
  {
    quote: "Helios had been following up with our team for years about selling our community. Whenever we asked about market conditions, he gave us genuine, no-nonsense feedback about what to expect. What stood out most was his depth of market knowledge and the extensive database of transactions that he and his team tracked. These data points were unlike anything we had publicly seen before and reflected how deeply entrenched in the market Helios's team truly was. When we finally decided to sell, Helios and his team delivered, achieving our pricing goals and exceeding expectations throughout the process. What impressed us most was his integrity, even advising us to walk away when terms were not in our best interest. Unfortunately, that level of honesty and advocacy isn't something you always get from a broker.",
    name: "Linda Zinnel",
    title: "Owner",
    org: "Cottonwood Estates",
  },
  {
    quote: "Bill and his team have been an invaluable partner in financing our nursing homes and assisted living communities across the country. Their deep market expertise, responsiveness, and ability to deliver rapid financing solutions have made them our first call for every transaction. They've set the benchmark for professionalism and results in healthcare real estate financing across the state.",
    name: "Jone Chen",
    title: "Executive Chairman",
    org: "EVA Care Group",
  },
];

const ClientQuotes = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto">
        <div className="animate-on-scroll mb-12">
          <div className="accent-line mb-6" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Testimonials</p>
          <h2 className="heading-lg text-foreground">What Our Clients Say</h2>
        </div>

        <div className="relative max-w-4xl">
          <Quote className="h-12 w-12 text-primary/20 mb-6" />
          
          <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 min-h-[200px]">
            "{t.quote}"
          </blockquote>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-base font-bold text-foreground">{t.name}</p>
              <p className="text-sm text-primary">{t.title}, {t.org}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-[2px] transition-all duration-300 ${i === current ? "w-12 bg-primary" : "w-6 bg-border/50"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientQuotes;
