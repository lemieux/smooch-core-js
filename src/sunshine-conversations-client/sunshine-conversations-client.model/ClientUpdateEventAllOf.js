/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.2.2
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
import ClientUpdateEventAllOfPayload from './ClientUpdateEventAllOfPayload';

/**
 * The ClientUpdateEventAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ClientUpdateEventAllOf
 * @version 12.2.2
 */
class ClientUpdateEventAllOf {
    /**
     * Constructs a new <code>ClientUpdateEventAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ClientUpdateEventAllOf
     */
    constructor() { 
        
        ClientUpdateEventAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClientUpdateEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientUpdateEventAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientUpdateEventAllOf} The populated <code>ClientUpdateEventAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientUpdateEventAllOf();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ClientUpdateEventAllOfPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientUpdateEventAllOfPayload}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientUpdateEventAllOfPayload} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientUpdateEventAllOfPayload} payload
 */
ClientUpdateEventAllOf.prototype['payload'] = undefined;






export default ClientUpdateEventAllOf;

