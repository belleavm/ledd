// /api/time - ejemplo con query params (?tz=America/Lima)
const { DateTime } = require("luxon");

module.exports = (req, res) => {
  const { tz = "UTC" } = req.query || {};
  const now = DateTime.now().setZone(tz);
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(200).json({
    ok: true,
    zone: tz,
    iso: now.toISO(),
    human: now.toFormat("yyyy-LL-dd HH:mm:ss ZZZZ")
  });
};
