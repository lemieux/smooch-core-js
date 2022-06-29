/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.8.0
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
import IntegrationApiKey from '../sunshine-conversations-client.model/IntegrationApiKey';
import IntegrationApiKeyListResponse from '../sunshine-conversations-client.model/IntegrationApiKeyListResponse';
import IntegrationApiKeyResponse from '../sunshine-conversations-client.model/IntegrationApiKeyResponse';

/**
* CustomIntegrationApiKeys service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/CustomIntegrationApiKeysApi
* @version 9.8.0
*/
export default class CustomIntegrationApiKeysApi {

    /**
    * Constructs a new CustomIntegrationApiKeysApi. 
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/CustomIntegrationApiKeysApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Integration Key
     * Creates an API key for the specified custom integration. The response body will include a secret as well it’s corresponding id, which you can use to generate JSON Web Tokens to securely make API calls on behalf of the integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKey} integrationApiKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse} and HTTP response
     */
    createCustomIntegrationKeyWithHttpInfo(appId, integrationId, integrationApiKey) {
      let postBody = integrationApiKey;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createCustomIntegrationKey");
      }
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling createCustomIntegrationKey");
      }
      // verify the required parameter 'integrationApiKey' is set
      if (integrationApiKey === undefined || integrationApiKey === null) {
        throw new Error("Missing the required parameter 'integrationApiKey' when calling createCustomIntegrationKey");
      }

      let pathParams = {
        'appId': appId,
        'integrationId': integrationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IntegrationApiKeyResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/integrations/{integrationId}/keys', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Integration Key
     * Creates an API key for the specified custom integration. The response body will include a secret as well it’s corresponding id, which you can use to generate JSON Web Tokens to securely make API calls on behalf of the integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKey} integrationApiKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse}
     */
    createCustomIntegrationKey(appId, integrationId, integrationApiKey) {
      return this.createCustomIntegrationKeyWithHttpInfo(appId, integrationId, integrationApiKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Integration Key
     * Removes an API key.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteCustomIntegrationKeyWithHttpInfo(appId, integrationId, keyId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteCustomIntegrationKey");
      }
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling deleteCustomIntegrationKey");
      }
      // verify the required parameter 'keyId' is set
      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling deleteCustomIntegrationKey");
      }

      let pathParams = {
        'appId': appId,
        'integrationId': integrationId,
        'keyId': keyId
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/integrations/{integrationId}/keys/{keyId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Integration Key
     * Removes an API key.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteCustomIntegrationKey(appId, integrationId, keyId) {
      return this.deleteCustomIntegrationKeyWithHttpInfo(appId, integrationId, keyId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Integration Key
     * Get the specified API key.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse} and HTTP response
     */
    getCustomIntegrationKeyWithHttpInfo(appId, integrationId, keyId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getCustomIntegrationKey");
      }
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling getCustomIntegrationKey");
      }
      // verify the required parameter 'keyId' is set
      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling getCustomIntegrationKey");
      }

      let pathParams = {
        'appId': appId,
        'integrationId': integrationId,
        'keyId': keyId
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
      let returnType = IntegrationApiKeyResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/integrations/{integrationId}/keys/{keyId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Integration Key
     * Get the specified API key.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse}
     */
    getCustomIntegrationKey(appId, integrationId, keyId) {
      return this.getCustomIntegrationKeyWithHttpInfo(appId, integrationId, keyId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Integration Keys
     * Lists all API keys for a given integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyListResponse} and HTTP response
     */
    listCustomIntegrationKeysWithHttpInfo(appId, integrationId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling listCustomIntegrationKeys");
      }
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling listCustomIntegrationKeys");
      }

      let pathParams = {
        'appId': appId,
        'integrationId': integrationId
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
      let returnType = IntegrationApiKeyListResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/integrations/{integrationId}/keys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Integration Keys
     * Lists all API keys for a given integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyListResponse}
     */
    listCustomIntegrationKeys(appId, integrationId) {
      return this.listCustomIntegrationKeysWithHttpInfo(appId, integrationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
