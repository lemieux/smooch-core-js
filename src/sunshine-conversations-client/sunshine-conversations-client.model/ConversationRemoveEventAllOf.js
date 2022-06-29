/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.8.0
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
import ConversationRemoveEventAllOfPayload from './ConversationRemoveEventAllOfPayload';

/**
 * The ConversationRemoveEventAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationRemoveEventAllOf
 * @version 9.8.0
 */
class ConversationRemoveEventAllOf {
    /**
     * Constructs a new <code>ConversationRemoveEventAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationRemoveEventAllOf
     */
    constructor() { 
        
        ConversationRemoveEventAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationRemoveEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationRemoveEventAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationRemoveEventAllOf} The populated <code>ConversationRemoveEventAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationRemoveEventAllOf();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ConversationRemoveEventAllOfPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationRemoveEventAllOfPayload}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationRemoveEventAllOfPayload} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationRemoveEventAllOfPayload} payload
 */
ConversationRemoveEventAllOf.prototype['payload'] = undefined;






export default ConversationRemoveEventAllOf;

