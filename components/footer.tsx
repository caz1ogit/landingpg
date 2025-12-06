import Image from "next/image"

export function Footer() {
  return (
    <footer id="contato" className="bg-muted/50 border-t-2 border-accent/20 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo-omni.png" alt="Omni" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-bold text-accent">Omni</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {"A plataforma completa de atendimento ao cliente para sua empresa."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent">Produto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#recursos" className="hover:text-primary transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-primary transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Integrações
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Parceiros
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent">Suporte</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Status
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-accent/20 text-center text-sm text-muted-foreground">
          <p>
            © 2025 Omni. Todos os direitos reservados.{" "}
            <span className="font-semibold text-accent">Parceiro Oficial Meta Business.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
