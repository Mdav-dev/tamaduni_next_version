export const earlyMobilityForms = {
  Drivers: [
    { label: "Driver Name", key: "driver_name", type: "text", required: true },
    {
      label: "Description",
      key: "description",
      type: "textarea",
      required: false,
    },
    { label: "Media", key: "media", type: "file", required: false },
  ],
  Groups: [
    { label: "Group Name", key: "group_name", type: "text", required: true },
    { label: "Synopsis", key: "synopsis", type: "textarea", required: false },
    { label: "Media", key: "media", type: "file", required: false },
  ],
};
