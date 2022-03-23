/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.6.0
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
import ParticipantLeaveBodyParticipantId from './ParticipantLeaveBodyParticipantId';
import ParticipantLeaveBodyUserExternalId from './ParticipantLeaveBodyUserExternalId';
import ParticipantLeaveBodyUserId from './ParticipantLeaveBodyUserId';

/**
 * The ParticipantLeaveBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBody
 * @version 9.6.0
 */
class ParticipantLeaveBody {
    /**
     * Constructs a new <code>ParticipantLeaveBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBody
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyUserId
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyUserExternalId
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyParticipantId
     */
    constructor() { 
        ParticipantLeaveBodyUserId.initialize(this);ParticipantLeaveBodyUserExternalId.initialize(this);ParticipantLeaveBodyParticipantId.initialize(this);
        ParticipantLeaveBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParticipantLeaveBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBody} The populated <code>ParticipantLeaveBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParticipantLeaveBody();
            ParticipantLeaveBodyUserId.constructFromObject(data, obj);
            ParticipantLeaveBodyUserExternalId.constructFromObject(data, obj);
            ParticipantLeaveBodyParticipantId.constructFromObject(data, obj);

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('userExternalId')) {
                obj['userExternalId'] = ApiClient.convertToType(data['userExternalId'], 'String');
            }
            if (data.hasOwnProperty('participantId')) {
                obj['participantId'] = ApiClient.convertToType(data['participantId'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The id of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
     * @return {String}
     */
    getUserId() {
        return this.userId;
    }

    /**
     * Sets The id of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
     * @param {String} userId The id of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
     */
    setUserId(userId) {
        this['userId'] = userId;
    }
/**
     * Returns The externalId of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
     * @return {String}
     */
    getUserExternalId() {
        return this.userExternalId;
    }

    /**
     * Sets The externalId of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
     * @param {String} userExternalId The externalId of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
     */
    setUserExternalId(userExternalId) {
        this['userExternalId'] = userExternalId;
    }
/**
     * Returns The participantId of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
     * @return {String}
     */
    getParticipantId() {
        return this.participantId;
    }

    /**
     * Sets The participantId of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
     * @param {String} participantId The participantId of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
     */
    setParticipantId(participantId) {
        this['participantId'] = participantId;
    }

}

/**
 * The id of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
 * @member {String} userId
 */
ParticipantLeaveBody.prototype['userId'] = undefined;

/**
 * The externalId of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
 * @member {String} userExternalId
 */
ParticipantLeaveBody.prototype['userExternalId'] = undefined;

/**
 * The participantId of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
 * @member {String} participantId
 */
ParticipantLeaveBody.prototype['participantId'] = undefined;


// Implement ParticipantLeaveBodyUserId interface:
/**
 * The id of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
 * @member {String} userId
 */
ParticipantLeaveBodyUserId.prototype['userId'] = undefined;
// Implement ParticipantLeaveBodyUserExternalId interface:
/**
 * The externalId of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
 * @member {String} userExternalId
 */
ParticipantLeaveBodyUserExternalId.prototype['userExternalId'] = undefined;
// Implement ParticipantLeaveBodyParticipantId interface:
/**
 * The participantId of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
 * @member {String} participantId
 */
ParticipantLeaveBodyParticipantId.prototype['participantId'] = undefined;




export default ParticipantLeaveBody;

