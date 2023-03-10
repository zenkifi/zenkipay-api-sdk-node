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
import { MerchantCryptoAssetsInner } from './merchantCryptoAssetsInner';
import { MerchantEscrowConfig } from './merchantEscrowConfig';
import { MerchantIntegrationConfig } from './merchantIntegrationConfig';
import { MerchantMerchantInfo } from './merchantMerchantInfo';

/**
* Merchant information.
*/
export class Merchant {
    'merchantInfo': MerchantMerchantInfo;
    'integrationConfig': MerchantIntegrationConfig;
    /**
    * Discount in percentage granted by the merchant to the buyer in his purchase for activating crypto love.
    */
    'cryptoLovePercentage': number;
    /**
    * Supported crypto currencies list.
    */
    'cryptoAssets'?: Array<MerchantCryptoAssetsInner>;
    'escrowConfig': MerchantEscrowConfig;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "merchantInfo",
            "baseName": "merchantInfo",
            "type": "MerchantMerchantInfo"
        },
        {
            "name": "integrationConfig",
            "baseName": "integrationConfig",
            "type": "MerchantIntegrationConfig"
        },
        {
            "name": "cryptoLovePercentage",
            "baseName": "cryptoLovePercentage",
            "type": "number"
        },
        {
            "name": "cryptoAssets",
            "baseName": "cryptoAssets",
            "type": "Array<MerchantCryptoAssetsInner>"
        },
        {
            "name": "escrowConfig",
            "baseName": "escrowConfig",
            "type": "MerchantEscrowConfig"
        }    ];

    static getAttributeTypeMap() {
        return Merchant.attributeTypeMap;
    }
}

