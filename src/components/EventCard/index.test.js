import { render, screen } from "@testing-library/react";
import EventCard from "./index";

// décrire le groupe de tests pour l'EventCard
describe("Lorsque une carte d'événement est créée", () => {
  
  // tester si une image est affichée avec la valeur alt appropriée
  it("affiche une image avec la valeur alt", () => {
    render(
      <EventCard 
        imageSrc="http://src-image" 
        imageAlt="image-alt-text" 
        date={new Date("2022-04-01")} 
        title="test event" 
        label="test label" 
      />
    );
    // récupérer l'élément image par son testid
    const imageElement = screen.getByTestId("card-image-testid");
    // vérifier que l'image est présente dans le document
    expect(imageElement).toBeInTheDocument();
    // vérifier que l'attribut alt de l'image est correct
    expect(imageElement.alt).toEqual("image-alt-text");
  });

  // tester si le titre, l'étiquette et le mois sont affichés
  it("affiche un titre, une étiquette et un mois", () => {
    render(
      <EventCard
        imageSrc="http://src-image"
        imageAlt="image-alt-text"
        title="test event"
        label="test label"
        date={new Date("2022-04-01")}
      />
    );
    // récupérer l'élément titre par son texte
    const titleElement = screen.getByText(/test event/);
    // récupérer l'élément mois par son texte
    const monthElement = screen.getByText(/avril/);
    // récupérer l'élément étiquette par son texte
    const labelElement = screen.getByText(/test label/);
    // vérifier que le titre est présent dans le document
    expect(titleElement).toBeInTheDocument();
    // vérifier que l'étiquette est présente dans le document
    expect(labelElement).toBeInTheDocument();
    // vérifier que le mois est présent dans le document
    expect(monthElement).toBeInTheDocument();
  });

  // tester l'affichage de 'Invalid Date' pour une date invalide
  it("affiche 'Invalid Date' pour une date invalide", () => {
    render(
      <EventCard
        imageSrc="http://src-image"
        imageAlt="image-alt-text"
        title="test event"
        label="test label"
        date={new Date("invalid-date")}
      />
    );
    // récupérer l'élément mois par son texte
    const monthElement = screen.getByText(/Invalid Date/);
    // vérifier que 'Invalid Date' est présent dans le document
    expect(monthElement).toBeInTheDocument();
  });

  // décrire le groupe de tests pour l'option 'small'
  describe("avec les props small", () => {
    
    // tester si le modificateur small est ajouté
    it("ajoute un modificateur small", () => {
      render(
        <EventCard
          imageSrc="http://src-image"
          imageAlt="image-alt-text"
          title="test event"
          label="test label"
          date={new Date("2022-04-01")}
          small
        />
      );
      // récupérer l'élément carte par son testid
      const cardElement = screen.getByTestId("card-testid");
      // vérifier que la classe CSS 'EventCard--small' est ajoutée
      expect(cardElement.className.includes("EventCard--small")).toEqual(true);
    });
  });
});
