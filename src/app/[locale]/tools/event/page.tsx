import { EventTool } from "@/components/tools/EventTool";
import { createToolPage } from "@/lib/seo/create-tool-page";

const { ToolPage, generateMetadata, generateStaticParams } =
  createToolPage("event", EventTool);

export const instant = false;

export { generateMetadata, generateStaticParams };
export default ToolPage;
