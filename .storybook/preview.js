import Layout from "../src/Components/Layout";
import React from "react";
import { themes } from "@storybook/theming";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#FFF",
      },
      {
        name: "dark",
        value: themes.dark.appBg,
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <Layout>
      <Story />
    </Layout>
  ),
];
