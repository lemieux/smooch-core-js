/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.7.0
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

/**
 * The UserTruncated model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated
 * @version 9.7.1
 */
class UserTruncated {
    /**
     * Constructs a new <code>UserTruncated</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated
     */
    constructor() { 
        
        UserTruncated.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserTruncated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated} The populated <code>UserTruncated</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserTruncated();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the user.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The unique ID of the user.
     * @param {String} id The unique ID of the user.
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * Returns An optional ID that can also be used to retrieve the user. 
     * @return {String}
     */
    getExternalId() {
        return this.externalId;
    }

    /**
     * Sets An optional ID that can also be used to retrieve the user. 
     * @param {String} externalId An optional ID that can also be used to retrieve the user. 
     */
    setExternalId(externalId) {
        this['externalId'] = externalId;
    }

}

/**
 * The unique ID of the user.
 * @member {String} id
 */
UserTruncated.prototype['id'] = undefined;

/**
 * An optional ID that can also be used to retrieve the user. 
 * @member {String} externalId
 */
UserTruncated.prototype['externalId'] = undefined;






export default UserTruncated;

