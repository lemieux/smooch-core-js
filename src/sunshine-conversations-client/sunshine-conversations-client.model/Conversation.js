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
import ConversationAllOf from './ConversationAllOf';
import ConversationTruncated from './ConversationTruncated';
import ConversationType from './ConversationType';
import SwitchboardIntegrationWebhook from './SwitchboardIntegrationWebhook';

/**
 * The Conversation model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Conversation
 * @version 14.0.0
 */
class Conversation {
    /**
     * Constructs a new <code>Conversation</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Conversation
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationAllOf
     */
    constructor() { 
        ConversationTruncated.initialize(this);ConversationAllOf.initialize(this);
        Conversation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Conversation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Conversation} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Conversation} The populated <code>Conversation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Conversation();
            ConversationTruncated.constructFromObject(data, obj);
            ConversationAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('isDefault')) {
                obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'Boolean');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('iconUrl')) {
                obj['iconUrl'] = ApiClient.convertToType(data['iconUrl'], 'String');
            }
            if (data.hasOwnProperty('businessLastRead')) {
                obj['businessLastRead'] = ApiClient.convertToType(data['businessLastRead'], 'String');
            }
            if (data.hasOwnProperty('lastUpdatedAt')) {
                obj['lastUpdatedAt'] = ApiClient.convertToType(data['lastUpdatedAt'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
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
/**
     * Returns Whether the conversation is the default conversation for the user. Will be true for the first personal conversation created for the user, and false in all other cases. 
     * @return {Boolean}
     */
    getIsDefault() {
        return this.isDefault;
    }

    /**
     * Sets Whether the conversation is the default conversation for the user. Will be true for the first personal conversation created for the user, and false in all other cases. 
     * @param {Boolean} isDefault Whether the conversation is the default conversation for the user. Will be true for the first personal conversation created for the user, and false in all other cases. 
     */
    setIsDefault(isDefault) {
        this['isDefault'] = isDefault;
    }
/**
     * Returns A friendly name for the conversation, may be displayed to the business or the user. 
     * @return {String}
     */
    getDisplayName() {
        return this.displayName;
    }

    /**
     * Sets A friendly name for the conversation, may be displayed to the business or the user. 
     * @param {String} displayName A friendly name for the conversation, may be displayed to the business or the user. 
     */
    setDisplayName(displayName) {
        this['displayName'] = displayName;
    }
/**
     * Returns A short text describing the conversation.
     * @return {String}
     */
    getDescription() {
        return this.description;
    }

    /**
     * Sets A short text describing the conversation.
     * @param {String} description A short text describing the conversation.
     */
    setDescription(description) {
        this['description'] = description;
    }
/**
     * Returns A custom conversation icon url. The image must be in either JPG, PNG, or GIF format
     * @return {String}
     */
    getIconUrl() {
        return this.iconUrl;
    }

    /**
     * Sets A custom conversation icon url. The image must be in either JPG, PNG, or GIF format
     * @param {String} iconUrl A custom conversation icon url. The image must be in either JPG, PNG, or GIF format
     */
    setIconUrl(iconUrl) {
        this['iconUrl'] = iconUrl;
    }
/**
     * Returns A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the conversation was last marked as read with role business. 
     * @return {String}
     */
    getBusinessLastRead() {
        return this.businessLastRead;
    }

    /**
     * Sets A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the conversation was last marked as read with role business. 
     * @param {String} businessLastRead A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the conversation was last marked as read with role business. 
     */
    setBusinessLastRead(businessLastRead) {
        this['businessLastRead'] = businessLastRead;
    }
/**
     * Returns A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the last message was received in the conversation, or the creation time if no messages have been received yet. 
     * @return {String}
     */
    getLastUpdatedAt() {
        return this.lastUpdatedAt;
    }

    /**
     * Sets A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the last message was received in the conversation, or the creation time if no messages have been received yet. 
     * @param {String} lastUpdatedAt A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the last message was received in the conversation, or the creation time if no messages have been received yet. 
     */
    setLastUpdatedAt(lastUpdatedAt) {
        this['lastUpdatedAt'] = lastUpdatedAt;
    }
/**
     * Returns A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the creation time of the conversation. 
     * @return {String}
     */
    getCreatedAt() {
        return this.createdAt;
    }

    /**
     * Sets A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the creation time of the conversation. 
     * @param {String} createdAt A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the creation time of the conversation. 
     */
    setCreatedAt(createdAt) {
        this['createdAt'] = createdAt;
    }

}

/**
 * The unique ID of the conversation.
 * @member {String} id
 */
Conversation.prototype['id'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationType} type
 */
Conversation.prototype['type'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Conversation.prototype['metadata'] = undefined;

/**
 * The current switchboard integration that is in control of the conversation. This field is omitted if no `activeSwitchboardIntegration` exists for the conversation.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook} activeSwitchboardIntegration
 */
Conversation.prototype['activeSwitchboardIntegration'] = undefined;

/**
 * The switchboard integration that is awaiting control. This field is omitted if no switchboard integration has been previously offered control.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook} pendingSwitchboardIntegration
 */
Conversation.prototype['pendingSwitchboardIntegration'] = undefined;

/**
 * Whether the conversation is the default conversation for the user. Will be true for the first personal conversation created for the user, and false in all other cases. 
 * @member {Boolean} isDefault
 */
Conversation.prototype['isDefault'] = undefined;

/**
 * A friendly name for the conversation, may be displayed to the business or the user. 
 * @member {String} displayName
 */
Conversation.prototype['displayName'] = undefined;

/**
 * A short text describing the conversation.
 * @member {String} description
 */
Conversation.prototype['description'] = undefined;

/**
 * A custom conversation icon url. The image must be in either JPG, PNG, or GIF format
 * @member {String} iconUrl
 */
Conversation.prototype['iconUrl'] = undefined;

/**
 * A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the conversation was last marked as read with role business. 
 * @member {String} businessLastRead
 */
Conversation.prototype['businessLastRead'] = undefined;

/**
 * A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the last message was received in the conversation, or the creation time if no messages have been received yet. 
 * @member {String} lastUpdatedAt
 */
Conversation.prototype['lastUpdatedAt'] = undefined;

/**
 * A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the creation time of the conversation. 
 * @member {String} createdAt
 */
Conversation.prototype['createdAt'] = undefined;


// Implement ConversationTruncated interface:
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
// Implement ConversationAllOf interface:
/**
 * Whether the conversation is the default conversation for the user. Will be true for the first personal conversation created for the user, and false in all other cases. 
 * @member {Boolean} isDefault
 */
ConversationAllOf.prototype['isDefault'] = undefined;
/**
 * A friendly name for the conversation, may be displayed to the business or the user. 
 * @member {String} displayName
 */
ConversationAllOf.prototype['displayName'] = undefined;
/**
 * A short text describing the conversation.
 * @member {String} description
 */
ConversationAllOf.prototype['description'] = undefined;
/**
 * A custom conversation icon url. The image must be in either JPG, PNG, or GIF format
 * @member {String} iconUrl
 */
ConversationAllOf.prototype['iconUrl'] = undefined;
/**
 * A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the conversation was last marked as read with role business. 
 * @member {String} businessLastRead
 */
ConversationAllOf.prototype['businessLastRead'] = undefined;
/**
 * A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the last message was received in the conversation, or the creation time if no messages have been received yet. 
 * @member {String} lastUpdatedAt
 */
ConversationAllOf.prototype['lastUpdatedAt'] = undefined;
/**
 * A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the creation time of the conversation. 
 * @member {String} createdAt
 */
ConversationAllOf.prototype['createdAt'] = undefined;




export default Conversation;

