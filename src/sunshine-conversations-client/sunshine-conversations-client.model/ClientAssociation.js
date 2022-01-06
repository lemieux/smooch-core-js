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
import ClientType from './ClientType';

/**
 * The ClientAssociation model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ClientAssociation
 * @version 9.5.8
 */
class ClientAssociation {
    /**
     * Constructs a new <code>ClientAssociation</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ClientAssociation
     */
    constructor() { 
        
        ClientAssociation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClientAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientAssociation} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientAssociation} The populated <code>ClientAssociation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientAssociation();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ClientType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientType}
     */
    getType() {
        return this.type;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientType} type
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The id of the client being referenced.
     * @return {String}
     */
    getClientId() {
        return this.clientId;
    }

    /**
     * Sets The id of the client being referenced.
     * @param {String} clientId The id of the client being referenced.
     */
    setClientId(clientId) {
        this['clientId'] = clientId;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientType} type
 */
ClientAssociation.prototype['type'] = undefined;

/**
 * The id of the client being referenced.
 * @member {String} clientId
 */
ClientAssociation.prototype['clientId'] = undefined;






export default ClientAssociation;

