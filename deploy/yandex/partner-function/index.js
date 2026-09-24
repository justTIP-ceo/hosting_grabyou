// Yandex Cloud Function: приём заявок партнёров → сообщение в Telegram.
// Аналог api/partner.js для Vercel. Среда: Node.js 20 или новее (есть fetch).
//
// Переменные окружения функции:
//   TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID — те же, что сейчас заданы в Vercel
//   ALLOWED_ORIGINS — через запятую, с каких сайтов принимать заявки
//                     (по умолчанию https://www.grabyou.ru,https://grabyou.ru)
//
// Точка входа в настройках функции: index.handler

const DEFAULT_ORIGINS = 'https://www.grabyou.ru,https://grabyou.ru';

function allowedOrigins() {
  return (process.env.ALLOWED_ORIGINS || DEFAULT_ORIGINS)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function corsHeaders(origin) {
  const allowed = allowedOrigins();
  const headers = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
  if (origin && allowed.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

function reply(statusCode, payload, cors) {
  return {
    statusCode,
    headers: {...cors, 'Content-Type': 'application/json; charset=utf-8'},
    body: JSON.stringify(payload),
  };
}

module.exports.handler = async function (event) {
  const hdrs = event.headers || {};
  const origin = hdrs.Origin || hdrs.origin || '';
  const cors = corsHeaders(origin);

  // браузер перед POST с JSON шлёт предварительный OPTIONS
  if (event.httpMethod === 'OPTIONS') {
    return {statusCode: 204, headers: cors, body: ''};
  }
  if (event.httpMethod !== 'POST') {
    return reply(405, {ok: false, error: 'Method not allowed'}, {...cors, Allow: 'POST'});
  }
  // браузер всегда шлёт Origin при кросс-доменном POST: чужие сайты отсекаем
  if (origin && !allowedOrigins().includes(origin)) {
    return reply(403, {ok: false, error: 'Forbidden'}, cors);
  }

  let raw = event.body || '';
  if (event.isBase64Encoded) raw = Buffer.from(raw, 'base64').toString('utf8');

  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return reply(400, {ok: false, error: 'Некорректный запрос'}, cors);
  }

  // Валидация — как в api/partner.js
  const clean = (v) => (typeof v === 'string' ? v.trim().slice(0, 300) : '');
  const data = {
    name: clean(body.name),
    address: clean(body.address),
    phone: clean(body.phone),
    email: clean(body.email),
  };
  if (!data.name || !data.address || !data.phone || !data.email) {
    return reply(400, {ok: false, error: 'Заполните все поля'}, cors);
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return reply(500, {ok: false, error: 'Server is not configured'}, cors);
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
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({chat_id: chatId, text}),
    });
    const result = await tg.json();
    if (!result.ok) {
      return reply(502, {ok: false, error: 'Telegram error'}, cors);
    }
    return reply(200, {ok: true}, cors);
  } catch {
    return reply(502, {ok: false, error: 'Delivery failed'}, cors);
  }
};
