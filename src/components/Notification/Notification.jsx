import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  <p className="notification_message">{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
