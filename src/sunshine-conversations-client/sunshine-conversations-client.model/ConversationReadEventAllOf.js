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
import ConversationReadEventAllOfPayload from './ConversationReadEventAllOfPayload';

/**
 * The ConversationReadEventAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationReadEventAllOf
 * @version 14.3.4
 */
class ConversationReadEventAllOf {
    /**
     * Constructs a new <code>ConversationReadEventAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationReadEventAllOf
     */
    constructor() { 
        
        ConversationReadEventAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationReadEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationReadEventAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationReadEventAllOf} The populated <code>ConversationReadEventAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationReadEventAllOf();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ConversationReadEventAllOfPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationReadEventAllOfPayload}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationReadEventAllOfPayload} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationReadEventAllOfPayload} payload
 */
ConversationReadEventAllOf.prototype['payload'] = undefined;






export default ConversationReadEventAllOf;

