/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.6.0
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
 * The ExtraChannelOptionsMessenger model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptionsMessenger
 * @version 12.6.0
 */
class ExtraChannelOptionsMessenger {
    /**
     * Constructs a new <code>ExtraChannelOptionsMessenger</code>.
     * Messenger channel options.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptionsMessenger
     */
    constructor() { 
        
        ExtraChannelOptionsMessenger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExtraChannelOptionsMessenger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptionsMessenger} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptionsMessenger} The populated <code>ExtraChannelOptionsMessenger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtraChannelOptionsMessenger();

            if (data.hasOwnProperty('messenger_extensions')) {
                obj['messenger_extensions'] = ApiClient.convertToType(data['messenger_extensions'], 'Boolean');
            }
            if (data.hasOwnProperty('webview_share_button')) {
                obj['webview_share_button'] = ApiClient.convertToType(data['webview_share_button'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns For webview type actions, a boolean value indicating whether the URL should be loaded with Messenger Extensions enabled. [More info](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button).
     * @return {Boolean}
     */
    getMessengerExtensions() {
        return this.messenger_extensions;
    }

    /**
     * Sets For webview type actions, a boolean value indicating whether the URL should be loaded with Messenger Extensions enabled. [More info](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button).
     * @param {Boolean} messengerExtensions For webview type actions, a boolean value indicating whether the URL should be loaded with Messenger Extensions enabled. [More info](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button).
     */
    setMessengerExtensions(messengerExtensions) {
        this['messenger_extensions'] = messengerExtensions;
    }
/**
     * Returns For webview type actions, a string value indicating if the share button should be hidden. [More Info](https://developers.facebook.com/docs/messenger-platform/reference/buttons/url).
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptionsMessenger.WebviewShareButtonEnum}
     */
    getWebviewShareButton() {
        return this.webview_share_button;
    }

    /**
     * Sets For webview type actions, a string value indicating if the share button should be hidden. [More Info](https://developers.facebook.com/docs/messenger-platform/reference/buttons/url).
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptionsMessenger.WebviewShareButtonEnum} webviewShareButton For webview type actions, a string value indicating if the share button should be hidden. [More Info](https://developers.facebook.com/docs/messenger-platform/reference/buttons/url).
     */
    setWebviewShareButton(webviewShareButton) {
        this['webview_share_button'] = webviewShareButton;
    }

}

/**
 * For webview type actions, a boolean value indicating whether the URL should be loaded with Messenger Extensions enabled. [More info](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button).
 * @member {Boolean} messenger_extensions
 * @default false
 */
ExtraChannelOptionsMessenger.prototype['messenger_extensions'] = false;

/**
 * For webview type actions, a string value indicating if the share button should be hidden. [More Info](https://developers.facebook.com/docs/messenger-platform/reference/buttons/url).
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptionsMessenger.WebviewShareButtonEnum} webview_share_button
 */
ExtraChannelOptionsMessenger.prototype['webview_share_button'] = undefined;





/**
 * Allowed values for the <code>webview_share_button</code> property.
 * @enum {String}
 * @readonly
 */
ExtraChannelOptionsMessenger['WebviewShareButtonEnum'] = {

    /**
     * value: "hide"
     * @const
     */
    "hide": "hide"
};



export default ExtraChannelOptionsMessenger;

