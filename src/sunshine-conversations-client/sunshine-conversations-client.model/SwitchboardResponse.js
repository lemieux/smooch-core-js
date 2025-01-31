/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.3.5
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
import Switchboard from './Switchboard';

/**
 * The SwitchboardResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardResponse
 * @version 14.3.5
 */
class SwitchboardResponse {
    /**
     * Constructs a new <code>SwitchboardResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardResponse
     */
    constructor() { 
        
        SwitchboardResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SwitchboardResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardResponse} The populated <code>SwitchboardResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SwitchboardResponse();

            if (data.hasOwnProperty('switchboard')) {
                obj['switchboard'] = ApiClient.convertToType(data['switchboard'], Switchboard);
            }
        }
        return obj;
    }

/**
     * Returns The switchboard.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Switchboard}
     */
    getSwitchboard() {
        return this.switchboard;
    }

    /**
     * Sets The switchboard.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Switchboard} switchboard The switchboard.
     */
    setSwitchboard(switchboard) {
        this['switchboard'] = switchboard;
    }

}

/**
 * The switchboard.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Switchboard} switchboard
 */
SwitchboardResponse.prototype['switchboard'] = undefined;






export default SwitchboardResponse;

