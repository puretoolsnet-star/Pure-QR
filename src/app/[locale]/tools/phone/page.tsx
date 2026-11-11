import { PhoneTool } from "@/components/tools/PhoneTool";
import { createToolPage } from "@/lib/seo/create-tool-page";

const { ToolPage, generateMetadata, generateStaticParams } =
  createToolPage("phone", PhoneTool);

export const instant = false;

export { generateMetadata, generateStaticParams };
export default ToolPage;
