import { getByText, render,screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from '@testing-library/user-event'; 
import React from "react";
test('when user click it should be displayed', async() => {
  render(<Button/>)
  screen.debug()
  const buttons=screen.getByText('click me')
  await userEvent.click(buttons)
  expect(screen.getByText("rishab")).toBeInTheDocument()
})
