import rn from "random-number";

const TYPES = [
  { id: rn(), value: "frontals", label: "Frontal" },
  { id: rn(), value: "wigs", label: "Wig" },
  { id: rn(), value: "bundles", label: "Bundle" },
  { id: rn(), value: "closures", label: "Closure" },
  { id: rn(), value: "accessories", label: "Accessories" },
];

const LACES = [
  { id: rn(), label: "HD", value: "hd" },
  { id: rn(), label: "Transparent", value: "transparent" },
];

const TEXTURES = [
  { id: rn(), value: "straight", label: "Straight (STR)" },
  { id: rn(), value: "body-wave", label: "Body Wave (BW)" },
  { id: rn(), value: "deep-wave", label: "Deep Wave (DW)" },
  { id: rn(), value: "loose-wave", label: "Loose Wave (LW)" },
  { id: rn(), value: "loose-curls", label: "Loose Curls (LC)" },
  { id: rn(), value: "kinky-curls", label: "Kinky Curls (KC)" },
  { id: rn(), value: "curly-waves", label: "Curly Waves (CW)" },
];

const DEFAULT_DETAILS = [
  {
    name: "Features",
    items: [
      "Multiple strap configurations",
      "Spacious interior with top zip",
      "Leather handle and tabs",
      "Interior dividers",
      "Stainless strap loops",
      "Double stitched construction",
      "Water-resistant",
    ],
  },
  {
    name: "Care",
    items: [
      "Spot clean as needed",
      "Hand wash with mild soap",
      "Machine wash interior dividers",
      "Treat handle and tabs with leather conditioner",
    ],
  },
  {
    name: "Shipping",
    items: [
      "Free shipping on orders over $300",
      "International shipping available",
      "Expedited shipping options",
      "Signature required upon delivery",
    ],
  },
  {
    name: "Returns",
    items: [
      "Easy return requests",
      "Pre-paid shipping label included",
      "10% restocking fee for returns",
      "60 day return window",
    ],
  },
  // More sections...
];

const DEFAULT_FEATURES = [
  {
    name: "Sleek design",
    description:
      "The machined kettle has a smooth black finish and contemporary shape that stands apart from most plastic appliances.",
  },
  {
    name: "Comfort handle",
    description: "Shaped for steady pours and insulated to prevent burns.",
  },
  {
    name: "One-button control",
    description:
      "The one button control has a digital readout for setting temperature and turning the kettle on and off.",
  },
  {
    name: "Long spout",
    description:
      "Designed specifically for controlled pour-overs that don't slash or sputter.",
  },
];

export { TYPES, LACES, TEXTURES, DEFAULT_DETAILS, DEFAULT_FEATURES };
