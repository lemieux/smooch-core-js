/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.12.0
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
import ConversationTruncated from './ConversationTruncated';

/**
 * The SwitchboardPassControlAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardPassControlAllOfPayload
 * @version 9.14.0
 */
class SwitchboardPassControlAllOfPayload {
    /**
     * Constructs a new <code>SwitchboardPassControlAllOfPayload</code>.
     * The payload of the event. The contents of this object depend on the type of event.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardPassControlAllOfPayload
     */
    constructor() { 
        
        SwitchboardPassControlAllOfPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SwitchboardPassControlAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardPassControlAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardPassControlAllOfPayload} The populated <code>SwitchboardPassControlAllOfPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SwitchboardPassControlAllOfPayload();

            if (data.hasOwnProperty('conversation')) {
                obj['conversation'] = ApiClient.convertToType(data['conversation'], ConversationTruncated);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

/**
     * Returns The conversation from which the switchboard event was fired. On success, the payload will include an `activeSwitchboardIntegration`, representing the switchboard integration that is now in control of the conversation.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
     */
    getConversation() {
        return this.conversation;
    }

    /**
     * Sets The conversation from which the switchboard event was fired. On success, the payload will include an `activeSwitchboardIntegration`, representing the switchboard integration that is now in control of the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation from which the switchboard event was fired. On success, the payload will include an `activeSwitchboardIntegration`, representing the switchboard integration that is now in control of the conversation.
     */
    setConversation(conversation) {
        this['conversation'] = conversation;
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
 * The conversation from which the switchboard event was fired. On success, the payload will include an `activeSwitchboardIntegration`, representing the switchboard integration that is now in control of the conversation.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation
 */
SwitchboardPassControlAllOfPayload.prototype['conversation'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
SwitchboardPassControlAllOfPayload.prototype['metadata'] = undefined;






export default SwitchboardPassControlAllOfPayload;

