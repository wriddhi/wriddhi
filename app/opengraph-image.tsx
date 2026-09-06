import { ImageResponse } from "next/og";
import { bio, metaTitle, name, siteUrl } from "@/constants/data";

export const alt = `${name} — portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#fafafa",
          padding: "64px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#a3a3a3",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          {siteUrl.replace("https://", "")}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, maxWidth: 980 }}>
            {metaTitle}
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#d4d4d4",
              maxWidth: 900,
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            {bio.length > 160 ? `${bio.slice(0, 157)}...` : bio}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
