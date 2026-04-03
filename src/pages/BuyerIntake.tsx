import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import facilityAssistedLiving from "@/assets/facility-assisted-living.jpg";

const facilityTypes = [
  "Assisted Living",
  "Skilled Nursing",
  "Memory Care",
  "Independent Living",
  "Continuing Care Retirement Community (CCRC)",
  "Home Health & Hospice",
  "Other",
];

const dealSizes = [
  "Under $5M",
  "$5M – $15M",
  "$15M – $30M",
  "$30M – $50M",
  "$50M+",
];

const BuyerIntake = () => {
  const scrollRef = useScrollAnimation();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    facilityTypes: [] as string[],
    dealSize: "",
    geographies: "",
    additionalNotes: "",
  });

  const toggleFacilityType = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      facilityTypes: prev.facilityTypes.includes(type)
        ? prev.facilityTypes.filter((t) => t !== type)
        : [...prev.facilityTypes, type],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("buyer_submissions").insert({
        company_name: formData.companyName,
        contact_name: formData.contactName,
        email: formData.email,
        phone: formData.phone || null,
        facility_types: formData.facilityTypes,
        deal_size: formData.dealSize,
        geographies: formData.geographies,
        additional_notes: formData.additionalNotes || null,
      });

      if (error) throw error;

      setSubmitted(true);
      toast({ title: "Submission received", description: "We'll be in touch shortly." });
    } catch (err) {
      console.error(err);
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div ref={scrollRef}>
        <HeroSection
          title="Thank You"
          subtitle="Your buyer profile has been submitted. A member of our team will be in touch shortly."
          backgroundImage={facilityAssistedLiving}
        />
        <section className="section-padding">
          <div className="max-w-[800px] mx-auto text-center animate-on-scroll">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="heading-md text-foreground mb-4">Submission Received</h2>
            <p className="text-muted-foreground leading-relaxed">
              We've received your buyer profile and will review it promptly. A member of our team will reach out to discuss your acquisition criteria and potential opportunities.
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div ref={scrollRef}>
      <HeroSection
        title="Buyer Registration"
        subtitle="Tell us what you're looking for. We'll match you with opportunities from our extensive seniors housing pipeline."
        backgroundImage={facilityAssistedLiving}
      />

      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="animate-on-scroll">
              <div className="accent-line mb-6" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Buyer Database</p>
              <h2 className="heading-lg text-foreground mb-6">Register Your Interest</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our buyer database is one of the most comprehensive in the seniors housing industry. By submitting your acquisition criteria, you'll gain access to deal flow across assisted living, skilled nursing, memory care, and other seniors housing asset types nationwide.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-3">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full h-12 px-0 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-3">Contact Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full h-12 px-0 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-3">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-12 px-0 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-3">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-12 px-0 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-4">Facility Types of Interest *</label>
                  <div className="flex flex-wrap gap-2">
                    {facilityTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => toggleFacilityType(type)}
                        className={`px-4 py-2 text-xs font-medium uppercase tracking-wider border transition-all duration-300 ${
                          formData.facilityTypes.includes(type)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-4">Target Deal Size *</label>
                  <div className="flex flex-wrap gap-2">
                    {dealSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setFormData({ ...formData, dealSize: size })}
                        className={`px-4 py-2 text-xs font-medium uppercase tracking-wider border transition-all duration-300 ${
                          formData.dealSize === size
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-3">Target Geographies *</label>
                  <input
                    type="text"
                    required
                    value={formData.geographies}
                    onChange={(e) => setFormData({ ...formData, geographies: e.target.value })}
                    className="w-full h-12 px-0 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="e.g., Midwest, Southeast, Nationwide"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-3">Additional Notes</label>
                  <textarea
                    rows={3}
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Any specific criteria, preferences, or deal structures you're looking for..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading || formData.facilityTypes.length === 0 || !formData.dealSize}
                  className="w-full text-sm font-semibold uppercase tracking-wider rounded-none h-12 mt-4"
                >
                  {loading ? "Submitting..." : "Submit Buyer Profile"} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div className="animate-on-scroll hidden lg:block">
              <img
                src={facilityAssistedLiving}
                alt="Assisted living facility"
                className="w-full h-[500px] object-cover mb-6"
                loading="lazy"
                width={1920}
                height={1080}
              />
              <div className="border border-border/30 p-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-4">Why Register?</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3"><span className="text-primary font-bold">01</span> Access to proprietary deal flow</li>
                  <li className="flex gap-3"><span className="text-primary font-bold">02</span> Early visibility on new listings</li>
                  <li className="flex gap-3"><span className="text-primary font-bold">03</span> Targeted matching based on your criteria</li>
                  <li className="flex gap-3"><span className="text-primary font-bold">04</span> Confidential, no-obligation process</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyerIntake;
