export interface ProductExportItem {
  id: number | string;
  name: string;
  sku: string;
  category: string;
  capacity: string;
  verification: string;
  performance: string;
  messages: string;
  status: string;
}

export function generateProductsPDF(products: ProductExportItem[]): void {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Build clean printable PDF stream content
  const escapePdfText = (text: string) =>
    text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

  let stream = `
BT
/F1 20 Tf
50 780 Td
(${escapePdfText("TRADEMATCHLY - PRODUCTS & COMMODITY CATALOG")}) Tj
ET

BT
/F1 10 Tf
50 760 Td
(${escapePdfText(`Supplier: ABC Spices Pvt. Ltd.  |  Date: ${currentDate}  |  Total Products: ${products.length}`)}) Tj
ET

BT
/F1 10 Tf
50 742 Td
(${escapePdfText("Verification: TradeMatchly Verified Tier-1 Exporter")}) Tj
ET

% Horizontal separator line
0.75 w
0.8 0.8 0.8 RG
50 730 m
550 730 l
S

% Table Header
BT
/F2 10 Tf
0 0 0 rg
50 710 Td (${escapePdfText("PRODUCT NAME / SKU")}) Tj
200 710 Td (${escapePdfText("CATEGORY")}) Tj
300 710 Td (${escapePdfText("CAPACITY")}) Tj
390 710 Td (${escapePdfText("STATUS")}) Tj
470 710 Td (${escapePdfText("VIEWS / MSGS")}) Tj
ET

0.5 w
0.85 0.85 0.85 RG
50 700 m
550 700 l
S
`;

  let currentY = 680;
  products.forEach((p, idx) => {
    const isEven = idx % 2 === 0;
    const nameSku = `${p.name} (${p.sku})`;
    const cat = p.category;
    const cap = p.capacity;
    const stat = `${p.status} - ${p.verification}`;
    const stats = `${p.performance} / ${p.messages}`;

    stream += `
BT
/F1 9 Tf
0.1 0.1 0.1 rg
50 ${currentY} Td (${escapePdfText(nameSku.slice(0, 32))}) Tj
200 ${currentY} Td (${escapePdfText(cat.slice(0, 18))}) Tj
300 ${currentY} Td (${escapePdfText(cap)}) Tj
390 ${currentY} Td (${escapePdfText(stat)}) Tj
470 ${currentY} Td (${escapePdfText(stats)}) Tj
ET

0.25 w
0.9 0.9 0.9 RG
50 ${currentY - 6} m
550 ${currentY - 6} l
S
`;
    currentY -= 26;
  });

  // Footer
  stream += `
BT
/F1 8 Tf
0.5 0.5 0.5 rg
50 40 Td
(${escapePdfText("TradeMatchly Portal - Confidential Trade Document - Exported from Supplier Admin Engine")}) Tj
ET
`;

  const streamLength = stream.length;

  const pdfParts = [
    "%PDF-1.4\n",
    "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
    "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj\n",
    "4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
    "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n",
    `6 0 obj\n<< /Length ${streamLength} >>\nstream${stream}\nendstream\nendobj\n`,
  ];

  // Calculate offsets for cross-reference table
  let currentOffset = 0;
  const offsets: number[] = [0]; // offset for obj 0

  for (let i = 0; i < pdfParts.length; i++) {
    if (i > 0) {
      offsets.push(currentOffset);
    }
    currentOffset += pdfParts[i].length;
  }

  const xrefOffset = currentOffset;
  let xref = "xref\n0 7\n0000000000 65535 f \n";
  for (let i = 1; i <= 6; i++) {
    const off = offsets[i].toString().padStart(10, "0");
    xref += `${off} 00000 n \n`;
  }

  const trailer = `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  const fullPdf = pdfParts.join("") + xref + trailer;

  // Trigger download as PDF blob
  const blob = new Blob([fullPdf], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `TradeMatchly-Products-Catalog-${new Date().toISOString().split("T")[0]}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

