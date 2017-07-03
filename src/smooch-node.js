import { Smooch as SmoochBase } from './smooch';
import { WebhooksApi } from './api/webhooks';
import { MenuApi } from './api/menu';
import { IntegrationsApi } from './api/integrations';
import { AppsApi } from './api/apps';
import { AppUsersApi } from './api/appUsers';
import { ConversationsApi } from './api/conversations';
import { StripeApi } from './api/stripe';
import { DisabledApi } from './api/disabled';
import { AttachmentsApi } from './api/attachments';
import * as jwt from './utils/jwt';
import { decode } from 'jsonwebtoken';

export class Smooch extends SmoochBase {
    constructor(auth = {}, options = {}) {
        if (auth.keyId || auth.secret) {
            if (!auth.scope) {
                throw new Error('Invalid auth: missing scope.');
            }

            if (!auth.keyId) {
                throw new Error('Invalid auth: missing keyId.');
            }

            if (!auth.secret) {
                throw new Error('Invalid auth: missing secret.');
            }
        }

        if (auth.keyId && auth.secret && auth.scope) {
            const jwtBody = {
                scope: auth.scope
            };

            if (auth.userId) {
                jwtBody.userId = auth.userId;
            }

            auth = {
                jwt: jwt.generate(jwtBody, auth.secret, auth.keyId),
                scope: auth.scope
            };
        }

        if (auth.jwt) {
            const decoded = decode(auth.jwt);
            if (!decoded) {
                throw new Error('jwt is malformed.');
            }
            if (!decoded.scope) {
                throw new Error('jwt has no scope defined.');
            }
            auth.scope = decoded.scope;
        }

        super(auth, options);
        this.scope = auth.scope || 'appUser';
        const isAccountScope = this.scope === 'account';

        this.menu = new MenuApi(this.serviceUrl, this.authHeaders, this.headers, isAccountScope, this.httpAgent);
        this.webhooks = new WebhooksApi(this.serviceUrl, this.authHeaders, this.headers, isAccountScope, this.httpAgent);
        this.attachments = new AttachmentsApi(this.serviceUrl, this.authHeaders, this.headers, isAccountScope, this.httpAgent);

        if (this.scope === 'account') {
            this.integrations = new IntegrationsApi(this.serviceUrl, this.authHeaders, this.headers, true, this.httpAgent);
            this.apps = new AppsApi(this.serviceUrl, this.authHeaders, this.headers, true, this.httpAgent);
            this.appUsers = new AppUsersApi(this.serviceUrl, this.authHeaders, this.headers, true, this.httpAgent);
            this.conversations = new ConversationsApi(this.serviceUrl, this.authHeaders, this.headers, true, this.httpAgent);
            this.stripe = new StripeApi(this.serviceUrl, this.authHeaders, this.headers, true, this.httpAgent);
        } else {
            const disabled = new DisabledApi('This API requires account level scope');
            this.integrations = this.apps = disabled;
        }

        Object.assign(this.utils, {
            jwt
        });
    }
}
