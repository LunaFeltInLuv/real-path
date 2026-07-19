// Bắt buộc khai báo đuôi .js để Node.js trên Vercel có thể phân giải mô-đun chuẩn xác
import app from "../server.js";
import type { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
  return app(req, res);
}
