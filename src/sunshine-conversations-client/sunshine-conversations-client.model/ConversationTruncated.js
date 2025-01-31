/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.3.5
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
import ConversationType from './ConversationType';
import SwitchboardIntegrationWebhook from './SwitchboardIntegrationWebhook';

/**
 * The ConversationTruncated model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated
 * @version 14.3.5
 */
class ConversationTruncated {
    /**
     * Constructs a new <code>ConversationTruncated</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated
     */
    constructor() { 
        
        ConversationTruncated.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationTruncated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} The populated <code>ConversationTruncated</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationTruncated();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ConversationType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('activeSwitchboardIntegration')) {
                obj['activeSwitchboardIntegration'] = ApiClient.convertToType(data['activeSwitchboardIntegration'], SwitchboardIntegrationWebhook);
            }
            if (data.hasOwnProperty('pendingSwitchboardIntegration')) {
                obj['pendingSwitchboardIntegration'] = ApiClient.convertToType(data['pendingSwitchboardIntegration'], SwitchboardIntegrationWebhook);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the conversation.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The unique ID of the conversation.
     * @param {String} id The unique ID of the conversation.
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationType}
     */
    getType() {
        return this.type;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationType} type
     */
    setType(type) {
        this['type'] = type;
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
/**
     * Returns The current switchboard integration that is in control of the conversation. This field is omitted if no `activeSwitchboardIntegration` exists for the conversation.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook}
     */
    getActiveSwitchboardIntegration() {
        return this.activeSwitchboardIntegration;
    }

    /**
     * Sets The current switchboard integration that is in control of the conversation. This field is omitted if no `activeSwitchboardIntegration` exists for the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook} activeSwitchboardIntegration The current switchboard integration that is in control of the conversation. This field is omitted if no `activeSwitchboardIntegration` exists for the conversation.
     */
    setActiveSwitchboardIntegration(activeSwitchboardIntegration) {
        this['activeSwitchboardIntegration'] = activeSwitchboardIntegration;
    }
/**
     * Returns The switchboard integration that is awaiting control. This field is omitted if no switchboard integration has been previously offered control.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook}
     */
    getPendingSwitchboardIntegration() {
        return this.pendingSwitchboardIntegration;
    }

    /**
     * Sets The switchboard integration that is awaiting control. This field is omitted if no switchboard integration has been previously offered control.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook} pendingSwitchboardIntegration The switchboard integration that is awaiting control. This field is omitted if no switchboard integration has been previously offered control.
     */
    setPendingSwitchboardIntegration(pendingSwitchboardIntegration) {
        this['pendingSwitchboardIntegration'] = pendingSwitchboardIntegration;
    }

}

/**
 * The unique ID of the conversation.
 * @member {String} id
 */
ConversationTruncated.prototype['id'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationType} type
 */
ConversationTruncated.prototype['type'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
ConversationTruncated.prototype['metadata'] = undefined;

/**
 * The current switchboard integration that is in control of the conversation. This field is omitted if no `activeSwitchboardIntegration` exists for the conversation.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook} activeSwitchboardIntegration
 */
ConversationTruncated.prototype['activeSwitchboardIntegration'] = undefined;

/**
 * The switchboard integration that is awaiting control. This field is omitted if no switchboard integration has been previously offered control.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook} pendingSwitchboardIntegration
 */
ConversationTruncated.prototype['pendingSwitchboardIntegration'] = undefined;






export default ConversationTruncated;

