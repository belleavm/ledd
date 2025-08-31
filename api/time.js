// /api/time - sin dependencias
module.exports = (req, res) => {
  const tz = (req.query && req.query.tz) || "UTC";
  const now = new Date();

  // Intentar formatear con la zona indicada; si es inválida, usar UTC.
  let human;
  try {
    human = new Intl.DateTimeFormat("es-PE", {
      dateStyle: "full",
      timeStyle: "medium",
      timeZone: tz
    }).format(now);
  } catch {
    human = new Intl.DateTimeFormat("es-PE", {
      dateStyle: "full",
      timeStyle: "medium",
      timeZone: "UTC"
    }).format(now);
  }

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(200).json({
    ok: true,
    zone: tz,
    iso: now.toISOString(),
    human
  });
};
