import PropTypes from 'prop-types';
import React from 'react';

export default class Control extends React.Component {
  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
    } = this.props;

    return (
      <input
        type="text"
        id={forID}
        className={classNameWrapper}
        value={value || ''}
        onChange={e => onChange(e.target.value)}
      />
    );
  }
}

Control.propTypes = {
  onChange: PropTypes.func.isRequired,
  forID: PropTypes.string,
  value: PropTypes.node,
  classNameWrapper: PropTypes.string.isRequired,
};

Control.defaultProps = {
  value: '',
};

if (typeof window !== 'undefined') {
  window.Control = Control;
}