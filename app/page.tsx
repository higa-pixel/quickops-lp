"use client"

import Link from "next/link"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import UseCases from "@/components/use-cases"
import Customers from "@/components/Customers"
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
        <Customers />
        <Timeline />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
