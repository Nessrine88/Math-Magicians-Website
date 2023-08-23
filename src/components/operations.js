import PropTypes from 'prop-types';

const Operations = ({ calculatorState }) => {
  let displayValue = '';

  if (calculatorState.next !== null) {
    displayValue = `${calculatorState.total || ''} ${calculatorState.operation || ''} ${calculatorState.next}`;
  } else if (calculatorState.operation !== null) {
    displayValue = `${calculatorState.total || '0'} ${calculatorState.operation}`;
  } else {
    displayValue = calculatorState.total || '0';
  }

  return <div>{displayValue}</div>;
};

Operations.propTypes = {
  calculatorState: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
};

export default Operations;
