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

/**
 * The Postback model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Postback
 * @version 9.5.8
 */
class Postback {
    /**
     * Constructs a new <code>Postback</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Postback
     * @param type {String} The type of action.
     * @param text {String} The button text.
     * @param payload {String} The payload of a postback or reply button.
     */
    constructor(type, text, payload) { 
        
        Postback.initialize(this, type, text, payload);
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
     * Constructs a <code>Postback</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Postback} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Postback} The populated <code>Postback</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Postback();

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
     * Returns The button text.
     * @return {String}
     */
    getText() {
        return this.text;
    }

    /**
     * Sets The button text.
     * @param {String} text The button text.
     */
    setText(text) {
        this['text'] = text;
    }
/**
     * Returns The payload of a postback or reply button.
     * @return {String}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * Sets The payload of a postback or reply button.
     * @param {String} payload The payload of a postback or reply button.
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

}

/**
 * The type of action.
 * @member {String} type
 * @default 'postback'
 */
Postback.prototype['type'] = 'postback';

/**
 * The button text.
 * @member {String} text
 */
Postback.prototype['text'] = undefined;

/**
 * The payload of a postback or reply button.
 * @member {String} payload
 */
Postback.prototype['payload'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Postback.prototype['metadata'] = undefined;






export default Postback;

