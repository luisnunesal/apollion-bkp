import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from './TogglerTabs.module.css';

import { TogglerHeader, getDefaultToggle } from '../Toggler';

function TogglerTabs({ children, togglerItems }) {

  const [{ activeToggle }, setStateToggler] = useState({
    activeToggle: getDefaultToggle(togglerItems)
  });

  const handleTogglerClick = toggle => () => {
    setStateToggler({
      activeToggle: toggle
    });
  };

  return (
    <section className={styles['toggler-tabs']}>
      <section className={styles.header}>
        <TogglerHeader
          items={togglerItems}
          onClick={handleTogglerClick}
          activeToggle={activeToggle}
        />
      </section>
      {children({
        toggle: togglerItems[activeToggle]
      })}
    </section>
  );
}

TogglerTabs.propTypes = {
  children: PropTypes.func.isRequired,
  togglerItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      tooltipText: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired
    })
  ).isRequired
};

export default TogglerTabs;
