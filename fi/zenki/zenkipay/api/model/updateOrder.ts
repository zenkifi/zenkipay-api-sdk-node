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
import { UpdateOrderShopper } from './updateOrderShopper';

/**
* Object used with the information required to update an order.
*/
export class UpdateOrder {
    /**
    * Unique order identifier generated by the merchant.
    */
    'orderId'?: string | null;
    /**
    * Unique identifier of the shopping cart that allows identifying the purchase of one or more products or services.
    */
    'cartId'?: string | null;
    'shopper'?: UpdateOrderShopper | null;
    /**
    * Complementary information of the order that the merchant requires to send and inform Zenkipay.
    */
    'metadata'?: { [key: string]: string; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "orderId",
            "baseName": "orderId",
            "type": "string"
        },
        {
            "name": "cartId",
            "baseName": "cartId",
            "type": "string"
        },
        {
            "name": "shopper",
            "baseName": "shopper",
            "type": "UpdateOrderShopper"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return UpdateOrder.attributeTypeMap;
    }
}

