// Vercel Serverless Function: приём заявок партнёров → сообщение в Telegram
// Требует env-переменные в Vercel: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { name, address, phone, email } = req.body || {};

  // Валидация
  const clean = (v) => (typeof v === 'string' ? v.trim().slice(0, 300) : '');
  const data = {
    name: clean(name),
    address: clean(address),
    phone: clean(phone),
    email: clean(email),
  };

  if (!data.name || !data.address || !data.phone || !data.email) {
    return res.status(400).json({ ok: false, error: 'Заполните все поля' });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return res.status(500).json({ ok: false, error: 'Server is not configured' });
  }

  const text =
    '🟢 Новая заявка на партнёрство GrabYou\n\n' +
    `🏪 Заведение: ${data.name}\n` +
    `📍 Адрес: ${data.address}\n` +
    `📞 Телефон: ${data.phone}\n` +
    `✉️ Email: ${data.email}`;

  try {
    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    const result = await tg.json();
    if (!result.ok) {
      return res.status(502).json({ ok: false, error: 'Telegram error' });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(502).json({ ok: false, error: 'Delivery failed' });
  }
}
