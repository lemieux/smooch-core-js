/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.2.2
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
import ExtraChannelOptions from './ExtraChannelOptions';

/**
 * The Link model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Link
 * @version 12.2.2
 */
class Link {
    /**
     * Constructs a new <code>Link</code>.
     * A link action will open the provided URI when tapped.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Link
     * @param type {String} The type of action.
     * @param uri {String} The action URI. This is the link that will be used in the clients when clicking the button.
     * @param text {String} The button text.
     */
    constructor(type, uri, text) { 
        
        Link.initialize(this, type, uri, text);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, uri, text) { 
        obj['type'] = type;
        obj['uri'] = uri;
        obj['text'] = text;
    }

    /**
     * Constructs a <code>Link</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Link} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Link} The populated <code>Link</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Link();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('extraChannelOptions')) {
                obj['extraChannelOptions'] = ExtraChannelOptions.constructFromObject(data['extraChannelOptions']);
            }
        }
        return obj;
    }

/**
     * Returns The type of action.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of action.
     * @param {String} type The type of action.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The action URI. This is the link that will be used in the clients when clicking the button.
     * @return {String}
     */
    getUri() {
        return this.uri;
    }

    /**
     * Sets The action URI. This is the link that will be used in the clients when clicking the button.
     * @param {String} uri The action URI. This is the link that will be used in the clients when clicking the button.
     */
    setUri(uri) {
        this['uri'] = uri;
    }
/**
     * Returns The button text.
     * @return {String}
     */
    getText() {
        return this.text;
    }

    /**
     * Sets The button text.
     * @param {String} text The button text.
     */
    setText(text) {
        this['text'] = text;
    }
/**
     * Returns Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
     * @return {Boolean}
     */
    getDefault() {
        return this.default;
    }

    /**
     * Sets Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
     * @param {Boolean} _default Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
     */
    setDefault(_default) {
        this['default'] = _default;
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
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions}
     */
    getExtraChannelOptions() {
        return this.extraChannelOptions;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions} extraChannelOptions
     */
    setExtraChannelOptions(extraChannelOptions) {
        this['extraChannelOptions'] = extraChannelOptions;
    }

}

/**
 * The type of action.
 * @member {String} type
 * @default 'link'
 */
Link.prototype['type'] = 'link';

/**
 * The action URI. This is the link that will be used in the clients when clicking the button.
 * @member {String} uri
 */
Link.prototype['uri'] = undefined;

/**
 * The button text.
 * @member {String} text
 */
Link.prototype['text'] = undefined;

/**
 * Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
 * @member {Boolean} default
 */
Link.prototype['default'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Link.prototype['metadata'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions} extraChannelOptions
 */
Link.prototype['extraChannelOptions'] = undefined;






export default Link;

