/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.3.5
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
import ApiKey from './ApiKey';

/**
 * The IntegrationApiKeyListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyListResponse
 * @version 14.3.5
 */
class IntegrationApiKeyListResponse {
    /**
     * Constructs a new <code>IntegrationApiKeyListResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyListResponse
     */
    constructor() { 
        
        IntegrationApiKeyListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IntegrationApiKeyListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyListResponse} The populated <code>IntegrationApiKeyListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationApiKeyListResponse();

            if (data.hasOwnProperty('keys')) {
                obj['keys'] = ApiClient.convertToType(data['keys'], [ApiKey]);
            }
        }
        return obj;
    }

/**
     * Returns Integration keys of the supplied integration.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ApiKey>}
     */
    getKeys() {
        return this.keys;
    }

    /**
     * Sets Integration keys of the supplied integration.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ApiKey>} keys Integration keys of the supplied integration.
     */
    setKeys(keys) {
        this['keys'] = keys;
    }

}

/**
 * Integration keys of the supplied integration.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ApiKey>} keys
 */
IntegrationApiKeyListResponse.prototype['keys'] = undefined;






export default IntegrationApiKeyListResponse;

