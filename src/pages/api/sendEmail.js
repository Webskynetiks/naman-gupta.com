import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, mobile, service, company, message, pageUrl } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  console.log('Email sending initiated...');
  console.log('ENV:', {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    user: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
  });

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10),
    secure: true, // true for port 465
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, // Use your domain's verified email
    to: process.env.EMAIL_TO,
    subject: `New Contact Message from ${name}`,
    text: `You have received a new inquiry via your https://webservicesindia.info/ website.

----------------------------------------
🔹 Contact Details
----------------------------------------
👤 Name     : ${name}
📧 Email    : ${email}
📞 Mobile   : ${mobile}
🏢 Company  : ${company}

----------------------------------------
🔹 Service Requested
----------------------------------------
💼 Service  : ${service}

----------------------------------------
🔹 Message  :  ${message}
----------------------------------------


🔹 Submitted From
----------------------------------------
🌐 Page URL : ${pageUrl}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('❌ Email sending error:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
