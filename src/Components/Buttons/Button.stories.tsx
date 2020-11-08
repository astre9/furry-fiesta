import React from "react";
import Button from "./Button";

export default {
  title: "Petshop/Button",
  component: Button,
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "primary",
  hasIcon: false,
  label: "submit",
};

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  type: "secondary-outline",
  hasIcon: false,
  label: "submit",
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  type: "icon-only",
  hasIcon: true,
  iconName: "twitter",
};
