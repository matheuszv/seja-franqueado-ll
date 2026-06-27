import LeadForm from "@/app/components/LeadForm";
import FotosCarousel from "@/app/components/FotosCarousel";
import LazyVideo from "@/app/components/LazyVideo";


// Importações das Fotos
import fotoDR309194 from '@/public/assets/FOTOS/DR309194.jpg';
import fotoEvento1 from '@/public/assets/FOTOS/evento-1.jpg';
import fotoEvento2 from '@/public/assets/FOTOS/evento-2.jpg';
import fotoLouJose53 from '@/public/assets/FOTOS/Lembre-Lembre-Lou&José-53.jpg';
import fotoLouJose96 from '@/public/assets/FOTOS/Lembre-Lembre-Lou&José-96.jpg';

// Caminhos dos Vídeos (arquivos estão em /public, referencie pelo path público)
const videoCgDepoimento = '/assets/VIDEOS/cg-depoimento.mp4';
const videoDepoimento1 = '/assets/VIDEOS/depoimento-1.mp4';
const videoMaringaDepoimento = '/assets/VIDEOS/maringa-depoimento.mp4';
const videoSalvadorDepoimento = '/assets/VIDEOS/SALVADOR-DEPOIMENTO.mp4';
const videoSaoJose = '/assets/VIDEOS/SÃO-JOSÉ.mp4';

export default function Home() {
  return (
    <>
      {/* ── NAV ── */}
      <nav className="sticky top-0 z-100 bg-[rgba(250,250,248,.92)] backdrop-blur-[14px] border-b border-border">
        <div className="max-w-[1120px] mx-auto px-7 h-[68px] flex items-center justify-between">
          <a href="#" className="font-fraunces text-[1rem] sm:text-[1.25rem] font-bold tracking-[-0.03em] text-bg3 no-underline">
            Lembre<span className="text-accent">-</span>Lembre
          </a>
          <a
            href="#primeiro-passo"
            className="bg-bg3 text-white border-none rounded-lg px-[16px] sm:px-[22px] py-[8px] sm:py-[10px] text-[.75rem] sm:text-[.85rem] font-semibold cursor-pointer no-underline transition-all hover:bg-[#333] hover:-translate-y-px"
          >
            Dê o primeiro passo
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero-gradient bg-bg3 text-white py-[110px] pb-[100px] relative overflow-hidden">
        <div className="max-w-[1120px] mx-auto px-7 grid grid-cols-[1fr_460px] gap-[72px] items-center max-[960px]:grid-cols-1">
          <div>
            <div className="inline-flex items-center gap-2 bg-[rgba(201,145,58,.15)] border border-[rgba(201,145,58,.35)] rounded-[30px] px-4 py-[5px] text-[.74rem] font-semibold tracking-widest uppercase text-[#e8b86d] mb-6 before:content-['✦'] before:text-[.65rem]">
              Oportunidade de Franquia
            </div>
            <h1 className="font-fraunces text-[clamp(2.4rem,4.5vw,3.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white mb-[22px]">
              Realize o sonho de ter{" "}
              <em className="italic text-[#e8b86d]">seu próprio negócio</em> com a Lembre-Lembre
            </h1>
            <p className="text-[1.05rem] text-white/65 max-w-[520px] leading-[1.7] mb-[38px]">
              Faça parte da maior rede de franquias de foto instantânea do Brasil e transforme
              momentos especiais em uma fonte real de renda. Com mais de{" "}
              <strong className="text-[#e8b86d]">63 franquias</strong> ao redor do mundo e{" "}
              <strong className="text-[#e8b86d]">R$6,9 milhões faturados</strong> no último ano,
              a LL oferece um modelo acessível, escalável e possível de encaixar na sua rotina.
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <a
                href="#primeiro-passo"
                className="bg-accent text-white border-none rounded-[10px] px-8 py-4 text-[.95rem] font-semibold cursor-pointer no-underline transition-all inline-block hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,145,58,.3)]"
              >
                Quero fazer acontecer!
              </a>
              <a
                href="#como-funciona"
                className="bg-transparent text-white/75 border border-white/20 rounded-[10px] px-[26px] py-[15px] text-[.95rem] font-medium cursor-pointer no-underline transition-all inline-block hover:text-white hover:border-white/50 hover:bg-white/6"
              >
                Entenda como funciona
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 flex-wrap mt-12 pt-10 border-t border-white/10">
              <div>
                <div className="font-fraunces text-[2rem] font-bold text-[#e8b86d]">63</div>
                <div className="text-[.75rem] text-white/55 mt-0.5 uppercase tracking-[.06em]">Franquias ativas</div>
              </div>
              <div>
                <div className="font-fraunces text-[1.5rem] font-bold text-[#e8b86d]">ATÉ 80%</div>
                <div className="text-[.75rem] text-white/55 mt-0.5 uppercase tracking-[.06em]">Lucro por evento</div>
              </div>
              <div>
                <div className="font-fraunces text-[2rem] font-bold text-[#e8b86d]">&lt;12m</div>
                <div className="text-[.75rem] text-white/55 mt-0.5 uppercase tracking-[.06em]">Retorno do investimento</div>
              </div>
              <div>
                <div className="font-fraunces text-[2rem] font-bold text-[#e8b86d]">13</div>
                <div className="text-[.75rem] text-white/55 mt-0.5 uppercase tracking-[.06em]">Anos de experiência</div>
              </div>
            </div>

            {/* Investment card */}
            <div className="mt-8 bg-[rgba(201,145,58,.12)] border border-[rgba(201,145,58,.3)] rounded-xl px-7 py-5 inline-flex items-center gap-4 max-[600px]:flex-col max-[600px]:gap-2">
              <div className="font-fraunces text-[2rem] font-bold text-[#e8b86d]">R$ 51.950</div>
              <div className="text-[.82rem] text-white/60 leading-normal">
                Investimento inicial completo<br />
                <span className="text-white/40">Inclui equipamento, treinamento e suporte</span>
              </div>
            </div>
          </div>

          {/* Hero photo */}
          <div className="relative max-[960px]:hidden">
            <img
              src={fotoDR309194.src}
              alt="Convidados celebrando com foto-lembrança Lembre-Lembre"
              className="w-full rounded-[20px] object-cover aspect-4/5 block shadow-[0_24px_64px_rgba(0,0,0,.5)]"
            />
            <div className="absolute top-4 left-4 bg-[rgba(26,23,18,.82)] backdrop-blur-[10px] border border-white/14 text-white rounded-[30px] py-2 px-4 text-[.78rem] font-medium flex gap-2 items-center">
              📸 Foto-lembrança física em menos de 60 segundos
            </div>
            <div className="absolute -bottom-4 -right-4 bg-accent text-white rounded-[14px] px-[22px] py-[18px] text-center shadow-[0_10px_28px_rgba(201,145,58,.45)]">
              <div className="font-fraunces text-[1.7rem] font-bold leading-none">+R$450k</div>
              <div className="text-[.68rem] opacity-85 mt-1">faturamento pode chegar/ano</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF BAR ── */}
      <div className="bg-white border-b border-border py-[22px]">
        <div className="max-w-[1120px] mx-auto px-7 flex items-center gap-10 flex-wrap justify-center">
          <span className="text-[.72rem] uppercase tracking-widest text-muted font-semibold">Presente em</span>
          <div className="flex items-center gap-2 text-[.82rem] font-medium text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 inline-block" />
            3 países
          </div>
          <div className="w-px h-5 bg-border" />
          <div className="flex items-center gap-2 text-[.82rem] font-medium text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 inline-block" />
            63 unidades ativas
          </div>
          <div className="w-px h-5 bg-border" />
          <div className="flex items-center gap-2 text-[.82rem] font-medium text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 inline-block" />
            Franquia desde 2019
          </div>
          <div className="w-px h-5 bg-border" />
          <div className="flex items-center gap-2 text-[.82rem] font-medium text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 inline-block" />
            R$ 6,9M faturados em 2025
          </div>
        </div>
      </div>

      {/* ── FORM TOP ── */}
      <section id="primeiro-passo" className="bg-bg3 py-20">
        <div className="max-w-[1120px] mx-auto px-7">
          <div className="text-center text-white">
            <span className="text-[.72rem] font-bold tracking-[.12em] uppercase text-accent mb-3.5 block">
              Seja dono do seu negócio
            </span>
            <h2 className="font-fraunces text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-white mb-[18px]">
              Dê o primeiro passo agora
            </h2>
            <p className="text-base text-white/55 max-w-[560px] mx-auto leading-[1.75]">
              Preencha abaixo e nossa equipe entra em contato para apresentar o modelo completo.
            </p>
          </div>
          <div className="max-w-[640px] mx-auto mt-14">
            <LeadForm formId="leadFormTop" />
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS TOPO ── */}
      <section className="py-16 bg-bg">
        <div className="max-w-[1120px] mx-auto px-7">
          <div className="text-center">
            <span className="text-[.72rem] font-bold tracking-[.12em] uppercase text-accent mb-3.5 block">
              Depoimentos reais
            </span>
            <h2 className="font-fraunces text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-[18px]">
              Quem já faz parte<br />da rede Lembre-Lembre
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-14 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1">
            {[
              videoDepoimento1,
              videoMaringaDepoimento,
              videoSalvadorDepoimento,
            ].map((file, i) => (
                <div key={i} className="rounded-xl overflow-hidden bg-[#111] relative">
                <LazyVideo
                  src={file}
                  controls
                  playsInline
                  className="w-full aspect-9/16 object-cover block cursor-pointer"
                />
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* ── NÚMEROS ── */}
      <section className="py-24 bg-bg2">
        <div className="max-w-[1120px] mx-auto px-7">
          <div className="text-center">
            <span className="text-[.72rem] font-bold tracking-[.12em] uppercase text-accent mb-3.5 block">
              Nossos números
            </span>
            <h2 className="font-fraunces text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-[18px]">
              Resultados que falam <br />por si mesmos
            </h2>
            <p className="text-base text-muted max-w-[560px] mx-auto leading-[1.75]">
              Mais de uma década transformando momentos em memórias, e transformando
              franqueados em empreendedores de sucesso.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-px mt-14 rounded-xl overflow-hidden border border-border max-[960px]:grid-cols-2 max-[600px]:grid-cols-2">
            {[
              { value: "63", label: "Franquias ativas ao redor do mundo" },
              { value: "R$6,9M", label: "Faturamento da rede no último ano" },
              { value: "80%", label: "Margem de lucro por evento realizado" },
              { value: "12", label: "Meses em média para recuperar o investimento" },
            ].map((item, i) => (
              <div key={i} className="bg-white px-8 py-10 flex flex-col items-center text-center">
                <div className="font-fraunces sm:text-[2.8rem] font-bold text-accent leading-none mb-2.5 text-[2.4rem]">{item.value}</div>
                <div className="text-[.82rem] text-muted leading-normal max-w-[140px]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section id="como-funciona" className="py-24 bg-bg">
        <div className="max-w-[1120px] mx-auto px-7">
          <div className="text-center">
            <span className="text-[.72rem] font-bold tracking-[.12em] uppercase text-accent mb-3.5 block">
              Como funciona
            </span>
            <h2 className="font-fraunces text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-[18px]">
              Um negócio com operação simples<br />e potencial real de crescimento
            </h2>
            <p className="text-base text-muted max-w-[560px] mx-auto leading-[1.75]">
              A Lembre-Lembre foi pensada para quem deseja empreender com uma estrutura enxuta,
              portátil e sem a complexidade de um ponto físico.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-14 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1">
            {[
              {
                num: "01",
                img: fotoLouJose53.src,
                title: "Você desenvolve o mercado e fecha contratos",
                desc: "Casamentos, eventos corporativos, aniversários, formaturas, ativações de marca e eventos culturais acontecem durante todo o ano. Com o suporte da franqueadora, você aprende a prospectar, se posicionar, apresentar valor e fechar contratos.",
              },
              {
                num: "02",
                img: fotoEvento2.src,
                title: "Leva o equipamento ao evento",
                desc: "A estrutura é compacta, portátil e cabe em qualquer carro. A operação foi pensada para ser prática, sem necessidade de escritório, depósito ou logística complexa.",
              },
              {
                num: "03",
                img: fotoLouJose96.src,
                title: "Entrega memórias e constrói recorrência",
                desc: "O produto encanta no evento, gera desejo nos convidados e fortalece o posicionamento da marca na sua região. Cada evento se torna também uma vitrine para novos contratos.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="rounded-[20px] overflow-hidden bg-white border border-border transition-all duration-300 hover:shadow-[0_20px_56px_rgba(0,0,0,.09)] hover:-translate-y-1.5 group"
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full aspect-3/2 object-cover block brightness-90 group-hover:brightness-100 transition-all duration-300"
                />
                <div className="p-7 pb-8">
                  <div className="w-9 h-9 rounded-full bg-accent-light text-accent font-fraunces text-[.95rem] font-bold flex items-center justify-center mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-fraunces text-[1.05rem] font-semibold mb-2.5">{step.title}</h3>
                  <p className="text-[.85rem] text-muted leading-[1.7]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFÍCIOS ── */}
      <section className="py-24 bg-bg3 text-white">
        <div className="max-w-[1120px] mx-auto px-7">
          <div className="text-center">
            <span className="text-[.72rem] font-bold tracking-[.12em] uppercase text-accent mb-3.5 block">
              Por que a Lembre-Lembre
            </span>
            <h2 className="font-fraunces text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-white mb-[18px]">
              Tudo que você recebe quando<br />se torna um franqueado
            </h2>
            <p className="text-base text-white/55 max-w-[560px] mx-auto leading-[1.75]">
              A maior rede de foto-lembrança do Brasil. Diversão, resultado e uma comunidade que trabalha junto.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px mt-14 rounded-xl overflow-hidden max-[960px]:grid-cols-1">
            {[
              { icon: "🚀", title: "Infraestrutura pronta", desc: "Toda a operação já foi estruturada e testada. Você entra em um modelo validado com mais de 10 anos de mercado." },
              { icon: "📚", title: "Treinamento completo", desc: "Capacitação inicial e suporte contínuo. Não precisa saber nada de fotografia para começar." },
              { icon: "📱", title: "Plataforma de gestão", desc: "Sistema de gestão de contratos e clientes." },
              { icon: "🎨", title: "Material de marketing", desc: "Arte, identidade visual e materiais prontos para você usar. Sem precisar contratar designer ou agência." },
              { icon: "📅", title: "Negócio de fim de semana", desc: "A maioria dos eventos é sexta, sábado ou domingo. Ideal para quem ainda trabalha na semana." },
              { icon: "🌍", title: "Uma rede que cresce junto", desc: "Comunidade ativa de empreendedores no Brasil e em Portugal, com troca de experiências e benchmarks reais." },
              { icon: "💼", title: "Zero funcionário obrigatório", desc: "Você pode operar sozinho. Sem encargos trabalhistas, sem folha de pagamento para gerir desde o primeiro dia." },
              { icon: "🏠", title: "Sem aluguel fixo", desc: "Não precisa de ponto comercial. Seu estúdio vai ao cliente — em qualquer salão de festas, buffet ou espaço de eventos." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/4 border border-white/7 px-9 py-8 flex gap-5 items-start transition-all hover:bg-white/7"
              >
                <div className="w-[42px] h-[42px] rounded-[10px] shrink-0 bg-[rgba(201,145,58,.15)] border border-[rgba(201,145,58,.25)] flex items-center justify-center text-[1.1rem]">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[.92rem] font-semibold text-white mb-1.5">{item.title}</h4>
                  <p className="text-[.82rem] text-white/50 leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section className="py-24 bg-bg">
        <div className="max-w-[1120px] mx-auto px-7">
          <div className="grid grid-cols-2 gap-20 items-center max-[960px]:grid-cols-1">
            <div className="relative max-[960px]:hidden">
              <img
                src={fotoEvento1.src}
                alt="Equipamento Lembre-Lembre em cerimônia de casamento"
                className="w-full rounded-[20px] object-cover aspect-3/4 block shadow-[0_20px_56px_rgba(0,0,0,.1)]"
              />
              <div className="absolute -bottom-5 -right-5 bg-accent text-white rounded-[16px] px-6 py-5 text-center shadow-[0_12px_32px_rgba(201,145,58,.35)]">
                <div className="font-fraunces text-[1.9rem] font-bold">12+</div>
                <div className="text-[.72rem] opacity-85 mt-0.5">anos de mercado</div>
              </div>
            </div>
            <div>
              <span className="text-[.72rem] font-bold tracking-[.12em] uppercase text-accent mb-3.5 block">
                Nossa história
              </span>
              <h2 className="font-fraunces text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-[18px]">
                Nasceu no Brasil.<br />Cresce pelo mundo.
              </h2>
              <p className="text-[.95rem] text-muted leading-[1.8] mb-4">
                A Lembre-Lembre foi criada em 2013 por Deivid Ribeiro (fotógrafo de eventos) e Camilla Mayer
                (arquiteta) com uma proposta simples: transformar eventos em experiências memoráveis, unindo
                as pessoas através da fotografia, promovendo diversão e lembranças impressas na hora.
              </p>
              <p className="text-[.95rem] text-muted leading-[1.8] mb-4">
                O que começou como um projeto local virou a maior rede de foto-lembrança do Brasil. Já somos
                mais de 60 franqueados espalhados em território nacional e fora dele também, com unidades na
                Europa e África provando a resiliência do modelo de negócio.
              </p>
              <div className="flex gap-2 flex-wrap mt-6">
                {["Fundada em 2013", "Franquia desde 2019", "Portugal desde 2022", "63 unidades", "Modelo validado"].map((tag) => (
                  <span key={tag} className="bg-accent-light text-accent-dark text-[.75rem] font-semibold px-3.5 py-1.5 rounded-[20px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIS DEPOIMENTOS ── */}
      <section id="depoimentos" className="py-24 bg-bg2">
        <div className="max-w-[1120px] mx-auto px-7">
          <div className="text-center">
            <span className="text-[.72rem] font-bold tracking-[.12em] uppercase text-accent mb-3.5 block">
              Mais depoimentos
            </span>
            <h2 className="font-fraunces text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-[18px]">
              Mais histórias de<br />quem acreditou no modelo
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-14 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1">
            {[videoCgDepoimento, videoSaoJose, videoMaringaDepoimento
            ].map((file, i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-[#111] relative">
                <LazyVideo
                  src={file}
                  controls
                  playsInline
                  className="w-full aspect-9/16 object-cover block cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──  */}
      <section className="py-24 bg-bg">
        <div className="max-w-[1120px] mx-auto px-7">
          <div className="text-center">
            <span className="text-[.72rem] font-bold tracking-[.12em] uppercase text-accent mb-3.5 block">
              Dúvidas frequentes
            </span>
            <h2 className="font-fraunces text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-[18px]">
              Perguntas que a gente<br />recebe todo dia
            </h2>
          </div>
          <div className="max-w-[720px] mx-auto mt-12">
            {[
              {
                q: "Preciso ter experiência com fotografia?",
                a: "Não. A Lembre-Lembre não exige nenhum conhecimento técnico em fotografia. O treinamento inicial cobre tudo que você precisa para operar com qualidade desde o primeiro evento.",
              },
              {
                q: "Preciso de um ponto comercial ou escritório?",
                a: "Não. A estrutura é portátil e vai ao cliente: salões de festas, buffets, espaços corporativos. Você opera de casa e leva o equipamento apenas nos dias de evento.",
              },
              {
                q: "Preciso contratar funcionários?",
                a: "Não é obrigatório. Muitos franqueados operam sozinhos ou com o apoio de um familiar. À medida que a agenda cresce, você pode contratar um assistente para escalar.",
              },
              {
                q: "Qual o prazo médio para retorno do investimento?",
                a: "O prazo médio da rede é inferior a 12 meses. Com o faturamento médio anual que pode chegar a mais de R$400.000 e margem de até 80% por evento, o retorno é rápido em comparação a outros modelos de franquia.",
              },
              {
                q: "Em que dias da semana eu trabalho?",
                a: "Eventos acontecem principalmente às sextas, sábados e domingos. Isso torna a Lembre-Lembre ideal para quem ainda está em transição de carreira e não pode abrir mão da renda atual.",
              },
              {
                q: "Quais tipos de eventos posso atender?",
                a: "Casamentos, aniversários (infantis, 15 anos, adultos), eventos corporativos, formaturas, confraternizações, feiras, lançamentos de produto e muito mais.",
              },
            ].map((item, i) => (
              <details key={i} className="border-b border-border py-6 cursor-pointer group">
                <summary className="text-[.97rem] font-semibold list-none flex justify-between items-center gap-4 cursor-pointer">
                  {item.q}
                  <span className="faq-arrow text-[1.1rem] text-accent transition-transform duration-[.25s] shrink-0">+</span>
                </summary>
                <p className="text-[.88rem] text-muted leading-[1.75] mt-3.5 pr-8">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM FINAL ── */}
      <section id="quero-ser-franqueado" className="py-24 bg-bg3">
        <div className="max-w-[1120px] mx-auto px-7">
          <div className="text-center text-white">
            <span className="text-[.72rem] font-bold tracking-[.12em] uppercase text-accent mb-3.5 block">
              Candidatura
            </span>
            <h2 className="font-fraunces text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-white mb-[18px]">
              Dê o primeiro passo<br />agora mesmo
            </h2>
            <p className="text-base text-white/55 max-w-[560px] mx-auto leading-[1.75]">
              Preencha o formulário e nossa equipe entrará em contato para apresentar
              o modelo completo e tirar todas as suas dúvidas.
            </p>
          </div>
          <div className="max-w-[640px] mx-auto mt-14">
            <LeadForm formId="leadFormBottom" />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#111009] text-white/45 py-14 pb-10 border-t border-white/6">
        <div className="max-w-[1120px] mx-auto px-7 flex items-center justify-between flex-wrap gap-5">
          <div className="font-fraunces text-[1.1rem] font-bold text-white/70">
            Lembre<span className="text-accent">-</span>Lembre
          </div>
          <div className="flex gap-6">
            <a href="https://lembrelembre.com.br" target="_blank" rel="noopener noreferrer" className="text-[.82rem] text-white/40 no-underline transition-colors hover:text-white/75">
              Site oficial
            </a>
            <a href="#depoimentos" className="text-[.82rem] text-white/40 no-underline transition-colors hover:text-white/75">
              Depoimentos
            </a>
            <a href="#quero-ser-franqueado" className="text-[.82rem] text-white/40 no-underline transition-colors hover:text-white/75">
              Candidatura
            </a>
          </div>
        </div>
        <div className="max-w-[1120px] mx-auto px-7">
          <p className="text-[.78rem] text-center pt-7 border-t border-white/5 mt-3">
            © 2025 Lembre-Lembre Franchising. Todos os direitos reservados.
            Fundada em João Pessoa, PB. Presente em Brasil e Portugal.
          </p>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a
        href="https://wa.me/558374006991?text=Ol%C3%A1!%20Tenho%20interesse%20em%20ser%20franqueado%20da%20Lembre-Lembre."
        target="_blank"
        rel="noopener noreferrer"
        title="Falar no WhatsApp"
        className="fixed bottom-7 right-7 z-999 w-[58px] h-[58px] rounded-full bg-[#25d366] text-white flex items-center justify-center text-[1.5rem] shadow-[0_6px_24px_rgba(37,211,102,.4)] transition-all hover:scale-110 hover:shadow-[0_10px_32px_rgba(37,211,102,.5)]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </>
  );
}
