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

// Найти Carrot и удалить по крестику
cy.get(".cart-preview")
  .contains("Carrot")
  .parents("li")     // идём к контейнеру товара
  .find("a")         // крестик удаления — это <a>
  .click();

// Проверяем, что Carrot удалён
cy.get(".cart-preview").should("not.contain", "Carrot");

// Проверяем, что Mushroom остался
cy.get(".cart-preview").should("contain", "Mushroom");
  });
});