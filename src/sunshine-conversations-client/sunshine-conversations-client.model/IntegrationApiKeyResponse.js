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
import ApiKey from './ApiKey';

/**
 * The IntegrationApiKeyResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse
 * @version 12.6.0
 */
class IntegrationApiKeyResponse {
    /**
     * Constructs a new <code>IntegrationApiKeyResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse
     */
    constructor() { 
        
        IntegrationApiKeyResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IntegrationApiKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse} The populated <code>IntegrationApiKeyResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationApiKeyResponse();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiKey.constructFromObject(data['key']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ApiKey}
     */
    getKey() {
        return this.key;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ApiKey} key
     */
    setKey(key) {
        this['key'] = key;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ApiKey} key
 */
IntegrationApiKeyResponse.prototype['key'] = undefined;






export default IntegrationApiKeyResponse;

