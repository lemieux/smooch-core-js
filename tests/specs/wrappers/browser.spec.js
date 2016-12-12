import Smooch from '../../../src/wrappers/browser';
import { testJwt } from '../../mocks/jwt';

describe('Smooch', () => {
    it('should not have the webhooks API', () => {
        const smooch = new Smooch({
            jwt: testJwt()
        });
        expect(smooch.webhooks).to.be.undefined;
    });

    it('should not have the JWT utils', () => {
        const smooch = new Smooch({
            jwt: testJwt()
        });
        expect(smooch.utils.jwt).to.be.undefined;
    });

    it('should throw an error if key id is used', () => {
        try {
            new Smooch({
                keyId: 'keyId'
            });
        }
        catch (e) {
            e.message.should.contain('beforehand');
        }
    });

    it('should throw an error if secret is used', () => {
        try {
            new Smooch({
                secret: 'secret'
            });
        }
        catch (e) {
            e.message.should.contain('beforehand');
        }
    });
});
