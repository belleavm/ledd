// Serverless Function (Node) - /api/hello
module.exports = (req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(200).json({
      ok: true,
      message: "Hola desde Vercel Functions ??",
      ts: new Date().toISOString()
    });
  };
  