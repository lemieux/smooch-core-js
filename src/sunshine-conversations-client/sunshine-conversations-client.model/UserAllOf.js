/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.5.1
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
import Identity from './Identity';
import Profile from './Profile';

/**
 * The UserAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserAllOf
 * @version 12.5.1
 */
class UserAllOf {
    /**
     * Constructs a new <code>UserAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/UserAllOf
     */
    constructor() { 
        
        UserAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserAllOf} The populated <code>UserAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserAllOf();

            if (data.hasOwnProperty('signedUpAt')) {
                obj['signedUpAt'] = ApiClient.convertToType(data['signedUpAt'], 'String');
            }
            if (data.hasOwnProperty('profile')) {
                obj['profile'] = ApiClient.convertToType(data['profile'], Profile);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('identities')) {
                obj['identities'] = ApiClient.convertToType(data['identities'], [Identity]);
            }
        }
        return obj;
    }

/**
     * @return {String}
     */
    getSignedUpAt() {
        return this.signedUpAt;
    }

    /**
     * @param {String} signedUpAt
     */
    setSignedUpAt(signedUpAt) {
        this['signedUpAt'] = signedUpAt;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Profile}
     */
    getProfile() {
        return this.profile;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Profile} profile
     */
    setProfile(profile) {
        this['profile'] = profile;
    }
/**
     * @return {Object}
     */
    getMetadata() {
        return this.metadata;
    }

    /**
     * @param {Object} metadata
     */
    setMetadata(metadata) {
        this['metadata'] = metadata;
    }
/**
     * Returns The user's connected identities.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Identity>}
     */
    getIdentities() {
        return this.identities;
    }

    /**
     * Sets The user's connected identities.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Identity>} identities The user's connected identities.
     */
    setIdentities(identities) {
        this['identities'] = identities;
    }

}

/**
 * @member {String} signedUpAt
 */
UserAllOf.prototype['signedUpAt'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Profile} profile
 */
UserAllOf.prototype['profile'] = undefined;

/**
 * @member {Object} metadata
 */
UserAllOf.prototype['metadata'] = undefined;

/**
 * The user's connected identities.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Identity>} identities
 */
UserAllOf.prototype['identities'] = undefined;






export default UserAllOf;

