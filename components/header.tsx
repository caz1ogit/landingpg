"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-accent/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Image src="/logo-omni.png" alt="Omni" width={40} height={40} className="w-10 h-10" />
            <span className="text-xl font-bold text-accent">Omni</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#recursos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Recursos
            </a>
            <a href="#precos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Preços
            </a>
            <a href="#contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Entrar
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white">Começar Grátis</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="text-accent" /> : <Menu className="text-accent" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-accent/20 bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#recursos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Recursos
            </a>
            <a href="#precos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Preços
            </a>
            <a href="#contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contato
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t border-accent/20">
              <Button variant="ghost" className="text-foreground">
                Entrar
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white">Começar Grátis</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
