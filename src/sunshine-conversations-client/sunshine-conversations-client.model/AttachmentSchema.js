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
 * The AttachmentSchema model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AttachmentSchema
 * @version 12.6.1
 */
class AttachmentSchema {
    /**
     * Constructs a new <code>AttachmentSchema</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentSchema
     */
    constructor() { 
        
        AttachmentSchema.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttachmentSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentSchema} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentSchema} The populated <code>AttachmentSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachmentSchema();

            if (data.hasOwnProperty('mediaUrl')) {
                obj['mediaUrl'] = ApiClient.convertToType(data['mediaUrl'], 'String');
            }
            if (data.hasOwnProperty('mediaType')) {
                obj['mediaType'] = ApiClient.convertToType(data['mediaType'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns Uploaded attachment’s url
     * @return {String}
     */
    getMediaUrl() {
        return this.mediaUrl;
    }

    /**
     * Sets Uploaded attachment’s url
     * @param {String} mediaUrl Uploaded attachment’s url
     */
    setMediaUrl(mediaUrl) {
        this['mediaUrl'] = mediaUrl;
    }
/**
     * Returns Uploaded attachment's media type
     * @return {String}
     */
    getMediaType() {
        return this.mediaType;
    }

    /**
     * Sets Uploaded attachment's media type
     * @param {String} mediaType Uploaded attachment's media type
     */
    setMediaType(mediaType) {
        this['mediaType'] = mediaType;
    }

}

/**
 * Uploaded attachment’s url
 * @member {String} mediaUrl
 */
AttachmentSchema.prototype['mediaUrl'] = undefined;

/**
 * Uploaded attachment's media type
 * @member {String} mediaType
 */
AttachmentSchema.prototype['mediaType'] = undefined;






export default AttachmentSchema;

