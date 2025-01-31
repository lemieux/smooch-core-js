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
import Status from './Status';

/**
 * The Integration model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Integration
 * @version 14.3.5
 */
class Integration {
    /**
     * Constructs a new <code>Integration</code>.
     * The integration.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @param type {String} 
     */
    constructor(type) { 
        
        Integration.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>Integration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Integration} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Integration} The populated <code>Integration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Integration();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = Status.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the integration.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The unique ID of the integration.
     * @param {String} id The unique ID of the integration.
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * @param {String} type
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Status}
     */
    getStatus() {
        return this.status;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Status} status
     */
    setStatus(status) {
        this['status'] = status;
    }
/**
     * Returns A human-friendly name used to identify the integration.
     * @return {String}
     */
    getDisplayName() {
        return this.displayName;
    }

    /**
     * Sets A human-friendly name used to identify the integration.
     * @param {String} displayName A human-friendly name used to identify the integration.
     */
    setDisplayName(displayName) {
        this['displayName'] = displayName;
    }

}

/**
 * The unique ID of the integration.
 * @member {String} id
 */
Integration.prototype['id'] = undefined;

/**
 * @member {String} type
 */
Integration.prototype['type'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Status} status
 */
Integration.prototype['status'] = undefined;

/**
 * A human-friendly name used to identify the integration.
 * @member {String} displayName
 */
Integration.prototype['displayName'] = undefined;






export default Integration;

