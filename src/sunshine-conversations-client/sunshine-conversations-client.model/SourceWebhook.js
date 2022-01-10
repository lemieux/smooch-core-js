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
import Client from './Client';
import Device from './Device';

/**
 * The SourceWebhook model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook
 * @version 9.5.9
 */
class SourceWebhook {
    /**
     * Constructs a new <code>SourceWebhook</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook
     */
    constructor() { 
        
        SourceWebhook.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SourceWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook} The populated <code>SourceWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SourceWebhook();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('originalMessageId')) {
                obj['originalMessageId'] = ApiClient.convertToType(data['originalMessageId'], 'String');
            }
            if (data.hasOwnProperty('originalMessageTimestamp')) {
                obj['originalMessageTimestamp'] = ApiClient.convertToType(data['originalMessageTimestamp'], 'String');
            }
            if (data.hasOwnProperty('client')) {
                obj['client'] = ApiClient.convertToType(data['client'], Client);
            }
            if (data.hasOwnProperty('device')) {
                obj['device'] = ApiClient.convertToType(data['device'], Device);
            }
        }
        return obj;
    }

/**
     * Returns An identifier for the channel from which a message originated. May include one of api, sdk, messenger, or any number of other channels.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets An identifier for the channel from which a message originated. May include one of api, sdk, messenger, or any number of other channels.
     * @param {String} type An identifier for the channel from which a message originated. May include one of api, sdk, messenger, or any number of other channels.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns Identifier indicating which integration the message was sent from. For user messages only.
     * @return {String}
     */
    getIntegrationId() {
        return this.integrationId;
    }

    /**
     * Sets Identifier indicating which integration the message was sent from. For user messages only.
     * @param {String} integrationId Identifier indicating which integration the message was sent from. For user messages only.
     */
    setIntegrationId(integrationId) {
        this['integrationId'] = integrationId;
    }
/**
     * Returns Message identifier assigned by the originating channel.
     * @return {String}
     */
    getOriginalMessageId() {
        return this.originalMessageId;
    }

    /**
     * Sets Message identifier assigned by the originating channel.
     * @param {String} originalMessageId Message identifier assigned by the originating channel.
     */
    setOriginalMessageId(originalMessageId) {
        this['originalMessageId'] = originalMessageId;
    }
/**
     * Returns A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing when the third-party channel received the message.
     * @return {String}
     */
    getOriginalMessageTimestamp() {
        return this.originalMessageTimestamp;
    }

    /**
     * Sets A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing when the third-party channel received the message.
     * @param {String} originalMessageTimestamp A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing when the third-party channel received the message.
     */
    setOriginalMessageTimestamp(originalMessageTimestamp) {
        this['originalMessageTimestamp'] = originalMessageTimestamp;
    }
/**
     * Returns The client from which the user authored the message or activity, if applicable. This field will only be present if the `includeFullSource` option is enabled for the webhook.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Client}
     */
    getClient() {
        return this.client;
    }

    /**
     * Sets The client from which the user authored the message or activity, if applicable. This field will only be present if the `includeFullSource` option is enabled for the webhook.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} client The client from which the user authored the message or activity, if applicable. This field will only be present if the `includeFullSource` option is enabled for the webhook.
     */
    setClient(client) {
        this['client'] = client;
    }
/**
     * Returns The device from which the user authored the message or activity, if applicable. This field will only be present if the `includeFullSource` option is enabled for the webhook
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Device}
     */
    getDevice() {
        return this.device;
    }

    /**
     * Sets The device from which the user authored the message or activity, if applicable. This field will only be present if the `includeFullSource` option is enabled for the webhook
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Device} device The device from which the user authored the message or activity, if applicable. This field will only be present if the `includeFullSource` option is enabled for the webhook
     */
    setDevice(device) {
        this['device'] = device;
    }

}

/**
 * An identifier for the channel from which a message originated. May include one of api, sdk, messenger, or any number of other channels.
 * @member {String} type
 */
SourceWebhook.prototype['type'] = undefined;

/**
 * Identifier indicating which integration the message was sent from. For user messages only.
 * @member {String} integrationId
 */
SourceWebhook.prototype['integrationId'] = undefined;

/**
 * Message identifier assigned by the originating channel.
 * @member {String} originalMessageId
 */
SourceWebhook.prototype['originalMessageId'] = undefined;

/**
 * A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing when the third-party channel received the message.
 * @member {String} originalMessageTimestamp
 */
SourceWebhook.prototype['originalMessageTimestamp'] = undefined;

/**
 * The client from which the user authored the message or activity, if applicable. This field will only be present if the `includeFullSource` option is enabled for the webhook.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} client
 */
SourceWebhook.prototype['client'] = undefined;

/**
 * The device from which the user authored the message or activity, if applicable. This field will only be present if the `includeFullSource` option is enabled for the webhook
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Device} device
 */
SourceWebhook.prototype['device'] = undefined;






export default SourceWebhook;

