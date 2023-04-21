/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.12.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.1
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';
import ConversationTruncated from './ConversationTruncated';
import Referral from './Referral';
import SourceWithCampaignWebhook from './SourceWithCampaignWebhook';
import User from './User';

/**
 * The ConversationCreateEventAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateEventAllOfPayload
 * @version 9.14.0
 */
class ConversationCreateEventAllOfPayload {
    /**
     * Constructs a new <code>ConversationCreateEventAllOfPayload</code>.
     * The payload of the event. The contents of this object depend on the type of event.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateEventAllOfPayload
     */
    constructor() { 
        
        ConversationCreateEventAllOfPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationCreateEventAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateEventAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateEventAllOfPayload} The populated <code>ConversationCreateEventAllOfPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationCreateEventAllOfPayload();

            if (data.hasOwnProperty('conversation')) {
                obj['conversation'] = ApiClient.convertToType(data['conversation'], ConversationTruncated);
            }
            if (data.hasOwnProperty('creationReason')) {
                obj['creationReason'] = ApiClient.convertToType(data['creationReason'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], SourceWithCampaignWebhook);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], User);
            }
            if (data.hasOwnProperty('referral')) {
                obj['referral'] = ApiClient.convertToType(data['referral'], Referral);
            }
        }
        return obj;
    }

/**
     * Returns The conversation that was created.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
     */
    getConversation() {
        return this.conversation;
    }

    /**
     * Sets The conversation that was created.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation that was created.
     */
    setConversation(conversation) {
        this['conversation'] = conversation;
    }
/**
     * Returns The reason why the conversation was created, if applicable. * `linkRequest` - The conversation was created in order to generate a link request to transfer the user to a different channel. * `message` - The conversation was created because a message was sent. * `none` - The conversation was not created for a specific purpose. Used primarily when a conversation is created via the Create Conversation API. * `notification` - The conversation was created by a call to the Notification API. * `prechatCapture` - The conversation was created because the user completed a prechat capture form in the Web Messenger. * `startConversation` - The conversation was created because of a call to the startConversation API on one of the SDK integrations, or a start conversation event was triggered from a messaging channel. * `proactiveMessaging` - The conversation was created because the user interacted with a campaign. 
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateEventAllOfPayload.CreationReasonEnum}
     */
    getCreationReason() {
        return this.creationReason;
    }

    /**
     * Sets The reason why the conversation was created, if applicable. * `linkRequest` - The conversation was created in order to generate a link request to transfer the user to a different channel. * `message` - The conversation was created because a message was sent. * `none` - The conversation was not created for a specific purpose. Used primarily when a conversation is created via the Create Conversation API. * `notification` - The conversation was created by a call to the Notification API. * `prechatCapture` - The conversation was created because the user completed a prechat capture form in the Web Messenger. * `startConversation` - The conversation was created because of a call to the startConversation API on one of the SDK integrations, or a start conversation event was triggered from a messaging channel. * `proactiveMessaging` - The conversation was created because the user interacted with a campaign. 
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateEventAllOfPayload.CreationReasonEnum} creationReason The reason why the conversation was created, if applicable. * `linkRequest` - The conversation was created in order to generate a link request to transfer the user to a different channel. * `message` - The conversation was created because a message was sent. * `none` - The conversation was not created for a specific purpose. Used primarily when a conversation is created via the Create Conversation API. * `notification` - The conversation was created by a call to the Notification API. * `prechatCapture` - The conversation was created because the user completed a prechat capture form in the Web Messenger. * `startConversation` - The conversation was created because of a call to the startConversation API on one of the SDK integrations, or a start conversation event was triggered from a messaging channel. * `proactiveMessaging` - The conversation was created because the user interacted with a campaign. 
     */
    setCreationReason(creationReason) {
        this['creationReason'] = creationReason;
    }
/**
     * Returns The source of the creation.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWithCampaignWebhook}
     */
    getSource() {
        return this.source;
    }

    /**
     * Sets The source of the creation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWithCampaignWebhook} source The source of the creation.
     */
    setSource(source) {
        this['source'] = source;
    }
/**
     * Returns The user associated with the conversation. Only present if the created conversation was of type personal. For sdkGroup conversations, the list of participants can be fetched using the List Participants API, if required.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/User}
     */
    getUser() {
        return this.user;
    }

    /**
     * Sets The user associated with the conversation. Only present if the created conversation was of type personal. For sdkGroup conversations, the list of participants can be fetched using the List Participants API, if required.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/User} user The user associated with the conversation. Only present if the created conversation was of type personal. For sdkGroup conversations, the list of participants can be fetched using the List Participants API, if required.
     */
    setUser(user) {
        this['user'] = user;
    }
/**
     * Returns Referral information, if applicable.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Referral}
     */
    getReferral() {
        return this.referral;
    }

    /**
     * Sets Referral information, if applicable.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Referral} referral Referral information, if applicable.
     */
    setReferral(referral) {
        this['referral'] = referral;
    }

}

/**
 * The conversation that was created.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation
 */
ConversationCreateEventAllOfPayload.prototype['conversation'] = undefined;

/**
 * The reason why the conversation was created, if applicable. * `linkRequest` - The conversation was created in order to generate a link request to transfer the user to a different channel. * `message` - The conversation was created because a message was sent. * `none` - The conversation was not created for a specific purpose. Used primarily when a conversation is created via the Create Conversation API. * `notification` - The conversation was created by a call to the Notification API. * `prechatCapture` - The conversation was created because the user completed a prechat capture form in the Web Messenger. * `startConversation` - The conversation was created because of a call to the startConversation API on one of the SDK integrations, or a start conversation event was triggered from a messaging channel. * `proactiveMessaging` - The conversation was created because the user interacted with a campaign. 
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateEventAllOfPayload.CreationReasonEnum} creationReason
 */
ConversationCreateEventAllOfPayload.prototype['creationReason'] = undefined;

/**
 * The source of the creation.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWithCampaignWebhook} source
 */
ConversationCreateEventAllOfPayload.prototype['source'] = undefined;

/**
 * The user associated with the conversation. Only present if the created conversation was of type personal. For sdkGroup conversations, the list of participants can be fetched using the List Participants API, if required.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/User} user
 */
ConversationCreateEventAllOfPayload.prototype['user'] = undefined;

/**
 * Referral information, if applicable.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Referral} referral
 */
ConversationCreateEventAllOfPayload.prototype['referral'] = undefined;





/**
 * Allowed values for the <code>creationReason</code> property.
 * @enum {String}
 * @readonly
 */
ConversationCreateEventAllOfPayload['CreationReasonEnum'] = {

    /**
     * value: "linkRequest"
     * @const
     */
    "linkRequest": "linkRequest",

    /**
     * value: "message"
     * @const
     */
    "message": "message",

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "notification"
     * @const
     */
    "notification": "notification",

    /**
     * value: "prechatCapture"
     * @const
     */
    "prechatCapture": "prechatCapture",

    /**
     * value: "startConversation"
     * @const
     */
    "startConversation": "startConversation",

    /**
     * value: "proactiveMessaging"
     * @const
     */
    "proactiveMessaging": "proactiveMessaging"
};



export default ConversationCreateEventAllOfPayload;

