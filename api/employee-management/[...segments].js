import { handleEmployeeManagementRequest } from "./handler.mjs";

export default async function handler(req, res) {
  // Debug: Log that the Vercel handler is being called
  console.log("[Vercel Handler] Called with URL:", req.url);
  console.log("[Vercel Handler] Method:", req.method);
  console.log("[Vercel Handler] Headers:", JSON.stringify(req.headers));
  
  // Vercel passes req and res, which are Node.js IncomingMessage and ServerResponse
  // Our handler expects the same format, so we can pass them directly
  try {
    return await handleEmployeeManagementRequest(req, res);
  } catch (error) {
    console.error("[Vercel Handler] Error:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Internal server error", message: error.message }));
  }
}

