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

export class TrackingEventsInner {
    /**
    * Delivery process states.  Possible values: * TRANSIT              - In delivery process. * DELIVERY             - The product or service has been delivered. * AVAILABLE_FOR_PICKUP - The product or service is ready for the buyer to pick it up at the store. * CANCELED             - The shipment has been cancelled. * FAILED               - There was a problem trying to deliver the product or service.
    */
    'status': TrackingEventsInner.StatusEnum;
    /**
    * Place where the event is triggered and the packet is located.
    */
    'location': string;
    /**
    * Detail of the error for which the shipment could not be completed or if the product or service was delivered correctly, indicate who received it.
    */
    'description': string;
    /**
    * Date and time the trace event was logged, in milliseconds and UTC format.  The Unix epoch (or Unix time or POSIX time or Unix timestamp) is the number of seconds elapsed since January 1, 1970 (midnight UTC/GMT), not counting leap seconds (in ISO 8601: 1970-01-01T00: 00:00Z)
    */
    'createdAt'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "TrackingEventsInner.StatusEnum"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TrackingEventsInner.attributeTypeMap;
    }
}

export namespace TrackingEventsInner {
    export enum StatusEnum {
        Transit = <any> 'TRANSIT',
        Delivery = <any> 'DELIVERY',
        AvailableForPickup = <any> 'AVAILABLE_FOR_PICKUP',
        Canceled = <any> 'CANCELED',
        Failed = <any> 'FAILED'
    }
}
