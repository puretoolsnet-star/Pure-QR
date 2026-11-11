import { AppStoreTool } from "@/components/tools/AppStoreTool";
import { createToolPage } from "@/lib/seo/create-tool-page";

const { ToolPage, generateMetadata, generateStaticParams } =
  createToolPage("app-store", AppStoreTool);

export const instant = false;

export { generateMetadata, generateStaticParams };
export default ToolPage;
