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
import ParticipantSubSchema from './ParticipantSubSchema';

/**
 * The ParticipantJoinBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ParticipantJoinBody
 * @version 9.7.1
 */
class ParticipantJoinBody {
    /**
     * Constructs a new <code>ParticipantJoinBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantJoinBody
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantSubSchema
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantSubSchema
     */
    constructor() { 
        ParticipantSubSchema.initialize(this);
        ParticipantJoinBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParticipantJoinBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantJoinBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantJoinBody} The populated <code>ParticipantJoinBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParticipantJoinBody();
            ParticipantSubSchema.constructFromObject(data, obj);
            ParticipantSubSchema.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement ParticipantSubSchema interface:
/**
 * The id of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
 * @member {String} userId
 */
ParticipantSubSchema.prototype['userId'] = undefined;
/**
 * When passed as true, the SDK client of the concerned participant will be subscribed to the conversation. The user will start receiving push notifications for this conversation right away, without having to view the conversation on the SDK beforehand. An SDK client will be created for users that don’t already have one. This field is required if the conversation is of type `sdkGroup`.
 * @member {Boolean} subscribeSDKClient
 */
ParticipantSubSchema.prototype['subscribeSDKClient'] = undefined;
/**
 * The `externalId` of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
 * @member {String} userExternalId
 */
ParticipantSubSchema.prototype['userExternalId'] = undefined;




export default ParticipantJoinBody;

