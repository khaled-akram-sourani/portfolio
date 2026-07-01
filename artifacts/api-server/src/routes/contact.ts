import { Router } from "express";

const contactRouter = Router();

contactRouter.post("/contact", async (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    res.status(400).json({ error: "name, email, and message are required" });
    return;
  }

  // Log only non-PII metadata
  req.log.info({ hasName: !!name, hasEmail: !!email, messageLength: String(message).length }, "Contact form submission received");

  res.status(200).json({ success: true, message: "Message received successfully" });
});

export default contactRouter;
