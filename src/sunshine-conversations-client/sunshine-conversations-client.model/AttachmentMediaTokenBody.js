/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.5.1
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
 * The AttachmentMediaTokenBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenBody
 * @version 12.5.1
 */
class AttachmentMediaTokenBody {
    /**
     * Constructs a new <code>AttachmentMediaTokenBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenBody
     * @param paths {Array.<String>} An array of strings representing the list of attachment paths used to generate the media JWT. One token will be generated for each path. Each token will be valid for 2 hours by default. This value can be modified, see [App Settings](#operation/createApp) for more information.
     */
    constructor(paths) { 
        
        AttachmentMediaTokenBody.initialize(this, paths);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, paths) { 
        obj['paths'] = paths;
    }

    /**
     * Constructs a <code>AttachmentMediaTokenBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenBody} The populated <code>AttachmentMediaTokenBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachmentMediaTokenBody();

            if (data.hasOwnProperty('paths')) {
                obj['paths'] = ApiClient.convertToType(data['paths'], ['String']);
            }
        }
        return obj;
    }

/**
     * Returns An array of strings representing the list of attachment paths used to generate the media JWT. One token will be generated for each path. Each token will be valid for 2 hours by default. This value can be modified, see [App Settings](#operation/createApp) for more information.
     * @return {Array.<String>}
     */
    getPaths() {
        return this.paths;
    }

    /**
     * Sets An array of strings representing the list of attachment paths used to generate the media JWT. One token will be generated for each path. Each token will be valid for 2 hours by default. This value can be modified, see [App Settings](#operation/createApp) for more information.
     * @param {Array.<String>} paths An array of strings representing the list of attachment paths used to generate the media JWT. One token will be generated for each path. Each token will be valid for 2 hours by default. This value can be modified, see [App Settings](#operation/createApp) for more information.
     */
    setPaths(paths) {
        this['paths'] = paths;
    }

}

/**
 * An array of strings representing the list of attachment paths used to generate the media JWT. One token will be generated for each path. Each token will be valid for 2 hours by default. This value can be modified, see [App Settings](#operation/createApp) for more information.
 * @member {Array.<String>} paths
 */
AttachmentMediaTokenBody.prototype['paths'] = undefined;






export default AttachmentMediaTokenBody;

