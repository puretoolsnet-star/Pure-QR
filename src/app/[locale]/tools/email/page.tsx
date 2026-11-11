import { EmailTool } from "@/components/tools/EmailTool";
import { createToolPage } from "@/lib/seo/create-tool-page";

const { ToolPage, generateMetadata, generateStaticParams } =
  createToolPage("email", EmailTool);

export const instant = false;

export { generateMetadata, generateStaticParams };
export default ToolPage;
