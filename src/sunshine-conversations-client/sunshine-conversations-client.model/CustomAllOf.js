/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.6.0
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
 * The CustomAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/CustomAllOf
 * @version 9.6.0
 */
class CustomAllOf {
    /**
     * Constructs a new <code>CustomAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/CustomAllOf
     * @param webhooks {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook>} An array of webhooks associated with the custom integration.
     */
    constructor(webhooks) { 
        
        CustomAllOf.initialize(this, webhooks);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, webhooks) { 
        obj['webhooks'] = webhooks;
    }

    /**
     * Constructs a <code>CustomAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/CustomAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/CustomAllOf} The populated <code>CustomAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomAllOf();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('webhooks')) {
                obj['webhooks'] = ApiClient.convertToType(data['webhooks'], [Webhook]);
            }
        }
        return obj;
    }

/**
     * Returns To configure a custom integration you need to setup a webhook with a set of triggers and target. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets To configure a custom integration you need to setup a webhook with a set of triggers and target. 
     * @param {String} type To configure a custom integration you need to setup a webhook with a set of triggers and target. 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns An array of webhooks associated with the custom integration.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook>}
     */
    getWebhooks() {
        return this.webhooks;
    }

    /**
     * Sets An array of webhooks associated with the custom integration.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook>} webhooks An array of webhooks associated with the custom integration.
     */
    setWebhooks(webhooks) {
        this['webhooks'] = webhooks;
    }

}

/**
 * To configure a custom integration you need to setup a webhook with a set of triggers and target. 
 * @member {String} type
 * @default 'custom'
 */
CustomAllOf.prototype['type'] = 'custom';

/**
 * An array of webhooks associated with the custom integration.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook>} webhooks
 */
CustomAllOf.prototype['webhooks'] = undefined;






export default CustomAllOf;

