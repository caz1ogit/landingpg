"use client"

import { useEffect, useState } from "react"

const stats = [
  { value: "99.9%", label: "Uptime Garantido" },
  { value: "150+", label: "Empresas Atendidas" },
  { value: "1M+", label: "Mensagens Processadas" },
  { value: "24/7", label: "Suporte Disponível" },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats-section" className="py-20 bg-background border-y-2 border-accent/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div
                className={`text-4xl md:text-5xl font-bold mb-2 ${index % 2 === 0 ? "text-primary" : "text-accent"}`}
              >
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
