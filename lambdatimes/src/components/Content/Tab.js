import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      console.log("tab props", props);
      const isActive = props.tab === props.selectedTab; 
  return (
    <div
      className={'tab ' + `${ isActive ? 'active-tab' : ''} `}
      onClick={() => {props.selectTabHandler(props.tab)}}
    > 
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props. 

Tab.propTypes = {
  tab: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default Tab;
