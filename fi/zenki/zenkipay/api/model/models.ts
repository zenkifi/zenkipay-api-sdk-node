import localVarRequest from 'request';

export * from './addTracking';
export * from './addTrackingEvent';
export * from './authenticationErrorResponse';
export * from './breakdown';
export * from './createOrder';
export * from './cryptoPayment';
export * from './errorResponse';
export * from './errorResponseValidationErrorsInner';
export * from './item';
export * from './merchant';
export * from './merchantCryptoAssetsInner';
export * from './merchantEscrowConfig';
export * from './merchantIntegrationConfig';
export * from './merchantIntegrationConfigPluginsInner';
export * from './merchantMerchantInfo';
export * from './order';
export * from './orderClaim';
export * from './orderDispute';
export * from './orderLinks';
export * from './orderLinksRefund';
export * from './orderPaymentInfo';
export * from './orderPaymentInfoCryptoLove';
export * from './orderPaymentInfoExchangeRate';
export * from './orderSettlementInfo';
export * from './orderSettlementInfoCryptoSettlement';
export * from './refund';
export * from './refundFiatOriginalPayment';
export * from './requestRefund';
export * from './requestTokenOAuth2';
export * from './shopper';
export * from './tokenOAuth2';
export * from './tracking';
export * from './trackingEventsInner';
export * from './trackingExternalCourier';
export * from './updateOrder';
export * from './updateOrderShopper';
export * from './webhook';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AddTracking } from './addTracking';
import { AddTrackingEvent } from './addTrackingEvent';
import { AuthenticationErrorResponse } from './authenticationErrorResponse';
import { Breakdown } from './breakdown';
import { CreateOrder } from './createOrder';
import { CryptoPayment } from './cryptoPayment';
import { ErrorResponse } from './errorResponse';
import { ErrorResponseValidationErrorsInner } from './errorResponseValidationErrorsInner';
import { Item } from './item';
import { Merchant } from './merchant';
import { MerchantCryptoAssetsInner } from './merchantCryptoAssetsInner';
import { MerchantEscrowConfig } from './merchantEscrowConfig';
import { MerchantIntegrationConfig } from './merchantIntegrationConfig';
import { MerchantIntegrationConfigPluginsInner } from './merchantIntegrationConfigPluginsInner';
import { MerchantMerchantInfo } from './merchantMerchantInfo';
import { Order } from './order';
import { OrderClaim } from './orderClaim';
import { OrderDispute } from './orderDispute';
import { OrderLinks } from './orderLinks';
import { OrderLinksRefund } from './orderLinksRefund';
import { OrderPaymentInfo } from './orderPaymentInfo';
import { OrderPaymentInfoCryptoLove } from './orderPaymentInfoCryptoLove';
import { OrderPaymentInfoExchangeRate } from './orderPaymentInfoExchangeRate';
import { OrderSettlementInfo } from './orderSettlementInfo';
import { OrderSettlementInfoCryptoSettlement } from './orderSettlementInfoCryptoSettlement';
import { Refund } from './refund';
import { RefundFiatOriginalPayment } from './refundFiatOriginalPayment';
import { RequestRefund } from './requestRefund';
import { RequestTokenOAuth2 } from './requestTokenOAuth2';
import { Shopper } from './shopper';
import { TokenOAuth2 } from './tokenOAuth2';
import { Tracking } from './tracking';
import { TrackingEventsInner } from './trackingEventsInner';
import { TrackingExternalCourier } from './trackingExternalCourier';
import { UpdateOrder } from './updateOrder';
import { UpdateOrderShopper } from './updateOrderShopper';
import { Webhook } from './webhook';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AddTracking.CourierTypeEnum": AddTracking.CourierTypeEnum,
        "AddTrackingEvent.StatusEnum": AddTrackingEvent.StatusEnum,
        "CreateOrder.TypeEnum": CreateOrder.TypeEnum,
        "CryptoPayment.TransactionStatusEnum": CryptoPayment.TransactionStatusEnum,
        "ErrorResponse.CategoryEnum": ErrorResponse.CategoryEnum,
        "Item.TypeEnum": Item.TypeEnum,
        "MerchantEscrowConfig.OrderTypeEnum": MerchantEscrowConfig.OrderTypeEnum,
        "MerchantIntegrationConfigPluginsInner.NameEnum": MerchantIntegrationConfigPluginsInner.NameEnum,
        "MerchantMerchantInfo.AccountTypeEnum": MerchantMerchantInfo.AccountTypeEnum,
        "MerchantMerchantInfo.KycStatusEnum": MerchantMerchantInfo.KycStatusEnum,
        "MerchantMerchantInfo.IntegrationStatusEnum": MerchantMerchantInfo.IntegrationStatusEnum,
        "Order.TypeEnum": Order.TypeEnum,
        "Order.StatusEnum": Order.StatusEnum,
        "OrderClaim.StatusEnum": OrderClaim.StatusEnum,
        "OrderDispute.StatusEnum": OrderDispute.StatusEnum,
        "OrderDispute.ResolutionRequestTypeEnum": OrderDispute.ResolutionRequestTypeEnum,
        "Refund.StatusEnum": Refund.StatusEnum,
        "Tracking.CourierTypeEnum": Tracking.CourierTypeEnum,
        "TrackingEventsInner.StatusEnum": TrackingEventsInner.StatusEnum,
}

let typeMap: {[index: string]: any} = {
    "AddTracking": AddTracking,
    "AddTrackingEvent": AddTrackingEvent,
    "AuthenticationErrorResponse": AuthenticationErrorResponse,
    "Breakdown": Breakdown,
    "CreateOrder": CreateOrder,
    "CryptoPayment": CryptoPayment,
    "ErrorResponse": ErrorResponse,
    "ErrorResponseValidationErrorsInner": ErrorResponseValidationErrorsInner,
    "Item": Item,
    "Merchant": Merchant,
    "MerchantCryptoAssetsInner": MerchantCryptoAssetsInner,
    "MerchantEscrowConfig": MerchantEscrowConfig,
    "MerchantIntegrationConfig": MerchantIntegrationConfig,
    "MerchantIntegrationConfigPluginsInner": MerchantIntegrationConfigPluginsInner,
    "MerchantMerchantInfo": MerchantMerchantInfo,
    "Order": Order,
    "OrderClaim": OrderClaim,
    "OrderDispute": OrderDispute,
    "OrderLinks": OrderLinks,
    "OrderLinksRefund": OrderLinksRefund,
    "OrderPaymentInfo": OrderPaymentInfo,
    "OrderPaymentInfoCryptoLove": OrderPaymentInfoCryptoLove,
    "OrderPaymentInfoExchangeRate": OrderPaymentInfoExchangeRate,
    "OrderSettlementInfo": OrderSettlementInfo,
    "OrderSettlementInfoCryptoSettlement": OrderSettlementInfoCryptoSettlement,
    "Refund": Refund,
    "RefundFiatOriginalPayment": RefundFiatOriginalPayment,
    "RequestRefund": RequestRefund,
    "RequestTokenOAuth2": RequestTokenOAuth2,
    "Shopper": Shopper,
    "TokenOAuth2": TokenOAuth2,
    "Tracking": Tracking,
    "TrackingEventsInner": TrackingEventsInner,
    "TrackingExternalCourier": TrackingExternalCourier,
    "UpdateOrder": UpdateOrder,
    "UpdateOrderShopper": UpdateOrderShopper,
    "Webhook": Webhook,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
