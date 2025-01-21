/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.3.4
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
 * The ParticipantWithUserExternalId model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ParticipantWithUserExternalId
 * @version 14.3.4
 */
class ParticipantWithUserExternalId {
    /**
     * Constructs a new <code>ParticipantWithUserExternalId</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantWithUserExternalId
     */
    constructor() { 
        
        ParticipantWithUserExternalId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParticipantWithUserExternalId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantWithUserExternalId} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantWithUserExternalId} The populated <code>ParticipantWithUserExternalId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParticipantWithUserExternalId();

            if (data.hasOwnProperty('userExternalId')) {
                obj['userExternalId'] = ApiClient.convertToType(data['userExternalId'], 'String');
            }
            if (data.hasOwnProperty('subscribeSDKClient')) {
                obj['subscribeSDKClient'] = ApiClient.convertToType(data['subscribeSDKClient'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The `externalId` of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
     * @return {String}
     */
    getUserExternalId() {
        return this.userExternalId;
    }

    /**
     * Sets The `externalId` of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
     * @param {String} userExternalId The `externalId` of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
     */
    setUserExternalId(userExternalId) {
        this['userExternalId'] = userExternalId;
    }
/**
     * Returns When passed as true, the SDK client of the concerned participant will be subscribed to the conversation. The user will start receiving push notifications for this conversation right away, without having to view the conversation on the SDK beforehand. An SDK client will be created for users that don’t already have one. This field is required if the conversation is of type `sdkGroup`.
     * @return {Boolean}
     */
    getSubscribeSDKClient() {
        return this.subscribeSDKClient;
    }

    /**
     * Sets When passed as true, the SDK client of the concerned participant will be subscribed to the conversation. The user will start receiving push notifications for this conversation right away, without having to view the conversation on the SDK beforehand. An SDK client will be created for users that don’t already have one. This field is required if the conversation is of type `sdkGroup`.
     * @param {Boolean} subscribeSDKClient When passed as true, the SDK client of the concerned participant will be subscribed to the conversation. The user will start receiving push notifications for this conversation right away, without having to view the conversation on the SDK beforehand. An SDK client will be created for users that don’t already have one. This field is required if the conversation is of type `sdkGroup`.
     */
    setSubscribeSDKClient(subscribeSDKClient) {
        this['subscribeSDKClient'] = subscribeSDKClient;
    }

}

/**
 * The `externalId` of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
 * @member {String} userExternalId
 */
ParticipantWithUserExternalId.prototype['userExternalId'] = undefined;

/**
 * When passed as true, the SDK client of the concerned participant will be subscribed to the conversation. The user will start receiving push notifications for this conversation right away, without having to view the conversation on the SDK beforehand. An SDK client will be created for users that don’t already have one. This field is required if the conversation is of type `sdkGroup`.
 * @member {Boolean} subscribeSDKClient
 */
ParticipantWithUserExternalId.prototype['subscribeSDKClient'] = undefined;






export default ParticipantWithUserExternalId;

