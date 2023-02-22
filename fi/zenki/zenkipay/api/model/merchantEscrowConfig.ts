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

import { RequestFile } from './models';

/**
* Summary of the amount paid in crypto currency by the buyer.
*/
export class MerchantEscrowConfig {
    /**
    * Indicates the model for the product delivery or service delivery.  Possible values: * WITH_CARRIER    - If a courier is going to be used for the shipment and delivery of the product or service. * WITHOUT_CARRIER - If a courier is not going to be used for the shipment and delivery of the product or service. * MIXED           - If a courier is going to be used to send part of the products or services and another part is delivered without using a courier.
    */
    'orderType'?: MerchantEscrowConfig.OrderTypeEnum;
    /**
    * Number of hours to wait for the merchant to notify Zenki that they have delivered the services to the shopper. Time is expressed in hours.
    */
    'shopperNotification'?: number;
    /**
    * Number of hours that Zenki will wait for confirmation from the buyer before approving the payment and releasing the funds to the merchant. Time is expressed in hours.
    */
    'timeWaitToApproval'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "orderType",
            "baseName": "orderType",
            "type": "MerchantEscrowConfig.OrderTypeEnum"
        },
        {
            "name": "shopperNotification",
            "baseName": "shopperNotification",
            "type": "number"
        },
        {
            "name": "timeWaitToApproval",
            "baseName": "timeWaitToApproval",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return MerchantEscrowConfig.attributeTypeMap;
    }
}

export namespace MerchantEscrowConfig {
    export enum OrderTypeEnum {
        WithCarrier = <any> 'WITH_CARRIER',
        WithoutCarrier = <any> 'WITHOUT_CARRIER',
        Mixed = <any> 'MIXED'
    }
}