/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.0.0
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
 * The Identity model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Identity
 * @version 14.0.0
 */
class Identity {
    /**
     * Constructs a new <code>Identity</code>.
     * A connected user identity, such as an email.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Identity
     */
    constructor() { 
        
        Identity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Identity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Identity} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Identity} The populated <code>Identity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Identity();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('verification')) {
                obj['verification'] = ApiClient.convertToType(data['verification'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The type of identity.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of identity.
     * @param {String} type The type of identity.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The identity value.
     * @return {String}
     */
    getValue() {
        return this.value;
    }

    /**
     * Sets The identity value.
     * @param {String} value The identity value.
     */
    setValue(value) {
        this['value'] = value;
    }
/**
     * Returns The type of verification performed on the identity.
     * @return {String}
     */
    getVerification() {
        return this.verification;
    }

    /**
     * Sets The type of verification performed on the identity.
     * @param {String} verification The type of verification performed on the identity.
     */
    setVerification(verification) {
        this['verification'] = verification;
    }

}

/**
 * The type of identity.
 * @member {String} type
 */
Identity.prototype['type'] = undefined;

/**
 * The identity value.
 * @member {String} value
 */
Identity.prototype['value'] = undefined;

/**
 * The type of verification performed on the identity.
 * @member {String} verification
 */
Identity.prototype['verification'] = undefined;






export default Identity;

