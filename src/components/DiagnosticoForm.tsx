"use client";

import { useState, type FormEvent } from "react";
import { WHATSAPP_NUMBER } from "@/config/site";
import { track } from "@/lib/tracking";

type FormState = {
  nome: string;
  empresa: string;
  site: string;
  cidade: string;
  segmento: string;
  perfil: string;
  whatsapp: string;
};

const initialForm: FormState = {
  nome: "",
  empresa: "",
  site: "",
  cidade: "",
  segmento: "",
  perfil: "",
  whatsapp: "",
};

const segments = [
  "Clínica ou consultório",
  "Odontologia",
  "Veterinária",
  "Barbearia ou estética",
  "Oficina ou mecânica",
  "Comércio",
  "Restaurante",
  "Serviços locais",
  "Controle de pragas",
  "Outro",
];

export function DiagnosticoForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (form.nome.trim().length < 2) next.nome = "Informe seu nome.";
    if (form.empresa.trim().length < 2) next.empresa = "Informe o nome da empresa.";
    const phone = form.whatsapp.replace(/\D/g, "");
    if (phone.length < 10) next.whatsapp = "Informe um WhatsApp válido com DDD.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);

    const payload = {
      nome: form.nome.trim(),
      empresa: form.empresa.trim(),
      site: form.site.trim(),
      cidade: form.cidade.trim(),
      segmento: form.segmento,
      perfil: form.perfil.trim(),
      whatsapp: form.whatsapp.trim(),
    };

    const message = [
      "*Diagnóstico de SEO Local — Z'ells*",
      "",
      `Nome: ${payload.nome}`,
      `Empresa: ${payload.empresa}`,
      payload.site ? `Site: ${payload.site}` : null,
      payload.cidade ? `Cidade: ${payload.cidade}` : null,
      payload.segmento ? `Segmento: ${payload.segmento}` : null,
      payload.perfil ? `Perfil no Google: ${payload.perfil}` : null,
      `WhatsApp: ${payload.whatsapp}`,
      "",
      "Olá! Gostaria de um diagnóstico de SEO Local para a minha empresa.",
    ]
      .filter(Boolean)
      .join("\n");

    track("diagnostico_submit", { label: "form", segmento: payload.segmento });

    if (process.env.NEXT_PUBLIC_FORM_ENDPOINT) {
      try {
        await fetch(process.env.NEXT_PUBLIC_FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch {
        /* the WhatsApp fallback keeps the lead working */
      }
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSending(false);
    setSent(true);
  }

  const inputBase =
    "w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-[15px] text-foreground placeholder:text-muted/70 transition-colors focus:border-lime/60 focus:outline-none";

  if (sent) {
    return (
      <div className="rounded-2xl border border-lime/40 bg-lime/5 p-8 text-center sm:p-10">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lime text-ink">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
          Solicitação encaminhada
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted">
          Abrimos o WhatsApp com os dados do seu negócio. É só enviar para
          concluir a solicitação do diagnóstico. Se a janela não abriu, fale
          diretamente com a Z&rsquo;ells pelo WhatsApp.
        </p>
        <a
          href="https://wa.me/5518996494348"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex h-11 items-center rounded-full bg-lime px-6 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e2ff85]"
        >
          Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-line bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="diag-nome" className="mb-1.5 block text-sm font-semibold text-foreground">
            Nome *
          </label>
          <input
            id="diag-nome"
            name="nome"
            type="text"
            autoComplete="name"
            required
            value={form.nome}
            onChange={(e) => updateField("nome", e.target.value)}
            className={inputBase}
            placeholder="Seu nome"
          />
          {errors.nome && <p className="mt-1.5 text-xs text-red-400">{errors.nome}</p>}
        </div>
        <div>
          <label htmlFor="diag-empresa" className="mb-1.5 block text-sm font-semibold text-foreground">
            Empresa *
          </label>
          <input
            id="diag-empresa"
            name="empresa"
            type="text"
            autoComplete="organization"
            required
            value={form.empresa}
            onChange={(e) => updateField("empresa", e.target.value)}
            className={inputBase}
            placeholder="Nome da empresa"
          />
          {errors.empresa && <p className="mt-1.5 text-xs text-red-400">{errors.empresa}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="diag-site" className="mb-1.5 block text-sm font-semibold text-foreground">
            Site
          </label>
          <input
            id="diag-site"
            name="site"
            type="url"
            inputMode="url"
            value={form.site}
            onChange={(e) => updateField("site", e.target.value)}
            className={inputBase}
            placeholder="https://seusite.com.br"
          />
        </div>
        <div>
          <label htmlFor="diag-cidade" className="mb-1.5 block text-sm font-semibold text-foreground">
            Cidade
          </label>
          <input
            id="diag-cidade"
            name="cidade"
            type="text"
            autoComplete="address-level2"
            value={form.cidade}
            onChange={(e) => updateField("cidade", e.target.value)}
            className={inputBase}
            placeholder="Cidade de atuação"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="diag-segmento" className="mb-1.5 block text-sm font-semibold text-foreground">
            Segmento
          </label>
          <select
            id="diag-segmento"
            name="segmento"
            value={form.segmento}
            onChange={(e) => updateField("segmento", e.target.value)}
            className={inputBase}
          >
            <option value="">Selecione o segmento</option>
            {segments.map((segment) => (
              <option key={segment} value={segment}>
                {segment}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="diag-whatsapp" className="mb-1.5 block text-sm font-semibold text-foreground">
            WhatsApp *
          </label>
          <input
            id="diag-whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={form.whatsapp}
            onChange={(e) => updateField("whatsapp", e.target.value)}
            className={inputBase}
            placeholder="(18) 99999-9999"
          />
          {errors.whatsapp && <p className="mt-1.5 text-xs text-red-400">{errors.whatsapp}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="diag-perfil" className="mb-1.5 block text-sm font-semibold text-foreground">
          Link do Google Business Profile
        </label>
        <input
          id="diag-perfil"
          name="perfil"
          type="url"
          inputMode="url"
          value={form.perfil}
          onChange={(e) => updateField("perfil", e.target.value)}
          className={inputBase}
          placeholder="https://g.page/seu-negocio"
        />
        <p className="mt-1.5 text-xs text-muted">
          Se não souber onde está, enviamos orientação para localizar o perfil.
        </p>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-lime px-7 text-[15px] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e2ff85] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? "Enviando..." : "Solicitar diagnóstico"}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <p className="text-xs leading-relaxed text-muted">
        Ao enviar, abriremos o WhatsApp com os dados preenchidos para você
        concluir o envio. Seus dados são usados apenas para responder à sua
        solicitação.
      </p>
    </form>
  );
}