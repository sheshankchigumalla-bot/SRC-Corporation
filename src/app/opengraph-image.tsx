import { ImageResponse } from "next/og";

export const alt =
  "SRC Corporation - Premium Indian Red Chillies, Spices & Onion Exporter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #7f1d1d 0%, #b91c1c 45%, #ed1c24 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9999,
              background: "#fde047",
              display: "flex",
            }}
          />
          SRC CORPORATION
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 980,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Premium Indian Red Chillies,</span>
            <span style={{ color: "#fde047" }}>Spices & Onion Exporter</span>
          </div>
          <div
            style={{
              fontSize: 30,
              opacity: 0.92,
              maxWidth: 900,
              display: "flex",
            }}
          >
            Bulk supply &middot; Global export &middot; 27+ years of trusted
            trade from Hyderabad, India
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            opacity: 0.95,
          }}
        >
          <div style={{ display: "flex", gap: 40 }}>
            <span>5000+ Tons Supplied</span>
            <span>1000+ Clients</span>
            <span>Global Reach</span>
          </div>
          <div style={{ display: "flex" }}>srcagroglobal.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
