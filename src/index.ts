import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World on date::::::: " + new Date().toLocaleString());
});

app.get("/headers", async (req, res) => {
  res.json({ headers: req.headers });
});

// @ts-ignore
if (import.meta.env.PROD) {
  app.listen(3000);
  console.log("listening on http://localhost:3000/");
}

export const viteNodeApp = app;
