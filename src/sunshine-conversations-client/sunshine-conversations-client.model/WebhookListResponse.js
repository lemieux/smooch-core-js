/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 11.0.0
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
import Webhook from './Webhook';

/**
 * The WebhookListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/WebhookListResponse
 * @version 11.0.0
 */
class WebhookListResponse {
    /**
     * Constructs a new <code>WebhookListResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookListResponse
     */
    constructor() { 
        
        WebhookListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookListResponse} The populated <code>WebhookListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookListResponse();

            if (data.hasOwnProperty('webhooks')) {
                obj['webhooks'] = ApiClient.convertToType(data['webhooks'], [Webhook]);
            }
        }
        return obj;
    }

/**
     * Returns List of webhooks associated with the integration.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook>}
     */
    getWebhooks() {
        return this.webhooks;
    }

    /**
     * Sets List of webhooks associated with the integration.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook>} webhooks List of webhooks associated with the integration.
     */
    setWebhooks(webhooks) {
        this['webhooks'] = webhooks;
    }

}

/**
 * List of webhooks associated with the integration.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook>} webhooks
 */
WebhookListResponse.prototype['webhooks'] = undefined;






export default WebhookListResponse;

