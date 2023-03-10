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
import { CryptoPayment } from './cryptoPayment';
import { OrderPaymentInfoCryptoLove } from './orderPaymentInfoCryptoLove';
import { OrderPaymentInfoExchangeRate } from './orderPaymentInfoExchangeRate';

/**
* Payment information
*/
export class OrderPaymentInfo {
    'exchangeRate': OrderPaymentInfoExchangeRate;
    'cryptoLove': OrderPaymentInfoCryptoLove;
    'cryptoPayment': CryptoPayment;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "exchangeRate",
            "baseName": "exchangeRate",
            "type": "OrderPaymentInfoExchangeRate"
        },
        {
            "name": "cryptoLove",
            "baseName": "cryptoLove",
            "type": "OrderPaymentInfoCryptoLove"
        },
        {
            "name": "cryptoPayment",
            "baseName": "cryptoPayment",
            "type": "CryptoPayment"
        }    ];

    static getAttributeTypeMap() {
        return OrderPaymentInfo.attributeTypeMap;
    }
}

