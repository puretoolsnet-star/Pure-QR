import { SocialsTool } from "@/components/tools/SocialsTool";
import { createToolPage } from "@/lib/seo/create-tool-page";

const { ToolPage, generateMetadata, generateStaticParams } =
  createToolPage("socials", SocialsTool);

export const instant = false;

export { generateMetadata, generateStaticParams };
export default ToolPage;
