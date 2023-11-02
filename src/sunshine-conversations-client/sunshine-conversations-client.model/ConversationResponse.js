/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 11.0.0
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
import Conversation from './Conversation';

/**
 * The ConversationResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse
 * @version 11.0.0
 */
class ConversationResponse {
    /**
     * Constructs a new <code>ConversationResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse
     */
    constructor() { 
        
        ConversationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse} The populated <code>ConversationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationResponse();

            if (data.hasOwnProperty('conversation')) {
                obj['conversation'] = ApiClient.convertToType(data['conversation'], Conversation);
            }
        }
        return obj;
    }

/**
     * Returns The conversation.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Conversation}
     */
    getConversation() {
        return this.conversation;
    }

    /**
     * Sets The conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Conversation} conversation The conversation.
     */
    setConversation(conversation) {
        this['conversation'] = conversation;
    }

}

/**
 * The conversation.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Conversation} conversation
 */
ConversationResponse.prototype['conversation'] = undefined;






export default ConversationResponse;

