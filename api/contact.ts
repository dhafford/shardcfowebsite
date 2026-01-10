import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, company, email, details } = req.body;

    // Validate required fields
    if (!name || !company || !email) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // Create transporter - configure with your SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER || email,
      to: "dave@shardcfo.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name} at ${company}`,
      text: `
New contact form submission:

Name: ${name}
Company: ${company}
Email: ${email}

Additional Details:
${details || "No additional details provided."}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Company:</strong> ${company}</p>
<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
<h3>Additional Details:</h3>
<p>${details ? details.replace(/\n/g, "<br>") : "No additional details provided."}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send message. Please try again later." });
  }
}
