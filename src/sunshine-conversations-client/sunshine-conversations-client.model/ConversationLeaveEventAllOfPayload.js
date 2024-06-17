/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.6.0
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
import UserTruncated from './UserTruncated';

/**
 * The ConversationLeaveEventAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationLeaveEventAllOfPayload
 * @version 12.6.0
 */
class ConversationLeaveEventAllOfPayload {
    /**
     * Constructs a new <code>ConversationLeaveEventAllOfPayload</code>.
     * The payload of the event. The contents of this object depend on the type of event.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationLeaveEventAllOfPayload
     */
    constructor() { 
        
        ConversationLeaveEventAllOfPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationLeaveEventAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationLeaveEventAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationLeaveEventAllOfPayload} The populated <code>ConversationLeaveEventAllOfPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationLeaveEventAllOfPayload();

            if (data.hasOwnProperty('conversation')) {
                obj['conversation'] = ApiClient.convertToType(data['conversation'], ConversationTruncated);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], UserTruncated);
            }
        }
        return obj;
    }

/**
     * Returns The conversation in which the user was removed.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
     */
    getConversation() {
        return this.conversation;
    }

    /**
     * Sets The conversation in which the user was removed.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation in which the user was removed.
     */
    setConversation(conversation) {
        this['conversation'] = conversation;
    }
/**
     * Returns The user that left the conversation.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated}
     */
    getUser() {
        return this.user;
    }

    /**
     * Sets The user that left the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated} user The user that left the conversation.
     */
    setUser(user) {
        this['user'] = user;
    }

}

/**
 * The conversation in which the user was removed.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation
 */
ConversationLeaveEventAllOfPayload.prototype['conversation'] = undefined;

/**
 * The user that left the conversation.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated} user
 */
ConversationLeaveEventAllOfPayload.prototype['user'] = undefined;






export default ConversationLeaveEventAllOfPayload;

