import React from 'react';
import PropTypes from "prop-types";
import EventCard from '../EventCard';


const LastRealisation = ({ last = null }) => {
  // Vérifie si la prop `last` est nulle ou non définie
  if (!last) {
    // Si `last` est nulle ou non définie, affiche un message indiquant qu'aucune réalisation n'est disponible
    return <div>Aucune réalisation disponible</div>;
  }

  // Si `last` est définie, retourne un composant EventCard avec les informations de `last`
  return (
    <div>
      <EventCard
        // Utilise l'image de couverture de `last`, ou 'default.jpg' si non définie
        imageSrc={last.cover || 'default.jpg'}
        // Utilise le titre de `last`, ou 'Untitled' si non défini
        title={last.title || 'Untitled'}
        // Convertit la date de `last` en objet Date
        date={new Date(last.date)}
        // Ajoute la classe `small` à EventCard
        small
        // Définit une étiquette "boom"
        label="boom"
        // Utilise le titre de `last` pour l'attribut alt de l'image, ou 'Untitled' si non défini
        imageAlt={last.title || 'Untitled'}
      />
    </div>
  );
};

// Définition des types de props pour le composant LastRealisation
LastRealisation.propTypes = {
  last: PropTypes.shape({
    cover: PropTypes.string, // `cover` doit être une chaîne de caractères
    title: PropTypes.string,
    date: PropTypes.string,
  }),
};

export default LastRealisation;
