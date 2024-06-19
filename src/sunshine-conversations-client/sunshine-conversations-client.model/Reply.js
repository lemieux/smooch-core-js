/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.6.1
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

/**
 * The Reply model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Reply
 * @version 12.6.1
 */
class Reply {
    /**
     * Constructs a new <code>Reply</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Reply
     * @param type {String} The type of action.
     * @param text {String} The button text. We recommend a non-empty value because some channels may not support empty ones. Text longer than 20 characters will be truncated on Facebook Messenger, and longer than 40 characters will be truncated on Web Messenger, iOS, and Android.
     * @param payload {String} A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
     */
    constructor(type, text, payload) { 
        
        Reply.initialize(this, type, text, payload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, text, payload) { 
        obj['type'] = type;
        obj['text'] = text;
        obj['payload'] = payload;
    }

    /**
     * Constructs a <code>Reply</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Reply} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Reply} The populated <code>Reply</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Reply();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('iconUrl')) {
                obj['iconUrl'] = ApiClient.convertToType(data['iconUrl'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The type of action.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of action.
     * @param {String} type The type of action.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The button text. We recommend a non-empty value because some channels may not support empty ones. Text longer than 20 characters will be truncated on Facebook Messenger, and longer than 40 characters will be truncated on Web Messenger, iOS, and Android.
     * @return {String}
     */
    getText() {
        return this.text;
    }

    /**
     * Sets The button text. We recommend a non-empty value because some channels may not support empty ones. Text longer than 20 characters will be truncated on Facebook Messenger, and longer than 40 characters will be truncated on Web Messenger, iOS, and Android.
     * @param {String} text The button text. We recommend a non-empty value because some channels may not support empty ones. Text longer than 20 characters will be truncated on Facebook Messenger, and longer than 40 characters will be truncated on Web Messenger, iOS, and Android.
     */
    setText(text) {
        this['text'] = text;
    }
/**
     * Returns A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
     * @return {String}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * Sets A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
     * @param {String} payload A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
     */
    setPayload(payload) {
        this['payload'] = payload;
    }
/**
     * Returns Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @return {Object}
     */
    getMetadata() {
        return this.metadata;
    }

    /**
     * Sets Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @param {Object} metadata Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     */
    setMetadata(metadata) {
        this['metadata'] = metadata;
    }
/**
     * Returns An icon to render next to the reply option.
     * @return {String}
     */
    getIconUrl() {
        return this.iconUrl;
    }

    /**
     * Sets An icon to render next to the reply option.
     * @param {String} iconUrl An icon to render next to the reply option.
     */
    setIconUrl(iconUrl) {
        this['iconUrl'] = iconUrl;
    }

}

/**
 * The type of action.
 * @member {String} type
 */
Reply.prototype['type'] = undefined;

/**
 * The button text. We recommend a non-empty value because some channels may not support empty ones. Text longer than 20 characters will be truncated on Facebook Messenger, and longer than 40 characters will be truncated on Web Messenger, iOS, and Android.
 * @member {String} text
 */
Reply.prototype['text'] = undefined;

/**
 * A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
 * @member {String} payload
 */
Reply.prototype['payload'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Reply.prototype['metadata'] = undefined;

/**
 * An icon to render next to the reply option.
 * @member {String} iconUrl
 */
Reply.prototype['iconUrl'] = undefined;






export default Reply;

