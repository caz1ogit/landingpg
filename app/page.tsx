import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { MetaPartnerBadge } from "@/components/meta-partner-badge"
import { StatsSection } from "@/components/stats-section"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MetaPartnerBadge />
      <StatsSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
