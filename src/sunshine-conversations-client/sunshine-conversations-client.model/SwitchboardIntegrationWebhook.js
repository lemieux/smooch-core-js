/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.12.0
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
 * The SwitchboardIntegrationWebhook model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook
 * @version 9.12.0
 */
class SwitchboardIntegrationWebhook {
    /**
     * Constructs a new <code>SwitchboardIntegrationWebhook</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook
     */
    constructor() { 
        
        SwitchboardIntegrationWebhook.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SwitchboardIntegrationWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook} The populated <code>SwitchboardIntegrationWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SwitchboardIntegrationWebhook();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('integrationType')) {
                obj['integrationType'] = ApiClient.convertToType(data['integrationType'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the switchboard integration.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The unique ID of the switchboard integration.
     * @param {String} id The unique ID of the switchboard integration.
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * Returns Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
     * @param {String} name Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * Returns Id of the integration that should deliver events routed by the switchboard.
     * @return {String}
     */
    getIntegrationId() {
        return this.integrationId;
    }

    /**
     * Sets Id of the integration that should deliver events routed by the switchboard.
     * @param {String} integrationId Id of the integration that should deliver events routed by the switchboard.
     */
    setIntegrationId(integrationId) {
        this['integrationId'] = integrationId;
    }
/**
     * Returns Type of integration that should deliver events routed by the switchboard. If referencing an OAuth integration, the clientId issued by Sunshine Conversations during the OAuth partnership process will be the value of integrationType.
     * @return {String}
     */
    getIntegrationType() {
        return this.integrationType;
    }

    /**
     * Sets Type of integration that should deliver events routed by the switchboard. If referencing an OAuth integration, the clientId issued by Sunshine Conversations during the OAuth partnership process will be the value of integrationType.
     * @param {String} integrationType Type of integration that should deliver events routed by the switchboard. If referencing an OAuth integration, the clientId issued by Sunshine Conversations during the OAuth partnership process will be the value of integrationType.
     */
    setIntegrationType(integrationType) {
        this['integrationType'] = integrationType;
    }

}

/**
 * The unique ID of the switchboard integration.
 * @member {String} id
 */
SwitchboardIntegrationWebhook.prototype['id'] = undefined;

/**
 * Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
 * @member {String} name
 */
SwitchboardIntegrationWebhook.prototype['name'] = undefined;

/**
 * Id of the integration that should deliver events routed by the switchboard.
 * @member {String} integrationId
 */
SwitchboardIntegrationWebhook.prototype['integrationId'] = undefined;

/**
 * Type of integration that should deliver events routed by the switchboard. If referencing an OAuth integration, the clientId issued by Sunshine Conversations during the OAuth partnership process will be the value of integrationType.
 * @member {String} integrationType
 */
SwitchboardIntegrationWebhook.prototype['integrationType'] = undefined;






export default SwitchboardIntegrationWebhook;

