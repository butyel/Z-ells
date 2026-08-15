import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Z'ells — SEO Local, Google Maps e Posicionamento no Google";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const interRegular = await readFile(
  join(process.cwd(), "src/assets/Inter-Regular.ttf"),
);
const interBold = await readFile(
  join(process.cwd(), "src/assets/Inter-Bold.ttf"),
);
const spaceGroteskBold = await readFile(
  join(process.cwd(), "src/assets/SpaceGrotesk-Bold.ttf"),
);

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#11130f",
          padding: "72px",
          fontFamily: "Inter",
          color: "#f4f0e8",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <span style={{ fontSize: 44, fontWeight: 700, fontFamily: "Space Grotesk" }}>
            Z&rsquo;ells
          </span>
          <span style={{ fontSize: 30, fontWeight: 700, color: "#d8ff66" }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid rgba(216,255,102,0.5)",
              color: "#d8ff66",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 2,
            }}
          >
            SEO LOCAL · GOOGLE · GOOGLE MAPS · IA
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              fontFamily: "Space Grotesk",
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            Sua empresa precisa aparecer exatamente quando o cliente procura.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 26, color: "#a8ad9b", maxWidth: 700 }}>
            Posicionamento no Google, no Google Maps e nas buscas por inteligência
            artificial.
          </div>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 999,
              background: "#d8ff66",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 700,
              color: "#11130f",
              fontFamily: "Space Grotesk",
            }}
          >
            Z
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interRegular, style: "normal", weight: 400 },
        { name: "Inter", data: interRegular, style: "normal", weight: 600 },
        { name: "Inter", data: interBold, style: "normal", weight: 700 },
        { name: "Space Grotesk", data: spaceGroteskBold, style: "normal", weight: 700 },
      ],
    },
  );
}
