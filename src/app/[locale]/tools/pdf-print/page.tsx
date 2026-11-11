import { PdfPrintTool } from "@/components/tools/PdfPrintTool";
import { createToolPage } from "@/lib/seo/create-tool-page";

const { ToolPage, generateMetadata, generateStaticParams } =
  createToolPage("pdf-print", PdfPrintTool);

export const instant = false;

export { generateMetadata, generateStaticParams };
export default ToolPage;
