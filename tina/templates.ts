import type { TinaField } from "tinacms";
export function delivery_areaFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "delivery_day",
      label: "Delivery Day",
    },
  ] as TinaField[];
}
export function pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
  ] as TinaField[];
}
