import type { Request, Response } from "express";

export default async function handler(req: Request, res: Response) {
  try {
    const { default: app } = await import("../server.ts");
    return app(req, res);
  } catch (error: any) {
    console.error("Vercel Serverless Function Init Error:", error);
    res.status(500).json({
      error: "Vercel Serverless Function Init Error",
      message: error?.message || String(error),
      stack: error?.stack || null,
      env: {
        NODE_ENV: process.env.NODE_ENV,
        VERCEL: process.env.VERCEL
      }
    });
  }
}
