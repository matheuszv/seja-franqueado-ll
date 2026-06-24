"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormState {
  status: FormStatus;
  name?: string;
  message?: string;
}

interface LeadFormProps {
  formId: string;
}

export default function LeadForm({ formId }: LeadFormProps) {
  const [state, setState] = useState<FormState>({ status: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: "loading" });

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      city: (form.elements.namedItem("city") as HTMLInputElement).value.trim(),
      capital: (form.elements.namedItem("capital") as HTMLSelectElement).value,
      msg: (form.elements.namedItem("msg") as HTMLTextAreaElement).value.trim(),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setState({ status: "error", message: json.error ?? "Erro ao enviar. Tente novamente." });
      } else {
        setState({ status: "success", name: json.name });
      }
    } catch {
      setState({ status: "error", message: "Falha de conexão. Tente novamente." });
    }
  }

  if (state.status === "success") {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-4">🙌</div>
        <h3 className="font-fraunces text-2xl text-white font-semibold mb-3">
          Recebemos seu contato, {state.name}!
        </h3>
        <p className="text-white/60 text-sm leading-relaxed">
          Nossa equipe entrará em contato em breve para apresentar o modelo
          completo e tirar todas as suas dúvidas.
        </p>
      </div>
    );
  }

  const isLoading = state.status === "loading";

  return (
    <form id={formId} onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      {state.status === "error" && state.message && (
        <div className="col-span-2 bg-red-500/20 border border-red-500/40 rounded-lg px-4 py-3 text-red-300 text-sm">
          {state.message}
        </div>
      )}

      <div className="flex flex-col gap-[7px]">
        <label className="sm:text-[.78rem] font-semibold text-white/55 uppercase tracking-[.07em] text-[.7rem]">
          Seu nome completo
        </label>
        <input
          type="text"
          name="name"
          placeholder="João Silva"
          required
          disabled={isLoading}
          className="bg-white/7 border border-white/10 rounded-lg px-4 py-[13px] text-[.9rem] text-white placeholder:text-white/30 outline-none focus:border-accent focus:bg-white/10 transition-all font-inter disabled:opacity-50"
        />
      </div>

      <div className="flex flex-col gap-[7px]">
        <label className="sm:text-[.78rem] font-semibold text-white/55 uppercase tracking-[.07em] text-[.7rem]">
          WhatsApp
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="(11) 99999-9999"
          required
          disabled={isLoading}
          className="bg-white/7 border border-white/10 rounded-lg px-4 py-[13px] text-[.9rem] text-white placeholder:text-white/30 outline-none focus:border-accent focus:bg-white/10 transition-all font-inter disabled:opacity-50"
        />
      </div>

      <div className="flex flex-col gap-[7px]">
        <label className="sm:text-[.78rem] font-semibold text-white/55 uppercase tracking-[.07em] text-[.7rem]">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          placeholder="joao@email.com"
          required
          disabled={isLoading}
          className="bg-white/7 border border-white/10 rounded-lg px-4 py-[13px] text-[.9rem] text-white placeholder:text-white/30 outline-none focus:border-accent focus:bg-white/10 transition-all font-inter disabled:opacity-50"
        />
      </div>

      <div className="flex flex-col gap-[7px]">
        <label className="sm:text-[.78rem] font-semibold text-white/55 uppercase tracking-[.07em] text-[.7rem]">
          Cidade / Estado
        </label>
        <input
          type="text"
          name="city"
          placeholder="João Pessoa, PB"
          required
          disabled={isLoading}
          className="bg-white/7 border border-white/10 rounded-lg px-4 py-[13px] text-[.9rem] text-white placeholder:text-white/30 outline-none focus:border-accent focus:bg-white/10 transition-all font-inter disabled:opacity-50"
        />
      </div>

      <div className="col-span-2 flex flex-col gap-[7px]">
        <label className="sm:text-[.78rem] font-semibold text-white/55 uppercase tracking-[.07em] text-[.7rem]">
          Sua situação em relação ao investimento de R$ 51.950
        </label>
        <select
          name="capital"
          required
          disabled={isLoading}
          className="lead-select bg-white/7 border border-white/10 rounded-lg px-4 py-[13px] text-[.9rem] text-white outline-none focus:border-accent focus:bg-white/10 transition-all font-inter cursor-pointer disabled:opacity-50"
        >
          <option value="">Selecione...</option>
          <option value="tem_total">Já tenho o valor total disponível</option>
          <option value="tem_metade">Tenho aproximadamente a metade (R$ ~25.000)</option>
          <option value="financiamento">Preciso de financiamento / parcelamento</option>
          <option value="sem_capital">Ainda não tenho o valor no momento</option>
        </select>
      </div>

      <div className="col-span-2 flex flex-col gap-[7px]">
        <label className="sm:text-[.78rem] font-semibold text-white/55 uppercase tracking-[.07em] text-[.7rem]">
          Alguma mensagem ou dúvida? (opcional)
        </label>
        <textarea
          name="msg"
          placeholder="Pode escrever à vontade..."
          rows={4}
          disabled={isLoading}
          className="bg-white/7 border border-white/10 rounded-lg px-4 py-[13px] text-[.9rem] text-white placeholder:text-white/30 outline-none focus:border-accent focus:bg-white/10 transition-all font-inter resize-y disabled:opacity-50"
        />
      </div>

      <div className="col-span-2">
        <button
          type="submit"
          disabled={isLoading}
          className="mt-6 w-full bg-accent text-white rounded-[10px] py-[18px] text-base font-semibold cursor-pointer transition-all hover:bg-accent-dark hover:-translate-y-0.5 font-inter disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          {isLoading ? "Enviando..." : "Dê o primeiro passo →"}
        </button>
        <p className="text-[.75rem] text-white/40 text-center mt-3.5">
          Seus dados são protegidos e nunca serão compartilhados com terceiros.
        </p>
      </div>
    </form>
  );
}
