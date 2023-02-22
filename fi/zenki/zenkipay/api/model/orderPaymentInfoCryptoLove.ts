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
* Summary of the discount made to the purchase for the use of crypto love.
*/
export class OrderPaymentInfoCryptoLove {
    /**
    * Discount in percentage granted by the merchant to the buyer in his purchase for activating crypto love.
    */
    'discountPercentage': number;
    /**
    * Discount in amount granted by the merchant to the buyer in his purchase for activating crypto love in USD.
    */
    'discountAmount': number;
    /**
    * Payment amount after discount in USD.
    */
    'finalAmount': number;
    /**
    * Unique currency code of the country which is used to settle the merchant always in USD, the ISO 4217 standard definition is used with 3 characters, see: https://es.wikipedia.org/wiki/ISO_4217 o https://www.iso.org/iso-4217-currency-codes.html
    */
    'currency': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "discountPercentage",
            "baseName": "discountPercentage",
            "type": "number"
        },
        {
            "name": "discountAmount",
            "baseName": "discountAmount",
            "type": "number"
        },
        {
            "name": "finalAmount",
            "baseName": "finalAmount",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OrderPaymentInfoCryptoLove.attributeTypeMap;
    }
}

