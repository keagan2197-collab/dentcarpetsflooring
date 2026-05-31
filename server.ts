import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { Resend } from "resend";
import "dotenv/config";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Resend initialization (lazy)
  let resend: Resend | null = null;
  const getResend = () => {
    if (!resend) {
      const apiKey = process.env.RESEND_API_KEY;
      if (!apiKey) {
        throw new Error("RESEND_API_KEY is not defined");
      }
      resend = new Resend(apiKey);
    }
    return resend;
  };

  // API Route for Quote Requests
  app.post("/api/quote", async (req, res) => {
    try {
      const { name, phone, flooringType, message } = req.body;

      if (!name || !phone) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const client = getResend();
      
      const { data, error } = await client.emails.send({
        from: 'Dent Carpets & Flooring <onboarding@resend.dev>',
        to: ['James.dent@mweb.co.za', 'keagan2197@gmail.com'],
        subject: `New Quote Request from ${name}`,
        html: `
          <h1>New Quote Request</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Flooring Type:</strong> ${flooringType}</p>
          <p><strong>Message:</strong> ${message}</p>
          <br/>
          <p>This request was sent from the Dent Carpets & Flooring website.</p>
        `,
      });

      if (error) {
        console.error("Resend Error:", error);
        return res.status(500).json({ error: error.message });
      }

      res.status(200).json({ success: true, data });
    } catch (err: any) {
      console.error("Server Error:", err);
      res.status(500).json({ error: err.message || "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
