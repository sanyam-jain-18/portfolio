import { renderToBuffer } from "@react-pdf/renderer";
import { ResumePdfDocument } from "@/components/resume-pdf-document";

export const dynamic = "force-static";

export async function GET() {
  const buffer = await renderToBuffer(<ResumePdfDocument />);

  return new Response(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'inline; filename="sanyam-jain-resume.pdf"',
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
