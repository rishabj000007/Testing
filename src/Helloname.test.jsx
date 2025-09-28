import { render,screen } from "@testing-library/react";
import React from "react";
import Helloname from "./Helloname";
test('checking whether the h1 tag exists or not ', () => {
  render(<Helloname name="rishab"/>);
//   screen.debug()
   expect(screen.getByText('rishab', { exact: false })).toBeInTheDocument(); 
})
