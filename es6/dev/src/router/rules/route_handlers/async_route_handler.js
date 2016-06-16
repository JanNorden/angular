import { isPresent } from 'angular2/src/facade/lang';
import { RouteData, BLANK_ROUTE_DATA } from '../../instruction';
export class AsyncRouteHandler {
    constructor(_loader, data = null) {
        this._loader = _loader;
        /** @internal */
        this._resolvedComponent = null;
        this.data = isPresent(data) ? new RouteData(data) : BLANK_ROUTE_DATA;
    }
    resolveComponentType() {
        if (isPresent(this._resolvedComponent)) {
            return this._resolvedComponent;
        }
        return this._resolvedComponent = this._loader().then((componentType) => {
            this.componentType = componentType;
            return componentType;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNfcm91dGVfaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtRUo2RHEzMngudG1wL2FuZ3VsYXIyL3NyYy9yb3V0ZXIvcnVsZXMvcm91dGVfaGFuZGxlcnMvYXN5bmNfcm91dGVfaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLDBCQUEwQjtPQUczQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLG1CQUFtQjtBQUU3RDtJQU1FLFlBQW9CLE9BQXVELEVBQy9ELElBQUksR0FBeUIsSUFBSTtRQUR6QixZQUFPLEdBQVAsT0FBTyxDQUFnRDtRQUwzRSxnQkFBZ0I7UUFDaEIsdUJBQWtCLEdBQTZDLElBQUksQ0FBQztRQU1sRSxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztJQUN2RSxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNqQyxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYTtZQUNqRSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUNuQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztBQUNILENBQUM7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG5pbXBvcnQge1JvdXRlSGFuZGxlcn0gZnJvbSAnLi9yb3V0ZV9oYW5kbGVyJztcbmltcG9ydCB7Um91dGVEYXRhLCBCTEFOS19ST1VURV9EQVRBfSBmcm9tICcuLi8uLi9pbnN0cnVjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBBc3luY1JvdXRlSGFuZGxlciBpbXBsZW1lbnRzIFJvdXRlSGFuZGxlciB7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3Jlc29sdmVkQ29tcG9uZW50OiBQcm9taXNlPGFueSAvKlR5cGUgfCBDb21wb25lbnRGYWN0b3J5Ki8+ID0gbnVsbDtcbiAgY29tcG9uZW50VHlwZTogYW55IC8qVHlwZSB8IENvbXBvbmVudEZhY3RvcnkqLztcbiAgcHVibGljIGRhdGE6IFJvdXRlRGF0YTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2FkZXI6ICgpID0+IFByb21pc2U8YW55IC8qVHlwZSB8IENvbXBvbmVudEZhY3RvcnkqLz4sXG4gICAgICAgICAgICAgIGRhdGE6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0gbnVsbCkge1xuICAgIHRoaXMuZGF0YSA9IGlzUHJlc2VudChkYXRhKSA/IG5ldyBSb3V0ZURhdGEoZGF0YSkgOiBCTEFOS19ST1VURV9EQVRBO1xuICB9XG5cbiAgcmVzb2x2ZUNvbXBvbmVudFR5cGUoKTogUHJvbWlzZTxhbnkgLypUeXBlIHwgQ29tcG9uZW50RmFjdG9yeSovPiB7XG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLl9yZXNvbHZlZENvbXBvbmVudCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXNvbHZlZENvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZWRDb21wb25lbnQgPSB0aGlzLl9sb2FkZXIoKS50aGVuKChjb21wb25lbnRUeXBlKSA9PiB7XG4gICAgICB0aGlzLmNvbXBvbmVudFR5cGUgPSBjb21wb25lbnRUeXBlO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudFR5cGU7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==