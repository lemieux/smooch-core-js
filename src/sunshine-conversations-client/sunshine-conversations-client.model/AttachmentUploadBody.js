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
 * The AttachmentUploadBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AttachmentUploadBody
 * @version 9.5.8
 */
class AttachmentUploadBody {
    /**
     * Constructs a new <code>AttachmentUploadBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentUploadBody
     * @param source {File} 
     */
    constructor(source) { 
        
        AttachmentUploadBody.initialize(this, source);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source) { 
        obj['source'] = source;
    }

    /**
     * Constructs a <code>AttachmentUploadBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentUploadBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentUploadBody} The populated <code>AttachmentUploadBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachmentUploadBody();

            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], File);
            }
        }
        return obj;
    }

/**
     * @return {File}
     */
    getSource() {
        return this.source;
    }

    /**
     * @param {File} source
     */
    setSource(source) {
        this['source'] = source;
    }

}

/**
 * @member {File} source
 */
AttachmentUploadBody.prototype['source'] = undefined;






export default AttachmentUploadBody;

