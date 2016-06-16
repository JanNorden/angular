import {OpaqueToken, Provider} from 'angular2/src/core/di';
import {CONST_EXPR, Math, StringWrapper} from 'angular2/src/facade/lang';

/**
 * A DI Token representing a unique string id assigned to the application by Angular and used
 * primarily for prefixing application attributes and CSS styles when
 * {@link ViewEncapsulation#Emulated} is being used.
 *
 * If you need to avoid randomly generated value to be used as an application id, you can provide
 * a custom value via a DI provider <!-- TODO: provider --> configuring the root {@link Injector}
 * using this token.
 */
export const APP_ID: OpaqueToken = CONST_EXPR(new OpaqueToken('AppId'));

function appIdRandomProviderFactory(): string {
  return `${_randomChar()}${_randomChar()}${_randomChar()}`;
}

/**
 * Providers that will generate a random APP_ID_TOKEN.
 */
export const APP_ID_RANDOM_PROVIDER: Provider =
    CONST_EXPR(new Provider(APP_ID, {useFactory: appIdRandomProviderFactory, deps: []}));

function _randomChar(): string {
  return StringWrapper.fromCharCode(97 + Math.floor(Math.random() * 25));
}

/**
 * A function that will be executed when a platform is initialized.
 */
export const PLATFORM_INITIALIZER: OpaqueToken =
    CONST_EXPR(new OpaqueToken("Platform Initializer"));

/**
 * A function that will be executed when an application is initialized.
 */
export const APP_INITIALIZER: OpaqueToken = CONST_EXPR(new OpaqueToken("Application Initializer"));

/**
 * A token which indicates the root directory of the application
 */
export const PACKAGE_ROOT_URL: OpaqueToken =
    CONST_EXPR(new OpaqueToken("Application Packages Root URL"));
