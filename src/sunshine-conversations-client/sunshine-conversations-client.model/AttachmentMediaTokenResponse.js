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
 * The AttachmentMediaTokenResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenResponse
 * @version 9.5.9
 */
class AttachmentMediaTokenResponse {
    /**
     * Constructs a new <code>AttachmentMediaTokenResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenResponse
     */
    constructor() { 
        
        AttachmentMediaTokenResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttachmentMediaTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenResponse} The populated <code>AttachmentMediaTokenResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachmentMediaTokenResponse();

            if (data.hasOwnProperty('tokens')) {
                obj['tokens'] = ApiClient.convertToType(data['tokens'], {'String': 'String'});
            }
        }
        return obj;
    }

/**
     * Returns Object with key value pair where the key is the path and the value is the media JWT.
     * @return {Object.<String, String>}
     */
    getTokens() {
        return this.tokens;
    }

    /**
     * Sets Object with key value pair where the key is the path and the value is the media JWT.
     * @param {Object.<String, String>} tokens Object with key value pair where the key is the path and the value is the media JWT.
     */
    setTokens(tokens) {
        this['tokens'] = tokens;
    }

}

/**
 * Object with key value pair where the key is the path and the value is the media JWT.
 * @member {Object.<String, String>} tokens
 */
AttachmentMediaTokenResponse.prototype['tokens'] = undefined;






export default AttachmentMediaTokenResponse;

