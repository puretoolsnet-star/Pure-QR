import { MenuTool } from "@/components/tools/MenuTool";
import { createToolPage } from "@/lib/seo/create-tool-page";

const { ToolPage, generateMetadata, generateStaticParams } =
  createToolPage("menu", MenuTool);

export const instant = false;

export { generateMetadata, generateStaticParams };
export default ToolPage;
