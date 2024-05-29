import { gql } from '@apollo/client';

export const FETCH_COMPANY_STATS = gql`
  query company_stats($period_start: String, $period_end: String) {
    company_stats(period_start: $period_start, period_end: $period_end)
      @rest(
        type: "company_stats"
        path: "/companies/?{args}"
        endpoint: "analytics"
      ) {
      statistics
    }
  }
`;
export const FETCH_AGENT_STATS = gql`
  query agent_stats($period_start: String, $period_end: String) {
    agent_stats(period_start: $period_start, period_end: $period_end)
      @rest(
        type: "agent_stats"
        path: "/agents/?{args}"
        endpoint: "analytics"
      ) {
      statistics {
        id
        name
        total_alarms
        dispatch_times
        save_times
      }
    }
  }
`;

export const FETCH_RESPONDERS_STATS = gql`
  query responders_stats($period_start: String, $period_end: String) {
    responders_stats(period_start: $period_start, period_end: $period_end)
      @rest(
        type: "responders_stats"
        path: "/responders/?{args}"
        endpoint: "analytics"
      ) {
      statistics {
        id
        name
        closed_alarms
        response_times
        accept_times
      }
    }
  }
`;
export const GET_RESPONDER_STATS = gql`
  query getResponderStats($period_start: String, $period_end: String) {
    getResponderStats(period_start: $period_start, period_end: $period_end)
      @rest(
        type: "ResponderStats"
        path: "/?{args}"
        endpoint: "ResponderStats"
      ) {
      statistics {
        id
        name
        closed_alarms
        response_times
        accept_times
      }
    }
  }
`;

export const FETCH_FALSE_ALARM_STATS = gql`
  query false_alarm_stats($period_start: String, $period_end: String) {
    false_alarm_stats(period_start: $period_start, period_end: $period_end)
      @rest(
        type: "false_alarm_stats"
        path: "/companies/false-alarms/?{args}"
        endpoint: "analytics"
      ) {
      statistics
    }
  }
`;
export const FETCH_LEADERBOARD_ALARM_STATS = gql`
  query alarm_leaderboard_stats($period_start: String, $period_end: String) {
    alarm_leaderboard_stats(
      period_start: $period_start
      period_end: $period_end
    )
      @rest(
        type: "alarm_leaderboard_stats"
        path: "/companies/positive-alarms/?{args}"
        endpoint: "analytics"
      ) {
      statistics
    }
  }
`;
export const FETCH_AVERAGE_ALARM_STATS = gql`
  query average_alarm_stats($period_start: String, $period_end: String) {
    average_alarm_stats(period_start: $period_start, period_end: $period_end)
      @rest(
        type: "average_alarm_stats"
        path: "/home_alarms/?{args}"
        endpoint: "analytics"
      ) {
      statistics
    }
  }
`;
export const FETCH_SYSTEM_STATS = gql`
  query system_stats($period_start: String, $period_end: String) {
    system_stats(period_start: $period_start, period_end: $period_end)
      @rest(
        type: "system_stats"
        path: "/companies/system/?{args}"
        endpoint: "analytics"
      ) {
      system_statistics
    }
  }
`;
