/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.8.0
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
 * The ParticipantWithUserId model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ParticipantWithUserId
 * @version 9.8.0
 */
class ParticipantWithUserId {
    /**
     * Constructs a new <code>ParticipantWithUserId</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantWithUserId
     */
    constructor() { 
        
        ParticipantWithUserId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParticipantWithUserId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantWithUserId} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantWithUserId} The populated <code>ParticipantWithUserId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParticipantWithUserId();

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('subscribeSDKClient')) {
                obj['subscribeSDKClient'] = ApiClient.convertToType(data['subscribeSDKClient'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The id of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
     * @return {String}
     */
    getUserId() {
        return this.userId;
    }

    /**
     * Sets The id of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
     * @param {String} userId The id of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
     */
    setUserId(userId) {
        this['userId'] = userId;
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
 * The id of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
 * @member {String} userId
 */
ParticipantWithUserId.prototype['userId'] = undefined;

/**
 * When passed as true, the SDK client of the concerned participant will be subscribed to the conversation. The user will start receiving push notifications for this conversation right away, without having to view the conversation on the SDK beforehand. An SDK client will be created for users that don’t already have one. This field is required if the conversation is of type `sdkGroup`.
 * @member {Boolean} subscribeSDKClient
 */
ParticipantWithUserId.prototype['subscribeSDKClient'] = undefined;






export default ParticipantWithUserId;

