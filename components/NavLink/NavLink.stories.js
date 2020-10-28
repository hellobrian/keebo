import React from "react";

import { AnchorLink } from "./NavLink";

export default {
  title: "Example/AnchorLink (NavLink)",
  component: AnchorLink,
};

const Template = (args) => <AnchorLink {...args} />;

export const Nav = Template.bind({});

Nav.args = {
  isActive: true,
  children: "NavLink",
};
