"use client"

import { useEffect, useState } from "react"
import { Search, MoreVertical, Paperclip, Smile, Send, Phone, Video, ChevronDown } from "lucide-react"

export function MobileAccessWidget() {
  const [messages, setMessages] = useState<
    Array<{ id: number; text: string; sender: "agent" | "client"; time: string }>
  >([])
  const [showTyping, setShowTyping] = useState(false)

  useEffect(() => {
    const sequence = async () => {
      setMessages([])
      await wait(1000)

      // Mensagem inicial do cliente
      addMessage({
        id: 1,
        text: "Boa tarde! Preciso liberar a entrada de um entregador aqui no condomínio",
        sender: "client",
        time: "14:32",
      })
      await wait(1500)

      // Agente digitando
      setShowTyping(true)
      await wait(1200)
      setShowTyping(false)

      addMessage({
        id: 2,
        text: "Boa tarde! Claro, vou processar a liberação. Pode me informar o nome do entregador e o horário previsto?",
        sender: "agent",
        time: "14:32",
      })
      await wait(2500)

      addMessage({
        id: 3,
        text: "O nome é João Silva e ele vai chegar às 15h para entregar na unidade 102",
        sender: "client",
        time: "14:33",
      })
      await wait(1500)

      setShowTyping(true)
      await wait(1000)
      setShowTyping(false)

      addMessage({
        id: 4,
        text: "Perfeito! A liberação foi registrada no sistema. O João Silva está autorizado a entrar hoje às 15h para a unidade 102. 👍",
        sender: "agent",
        time: "14:33",
      })
      await wait(3000)

      // Reiniciar sequência
      sequence()
    }

    sequence()
  }, [])

  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  const addMessage = (msg: { id: number; text: string; sender: "agent" | "client"; time: string }) => {
    setMessages((prev) => [...prev, msg])
  }

  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative w-full max-w-5xl h-[600px] rounded-xl overflow-hidden shadow-2xl bg-[#0f1419] border border-white/10">
        <div className="flex h-full">
          <div className="w-80 bg-[#1a1f2e] border-r border-white/5 flex flex-col">
            {/* Header Sidebar */}
            <div className="px-4 py-4 border-b border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#EF8200] to-[#d67300] flex items-center justify-center overflow-hidden">
                  <img src="/logo-omni.png" alt="Omni" className="w-7 h-7 object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm">Omni</h3>
                  <p className="text-white/40 text-xs">Atendimento</p>
                </div>
              </div>
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  className="w-full bg-[#0f1419] rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:ring-1 focus:ring-[#EF8200]/50"
                />
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 px-4 pt-3 border-b border-white/5">
              <button className="pb-2 text-xs font-medium text-[#EF8200] border-b-2 border-[#EF8200]">Todas</button>
              <button className="pb-2 text-xs font-medium text-white/40">Minhas</button>
              <button className="pb-2 text-xs font-medium text-white/40">Não atribuídas</button>
            </div>

            {/* Lista de conversas */}
            <div className="flex-1 overflow-y-auto">
              {[
                {
                  name: "Cassio Bona",
                  channel: "WhatsApp Infinity",
                  msg: "**AUTORIZAÇÃO DE ACESSO**",
                  time: "agora",
                  active: true,
                },
                {
                  name: "Roseane Silva",
                  channel: "WhatsApp",
                  msg: "Ok. Estamos processando a liberação...",
                  time: "5m",
                  active: false,
                },
                {
                  name: "Fabio Pessoal",
                  channel: "WhatsApp",
                  msg: "Previsão de visitas cadastrada com sucesso!!!",
                  time: "12m",
                  active: false,
                },
                {
                  name: "Julia Teles",
                  channel: "WhatsApp",
                  msg: "Liberação expressa operada por IA",
                  time: "21m",
                  active: false,
                },
              ].map((convo, idx) => (
                <div
                  key={idx}
                  className={`px-4 py-3 cursor-pointer transition-colors border-l-2 ${
                    convo.active ? "bg-[#0f1419] border-[#EF8200]" : "hover:bg-[#0f1419]/50 border-transparent"
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#102A62] to-[#1a3d7a] flex items-center justify-center text-white font-semibold flex-shrink-0 text-sm">
                      {convo.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between mb-0.5">
                        <h4 className="text-white text-sm font-medium truncate">{convo.name}</h4>
                        <span className="text-white/40 text-xs ml-2">{convo.time}</span>
                      </div>
                      <p className="text-white/40 text-xs mb-1">{convo.channel}</p>
                      <p className="text-xs truncate text-white/60">{convo.msg}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col bg-[#0a0e13]">
            {/* Header do chat */}
            <div className="bg-[#1a1f2e] px-6 py-4 flex items-center gap-3 border-b border-white/5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#102A62] to-[#1a3d7a] flex items-center justify-center text-white font-semibold">
                C
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                  Cassio Bona
                  <ChevronDown className="w-4 h-4 text-white/40" />
                </h3>
                <p className="text-white/40 text-xs">+55419734526 • online</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <Video className="w-5 h-5" />
                </button>
                <button className="text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <button className="text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mensagens */}
            <div className="flex-1 px-6 py-6 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "agent" ? "justify-end" : "justify-start"} animate-slide-up`}
                >
                  <div
                    className={`rounded-lg px-4 py-3 max-w-md shadow-md ${
                      msg.sender === "agent"
                        ? "bg-[#005c4b] text-white rounded-br-none"
                        : "bg-[#1f2c3d] text-white rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm leading-relaxed mb-1">{msg.text}</p>
                    <div className="flex items-center justify-end gap-1">
                      <span className="text-[10px] opacity-60">{msg.time}</span>
                      {msg.sender === "agent" && (
                        <svg className="w-4 h-4 text-[#4fc3f7]" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {showTyping && (
                <div className="flex justify-start animate-slide-up">
                  <div className="bg-[#1f2c3d] rounded-lg rounded-bl-none px-5 py-3 shadow-md">
                    <div className="flex gap-1.5">
                      <div
                        className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input de mensagem */}
            <div className="bg-[#1a1f2e] px-6 py-4 border-t border-white/5">
              <div className="flex items-center gap-3">
                <button className="text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <Paperclip className="w-5 h-5" />
                </button>
                <div className="flex-1 bg-[#0f1419] rounded-lg px-4 py-3 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Digite uma mensagem..."
                    className="flex-1 bg-transparent text-white text-sm placeholder:text-white/40 outline-none"
                  />
                  <button className="text-white/60 hover:text-white">
                    <Smile className="w-5 h-5" />
                  </button>
                </div>
                <button className="bg-[#EF8200] hover:bg-[#d67300] rounded-lg p-3 transition-colors">
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
