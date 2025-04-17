import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import UseCases from "@/components/use-cases"
import Timeline from "@/components/timeline"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <Timeline />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
