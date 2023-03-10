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
import { ErrorResponseValidationErrorsInner } from './errorResponseValidationErrorsInner';

export class ErrorResponse {
    /**
    * Unique identifier of the error generated by Zenkipay for each request sent to the API.
    */
    'requestId': string;
    /**
    * Short description of the error.
    */
    'title': string;
    /**
    * Error code that helps to identify the reason for the problem when processing the request. This code will be based on the HTTP codes currently supported by the specification: https://www.rfc-editor.org/rfc/rfc9110#section-15
    */
    'errorCode': number;
    /**
    * Error Category.   Possible values: * FATAL  - Any error that forces the service or application to close to prevent data loss (or further data loss). It is reserved for only the most egregious errors and situations where data corruption or loss is guaranteed to have occurred. * SEVERE - Any error that is fatal for the service, but not for the entire application (The service has stopped responding or an operation cannot be executed). These errors will force the intervention of the user (administrator or direct user). * ERROR  - Any error that is fatal to the operation, but not to the service or application (cannot open a required file, missing data, etc.). These errors will force the intervention of the user (administrator or direct user). * WARN   - Anything that could potentially cause application weirdness, but for which I am self-recovering (Such as switching from a primary to a backup server, retrying an operation, losing secondary data, etc.). * INFO   - Informational messages highlighting the app\'s progress and possibly some minor bug that impacts the experience very little.
    */
    'category': ErrorResponse.CategoryEnum;
    /**
    * Set of validations that did not pass when evaluating the request information.
    */
    'validationErrors'?: Array<ErrorResponseValidationErrorsInner> | null;
    /**
    * Recommended error message to show buyers, this message is supported for English and Spanish languages.
    */
    'humanMessage': string;
    /**
    * Date and time in milliseconds and UTC format to identify the different requests in time, the different ones that have had errors.  The Unix epoch (or Unix time or POSIX time or Unix timestamp) is the number of seconds elapsed since January 1, 1970 (midnight UTC/GMT), not counting leap seconds (in ISO 8601: 1970-01-01T00: 00:00Z)
    */
    'timestamp': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "requestId",
            "baseName": "requestId",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "errorCode",
            "baseName": "errorCode",
            "type": "number"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "ErrorResponse.CategoryEnum"
        },
        {
            "name": "validationErrors",
            "baseName": "validationErrors",
            "type": "Array<ErrorResponseValidationErrorsInner>"
        },
        {
            "name": "humanMessage",
            "baseName": "humanMessage",
            "type": "string"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ErrorResponse.attributeTypeMap;
    }
}

export namespace ErrorResponse {
    export enum CategoryEnum {
        Fatal = <any> 'FATAL',
        Severe = <any> 'SEVERE',
        Error = <any> 'ERROR',
        Warn = <any> 'WARN',
        Info = <any> 'INFO'
    }
}
