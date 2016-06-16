export { PLATFORM_DIRECTIVES, PLATFORM_PIPES } from 'angular2/src/core/platform_directives_and_pipes';
export * from 'angular2/src/compiler/template_ast';
export { TEMPLATE_TRANSFORMS } from 'angular2/src/compiler/template_parser';
export { CompilerConfig, RenderTypes } from './config';
export * from './compile_metadata';
export * from './offline_compiler';
export { RuntimeCompiler } from './runtime_compiler';
export * from 'angular2/src/compiler/url_resolver';
export * from 'angular2/src/compiler/xhr';
export { ViewResolver } from './view_resolver';
export { DirectiveResolver } from './directive_resolver';
export { PipeResolver } from './pipe_resolver';
import { assertionsEnabled, CONST_EXPR } from 'angular2/src/facade/lang';
import { Provider } from 'angular2/src/core/di';
import { TemplateParser } from 'angular2/src/compiler/template_parser';
import { HtmlParser } from 'angular2/src/compiler/html_parser';
import { DirectiveNormalizer } from 'angular2/src/compiler/directive_normalizer';
import { RuntimeMetadataResolver } from 'angular2/src/compiler/runtime_metadata';
import { StyleCompiler } from 'angular2/src/compiler/style_compiler';
import { ViewCompiler } from 'angular2/src/compiler/view_compiler/view_compiler';
import { InjectorCompiler } from 'angular2/src/compiler/view_compiler/injector_compiler';
import { CompilerConfig } from './config';
import { ComponentResolver } from 'angular2/src/core/linker/component_resolver';
import { RuntimeCompiler } from 'angular2/src/compiler/runtime_compiler';
import { ElementSchemaRegistry } from 'angular2/src/compiler/schema/element_schema_registry';
import { DomElementSchemaRegistry } from 'angular2/src/compiler/schema/dom_element_schema_registry';
import { UrlResolver, DEFAULT_PACKAGE_URL_PROVIDER } from 'angular2/src/compiler/url_resolver';
import { Parser } from './expression_parser/parser';
import { Lexer } from './expression_parser/lexer';
import { ViewResolver } from './view_resolver';
import { DirectiveResolver } from './directive_resolver';
import { PipeResolver } from './pipe_resolver';
function createCompilerConfig() {
    return new CompilerConfig(assertionsEnabled(), false, true);
}
/**
 * A set of providers that provide `RuntimeCompiler` and its dependencies to use for
 * template compilation.
 */
export const COMPILER_PROVIDERS = CONST_EXPR([
    Lexer,
    Parser,
    HtmlParser,
    TemplateParser,
    DirectiveNormalizer,
    RuntimeMetadataResolver,
    DEFAULT_PACKAGE_URL_PROVIDER,
    StyleCompiler,
    ViewCompiler,
    InjectorCompiler,
    new Provider(CompilerConfig, { useFactory: createCompilerConfig, deps: [] }),
    RuntimeCompiler,
    new Provider(ComponentResolver, { useExisting: RuntimeCompiler }),
    DomElementSchemaRegistry,
    new Provider(ElementSchemaRegistry, { useExisting: DomElementSchemaRegistry }),
    UrlResolver,
    ViewResolver,
    DirectiveResolver,
    PipeResolver
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUVKNkRxMzJ4LnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvY29tcGlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUSxtQkFBbUIsRUFBRSxjQUFjLFFBQU8saURBQWlELENBQUM7QUFDcEcsY0FBYyxvQ0FBb0MsQ0FBQztBQUNuRCxTQUFRLG1CQUFtQixRQUFPLHVDQUF1QyxDQUFDO0FBQzFFLFNBQVEsY0FBYyxFQUFFLFdBQVcsUUFBTyxVQUFVLENBQUM7QUFDckQsY0FBYyxvQkFBb0IsQ0FBQztBQUNuQyxjQUFjLG9CQUFvQixDQUFDO0FBQ25DLFNBQVEsZUFBZSxRQUFPLG9CQUFvQixDQUFDO0FBQ25ELGNBQWMsb0NBQW9DLENBQUM7QUFDbkQsY0FBYywyQkFBMkIsQ0FBQztBQUUxQyxTQUFRLFlBQVksUUFBTyxpQkFBaUIsQ0FBQztBQUM3QyxTQUFRLGlCQUFpQixRQUFPLHNCQUFzQixDQUFDO0FBQ3ZELFNBQVEsWUFBWSxRQUFPLGlCQUFpQixDQUFDO09BRXRDLEVBQUMsaUJBQWlCLEVBQVEsVUFBVSxFQUFDLE1BQU0sMEJBQTBCO09BQ3JFLEVBQVUsUUFBUSxFQUFDLE1BQU0sc0JBQXNCO09BQy9DLEVBQUMsY0FBYyxFQUFDLE1BQU0sdUNBQXVDO09BQzdELEVBQUMsVUFBVSxFQUFDLE1BQU0sbUNBQW1DO09BQ3JELEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw0Q0FBNEM7T0FDdkUsRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHdDQUF3QztPQUN2RSxFQUFDLGFBQWEsRUFBQyxNQUFNLHNDQUFzQztPQUMzRCxFQUFDLFlBQVksRUFBQyxNQUFNLG1EQUFtRDtPQUN2RSxFQUFDLGdCQUFnQixFQUFDLE1BQU0sdURBQXVEO09BQy9FLEVBQUMsY0FBYyxFQUFDLE1BQU0sVUFBVTtPQUNoQyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkNBQTZDO09BQ3RFLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0NBQXdDO09BQy9ELEVBQUMscUJBQXFCLEVBQUMsTUFBTSxzREFBc0Q7T0FDbkYsRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDBEQUEwRDtPQUMxRixFQUFDLFdBQVcsRUFBRSw0QkFBNEIsRUFBQyxNQUFNLG9DQUFvQztPQUNyRixFQUFDLE1BQU0sRUFBQyxNQUFNLDRCQUE0QjtPQUMxQyxFQUFDLEtBQUssRUFBQyxNQUFNLDJCQUEyQjtPQUN4QyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQjtPQUNyQyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCO09BQy9DLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCO0FBRTVDO0lBQ0UsTUFBTSxDQUFDLElBQUksY0FBYyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzlELENBQUM7QUFFRDs7O0dBR0c7QUFDSCxPQUFPLE1BQU0sa0JBQWtCLEdBQW1DLFVBQVUsQ0FBQztJQUMzRSxLQUFLO0lBQ0wsTUFBTTtJQUNOLFVBQVU7SUFDVixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsSUFBSSxRQUFRLENBQUMsY0FBYyxFQUFFLEVBQUMsVUFBVSxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUMxRSxlQUFlO0lBQ2YsSUFBSSxRQUFRLENBQUMsaUJBQWlCLEVBQUUsRUFBQyxXQUFXLEVBQUUsZUFBZSxFQUFDLENBQUM7SUFDL0Qsd0JBQXdCO0lBQ3hCLElBQUksUUFBUSxDQUFDLHFCQUFxQixFQUFFLEVBQUMsV0FBVyxFQUFFLHdCQUF3QixFQUFDLENBQUM7SUFDNUUsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtDQUNiLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7UExBVEZPUk1fRElSRUNUSVZFUywgUExBVEZPUk1fUElQRVN9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3BsYXRmb3JtX2RpcmVjdGl2ZXNfYW5kX3BpcGVzJztcbmV4cG9ydCAqIGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci90ZW1wbGF0ZV9hc3QnO1xuZXhwb3J0IHtURU1QTEFURV9UUkFOU0ZPUk1TfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvdGVtcGxhdGVfcGFyc2VyJztcbmV4cG9ydCB7Q29tcGlsZXJDb25maWcsIFJlbmRlclR5cGVzfSBmcm9tICcuL2NvbmZpZyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBpbGVfbWV0YWRhdGEnO1xuZXhwb3J0ICogZnJvbSAnLi9vZmZsaW5lX2NvbXBpbGVyJztcbmV4cG9ydCB7UnVudGltZUNvbXBpbGVyfSBmcm9tICcuL3J1bnRpbWVfY29tcGlsZXInO1xuZXhwb3J0ICogZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3VybF9yZXNvbHZlcic7XG5leHBvcnQgKiBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIveGhyJztcblxuZXhwb3J0IHtWaWV3UmVzb2x2ZXJ9IGZyb20gJy4vdmlld19yZXNvbHZlcic7XG5leHBvcnQge0RpcmVjdGl2ZVJlc29sdmVyfSBmcm9tICcuL2RpcmVjdGl2ZV9yZXNvbHZlcic7XG5leHBvcnQge1BpcGVSZXNvbHZlcn0gZnJvbSAnLi9waXBlX3Jlc29sdmVyJztcblxuaW1wb3J0IHthc3NlcnRpb25zRW5hYmxlZCwgVHlwZSwgQ09OU1RfRVhQUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7cHJvdmlkZSwgUHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7VGVtcGxhdGVQYXJzZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci90ZW1wbGF0ZV9wYXJzZXInO1xuaW1wb3J0IHtIdG1sUGFyc2VyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvaHRtbF9wYXJzZXInO1xuaW1wb3J0IHtEaXJlY3RpdmVOb3JtYWxpemVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvZGlyZWN0aXZlX25vcm1hbGl6ZXInO1xuaW1wb3J0IHtSdW50aW1lTWV0YWRhdGFSZXNvbHZlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3J1bnRpbWVfbWV0YWRhdGEnO1xuaW1wb3J0IHtTdHlsZUNvbXBpbGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvc3R5bGVfY29tcGlsZXInO1xuaW1wb3J0IHtWaWV3Q29tcGlsZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci92aWV3X2NvbXBpbGVyL3ZpZXdfY29tcGlsZXInO1xuaW1wb3J0IHtJbmplY3RvckNvbXBpbGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvdmlld19jb21waWxlci9pbmplY3Rvcl9jb21waWxlcic7XG5pbXBvcnQge0NvbXBpbGVyQ29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge0NvbXBvbmVudFJlc29sdmVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvY29tcG9uZW50X3Jlc29sdmVyJztcbmltcG9ydCB7UnVudGltZUNvbXBpbGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvcnVudGltZV9jb21waWxlcic7XG5pbXBvcnQge0VsZW1lbnRTY2hlbWFSZWdpc3RyeX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3NjaGVtYS9lbGVtZW50X3NjaGVtYV9yZWdpc3RyeSc7XG5pbXBvcnQge0RvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3NjaGVtYS9kb21fZWxlbWVudF9zY2hlbWFfcmVnaXN0cnknO1xuaW1wb3J0IHtVcmxSZXNvbHZlciwgREVGQVVMVF9QQUNLQUdFX1VSTF9QUk9WSURFUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3VybF9yZXNvbHZlcic7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSAnLi9leHByZXNzaW9uX3BhcnNlci9wYXJzZXInO1xuaW1wb3J0IHtMZXhlcn0gZnJvbSAnLi9leHByZXNzaW9uX3BhcnNlci9sZXhlcic7XG5pbXBvcnQge1ZpZXdSZXNvbHZlcn0gZnJvbSAnLi92aWV3X3Jlc29sdmVyJztcbmltcG9ydCB7RGlyZWN0aXZlUmVzb2x2ZXJ9IGZyb20gJy4vZGlyZWN0aXZlX3Jlc29sdmVyJztcbmltcG9ydCB7UGlwZVJlc29sdmVyfSBmcm9tICcuL3BpcGVfcmVzb2x2ZXInO1xuXG5mdW5jdGlvbiBjcmVhdGVDb21waWxlckNvbmZpZygpOiBDb21waWxlckNvbmZpZyB7XG4gIHJldHVybiBuZXcgQ29tcGlsZXJDb25maWcoYXNzZXJ0aW9uc0VuYWJsZWQoKSwgZmFsc2UsIHRydWUpO1xufVxuXG4vKipcbiAqIEEgc2V0IG9mIHByb3ZpZGVycyB0aGF0IHByb3ZpZGUgYFJ1bnRpbWVDb21waWxlcmAgYW5kIGl0cyBkZXBlbmRlbmNpZXMgdG8gdXNlIGZvclxuICogdGVtcGxhdGUgY29tcGlsYXRpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBDT01QSUxFUl9QUk9WSURFUlM6IEFycmF5PFR5cGUgfCBQcm92aWRlciB8IGFueVtdPiA9IENPTlNUX0VYUFIoW1xuICBMZXhlcixcbiAgUGFyc2VyLFxuICBIdG1sUGFyc2VyLFxuICBUZW1wbGF0ZVBhcnNlcixcbiAgRGlyZWN0aXZlTm9ybWFsaXplcixcbiAgUnVudGltZU1ldGFkYXRhUmVzb2x2ZXIsXG4gIERFRkFVTFRfUEFDS0FHRV9VUkxfUFJPVklERVIsXG4gIFN0eWxlQ29tcGlsZXIsXG4gIFZpZXdDb21waWxlcixcbiAgSW5qZWN0b3JDb21waWxlcixcbiAgbmV3IFByb3ZpZGVyKENvbXBpbGVyQ29uZmlnLCB7dXNlRmFjdG9yeTogY3JlYXRlQ29tcGlsZXJDb25maWcsIGRlcHM6IFtdfSksXG4gIFJ1bnRpbWVDb21waWxlcixcbiAgbmV3IFByb3ZpZGVyKENvbXBvbmVudFJlc29sdmVyLCB7dXNlRXhpc3Rpbmc6IFJ1bnRpbWVDb21waWxlcn0pLFxuICBEb21FbGVtZW50U2NoZW1hUmVnaXN0cnksXG4gIG5ldyBQcm92aWRlcihFbGVtZW50U2NoZW1hUmVnaXN0cnksIHt1c2VFeGlzdGluZzogRG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5fSksXG4gIFVybFJlc29sdmVyLFxuICBWaWV3UmVzb2x2ZXIsXG4gIERpcmVjdGl2ZVJlc29sdmVyLFxuICBQaXBlUmVzb2x2ZXJcbl0pO1xuIl19