/**
 * Zenkipay API
 * Definition of technical specification of the product; Zenkipay is a gateway cryptocurrency payment system that allows merchant\'s to receive payments on their e-commerce portals. Unlike other platforms, Zenkipay ensures customer satisfaction through its payment process. guarantee deposit (delivered product and expected quality) to settle payment to the merchant, thus avoiding the loss of client assets due to online scams.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@zenki.fi
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { Webhook } from '../fi.zenki.zenkipay.api.model/webhook';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.zenki.fi';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum WebhooksApiApiKeys {
}

export class WebhooksApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'JWTAuth': new HttpBearerAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: WebhooksApiApiKeys, value: string) {
        (this.authentications as any)[WebhooksApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.JWTAuth.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Service that allows different events to be sent to the merchant.
     * @summary Event notifications for merchant
     * @param svixId Unique message identifier for the webhook message. This identifier is unique across all messages, but will be the same when the same webhook is forwarded (for example, due to a previous error).
     * @param svixTimestamp Date and time when the webhook is sent to the merchant, in milliseconds and UTC format.  The Unix epoch (or Unix time or POSIX time or Unix timestamp) is the number of seconds elapsed since January 1, 1970 (midnight UTC/GMT), not counting leap seconds (in ISO 8601: 1970-01-01T00: 00:00Z)
     * @param svixSignature Base64 encoded signature (delimited by spaces) on the sent content, the signature is generated from the following structure: signed_content &#x3D; \&quot;${svix_id}.${svix_timestamp}.${body}\&quot;.
     * @param contentType Content Type accepted.
     * @param webhook A JSON structure will be sent that will have the information about the event to notify the merchant.
     */
    public async sendEvent (svixId: string, svixTimestamp: string, svixSignature: string, contentType: string, webhook?: Webhook, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/URL_MERCHANT';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'svixId' is not null or undefined
        if (svixId === null || svixId === undefined) {
            throw new Error('Required parameter svixId was null or undefined when calling sendEvent.');
        }

        // verify required parameter 'svixTimestamp' is not null or undefined
        if (svixTimestamp === null || svixTimestamp === undefined) {
            throw new Error('Required parameter svixTimestamp was null or undefined when calling sendEvent.');
        }

        // verify required parameter 'svixSignature' is not null or undefined
        if (svixSignature === null || svixSignature === undefined) {
            throw new Error('Required parameter svixSignature was null or undefined when calling sendEvent.');
        }

        // verify required parameter 'contentType' is not null or undefined
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling sendEvent.');
        }

        localVarHeaderParams['Svix-Id'] = ObjectSerializer.serialize(svixId, "string");
        localVarHeaderParams['Svix-Timestamp'] = ObjectSerializer.serialize(svixTimestamp, "string");
        localVarHeaderParams['Svix-Signature'] = ObjectSerializer.serialize(svixSignature, "string");
        localVarHeaderParams['Content-Type'] = ObjectSerializer.serialize(contentType, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(webhook, "Webhook")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
