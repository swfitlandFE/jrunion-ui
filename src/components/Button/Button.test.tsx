import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'

import JrButton from "./index";

describe("Running Test for Marbella Button", () => {

    test("Check Button Disabled", () => {
      render(<JrButton text="Button marbella" disabled/>)
      expect(screen.getByRole('button',{name:"Button marbella"})).toBeDisabled();
    });
  });