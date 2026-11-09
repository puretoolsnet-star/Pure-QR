import { ScannerTool } from "@/components/tools/ScannerTool";
import { createToolPage } from "@/lib/seo/create-tool-page";

const { ToolPage, generateMetadata, generateStaticParams } = createToolPage(
  "scanner",
  ScannerTool,
);

export { generateMetadata, generateStaticParams };
export default ToolPage;
