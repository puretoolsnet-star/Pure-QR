import { PdfQrTool } from "@/components/tools/PdfQrTool";
import { createToolPage } from "@/lib/seo/create-tool-page";

const { ToolPage, generateMetadata, generateStaticParams } =
  createToolPage("pdf-qr", PdfQrTool);

export const instant = false;

export { generateMetadata, generateStaticParams };
export default ToolPage;
