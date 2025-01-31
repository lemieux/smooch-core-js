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

import ApiClient from "../ApiClient";
import DeviceListResponse from '../sunshine-conversations-client.model/DeviceListResponse';
import DeviceResponse from '../sunshine-conversations-client.model/DeviceResponse';

/**
* Devices service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/DevicesApi
* @version 14.3.5
*/
export default class DevicesApi {

    /**
    * Constructs a new DevicesApi. 
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/DevicesApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Device
     * Fetches a specific Device.  ```shell /v2/apps/:appId/users/:userId ``` 
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @param {String} deviceId The device's id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/DeviceResponse} and HTTP response
     */
    getDeviceWithHttpInfo(appId, userIdOrExternalId, deviceId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getDevice");
      }
      // verify the required parameter 'userIdOrExternalId' is set
      if (userIdOrExternalId === undefined || userIdOrExternalId === null) {
        throw new Error("Missing the required parameter 'userIdOrExternalId' when calling getDevice");
      }
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling getDevice");
      }

      let pathParams = {
        'appId': appId,
        'userIdOrExternalId': userIdOrExternalId,
        'deviceId': deviceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeviceResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/users/{userIdOrExternalId}/devices/{deviceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Device
     * Fetches a specific Device.  ```shell /v2/apps/:appId/users/:userId ``` 
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @param {String} deviceId The device's id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/DeviceResponse}
     */
    getDevice(appId, userIdOrExternalId, deviceId) {
      return this.getDeviceWithHttpInfo(appId, userIdOrExternalId, deviceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Devices
     * Get all the devices for a particular user. The Devices are sorted based on last seen time.  ```shell /v2/apps/:appId/users/:userId/devices ``` 
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/DeviceListResponse} and HTTP response
     */
    listDevicesWithHttpInfo(appId, userIdOrExternalId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling listDevices");
      }
      // verify the required parameter 'userIdOrExternalId' is set
      if (userIdOrExternalId === undefined || userIdOrExternalId === null) {
        throw new Error("Missing the required parameter 'userIdOrExternalId' when calling listDevices");
      }

      let pathParams = {
        'appId': appId,
        'userIdOrExternalId': userIdOrExternalId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeviceListResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/users/{userIdOrExternalId}/devices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Devices
     * Get all the devices for a particular user. The Devices are sorted based on last seen time.  ```shell /v2/apps/:appId/users/:userId/devices ``` 
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/DeviceListResponse}
     */
    listDevices(appId, userIdOrExternalId) {
      return this.listDevicesWithHttpInfo(appId, userIdOrExternalId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
