import PropTypes from 'prop-types';
import React from 'react';

class StringControl extends React.Component {
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

StringControl.propTypes = {
  onChange: PropTypes.func.isRequired,
  forID: PropTypes.string,
  value: PropTypes.node,
  classNameWrapper: PropTypes.string.isRequired,
};

StringControl.defaultProps = {
  value: 'test',
};

if (typeof window !== 'undefined') {
  window.StringControl = StringControl;
}

export default StringControl;