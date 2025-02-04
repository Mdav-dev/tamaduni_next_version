export const civilizationForms = {
  Kingdom: [
    { label: "Name", key: "name", type: "text", required: true },
    { label: "Region", key: "region", type: "text", required: false },
    { label: "Period", key: "period", type: "text", required: false },
    {
      label: "Founding Year",
      key: "founding_year",
      type: "text",
      required: false,
    },
    {
      label: "Dissolution Year",
      key: "dissolution_year",
      type: "text",
      required: false,
    },
    { label: "Emblem", key: "emblem", type: "text", required: false },
    { label: "Media", key: "media", type: "File", required: false },
  ],
  Particular: [
    {
      label: "Kingdom",
      key: "kingdom",
      type: "select",
      required: true,
      options: [],
    },
    { label: "Etymology", key: "etymology", type: "textarea", required: false },
    { label: "History", key: "history", type: "textarea", required: false },
    {
      label: "Governance",
      key: "governance",
      type: "textarea",
      required: false,
    },
    {
      label: "Security and Military",
      key: "security_military",
      type: "textarea",
      required: false,
    },
    {
      label: "Justice and Legal System",
      key: "justice_legal_system",
      type: "textarea",
      required: false,
    },
    {
      label: "Religious and Spiritual Practices",
      key: "religious_spiritual_practices",
      type: "textarea",
      required: false,
    },
    {
      label: "Other Cultural Practices",
      key: "other_cultural_practices",
      type: "textarea",
      required: false,
    },
    {
      label: "Health and Wellness",
      key: "health_wellness",
      type: "textarea",
      required: false,
    },
    {
      label: "Education and Arts",
      key: "education_arts",
      type: "textarea",
      required: false,
    },
    {
      label: "Dietary and Culinary Practices",
      key: "dietary_culinary_practices",
      type: "textarea",
      required: false,
    },
    {
      label: "Economy and Commerce",
      key: "economy_commerce",
      type: "textarea",
      required: false,
    },
    {
      label: "Natural Resource Management",
      key: "natural_resource_management",
      type: "textarea",
      required: false,
    },
    {
      label: "Architecture and Construction",
      key: "architecture_construction",
      type: "textarea",
      required: false,
    },
    {
      label: "Social Relations",
      key: "social_relations",
      type: "textarea",
      required: false,
    },
    {
      label: "Entertainment and Recreation",
      key: "entertainment_recreation",
      type: "textarea",
      required: false,
    },
    {
      label: "Death and Succession",
      key: "death_succession",
      type: "textarea",
      required: false,
    },
    { label: "Folklore", key: "folklore", type: "textarea", required: false },
    { label: "Language", key: "language", type: "textarea", required: false },
    { label: "Media", key: "media", type: "file", required: false },
  ],
};
