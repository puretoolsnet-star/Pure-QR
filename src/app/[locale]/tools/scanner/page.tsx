import { ScannerTool } from "@/components/tools/ScannerTool";
import { createToolPage } from "@/lib/seo/create-tool-page";

const { ToolPage, generateMetadata, generateStaticParams } = createToolPage(
  "scanner",
  ScannerTool,
);

export const instant = false;

export { generateMetadata, generateStaticParams };
export default ToolPage;
