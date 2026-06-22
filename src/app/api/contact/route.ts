import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactPayload {
  name: string
  phone: string
  email: string
  company: string
  productInterests: string[]
  quantity: string
  location: string
  message: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload

    const products =
      Array.isArray(body.productInterests) && body.productInterests.length > 0
        ? body.productInterests.join(', ')
        : 'Not specified'

    const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env

    if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
      return NextResponse.json(
        { success: false, error: 'Email service is not configured.' },
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT),
      secure: Number(EMAIL_PORT) === 465,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })

    const html = `
      <h2>New Enquiry from Yaha Mogi Website</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Email:</strong> ${body.email || 'Not provided'}</p>
      <p><strong>Company/Restaurant:</strong> ${body.company || 'Not provided'}</p>
      <p><strong>Products:</strong> ${products}</p>
      <p><strong>Quantity (boxes):</strong> ${body.quantity}</p>
      <p><strong>Delivery Location:</strong> ${body.location}</p>
      <p><strong>Message:</strong> ${body.message || 'Not provided'}</p>
    `

    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_TO,
      subject: `Website Enquiry: ${body.name} — ${products.slice(0, 60)}`,
      html,
      replyTo: body.email || undefined,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send enquiry email.' },
      { status: 500 },
    )
  }
}
