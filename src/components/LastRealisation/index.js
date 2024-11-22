import React from "react";
import { useData } from "../../contexts/DataContext";
import EventCard from "../EventCard";

const LastRealisation = () => {
  const { data, error } = useData();

  if (error) {
    return <div>Une erreur est survenue : {error.message}</div>;
  }

  if (!data || !data.last) {
    return <div>Aucune réalisation disponible</div>;
  }

  const { last } = data;

  return (
    <div>
      <EventCard
        imageSrc={last.cover || "default.jpg"}
        title={last.title || "Untitled"}
        date={new Date(last.date)}
        small
        label={last.type}
        imageAlt={last.title || "Untitled"}
      />
    </div>
  );
};

export default LastRealisation;
