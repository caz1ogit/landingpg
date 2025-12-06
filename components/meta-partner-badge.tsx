"use client"

import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle2 } from "lucide-react"

export function MetaPartnerBadge() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border-2 border-accent/20 p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                  <Badge variant="default" className="bg-accent hover:bg-accent/90 text-white">
                    Parceiro Oficial
                  </Badge>
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-balance text-foreground">
                  {"Parceiro Oficial Meta Business"}
                </h3>
                <p className="text-muted-foreground text-balance">
                  {
                    "Somos parceiros oficiais da Meta, garantindo integração direta e confiável com WhatsApp Business API, Instagram e Facebook Messenger."
                  }
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>WhatsApp Business API</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Instagram Direct</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Facebook Messenger</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
