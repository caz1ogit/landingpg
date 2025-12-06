"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MessageSquare,
  Zap,
  Users,
  BarChart3,
  Bot,
  Globe,
  Shield,
  Clock,
  Phone,
  ShoppingBag,
  MessageCircle,
} from "lucide-react"
import { Headphones } from "lucide-react"

const platforms = [
  { name: "WhatsApp", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg" },
  { name: "Instagram", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" },
  { name: "Facebook", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" },
  { name: "Telegram", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/telegram.svg" },
  { name: "TikTok", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg" },
  { name: "Mercado Livre", icon: "/mercadolivre-logo.jpg" },
  { name: "OLX", icon: "/olx-logo.jpg" },
  { name: "SMS", useComponent: true },
]

const features = [
  {
    icon: MessageSquare,
    title: "Omnichannel Unificado",
    description:
      "Gerencie WhatsApp, Instagram, Facebook, Telegram, TikTok, Mercado Livre, OLX, Email, SMS e muito mais em uma única caixa de entrada.",
    special: "omnichannel",
  },
  {
    icon: Zap,
    title: "Automação Inteligente",
    description:
      "Configure respostas automáticas, chatbots e fluxos de trabalho para aumentar a eficiência do seu time. Consulte preços com nossos especialistas.",
  },
  {
    icon: Users,
    title: "Gestão de Equipes",
    description:
      "Organize seu time com atribuição automática de conversas, horários de trabalho e métricas de desempenho.",
  },
  {
    icon: BarChart3,
    title: "Relatórios e Analytics",
    description:
      "Dashboards completos com métricas em tempo real, relatórios personalizados e insights de atendimento.",
  },
  {
    icon: Bot,
    title: "Chatbot Integrado",
    description: "Crie chatbots personalizados sem código e integre com IA para atendimento 24/7.",
  },
  {
    icon: Globe,
    title: "Multilíngue",
    description: "Suporte completo para múltiplos idiomas e tradução automática de mensagens.",
  },
  {
    icon: Shield,
    title: "Segurança Empresarial",
    description: "Criptografia ponta a ponta, LGPD compliant e certificações de segurança internacionais.",
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    description: "Configure horários de funcionamento, mensagens automáticas fora do horário e escalas de plantão.",
  },
  {
    icon: Phone,
    title: "Telefonia VoIP",
    description: "Integração com sistemas de telefonia para chamadas de voz e gravação de ligações.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Integrado",
    description: "Integração nativa com Mercado Livre, OLX e outras plataformas de marketplace.",
  },
  {
    icon: Headphones,
    title: "Suporte Prioritário",
    description: "Time dedicado de suporte técnico 24/7 para garantir que sua operação nunca pare.",
  },
]

export function FeaturesSection() {
  return (
    <section id="recursos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-foreground">
            {"Tudo que você precisa para encantar seus clientes"}
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            {"Uma plataforma completa com recursos poderosos para transformar seu atendimento ao cliente."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-accent/40 bg-card ${
                feature.special === "omnichannel" ? "md:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors border border-primary/20">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </CardDescription>

                {feature.special === "omnichannel" && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm font-medium text-foreground mb-4">Canais Suportados:</p>
                    <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
                      {platforms.map((platform) => (
                        <div
                          key={platform.name}
                          className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="w-10 h-10 flex items-center justify-center">
                            {platform.useComponent ? (
                              <MessageCircle className="w-8 h-8 text-muted-foreground/60" />
                            ) : (
                              <img
                                src={platform.icon || "/placeholder.svg"}
                                alt={platform.name}
                                className="w-8 h-8 object-contain"
                                style={{ filter: "grayscale(100%) brightness(0.5)" }}
                              />
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground">{platform.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
