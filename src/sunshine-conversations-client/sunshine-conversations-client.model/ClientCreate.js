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
import Confirmation from './Confirmation';
import MatchCriteria from './MatchCriteria';
import Target from './Target';

/**
 * The ClientCreate model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ClientCreate
 * @version 14.0.0
 */
class ClientCreate {
    /**
     * Constructs a new <code>ClientCreate</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ClientCreate
     * @param matchCriteria {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria} 
     * @param confirmation {module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation} 
     * @param target {module:sunshine-conversations-client/sunshine-conversations-client.model/Target} 
     */
    constructor(matchCriteria, confirmation, target) { 
        
        ClientCreate.initialize(this, matchCriteria, confirmation, target);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, matchCriteria, confirmation, target) { 
        obj['matchCriteria'] = matchCriteria;
        obj['confirmation'] = confirmation;
        obj['target'] = target;
    }

    /**
     * Constructs a <code>ClientCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientCreate} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientCreate} The populated <code>ClientCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientCreate();

            if (data.hasOwnProperty('matchCriteria')) {
                obj['matchCriteria'] = MatchCriteria.constructFromObject(data['matchCriteria']);
            }
            if (data.hasOwnProperty('confirmation')) {
                obj['confirmation'] = Confirmation.constructFromObject(data['confirmation']);
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = Target.constructFromObject(data['target']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria}
     */
    getMatchCriteria() {
        return this.matchCriteria;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria} matchCriteria
     */
    setMatchCriteria(matchCriteria) {
        this['matchCriteria'] = matchCriteria;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation}
     */
    getConfirmation() {
        return this.confirmation;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation} confirmation
     */
    setConfirmation(confirmation) {
        this['confirmation'] = confirmation;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Target}
     */
    getTarget() {
        return this.target;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Target} target
     */
    setTarget(target) {
        this['target'] = target;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria} matchCriteria
 */
ClientCreate.prototype['matchCriteria'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation} confirmation
 */
ClientCreate.prototype['confirmation'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Target} target
 */
ClientCreate.prototype['target'] = undefined;






export default ClientCreate;

