import { CONST_EXPR, IS_DART } from 'angular2/src/facade/lang';
import { MessageBus } from 'angular2/src/web_workers/shared/message_bus';
import { NgZone } from 'angular2/src/core/zone/ng_zone';
import { ExceptionHandler, APPLICATION_COMMON_PROVIDERS, PLATFORM_COMMON_PROVIDERS, RootRenderer, PLATFORM_INITIALIZER, TestabilityRegistry } from 'angular2/core';
import { EVENT_MANAGER_PLUGINS, EventManager } from 'angular2/platform/common_dom';
import { Provider, OpaqueToken } from 'angular2/src/core/di';
import { DOM } from 'angular2/src/platform/dom/dom_adapter';
import { DomEventsPlugin } from 'angular2/src/platform/dom/events/dom_events';
import { KeyEventsPlugin } from 'angular2/src/platform/dom/events/key_events';
import { HammerGesturesPlugin } from 'angular2/src/platform/dom/events/hammer_gestures';
import { DOCUMENT } from 'angular2/src/platform/dom/dom_tokens';
import { DomRootRenderer, DomRootRenderer_ } from 'angular2/src/platform/dom/dom_renderer';
import { DomSharedStylesHost } from 'angular2/src/platform/dom/shared_styles_host';
import { SharedStylesHost } from "angular2/src/platform/dom/shared_styles_host";
import { BrowserDetails } from 'angular2/src/animate/browser_details';
import { AnimationBuilder } from 'angular2/src/animate/animation_builder';
import { XHR } from 'angular2/compiler';
import { XHRImpl } from 'angular2/src/platform/browser/xhr_impl';
import { Testability } from 'angular2/src/core/testability/testability';
import { BrowserGetTestability } from 'angular2/src/platform/browser/testability';
import { BrowserDomAdapter } from './browser/browser_adapter';
import { wtfInit } from 'angular2/src/core/profile/wtf_init';
import { MessageBasedRenderer } from 'angular2/src/web_workers/ui/renderer';
import { MessageBasedXHRImpl } from 'angular2/src/web_workers/ui/xhr_impl';
import { ServiceMessageBrokerFactory, ServiceMessageBrokerFactory_ } from 'angular2/src/web_workers/shared/service_message_broker';
import { ClientMessageBrokerFactory, ClientMessageBrokerFactory_ } from 'angular2/src/web_workers/shared/client_message_broker';
import { BrowserPlatformLocation } from 'angular2/src/platform/browser/location/browser_platform_location';
import { Serializer } from 'angular2/src/web_workers/shared/serializer';
import { ON_WEB_WORKER } from 'angular2/src/web_workers/shared/api';
import { RenderStore } from 'angular2/src/web_workers/shared/render_store';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from './dom/events/hammer_gestures';
export const WORKER_SCRIPT = CONST_EXPR(new OpaqueToken("WebWorkerScript"));
// Message based Worker classes that listen on the MessageBus
export const WORKER_RENDER_MESSAGING_PROVIDERS = CONST_EXPR([MessageBasedRenderer, MessageBasedXHRImpl]);
export const WORKER_RENDER_PLATFORM_MARKER = CONST_EXPR(new OpaqueToken('WorkerRenderPlatformMarker'));
export const WORKER_RENDER_PLATFORM = CONST_EXPR([
    PLATFORM_COMMON_PROVIDERS,
    CONST_EXPR(new Provider(WORKER_RENDER_PLATFORM_MARKER, { useValue: true })),
    new Provider(PLATFORM_INITIALIZER, { useFactory: initWebWorkerRenderPlatform, multi: true, deps: [TestabilityRegistry] })
]);
/**
 * A list of {@link Provider}s. To use the router in a Worker enabled application you must
 * include these providers when setting up the render thread.
 */
export const WORKER_RENDER_ROUTER = CONST_EXPR([BrowserPlatformLocation]);
export const WORKER_RENDER_APPLICATION_COMMON = CONST_EXPR([
    APPLICATION_COMMON_PROVIDERS,
    WORKER_RENDER_MESSAGING_PROVIDERS,
    new Provider(ExceptionHandler, { useFactory: exceptionHandler, deps: [] }),
    new Provider(DOCUMENT, { useFactory: document, deps: [] }),
    // TODO(jteplitz602): Investigate if we definitely need EVENT_MANAGER on the render thread
    // #5298
    new Provider(EVENT_MANAGER_PLUGINS, { useClass: DomEventsPlugin, multi: true }),
    new Provider(EVENT_MANAGER_PLUGINS, { useClass: KeyEventsPlugin, multi: true }),
    new Provider(EVENT_MANAGER_PLUGINS, { useClass: HammerGesturesPlugin, multi: true }),
    new Provider(HAMMER_GESTURE_CONFIG, { useClass: HammerGestureConfig }),
    new Provider(DomRootRenderer, { useClass: DomRootRenderer_ }),
    new Provider(RootRenderer, { useExisting: DomRootRenderer }),
    new Provider(SharedStylesHost, { useExisting: DomSharedStylesHost }),
    new Provider(XHR, { useClass: XHRImpl }),
    MessageBasedXHRImpl,
    new Provider(ServiceMessageBrokerFactory, { useClass: ServiceMessageBrokerFactory_ }),
    new Provider(ClientMessageBrokerFactory, { useClass: ClientMessageBrokerFactory_ }),
    Serializer,
    new Provider(ON_WEB_WORKER, { useValue: false }),
    RenderStore,
    DomSharedStylesHost,
    Testability,
    BrowserDetails,
    AnimationBuilder,
    EventManager
]);
export function initializeGenericWorkerRenderer(injector) {
    var bus = injector.get(MessageBus);
    let zone = injector.get(NgZone);
    bus.attachToZone(zone);
    zone.runGuarded(() => {
        WORKER_RENDER_MESSAGING_PROVIDERS.forEach((token) => { injector.get(token).start(); });
    });
}
export function initWebWorkerRenderPlatform(registry) {
    return () => {
        BrowserDomAdapter.makeCurrent();
        wtfInit();
        registry.setTestabilityGetter(new BrowserGetTestability());
    };
}
function exceptionHandler() {
    return new ExceptionHandler(DOM, !IS_DART);
}
function document() {
    return DOM.defaultDoc();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyX3JlbmRlcl9jb21tb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUVKNkRxMzJ4LnRtcC9hbmd1bGFyMi9zcmMvcGxhdGZvcm0vd29ya2VyX3JlbmRlcl9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0sMEJBQTBCO09BQ3JELEVBQUMsVUFBVSxFQUFDLE1BQU0sNkNBQTZDO09BQy9ELEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0NBQWdDO09BQzlDLEVBSUwsZ0JBQWdCLEVBR2hCLDRCQUE0QixFQUM1Qix5QkFBeUIsRUFDekIsWUFBWSxFQUNaLG9CQUFvQixFQUVwQixtQkFBbUIsRUFDcEIsTUFBTSxlQUFlO09BQ2YsRUFBQyxxQkFBcUIsRUFBRSxZQUFZLEVBQUMsTUFBTSw4QkFBOEI7T0FDekUsRUFBVSxRQUFRLEVBQVksV0FBVyxFQUFDLE1BQU0sc0JBQXNCO09BRXRFLEVBQUMsR0FBRyxFQUFDLE1BQU0sdUNBQXVDO09BQ2xELEVBQUMsZUFBZSxFQUFDLE1BQU0sNkNBQTZDO09BQ3BFLEVBQUMsZUFBZSxFQUFDLE1BQU0sNkNBQTZDO09BQ3BFLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxrREFBa0Q7T0FDOUUsRUFBQyxRQUFRLEVBQUMsTUFBTSxzQ0FBc0M7T0FDdEQsRUFBQyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSx3Q0FBd0M7T0FDakYsRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDhDQUE4QztPQUN6RSxFQUFDLGdCQUFnQixFQUFDLE1BQU0sOENBQThDO09BQ3RFLEVBQUMsY0FBYyxFQUFDLE1BQU0sc0NBQXNDO09BQzVELEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx3Q0FBd0M7T0FDaEUsRUFBQyxHQUFHLEVBQUMsTUFBTSxtQkFBbUI7T0FDOUIsRUFBQyxPQUFPLEVBQUMsTUFBTSx3Q0FBd0M7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LE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFFRDtJQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDMUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q09OU1RfRVhQUiwgSVNfREFSVH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7TWVzc2FnZUJ1c30gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9tZXNzYWdlX2J1cyc7XG5pbXBvcnQge05nWm9uZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvem9uZS9uZ196b25lJztcbmltcG9ydCB7XG4gIFBMQVRGT1JNX0RJUkVDVElWRVMsXG4gIFBMQVRGT1JNX1BJUEVTLFxuICBDb21wb25lbnRSZWYsXG4gIEV4Y2VwdGlvbkhhbmRsZXIsXG4gIFJlZmxlY3RvcixcbiAgcmVmbGVjdG9yLFxuICBBUFBMSUNBVElPTl9DT01NT05fUFJPVklERVJTLFxuICBQTEFURk9STV9DT01NT05fUFJPVklERVJTLFxuICBSb290UmVuZGVyZXIsXG4gIFBMQVRGT1JNX0lOSVRJQUxJWkVSLFxuICBBUFBfSU5JVElBTElaRVIsXG4gIFRlc3RhYmlsaXR5UmVnaXN0cnlcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0VWRU5UX01BTkFHRVJfUExVR0lOUywgRXZlbnRNYW5hZ2VyfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9jb21tb25fZG9tJztcbmltcG9ydCB7cHJvdmlkZSwgUHJvdmlkZXIsIEluamVjdG9yLCBPcGFxdWVUb2tlbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGknO1xuLy8gVE9ETyBjaGFuZ2UgdGhlc2UgaW1wb3J0cyBvbmNlIGRvbV9hZGFwdGVyIGlzIG1vdmVkIG91dCBvZiBjb3JlXG5pbXBvcnQge0RPTX0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fYWRhcHRlcic7XG5pbXBvcnQge0RvbUV2ZW50c1BsdWdpbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9ldmVudHMvZG9tX2V2ZW50cyc7XG5pbXBvcnQge0tleUV2ZW50c1BsdWdpbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9ldmVudHMva2V5X2V2ZW50cyc7XG5pbXBvcnQge0hhbW1lckdlc3R1cmVzUGx1Z2lufSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2V2ZW50cy9oYW1tZXJfZ2VzdHVyZXMnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fdG9rZW5zJztcbmltcG9ydCB7RG9tUm9vdFJlbmRlcmVyLCBEb21Sb290UmVuZGVyZXJffSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV9yZW5kZXJlcic7XG5pbXBvcnQge0RvbVNoYXJlZFN0eWxlc0hvc3R9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vc2hhcmVkX3N0eWxlc19ob3N0JztcbmltcG9ydCB7U2hhcmVkU3R5bGVzSG9zdH0gZnJvbSBcImFuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vc2hhcmVkX3N0eWxlc19ob3N0XCI7XG5pbXBvcnQge0Jyb3dzZXJEZXRhaWxzfSBmcm9tICdhbmd1bGFyMi9zcmMvYW5pbWF0ZS9icm93c2VyX2RldGFpbHMnO1xuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvYW5pbWF0ZS9hbmltYXRpb25fYnVpbGRlcic7XG5pbXBvcnQge1hIUn0gZnJvbSAnYW5ndWxhcjIvY29tcGlsZXInO1xuaW1wb3J0IHtYSFJJbXBsfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci94aHJfaW1wbCc7XG5pbXBvcnQge1Rlc3RhYmlsaXR5fSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS90ZXN0YWJpbGl0eS90ZXN0YWJpbGl0eSc7XG5pbXBvcnQge0Jyb3dzZXJHZXRUZXN0YWJpbGl0eX0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXIvdGVzdGFiaWxpdHknO1xuaW1wb3J0IHtCcm93c2VyRG9tQWRhcHRlcn0gZnJvbSAnLi9icm93c2VyL2Jyb3dzZXJfYWRhcHRlcic7XG5pbXBvcnQge3d0ZkluaXR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3Byb2ZpbGUvd3RmX2luaXQnO1xuaW1wb3J0IHtNZXNzYWdlQmFzZWRSZW5kZXJlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3VpL3JlbmRlcmVyJztcbmltcG9ydCB7TWVzc2FnZUJhc2VkWEhSSW1wbH0gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3VpL3hocl9pbXBsJztcbmltcG9ydCB7XG4gIFNlcnZpY2VNZXNzYWdlQnJva2VyRmFjdG9yeSxcbiAgU2VydmljZU1lc3NhZ2VCcm9rZXJGYWN0b3J5X1xufSBmcm9tICdhbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvc2hhcmVkL3NlcnZpY2VfbWVzc2FnZV9icm9rZXInO1xuaW1wb3J0IHtcbiAgQ2xpZW50TWVzc2FnZUJyb2tlckZhY3RvcnksXG4gIENsaWVudE1lc3NhZ2VCcm9rZXJGYWN0b3J5X1xufSBmcm9tICdhbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvc2hhcmVkL2NsaWVudF9tZXNzYWdlX2Jyb2tlcic7XG5pbXBvcnQge1xuICBCcm93c2VyUGxhdGZvcm1Mb2NhdGlvblxufSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci9sb2NhdGlvbi9icm93c2VyX3BsYXRmb3JtX2xvY2F0aW9uJztcbmltcG9ydCB7U2VyaWFsaXplcn0gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9zZXJpYWxpemVyJztcbmltcG9ydCB7T05fV0VCX1dPUktFUn0gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9hcGknO1xuaW1wb3J0IHtSZW5kZXJTdG9yZX0gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9yZW5kZXJfc3RvcmUnO1xuaW1wb3J0IHtIQU1NRVJfR0VTVFVSRV9DT05GSUcsIEhhbW1lckdlc3R1cmVDb25maWd9IGZyb20gJy4vZG9tL2V2ZW50cy9oYW1tZXJfZ2VzdHVyZXMnO1xuXG5leHBvcnQgY29uc3QgV09SS0VSX1NDUklQVDogT3BhcXVlVG9rZW4gPSBDT05TVF9FWFBSKG5ldyBPcGFxdWVUb2tlbihcIldlYldvcmtlclNjcmlwdFwiKSk7XG5cbi8vIE1lc3NhZ2UgYmFzZWQgV29ya2VyIGNsYXNzZXMgdGhhdCBsaXN0ZW4gb24gdGhlIE1lc3NhZ2VCdXNcbmV4cG9ydCBjb25zdCBXT1JLRVJfUkVOREVSX01FU1NBR0lOR19QUk9WSURFUlM6IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+ID1cbiAgICBDT05TVF9FWFBSKFtNZXNzYWdlQmFzZWRSZW5kZXJlciwgTWVzc2FnZUJhc2VkWEhSSW1wbF0pO1xuXG5leHBvcnQgY29uc3QgV09SS0VSX1JFTkRFUl9QTEFURk9STV9NQVJLRVIgPVxuICAgIENPTlNUX0VYUFIobmV3IE9wYXF1ZVRva2VuKCdXb3JrZXJSZW5kZXJQbGF0Zm9ybU1hcmtlcicpKTtcblxuZXhwb3J0IGNvbnN0IFdPUktFUl9SRU5ERVJfUExBVEZPUk06IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+ID0gQ09OU1RfRVhQUihbXG4gIFBMQVRGT1JNX0NPTU1PTl9QUk9WSURFUlMsXG4gIENPTlNUX0VYUFIobmV3IFByb3ZpZGVyKFdPUktFUl9SRU5ERVJfUExBVEZPUk1fTUFSS0VSLCB7dXNlVmFsdWU6IHRydWV9KSksXG4gIG5ldyBQcm92aWRlcihcbiAgICAgIFBMQVRGT1JNX0lOSVRJQUxJWkVSLFxuICAgICAge3VzZUZhY3Rvcnk6IGluaXRXZWJXb3JrZXJSZW5kZXJQbGF0Zm9ybSwgbXVsdGk6IHRydWUsIGRlcHM6IFtUZXN0YWJpbGl0eVJlZ2lzdHJ5XX0pXG5dKTtcblxuLyoqXG4gKiBBIGxpc3Qgb2Yge0BsaW5rIFByb3ZpZGVyfXMuIFRvIHVzZSB0aGUgcm91dGVyIGluIGEgV29ya2VyIGVuYWJsZWQgYXBwbGljYXRpb24geW91IG11c3RcbiAqIGluY2x1ZGUgdGhlc2UgcHJvdmlkZXJzIHdoZW4gc2V0dGluZyB1cCB0aGUgcmVuZGVyIHRocmVhZC5cbiAqL1xuZXhwb3J0IGNvbnN0IFdPUktFUl9SRU5ERVJfUk9VVEVSOiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPiA9XG4gICAgQ09OU1RfRVhQUihbQnJvd3NlclBsYXRmb3JtTG9jYXRpb25dKTtcblxuZXhwb3J0IGNvbnN0IFdPUktFUl9SRU5ERVJfQVBQTElDQVRJT05fQ09NTU9OOiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPiA9IENPTlNUX0VYUFIoW1xuICBBUFBMSUNBVElPTl9DT01NT05fUFJPVklERVJTLFxuICBXT1JLRVJfUkVOREVSX01FU1NBR0lOR19QUk9WSURFUlMsXG4gIG5ldyBQcm92aWRlcihFeGNlcHRpb25IYW5kbGVyLCB7dXNlRmFjdG9yeTogZXhjZXB0aW9uSGFuZGxlciwgZGVwczogW119KSxcbiAgbmV3IFByb3ZpZGVyKERPQ1VNRU5ULCB7dXNlRmFjdG9yeTogZG9jdW1lbnQsIGRlcHM6IFtdfSksXG4gIC8vIFRPRE8oanRlcGxpdHo2MDIpOiBJbnZlc3RpZ2F0ZSBpZiB3ZSBkZWZpbml0ZWx5IG5lZWQgRVZFTlRfTUFOQUdFUiBvbiB0aGUgcmVuZGVyIHRocmVhZFxuICAvLyAjNTI5OFxuICBuZXcgUHJvdmlkZXIoRVZFTlRfTUFOQUdFUl9QTFVHSU5TLCB7dXNlQ2xhc3M6IERvbUV2ZW50c1BsdWdpbiwgbXVsdGk6IHRydWV9KSxcbiAgbmV3IFByb3ZpZGVyKEVWRU5UX01BTkFHRVJfUExVR0lOUywge3VzZUNsYXNzOiBLZXlFdmVudHNQbHVnaW4sIG11bHRpOiB0cnVlfSksXG4gIG5ldyBQcm92aWRlcihFVkVOVF9NQU5BR0VSX1BMVUdJTlMsIHt1c2VDbGFzczogSGFtbWVyR2VzdHVyZXNQbHVnaW4sIG11bHRpOiB0cnVlfSksXG4gIG5ldyBQcm92aWRlcihIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHt1c2VDbGFzczogSGFtbWVyR2VzdHVyZUNvbmZpZ30pLFxuICBuZXcgUHJvdmlkZXIoRG9tUm9vdFJlbmRlcmVyLCB7dXNlQ2xhc3M6IERvbVJvb3RSZW5kZXJlcl99KSxcbiAgbmV3IFByb3ZpZGVyKFJvb3RSZW5kZXJlciwge3VzZUV4aXN0aW5nOiBEb21Sb290UmVuZGVyZXJ9KSxcbiAgbmV3IFByb3ZpZGVyKFNoYXJlZFN0eWxlc0hvc3QsIHt1c2VFeGlzdGluZzogRG9tU2hhcmVkU3R5bGVzSG9zdH0pLFxuICBuZXcgUHJvdmlkZXIoWEhSLCB7dXNlQ2xhc3M6IFhIUkltcGx9KSxcbiAgTWVzc2FnZUJhc2VkWEhSSW1wbCxcbiAgbmV3IFByb3ZpZGVyKFNlcnZpY2VNZXNzYWdlQnJva2VyRmFjdG9yeSwge3VzZUNsYXNzOiBTZXJ2aWNlTWVzc2FnZUJyb2tlckZhY3RvcnlffSksXG4gIG5ldyBQcm92aWRlcihDbGllbnRNZXNzYWdlQnJva2VyRmFjdG9yeSwge3VzZUNsYXNzOiBDbGllbnRNZXNzYWdlQnJva2VyRmFjdG9yeV99KSxcbiAgU2VyaWFsaXplcixcbiAgbmV3IFByb3ZpZGVyKE9OX1dFQl9XT1JLRVIsIHt1c2VWYWx1ZTogZmFsc2V9KSxcbiAgUmVuZGVyU3RvcmUsXG4gIERvbVNoYXJlZFN0eWxlc0hvc3QsXG4gIFRlc3RhYmlsaXR5LFxuICBCcm93c2VyRGV0YWlscyxcbiAgQW5pbWF0aW9uQnVpbGRlcixcbiAgRXZlbnRNYW5hZ2VyXG5dKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVHZW5lcmljV29ya2VyUmVuZGVyZXIoaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIHZhciBidXMgPSBpbmplY3Rvci5nZXQoTWVzc2FnZUJ1cyk7XG4gIGxldCB6b25lID0gaW5qZWN0b3IuZ2V0KE5nWm9uZSk7XG4gIGJ1cy5hdHRhY2hUb1pvbmUoem9uZSk7XG5cbiAgem9uZS5ydW5HdWFyZGVkKCgpID0+IHtcbiAgICBXT1JLRVJfUkVOREVSX01FU1NBR0lOR19QUk9WSURFUlMuZm9yRWFjaCgodG9rZW4pID0+IHsgaW5qZWN0b3IuZ2V0KHRva2VuKS5zdGFydCgpOyB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0V2ViV29ya2VyUmVuZGVyUGxhdGZvcm0ocmVnaXN0cnk6IFRlc3RhYmlsaXR5UmVnaXN0cnkpOiBGdW5jdGlvbiB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgQnJvd3NlckRvbUFkYXB0ZXIubWFrZUN1cnJlbnQoKTtcbiAgICB3dGZJbml0KCk7XG4gICAgcmVnaXN0cnkuc2V0VGVzdGFiaWxpdHlHZXR0ZXIobmV3IEJyb3dzZXJHZXRUZXN0YWJpbGl0eSgpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXhjZXB0aW9uSGFuZGxlcigpOiBFeGNlcHRpb25IYW5kbGVyIHtcbiAgcmV0dXJuIG5ldyBFeGNlcHRpb25IYW5kbGVyKERPTSwgIUlTX0RBUlQpO1xufVxuXG5mdW5jdGlvbiBkb2N1bWVudCgpOiBhbnkge1xuICByZXR1cm4gRE9NLmRlZmF1bHREb2MoKTtcbn1cbiJdfQ==