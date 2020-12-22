import { env } from "process";
import dotenv from "dotenv";

dotenv.config();

export const sheetEmail = env.SHEET_EMAIL || "";
export const sheetPrivateKey = env.SHEET_PRIVATE_KEY ? env.SHEET_PRIVATE_KEY.replace(/\\n/gm, '\n') : "";
export const sheetId = env.SHEET_ID || "";
export const sheetRange = env.SHEET_RANGE || "";

