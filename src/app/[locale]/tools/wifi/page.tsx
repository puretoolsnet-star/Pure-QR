import { WifiTool } from "@/components/tools/WifiTool";
import { createToolPage } from "@/lib/seo/create-tool-page";

const { ToolPage, generateMetadata, generateStaticParams } = createToolPage(
  "wifi",
  WifiTool,
);

export const instant = false;

export { generateMetadata, generateStaticParams };
export default ToolPage;
