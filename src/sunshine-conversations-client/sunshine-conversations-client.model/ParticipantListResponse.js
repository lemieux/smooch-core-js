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
import Links from './Links';
import Meta from './Meta';
import Participant from './Participant';

/**
 * The ParticipantListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ParticipantListResponse
 * @version 9.8.0
 */
class ParticipantListResponse {
    /**
     * Constructs a new <code>ParticipantListResponse</code>.
     * List of returned participants.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantListResponse
     */
    constructor() { 
        
        ParticipantListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParticipantListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantListResponse} The populated <code>ParticipantListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParticipantListResponse();

            if (data.hasOwnProperty('participants')) {
                obj['participants'] = ApiClient.convertToType(data['participants'], [Participant]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = Meta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = Links.constructFromObject(data['links']);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Participant>}
     */
    getParticipants() {
        return this.participants;
    }

    /**
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Participant>} participants
     */
    setParticipants(participants) {
        this['participants'] = participants;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta}
     */
    getMeta() {
        return this.meta;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta} meta
     */
    setMeta(meta) {
        this['meta'] = meta;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Links}
     */
    getLinks() {
        return this.links;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Links} links
     */
    setLinks(links) {
        this['links'] = links;
    }

}

/**
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Participant>} participants
 */
ParticipantListResponse.prototype['participants'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta} meta
 */
ParticipantListResponse.prototype['meta'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Links} links
 */
ParticipantListResponse.prototype['links'] = undefined;






export default ParticipantListResponse;

