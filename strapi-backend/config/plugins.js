module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('EMAIL_SMTP_HOST', 'smtp.gmail.com'),
        port: env.int('EMAIL_SMTP_PORT', 587),
        auth: {
          // GANTI DENGAN NAMA VARIABEL DI .ENV, BUKAN EMAIL LANGSUNG
          user: env('EMAIL_SMTP_USER'), 
          pass: env('EMAIL_SMTP_PASS'),
        },
        secure: false,
        tls: {
          rejectUnauthorized: false,
        },
      },
      settings: {
        defaultFrom: env('EMAIL_SMTP_USER'),
        defaultReplyTo: env('EMAIL_SMTP_USER'),
      },
    },
  },
});