'use client';
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const templates = [
  {
    id: 1,
    title: "Instagram Promo",
    category: "Social Media",
    price: "$12",
    editableFields: ["Title", "Subtitle", "Image"],
    previewUrl: "/videos/insta-promo.mp4",
  },
  {
    id: 2,
    title: "YouTube Outro",
    category: "YouTube",
    price: "$8",
    editableFields: ["Text", "Logo"],
    previewUrl: "/videos/youtube-outro.mp4",
  },
];

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredTemplates = templates.filter((template) =>
    template.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">🎬 AI Video Template Store</h1>
      <p className="mb-4 text-gray-600">
        Browse and customize high-quality video templates. Edit directly in your
        browser and export with ease.
      </p>
      <Input
        placeholder="Search templates..."
        className="mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <Card key={template.id} className="rounded-2xl shadow-md">
            <CardContent className="p-4">
              <video
                src={template.previewUrl}
                controls
                className="rounded-xl mb-2"
              />
              <h2 className="text-xl font-semibold mb-1">{template.title}</h2>
              <p className="text-gray-500 text-sm mb-1">{template.category}</p>
              <p className="font-medium mb-3">{template.price}</p>
              <Button>Edit Template</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
