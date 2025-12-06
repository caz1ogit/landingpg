import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {"Pronto para transformar seu atendimento?"}
          </h2>
          <p className="text-xl mb-8 opacity-90 text-balance">
            {"Junte-se a centenas de empresas que já escolheram o Omni. Comece grátis hoje mesmo."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="group bg-white text-primary hover:bg-white/90" asChild>
              <a href="https://wa.me/message/MA7BIGC77Z75E1" target="_blank" rel="noopener noreferrer">
                {"Começar Teste Grátis"}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-accent hover:border-accent"
              asChild
            >
              <a href="https://wa.me/message/MA7BIGC77Z75E1" target="_blank" rel="noopener noreferrer">
                {"Falar com um Especialista"}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
