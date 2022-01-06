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
import ReferralDetails from './ReferralDetails';

/**
 * The Referral model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Referral
 * @version 9.5.8
 */
class Referral {
    /**
     * Constructs a new <code>Referral</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Referral
     */
    constructor() { 
        
        Referral.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Referral</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Referral} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Referral} The populated <code>Referral</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Referral();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ReferralDetails.constructFromObject(data['details']);
            }
        }
        return obj;
    }

/**
     * Returns The referral’s identifier.
     * @return {String}
     */
    getCode() {
        return this.code;
    }

    /**
     * Sets The referral’s identifier.
     * @param {String} code The referral’s identifier.
     */
    setCode(code) {
        this['code'] = code;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ReferralDetails}
     */
    getDetails() {
        return this.details;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ReferralDetails} details
     */
    setDetails(details) {
        this['details'] = details;
    }

}

/**
 * The referral’s identifier.
 * @member {String} code
 */
Referral.prototype['code'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ReferralDetails} details
 */
Referral.prototype['details'] = undefined;






export default Referral;

