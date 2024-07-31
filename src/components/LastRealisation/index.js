import React from 'react';
import PropTypes from "prop-types";
import EventCard from '../EventCard';

const LastRealisation = ({ last = null }) => {
  if (!last) {
    return <div>Aucune réalisation disponible</div>;
  }

  return (
    <div>
      <EventCard
        imageSrc={last.cover || 'default.jpg'}
        title={last.title || 'Untitled'}
        date={new Date(last.date)}
        small
        label="boom"
        imageAlt={last.title || 'Untitled'}
      />
    </div>
  );
};

LastRealisation.propTypes = {
  last: PropTypes.shape({
    cover: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
  }),
};

export default LastRealisation;
