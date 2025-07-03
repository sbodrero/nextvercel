/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("App Router: Works with dynamic route segments", async () => {
  // Créer une Promise qui résout vers l'objet params
  const mockParams = Promise.resolve({ slug: "Test" });
  
  // Rendre le composant avec les params en tant que Promise
  const RenderedPage = await Page({ params: mockParams });
  
  render(RenderedPage);
  
  await waitFor(() => {
    expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
  });
});
