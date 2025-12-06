"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Info } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "Sob Consulta",
    period: "",
    description: "Perfeito para pequenas empresas",
    features: [
      "2 agentes simultâneos",
      "WhatsApp Business API",
      "Instagram e Facebook",
      "Email integrado",
      "Relatórios básicos",
      "Suporte por email",
    ],
    cta: "Falar com Especialista",
    popular: false,
  },
  {
    name: "Professional",
    price: "Sob Consulta",
    period: "",
    description: "Para empresas em crescimento",
    features: [
      "10 agentes simultâneos",
      "Todos os canais inclusos",
      "Chatbot com IA",
      "Automações avançadas",
      "Relatórios personalizados",
      "Suporte prioritário 24/7",
      "Treinamento incluído",
    ],
    cta: "Falar com Especialista",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Sob Consulta",
    period: "",
    description: "Para grandes operações",
    features: [
      "Agentes ilimitados",
      "Todos os recursos Pro",
      "Servidor dedicado",
      "SLA garantido",
      "Gerente de conta dedicado",
      "Integração personalizada",
      "Treinamento presencial",
      "Suporte VIP",
    ],
    cta: "Falar com Especialista",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="precos" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-foreground">
            {"Planos personalizados para o seu negócio"}
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            {"Fale com nossos especialistas e encontre o plano ideal com o melhor custo-benefício."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-primary shadow-xl scale-105" : "border-accent/30"} bg-white hover:shadow-lg transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-sm font-medium px-4 py-1 rounded-full shadow-lg">
                    Mais Popular
                  </span>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent>
                <Button
                  className={`w-full mb-6 ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-accent hover:bg-accent/90"} text-white`}
                  size="lg"
                  asChild
                >
                  <a href="https://wa.me/message/MA7BIGC77Z75E1" target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                  </a>
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-accent/5 border-2 border-accent/20 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-accent mb-2">Sobre a API Oficial do WhatsApp</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Para usar o WhatsApp Business API (oficial do Meta), existe uma{" "}
                  <span className="font-medium text-foreground">taxa de homologação</span> com base nas necessidades do
                  seu negócio. Nossa equipe está pronta para{" "}
                  <span className="font-medium text-primary">calcular o investimento ideal</span> e apresentar a melhor
                  solução para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
