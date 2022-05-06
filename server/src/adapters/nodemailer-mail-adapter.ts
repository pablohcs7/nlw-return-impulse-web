import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from './mail-adapter'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'a1d3a3c8cf52ca',
    pass: '33f7551781e4c0'
  }
})

export class NodemailMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    const feedback = await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Pablo Castelo <pablohenriquec7@gmail.com>',
      subject,
      html: body
    })
  }
}
