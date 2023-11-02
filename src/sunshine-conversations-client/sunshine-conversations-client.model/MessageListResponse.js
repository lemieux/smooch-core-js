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
import Links from './Links';
import Message from './Message';
import Meta from './Meta';

/**
 * The MessageListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessageListResponse
 * @version 11.0.0
 */
class MessageListResponse {
    /**
     * Constructs a new <code>MessageListResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MessageListResponse
     */
    constructor() { 
        
        MessageListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageListResponse} The populated <code>MessageListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageListResponse();

            if (data.hasOwnProperty('messages')) {
                obj['messages'] = ApiClient.convertToType(data['messages'], [Message]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = Meta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = Links.constructFromObject(data['links']);
            }
        }
        return obj;
    }

/**
     * Returns List of returned messages.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Message>}
     */
    getMessages() {
        return this.messages;
    }

    /**
     * Sets List of returned messages.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Message>} messages List of returned messages.
     */
    setMessages(messages) {
        this['messages'] = messages;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta}
     */
    getMeta() {
        return this.meta;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta} meta
     */
    setMeta(meta) {
        this['meta'] = meta;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Links}
     */
    getLinks() {
        return this.links;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Links} links
     */
    setLinks(links) {
        this['links'] = links;
    }

}

/**
 * List of returned messages.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Message>} messages
 */
MessageListResponse.prototype['messages'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta} meta
 */
MessageListResponse.prototype['meta'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Links} links
 */
MessageListResponse.prototype['links'] = undefined;






export default MessageListResponse;

