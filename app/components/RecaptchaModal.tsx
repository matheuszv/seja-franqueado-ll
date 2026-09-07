"use client";

import { X } from "lucide-react";
import Recaptcha from "react-google-recaptcha";

interface RecaptchaProps {
  formId: string;
  captchaToken: string | null;
  isLoading: boolean;
  setIsModalCaptchaOpen: (isOpen: boolean) => void;
  setCaptchaToken: (token: string | null) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export default function RecaptchaModal({
  setIsModalCaptchaOpen,
  setCaptchaToken,
  captchaToken,
  formId,
  isLoading,
  setIsLoading
}: RecaptchaProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-[#111111] border border-white/10 rounded-[10px] p-6 shadow-2xl">

        {/* Fechar */}
        <button
          type="button"
          onClick={() => setIsModalCaptchaOpen(false)}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        {/* Cabeçalho */}
        <div className="pr-8 mb-6">
          <h2 className="font-heading text-xl text-white font-semibold mb-2">
            Só mais um passo
          </h2>

          <p className="text-sm text-white/50 leading-relaxed">
            Confirme que você não é um robô para enviar seu contato.
          </p>
        </div>

        {/* Captcha */}
        <div className="p-4 flex justify-center">
          <Recaptcha
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={setCaptchaToken}
          />
        </div>

        {/* Botão */}
        <button
          type="submit"
          form={formId}
          onClick={() => setIsLoading(true)}
          disabled={!captchaToken || isLoading}
          className="mt-5 w-full bg-accent text-white rounded-[10px] py-[15px] text-base font-semibold cursor-pointer transition-all hover:bg-accent-dark hover:-translate-y-0.5 font-body disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          Confirmar e enviar →
        </button>

        <p className="text-[.7rem] text-white/30 text-center mt-3">
          Seus dados estão protegidos e serão utilizados apenas para entrar em contato.
        </p>
      </div>
    </div>
  );
}