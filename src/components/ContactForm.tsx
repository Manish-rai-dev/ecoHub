'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import ProductMultiSelect from '@/components/ProductMultiSelect'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { waGeneral } from '@/lib/whatsapp'

interface FormData {
  name: string
  phone: string
  email: string
  company: string
  quantity: string
  location: string
  message: string
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  company: '',
  quantity: '',
  location: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [submitting, setSubmitting] = useState(false)

  function updateField(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (selectedProducts.length === 0) {
      toast.error('Please select at least one product.')
      return
    }

    setSubmitting(true)

    const whatsappMessage = [
      "Hi! I'd like to enquire about the following from Yaha Mogi Ecohub LLP:",
      `Products: ${selectedProducts.join(', ')}`,
      `Quantity: ${form.quantity} boxes`,
      `Delivery: ${form.location}`,
      `Name: ${form.name} | Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : '',
      form.company ? `Company/Restaurant: ${form.company}` : '',
      form.message ? `Message: ${form.message}` : '',
      'Please share a quote and availability details.',
    ]
      .filter(Boolean)
      .join('\n')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          productInterests: selectedProducts,
        }),
      })

      const data = (await response.json()) as { success: boolean; error?: string }

      if (data.success) {
        toast.success('Enquiry sent! Opening WhatsApp to confirm with our team.')
      } else {
        toast.error(data.error ?? 'Could not send email. Opening WhatsApp instead.')
      }
    } catch {
      toast.error('Could not reach server. Opening WhatsApp to send your enquiry.')
    } finally {
      const url = waGeneral(whatsappMessage)
      window.open(url, '_blank', 'noopener,noreferrer')
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border bg-white p-6 shadow-sm">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            required
            value={form.name}
            onChange={(e) => updateField('name', e.target.value)}
            placeholder="Your full name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            required
            type="tel"
            value={form.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company / Restaurant Name</Label>
          <Input
            id="company"
            value={form.company}
            onChange={(e) => updateField('company', e.target.value)}
            placeholder="Business name"
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="quantity">Quantity Required (boxes) *</Label>
          <Input
            id="quantity"
            required
            value={form.quantity}
            onChange={(e) => updateField('quantity', e.target.value)}
            placeholder="e.g. 5 boxes"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Product Interest * (select one or more)</Label>
        <ProductMultiSelect selected={selectedProducts} onChange={setSelectedProducts} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Delivery Location *</Label>
        <Input
          id="location"
          required
          value={form.location}
          onChange={(e) => updateField('location', e.target.value)}
          placeholder="City, area, pincode"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder="Any specific requirements or questions..."
        />
      </div>
      <Button
        type="submit"
        disabled={submitting}
        className="w-full bg-wa text-white hover:bg-wa/90 sm:w-auto"
      >
        {submitting ? 'Submitting...' : 'Submit & open WhatsApp'}
      </Button>
    </form>
  )
}
