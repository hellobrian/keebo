import React from "react";

import { MainCard } from "./MainCard";

export default {
  title: "Example/MainCard",
  component: MainCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <MainCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
