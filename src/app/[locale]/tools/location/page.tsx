import { LocationTool } from "@/components/tools/LocationTool";
import { createToolPage } from "@/lib/seo/create-tool-page";

const { ToolPage, generateMetadata, generateStaticParams } =
  createToolPage("location", LocationTool);

export const instant = false;

export { generateMetadata, generateStaticParams };
export default ToolPage;
