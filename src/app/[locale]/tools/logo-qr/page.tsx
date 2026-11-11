import { LogoQrTool } from "@/components/tools/LogoQrTool";
import { createToolPage } from "@/lib/seo/create-tool-page";

const { ToolPage, generateMetadata, generateStaticParams } = createToolPage(
  "logo-qr",
  LogoQrTool,
);

export const instant = false;

export { generateMetadata, generateStaticParams };
export default ToolPage;
