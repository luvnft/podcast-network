import Link from "next/link";
import { GitHubLink } from "@/components/GitHubLink";
import { cosmic } from "@/cosmic/client";

export async function TopNav() {
  const { object: globalSettings } = await cosmic.objects
    .findOne({
      type: "settings",
      slug: "settings",
    })
    .props("metadata")
    .depth(1);

  return (
    <div className="w-full gap-4 bg-white dark:bg-black z-10 h-[70px] top-0 fixed border-b dark:border-gray-800 items-center flex px-4">
      <Link href="/" className="items-center flex dark:text-gray-100">
        <img
          src="https://i.imgur.com/oaW3h8y.png" // Path to your PNG logo
          alt="Site Logo"
          className="h-8 w-auto mr-2" // Adjust size as needed
        />
        <span>{globalSettings.metadata.site_title}</span> </Link> {/* Wrap Link content in a <span> */} 
      <div className="text-gray-500 text-sm hidden md:block">
        <span className="font-bold text-teal-500">Love:</span> {globalSettings.metadata.tagline}
      </div>
      <GitHubLink />
    </div>
  );
}
