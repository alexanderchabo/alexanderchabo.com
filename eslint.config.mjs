import baseConfig from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...baseConfig,
  {
    rules: {
      "react/forbid-elements": "off",
    },
  },
];

export default eslintConfig;
