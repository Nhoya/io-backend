/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "ms-rest-js";
import { RequestOptionsBase } from "ms-rest-js";


/**
 * @interface
 * An interface representing ProblemJson.
 */
export interface ProblemJson {
  /**
   * @member {string} [type] An absolute URI that identifies the problem type.
   * When dereferenced,
   * it SHOULD provide human-readable documentation for the problem type
   * (e.g., using HTML).
   * . Default value: 'about:blank' .
   */
  type?: string;
  /**
   * @member {string} [title] A short, summary of the problem type. Written in
   * english and readable
   * for engineers (usually not suited for non technical stakeholders and
   * not localized); example: Service Unavailable
   */
  title?: string;
  /**
   * @member {number} [status]
   */
  status?: number;
  /**
   * @member {string} [detail] A human readable explanation specific to this
   * occurrence of the
   * problem.
   */
  detail?: string;
  /**
   * @member {string} [instance] An absolute URI that identifies the specific
   * occurrence of the problem.
   * It may or may not yield further information if dereferenced.
   */
  instance?: string;
}

/**
 * @interface
 * An interface representing MessageContent.
 */
export interface MessageContent {
  /**
   * @member {string} [subject]
   */
  subject?: string;
  /**
   * @member {string} markdown
   */
  markdown: string;
}

/**
 * @interface
 * An interface representing NewMessageDefaultAddresses.
 * Default addresses for notifying the recipient of the message in case no
 * address for the related channel is set in his profile.
 *
 */
export interface NewMessageDefaultAddresses {
  /**
   * @member {string} [email]
   */
  email?: string;
}

/**
 * @interface
 * An interface representing NewMessage.
 */
export interface NewMessage {
  /**
   * @member {number} [timeToLive]
   */
  timeToLive?: number;
  /**
   * @member {MessageContent} content
   */
  content: MessageContent;
  /**
   * @member {NewMessageDefaultAddresses} [defaultAddresses]
   */
  defaultAddresses?: NewMessageDefaultAddresses;
}

/**
 * @interface
 * An interface representing NotificationStatus.
 */
export interface NotificationStatus {
  /**
   * @member {string} [email]
   */
  email?: string;
}

/**
 * @interface
 * An interface representing CreatedMessageWithContent.
 */
export interface CreatedMessageWithContent {
  /**
   * @member {string} [id]
   */
  id?: string;
  /**
   * @member {string} fiscalCode
   */
  fiscalCode: string;
  /**
   * @member {number} [timeToLive]
   */
  timeToLive?: number;
  /**
   * @member {MessageContent} [content]
   */
  content?: MessageContent;
  /**
   * @member {string} senderServiceId
   */
  senderServiceId: string;
}

/**
 * @interface
 * An interface representing CreatedMessageWithoutContent.
 */
export interface CreatedMessageWithoutContent {
  /**
   * @member {string} [id]
   */
  id?: string;
  /**
   * @member {string} fiscalCode
   */
  fiscalCode: string;
  /**
   * @member {number} [timeToLive]
   */
  timeToLive?: number;
  /**
   * @member {string} senderServiceId
   */
  senderServiceId: string;
}

/**
 * @interface
 * An interface representing MessageResponseWithContent.
 */
export interface MessageResponseWithContent {
  /**
   * @member {CreatedMessageWithContent} message
   */
  message: CreatedMessageWithContent;
  /**
   * @member {NotificationStatus} [notification]
   */
  notification?: NotificationStatus;
}

/**
 * @interface
 * An interface representing MessageResponseWithoutContent.
 */
export interface MessageResponseWithoutContent {
  /**
   * @member {CreatedMessageWithoutContent} message
   */
  message: CreatedMessageWithoutContent;
  /**
   * @member {NotificationStatus} [notification]
   */
  notification?: NotificationStatus;
}

/**
 * @interface
 * An interface representing PaginationResponse.
 * Pagination response parameters.
 *
 */
export interface PaginationResponse {
  /**
   * @member {number} [pageSize] Number of items returned for each page.
   */
  pageSize?: number;
  /**
   * @member {string} [next] Contains an URL to GET the next #<page_size>
   * results in the retrieved collection of items.
   */
  next?: string;
}

/**
 * @interface
 * An interface representing LimitedProfile.
 * Describes the citizen's profile, mostly interesting for preferences
 * attributes.
 *
 */
export interface LimitedProfile {
  /**
   * @member {string[]} [preferredLanguages]
   */
  preferredLanguages?: string[];
}

/**
 * @interface
 * An interface representing ExtendedProfile.
 * Describes the citizen's profile, mostly interesting for preferences
 * attributes.
 *
 */
export interface ExtendedProfile {
  /**
   * @member {string} [email]
   */
  email?: string;
  /**
   * @member {string[]} [preferredLanguages]
   */
  preferredLanguages?: string[];
  /**
   * @member {boolean} [isInboxEnabled]
   */
  isInboxEnabled?: boolean;
  /**
   * @member {number} [version]
   */
  version?: number;
}

/**
 * @interface
 * An interface representing Service.
 * A Service tied to an user's subscription.
 *
 */
export interface Service {
  /**
   * @member {string} serviceId
   */
  serviceId: string;
  /**
   * @member {string} serviceName
   */
  serviceName: string;
  /**
   * @member {string} organizationName
   */
  organizationName: string;
  /**
   * @member {string} departmentName
   */
  departmentName: string;
  /**
   * @member {string[]} authorizedCidrs
   */
  authorizedCidrs: string[];
  /**
   * @member {string[]} authorizedRecipients
   */
  authorizedRecipients: string[];
  /**
   * @member {number} [version]
   */
  version?: number;
  /**
   * @member {string} [id]
   */
  id?: string;
}

/**
 * @interface
 * An interface representing ServicePublic.
 * @summary Service (public)
 *
 * A Service associated to an user's subscription.
 *
 */
export interface ServicePublic {
  /**
   * @member {string} serviceId
   */
  serviceId: string;
  /**
   * @member {string} serviceName
   */
  serviceName: string;
  /**
   * @member {string} organizationName
   */
  organizationName: string;
  /**
   * @member {string} departmentName
   */
  departmentName: string;
  /**
   * @member {number} [version]
   */
  version?: number;
}

/**
 * @interface
 * An interface representing GetMessagesByUserOKResponse.
 * @extends PaginationResponse
 */
export interface GetMessagesByUserOKResponse extends PaginationResponse {
  /**
   * @member {CreatedMessageWithoutContent[]} [items]
   */
  items?: CreatedMessageWithoutContent[];
}

/**
 * @interface
 * An interface representing GetProfileOKResponse.
 */
export interface GetProfileOKResponse {
  /**
   * @member {string[]} [preferredLanguages]
   */
  preferredLanguages?: string[];
  /**
   * @member {string} [email]
   */
  email?: string;
  /**
   * @member {boolean} [isInboxEnabled]
   */
  isInboxEnabled?: boolean;
  /**
   * @member {number} [version]
   */
  version?: number;
}

/**
 * @interface
 * An interface representing UpsertProfileOKResponse.
 */
export interface UpsertProfileOKResponse {
  /**
   * @member {string[]} [preferredLanguages]
   */
  preferredLanguages?: string[];
  /**
   * @member {string} [email]
   */
  email?: string;
  /**
   * @member {boolean} [isInboxEnabled]
   */
  isInboxEnabled?: boolean;
  /**
   * @member {number} [version]
   */
  version?: number;
}

/**
 * @interface
 * An interface representing DigitalCitizenshipAPIOptions.
 * @extends ServiceClientOptions
 */
export interface DigitalCitizenshipAPIOptions extends ServiceClientOptions {
  /**
   * @member {string} [cursor] An opaque identifier that points to the next
   * item in the collection.
   */
  cursor?: string;
}

/**
 * @interface
 * An interface representing DigitalCitizenshipAPISubmitMessageforUserOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface DigitalCitizenshipAPISubmitMessageforUserOptionalParams extends RequestOptionsBase {
  /**
   * @member {NewMessage} [message]
   */
  message?: NewMessage;
}

/**
 * @interface
 * An interface representing DigitalCitizenshipAPIUpsertProfileOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface DigitalCitizenshipAPIUpsertProfileOptionalParams extends RequestOptionsBase {
  /**
   * @member {ExtendedProfile} [body]
   */
  body?: ExtendedProfile;
}
