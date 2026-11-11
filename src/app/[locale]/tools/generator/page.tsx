import { GeneratorTool } from "@/components/tools/GeneratorTool";
import { createToolPage } from "@/lib/seo/create-tool-page";

const { ToolPage, generateMetadata, generateStaticParams } =
  createToolPage("generator", GeneratorTool);

export const instant = false;

export { generateMetadata, generateStaticParams };
export default ToolPage;
