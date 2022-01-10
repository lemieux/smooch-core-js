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
import Buy from './Buy';
import ExtraChannelOptions from './ExtraChannelOptions';
import Link from './Link';
import LocationRequest from './LocationRequest';
import Postback from './Postback';
import Reply from './Reply';
import Webview from './Webview';

/**
 * The Action model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Action
 * @version 9.5.9
 */
class Action {
    /**
     * Constructs a new <code>Action</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Action
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Buy
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Link
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/LocationRequest
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Postback
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Reply
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Webview
     * @param type {String} The type of action.
     * @param text {String} The button text.
     * @param amount {Number} The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
     * @param uri {String} The webview URI. This is the URI that will open in the webview when clicking the button.
     * @param payload {String} A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
     * @param fallback {String} The fallback uri for channels that don’t support webviews. Used for actions of type webview.
     */
    constructor(type, text, amount, uri, payload, fallback) { 
        Buy.initialize(this, type, text, amount);Link.initialize(this, type, uri, text);LocationRequest.initialize(this, type, text);Postback.initialize(this, type, text, payload);Reply.initialize(this, type, text, payload);Webview.initialize(this, type, uri, text, fallback);
        Action.initialize(this, type, text, amount, uri, payload, fallback);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, text, amount, uri, payload, fallback) { 
        obj['type'] = type;
        obj['text'] = text;
        obj['amount'] = amount;
        obj['uri'] = uri;
        obj['payload'] = payload;
        obj['fallback'] = fallback;
    }

    /**
     * Constructs a <code>Action</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Action} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Action} The populated <code>Action</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Action();
            Buy.constructFromObject(data, obj);
            Link.constructFromObject(data, obj);
            LocationRequest.constructFromObject(data, obj);
            Postback.constructFromObject(data, obj);
            Reply.constructFromObject(data, obj);
            Webview.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('extraChannelOptions')) {
                obj['extraChannelOptions'] = ExtraChannelOptions.constructFromObject(data['extraChannelOptions']);
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
            }
            if (data.hasOwnProperty('iconUrl')) {
                obj['iconUrl'] = ApiClient.convertToType(data['iconUrl'], 'String');
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
     * Returns The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
     * @return {Number}
     */
    getAmount() {
        return this.amount;
    }

    /**
     * Sets The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
     * @param {Number} amount The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
     */
    setAmount(amount) {
        this['amount'] = amount;
    }
/**
     * Returns An ISO 4217 standard currency code in lowercase. Used for actions of type buy.
     * @return {String}
     */
    getCurrency() {
        return this.currency;
    }

    /**
     * Sets An ISO 4217 standard currency code in lowercase. Used for actions of type buy.
     * @param {String} currency An ISO 4217 standard currency code in lowercase. Used for actions of type buy.
     */
    setCurrency(currency) {
        this['currency'] = currency;
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
     * Returns A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
     * @return {String}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * Sets A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
     * @param {String} payload A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
     */
    setPayload(payload) {
        this['payload'] = payload;
    }
/**
     * Returns An icon to render next to the reply option.
     * @return {String}
     */
    getIconUrl() {
        return this.iconUrl;
    }

    /**
     * Sets An icon to render next to the reply option.
     * @param {String} iconUrl An icon to render next to the reply option.
     */
    setIconUrl(iconUrl) {
        this['iconUrl'] = iconUrl;
    }
/**
     * Returns The size to display a webview. Used for actions of type webview.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Action.SizeEnum}
     */
    getSize() {
        return this.size;
    }

    /**
     * Sets The size to display a webview. Used for actions of type webview.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Action.SizeEnum} size The size to display a webview. Used for actions of type webview.
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
Action.prototype['type'] = undefined;

/**
 * The button text.
 * @member {String} text
 */
Action.prototype['text'] = undefined;

/**
 * The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
 * @member {Number} amount
 */
Action.prototype['amount'] = undefined;

/**
 * An ISO 4217 standard currency code in lowercase. Used for actions of type buy.
 * @member {String} currency
 */
Action.prototype['currency'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Action.prototype['metadata'] = undefined;

/**
 * The webview URI. This is the URI that will open in the webview when clicking the button.
 * @member {String} uri
 */
Action.prototype['uri'] = undefined;

/**
 * Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
 * @member {Boolean} default
 */
Action.prototype['default'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions} extraChannelOptions
 */
Action.prototype['extraChannelOptions'] = undefined;

/**
 * A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
 * @member {String} payload
 */
Action.prototype['payload'] = undefined;

/**
 * An icon to render next to the reply option.
 * @member {String} iconUrl
 */
Action.prototype['iconUrl'] = undefined;

/**
 * The size to display a webview. Used for actions of type webview.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Action.SizeEnum} size
 */
Action.prototype['size'] = undefined;

/**
 * The fallback uri for channels that don’t support webviews. Used for actions of type webview.
 * @member {String} fallback
 */
Action.prototype['fallback'] = undefined;

/**
 * Boolean value indicating if the webview should open automatically. Only one action per message can be set to true. Currently only supported on the Web Messenger.
 * @member {Boolean} openOnReceive
 */
Action.prototype['openOnReceive'] = undefined;


// Implement Buy interface:
/**
 * The type of action.
 * @member {String} type
 * @default 'buy'
 */
Buy.prototype['type'] = 'buy';
/**
 * The button text.
 * @member {String} text
 */
Buy.prototype['text'] = undefined;
/**
 * The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
 * @member {Number} amount
 */
Buy.prototype['amount'] = undefined;
/**
 * An ISO 4217 standard currency code in lowercase. Used for actions of type buy.
 * @member {String} currency
 */
Buy.prototype['currency'] = undefined;
/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Buy.prototype['metadata'] = undefined;
// Implement Link interface:
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
// Implement LocationRequest interface:
/**
 * The type of action.
 * @member {String} type
 * @default 'locationRequest'
 */
LocationRequest.prototype['type'] = 'locationRequest';
/**
 * The button text.
 * @member {String} text
 */
LocationRequest.prototype['text'] = undefined;
/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
LocationRequest.prototype['metadata'] = undefined;
// Implement Postback interface:
/**
 * The type of action.
 * @member {String} type
 * @default 'postback'
 */
Postback.prototype['type'] = 'postback';
/**
 * The button text.
 * @member {String} text
 */
Postback.prototype['text'] = undefined;
/**
 * The payload of a postback or reply button.
 * @member {String} payload
 */
Postback.prototype['payload'] = undefined;
/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Postback.prototype['metadata'] = undefined;
// Implement Reply interface:
/**
 * The type of action.
 * @member {String} type
 */
Reply.prototype['type'] = undefined;
/**
 * The button text. Text longer than 20 characters will be truncated on Facebook Messenger, and longer than 40 characters will be truncated on Web Messenger, iOS, and Android.
 * @member {String} text
 */
Reply.prototype['text'] = undefined;
/**
 * A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
 * @member {String} payload
 */
Reply.prototype['payload'] = undefined;
/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Reply.prototype['metadata'] = undefined;
/**
 * An icon to render next to the reply option.
 * @member {String} iconUrl
 */
Reply.prototype['iconUrl'] = undefined;
// Implement Webview interface:
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
Action['SizeEnum'] = {

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



export default Action;

