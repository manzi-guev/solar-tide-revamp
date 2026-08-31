import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  serviceType:  z.enum(['residential', 'commercial', 'consultancy', 'audit', 'unsure']),
  siteLocation: z.string().optional(),
  loadDetails:  z.string().optional(),
  timeline:     z.string().optional(),
  name:         z.string().min(1),
  email:        z.string().email(),
})

export async function POST(req: NextRequest) {
  let body: unknown

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const result = schema.safeParse(body)
  if (!result.success) {
    return NextResponse.json({ error: result.error.flatten() }, { status: 422 })
  }

  const data = result.data

  /* ── 1. Send email via Resend ───────────────────────────────────────── */
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from:    'Solar Tide <noreply@solartide.com>',
        to:      process.env.CONTACT_RECIPIENT_EMAIL ?? 'hello@solartide.com',
        subject: `New enquiry — ${data.serviceType} (${data.name})`,
        text: [
          `Name:          ${data.name}`,
          `Email:         ${data.email}`,
          `Service type:  ${data.serviceType}`,
          `Site location: ${data.siteLocation ?? '—'}`,
          `Load details:  ${data.loadDetails ?? '—'}`,
          `Timeline:      ${data.timeline ?? '—'}`,
        ].join('\n'),
      })
    } catch (err) {
      console.error('[contact] Resend error:', err)
      /* Non-fatal — still save to Sanity */
    }
  }

  /* ── 2. Write lead record to Sanity ─────────────────────────────────── */
  if (process.env.SANITY_API_WRITE_TOKEN && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try {
      const { createClient } = await import('@sanity/client')
      const writeClient = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
        apiVersion: '2024-01-01',
        token:     process.env.SANITY_API_WRITE_TOKEN,
        useCdn:    false,
      })

      await writeClient.create({
        _type:        'contactSubmission',
        name:         data.name,
        email:        data.email,
        serviceType:  data.serviceType,
        siteLocation: data.siteLocation,
        loadDetails:  data.loadDetails,
        timeline:     data.timeline,
        submittedAt:  new Date().toISOString(),
        status:       'new',
      })
    } catch (err) {
      console.error('[contact] Sanity write error:', err)
    }
  }

  return NextResponse.json({ ok: true })
}
