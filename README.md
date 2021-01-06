# sunshine-conversations-client

SunshineConversationsClient - JavaScript client for sunshine-conversations-client
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 9.4.2
- Package version: 9.4.2
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen


## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install sunshine-conversations-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your sunshine-conversations-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('sunshine-conversations-client')` in javascript files from the directory you ran the last command above from.

### git

If the library is hosted at a git repository, e.g. https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following the above steps with Node.js and installing browserify with `npm install -g browserify`, perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

### Region

Sunshine Conversations is available in the following [regions](https://docs.smooch.io/rest/#section/Introduction/Regions). The US region will be used by default. To target any other region, specify the region's API host in `defaultClient.basePath`. For example:

```javascript
var defaultClient = SunshineConversationsClient.ApiClient.instance;
defaultClient.basePath = "https://api.smooch.io";
```


## Getting Started

Please follow the [installation](#installation) instructions and execute the following JS code:

```javascript
var SunshineConversationsClient = require('sunshine-conversations-client');

var defaultClient = SunshineConversationsClient.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'
// Configure Bearer (JWT) access token for authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

var api = new SunshineConversationsClient.ActivitiesApi()
var appId = 5d8cff3cd55b040010928b5b; // {String} Identifies the app.
var conversationId = 029c31f25a21b47effd7be90; // {String} Identifies the conversation.
var activityPost = {"author":{"type":"user","userId":"5963c0d619a30a2e00de36b8"},"type":"conversation:read"}; // {ActivityPost} 
api.postActivity(appId, conversationId, activityPost).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.smooch.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SunshineConversationsClient.ActivitiesApi* | [**postActivity**](docs/ActivitiesApi.md#postActivity) | **POST** /v2/apps/{appId}/conversations/{conversationId}/activity | Post Activity
*SunshineConversationsClient.AppKeysApi* | [**createAppKey**](docs/AppKeysApi.md#createAppKey) | **POST** /v2/apps/{appId}/keys | Create App Key
*SunshineConversationsClient.AppKeysApi* | [**deleteAppKey**](docs/AppKeysApi.md#deleteAppKey) | **DELETE** /v2/apps/{appId}/keys/{keyId} | Delete App Key
*SunshineConversationsClient.AppKeysApi* | [**getAppKey**](docs/AppKeysApi.md#getAppKey) | **GET** /v2/apps/{appId}/keys/{keyId} | Get App Key
*SunshineConversationsClient.AppKeysApi* | [**listAppKeys**](docs/AppKeysApi.md#listAppKeys) | **GET** /v2/apps/{appId}/keys | List App Keys
*SunshineConversationsClient.AppsApi* | [**createApp**](docs/AppsApi.md#createApp) | **POST** /v2/apps | Create App
*SunshineConversationsClient.AppsApi* | [**deleteApp**](docs/AppsApi.md#deleteApp) | **DELETE** /v2/apps/{appId} | Delete App
*SunshineConversationsClient.AppsApi* | [**getApp**](docs/AppsApi.md#getApp) | **GET** /v2/apps/{appId} | Get App
*SunshineConversationsClient.AppsApi* | [**listApps**](docs/AppsApi.md#listApps) | **GET** /v2/apps | List Apps
*SunshineConversationsClient.AppsApi* | [**updateApp**](docs/AppsApi.md#updateApp) | **PATCH** /v2/apps/{appId} | Update App
*SunshineConversationsClient.AttachmentsApi* | [**deleteAttachment**](docs/AttachmentsApi.md#deleteAttachment) | **POST** /v2/apps/{appId}/attachments/remove | Delete Attachment
*SunshineConversationsClient.AttachmentsApi* | [**generateMediaJsonWebToken**](docs/AttachmentsApi.md#generateMediaJsonWebToken) | **POST** /v2/apps/{appId}/attachments/token | Generate Media Token
*SunshineConversationsClient.AttachmentsApi* | [**setCookie**](docs/AttachmentsApi.md#setCookie) | **GET** /v2/apps/{appId}/attachments/cookie | Set Cookie
*SunshineConversationsClient.AttachmentsApi* | [**uploadAttachment**](docs/AttachmentsApi.md#uploadAttachment) | **POST** /v2/apps/{appId}/attachments | Upload Attachment
*SunshineConversationsClient.ClientsApi* | [**createClient**](docs/ClientsApi.md#createClient) | **POST** /v2/apps/{appId}/users/{userIdOrExternalId}/clients | Create Client
*SunshineConversationsClient.ClientsApi* | [**listClients**](docs/ClientsApi.md#listClients) | **GET** /v2/apps/{appId}/users/{userIdOrExternalId}/clients | List Clients
*SunshineConversationsClient.ClientsApi* | [**removeClient**](docs/ClientsApi.md#removeClient) | **DELETE** /v2/apps/{appId}/users/{userIdOrExternalId}/clients/{clientId} | Remove Client
*SunshineConversationsClient.ConversationsApi* | [**createConversation**](docs/ConversationsApi.md#createConversation) | **POST** /v2/apps/{appId}/conversations | Create Conversation
*SunshineConversationsClient.ConversationsApi* | [**deleteConversation**](docs/ConversationsApi.md#deleteConversation) | **DELETE** /v2/apps/{appId}/conversations/{conversationId} | Delete Conversation
*SunshineConversationsClient.ConversationsApi* | [**getConversation**](docs/ConversationsApi.md#getConversation) | **GET** /v2/apps/{appId}/conversations/{conversationId} | Get Conversation
*SunshineConversationsClient.ConversationsApi* | [**listConversations**](docs/ConversationsApi.md#listConversations) | **GET** /v2/apps/{appId}/conversations | List Conversations
*SunshineConversationsClient.ConversationsApi* | [**updateConversation**](docs/ConversationsApi.md#updateConversation) | **PATCH** /v2/apps/{appId}/conversations/{conversationId} | Update Conversation
*SunshineConversationsClient.CustomIntegrationApiKeysApi* | [**createCustomIntegrationKey**](docs/CustomIntegrationApiKeysApi.md#createCustomIntegrationKey) | **POST** /v2/apps/{appId}/integrations/{integrationId}/keys | Create Integration Key
*SunshineConversationsClient.CustomIntegrationApiKeysApi* | [**deleteCustomIntegrationKey**](docs/CustomIntegrationApiKeysApi.md#deleteCustomIntegrationKey) | **DELETE** /v2/apps/{appId}/integrations/{integrationId}/keys/{keyId} | Delete Integration Key
*SunshineConversationsClient.CustomIntegrationApiKeysApi* | [**getCustomIntegrationKey**](docs/CustomIntegrationApiKeysApi.md#getCustomIntegrationKey) | **GET** /v2/apps/{appId}/integrations/{integrationId}/keys/{keyId} | Get Integration Key
*SunshineConversationsClient.CustomIntegrationApiKeysApi* | [**listCustomIntegrationKeys**](docs/CustomIntegrationApiKeysApi.md#listCustomIntegrationKeys) | **GET** /v2/apps/{appId}/integrations/{integrationId}/keys | List Integration Keys
*SunshineConversationsClient.IntegrationsApi* | [**createIntegration**](docs/IntegrationsApi.md#createIntegration) | **POST** /v2/apps/{appId}/integrations | Create Integration
*SunshineConversationsClient.IntegrationsApi* | [**deleteIntegration**](docs/IntegrationsApi.md#deleteIntegration) | **DELETE** /v2/apps/{appId}/integrations/{integrationId} | Delete Integration
*SunshineConversationsClient.IntegrationsApi* | [**getIntegration**](docs/IntegrationsApi.md#getIntegration) | **GET** /v2/apps/{appId}/integrations/{integrationId} | Get Integration
*SunshineConversationsClient.IntegrationsApi* | [**listIntegrations**](docs/IntegrationsApi.md#listIntegrations) | **GET** /v2/apps/{appId}/integrations | List Integrations
*SunshineConversationsClient.IntegrationsApi* | [**updateIntegration**](docs/IntegrationsApi.md#updateIntegration) | **PATCH** /v2/apps/{appId}/integrations/{integrationId} | Update Integration
*SunshineConversationsClient.MessagesApi* | [**deleteAllMessages**](docs/MessagesApi.md#deleteAllMessages) | **DELETE** /v2/apps/{appId}/conversations/{conversationId}/messages | Delete All Messages
*SunshineConversationsClient.MessagesApi* | [**deleteMessage**](docs/MessagesApi.md#deleteMessage) | **DELETE** /v2/apps/{appId}/conversations/{conversationId}/messages/{messageId} | Delete Message
*SunshineConversationsClient.MessagesApi* | [**listMessages**](docs/MessagesApi.md#listMessages) | **GET** /v2/apps/{appId}/conversations/{conversationId}/messages | List Messages
*SunshineConversationsClient.MessagesApi* | [**postMessage**](docs/MessagesApi.md#postMessage) | **POST** /v2/apps/{appId}/conversations/{conversationId}/messages | Post Message
*SunshineConversationsClient.OAuthEndpointsApi* | [**authorize**](docs/OAuthEndpointsApi.md#authorize) | **GET** /oauth/authorize | Authorize
*SunshineConversationsClient.OAuthEndpointsApi* | [**getToken**](docs/OAuthEndpointsApi.md#getToken) | **POST** /oauth/token | Get Token
*SunshineConversationsClient.OAuthEndpointsApi* | [**revokeAccess**](docs/OAuthEndpointsApi.md#revokeAccess) | **DELETE** /oauth/authorization | Revoke Access
*SunshineConversationsClient.ParticipantsApi* | [**joinConversation**](docs/ParticipantsApi.md#joinConversation) | **POST** /v2/apps/{appId}/conversations/{conversationId}/join | Join Conversation
*SunshineConversationsClient.ParticipantsApi* | [**leaveConversation**](docs/ParticipantsApi.md#leaveConversation) | **POST** /v2/apps/{appId}/conversations/{conversationId}/leave | Leave Conversation
*SunshineConversationsClient.ParticipantsApi* | [**listParticipants**](docs/ParticipantsApi.md#listParticipants) | **GET** /v2/apps/{appId}/conversations/{conversationId}/participants | List Participants
*SunshineConversationsClient.SwitchboardActionsApi* | [**acceptControl**](docs/SwitchboardActionsApi.md#acceptControl) | **POST** /v2/apps/{appId}/conversations/{conversationId}/acceptControl | Accept Control
*SunshineConversationsClient.SwitchboardActionsApi* | [**offerControl**](docs/SwitchboardActionsApi.md#offerControl) | **POST** /v2/apps/{appId}/conversations/{conversationId}/offerControl | Offer Control
*SunshineConversationsClient.SwitchboardActionsApi* | [**passControl**](docs/SwitchboardActionsApi.md#passControl) | **POST** /v2/apps/{appId}/conversations/{conversationId}/passControl | Pass Control
*SunshineConversationsClient.SwitchboardIntegrationsApi* | [**createSwitchboardIntegration**](docs/SwitchboardIntegrationsApi.md#createSwitchboardIntegration) | **POST** /v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations | Create Switchboard Integration
*SunshineConversationsClient.SwitchboardIntegrationsApi* | [**deleteSwitchboardIntegration**](docs/SwitchboardIntegrationsApi.md#deleteSwitchboardIntegration) | **DELETE** /v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations/{switchboardIntegrationId} | Delete Switchboard Integration
*SunshineConversationsClient.SwitchboardIntegrationsApi* | [**listSwitchboardIntegrations**](docs/SwitchboardIntegrationsApi.md#listSwitchboardIntegrations) | **GET** /v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations | List Switchboard Integrations
*SunshineConversationsClient.SwitchboardIntegrationsApi* | [**updateSwitchboardIntegration**](docs/SwitchboardIntegrationsApi.md#updateSwitchboardIntegration) | **PATCH** /v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations/{switchboardIntegrationId} | Update Switchboard Integration
*SunshineConversationsClient.SwitchboardsApi* | [**createSwitchboard**](docs/SwitchboardsApi.md#createSwitchboard) | **POST** /v2/apps/{appId}/switchboards | Create Switchboard
*SunshineConversationsClient.SwitchboardsApi* | [**deleteSwitchboard**](docs/SwitchboardsApi.md#deleteSwitchboard) | **DELETE** /v2/apps/{appId}/switchboards/{switchboardId} | Delete Switchboard
*SunshineConversationsClient.SwitchboardsApi* | [**listSwitchboards**](docs/SwitchboardsApi.md#listSwitchboards) | **GET** /v2/apps/{appId}/switchboards | List Switchboards
*SunshineConversationsClient.SwitchboardsApi* | [**updateSwitchboard**](docs/SwitchboardsApi.md#updateSwitchboard) | **PATCH** /v2/apps/{appId}/switchboards/{switchboardId} | Update Switchboard
*SunshineConversationsClient.UsersApi* | [**createUser**](docs/UsersApi.md#createUser) | **POST** /v2/apps/{appId}/users | Create User
*SunshineConversationsClient.UsersApi* | [**deleteUser**](docs/UsersApi.md#deleteUser) | **DELETE** /v2/apps/{appId}/users/{userIdOrExternalId} | Delete User
*SunshineConversationsClient.UsersApi* | [**deleteUserPersonalInformation**](docs/UsersApi.md#deleteUserPersonalInformation) | **DELETE** /v2/apps/{appId}/users/{userIdOrExternalId}/personalinformation | Delete User Personal Information
*SunshineConversationsClient.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /v2/apps/{appId}/users/{userIdOrExternalId} | Get User
*SunshineConversationsClient.UsersApi* | [**updateUser**](docs/UsersApi.md#updateUser) | **PATCH** /v2/apps/{appId}/users/{userIdOrExternalId} | Update User
*SunshineConversationsClient.WebhooksApi* | [**createWebhook**](docs/WebhooksApi.md#createWebhook) | **POST** /v2/apps/{appId}/integrations/{integrationId}/webhooks | Create Webhook
*SunshineConversationsClient.WebhooksApi* | [**deleteWebhook**](docs/WebhooksApi.md#deleteWebhook) | **DELETE** /v2/apps/{appId}/integrations/{integrationId}/webhooks/{webhookId} | Delete Webhook
*SunshineConversationsClient.WebhooksApi* | [**getWebhook**](docs/WebhooksApi.md#getWebhook) | **GET** /v2/apps/{appId}/integrations/{integrationId}/webhooks/{webhookId} | Get Webhook
*SunshineConversationsClient.WebhooksApi* | [**listWebhooks**](docs/WebhooksApi.md#listWebhooks) | **GET** /v2/apps/{appId}/integrations/{integrationId}/webhooks | List Webhooks
*SunshineConversationsClient.WebhooksApi* | [**updateWebhook**](docs/WebhooksApi.md#updateWebhook) | **PATCH** /v2/apps/{appId}/integrations/{integrationId}/webhooks/{webhookId} | Update Webhook


## Documentation for Models

 - [SunshineConversationsClient.AcceptControlBody](docs/AcceptControlBody.md)
 - [SunshineConversationsClient.Action](docs/Action.md)
 - [SunshineConversationsClient.ActionSubset](docs/ActionSubset.md)
 - [SunshineConversationsClient.Activity](docs/Activity.md)
 - [SunshineConversationsClient.ActivityAllOf](docs/ActivityAllOf.md)
 - [SunshineConversationsClient.ActivityPost](docs/ActivityPost.md)
 - [SunshineConversationsClient.ActivityPostAllOf](docs/ActivityPostAllOf.md)
 - [SunshineConversationsClient.ActivityTypes](docs/ActivityTypes.md)
 - [SunshineConversationsClient.Android](docs/Android.md)
 - [SunshineConversationsClient.AndroidAllOf](docs/AndroidAllOf.md)
 - [SunshineConversationsClient.AndroidUpdate](docs/AndroidUpdate.md)
 - [SunshineConversationsClient.AndroidUpdateAllOf](docs/AndroidUpdateAllOf.md)
 - [SunshineConversationsClient.ApiKey](docs/ApiKey.md)
 - [SunshineConversationsClient.App](docs/App.md)
 - [SunshineConversationsClient.AppCreateBody](docs/AppCreateBody.md)
 - [SunshineConversationsClient.AppKey](docs/AppKey.md)
 - [SunshineConversationsClient.AppKeyCreateBody](docs/AppKeyCreateBody.md)
 - [SunshineConversationsClient.AppKeyListResponse](docs/AppKeyListResponse.md)
 - [SunshineConversationsClient.AppKeyResponse](docs/AppKeyResponse.md)
 - [SunshineConversationsClient.AppListFilter](docs/AppListFilter.md)
 - [SunshineConversationsClient.AppListResponse](docs/AppListResponse.md)
 - [SunshineConversationsClient.AppResponse](docs/AppResponse.md)
 - [SunshineConversationsClient.AppSettings](docs/AppSettings.md)
 - [SunshineConversationsClient.AppSubSchema](docs/AppSubSchema.md)
 - [SunshineConversationsClient.AppUpdateBody](docs/AppUpdateBody.md)
 - [SunshineConversationsClient.Apple](docs/Apple.md)
 - [SunshineConversationsClient.AppleAllOf](docs/AppleAllOf.md)
 - [SunshineConversationsClient.AppleUpdate](docs/AppleUpdate.md)
 - [SunshineConversationsClient.AttachmentDeleteBody](docs/AttachmentDeleteBody.md)
 - [SunshineConversationsClient.AttachmentMediaTokenBody](docs/AttachmentMediaTokenBody.md)
 - [SunshineConversationsClient.AttachmentMediaTokenResponse](docs/AttachmentMediaTokenResponse.md)
 - [SunshineConversationsClient.AttachmentResponse](docs/AttachmentResponse.md)
 - [SunshineConversationsClient.AttachmentSchema](docs/AttachmentSchema.md)
 - [SunshineConversationsClient.AttachmentUploadBody](docs/AttachmentUploadBody.md)
 - [SunshineConversationsClient.Author](docs/Author.md)
 - [SunshineConversationsClient.AuthorWebhook](docs/AuthorWebhook.md)
 - [SunshineConversationsClient.Buy](docs/Buy.md)
 - [SunshineConversationsClient.CarouselMessage](docs/CarouselMessage.md)
 - [SunshineConversationsClient.CarouselMessageDisplaySettings](docs/CarouselMessageDisplaySettings.md)
 - [SunshineConversationsClient.Client](docs/Client.md)
 - [SunshineConversationsClient.ClientAssociation](docs/ClientAssociation.md)
 - [SunshineConversationsClient.ClientCreate](docs/ClientCreate.md)
 - [SunshineConversationsClient.ClientListResponse](docs/ClientListResponse.md)
 - [SunshineConversationsClient.ClientResponse](docs/ClientResponse.md)
 - [SunshineConversationsClient.ClientType](docs/ClientType.md)
 - [SunshineConversationsClient.Confirmation](docs/Confirmation.md)
 - [SunshineConversationsClient.Content](docs/Content.md)
 - [SunshineConversationsClient.Conversation](docs/Conversation.md)
 - [SunshineConversationsClient.ConversationAllOf](docs/ConversationAllOf.md)
 - [SunshineConversationsClient.ConversationCreateBody](docs/ConversationCreateBody.md)
 - [SunshineConversationsClient.ConversationCreateEvent](docs/ConversationCreateEvent.md)
 - [SunshineConversationsClient.ConversationCreateEventAllOf](docs/ConversationCreateEventAllOf.md)
 - [SunshineConversationsClient.ConversationCreateEventAllOfPayload](docs/ConversationCreateEventAllOfPayload.md)
 - [SunshineConversationsClient.ConversationJoinEvent](docs/ConversationJoinEvent.md)
 - [SunshineConversationsClient.ConversationJoinEventAllOf](docs/ConversationJoinEventAllOf.md)
 - [SunshineConversationsClient.ConversationJoinEventAllOfPayload](docs/ConversationJoinEventAllOfPayload.md)
 - [SunshineConversationsClient.ConversationLeaveEvent](docs/ConversationLeaveEvent.md)
 - [SunshineConversationsClient.ConversationLeaveEventAllOf](docs/ConversationLeaveEventAllOf.md)
 - [SunshineConversationsClient.ConversationLeaveEventAllOfPayload](docs/ConversationLeaveEventAllOfPayload.md)
 - [SunshineConversationsClient.ConversationListFilter](docs/ConversationListFilter.md)
 - [SunshineConversationsClient.ConversationListResponse](docs/ConversationListResponse.md)
 - [SunshineConversationsClient.ConversationMessageDeliveryChannelEvent](docs/ConversationMessageDeliveryChannelEvent.md)
 - [SunshineConversationsClient.ConversationMessageDeliveryChannelEventAllOf](docs/ConversationMessageDeliveryChannelEventAllOf.md)
 - [SunshineConversationsClient.ConversationMessageDeliveryFailureEvent](docs/ConversationMessageDeliveryFailureEvent.md)
 - [SunshineConversationsClient.ConversationMessageDeliveryFailureEventAllOf](docs/ConversationMessageDeliveryFailureEventAllOf.md)
 - [SunshineConversationsClient.ConversationMessageDeliveryPayload](docs/ConversationMessageDeliveryPayload.md)
 - [SunshineConversationsClient.ConversationMessageDeliveryPayloadDestination](docs/ConversationMessageDeliveryPayloadDestination.md)
 - [SunshineConversationsClient.ConversationMessageDeliveryPayloadExternalMessages](docs/ConversationMessageDeliveryPayloadExternalMessages.md)
 - [SunshineConversationsClient.ConversationMessageDeliveryPayloadMessage](docs/ConversationMessageDeliveryPayloadMessage.md)
 - [SunshineConversationsClient.ConversationMessageDeliveryUserEvent](docs/ConversationMessageDeliveryUserEvent.md)
 - [SunshineConversationsClient.ConversationMessageEvent](docs/ConversationMessageEvent.md)
 - [SunshineConversationsClient.ConversationMessageEventAllOf](docs/ConversationMessageEventAllOf.md)
 - [SunshineConversationsClient.ConversationMessageEventAllOfPayload](docs/ConversationMessageEventAllOfPayload.md)
 - [SunshineConversationsClient.ConversationPostbackEvent](docs/ConversationPostbackEvent.md)
 - [SunshineConversationsClient.ConversationPostbackEventAllOf](docs/ConversationPostbackEventAllOf.md)
 - [SunshineConversationsClient.ConversationPostbackEventAllOfPayload](docs/ConversationPostbackEventAllOfPayload.md)
 - [SunshineConversationsClient.ConversationReadEvent](docs/ConversationReadEvent.md)
 - [SunshineConversationsClient.ConversationReadEventAllOf](docs/ConversationReadEventAllOf.md)
 - [SunshineConversationsClient.ConversationReadEventAllOfPayload](docs/ConversationReadEventAllOfPayload.md)
 - [SunshineConversationsClient.ConversationRemoveEvent](docs/ConversationRemoveEvent.md)
 - [SunshineConversationsClient.ConversationRemoveEventAllOf](docs/ConversationRemoveEventAllOf.md)
 - [SunshineConversationsClient.ConversationRemoveEventAllOfPayload](docs/ConversationRemoveEventAllOfPayload.md)
 - [SunshineConversationsClient.ConversationResponse](docs/ConversationResponse.md)
 - [SunshineConversationsClient.ConversationTruncated](docs/ConversationTruncated.md)
 - [SunshineConversationsClient.ConversationType](docs/ConversationType.md)
 - [SunshineConversationsClient.ConversationTypingEvent](docs/ConversationTypingEvent.md)
 - [SunshineConversationsClient.ConversationTypingEventAllOf](docs/ConversationTypingEventAllOf.md)
 - [SunshineConversationsClient.ConversationTypingEventAllOfPayload](docs/ConversationTypingEventAllOfPayload.md)
 - [SunshineConversationsClient.ConversationUpdateBody](docs/ConversationUpdateBody.md)
 - [SunshineConversationsClient.Custom](docs/Custom.md)
 - [SunshineConversationsClient.CustomAllOf](docs/CustomAllOf.md)
 - [SunshineConversationsClient.CustomUpdate](docs/CustomUpdate.md)
 - [SunshineConversationsClient.Destination](docs/Destination.md)
 - [SunshineConversationsClient.Device](docs/Device.md)
 - [SunshineConversationsClient.EventSubSchema](docs/EventSubSchema.md)
 - [SunshineConversationsClient.ExtraChannelOptions](docs/ExtraChannelOptions.md)
 - [SunshineConversationsClient.ExtraChannelOptionsMessenger](docs/ExtraChannelOptionsMessenger.md)
 - [SunshineConversationsClient.Field](docs/Field.md)
 - [SunshineConversationsClient.FileMessage](docs/FileMessage.md)
 - [SunshineConversationsClient.FormMessage](docs/FormMessage.md)
 - [SunshineConversationsClient.FormResponseMessage](docs/FormResponseMessage.md)
 - [SunshineConversationsClient.ImageMessage](docs/ImageMessage.md)
 - [SunshineConversationsClient.InlineObject](docs/InlineObject.md)
 - [SunshineConversationsClient.Instagram](docs/Instagram.md)
 - [SunshineConversationsClient.InstagramAllOf](docs/InstagramAllOf.md)
 - [SunshineConversationsClient.InstagramUpdate](docs/InstagramUpdate.md)
 - [SunshineConversationsClient.InstagramUpdateAllOf](docs/InstagramUpdateAllOf.md)
 - [SunshineConversationsClient.Integration](docs/Integration.md)
 - [SunshineConversationsClient.IntegrationApiKey](docs/IntegrationApiKey.md)
 - [SunshineConversationsClient.IntegrationApiKeyListResponse](docs/IntegrationApiKeyListResponse.md)
 - [SunshineConversationsClient.IntegrationApiKeyResponse](docs/IntegrationApiKeyResponse.md)
 - [SunshineConversationsClient.IntegrationId](docs/IntegrationId.md)
 - [SunshineConversationsClient.IntegrationListFilter](docs/IntegrationListFilter.md)
 - [SunshineConversationsClient.IntegrationListResponse](docs/IntegrationListResponse.md)
 - [SunshineConversationsClient.IntegrationResponse](docs/IntegrationResponse.md)
 - [SunshineConversationsClient.IntegrationType](docs/IntegrationType.md)
 - [SunshineConversationsClient.IntegrationUpdate](docs/IntegrationUpdate.md)
 - [SunshineConversationsClient.IntegrationUpdateBase](docs/IntegrationUpdateBase.md)
 - [SunshineConversationsClient.Ios](docs/Ios.md)
 - [SunshineConversationsClient.IosAllOf](docs/IosAllOf.md)
 - [SunshineConversationsClient.IosUpdate](docs/IosUpdate.md)
 - [SunshineConversationsClient.IosUpdateAllOf](docs/IosUpdateAllOf.md)
 - [SunshineConversationsClient.Item](docs/Item.md)
 - [SunshineConversationsClient.Line](docs/Line.md)
 - [SunshineConversationsClient.LineAllOf](docs/LineAllOf.md)
 - [SunshineConversationsClient.LineUpdate](docs/LineUpdate.md)
 - [SunshineConversationsClient.Link](docs/Link.md)
 - [SunshineConversationsClient.Links](docs/Links.md)
 - [SunshineConversationsClient.ListMessage](docs/ListMessage.md)
 - [SunshineConversationsClient.LocationMessage](docs/LocationMessage.md)
 - [SunshineConversationsClient.LocationMessageCoordinates](docs/LocationMessageCoordinates.md)
 - [SunshineConversationsClient.LocationMessageLocation](docs/LocationMessageLocation.md)
 - [SunshineConversationsClient.LocationRequest](docs/LocationRequest.md)
 - [SunshineConversationsClient.Mailgun](docs/Mailgun.md)
 - [SunshineConversationsClient.MailgunAllOf](docs/MailgunAllOf.md)
 - [SunshineConversationsClient.MailgunUpdate](docs/MailgunUpdate.md)
 - [SunshineConversationsClient.MailgunUpdateAllOf](docs/MailgunUpdateAllOf.md)
 - [SunshineConversationsClient.MatchCriteria](docs/MatchCriteria.md)
 - [SunshineConversationsClient.MatchCriteriaBase](docs/MatchCriteriaBase.md)
 - [SunshineConversationsClient.MatchCriteriaMailgun](docs/MatchCriteriaMailgun.md)
 - [SunshineConversationsClient.MatchCriteriaMailgunAllOf](docs/MatchCriteriaMailgunAllOf.md)
 - [SunshineConversationsClient.MatchCriteriaMessagebird](docs/MatchCriteriaMessagebird.md)
 - [SunshineConversationsClient.MatchCriteriaMessagebirdAllOf](docs/MatchCriteriaMessagebirdAllOf.md)
 - [SunshineConversationsClient.MatchCriteriaTwilio](docs/MatchCriteriaTwilio.md)
 - [SunshineConversationsClient.MatchCriteriaTwilioAllOf](docs/MatchCriteriaTwilioAllOf.md)
 - [SunshineConversationsClient.MatchCriteriaWhatsapp](docs/MatchCriteriaWhatsapp.md)
 - [SunshineConversationsClient.MatchCriteriaWhatsappAllOf](docs/MatchCriteriaWhatsappAllOf.md)
 - [SunshineConversationsClient.Message](docs/Message.md)
 - [SunshineConversationsClient.MessageBirdUpdate](docs/MessageBirdUpdate.md)
 - [SunshineConversationsClient.MessageListResponse](docs/MessageListResponse.md)
 - [SunshineConversationsClient.MessageOverride](docs/MessageOverride.md)
 - [SunshineConversationsClient.MessageOverrideApple](docs/MessageOverrideApple.md)
 - [SunshineConversationsClient.MessageOverrideLine](docs/MessageOverrideLine.md)
 - [SunshineConversationsClient.MessageOverrideMessenger](docs/MessageOverrideMessenger.md)
 - [SunshineConversationsClient.MessageOverridePayload](docs/MessageOverridePayload.md)
 - [SunshineConversationsClient.MessageOverrideWhatsapp](docs/MessageOverrideWhatsapp.md)
 - [SunshineConversationsClient.MessagePost](docs/MessagePost.md)
 - [SunshineConversationsClient.MessagePostResponse](docs/MessagePostResponse.md)
 - [SunshineConversationsClient.MessageWebhook](docs/MessageWebhook.md)
 - [SunshineConversationsClient.Messagebird](docs/Messagebird.md)
 - [SunshineConversationsClient.MessagebirdAllOf](docs/MessagebirdAllOf.md)
 - [SunshineConversationsClient.Messenger](docs/Messenger.md)
 - [SunshineConversationsClient.MessengerAllOf](docs/MessengerAllOf.md)
 - [SunshineConversationsClient.MessengerUpdate](docs/MessengerUpdate.md)
 - [SunshineConversationsClient.Meta](docs/Meta.md)
 - [SunshineConversationsClient.OfferControlBody](docs/OfferControlBody.md)
 - [SunshineConversationsClient.Page](docs/Page.md)
 - [SunshineConversationsClient.Page1](docs/Page1.md)
 - [SunshineConversationsClient.Participant](docs/Participant.md)
 - [SunshineConversationsClient.ParticipantJoinBody](docs/ParticipantJoinBody.md)
 - [SunshineConversationsClient.ParticipantLeaveBody](docs/ParticipantLeaveBody.md)
 - [SunshineConversationsClient.ParticipantLeaveBodyParticipantId](docs/ParticipantLeaveBodyParticipantId.md)
 - [SunshineConversationsClient.ParticipantLeaveBodyUserExternalId](docs/ParticipantLeaveBodyUserExternalId.md)
 - [SunshineConversationsClient.ParticipantLeaveBodyUserId](docs/ParticipantLeaveBodyUserId.md)
 - [SunshineConversationsClient.ParticipantListResponse](docs/ParticipantListResponse.md)
 - [SunshineConversationsClient.ParticipantResponse](docs/ParticipantResponse.md)
 - [SunshineConversationsClient.ParticipantSubSchema](docs/ParticipantSubSchema.md)
 - [SunshineConversationsClient.ParticipantWithUserExternalId](docs/ParticipantWithUserExternalId.md)
 - [SunshineConversationsClient.ParticipantWithUserId](docs/ParticipantWithUserId.md)
 - [SunshineConversationsClient.PassControlBody](docs/PassControlBody.md)
 - [SunshineConversationsClient.Postback](docs/Postback.md)
 - [SunshineConversationsClient.PostbackWebhook](docs/PostbackWebhook.md)
 - [SunshineConversationsClient.PrechatCapture](docs/PrechatCapture.md)
 - [SunshineConversationsClient.Profile](docs/Profile.md)
 - [SunshineConversationsClient.QuotedMessage](docs/QuotedMessage.md)
 - [SunshineConversationsClient.QuotedMessageExternalMessageId](docs/QuotedMessageExternalMessageId.md)
 - [SunshineConversationsClient.QuotedMessageMessage](docs/QuotedMessageMessage.md)
 - [SunshineConversationsClient.Referral](docs/Referral.md)
 - [SunshineConversationsClient.ReferralDetails](docs/ReferralDetails.md)
 - [SunshineConversationsClient.Reply](docs/Reply.md)
 - [SunshineConversationsClient.Source](docs/Source.md)
 - [SunshineConversationsClient.SourceWebhook](docs/SourceWebhook.md)
 - [SunshineConversationsClient.Status](docs/Status.md)
 - [SunshineConversationsClient.Switchboard](docs/Switchboard.md)
 - [SunshineConversationsClient.SwitchboardAcceptControl](docs/SwitchboardAcceptControl.md)
 - [SunshineConversationsClient.SwitchboardAcceptControlAllOf](docs/SwitchboardAcceptControlAllOf.md)
 - [SunshineConversationsClient.SwitchboardAcceptControlAllOfPayload](docs/SwitchboardAcceptControlAllOfPayload.md)
 - [SunshineConversationsClient.SwitchboardAcceptControlFailure](docs/SwitchboardAcceptControlFailure.md)
 - [SunshineConversationsClient.SwitchboardAcceptControlFailureAllOf](docs/SwitchboardAcceptControlFailureAllOf.md)
 - [SunshineConversationsClient.SwitchboardAcceptControlFailureAllOfPayload](docs/SwitchboardAcceptControlFailureAllOfPayload.md)
 - [SunshineConversationsClient.SwitchboardIntegration](docs/SwitchboardIntegration.md)
 - [SunshineConversationsClient.SwitchboardIntegrationCreateBody](docs/SwitchboardIntegrationCreateBody.md)
 - [SunshineConversationsClient.SwitchboardIntegrationListResponse](docs/SwitchboardIntegrationListResponse.md)
 - [SunshineConversationsClient.SwitchboardIntegrationResponse](docs/SwitchboardIntegrationResponse.md)
 - [SunshineConversationsClient.SwitchboardIntegrationUpdateBody](docs/SwitchboardIntegrationUpdateBody.md)
 - [SunshineConversationsClient.SwitchboardIntegrationWebhook](docs/SwitchboardIntegrationWebhook.md)
 - [SunshineConversationsClient.SwitchboardListResponse](docs/SwitchboardListResponse.md)
 - [SunshineConversationsClient.SwitchboardOfferControl](docs/SwitchboardOfferControl.md)
 - [SunshineConversationsClient.SwitchboardOfferControlAllOf](docs/SwitchboardOfferControlAllOf.md)
 - [SunshineConversationsClient.SwitchboardOfferControlAllOfPayload](docs/SwitchboardOfferControlAllOfPayload.md)
 - [SunshineConversationsClient.SwitchboardOfferControlFailure](docs/SwitchboardOfferControlFailure.md)
 - [SunshineConversationsClient.SwitchboardPassControl](docs/SwitchboardPassControl.md)
 - [SunshineConversationsClient.SwitchboardPassControlAllOf](docs/SwitchboardPassControlAllOf.md)
 - [SunshineConversationsClient.SwitchboardPassControlAllOfPayload](docs/SwitchboardPassControlAllOfPayload.md)
 - [SunshineConversationsClient.SwitchboardPassControlFailure](docs/SwitchboardPassControlFailure.md)
 - [SunshineConversationsClient.SwitchboardResponse](docs/SwitchboardResponse.md)
 - [SunshineConversationsClient.SwitchboardUpdateBody](docs/SwitchboardUpdateBody.md)
 - [SunshineConversationsClient.Target](docs/Target.md)
 - [SunshineConversationsClient.Telegram](docs/Telegram.md)
 - [SunshineConversationsClient.TelegramAllOf](docs/TelegramAllOf.md)
 - [SunshineConversationsClient.TelegramUpdate](docs/TelegramUpdate.md)
 - [SunshineConversationsClient.TemplateMessage](docs/TemplateMessage.md)
 - [SunshineConversationsClient.TextMessage](docs/TextMessage.md)
 - [SunshineConversationsClient.Twilio](docs/Twilio.md)
 - [SunshineConversationsClient.TwilioAllOf](docs/TwilioAllOf.md)
 - [SunshineConversationsClient.TwilioUpdate](docs/TwilioUpdate.md)
 - [SunshineConversationsClient.Twitter](docs/Twitter.md)
 - [SunshineConversationsClient.TwitterAllOf](docs/TwitterAllOf.md)
 - [SunshineConversationsClient.TwitterUpdate](docs/TwitterUpdate.md)
 - [SunshineConversationsClient.User](docs/User.md)
 - [SunshineConversationsClient.UserAllOf](docs/UserAllOf.md)
 - [SunshineConversationsClient.UserCreateBody](docs/UserCreateBody.md)
 - [SunshineConversationsClient.UserMergeEvent](docs/UserMergeEvent.md)
 - [SunshineConversationsClient.UserMergeEventAllOf](docs/UserMergeEventAllOf.md)
 - [SunshineConversationsClient.UserMergeEventAllOfPayload](docs/UserMergeEventAllOfPayload.md)
 - [SunshineConversationsClient.UserMergeEventAllOfPayloadMergedConversations](docs/UserMergeEventAllOfPayloadMergedConversations.md)
 - [SunshineConversationsClient.UserMergeEventAllOfPayloadMergedUsers](docs/UserMergeEventAllOfPayloadMergedUsers.md)
 - [SunshineConversationsClient.UserResponse](docs/UserResponse.md)
 - [SunshineConversationsClient.UserTruncated](docs/UserTruncated.md)
 - [SunshineConversationsClient.UserUpdateBody](docs/UserUpdateBody.md)
 - [SunshineConversationsClient.Viber](docs/Viber.md)
 - [SunshineConversationsClient.ViberAllOf](docs/ViberAllOf.md)
 - [SunshineConversationsClient.ViberUpdate](docs/ViberUpdate.md)
 - [SunshineConversationsClient.Web](docs/Web.md)
 - [SunshineConversationsClient.WebAllOf](docs/WebAllOf.md)
 - [SunshineConversationsClient.WebUpdate](docs/WebUpdate.md)
 - [SunshineConversationsClient.WebUpdateAllOf](docs/WebUpdateAllOf.md)
 - [SunshineConversationsClient.Webhook](docs/Webhook.md)
 - [SunshineConversationsClient.WebhookBody](docs/WebhookBody.md)
 - [SunshineConversationsClient.WebhookCreateBody](docs/WebhookCreateBody.md)
 - [SunshineConversationsClient.WebhookListResponse](docs/WebhookListResponse.md)
 - [SunshineConversationsClient.WebhookResponse](docs/WebhookResponse.md)
 - [SunshineConversationsClient.WebhookSubSchema](docs/WebhookSubSchema.md)
 - [SunshineConversationsClient.Webview](docs/Webview.md)
 - [SunshineConversationsClient.WhatsAppUpdate](docs/WhatsAppUpdate.md)
 - [SunshineConversationsClient.WhatsAppUpdateAllOf](docs/WhatsAppUpdateAllOf.md)
 - [SunshineConversationsClient.Whatsapp](docs/Whatsapp.md)
 - [SunshineConversationsClient.WhatsappAllOf](docs/WhatsappAllOf.md)


## Documentation for Authorization



### basicAuth


- **Type**: HTTP basic authentication



### bearerAuth


- **Type**: Bearer authentication (JWT)

