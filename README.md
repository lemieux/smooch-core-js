# Smooch Core

Smooch Core is the most basic for interaction possible for the [Smooch API](http://docs.smooch.io/rest). It wraps the public API in a convenient Javascript API.

This library is meant to be isomorphic, which means it can be used in the browser and server-side with Node.js. However, the webhooks API, menu API, and the JWT utils are not available in the browser to reduce the bundle size. In any case, those actions should not be performed in the browser for security reasons.

## Installation
```bash
$ npm install smooch-core --save
```

## Contributing

If a method is missing please file an Issue, or better yet make a PR!

## Usage

### In the browser (using browserify or webpack)

```js
var SmoochCore = require('smooch-core');

// using app token
var smoochCore = new SmoochCore({
    appToken: 'some-token'
});


// using generated JWT
var smoochCore = new SmoochCore({
    jwt: 'some-jwt'
});

// ...

smoochCore.appUsers.init(options).then(function(response) {
  // do something with the response.
});
```


### Server-side

```js
var SmoochCore = require('smooch-core');

// using app token
var smoochCore = new SmoochCore({
    appToken: 'some-token'
});


// using generated JWT
var smoochCore = new SmoochCore({
    jwt: 'some-jwt'
});

// using JWT components
// Only available server-side. NEVER put your keyId and secret
// in you client-side code.
var smoochCore = new SmoochCore({
    keyId: 'some-key',
    secret: 'some-secret',
    scope: 'appUser', // account, app, or appUser
    userId: 'some-id' // only required for appUser scope
});

// ...

smoochCore.webhooks.get(id).then(function(response) {
  // do something with the response.
});

```

#### Usage with a proxy
If you need to use a proxy, you can use one of the [many](https://www.npmjs.com/package/socks-proxy-agent) [proxies](https://www.npmjs.com/package/http-proxy-agent) [available](https://www.npmjs.com/package/https-proxy-agent), as long as it an `http.Agent` implementation. You only need to pass the agent when creating the SmoochCore instance. 


```js
var SmoochCore = require('smooch-core');
var SocksProxyAgent = require('socks-proxy-agent');
var proxy = process.env.http_proxy || 'socks://localhost:8123';
var agent = new SocksProxyAgent(proxy);

var core = new SmoochCore({
    keyId: 'some-key',
    secret: 'some-secret'
}, {
  httpAgent: agent
});
```

## API

Below is a list of methods included in Smooch Core. For comprehensive documentation of Smooch Core and its methods see Smooch's [REST API docs](https://docs.smooch.io/rest/).

| Module       | Method           | Endpoint                                                                                                        |
|--------------|------------------|-----------------------------------------------------------------------------------------------------------------|
| appUsers     | init             | [POST /v1/init](https://docs.smooch.io/rest/?javascript#init) |
|              | get              | [GET /v1/appusers/:id](https://docs.smooch.io/rest/?javascript#get-app-user) |
|              | update           | [PUT /v1/appusers/:id](https://docs.smooch.io/rest/?javascript#update-app-user) |
|              | deleteProfile    | [DELETE /v1/appusers/:id/profile](https://docs.smooch.io/rest/?javascript#delete-app-user) |
|              | updateDevice     | [PUT /v1/appusers/:id/devices/:deviceId](https://docs.smooch.io/rest/?javascript#update-device) |
|              | trackEvent       | [POST /v1/appusers/:id/events](https://docs.smooch.io/rest/?javascript#track-event) |
|              | create           | [POST /v1/appusers](https://docs.smooch.io/rest/?javascript#pre-create-app-user) |
|              | linkChannel      | [POST /v1/appusers/:id/channels](https://docs.smooch.io/rest/?javascript#link-app-user-to-channel) |
|              | unlinkChannel    | [POST /v1/appusers/:id/channels/:channel](https://docs.smooch.io/rest/?javascript#unlink-app-user-from-channel) |
|              | getMessages      | [GET /v1/appusers/:id/messages](https://docs.smooch.io/rest/?javascript#get-messages) |
|              | resetUnreadCount | [POST /v1/appusers/:id/conversation/read](https://docs.smooch.io/rest/?javascript#reset-unread-count) |
|              | typingActivity   | [POST /v1/appusers/:id/conversation/:activity](https://docs.smooch.io/rest/?javascript#typing-activity) |
|              | sendMessage      | [POST /v1/appusers/:id/messages](https://docs.smooch.io/rest/?javascript#post-message) |
|              | uploadImage      | [POST /v1/appusers/:id/images](https://docs.smooch.io/rest/?javascript#upload-image) |
|              | deleteMessages   | [DELETE /v1/appusers/:id/messages](https://docs.smooch.io/rest/?javascript#delete-messages) |
| menu         | get              | [GET /v1/menu](https://docs.smooch.io/rest/?javascript#get-app-menu) |
|              | configure        | [PUT /v1/menu](https://docs.smooch.io/rest/?javascript#update-app-menu) |
|              | remove           | [DELETE /v1/menu](https://docs.smooch.io/rest/?javascript#delete-app-menu) |
| webhooks     | list             | [GET /v1/webhooks](https://docs.smooch.io/rest/?javascript#list-webhooks) |
|              | create           | [POST /v1/webhooks](https://docs.smooch.io/rest/?javascript#create-webhook) |
|              | get              | [GET /v1/webhooks/:id](https://docs.smooch.io/rest/?javascript#get-webhook) |
|              | update           | [PUT /v1/webhooks/:id](https://docs.smooch.io/rest/?javascript#update-webhook) |
|              | delete           | [DELETE /v1/webhooks/:id](https://docs.smooch.io/rest/?javascript#dlete-webhook) |
| apps         | create           | [POST /v1/apps](https://docs.smooch.io/rest/?javascript#create-app) |
|              | list             | [GET /v1/apps](https://docs.smooch.io/rest/?javascript#list-apps) |
|              | get              | [GET /v1/apps/:id](https://docs.smooch.io/rest/?javascript#get-app) |
|              | delete           | [DELETE /v1/apps/:id](https://docs.smooch.io/rest/?javascript#delete-app) |
|              | keys.create      | [POST /v1/apps/:id/keys](https://docs.smooch.io/rest/?javascript#create-key) |
|              | keys.list        | [GET /v1/apps/:id/keys](https://docs.smooch.io/rest/?javascript#list-keys) |
|              | keys.get         | [GET /v1/apps/:id/keys/:keyId](https://docs.smooch.io/rest/?javascript#get-key) |
|              | keys.delete      | [DELETE /v1/apps/:id/:keyId](https://docs.smooch.io/rest/?javascript#delete-key) |
|              | keys.getJwt      | [GET /v1/apps/:id/keys/:keyId/jwt](https://docs.smooch.io/rest/?javascript#get-jwt) |
| integrations | create           | [POST /v1/apps/:id/integrations](https://docs.smooch.io/rest/?javascript#create-integration) |
|              | list             | [GET /v1/apps/:id/integrations](https://docs.smooch.io/rest/?javascript#list-integrations) |
|              | get              | [GET /v1/apps/:id/integrations/integrationId](https://docs.smooch.io/rest/?javascript#get-integration) |
|              | delete           | [DELETE /v1/apps/:id/integrations/:integrationId](https://docs.smooch.io/rest/?javascript#delete-integration) |
|              | menu.get         | [GET /v1/apps/:id/integrations/:integrationId/menu](https://docs.smooch.io/rest/?javascript#get-integration-menu) |
|              | menu.create      | [POST /v1/apps/:id/integrations/:integrationId/menu](https://docs.smooch.io/rest/?javascript#create-integration-menu) |
|              | menu.update      | [PUT /v1/apps/:id/integrations/:integrationId/menu](https://docs.smooch.io/rest/?javascript#update-integration-menu) |
|              | menu.delete      | [DELETE /v1/apps/:id/integrations/:integrationId/menu](https://docs.smooch.io/rest/?javascript#delete-integration-menu) |
