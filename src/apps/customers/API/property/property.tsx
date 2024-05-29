import { graphql } from 'codegen/gql';

export const CUSTOMER_PROPERTY_ROUTE = graphql(/* GraphQL */ `
  query customer_property_route($property_id: Int!) {
    customer_property(property_id: $property_id) {
      property {
        ...customer_profile_property
      }
      success
    }
  }
`);

export const PROPERTY_PROFILE_ROUTE = graphql(/* GraphQL */ `
  fragment customer_profile_property on customer_property {
    id
    code
    name
    description
    status
    type
    images {
      id
      url
    }
    video_feeds {
      id
      url
    }
    geospatial {
      coordinates {
        longitude
        latitude
      }
      entire_address
      street
      zip_code
      city
      country
      area {
        id
        name
      }
      zones {
        ...PROPERTY_PROFILE_ZONE
      }
    }
    keyholders {
      ...PROPERTY_PROFILE_KEYHOLDER
    }
    instructions {
      ...PROPERTY_PROFILE_INSTRUCTIONS
    }
    schedules {
      ...PROPERTY_PROFILE_SCHEDULE
    }
    equipment {
      transmitters {
        ...PROPERTY_PROFILE_TRANSMITTER
      }
    }
    scheduled_status_changes {
      ...scheduled_status_changes
    }
    password
    duress_password
    notes
    testing_enabled
    testing_time
    suspend_reason
    suspended_at
    suspended_by
    status_changed_at
    status_changed_by_agent_id
    status_changed_reason
    status_changed_reason_id
    __typename
  }
`);

export const PROPERTY_PROFILE_KEYHOLDER = graphql(/* GraphQL */ `
  fragment PROPERTY_PROFILE_KEYHOLDER on property_keyholder {
    id
    user_app_id
    name
    description
    mobile_phone
    landline_phone
    call_order
    sms_notifications_enabled
    push_notifications_enabled
    triggered_panics_allowed
    password
  }
`);

export const PROPERTY_PROFILE_SCHEDULE = graphql(/* GraphQL */ `
  fragment PROPERTY_PROFILE_SCHEDULE on property_time_schedule {
    id
    open_start
    open_end
    close_start
    close_end
    day
  }
`);

export const PROPERTY_PROFILE_INSTRUCTIONS = graphql(/* GraphQL */ `
  fragment PROPERTY_PROFILE_INSTRUCTIONS on property_instructions {
    HOLIDAY {
      id
      note
      validity_start
      validity_end
    }
    NOTE {
      id
      note
    }
    AGENT {
      id
      note
    }
    RESPONDER {
      id
      note
    }
    KEY {
      id
      note
    }
  }
`);

export const PROFILE_EQUIPMENT = graphql(/* GraphQL */ `
  fragment PROPERTY_PROFILE_EQUIPMENT on property_equipment {
    transmitters {
      ...PROPERTY_PROFILE_TRANSMITTER
    }
  }
`);

export const PROPERTY_PROFILE_TRANSMITTER = graphql(/* GraphQL */ `
  fragment PROPERTY_PROFILE_TRANSMITTER on transmitter {
    id
    number
    description
    heartbeat_interval
    area {
      id
      name
    }
    decoder {
      id
      name
    }
    set_name
  }
`);
