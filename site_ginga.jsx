import { useState } from "react";
import { motion } from "framer-motion";

// Single-file React landing page for Ginga (GFC) – Join Team
// TailwindCSS styles assumed to be available in the host app.
// Replace form handlers with your backend or webhook as needed.

export default function GingaJoinTeam() {
  const [role, setRole] = useState("");

  const roles = [
    { key: "player", title: "Jogador(a) 5x5", desc: "Atletas dedicados ao estilo Ginga: intensidade, disciplina e jogo coletivo." },
    { key: "coach", title: "Técnico(a)", desc: "Tática, comunicação clara e leitura de jogo. Ajude o time a evoluir." },
    { key: "analyst", title: "Analista / Staff", desc: "Clipes, estatísticas e suporte de bastidores para decisões melhores." },
    { key: "creator", title: "Criador(a) de Conteúdo", desc: "Highlights, thumb, social media. Dê mais voz à Ginga nas redes." },
  ];

  const requirements = [
    "Compromisso com horários e calendário do time",
    "Respeito em call e chat – zero tilt, zero toxidade",
    "Conta ativa no Discord e no jogo",
    "Disponibilidade para treinos e campeonatos",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-yellow-400 to-blue-700 text-white">
      {/* NAV */}
      <header className="sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-black/10 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 font-black">GFC</span>
            <span className="font-extrabold text-xl tracking-wide">Ginga</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#sobre" className="hover:opacity-80">Sobre</a>
            <a href="#vagas" className="hover:opacity-80">Vagas</a>
            <a href="#requisitos" className="hover:opacity-80">Requisitos</a>
            <a href="#inscricao" className="hover:opacity-80">Inscrição</a>
          </nav>
          <a href="#inscricao" className="px-4 py-2 rounded-xl bg-white text-black font-semibold">Quero entrar</a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 rounded-lg bg-white/10 text-xs tracking-widest">FUNDADOR: CAP</span>
              <span className="px-2 py-1 rounded-lg bg-white/10 text-xs tracking-widest">TAG: GFC</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow">
              Junte-se à <span className="underline decoration-white/70 underline-offset-4">Ginga</span>
            </h1>
            <p className="mt-4 text-white/90 text-lg max-w-prose">
              Somos um projeto competitivo com DNA brasileiro. Se você curte treino, disciplina e o espetáculo do nosso futebol, seu lugar é aqui.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#inscricao" className="px-5 py-3 rounded-2xl bg-white text-black font-semibold shadow-lg">Aplicar agora</a>
              <a href="#sobre" className="px-5 py-3 rounded-2xl bg-black/20 border border-white/20 font-semibold">Conhecer mais</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative aspect-[4/3] rounded-3xl bg-white/10 p-1 shadow-2xl">
              <div className="h-full w-full rounded-2xl bg-gradient-to-tr from-green-500/40 via-yellow-300/40 to-blue-500/40 grid place-items-center">
                <div className="text-center">
                  <div className="text-6xl font-black tracking-wider">GFC</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.3em]">Ginga Football Club</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-black/20">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-extrabold">Sobre a Ginga</h2>
            <p className="mt-4 text-white/90">
              A Ginga é uma comunidade competitiva focada em formar elenco 5x5, disputar campeonatos e criar conteúdo. Nosso objetivo é unir desempenho e entretenimento com o espírito brasileiro em cada jogada.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-white/90">
              <li className="p-4 rounded-2xl bg-white/10">Treinos semanais com metas claras</li>
              <li className="p-4 rounded-2xl bg-white/10">Ambiente respeitoso e sem tilt</li>
              <li className="p-4 rounded-2xl bg-white/10">Feedbacks e VOD review</li>
              <li className="p-4 rounded-2xl bg-white/10">Produção de highlights e mídia</li>
            </ul>
          </div>
          <aside className="p-6 rounded-3xl bg-white/10 h-max">
            <h3 className="font-bold text-lg">Informações rápidas</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              <li>💬 Discord oficial: <span className="font-semibold">Ginga / GFC</span></li>
              <li>🎮 Modo principal: 5x5</li>
              <li>🧭 Região: BR</li>
              <li>👑 Fundador: <span className="font-semibold">CAP</span></li>
            </ul>
            <a href="#inscricao" className="mt-4 inline-block px-4 py-2 rounded-xl bg-white text-black font-semibold">Aplicar agora</a>
          </aside>
        </div>
      </section>

      {/* VAGAS */}
      <section id="vagas" className="">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold">Vagas abertas</h2>
          <p className="mt-2 text-white/90">Escolha um papel e envie sua aplicação. Todas as posições valorizam responsabilidade e comunicação.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {roles.map((r) => (
              <motion.div key={r.key} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-3xl bg-white/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{r.title}</h3>
                  <span className="px-2 py-1 text-xs rounded-lg bg-black/20 border border-white/10">GFC</span>
                </div>
                <p className="mt-2 text-white/90">{r.desc}</p>
                <button onClick={() => setRole(r.title)} className="mt-4 px-4 py-2 rounded-xl bg-white text-black font-semibold">
                  Aplicar como {r.title}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUISITOS */}
      <section id="requisitos" className="bg-black/20">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold">Requisitos</h2>
          <ul className="mt-6 grid md:grid-cols-2 gap-4">
            {requirements.map((req, i) => (
              <li key={i} className="p-4 rounded-2xl bg-white/10 text-white/90">{req}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FORM */}
      <section id="inscricao" className="">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold">Formulário de Inscrição</h2>
          <p className="mt-2 text-white/90">Preencha e nossa staff entrará em contato pelo Discord.</p>

          <form className="mt-6 grid gap-4 bg-white/10 p-6 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Nome / Nick</label>
                <input required className="mt-1 w-full px-3 py-2 rounded-xl text-black" placeholder="Seu nick" />
              </div>
              <div>
                <label className="text-sm">Discord (@usuário)</label>
                <input required className="mt-1 w-full px-3 py-2 rounded-xl text-black" placeholder="@seuusuario" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Função no time</label>
                <select value={role} onChange={(e)=>setRole(e.target.value)} className="mt-1 w-full px-3 py-2 rounded-xl text-black">
                  <option value="">Selecione…</option>
                  {roles.map(r=> <option key={r.key} value={r.title}>{r.title}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm">Disponibilidade (dias/horários)</label>
                <input className="mt-1 w-full px-3 py-2 rounded-xl text-black" placeholder="Ex: seg–sex 20h às 22h" />
              </div>
            </div>

            <div>
              <label className="text-sm">Sobre você</label>
              <textarea className="mt-1 w-full px-3 py-2 rounded-xl text-black" rows={4} placeholder="Conte sua experiência, conquistas e objetivos." />
            </div>

            <div className="flex items-center justify-between flex-wrap gap-3">
              <p className="text-sm text-white/80">Ao enviar, você concorda com as regras da Ginga e com contato via Discord.</p>
              <button type="button" onClick={()=>alert('Formulário de demonstração. Conecte a um backend ou Google Forms.')} className="px-5 py-3 rounded-2xl bg-white text-black font-semibold">Enviar candidatura</button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA DISCORD */}
      <section className="bg-black/20">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-extrabold">Entre no Discord da Ginga</h3>
            <p className="mt-2 text-white/90">Partidas, treinos, anúncios e processos seletivos rolam por lá. Bora pro servidor?</p>
          </div>
          <div className="flex md:justify-end items-center gap-3">
            <a className="px-5 py-3 rounded-2xl bg-white text-black font-semibold" href="#">Entrar no Discord</a>
            <a className="px-5 py-3 rounded-2xl bg-black/20 border border-white/20 font-semibold" href="#top">Voltar ao topo</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/20 bg-black/30">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Ginga (GFC). Todos os direitos reservados.</p>
          <p className="opacity-80">Fundador: CAP • Brasil</p>
        </div>
      </footer>
    </div>
  );
}
