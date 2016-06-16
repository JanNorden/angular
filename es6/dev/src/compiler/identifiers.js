import { CompileIdentifierMetadata, CompileTokenMetadata } from './compile_metadata';
import { AppView, DebugAppView } from 'angular2/src/core/linker/view';
import { StaticNodeDebugInfo, DebugContext } from 'angular2/src/core/linker/debug_context';
import { ViewUtils, flattenNestedViewRenderNodes, interpolate, checkBinding } from 'angular2/src/core/linker/view_utils';
import { uninitialized, devModeEqual, SimpleChange, ValueUnwrapper, ChangeDetectorRef, ChangeDetectorState, ChangeDetectionStrategy } from 'angular2/src/core/change_detection/change_detection';
import { AppElement } from 'angular2/src/core/linker/element';
import { ElementRef } from 'angular2/src/core/linker/element_ref';
import { ViewContainerRef } from 'angular2/src/core/linker/view_container_ref';
import { Renderer, RenderComponentType } from 'angular2/src/core/render/api';
import { ViewEncapsulation } from 'angular2/src/core/metadata/view';
import { ViewType } from 'angular2/src/core/linker/view_type';
import { QueryList } from 'angular2/src/core/linker';
import { Injector } from 'angular2/src/core/di/injector';
import { TemplateRef, TemplateRef_ } from 'angular2/src/core/linker/template_ref';
import { MODULE_SUFFIX } from './util';
import { CodegenInjector, InjectorFactory } from 'angular2/src/core/linker/injector_factory';
var APP_VIEW_MODULE_URL = 'asset:angular2/lib/src/core/linker/view' + MODULE_SUFFIX;
var VIEW_UTILS_MODULE_URL = 'asset:angular2/lib/src/core/linker/view_utils' + MODULE_SUFFIX;
var CD_MODULE_URL = 'asset:angular2/lib/src/core/change_detection/change_detection' + MODULE_SUFFIX;
// Reassign the imports to different variables so we can
// define static variables with the name of the import.
// (only needed for Dart).
var impViewUtils = ViewUtils;
var impAppView = AppView;
var impDebugAppView = DebugAppView;
var impDebugContext = DebugContext;
var impAppElement = AppElement;
var impElementRef = ElementRef;
var impViewContainerRef = ViewContainerRef;
var impChangeDetectorRef = ChangeDetectorRef;
var impRenderComponentType = RenderComponentType;
var impQueryList = QueryList;
var impTemplateRef = TemplateRef;
var impTemplateRef_ = TemplateRef_;
var impValueUnwrapper = ValueUnwrapper;
var impInjector = Injector;
var impCodegenInjector = CodegenInjector;
var impInjectorFactory = InjectorFactory;
var impViewEncapsulation = ViewEncapsulation;
var impViewType = ViewType;
var impChangeDetectionStrategy = ChangeDetectionStrategy;
var impStaticNodeDebugInfo = StaticNodeDebugInfo;
var impRenderer = Renderer;
var impSimpleChange = SimpleChange;
var impUninitialized = uninitialized;
var impChangeDetectorState = ChangeDetectorState;
var impFlattenNestedViewRenderNodes = flattenNestedViewRenderNodes;
var impDevModeEqual = devModeEqual;
var impInterpolate = interpolate;
var impCheckBinding = checkBinding;
export class Identifiers {
}
Identifiers.ViewUtils = new CompileIdentifierMetadata({
    name: 'ViewUtils',
    moduleUrl: 'asset:angular2/lib/src/core/linker/view_utils' + MODULE_SUFFIX,
    runtime: impViewUtils
});
Identifiers.AppView = new CompileIdentifierMetadata({ name: 'AppView', moduleUrl: APP_VIEW_MODULE_URL, runtime: impAppView });
Identifiers.DebugAppView = new CompileIdentifierMetadata({ name: 'DebugAppView', moduleUrl: APP_VIEW_MODULE_URL, runtime: impDebugAppView });
Identifiers.AppElement = new CompileIdentifierMetadata({
    name: 'AppElement',
    moduleUrl: 'asset:angular2/lib/src/core/linker/element' + MODULE_SUFFIX,
    runtime: impAppElement
});
Identifiers.ElementRef = new CompileIdentifierMetadata({
    name: 'ElementRef',
    moduleUrl: 'asset:angular2/lib/src/core/linker/element_ref' + MODULE_SUFFIX,
    runtime: impElementRef
});
Identifiers.ViewContainerRef = new CompileIdentifierMetadata({
    name: 'ViewContainerRef',
    moduleUrl: 'asset:angular2/lib/src/core/linker/view_container_ref' + MODULE_SUFFIX,
    runtime: impViewContainerRef
});
Identifiers.ChangeDetectorRef = new CompileIdentifierMetadata({
    name: 'ChangeDetectorRef',
    moduleUrl: 'asset:angular2/lib/src/core/change_detection/change_detector_ref' + MODULE_SUFFIX,
    runtime: impChangeDetectorRef
});
Identifiers.RenderComponentType = new CompileIdentifierMetadata({
    name: 'RenderComponentType',
    moduleUrl: 'asset:angular2/lib/src/core/render/api' + MODULE_SUFFIX,
    runtime: impRenderComponentType
});
Identifiers.QueryList = new CompileIdentifierMetadata({
    name: 'QueryList',
    moduleUrl: 'asset:angular2/lib/src/core/linker/query_list' + MODULE_SUFFIX,
    runtime: impQueryList
});
Identifiers.TemplateRef = new CompileIdentifierMetadata({
    name: 'TemplateRef',
    moduleUrl: 'asset:angular2/lib/src/core/linker/template_ref' + MODULE_SUFFIX,
    runtime: impTemplateRef
});
Identifiers.TemplateRef_ = new CompileIdentifierMetadata({
    name: 'TemplateRef_',
    moduleUrl: 'asset:angular2/lib/src/core/linker/template_ref' + MODULE_SUFFIX,
    runtime: impTemplateRef_
});
Identifiers.ValueUnwrapper = new CompileIdentifierMetadata({ name: 'ValueUnwrapper', moduleUrl: CD_MODULE_URL, runtime: impValueUnwrapper });
Identifiers.Injector = new CompileIdentifierMetadata({
    name: 'Injector',
    moduleUrl: `asset:angular2/lib/src/core/di/injector${MODULE_SUFFIX}`,
    runtime: impInjector
});
Identifiers.InjectorFactory = new CompileIdentifierMetadata({
    name: 'InjectorFactory',
    moduleUrl: `asset:angular2/lib/src/core/linker/injector_factory${MODULE_SUFFIX}`,
    runtime: impInjectorFactory
});
Identifiers.CodegenInjector = new CompileIdentifierMetadata({
    name: 'CodegenInjector',
    moduleUrl: `asset:angular2/lib/src/core/linker/injector_factory${MODULE_SUFFIX}`,
    runtime: impCodegenInjector
});
Identifiers.ViewEncapsulation = new CompileIdentifierMetadata({
    name: 'ViewEncapsulation',
    moduleUrl: 'asset:angular2/lib/src/core/metadata/view' + MODULE_SUFFIX,
    runtime: impViewEncapsulation
});
Identifiers.ViewType = new CompileIdentifierMetadata({
    name: 'ViewType',
    moduleUrl: `asset:angular2/lib/src/core/linker/view_type${MODULE_SUFFIX}`,
    runtime: impViewType
});
Identifiers.ChangeDetectionStrategy = new CompileIdentifierMetadata({
    name: 'ChangeDetectionStrategy',
    moduleUrl: CD_MODULE_URL,
    runtime: impChangeDetectionStrategy
});
Identifiers.StaticNodeDebugInfo = new CompileIdentifierMetadata({
    name: 'StaticNodeDebugInfo',
    moduleUrl: `asset:angular2/lib/src/core/linker/debug_context${MODULE_SUFFIX}`,
    runtime: impStaticNodeDebugInfo
});
Identifiers.DebugContext = new CompileIdentifierMetadata({
    name: 'DebugContext',
    moduleUrl: `asset:angular2/lib/src/core/linker/debug_context${MODULE_SUFFIX}`,
    runtime: impDebugContext
});
Identifiers.Renderer = new CompileIdentifierMetadata({
    name: 'Renderer',
    moduleUrl: 'asset:angular2/lib/src/core/render/api' + MODULE_SUFFIX,
    runtime: impRenderer
});
Identifiers.SimpleChange = new CompileIdentifierMetadata({ name: 'SimpleChange', moduleUrl: CD_MODULE_URL, runtime: impSimpleChange });
Identifiers.uninitialized = new CompileIdentifierMetadata({ name: 'uninitialized', moduleUrl: CD_MODULE_URL, runtime: impUninitialized });
Identifiers.ChangeDetectorState = new CompileIdentifierMetadata({ name: 'ChangeDetectorState', moduleUrl: CD_MODULE_URL, runtime: impChangeDetectorState });
Identifiers.checkBinding = new CompileIdentifierMetadata({ name: 'checkBinding', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impCheckBinding });
Identifiers.flattenNestedViewRenderNodes = new CompileIdentifierMetadata({
    name: 'flattenNestedViewRenderNodes',
    moduleUrl: VIEW_UTILS_MODULE_URL,
    runtime: impFlattenNestedViewRenderNodes
});
Identifiers.devModeEqual = new CompileIdentifierMetadata({ name: 'devModeEqual', moduleUrl: CD_MODULE_URL, runtime: impDevModeEqual });
Identifiers.interpolate = new CompileIdentifierMetadata({ name: 'interpolate', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impInterpolate });
export function identifierToken(identifier) {
    return new CompileTokenMetadata({ identifier: identifier });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZmllcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUVKNkRxMzJ4LnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvaWRlbnRpZmllcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyx5QkFBeUIsRUFBRSxvQkFBb0IsRUFBQyxNQUFNLG9CQUFvQjtPQUMzRSxFQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUMsTUFBTSwrQkFBK0I7T0FDNUQsRUFBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUMsTUFBTSx3Q0FBd0M7T0FDakYsRUFDTCxTQUFTLEVBQ1QsNEJBQTRCLEVBQzVCLFdBQVcsRUFDWCxZQUFZLEVBQ2IsTUFBTSxxQ0FBcUM7T0FDckMsRUFDTCxhQUFhLEVBQ2IsWUFBWSxFQUNaLFlBQVksRUFDWixjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQix1QkFBdUIsRUFDeEIsTUFBTSxxREFBcUQ7T0FDckQsRUFBQyxVQUFVLEVBQUMsTUFBTSxrQ0FBa0M7T0FDcEQsRUFBQyxVQUFVLEVBQUMsTUFBTSxzQ0FBc0M7T0FDeEQsRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZDQUE2QztPQUNyRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBa0IsTUFBTSw4QkFBOEI7T0FDcEYsRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlDQUFpQztPQUMxRCxFQUFDLFFBQVEsRUFBQyxNQUFNLG9DQUFvQztPQUNwRCxFQUFDLFNBQVMsRUFBQyxNQUFNLDBCQUEwQjtPQUMzQyxFQUFDLFFBQVEsRUFBQyxNQUFNLCtCQUErQjtPQUMvQyxFQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUMsTUFBTSx1Q0FBdUM7T0FDeEUsRUFBQyxhQUFhLEVBQUMsTUFBTSxRQUFRO09BQzdCLEVBQUMsZUFBZSxFQUFFLGVBQWUsRUFBQyxNQUFNLDJDQUEyQztBQUUxRixJQUFJLG1CQUFtQixHQUFHLHlD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QUFvQixDQUFDLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7QUFDNUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSwgQ29tcGlsZVRva2VuTWV0YWRhdGF9IGZyb20gJy4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0FwcFZpZXcsIERlYnVnQXBwVmlld30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL3ZpZXcnO1xuaW1wb3J0IHtTdGF0aWNOb2RlRGVidWdJbmZvLCBEZWJ1Z0NvbnRleHR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9kZWJ1Z19jb250ZXh0JztcbmltcG9ydCB7XG4gIFZpZXdVdGlscyxcbiAgZmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2RlcyxcbiAgaW50ZXJwb2xhdGUsXG4gIGNoZWNrQmluZGluZ1xufSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvdmlld191dGlscyc7XG5pbXBvcnQge1xuICB1bmluaXRpYWxpemVkLFxuICBkZXZNb2RlRXF1YWwsXG4gIFNpbXBsZUNoYW5nZSxcbiAgVmFsdWVVbndyYXBwZXIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3RvclN0YXRlLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rpb24nO1xuaW1wb3J0IHtBcHBFbGVtZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvZWxlbWVudCc7XG5pbXBvcnQge0VsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9lbGVtZW50X3JlZic7XG5pbXBvcnQge1ZpZXdDb250YWluZXJSZWZ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci92aWV3X2NvbnRhaW5lcl9yZWYnO1xuaW1wb3J0IHtSZW5kZXJlciwgUmVuZGVyQ29tcG9uZW50VHlwZSwgUmVuZGVyRGVidWdJbmZvfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9yZW5kZXIvYXBpJztcbmltcG9ydCB7Vmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL21ldGFkYXRhL3ZpZXcnO1xuaW1wb3J0IHtWaWV3VHlwZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfdHlwZSc7XG5pbXBvcnQge1F1ZXJ5TGlzdH0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyJztcbmltcG9ydCB7SW5qZWN0b3J9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpL2luamVjdG9yJztcbmltcG9ydCB7VGVtcGxhdGVSZWYsIFRlbXBsYXRlUmVmX30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL3RlbXBsYXRlX3JlZic7XG5pbXBvcnQge01PRFVMRV9TVUZGSVh9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQge0NvZGVnZW5JbmplY3RvciwgSW5qZWN0b3JGYWN0b3J5fSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvaW5qZWN0b3JfZmFjdG9yeSc7XG5cbnZhciBBUFBfVklFV19NT0RVTEVfVVJMID0gJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvdmlldycgKyBNT0RVTEVfU1VGRklYO1xudmFyIFZJRVdfVVRJTFNfTU9EVUxFX1VSTCA9ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfdXRpbHMnICsgTU9EVUxFX1NVRkZJWDtcbnZhciBDRF9NT0RVTEVfVVJMID0gJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rpb24nICsgTU9EVUxFX1NVRkZJWDtcblxuLy8gUmVhc3NpZ24gdGhlIGltcG9ydHMgdG8gZGlmZmVyZW50IHZhcmlhYmxlcyBzbyB3ZSBjYW5cbi8vIGRlZmluZSBzdGF0aWMgdmFyaWFibGVzIHdpdGggdGhlIG5hbWUgb2YgdGhlIGltcG9ydC5cbi8vIChvbmx5IG5lZWRlZCBmb3IgRGFydCkuXG52YXIgaW1wVmlld1V0aWxzID0gVmlld1V0aWxzO1xudmFyIGltcEFwcFZpZXcgPSBBcHBWaWV3O1xudmFyIGltcERlYnVnQXBwVmlldyA9IERlYnVnQXBwVmlldztcbnZhciBpbXBEZWJ1Z0NvbnRleHQgPSBEZWJ1Z0NvbnRleHQ7XG52YXIgaW1wQXBwRWxlbWVudCA9IEFwcEVsZW1lbnQ7XG52YXIgaW1wRWxlbWVudFJlZiA9IEVsZW1lbnRSZWY7XG52YXIgaW1wVmlld0NvbnRhaW5lclJlZiA9IFZpZXdDb250YWluZXJSZWY7XG52YXIgaW1wQ2hhbmdlRGV0ZWN0b3JSZWYgPSBDaGFuZ2VEZXRlY3RvclJlZjtcbnZhciBpbXBSZW5kZXJDb21wb25lbnRUeXBlID0gUmVuZGVyQ29tcG9uZW50VHlwZTtcbnZhciBpbXBRdWVyeUxpc3QgPSBRdWVyeUxpc3Q7XG52YXIgaW1wVGVtcGxhdGVSZWYgPSBUZW1wbGF0ZVJlZjtcbnZhciBpbXBUZW1wbGF0ZVJlZl8gPSBUZW1wbGF0ZVJlZl87XG52YXIgaW1wVmFsdWVVbndyYXBwZXIgPSBWYWx1ZVVud3JhcHBlcjtcbnZhciBpbXBJbmplY3RvciA9IEluamVjdG9yO1xudmFyIGltcENvZGVnZW5JbmplY3RvciA9IENvZGVnZW5JbmplY3RvcjtcbnZhciBpbXBJbmplY3RvckZhY3RvcnkgPSBJbmplY3RvckZhY3Rvcnk7XG52YXIgaW1wVmlld0VuY2Fwc3VsYXRpb24gPSBWaWV3RW5jYXBzdWxhdGlvbjtcbnZhciBpbXBWaWV3VHlwZSA9IFZpZXdUeXBlO1xudmFyIGltcENoYW5nZURldGVjdGlvblN0cmF0ZWd5ID0gQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3k7XG52YXIgaW1wU3RhdGljTm9kZURlYnVnSW5mbyA9IFN0YXRpY05vZGVEZWJ1Z0luZm87XG52YXIgaW1wUmVuZGVyZXIgPSBSZW5kZXJlcjtcbnZhciBpbXBTaW1wbGVDaGFuZ2UgPSBTaW1wbGVDaGFuZ2U7XG52YXIgaW1wVW5pbml0aWFsaXplZCA9IHVuaW5pdGlhbGl6ZWQ7XG52YXIgaW1wQ2hhbmdlRGV0ZWN0b3JTdGF0ZSA9IENoYW5nZURldGVjdG9yU3RhdGU7XG52YXIgaW1wRmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2RlcyA9IGZsYXR0ZW5OZXN0ZWRWaWV3UmVuZGVyTm9kZXM7XG52YXIgaW1wRGV2TW9kZUVxdWFsID0gZGV2TW9kZUVxdWFsO1xudmFyIGltcEludGVycG9sYXRlID0gaW50ZXJwb2xhdGU7XG52YXIgaW1wQ2hlY2tCaW5kaW5nID0gY2hlY2tCaW5kaW5nO1xuXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllcnMge1xuICBzdGF0aWMgVmlld1V0aWxzID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdWaWV3VXRpbHMnLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvdmlld191dGlscycgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcFZpZXdVdGlsc1xuICB9KTtcbiAgc3RhdGljIEFwcFZpZXcgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAnQXBwVmlldycsIG1vZHVsZVVybDogQVBQX1ZJRVdfTU9EVUxFX1VSTCwgcnVudGltZTogaW1wQXBwVmlld30pO1xuICBzdGF0aWMgRGVidWdBcHBWaWV3ID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoXG4gICAgICB7bmFtZTogJ0RlYnVnQXBwVmlldycsIG1vZHVsZVVybDogQVBQX1ZJRVdfTU9EVUxFX1VSTCwgcnVudGltZTogaW1wRGVidWdBcHBWaWV3fSk7XG4gIHN0YXRpYyBBcHBFbGVtZW50ID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdBcHBFbGVtZW50JyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL2VsZW1lbnQnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBBcHBFbGVtZW50XG4gIH0pO1xuICBzdGF0aWMgRWxlbWVudFJlZiA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnRWxlbWVudFJlZicsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci9lbGVtZW50X3JlZicgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcEVsZW1lbnRSZWZcbiAgfSk7XG4gIHN0YXRpYyBWaWV3Q29udGFpbmVyUmVmID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdWaWV3Q29udGFpbmVyUmVmJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfY29udGFpbmVyX3JlZicgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcFZpZXdDb250YWluZXJSZWZcbiAgfSk7XG4gIHN0YXRpYyBDaGFuZ2VEZXRlY3RvclJlZiA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnQ2hhbmdlRGV0ZWN0b3JSZWYnLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rvcl9yZWYnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBDaGFuZ2VEZXRlY3RvclJlZlxuICB9KTtcbiAgc3RhdGljIFJlbmRlckNvbXBvbmVudFR5cGUgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ1JlbmRlckNvbXBvbmVudFR5cGUnLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9yZW5kZXIvYXBpJyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wUmVuZGVyQ29tcG9uZW50VHlwZVxuICB9KTtcbiAgc3RhdGljIFF1ZXJ5TGlzdCA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnUXVlcnlMaXN0JyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL3F1ZXJ5X2xpc3QnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBRdWVyeUxpc3RcbiAgfSk7XG4gIHN0YXRpYyBUZW1wbGF0ZVJlZiA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnVGVtcGxhdGVSZWYnLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvdGVtcGxhdGVfcmVmJyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wVGVtcGxhdGVSZWZcbiAgfSk7XG4gIHN0YXRpYyBUZW1wbGF0ZVJlZl8gPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ1RlbXBsYXRlUmVmXycsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci90ZW1wbGF0ZV9yZWYnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBUZW1wbGF0ZVJlZl9cbiAgfSk7XG4gIHN0YXRpYyBWYWx1ZVVud3JhcHBlciA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdWYWx1ZVVud3JhcHBlcicsIG1vZHVsZVVybDogQ0RfTU9EVUxFX1VSTCwgcnVudGltZTogaW1wVmFsdWVVbndyYXBwZXJ9KTtcbiAgc3RhdGljIEluamVjdG9yID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdJbmplY3RvcicsXG4gICAgbW9kdWxlVXJsOiBgYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2RpL2luamVjdG9yJHtNT0RVTEVfU1VGRklYfWAsXG4gICAgcnVudGltZTogaW1wSW5qZWN0b3JcbiAgfSk7XG4gIHN0YXRpYyBJbmplY3RvckZhY3RvcnkgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ0luamVjdG9yRmFjdG9yeScsXG4gICAgbW9kdWxlVXJsOiBgYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci9pbmplY3Rvcl9mYWN0b3J5JHtNT0RVTEVfU1VGRklYfWAsXG4gICAgcnVudGltZTogaW1wSW5qZWN0b3JGYWN0b3J5XG4gIH0pO1xuICBzdGF0aWMgQ29kZWdlbkluamVjdG9yID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdDb2RlZ2VuSW5qZWN0b3InLFxuICAgIG1vZHVsZVVybDogYGFzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvaW5qZWN0b3JfZmFjdG9yeSR7TU9EVUxFX1NVRkZJWH1gLFxuICAgIHJ1bnRpbWU6IGltcENvZGVnZW5JbmplY3RvclxuICB9KTtcbiAgc3RhdGljIFZpZXdFbmNhcHN1bGF0aW9uID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdWaWV3RW5jYXBzdWxhdGlvbicsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL21ldGFkYXRhL3ZpZXcnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBWaWV3RW5jYXBzdWxhdGlvblxuICB9KTtcbiAgc3RhdGljIFZpZXdUeXBlID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdWaWV3VHlwZScsXG4gICAgbW9kdWxlVXJsOiBgYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci92aWV3X3R5cGUke01PRFVMRV9TVUZGSVh9YCxcbiAgICBydW50aW1lOiBpbXBWaWV3VHlwZVxuICB9KTtcbiAgc3RhdGljIENoYW5nZURldGVjdGlvblN0cmF0ZWd5ID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneScsXG4gICAgbW9kdWxlVXJsOiBDRF9NT0RVTEVfVVJMLFxuICAgIHJ1bnRpbWU6IGltcENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG4gIH0pO1xuICBzdGF0aWMgU3RhdGljTm9kZURlYnVnSW5mbyA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnU3RhdGljTm9kZURlYnVnSW5mbycsXG4gICAgbW9kdWxlVXJsOiBgYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci9kZWJ1Z19jb250ZXh0JHtNT0RVTEVfU1VGRklYfWAsXG4gICAgcnVudGltZTogaW1wU3RhdGljTm9kZURlYnVnSW5mb1xuICB9KTtcbiAgc3RhdGljIERlYnVnQ29udGV4dCA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnRGVidWdDb250ZXh0JyxcbiAgICBtb2R1bGVVcmw6IGBhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL2RlYnVnX2NvbnRleHQke01PRFVMRV9TVUZGSVh9YCxcbiAgICBydW50aW1lOiBpbXBEZWJ1Z0NvbnRleHRcbiAgfSk7XG4gIHN0YXRpYyBSZW5kZXJlciA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnUmVuZGVyZXInLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9yZW5kZXIvYXBpJyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wUmVuZGVyZXJcbiAgfSk7XG4gIHN0YXRpYyBTaW1wbGVDaGFuZ2UgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAnU2ltcGxlQ2hhbmdlJywgbW9kdWxlVXJsOiBDRF9NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBTaW1wbGVDaGFuZ2V9KTtcbiAgc3RhdGljIHVuaW5pdGlhbGl6ZWQgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAndW5pbml0aWFsaXplZCcsIG1vZHVsZVVybDogQ0RfTU9EVUxFX1VSTCwgcnVudGltZTogaW1wVW5pbml0aWFsaXplZH0pO1xuICBzdGF0aWMgQ2hhbmdlRGV0ZWN0b3JTdGF0ZSA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdDaGFuZ2VEZXRlY3RvclN0YXRlJywgbW9kdWxlVXJsOiBDRF9NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBDaGFuZ2VEZXRlY3RvclN0YXRlfSk7XG4gIHN0YXRpYyBjaGVja0JpbmRpbmcgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAnY2hlY2tCaW5kaW5nJywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcENoZWNrQmluZGluZ30pO1xuICBzdGF0aWMgZmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2RlcyA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnZmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2RlcycsXG4gICAgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsXG4gICAgcnVudGltZTogaW1wRmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2Rlc1xuICB9KTtcbiAgc3RhdGljIGRldk1vZGVFcXVhbCA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdkZXZNb2RlRXF1YWwnLCBtb2R1bGVVcmw6IENEX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcERldk1vZGVFcXVhbH0pO1xuICBzdGF0aWMgaW50ZXJwb2xhdGUgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAnaW50ZXJwb2xhdGUnLCBtb2R1bGVVcmw6IFZJRVdfVVRJTFNfTU9EVUxFX1VSTCwgcnVudGltZTogaW1wSW50ZXJwb2xhdGV9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJUb2tlbihpZGVudGlmaWVyOiBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKTogQ29tcGlsZVRva2VuTWV0YWRhdGEge1xuICByZXR1cm4gbmV3IENvbXBpbGVUb2tlbk1ldGFkYXRhKHtpZGVudGlmaWVyOiBpZGVudGlmaWVyfSk7XG59XG4iXX0=