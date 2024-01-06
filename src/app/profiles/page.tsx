import ControlPanel from "@/components/control-panel";
import React from "react";
import { fetchProfiles } from "@/placeholders/placeholder";
import { ProfileCards } from "@/components/entry-cards";

export default async function ProfilesPage() {
  return (
    <section className="w-full h-full flex flex-col gap-5 ">
      <ControlPanel
        header="PROFILE"
        type="PROFILE"
        placeholder="Search company, category, requestor..."
        linkTo="/profiles/add-profile"
      />
      <div className="w-full h-auto flex  flex-col gap-3 ">
        <ProfileCards fetchProfiles={fetchProfiles} />
      </div>
    </section>
  );
}
