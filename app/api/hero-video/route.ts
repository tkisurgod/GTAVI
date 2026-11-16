import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { join } from "node:path";
import { Readable } from "node:stream";

export const runtime = "nodejs";

const videoPath = join(
  process.cwd(),
  "assets",
  "Recording 2026-11-15 172905.mp4"
);

const videoHeaders = {
  "Accept-Ranges": "bytes",
  "Cache-Control": "public, max-age=3600",
  "Content-Type": "video/mp4"
};

export async function GET(request: Request) {
  const { size } = await stat(videoPath);
  const range = request.headers.get("range");

  if (!range) {
    const stream = createReadStream(videoPath);

    return new Response(Readable.toWeb(stream) as ReadableStream, {
      headers: {
        ...videoHeaders,
        "Content-Length": String(size)
      }
    });
  }

  const match = /^bytes=(\d*)-(\d*)$/.exec(range);
  if (!match || (!match[1] && !match[2])) {
    return new Response(null, {
      status: 416,
      headers: { "Content-Range": `bytes */${size}` }
    });
  }

  const suffixLength = match[1] ? undefined : Number(match[2]);
  const start = match[1]
    ? Number(match[1])
    : Math.max(size - (suffixLength ?? 0), 0);
  const end = Math.min(match[2] && match[1] ? Number(match[2]) : size - 1, size - 1);

  if (start >= size || start > end) {
    return new Response(null, {
      status: 416,
      headers: { "Content-Range": `bytes */${size}` }
    });
  }

  const stream = createReadStream(videoPath, { start, end });

  return new Response(Readable.toWeb(stream) as ReadableStream, {
    status: 206,
    headers: {
      ...videoHeaders,
      "Content-Length": String(end - start + 1),
      "Content-Range": `bytes ${start}-${end}/${size}`
    }
  });
}
