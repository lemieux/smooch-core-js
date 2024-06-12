/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.5.1
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
* Enum class Status.
* @enum {}
* @readonly
*/
export default class Status {
    
        /**
         * value: "inactive"
         * @const
         */
        "inactive" = "inactive";

    
        /**
         * value: "active"
         * @const
         */
        "active" = "active";

    
        /**
         * value: "error"
         * @const
         */
        "error" = "error";

    

    /**
    * Returns a <code>Status</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Status} The enum <code>Status</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

