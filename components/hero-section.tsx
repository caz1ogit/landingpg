"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import { MobileAccessWidget } from "./mobile-access-widget"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 animate-slide-in-up border border-accent/20">
            <Sparkles className="w-4 h-4" />
            <span>Parceiro Oficial Meta Business</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-foreground">
            {"A plataforma completa para atendimento ao cliente"}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            {
              "Centralize todos os seus canais de comunicação em uma única plataforma. WhatsApp, Instagram, Facebook, Email e muito mais."
            }
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-white" asChild>
              <a href="https://wa.me/message/MA7BIGC77Z75E1" target="_blank" rel="noopener noreferrer">
                {"Começar Grátis"}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent/20 text-accent hover:bg-accent/5 bg-transparent"
              asChild
            >
              <a href="https://wa.me/message/MA7BIGC77Z75E1" target="_blank" rel="noopener noreferrer">
                {"Agendar Demo"}
              </a>
            </Button>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-float" />
            <div className="relative">
              <MobileAccessWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
