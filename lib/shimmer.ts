export function shimmerDataURL(w: number, h: number): string {
  const svg = `
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#1c1917" offset="0%"/>
          <stop stop-color="#292524" offset="50%"/>
          <stop stop-color="#1c1917" offset="100%"/>
        </linearGradient>
        <animate attributeName="x1" from="-100%" to="100%" dur="1.5s" repeatCount="indefinite"/>
      </defs>
      <rect width="${w}" height="${h}" fill="#1c1917"/>
    </svg>`;

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
