/**
 * @jest-environment jsdom
 */

// test/pages/index.test.js

import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from "../test-utils";
import IconButton from "../../components/Hero/IconButton";

describe("HomePage", () => {
    const mockProp = {
        icons: {
          "id": "60e3fbf1ca9d85c46c29f9f0",
          "link": "https://github.com/ppiwo",
          "label": "Github",
          "logo": {
            "url": "https://res.cloudinary.com/dqfuzl8u2/image/upload/v1625553643/github_08fa096c44.svg",
            "alternativeText": "Github Logo" 
            }  
          },
            height: 200,
            width: 200,
        }

        console.log('MOCK',mockProp)
  it("should render the heading", () => {
    render(<IconButton icons={mockProp} height="50" width="50"/>);

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
  });
});
