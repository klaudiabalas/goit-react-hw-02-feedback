import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  if (good || neutral || bad) {
    return (
      <>
        <div className="statistics-container">
          <h2 className="statistics-header">Statistics</h2>
          <ul className="statistics-list">
            <li className="statistics-item">Good : {good}</li>
            <li className="statistics-item">Neutral : {neutral}</li>
            <li className="statistics-item">Bad : {bad}</li>
            <li className="statistics-item">Total : {total}</li>
            <li className="statistics-item">
              Positive feedback : {positivePercentage} %
            </li>
          </ul>
        </div>
      </>
    );
  } else {
    return <Notification text="There is no feedback" />;
  }
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
