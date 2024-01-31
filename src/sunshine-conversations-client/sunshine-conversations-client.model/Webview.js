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
 * The Webview model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Webview
 * @version 12.2.2
 */
class Webview {
    /**
     * Constructs a new <code>Webview</code>.
     * When a webview actions is clicked/tapped, the provided URI will be loaded in a webview. Channels that do not support webviews will open the fallback URI instead.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Webview
     * @param type {String} The type of action.
     * @param uri {String} The webview URI. This is the URI that will open in the webview when clicking the button.
     * @param text {String} The button text.
     * @param fallback {String} The fallback uri for channels that don’t support webviews. Used for actions of type webview.
     */
    constructor(type, uri, text, fallback) { 
        
        Webview.initialize(this, type, uri, text, fallback);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, uri, text, fallback) { 
        obj['type'] = type;
        obj['uri'] = uri;
        obj['text'] = text;
        obj['fallback'] = fallback;
    }

    /**
     * Constructs a <code>Webview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Webview} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Webview} The populated <code>Webview</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Webview();

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
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'String');
            }
            if (data.hasOwnProperty('fallback')) {
                obj['fallback'] = ApiClient.convertToType(data['fallback'], 'String');
            }
            if (data.hasOwnProperty('openOnReceive')) {
                obj['openOnReceive'] = ApiClient.convertToType(data['openOnReceive'], 'Boolean');
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
     * Returns The webview URI. This is the URI that will open in the webview when clicking the button.
     * @return {String}
     */
    getUri() {
        return this.uri;
    }

    /**
     * Sets The webview URI. This is the URI that will open in the webview when clicking the button.
     * @param {String} uri The webview URI. This is the URI that will open in the webview when clicking the button.
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
/**
     * Returns The size to display a webview. Used for actions of type webview.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Webview.SizeEnum}
     */
    getSize() {
        return this.size;
    }

    /**
     * Sets The size to display a webview. Used for actions of type webview.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Webview.SizeEnum} size The size to display a webview. Used for actions of type webview.
     */
    setSize(size) {
        this['size'] = size;
    }
/**
     * Returns The fallback uri for channels that don’t support webviews. Used for actions of type webview.
     * @return {String}
     */
    getFallback() {
        return this.fallback;
    }

    /**
     * Sets The fallback uri for channels that don’t support webviews. Used for actions of type webview.
     * @param {String} fallback The fallback uri for channels that don’t support webviews. Used for actions of type webview.
     */
    setFallback(fallback) {
        this['fallback'] = fallback;
    }
/**
     * Returns Boolean value indicating if the webview should open automatically. Only one action per message can be set to true. Currently only supported on the Web Messenger.
     * @return {Boolean}
     */
    getOpenOnReceive() {
        return this.openOnReceive;
    }

    /**
     * Sets Boolean value indicating if the webview should open automatically. Only one action per message can be set to true. Currently only supported on the Web Messenger.
     * @param {Boolean} openOnReceive Boolean value indicating if the webview should open automatically. Only one action per message can be set to true. Currently only supported on the Web Messenger.
     */
    setOpenOnReceive(openOnReceive) {
        this['openOnReceive'] = openOnReceive;
    }

}

/**
 * The type of action.
 * @member {String} type
 */
Webview.prototype['type'] = undefined;

/**
 * The webview URI. This is the URI that will open in the webview when clicking the button.
 * @member {String} uri
 */
Webview.prototype['uri'] = undefined;

/**
 * The button text.
 * @member {String} text
 */
Webview.prototype['text'] = undefined;

/**
 * Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
 * @member {Boolean} default
 */
Webview.prototype['default'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Webview.prototype['metadata'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions} extraChannelOptions
 */
Webview.prototype['extraChannelOptions'] = undefined;

/**
 * The size to display a webview. Used for actions of type webview.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Webview.SizeEnum} size
 */
Webview.prototype['size'] = undefined;

/**
 * The fallback uri for channels that don’t support webviews. Used for actions of type webview.
 * @member {String} fallback
 */
Webview.prototype['fallback'] = undefined;

/**
 * Boolean value indicating if the webview should open automatically. Only one action per message can be set to true. Currently only supported on the Web Messenger.
 * @member {Boolean} openOnReceive
 */
Webview.prototype['openOnReceive'] = undefined;





/**
 * Allowed values for the <code>size</code> property.
 * @enum {String}
 * @readonly
 */
Webview['SizeEnum'] = {

    /**
     * value: "compact"
     * @const
     */
    "compact": "compact",

    /**
     * value: "tall"
     * @const
     */
    "tall": "tall",

    /**
     * value: "full"
     * @const
     */
    "full": "full"
};



export default Webview;

