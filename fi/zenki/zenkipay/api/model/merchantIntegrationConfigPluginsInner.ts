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
* Configuration of an active plugin.
*/
export class MerchantIntegrationConfigPluginsInner {
    /**
    * Active plugin name.  Posibles valores: * SCRIPT      - Integration through Zenkipay API. * WOOCOMMERCE - Integration through the WooCommerce plugin. * BIGCOMMERCE - Integration through the BigCommerce plugin. * MAGENTO     - Integration through the Magento plugin. * ECWID       - Integration through the ECWID plugin. * SHOPIFY     - Integration through the Shopify plugin. * VTEX        - Integration through the VTEX plugin. * ANGULAR     - Integration through the Angular Front-End library. * REACT       - Integration through the React Front-End library. * VUEJS       - Integration through the VUE JS Front-End library. * PRESTASHOP  - Integration through the Prestashop plugin.
    */
    'name': MerchantIntegrationConfigPluginsInner.NameEnum;
    /**
    * Active plugin key.
    */
    'clientId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "MerchantIntegrationConfigPluginsInner.NameEnum"
        },
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MerchantIntegrationConfigPluginsInner.attributeTypeMap;
    }
}

export namespace MerchantIntegrationConfigPluginsInner {
    export enum NameEnum {
        Script = <any> 'SCRIPT',
        Woocommerce = <any> 'WOOCOMMERCE',
        Bigcommerce = <any> 'BIGCOMMERCE',
        Magento = <any> 'MAGENTO',
        Ecwid = <any> 'ECWID',
        Shopify = <any> 'SHOPIFY',
        Vtex = <any> 'VTEX',
        Angular = <any> 'ANGULAR',
        React = <any> 'REACT',
        Vuejs = <any> 'VUEJS',
        Prestashop = <any> 'PRESTASHOP'
    }
}