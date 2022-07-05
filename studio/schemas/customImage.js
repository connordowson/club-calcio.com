import React from "react";

const customImageComponent = ({ value }) => {
  const { imageUrl } = value;

  return (
    <img
      src={imageUrl}
      style={{
        width: "100%",
      }}
    />
  );
};

export default {
  title: "Image",
  name: "customImage",
  type: "image",
  options: {
    hotspot: true, // <-- Defaults to false
  },

  fields: [
    {
      name: "caption",
      type: "string",
      title: "Caption",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      // Editing this field will be hidden behind an "Edit"-button
      name: "alt",
      type: "string",
      title: "Alt text",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
    },
    component: customImageComponent,
  },
};
