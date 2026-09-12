import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Matches the "<Harsh/>" wordmark used in the Navbar/Footer — the browser
// tab just gets the bracket motif since the name won't read at 16-32px.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#a78bfa",
          fontSize: 18,
          fontWeight: 700,
          fontFamily: "monospace",
          borderRadius: 7,
        }}
      >
        {"</>"}
      </div>
    ),
    { ...size }
  );
}
