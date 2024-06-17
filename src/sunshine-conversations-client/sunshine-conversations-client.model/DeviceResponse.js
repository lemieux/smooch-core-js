/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.6.0
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
import Device from './Device';

/**
 * The DeviceResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/DeviceResponse
 * @version 12.6.0
 */
class DeviceResponse {
    /**
     * Constructs a new <code>DeviceResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/DeviceResponse
     */
    constructor() { 
        
        DeviceResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeviceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/DeviceResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/DeviceResponse} The populated <code>DeviceResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceResponse();

            if (data.hasOwnProperty('device')) {
                obj['device'] = ApiClient.convertToType(data['device'], Device);
            }
        }
        return obj;
    }

/**
     * Returns The device.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Device}
     */
    getDevice() {
        return this.device;
    }

    /**
     * Sets The device.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Device} device The device.
     */
    setDevice(device) {
        this['device'] = device;
    }

}

/**
 * The device.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Device} device
 */
DeviceResponse.prototype['device'] = undefined;






export default DeviceResponse;

