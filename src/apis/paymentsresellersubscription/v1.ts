// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace paymentsresellersubscription_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Payments Reseller Subscription API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const paymentsresellersubscription = google.paymentsresellersubscription('v1');
   * ```
   */
  export class Paymentsresellersubscription {
    context: APIRequestContext;
    partners: Resource$Partners;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.partners = new Resource$Partners(this.context);
    }
  }

  export interface Schema$GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest {
    /**
     * Optional. If true, the subscription will be cancelled immediately. Otherwise, the subscription will be cancelled at renewal_time, and therefore no prorated refund will be issued for the rest of the cycle.
     */
    cancelImmediately?: boolean | null;
    /**
     * Specifies the reason for the cancellation.
     */
    cancellationReason?: string | null;
  }
  export interface Schema$GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse {
    /**
     * The cancelled subscription resource.
     */
    subscription?: Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription;
  }
  /**
   * Describes the length of a period of a time.
   */
  export interface Schema$GoogleCloudPaymentsResellerSubscriptionV1Duration {
    /**
     * number of duration units to be included.
     */
    count?: number | null;
    /**
     * The unit used for the duration
     */
    unit?: string | null;
  }
  /**
   * Partner request for entitling the previously provisioned subscription to an end user. The end user identity is inferred from the request OAuth context.
   */
  export interface Schema$GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest {}
  export interface Schema$GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse {
    /**
     * The subscription that has user linked to it.
     */
    subscription?: Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription;
  }
  /**
   * Request message for extending a Subscription resource. A new recurrence will be made based on the subscription schedule defined by the original product.
   */
  export interface Schema$GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest {
    /**
     * Required. Specifies details of the extension. Currently, the duration of the extension must be exactly one billing cycle of the original subscription.
     */
    extension?: Schema$GoogleCloudPaymentsResellerSubscriptionV1Extension;
    /**
     * Required. Restricted to 36 ASCII characters. A random UUID is recommended. The idempotency key for the request. The ID generation logic is controlled by the partner. request_id should be the same as on retries of the same request. A different request_id must be used for a extension of a different cycle. A random UUID is recommended.
     */
    requestId?: string | null;
  }
  export interface Schema$GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse {
    /**
     * The time at which the subscription is expected to be extended, in ISO 8061 format. UTC timezone. Example, "cycleEndTime":"2019-08-31T17:28:54.564Z"
     */
    cycleEndTime?: string | null;
    /**
     * End of the free trial period, in ISO 8061 format. UTC timezone. Example, "freeTrialEndTime":"2019-08-31T17:28:54.564Z" This time will be set the same as initial subscription creation time if no free trial period is offered to the partner.
     */
    freeTrialEndTime?: string | null;
  }
  /**
   * Describes the details of an extension request.
   */
  export interface Schema$GoogleCloudPaymentsResellerSubscriptionV1Extension {
    /**
     * Specifies the period of access the subscription should grant.
     */
    duration?: Schema$GoogleCloudPaymentsResellerSubscriptionV1Duration;
    /**
     * Required. Identifier of the end-user in partner’s system.
     */
    partnerUserToken?: string | null;
  }
  export interface Schema$GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The products for the specified partner.
     */
    products?: Schema$GoogleCloudPaymentsResellerSubscriptionV1Product[];
  }
  export interface Schema$GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The promotions for the specified partner.
     */
    promotions?: Schema$GoogleCloudPaymentsResellerSubscriptionV1Promotion[];
  }
  /**
   * Describes a location of an end user.
   */
  export interface Schema$GoogleCloudPaymentsResellerSubscriptionV1Location {
    /**
     * The postal code this location refers to. Ex. "94043"
     */
    postalCode?: string | null;
    /**
     * 2-letter ISO region code for current content region. Ex. “US” Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1
     */
    regionCode?: string | null;
  }
  /**
   * A Product resource that defines a subscription service that can be resold.
   */
  export interface Schema$GoogleCloudPaymentsResellerSubscriptionV1Product {
    /**
     * Output only. Response only. Resource name of the subscription. It will have the format of "partners/{partner_id\}/products/{product_id\}"
     */
    name?: string | null;
    /**
     * Output only. 2-letter ISO region code where the product is available in. Ex. "US" Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1
     */
    regionCodes?: string[] | null;
    /**
     * Output only. Specifies the length of the billing cycle of the subscription.
     */
    subscriptionBillingCycleDuration?: Schema$GoogleCloudPaymentsResellerSubscriptionV1Duration;
    /**
     * Output only. Localized human readable name of the product.
     */
    titles?: Schema$GoogleTypeLocalizedText[];
  }
  /**
   * A Promotion resource that defines a promotion for a subscription that can be resold.
   */
  export interface Schema$GoogleCloudPaymentsResellerSubscriptionV1Promotion {
    /**
     * Output only. The product ids this promotion can be applied to.
     */
    applicableProducts?: string[] | null;
    /**
     * Optional. Specifies the end time (exclusive) of the period that the promotion is available in. If unset, the promotion is available indefinitely.
     */
    endTime?: string | null;
    /**
     * Optional. Specifies the duration of the free trial of the subscription when promotion_type is PROMOTION_TYPE_FREE_TRIAL
     */
    freeTrialDuration?: Schema$GoogleCloudPaymentsResellerSubscriptionV1Duration;
    /**
     * Output only. Response only. Resource name of the subscription promotion. It will have the format of "partners/{partner_id\}/promotion/{promotion_id\}"
     */
    name?: string | null;
    /**
     * Output only. 2-letter ISO region code where the promotion is available in. Ex. "US" Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1
     */
    regionCodes?: string[] | null;
    /**
     * Optional. Specifies the start time (inclusive) of the period that the promotion is available in.
     */
    startTime?: string | null;
    /**
     * Output only. Localized human readable name of the promotion.
     */
    titles?: Schema$GoogleTypeLocalizedText[];
  }
  /**
   * A Subscription resource managed by 3P Partners.
   */
  export interface Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription {
    /**
     * Output only. Describes the details of a cancelled subscription. Only applicable to subscription of state `STATE_CANCELLED`.
     */
    cancellationDetails?: Schema$GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails;
    /**
     * Output only. System generated timestamp when the subscription is created. UTC timezone.
     */
    createTime?: string | null;
    /**
     * Output only. The time at which the subscription is expected to be extended, in ISO 8061 format. UTC timezone. For example: "2019-08-31T17:28:54.564Z"
     */
    cycleEndTime?: string | null;
    /**
     * Output only. Indicates if the subscription is entitled to the end user.
     */
    endUserEntitled?: boolean | null;
    /**
     * Output only. End of the free trial period, in ISO 8061 format. For example, "2019-08-31T17:28:54.564Z". It will be set the same as createTime if no free trial promotion is specified.
     */
    freeTrialEndTime?: string | null;
    /**
     * Output only. Response only. Resource name of the subscription. It will have the format of "partners/{partner_id\}/subscriptions/{subscription_id\}"
     */
    name?: string | null;
    /**
     * Required. Identifier of the end-user in partner’s system. The value is restricted to 63 ASCII characters at the maximum.
     */
    partnerUserToken?: string | null;
    /**
     * Output only. Describes the processing state of the subscription. See more details at [the lifecycle of a subscription](/payments/reseller/subscription/reference/index/Receive.Notifications#payments-subscription-lifecycle).
     */
    processingState?: string | null;
    /**
     * Required. Resource name that identifies one or more subscription products. The format will be 'partners/{partner_id\}/products/{product_id\}'.
     */
    products?: string[] | null;
    /**
     * Optional. Resource name that identifies one or more promotions that can be applied on the product. A typical promotion for a subscription is Free trial. The format will be 'partners/{partner_id\}/promotions/{promotion_id\}'.
     */
    promotions?: string[] | null;
    /**
     * Output only. The place where partners should redirect the end-user to after creation. This field might also be populated when creation failed. However, Partners should always prepare a default URL to redirect the user in case this field is empty.
     */
    redirectUri?: string | null;
    /**
     * Required. The location that the service is provided as indicated by the partner.
     */
    serviceLocation?: Schema$GoogleCloudPaymentsResellerSubscriptionV1Location;
    /**
     * Output only. Describes the state of the subscription. See more details at [the lifecycle of a subscription](/payments/reseller/subscription/reference/index/Receive.Notifications#payments-subscription-lifecycle).
     */
    state?: string | null;
    /**
     * Output only. System generated timestamp when the subscription is most recently updated. UTC timezone.
     */
    updateTime?: string | null;
    /**
     * Optional. Details about the previous subscription that this new subscription upgrades/downgrades from. Only populated if this subscription is an upgrade/downgrade from another subscription.
     */
    upgradeDowngradeDetails?: Schema$GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails;
  }
  /**
   * Describes the details of a cancelled or cancelling subscription.
   */
  export interface Schema$GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails {
    /**
     * The reason of the cancellation.
     */
    reason?: string | null;
  }
  /**
   * Details about the previous subscription that this new subscription upgrades/downgrades from.
   */
  export interface Schema$GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails {
    /**
     * Required. Specifies the billing cycle spec for the new upgraded/downgraded subscription.
     */
    billingCycleSpec?: string | null;
    /**
     * Required. The previous subscription id to be replaced. This is not the full resource name, use the subscription_id segment only.
     */
    previousSubscriptionId?: string | null;
  }
  /**
   * Request to revoke a cancellation request.
   */
  export interface Schema$GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionRequest {}
  /**
   * Response that contains the updated subscription resource.
   */
  export interface Schema$GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse {
    /**
     * The updated subscription resource.
     */
    subscription?: Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription;
  }
  /**
   * Localized variant of a text in a particular language.
   */
  export interface Schema$GoogleTypeLocalizedText {
    /**
     * The text's BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
    /**
     * Localized string in the language corresponding to `language_code' below.
     */
    text?: string | null;
  }

  export class Resource$Partners {
    context: APIRequestContext;
    products: Resource$Partners$Products;
    promotions: Resource$Partners$Promotions;
    subscriptions: Resource$Partners$Subscriptions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.products = new Resource$Partners$Products(this.context);
      this.promotions = new Resource$Partners$Promotions(this.context);
      this.subscriptions = new Resource$Partners$Subscriptions(this.context);
    }
  }

  export class Resource$Partners$Products {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Used by partners to list products that can be resold to their customers. It should be called directly by the partner using service accounts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/paymentsresellersubscription.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const paymentsresellersubscription = google.paymentsresellersubscription('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await paymentsresellersubscription.partners.products.list({
     *     // Optional. The maximum number of products to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProducts` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, the partner that can resell. Format: partners/{partner\}
     *     parent: 'partners/my-partner',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "products": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Partners$Products$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Partners$Products$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse>;
    list(
      params: Params$Resource$Partners$Products$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Partners$Products$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse>
    ): void;
    list(
      params: Params$Resource$Partners$Products$List,
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Partners$Products$List
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Products$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Products$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://paymentsresellersubscription.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/products').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Partners$Products$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of products to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProducts` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, the partner that can resell. Format: partners/{partner\}
     */
    parent?: string;
  }

  export class Resource$Partners$Promotions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Used by partners to list promotions, such as free trial, that can be applied on subscriptions. It should be called directly by the partner using service accounts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/paymentsresellersubscription.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const paymentsresellersubscription = google.paymentsresellersubscription('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await paymentsresellersubscription.partners.promotions.list({
     *     // Optional. Specifies the filters for the promotion results. The syntax defined in the EBNF grammar: https://google.aip.dev/assets/misc/ebnf-filtering.txt. Examples: - applicable_products: "sku1" - region_codes: "US" - applicable_products: "sku1" AND region_codes: "US"
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListPromotions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotions` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, the partner that can resell. Format: partners/{partner\}
     *     parent: 'partners/my-partner',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "promotions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Partners$Promotions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Partners$Promotions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse>;
    list(
      params: Params$Resource$Partners$Promotions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Partners$Promotions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse>
    ): void;
    list(
      params: Params$Resource$Partners$Promotions$List,
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Partners$Promotions$List
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Promotions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Promotions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://paymentsresellersubscription.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/promotions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Partners$Promotions$List
    extends StandardParameters {
    /**
     * Optional. Specifies the filters for the promotion results. The syntax defined in the EBNF grammar: https://google.aip.dev/assets/misc/ebnf-filtering.txt. Examples: - applicable_products: "sku1" - region_codes: "US" - applicable_products: "sku1" AND region_codes: "US"
     */
    filter?: string;
    /**
     * Optional. The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListPromotions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotions` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, the partner that can resell. Format: partners/{partner\}
     */
    parent?: string;
  }

  export class Resource$Partners$Subscriptions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Used by partners to cancel a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/paymentsresellersubscription.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const paymentsresellersubscription = google.paymentsresellersubscription('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await paymentsresellersubscription.partners.subscriptions.cancel({
     *     // Required. The name of the subscription resource to be cancelled. It will have the format of "partners/{partner_id\}/subscriptions/{subscription_id\}"
     *     name: 'partners/my-partner/subscriptions/my-subscription',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cancelImmediately": false,
     *       //   "cancellationReason": "my_cancellationReason"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "subscription": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Partners$Subscriptions$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Partners$Subscriptions$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse>;
    cancel(
      params: Params$Resource$Partners$Subscriptions$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Partners$Subscriptions$Cancel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse>
    ): void;
    cancel(
      params: Params$Resource$Partners$Subscriptions$Cancel,
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse>
    ): void;
    cancel(
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse>
    ): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Partners$Subscriptions$Cancel
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Subscriptions$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Subscriptions$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://paymentsresellersubscription.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse>(
          parameters
        );
      }
    }

    /**
     * Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/paymentsresellersubscription.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const paymentsresellersubscription = google.paymentsresellersubscription('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await paymentsresellersubscription.partners.subscriptions.create({
     *     // Required. The parent resource name, which is the identifier of the partner. It will have the format of "partners/{partner_id\}".
     *     parent: 'partners/my-partner',
     *     // Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription was previously created with the same subscription_id, we will directly return that one.
     *     subscriptionId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cancellationDetails": {},
     *       //   "createTime": "my_createTime",
     *       //   "cycleEndTime": "my_cycleEndTime",
     *       //   "endUserEntitled": false,
     *       //   "freeTrialEndTime": "my_freeTrialEndTime",
     *       //   "name": "my_name",
     *       //   "partnerUserToken": "my_partnerUserToken",
     *       //   "processingState": "my_processingState",
     *       //   "products": [],
     *       //   "promotions": [],
     *       //   "redirectUri": "my_redirectUri",
     *       //   "serviceLocation": {},
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime",
     *       //   "upgradeDowngradeDetails": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cancellationDetails": {},
     *   //   "createTime": "my_createTime",
     *   //   "cycleEndTime": "my_cycleEndTime",
     *   //   "endUserEntitled": false,
     *   //   "freeTrialEndTime": "my_freeTrialEndTime",
     *   //   "name": "my_name",
     *   //   "partnerUserToken": "my_partnerUserToken",
     *   //   "processingState": "my_processingState",
     *   //   "products": [],
     *   //   "promotions": [],
     *   //   "redirectUri": "my_redirectUri",
     *   //   "serviceLocation": {},
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "upgradeDowngradeDetails": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Partners$Subscriptions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Partners$Subscriptions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>;
    create(
      params: Params$Resource$Partners$Subscriptions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Partners$Subscriptions$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>,
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
    ): void;
    create(
      params: Params$Resource$Partners$Subscriptions$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Partners$Subscriptions$Create
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Subscriptions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Subscriptions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://paymentsresellersubscription.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/subscriptions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>(
          parameters
        );
      }
    }

    /**
     * Used by partners to entitle a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/paymentsresellersubscription.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const paymentsresellersubscription = google.paymentsresellersubscription('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await paymentsresellersubscription.partners.subscriptions.entitle(
     *     {
     *       // Required. The name of the subscription resource that is entitled to the current end user. It will have the format of "partners/{partner_id\}/subscriptions/{subscription_id\}"
     *       name: 'partners/my-partner/subscriptions/my-subscription',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "subscription": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    entitle(
      params: Params$Resource$Partners$Subscriptions$Entitle,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    entitle(
      params?: Params$Resource$Partners$Subscriptions$Entitle,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse>;
    entitle(
      params: Params$Resource$Partners$Subscriptions$Entitle,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    entitle(
      params: Params$Resource$Partners$Subscriptions$Entitle,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse>
    ): void;
    entitle(
      params: Params$Resource$Partners$Subscriptions$Entitle,
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse>
    ): void;
    entitle(
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse>
    ): void;
    entitle(
      paramsOrCallback?:
        | Params$Resource$Partners$Subscriptions$Entitle
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Subscriptions$Entitle;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Subscriptions$Entitle;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://paymentsresellersubscription.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:entitle').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse>(
          parameters
        );
      }
    }

    /**
     * Used by partners to extend a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/paymentsresellersubscription.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const paymentsresellersubscription = google.paymentsresellersubscription('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await paymentsresellersubscription.partners.subscriptions.extend({
     *     // Required. The name of the subscription resource to be extended. It will have the format of "partners/{partner_id\}/subscriptions/{subscription_id\}".
     *     name: 'partners/my-partner/subscriptions/my-subscription',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "extension": {},
     *       //   "requestId": "my_requestId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cycleEndTime": "my_cycleEndTime",
     *   //   "freeTrialEndTime": "my_freeTrialEndTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    extend(
      params: Params$Resource$Partners$Subscriptions$Extend,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    extend(
      params?: Params$Resource$Partners$Subscriptions$Extend,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse>;
    extend(
      params: Params$Resource$Partners$Subscriptions$Extend,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    extend(
      params: Params$Resource$Partners$Subscriptions$Extend,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse>
    ): void;
    extend(
      params: Params$Resource$Partners$Subscriptions$Extend,
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse>
    ): void;
    extend(
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse>
    ): void;
    extend(
      paramsOrCallback?:
        | Params$Resource$Partners$Subscriptions$Extend
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Subscriptions$Extend;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Subscriptions$Extend;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://paymentsresellersubscription.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:extend').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse>(
          parameters
        );
      }
    }

    /**
     * Used by partners to get a subscription by id. It should be called directly by the partner using service accounts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/paymentsresellersubscription.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const paymentsresellersubscription = google.paymentsresellersubscription('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await paymentsresellersubscription.partners.subscriptions.get({
     *     // Required. The name of the subscription resource to retrieve. It will have the format of "partners/{partner_id\}/subscriptions/{subscription_id\}"
     *     name: 'partners/my-partner/subscriptions/my-subscription',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cancellationDetails": {},
     *   //   "createTime": "my_createTime",
     *   //   "cycleEndTime": "my_cycleEndTime",
     *   //   "endUserEntitled": false,
     *   //   "freeTrialEndTime": "my_freeTrialEndTime",
     *   //   "name": "my_name",
     *   //   "partnerUserToken": "my_partnerUserToken",
     *   //   "processingState": "my_processingState",
     *   //   "products": [],
     *   //   "promotions": [],
     *   //   "redirectUri": "my_redirectUri",
     *   //   "serviceLocation": {},
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "upgradeDowngradeDetails": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Partners$Subscriptions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Partners$Subscriptions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>;
    get(
      params: Params$Resource$Partners$Subscriptions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Partners$Subscriptions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>,
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
    ): void;
    get(
      params: Params$Resource$Partners$Subscriptions$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Partners$Subscriptions$Get
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Subscriptions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Subscriptions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://paymentsresellersubscription.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>(
          parameters
        );
      }
    }

    /**
     * Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/paymentsresellersubscription.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const paymentsresellersubscription = google.paymentsresellersubscription('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await paymentsresellersubscription.partners.subscriptions.provision({
     *       // Required. The parent resource name, which is the identifier of the partner. It will have the format of "partners/{partner_id\}".
     *       parent: 'partners/my-partner',
     *       // Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription was previously created with the same subscription_id, we will directly return that one.
     *       subscriptionId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "cancellationDetails": {},
     *         //   "createTime": "my_createTime",
     *         //   "cycleEndTime": "my_cycleEndTime",
     *         //   "endUserEntitled": false,
     *         //   "freeTrialEndTime": "my_freeTrialEndTime",
     *         //   "name": "my_name",
     *         //   "partnerUserToken": "my_partnerUserToken",
     *         //   "processingState": "my_processingState",
     *         //   "products": [],
     *         //   "promotions": [],
     *         //   "redirectUri": "my_redirectUri",
     *         //   "serviceLocation": {},
     *         //   "state": "my_state",
     *         //   "updateTime": "my_updateTime",
     *         //   "upgradeDowngradeDetails": {}
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cancellationDetails": {},
     *   //   "createTime": "my_createTime",
     *   //   "cycleEndTime": "my_cycleEndTime",
     *   //   "endUserEntitled": false,
     *   //   "freeTrialEndTime": "my_freeTrialEndTime",
     *   //   "name": "my_name",
     *   //   "partnerUserToken": "my_partnerUserToken",
     *   //   "processingState": "my_processingState",
     *   //   "products": [],
     *   //   "promotions": [],
     *   //   "redirectUri": "my_redirectUri",
     *   //   "serviceLocation": {},
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "upgradeDowngradeDetails": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    provision(
      params: Params$Resource$Partners$Subscriptions$Provision,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    provision(
      params?: Params$Resource$Partners$Subscriptions$Provision,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>;
    provision(
      params: Params$Resource$Partners$Subscriptions$Provision,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    provision(
      params: Params$Resource$Partners$Subscriptions$Provision,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>,
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
    ): void;
    provision(
      params: Params$Resource$Partners$Subscriptions$Provision,
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
    ): void;
    provision(
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
    ): void;
    provision(
      paramsOrCallback?:
        | Params$Resource$Partners$Subscriptions$Provision
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Subscriptions$Provision;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Subscriptions$Provision;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://paymentsresellersubscription.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/subscriptions:provision').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription>(
          parameters
        );
      }
    }

    /**
     * Used by partners to revoke the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/paymentsresellersubscription.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const paymentsresellersubscription = google.paymentsresellersubscription('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await paymentsresellersubscription.partners.subscriptions.undoCancel({
     *       // Required. The name of the subscription resource whose pending cancellation needs to be undone. It will have the format of "partners/{partner_id\}/subscriptions/{subscription_id\}"
     *       name: 'partners/my-partner/subscriptions/my-subscription',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "subscription": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    undoCancel(
      params: Params$Resource$Partners$Subscriptions$Undocancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    undoCancel(
      params?: Params$Resource$Partners$Subscriptions$Undocancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse>;
    undoCancel(
      params: Params$Resource$Partners$Subscriptions$Undocancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    undoCancel(
      params: Params$Resource$Partners$Subscriptions$Undocancel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse>
    ): void;
    undoCancel(
      params: Params$Resource$Partners$Subscriptions$Undocancel,
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse>
    ): void;
    undoCancel(
      callback: BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse>
    ): void;
    undoCancel(
      paramsOrCallback?:
        | Params$Resource$Partners$Subscriptions$Undocancel
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Subscriptions$Undocancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Subscriptions$Undocancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl ||
        'https://paymentsresellersubscription.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:undoCancel').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Partners$Subscriptions$Cancel
    extends StandardParameters {
    /**
     * Required. The name of the subscription resource to be cancelled. It will have the format of "partners/{partner_id\}/subscriptions/{subscription_id\}"
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest;
  }
  export interface Params$Resource$Partners$Subscriptions$Create
    extends StandardParameters {
    /**
     * Required. The parent resource name, which is the identifier of the partner. It will have the format of "partners/{partner_id\}".
     */
    parent?: string;
    /**
     * Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription was previously created with the same subscription_id, we will directly return that one.
     */
    subscriptionId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription;
  }
  export interface Params$Resource$Partners$Subscriptions$Entitle
    extends StandardParameters {
    /**
     * Required. The name of the subscription resource that is entitled to the current end user. It will have the format of "partners/{partner_id\}/subscriptions/{subscription_id\}"
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest;
  }
  export interface Params$Resource$Partners$Subscriptions$Extend
    extends StandardParameters {
    /**
     * Required. The name of the subscription resource to be extended. It will have the format of "partners/{partner_id\}/subscriptions/{subscription_id\}".
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest;
  }
  export interface Params$Resource$Partners$Subscriptions$Get
    extends StandardParameters {
    /**
     * Required. The name of the subscription resource to retrieve. It will have the format of "partners/{partner_id\}/subscriptions/{subscription_id\}"
     */
    name?: string;
  }
  export interface Params$Resource$Partners$Subscriptions$Provision
    extends StandardParameters {
    /**
     * Required. The parent resource name, which is the identifier of the partner. It will have the format of "partners/{partner_id\}".
     */
    parent?: string;
    /**
     * Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription was previously created with the same subscription_id, we will directly return that one.
     */
    subscriptionId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudPaymentsResellerSubscriptionV1Subscription;
  }
  export interface Params$Resource$Partners$Subscriptions$Undocancel
    extends StandardParameters {
    /**
     * Required. The name of the subscription resource whose pending cancellation needs to be undone. It will have the format of "partners/{partner_id\}/subscriptions/{subscription_id\}"
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionRequest;
  }
}
