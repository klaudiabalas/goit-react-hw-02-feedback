import React from 'react';

import { Feedback } from './Feedback/Feedback.jsx';
import { Section } from './Section/Section.jsx';
import { Statistics } from './Statistics/Statistics.jsx';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  countTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotal) * 100);
  };

  handleFeedback = event => {
    this.setState({ [event]: this.state[event] + 1 });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotal();
    const countPositiveFeedback = this.positiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback
            options={this.state}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedback}
          />
        </Section>
      </>
    );
  }
}
