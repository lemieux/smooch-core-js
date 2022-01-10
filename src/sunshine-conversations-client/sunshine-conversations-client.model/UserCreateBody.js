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
import Profile from './Profile';

/**
 * The UserCreateBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserCreateBody
 * @version 9.5.9
 */
class UserCreateBody {
    /**
     * Constructs a new <code>UserCreateBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/UserCreateBody
     * @param externalId {String} A unique identifier for the user. The `externalId` can be used to link a user to the same conversation [across multiple devices](https://docs.smooch.io/guide/authenticating-users/). 
     */
    constructor(externalId) { 
        
        UserCreateBody.initialize(this, externalId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, externalId) { 
        obj['externalId'] = externalId;
    }

    /**
     * Constructs a <code>UserCreateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserCreateBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserCreateBody} The populated <code>UserCreateBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserCreateBody();

            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('signedUpAt')) {
                obj['signedUpAt'] = ApiClient.convertToType(data['signedUpAt'], 'String');
            }
            if (data.hasOwnProperty('profile')) {
                obj['profile'] = Profile.constructFromObject(data['profile']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

/**
     * Returns A unique identifier for the user. The `externalId` can be used to link a user to the same conversation [across multiple devices](https://docs.smooch.io/guide/authenticating-users/). 
     * @return {String}
     */
    getExternalId() {
        return this.externalId;
    }

    /**
     * Sets A unique identifier for the user. The `externalId` can be used to link a user to the same conversation [across multiple devices](https://docs.smooch.io/guide/authenticating-users/). 
     * @param {String} externalId A unique identifier for the user. The `externalId` can be used to link a user to the same conversation [across multiple devices](https://docs.smooch.io/guide/authenticating-users/). 
     */
    setExternalId(externalId) {
        this['externalId'] = externalId;
    }
/**
     * Returns The date at which the user signed up. Must be ISO 8601 time format `YYYY-MM-DDThh:mm:ss.sssZ`.
     * @return {String}
     */
    getSignedUpAt() {
        return this.signedUpAt;
    }

    /**
     * Sets The date at which the user signed up. Must be ISO 8601 time format `YYYY-MM-DDThh:mm:ss.sssZ`.
     * @param {String} signedUpAt The date at which the user signed up. Must be ISO 8601 time format `YYYY-MM-DDThh:mm:ss.sssZ`.
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
     * Returns Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @return {Object}
     */
    getMetadata() {
        return this.metadata;
    }

    /**
     * Sets Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @param {Object} metadata Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     */
    setMetadata(metadata) {
        this['metadata'] = metadata;
    }

}

/**
 * A unique identifier for the user. The `externalId` can be used to link a user to the same conversation [across multiple devices](https://docs.smooch.io/guide/authenticating-users/). 
 * @member {String} externalId
 */
UserCreateBody.prototype['externalId'] = undefined;

/**
 * The date at which the user signed up. Must be ISO 8601 time format `YYYY-MM-DDThh:mm:ss.sssZ`.
 * @member {String} signedUpAt
 */
UserCreateBody.prototype['signedUpAt'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Profile} profile
 */
UserCreateBody.prototype['profile'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
UserCreateBody.prototype['metadata'] = undefined;






export default UserCreateBody;

