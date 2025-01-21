/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.3.4
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
 * The AppleUpdateAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppleUpdateAllOf
 * @version 14.3.4
 */
class AppleUpdateAllOf {
    /**
     * Constructs a new <code>AppleUpdateAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AppleUpdateAllOf
     */
    constructor() { 
        
        AppleUpdateAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppleUpdateAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppleUpdateAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppleUpdateAllOf} The populated <code>AppleUpdateAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppleUpdateAllOf();

            if (data.hasOwnProperty('authenticationMessageSecret')) {
                obj['authenticationMessageSecret'] = ApiClient.convertToType(data['authenticationMessageSecret'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns A secret used to create the state value when sending Apple authentication 2.0 messages
     * @return {String}
     */
    getAuthenticationMessageSecret() {
        return this.authenticationMessageSecret;
    }

    /**
     * Sets A secret used to create the state value when sending Apple authentication 2.0 messages
     * @param {String} authenticationMessageSecret A secret used to create the state value when sending Apple authentication 2.0 messages
     */
    setAuthenticationMessageSecret(authenticationMessageSecret) {
        this['authenticationMessageSecret'] = authenticationMessageSecret;
    }

}

/**
 * A secret used to create the state value when sending Apple authentication 2.0 messages
 * @member {String} authenticationMessageSecret
 */
AppleUpdateAllOf.prototype['authenticationMessageSecret'] = undefined;






export default AppleUpdateAllOf;

