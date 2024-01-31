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
import SwitchboardAcceptControlAllOfPayload from './SwitchboardAcceptControlAllOfPayload';

/**
 * The SwitchboardAcceptControlAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlAllOf
 * @version 12.2.2
 */
class SwitchboardAcceptControlAllOf {
    /**
     * Constructs a new <code>SwitchboardAcceptControlAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlAllOf
     */
    constructor() { 
        
        SwitchboardAcceptControlAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SwitchboardAcceptControlAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlAllOf} The populated <code>SwitchboardAcceptControlAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SwitchboardAcceptControlAllOf();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = SwitchboardAcceptControlAllOfPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlAllOfPayload}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlAllOfPayload} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlAllOfPayload} payload
 */
SwitchboardAcceptControlAllOf.prototype['payload'] = undefined;






export default SwitchboardAcceptControlAllOf;

