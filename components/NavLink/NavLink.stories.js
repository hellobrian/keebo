import React from "react";

import { NavLink } from "./NavLink";

export default {
  title: "Example/NavLink (NavLink)",
  component: NavLink,
};

const Template = (args) => <NavLink {...args} />;

export const Nav = Template.bind({});

Nav.args = {
  isActive: true,
  children: "NavLink",
};
