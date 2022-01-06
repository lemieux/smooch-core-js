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
import ConversationPostbackEventAllOfPayload from './ConversationPostbackEventAllOfPayload';

/**
 * The ConversationPostbackEventAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOf
 * @version 9.5.8
 */
class ConversationPostbackEventAllOf {
    /**
     * Constructs a new <code>ConversationPostbackEventAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOf
     */
    constructor() { 
        
        ConversationPostbackEventAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationPostbackEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOf} The populated <code>ConversationPostbackEventAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationPostbackEventAllOf();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ConversationPostbackEventAllOfPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOfPayload}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOfPayload} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOfPayload} payload
 */
ConversationPostbackEventAllOf.prototype['payload'] = undefined;






export default ConversationPostbackEventAllOf;

