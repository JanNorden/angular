/**
 * @module
 * @description
 * The `di` module provides dependency injection container services.
 */
export { InjectMetadata, OptionalMetadata, InjectableMetadata, SelfMetadata, HostMetadata, SkipSelfMetadata, DependencyMetadata } from './di/metadata';
// we have to reexport * because Dart and TS export two different sets of types
export * from './di/decorators';
export { forwardRef, resolveForwardRef } from './di/forward_ref';
export { Injector, MapInjector } from './di/injector';
export { ReflectiveInjector } from './di/reflective_injector';
export { Binding, ProviderBuilder, bind, Provider, provide } from './di/provider';
export { ResolvedReflectiveFactory, ReflectiveDependency } from './di/reflective_provider';
export { ReflectiveKey } from './di/reflective_key';
export { NoProviderError, AbstractProviderError, CyclicDependencyError, InstantiationError, InvalidProviderError, NoAnnotationError, OutOfBoundsError } from './di/reflective_exceptions';
export { OpaqueToken } from './di/opaque_token';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUVKNkRxMzJ4LnRtcC9hbmd1bGFyMi9zcmMvY29yZS9kaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsU0FDRSxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osWUFBWSxFQUNaLGdCQUFnQixFQUNoQixrQkFBa0IsUUFDYixlQUFlLENBQUM7QUFFdkIsK0VBQStFO0FBQy9FLGNBQWMsaUJBQWlCLENBQUM7QUFFaEMsU0FBUSxVQUFVLEVBQUUsaUJBQWlCLFFBQXFCLGtCQUFrQixDQUFDO0FBRTdFLFNBQVEsUUFBUSxFQUFFLFdBQVcsUUFBTyxlQUFlLENBQUM7QUFDcEQsU0FBUSxrQkFBa0IsUUFBTywwQkFBMEIsQ0FBQztBQUM1RCxTQUNFLE9BQU8sRUFDUCxlQUFlLEVBQ2YsSUFBSSxFQUVKLFFBQVEsRUFDUixPQUFPLFFBQ0YsZUFBZSxDQUFDO0FBQ3ZCLFNBRUUseUJBQXlCLEVBQ3pCLG9CQUFvQixRQUdmLDBCQUEwQixDQUFDO0FBQ2xDLFNBQVEsYUFBYSxRQUFPLHFCQUFxQixDQUFDO0FBQ2xELFNBQ0UsZUFBZSxFQUNmLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDckIsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsZ0JBQWdCLFFBQ1gsNEJBQTRCLENBQUM7QUFDcEMsU0FBUSxXQUFXLFFBQU8sbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGBkaWAgbW9kdWxlIHByb3ZpZGVzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGNvbnRhaW5lciBzZXJ2aWNlcy5cbiAqL1xuXG5leHBvcnQge1xuICBJbmplY3RNZXRhZGF0YSxcbiAgT3B0aW9uYWxNZXRhZGF0YSxcbiAgSW5qZWN0YWJsZU1ldGFkYXRhLFxuICBTZWxmTWV0YWRhdGEsXG4gIEhvc3RNZXRhZGF0YSxcbiAgU2tpcFNlbGZNZXRhZGF0YSxcbiAgRGVwZW5kZW5jeU1ldGFkYXRhXG59IGZyb20gJy4vZGkvbWV0YWRhdGEnO1xuXG4vLyB3ZSBoYXZlIHRvIHJlZXhwb3J0ICogYmVjYXVzZSBEYXJ0IGFuZCBUUyBleHBvcnQgdHdvIGRpZmZlcmVudCBzZXRzIG9mIHR5cGVzXG5leHBvcnQgKiBmcm9tICcuL2RpL2RlY29yYXRvcnMnO1xuXG5leHBvcnQge2ZvcndhcmRSZWYsIHJlc29sdmVGb3J3YXJkUmVmLCBGb3J3YXJkUmVmRm59IGZyb20gJy4vZGkvZm9yd2FyZF9yZWYnO1xuXG5leHBvcnQge0luamVjdG9yLCBNYXBJbmplY3Rvcn0gZnJvbSAnLi9kaS9pbmplY3Rvcic7XG5leHBvcnQge1JlZmxlY3RpdmVJbmplY3Rvcn0gZnJvbSAnLi9kaS9yZWZsZWN0aXZlX2luamVjdG9yJztcbmV4cG9ydCB7XG4gIEJpbmRpbmcsXG4gIFByb3ZpZGVyQnVpbGRlcixcbiAgYmluZCxcblxuICBQcm92aWRlcixcbiAgcHJvdmlkZVxufSBmcm9tICcuL2RpL3Byb3ZpZGVyJztcbmV4cG9ydCB7XG4gIFJlc29sdmVkUmVmbGVjdGl2ZUJpbmRpbmcsXG4gIFJlc29sdmVkUmVmbGVjdGl2ZUZhY3RvcnksXG4gIFJlZmxlY3RpdmVEZXBlbmRlbmN5LFxuXG4gIFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyXG59IGZyb20gJy4vZGkvcmVmbGVjdGl2ZV9wcm92aWRlcic7XG5leHBvcnQge1JlZmxlY3RpdmVLZXl9IGZyb20gJy4vZGkvcmVmbGVjdGl2ZV9rZXknO1xuZXhwb3J0IHtcbiAgTm9Qcm92aWRlckVycm9yLFxuICBBYnN0cmFjdFByb3ZpZGVyRXJyb3IsXG4gIEN5Y2xpY0RlcGVuZGVuY3lFcnJvcixcbiAgSW5zdGFudGlhdGlvbkVycm9yLFxuICBJbnZhbGlkUHJvdmlkZXJFcnJvcixcbiAgTm9Bbm5vdGF0aW9uRXJyb3IsXG4gIE91dE9mQm91bmRzRXJyb3Jcbn0gZnJvbSAnLi9kaS9yZWZsZWN0aXZlX2V4Y2VwdGlvbnMnO1xuZXhwb3J0IHtPcGFxdWVUb2tlbn0gZnJvbSAnLi9kaS9vcGFxdWVfdG9rZW4nO1xuIl19