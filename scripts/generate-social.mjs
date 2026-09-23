import sharp from "sharp";

// Render the existing vector logo as a share-friendly PNG with safe margins.
const logo = await sharp("public/images/rm-bauservice-logo.svg")
  .resize({ width: 900, height: 525, fit: "inside" })
  .png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: "#ffffff" } })
  .composite([{ input: logo, gravity: "centre" }])
  .png()
  .toFile("public/images/rm-bauservice-logo-share.png");
