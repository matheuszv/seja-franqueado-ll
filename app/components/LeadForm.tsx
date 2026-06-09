"use client";

import { useActionState } from "react";
import { submitLead, type FormState } from "@/app/actions";

const initialState: FormState = { status: "idle" };

interface LeadFormProps {
  formId: string;
}

function SubmitButton() {
  return (
    <button
      type="submit"
      className="mt-6 w-full bg-accent text-white rounded-[10px] py-[18px] text-base font-semibold cursor-pointer transition-all hover:bg-accent-dark hover:-translate-y-0.5 font-inter"
    >
      Dê o primeiro passo →
    </button>
  );
}

export default function LeadForm({ formId }: LeadFormProps) {
  const [state, formAction] = useActionState(submitLead, initialState);

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

  return (
    <form
      id={formId}
      action={formAction}
      className="grid grid-cols-2 gap-4"
    >
      {state.status === "error" && state.message && (
        <div className="col-span-2 bg-red-500/20 border border-red-500/40 rounded-lg px-4 py-3 text-red-300 text-sm">
          {state.message}
        </div>
      )}

      <div className="flex flex-col gap-[7px]">
        <label className="text-[.78rem] font-semibold text-white/55 uppercase tracking-[.07em]">
          Seu nome completo
        </label>
        <input
          type="text"
          name="name"
          placeholder="João Silva"
          required
          className="bg-white/7 border border-white/10 rounded-lg px-4 py-[13px] text-[.9rem] text-white placeholder:text-white/30 outline-none focus:border-accent focus:bg-white/10 transition-all font-inter"
        />
      </div>

      <div className="flex flex-col gap-[7px]">
        <label className="text-[.78rem] font-semibold text-white/55 uppercase tracking-[.07em]">
          WhatsApp
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="(11) 99999-9999"
          required
          className="bg-white/7 border border-white/10 rounded-lg px-4 py-[13px] text-[.9rem] text-white placeholder:text-white/30 outline-none focus:border-accent focus:bg-white/10 transition-all font-inter"
        />
      </div>

      <div className="flex flex-col gap-[7px]">
        <label className="text-[.78rem] font-semibold text-white/55 uppercase tracking-[.07em]">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          placeholder="joao@email.com"
          required
          className="bg-white/7 border border-white/10 rounded-lg px-4 py-[13px] text-[.9rem] text-white placeholder:text-white/30 outline-none focus:border-accent focus:bg-white/10 transition-all font-inter"
        />
      </div>

      <div className="flex flex-col gap-[7px]">
        <label className="text-[.78rem] font-semibold text-white/55 uppercase tracking-[.07em]">
          Cidade / Estado
        </label>
        <input
          type="text"
          name="city"
          placeholder="João Pessoa, PB"
          required
          className="bg-white/7 border border-white/10 rounded-lg px-4 py-[13px] text-[.9rem] text-white placeholder:text-white/30 outline-none focus:border-accent focus:bg-white/10 transition-all font-inter"
        />
      </div>

      <div className="col-span-2 flex flex-col gap-[7px]">
        <label className="text-[.78rem] font-semibold text-white/55 uppercase tracking-[.07em]">
          Sua situação em relação ao investimento de R$ 51.950
        </label>
        <select
          name="capital"
          required
          className="lead-select bg-white/7 border border-white/10 rounded-lg px-4 py-[13px] text-[.9rem] text-white outline-none focus:border-accent focus:bg-white/10 transition-all font-inter cursor-pointer"
        >
          <option value="">Selecione...</option>
          <option value="tem_total">Já tenho o valor total disponível</option>
          <option value="tem_metade">Tenho aproximadamente a metade (R$ ~25.000)</option>
          <option value="financiamento">Preciso de financiamento / parcelamento</option>
          <option value="sem_capital">Ainda não tenho o valor no momento</option>
        </select>
      </div>

      <div className="col-span-2 flex flex-col gap-[7px]">
        <label className="text-[.78rem] font-semibold text-white/55 uppercase tracking-[.07em]">
          Alguma mensagem ou dúvida? (opcional)
        </label>
        <textarea
          name="msg"
          placeholder="Pode escrever à vontade..."
          rows={4}
          className="bg-white/7 border border-white/10 rounded-lg px-4 py-[13px] text-[.9rem] text-white placeholder:text-white/30 outline-none focus:border-accent focus:bg-white/10 transition-all font-inter resize-y"
        />
      </div>

      <div className="col-span-2">
        <SubmitButton />
        <p className="text-[.75rem] text-white/40 text-center mt-3.5">
          Seus dados são protegidos e nunca serão compartilhados com terceiros.
        </p>
      </div>
    </form>
  );
}
