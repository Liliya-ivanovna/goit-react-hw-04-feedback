import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from './Statistics';
import SectionTitle from './SectionTitle';
import Notification from '../components/Notificatios/Notifications';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const onClick = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };
  const percentageFeedback = () => {
    const total = good + neutral + bad;
    const percentage = total === 0 ? 0 : Math.round((good / total) * 100);
    return percentage;
  };

  return (
    <SectionTitle title="Please leave feedback">
      <FeedbackOptions onLeaveFeedback={options} onClick={onClick} />
      {totalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          total={totalFeedback()}
          positivePercentage={percentageFeedback()}
          stateOptions={options}
        />
      )}
    </SectionTitle>
  );
};
