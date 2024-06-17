/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.6.0
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
 * The AcceptControlBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AcceptControlBody
 * @version 12.6.0
 */
class AcceptControlBody {
    /**
     * Constructs a new <code>AcceptControlBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AcceptControlBody
     */
    constructor() { 
        
        AcceptControlBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AcceptControlBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AcceptControlBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AcceptControlBody} The populated <code>AcceptControlBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AcceptControlBody();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

/**
     * Returns Flat object containing custom properties. Strings, numbers and booleans are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. The metadata object will be included in the `switchboard:acceptControl` and `switchboard:acceptControl:failure` webhooks.
     * @return {Object}
     */
    getMetadata() {
        return this.metadata;
    }

    /**
     * Sets Flat object containing custom properties. Strings, numbers and booleans are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. The metadata object will be included in the `switchboard:acceptControl` and `switchboard:acceptControl:failure` webhooks.
     * @param {Object} metadata Flat object containing custom properties. Strings, numbers and booleans are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. The metadata object will be included in the `switchboard:acceptControl` and `switchboard:acceptControl:failure` webhooks.
     */
    setMetadata(metadata) {
        this['metadata'] = metadata;
    }

}

/**
 * Flat object containing custom properties. Strings, numbers and booleans are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. The metadata object will be included in the `switchboard:acceptControl` and `switchboard:acceptControl:failure` webhooks.
 * @member {Object} metadata
 */
AcceptControlBody.prototype['metadata'] = undefined;






export default AcceptControlBody;

