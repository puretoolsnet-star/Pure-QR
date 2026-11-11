import { VcardTool } from "@/components/tools/VcardTool";
import { createToolPage } from "@/lib/seo/create-tool-page";

const { ToolPage, generateMetadata, generateStaticParams } = createToolPage(
  "vcard",
  VcardTool,
);

export const instant = false;

export { generateMetadata, generateStaticParams };
export default ToolPage;
