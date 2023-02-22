export * from './authenticationAndAuthorizationApi';
import { AuthenticationAndAuthorizationApi } from './authenticationAndAuthorizationApi';
export * from './escrowApi';
import { EscrowApi } from './escrowApi';
export * from './merchantsApi';
import { MerchantsApi } from './merchantsApi';
export * from './ordersApi';
import { OrdersApi } from './ordersApi';
export * from './refundsApi';
import { RefundsApi } from './refundsApi';
export * from './trackingApi';
import { TrackingApi } from './trackingApi';
export * from './webhooksApi';
import { WebhooksApi } from './webhooksApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AuthenticationAndAuthorizationApi, EscrowApi, MerchantsApi, OrdersApi, RefundsApi, TrackingApi, WebhooksApi];
