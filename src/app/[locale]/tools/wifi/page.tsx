import { WifiTool } from "@/components/tools/WifiTool";
import { createToolPage } from "@/lib/seo/create-tool-page";

const { ToolPage, generateMetadata, generateStaticParams } = createToolPage(
  "wifi",
  WifiTool,
);

export { generateMetadata, generateStaticParams };
export default ToolPage;
