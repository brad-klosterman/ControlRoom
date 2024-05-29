import { gql } from '@apollo/client';

export const GET_ALARM_TYPES = gql`
  query getAlarmTypes($page: Int!, $per_page: Int!) {
    alarmTypes(page: $page, per_page: $per_page)
      @rest(path: "/?{args}", endpoint: "AlarmTypes") {
      totalResults
      results
    }
  }
`;

export const GET_ALARM_TYPE = gql`
  query alarmType($alarmTypeId: String!) {
    alarmType(alarmTypeId: $alarmTypeId)
      @rest(path: "/{args.alarmTypeId}", endpoint: "AlarmTypes") {
      alarm
    }
  }
`;

export const UPDATE_ALARM_TYPE = gql`
  mutation updateAlarmType($alarmType: any!, $alarmTypeId: String!) {
    alarmType(alarmType: $alarmType, alarmTypeId: $alarmTypeId)
      @rest(
        path: "/{args.alarmTypeId}"
        method: "PATCH"
        endpoint: "AlarmTypes"
        bodyKey: "alarmType"
      ) {
      alarm
    }
  }
`;

export const DELETE_ALARM_TYPE = gql`
  mutation deleteAlarmType($alarmTypeId: String!) {
    alarmType(alarmTypeId: $alarmTypeId)
      @rest(
        path: "/{args.alarmTypeId}"
        method: "DELETE"
        endpoint: "AlarmTypes"
      ) {
      id
    }
  }
`;
