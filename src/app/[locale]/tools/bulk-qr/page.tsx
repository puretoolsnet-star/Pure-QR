import { BulkQrTool } from "@/components/tools/BulkQrTool";
import { createToolPage } from "@/lib/seo/create-tool-page";

const { ToolPage, generateMetadata, generateStaticParams } =
  createToolPage("bulk-qr", BulkQrTool);

export const instant = false;

export { generateMetadata, generateStaticParams };
export default ToolPage;
