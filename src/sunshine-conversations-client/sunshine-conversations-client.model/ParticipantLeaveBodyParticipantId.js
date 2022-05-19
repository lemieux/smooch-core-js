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
 * The ParticipantLeaveBodyParticipantId model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyParticipantId
 * @version 9.7.1
 */
class ParticipantLeaveBodyParticipantId {
    /**
     * Constructs a new <code>ParticipantLeaveBodyParticipantId</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyParticipantId
     */
    constructor() { 
        
        ParticipantLeaveBodyParticipantId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParticipantLeaveBodyParticipantId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyParticipantId} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyParticipantId} The populated <code>ParticipantLeaveBodyParticipantId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParticipantLeaveBodyParticipantId();

            if (data.hasOwnProperty('participantId')) {
                obj['participantId'] = ApiClient.convertToType(data['participantId'], 'String');
            }
        }
        return obj;
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
 * The participantId of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
 * @member {String} participantId
 */
ParticipantLeaveBodyParticipantId.prototype['participantId'] = undefined;






export default ParticipantLeaveBodyParticipantId;

