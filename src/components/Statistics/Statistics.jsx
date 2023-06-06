import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticsItem } from './Statistics.styled';


export class Statistics extends Component {
    render() {
        const { good, neutral, bad, totalFeedback, positiveFeedbackPercentage } = this.props;
        return (
            <StatisticsContainer>
            <StatisticsItem>Good: {good}</StatisticsItem>
            <StatisticsItem>Neutral: {neutral}</StatisticsItem>
            <StatisticsItem>Bad: {bad}</StatisticsItem>    
            <StatisticsItem>Total: {totalFeedback}</StatisticsItem>  
            <StatisticsItem>Positive Feedback Percentage: {positiveFeedbackPercentage?positiveFeedbackPercentage:0}%</StatisticsItem>  
        </StatisticsContainer>
        );
      }
    }

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positiveFeedbackPercentage: PropTypes.number.isRequired,
  };
  