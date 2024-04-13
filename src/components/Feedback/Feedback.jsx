import PropTypes from 'prop-types';

export const Feedback = ({ options, onLeaveFeedback }) => (
  <div className="feedback_container">
    {Object.keys(options).map(option => (
      <button
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
        className="feedback_button"
      >
        {option}
      </button>
    ))}
  </div>
);

Feedback.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
