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
import { CreateOrder } from '../fi.zenki.zenkipay.api.model/createOrder';
import { ErrorResponse } from '../fi.zenki.zenkipay.api.model/errorResponse';
import { Order } from '../fi.zenki.zenkipay.api.model/order';
import { UpdateOrder } from '../fi.zenki.zenkipay.api.model/updateOrder';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.zenki.fi';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum OrdersApiApiKeys {
}

export class OrdersApi {
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

    public setApiKey(key: OrdersApiApiKeys, value: string) {
        (this.authentications as any)[OrdersApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.JWTAuth.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Service that allows registering a payment order and associating it with a merchant.
     * @summary Payment order registration
     * @param contentType Content type accepted.
     * @param accept Accepted formats.
     * @param xZENKIPLUGINID Unique customer identifier used to establish connection with Zenkipay services.
     * @param acceptLanguage Indicates the language type code for which the content of the services response is returned according to the language reported.  The definition of the ISO_639 standard is used. See: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes or https://www.iso.org/iso-639-language-codes.html
     * @param createOrder A JSON structure will be sent that will have the required information to create an order.
     */
    public async createOrder (contentType: string, accept: string, xZENKIPLUGINID?: string, acceptLanguage?: string, createOrder?: CreateOrder, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Order;  }> {
        const localVarPath = this.basePath + '/v1/pay/orders';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/hal+json', 'application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'contentType' is not null or undefined
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling createOrder.');
        }

        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling createOrder.');
        }

        localVarHeaderParams['X-ZENKI-PLUGIN-ID'] = ObjectSerializer.serialize(xZENKIPLUGINID, "string");
        localVarHeaderParams['Accept-Language'] = ObjectSerializer.serialize(acceptLanguage, "string");
        localVarHeaderParams['Content-Type'] = ObjectSerializer.serialize(contentType, "string");
        localVarHeaderParams['Accept'] = ObjectSerializer.serialize(accept, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createOrder, "CreateOrder")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.JWTAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.JWTAuth.applyToRequest(localVarRequestOptions));
        }
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
            return new Promise<{ response: http.IncomingMessage; body: Order;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Order");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Order information is obtained based on the Zenkipay order id.
     * @summary Order information
     * @param zenkiOrderId Unique order identifier generated by Zenkipay.
     * @param contentType Content type accepted.
     * @param accept Accepted formats.
     * @param xZENKIPLUGINID Unique customer identifier used to establish connection with Zenkipay services.
     * @param acceptLanguage Indicates the language type code for which the content of the services response is returned according to the language reported.  The definition of the ISO_639 standard is used. See: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes or https://www.iso.org/iso-639-language-codes.html
     */
    public async getOrder (zenkiOrderId: string, contentType: string, accept: string, xZENKIPLUGINID?: string, acceptLanguage?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Order;  }> {
        const localVarPath = this.basePath + '/v1/pay/orders/{zenkiOrderId}'
            .replace('{' + 'zenkiOrderId' + '}', encodeURIComponent(String(zenkiOrderId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/hal+json', 'application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'zenkiOrderId' is not null or undefined
        if (zenkiOrderId === null || zenkiOrderId === undefined) {
            throw new Error('Required parameter zenkiOrderId was null or undefined when calling getOrder.');
        }

        // verify required parameter 'contentType' is not null or undefined
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling getOrder.');
        }

        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling getOrder.');
        }

        localVarHeaderParams['X-ZENKI-PLUGIN-ID'] = ObjectSerializer.serialize(xZENKIPLUGINID, "string");
        localVarHeaderParams['Accept-Language'] = ObjectSerializer.serialize(acceptLanguage, "string");
        localVarHeaderParams['Content-Type'] = ObjectSerializer.serialize(contentType, "string");
        localVarHeaderParams['Accept'] = ObjectSerializer.serialize(accept, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.JWTAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.JWTAuth.applyToRequest(localVarRequestOptions));
        }
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
            return new Promise<{ response: http.IncomingMessage; body: Order;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Order");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Service that allows updating a payment order.
     * @summary Order update for payment
     * @param zenkiOrderId Unique order identifier generated by Zenkipay.
     * @param contentType Content type accepted.
     * @param accept Accepted formats.
     * @param xZENKIPLUGINID Unique customer identifier used to establish connection with Zenkipay services.
     * @param acceptLanguage Indicates the language type code for which the content of the services response is returned according to the language reported.  The definition of the ISO_639 standard is used. See: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes or https://www.iso.org/iso-639-language-codes.html
     * @param updateOrder A JSON structure will be sent that will have the required information to update an order.
     */
    public async updateOrder (zenkiOrderId: string, contentType: string, accept: string, xZENKIPLUGINID?: string, acceptLanguage?: string, updateOrder?: UpdateOrder, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Order;  }> {
        const localVarPath = this.basePath + '/v1/pay/orders/{zenkiOrderId}'
            .replace('{' + 'zenkiOrderId' + '}', encodeURIComponent(String(zenkiOrderId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/hal+json', 'application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'zenkiOrderId' is not null or undefined
        if (zenkiOrderId === null || zenkiOrderId === undefined) {
            throw new Error('Required parameter zenkiOrderId was null or undefined when calling updateOrder.');
        }

        // verify required parameter 'contentType' is not null or undefined
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling updateOrder.');
        }

        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new Error('Required parameter accept was null or undefined when calling updateOrder.');
        }

        localVarHeaderParams['X-ZENKI-PLUGIN-ID'] = ObjectSerializer.serialize(xZENKIPLUGINID, "string");
        localVarHeaderParams['Accept-Language'] = ObjectSerializer.serialize(acceptLanguage, "string");
        localVarHeaderParams['Content-Type'] = ObjectSerializer.serialize(contentType, "string");
        localVarHeaderParams['Accept'] = ObjectSerializer.serialize(accept, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PATCH',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateOrder, "UpdateOrder")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.JWTAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.JWTAuth.applyToRequest(localVarRequestOptions));
        }
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
            return new Promise<{ response: http.IncomingMessage; body: Order;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Order");
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