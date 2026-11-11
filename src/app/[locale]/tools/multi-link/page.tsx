import { MultiLinkTool } from "@/components/tools/MultiLinkTool";
import { createToolPage } from "@/lib/seo/create-tool-page";

const { ToolPage, generateMetadata, generateStaticParams } =
  createToolPage("multi-link", MultiLinkTool);

export const instant = false;

export { generateMetadata, generateStaticParams };
export default ToolPage;
