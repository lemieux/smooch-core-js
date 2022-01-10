/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.4.6
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
import Message from './Message';

/**
 * The MessagePostResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessagePostResponse
 * @version 9.5.9
 */
class MessagePostResponse {
    /**
     * Constructs a new <code>MessagePostResponse</code>.
     * The created messages. A single request may produce multiple messages when the shorthand syntax is used to send a template message with leading text.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePostResponse
     */
    constructor() { 
        
        MessagePostResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessagePostResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePostResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePostResponse} The populated <code>MessagePostResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessagePostResponse();

            if (data.hasOwnProperty('messages')) {
                obj['messages'] = ApiClient.convertToType(data['messages'], [Message]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Message>}
     */
    getMessages() {
        return this.messages;
    }

    /**
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Message>} messages
     */
    setMessages(messages) {
        this['messages'] = messages;
    }

}

/**
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Message>} messages
 */
MessagePostResponse.prototype['messages'] = undefined;






export default MessagePostResponse;

