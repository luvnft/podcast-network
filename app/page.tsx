/* eslint-disable @next/next/no-img-element */
// app/page.tsx
import { VideoList } from "@/cosmic/blocks/videos/VideoList";
import { CategoriesList } from "@/cosmic/blocks/videos/CategoriesList";
import { cosmic } from "@/cosmic/client";
import { ChannelPill, ChannelType } from "@/cosmic/blocks/videos/ChannelPill";

export default async function Home() {
  const { objects: channels } = await cosmic.objects
    .find({
      type: "channels",
    })
    .props("id,slug,title,metadata")
    .depth(1);
  return (
    <div className="p-4 md:p-8 pt-4">
      <CategoriesList
        query={{ type: "categories" }}
        sort="-created_at"
        limit={10}
        skip={0}
        className="mb-8 m-auto flex flex-wrap gap-2"
      />
      <h1 className="mb-8 text-3xl font-extrabold leading-tight tracking-tighter text-black dark:text-white md:text-4xl">
        Today{`'`}s Video Picks
      </h1>
      <VideoList
        query={{ type: "videos" }}
        limit={10}
        skip={0}
        className="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20"
      />
      <h2 className="mb-8 text-2xl font-extrabold leading-tight tracking-tighter text-black dark:text-white md:text-4xl">
        Featured Channels
      </h2>
      <div className="flex flex-wrap gap-4">
        {channels?.map((channel: ChannelType) => {
          return <ChannelPill key={channel.id} channel={channel} />;
        })}
      </div>
    </div>
  );
}
