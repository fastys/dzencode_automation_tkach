describe("Vegetable Store Tests", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  });

  it("Search and add items to cart", () => {
    cy.get(".search-keyword").type("ro");
    cy.contains(".product-name", "Carrot").should("be.visible");

    cy.contains(".product", "Carrot").find("input.quantity").clear().type("5");

    cy.contains(".product", "Mushroom").as("mushroomProduct");
    cy.get("@mushroomProduct").find(".increment").click().click();

    cy.contains(".product", "Carrot").find("button").click();
    cy.get("@mushroomProduct").find("button").click();

    cy.get(".cart-icon").click();

cy.get(".cart-preview")
  .contains("Carrot")
  .parents("li")
  .find("a")
  .click();
cy.get(".cart-preview").should("not.contain", "Carrot");

cy.get(".cart-preview").should("contain", "Mushroom");
  });
});