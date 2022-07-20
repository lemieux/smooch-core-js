/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.10.0
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
import Activity from './Activity';
import ConversationTruncated from './ConversationTruncated';

/**
 * The ConversationTypingEventAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationTypingEventAllOfPayload
 * @version 9.10.0
 */
class ConversationTypingEventAllOfPayload {
    /**
     * Constructs a new <code>ConversationTypingEventAllOfPayload</code>.
     * The payload of the event. The contents of this object depend on the type of event.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTypingEventAllOfPayload
     */
    constructor() { 
        
        ConversationTypingEventAllOfPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationTypingEventAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTypingEventAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTypingEventAllOfPayload} The populated <code>ConversationTypingEventAllOfPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationTypingEventAllOfPayload();

            if (data.hasOwnProperty('conversation')) {
                obj['conversation'] = ApiClient.convertToType(data['conversation'], ConversationTruncated);
            }
            if (data.hasOwnProperty('activity')) {
                obj['activity'] = ApiClient.convertToType(data['activity'], Activity);
            }
        }
        return obj;
    }

/**
     * Returns The conversation in which the activity was sent.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
     */
    getConversation() {
        return this.conversation;
    }

    /**
     * Sets The conversation in which the activity was sent.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation in which the activity was sent.
     */
    setConversation(conversation) {
        this['conversation'] = conversation;
    }
/**
     * Returns The activity that was sent.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Activity}
     */
    getActivity() {
        return this.activity;
    }

    /**
     * Sets The activity that was sent.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Activity} activity The activity that was sent.
     */
    setActivity(activity) {
        this['activity'] = activity;
    }

}

/**
 * The conversation in which the activity was sent.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation
 */
ConversationTypingEventAllOfPayload.prototype['conversation'] = undefined;

/**
 * The activity that was sent.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Activity} activity
 */
ConversationTypingEventAllOfPayload.prototype['activity'] = undefined;






export default ConversationTypingEventAllOfPayload;

