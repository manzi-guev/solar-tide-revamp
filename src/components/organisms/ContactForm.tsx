'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/atoms'
import { cn } from '@/lib/cn'
import { SERVICE_TYPE_LABELS, type ServiceType } from '@/types'

/* ── Validation schema ──────────────────────── */
const step1Schema = z.object({
  serviceType: z.enum(['residential', 'commercial', 'consultancy', 'audit', 'unsure'] as const),
})

const step2Schema = z.object({
  siteLocation: z.string().optional(),
  loadDetails:  z.string().optional(),
  timeline:     z.string().optional(),
})

const step3Schema = z.object({
  name:  z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
})

const fullSchema = step1Schema.merge(step2Schema).merge(step3Schema)
type FormData = z.infer<typeof fullSchema>

/* ── Component ──────────────────────────────── */
type Stage = 'form' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [step, setStep] = useState(1)
  const [stage, setStage] = useState<Stage>('form')

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(fullSchema),
    defaultValues: { serviceType: 'unsure' },
  })

  async function goToStep2() {
    const ok = await trigger('serviceType')
    if (ok) setStep(2)
  }

  async function goToStep3() {
    const ok = await trigger(['siteLocation', 'loadDetails', 'timeline'])
    if (ok) setStep(3)
  }

  async function onSubmit(data: FormData) {
    setStage('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed')
      setStage('success')
    } catch {
      setStage('error')
    }
  }

  if (stage === 'success') {
    return (
      <div className="p-8 border border-sand-dim bg-sand text-center">
        <p className="font-display font-semibold text-ink text-lg mb-2">Message received.</p>
        <p className="text-slate-900 text-[0.95rem]">
          We will follow up at the email you provided, usually within one business day.
        </p>
      </div>
    )
  }

  if (stage === 'error') {
    return (
      <div className="p-8 border border-red-200 bg-red-50">
        <p className="font-semibold text-red-700 mb-1">Something went wrong.</p>
        <p className="text-red-600 text-sm mb-4">
          Please try again or email us directly at hello@solartide.com
        </p>
        <button
          onClick={() => setStage('form')}
          className="text-sm font-semibold text-ink underline"
        >
          Try again
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">

      {/* Step indicator */}
      <div className="flex gap-2 mb-2">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className={cn(
              'h-[3px] flex-1 transition-colors duration-300',
              n <= step ? 'bg-solar' : 'bg-sand-dim',
            )}
          />
        ))}
      </div>

      {/* Step 1 — Service type */}
      {step === 1 && (
        <div className="flex flex-col gap-4">
          <FieldLabel>What do you need?</FieldLabel>
          <div className="flex flex-col gap-2">
            {(Object.entries(SERVICE_TYPE_LABELS) as [ServiceType, string][]).map(([val, label]) => (
              <label
                key={val}
                className={cn(
                  'flex items-center gap-3 p-3.5 border cursor-pointer transition-colors',
                  watch('serviceType') === val
                    ? 'border-tide bg-tide-pale text-ink'
                    : 'border-sand-dim text-slate-900 hover:border-slate/40',
                )}
              >
                <input
                  type="radio"
                  value={val}
                  {...register('serviceType')}
                  className="accent-tide"
                />
                <span className="text-[0.92rem]">{label}</span>
              </label>
            ))}
          </div>
          {errors.serviceType && <FieldError>{errors.serviceType.message}</FieldError>}
          <Button type="button" variant="solid" size="md" onClick={goToStep2} className="self-start mt-1">
            Next →
          </Button>
        </div>
      )}

      {/* Step 2 — Site details */}
      {step === 2 && (
        <div className="flex flex-col gap-4">
          <FieldLabel>Tell us about your site.</FieldLabel>
          <Field label="Site location" error={errors.siteLocation?.message}>
            <input
              type="text"
              placeholder="e.g. Kigali, Gasabo District"
              {...register('siteLocation')}
              className={inputCls}
            />
          </Field>
          <Field label="Load or roof size" error={errors.loadDetails?.message}>
            <textarea
              placeholder="Approximate monthly kWh, roof area, or building type..."
              rows={3}
              {...register('loadDetails')}
              className={cn(inputCls, 'resize-y')}
            />
          </Field>
          <Field label="Preferred timeline" error={errors.timeline?.message}>
            <input
              type="text"
              placeholder="e.g. Within 3 months, flexible, planning stage..."
              {...register('timeline')}
              className={inputCls}
            />
          </Field>
          <div className="flex gap-3 mt-1">
            <Button type="button" variant="outline" size="md" onClick={() => setStep(1)}>
              ← Back
            </Button>
            <Button type="button" variant="solid" size="md" onClick={goToStep3}>
              Next →
            </Button>
          </div>
        </div>
      )}

      {/* Step 3 — Contact info */}
      {step === 3 && (
        <div className="flex flex-col gap-4">
          <FieldLabel>How should we reach you?</FieldLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Name" error={errors.name?.message} required>
              <input
                type="text"
                placeholder="Your name"
                autoComplete="name"
                {...register('name')}
                className={inputCls}
              />
            </Field>
            <Field label="Email" error={errors.email?.message} required>
              <input
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                {...register('email')}
                className={inputCls}
              />
            </Field>
          </div>
          <div className="flex gap-3 mt-1">
            <Button type="button" variant="outline" size="md" onClick={() => setStep(2)}>
              ← Back
            </Button>
            <Button
              type="submit"
              variant="solid"
              size="md"
              disabled={stage === 'submitting'}
            >
              {stage === 'submitting' ? 'Sending…' : 'Send inquiry'}
            </Button>
          </div>
        </div>
      )}

    </form>
  )
}

/* ── Field helpers ──────────────────────────── */
const inputCls =
  'w-full font-body text-[0.95rem] text-ink px-3.5 py-3 border border-sand-dim bg-white focus:outline-none focus:border-tide transition-colors rounded-[2px] placeholder:text-slate'

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display font-semibold text-ink text-[1rem]">{children}</p>
  )
}

function FieldError({ children }: { children: React.ReactNode }) {
  return <p className="text-red-500 text-xs mt-0.5">{children}</p>
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[0.72rem] uppercase tracking-[0.06em] text-slate-700">
        {label}
        {required && <span className="text-solar ml-0.5">*</span>}
      </label>
      {children}
      {error && <FieldError>{error}</FieldError>}
    </div>
  )
}
