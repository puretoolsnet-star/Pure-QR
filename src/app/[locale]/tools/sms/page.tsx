import { SmsTool } from "@/components/tools/SmsTool";
import { createToolPage } from "@/lib/seo/create-tool-page";

const { ToolPage, generateMetadata, generateStaticParams } =
  createToolPage("sms", SmsTool);

export const instant = false;

export { generateMetadata, generateStaticParams };
export default ToolPage;
