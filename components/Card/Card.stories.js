import React from "react";

import { Card } from "./Card";

const mockData = [
  {
    name: "Tokyo60",
    status: "purchased",
    case: {
      color: "coyote",
    },
    pcb: {
      pins: 5,
      hotswap: true,
      layout: "HHKB",
      stabilizers: "screw_in",
      VIA: true,
    },
    links: [
      {
        label: "drop",
        href:
          "https://drop.com/buy/massdrop-x-tokyo-keyboard-tokyo60-keyboard-kit",
      },
      {
        label: "tokyo keyboard",
        href: "https://tokyokeyboard.com/tokyo60/",
      },
    ],
    switch: null,
  },
];

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
