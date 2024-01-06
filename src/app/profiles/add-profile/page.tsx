"use client";
import { AddProfileForm } from "@/components/data-entry-forms";
import { Container } from "@/components/form-fields";

import React from "react";

export default function AddProfilePage() {
  return (
    <section className="w-full p-4 gap-5 bg-white border border-gray-200 rounded-lg shadow ">
      <Container className="flex flex-col gap-2">
        <AddProfileForm /> {/* form action here */}
      </Container>
    </section>
  );
}
