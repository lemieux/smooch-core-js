/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.6.2
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
import IntegrationId from './IntegrationId';
import IntegrationType from './IntegrationType';

/**
 * The Destination model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Destination
 * @version 12.6.2
 */
class Destination {
    /**
     * Constructs a new <code>Destination</code>.
     * The destination of the message, in the case of [channel targeting](https://docs.smooch.io/guide/sending-messages/#targeting-a-specific-channel) or sending [silent messages](https://docs.smooch.io/guide/sending-messages/#silent-messages). Only applicable if the author role is &#x60;business&#x60; and the conversation is of type &#x60;personal&#x60;. 
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Destination
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationId
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationType
     */
    constructor() { 
        IntegrationId.initialize(this);IntegrationType.initialize(this);
        Destination.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Destination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Destination} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Destination} The populated <code>Destination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Destination();
            IntegrationId.constructFromObject(data, obj);
            IntegrationType.constructFromObject(data, obj);

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
     * Returns The id of the integration to deliver the message to. Will return an error if the integration does not exist or if the user does not have a client for the integration attached to the conversation. 
     * @return {String}
     */
    getIntegrationId() {
        return this.integrationId;
    }

    /**
     * Sets The id of the integration to deliver the message to. Will return an error if the integration does not exist or if the user does not have a client for the integration attached to the conversation. 
     * @param {String} integrationId The id of the integration to deliver the message to. Will return an error if the integration does not exist or if the user does not have a client for the integration attached to the conversation. 
     */
    setIntegrationId(integrationId) {
        this['integrationId'] = integrationId;
    }
/**
     * Returns The type of the integration to deliver the message to. Can be set to `none` if sending a [silent message](https://docs.smooch.io/guide/sending-messages/#silent-messages). Will return an error if the user does not have a client of that type attached to the conversation. 
     * @return {String}
     */
    getIntegrationType() {
        return this.integrationType;
    }

    /**
     * Sets The type of the integration to deliver the message to. Can be set to `none` if sending a [silent message](https://docs.smooch.io/guide/sending-messages/#silent-messages). Will return an error if the user does not have a client of that type attached to the conversation. 
     * @param {String} integrationType The type of the integration to deliver the message to. Can be set to `none` if sending a [silent message](https://docs.smooch.io/guide/sending-messages/#silent-messages). Will return an error if the user does not have a client of that type attached to the conversation. 
     */
    setIntegrationType(integrationType) {
        this['integrationType'] = integrationType;
    }

}

/**
 * The id of the integration to deliver the message to. Will return an error if the integration does not exist or if the user does not have a client for the integration attached to the conversation. 
 * @member {String} integrationId
 */
Destination.prototype['integrationId'] = undefined;

/**
 * The type of the integration to deliver the message to. Can be set to `none` if sending a [silent message](https://docs.smooch.io/guide/sending-messages/#silent-messages). Will return an error if the user does not have a client of that type attached to the conversation. 
 * @member {String} integrationType
 */
Destination.prototype['integrationType'] = undefined;


// Implement IntegrationId interface:
/**
 * The id of the integration to deliver the message to. Will return an error if the integration does not exist or if the user does not have a client for the integration attached to the conversation. 
 * @member {String} integrationId
 */
IntegrationId.prototype['integrationId'] = undefined;
// Implement IntegrationType interface:
/**
 * The type of the integration to deliver the message to. Can be set to `none` if sending a [silent message](https://docs.smooch.io/guide/sending-messages/#silent-messages). Will return an error if the user does not have a client of that type attached to the conversation. 
 * @member {String} integrationType
 */
IntegrationType.prototype['integrationType'] = undefined;




export default Destination;

