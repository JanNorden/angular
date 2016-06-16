'use strict';"use strict";
var lang_1 = require('angular2/src/facade/lang');
var route_path_1 = require('./route_path');
var RegexRoutePath = (function () {
    function RegexRoutePath(_reString, _serializer) {
        this._reString = _reString;
        this._serializer = _serializer;
        this.terminal = true;
        this.specificity = '2';
        this.hash = this._reString;
        this._regex = lang_1.RegExpWrapper.create(this._reString);
    }
    RegexRoutePath.prototype.matchUrl = function (url) {
        var urlPath = url.toString();
        var params = {};
        var matcher = lang_1.RegExpWrapper.matcher(this._regex, urlPath);
        var match = lang_1.RegExpMatcherWrapper.next(matcher);
        if (lang_1.isBlank(match)) {
            return null;
        }
        for (var i = 0; i < match.length; i += 1) {
            params[i.toString()] = match[i];
        }
        return new route_path_1.MatchedUrl(urlPath, [], params, [], null);
    };
    RegexRoutePath.prototype.generateUrl = function (params) { return this._serializer(params); };
    RegexRoutePath.prototype.toString = function () { return this._reString; };
    return RegexRoutePath;
}());
exports.RegexRoutePath = RegexRoutePath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXhfcm91dGVfcGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtYTdXMVNUZHAudG1wL2FuZ3VsYXIyL3NyYy9yb3V0ZXIvcnVsZXMvcm91dGVfcGF0aHMvcmVnZXhfcm91dGVfcGF0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTJELDBCQUEwQixDQUFDLENBQUE7QUFFdEYsMkJBQWtELGNBQWMsQ0FBQyxDQUFBO0FBS2pFO0lBT0Usd0JBQW9CLFNBQWlCLEVBQVUsV0FBNEI7UUFBdkQsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUxwRSxhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGdCQUFXLEdBQVcsR0FBRyxDQUFDO1FBSy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsaUNBQVEsR0FBUixVQUFTLEdBQVE7UUFDZixJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxNQUFNLEdBQTRCLEVBQUUsQ0FBQztRQUN6QyxJQUFJLE9BQU8sR0FBRyxvQkFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFELElBQUksS0FBSyxHQUFHLDJCQUFvQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUvQyxFQUFFLENBQUMsQ0FBQyxjQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUN6QyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSx1QkFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLE1BQTRCLElBQWtCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU1RixpQ0FBUSxHQUFSLGNBQXFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUMvQyxxQkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFoQ1ksc0JBQWMsaUJBZ0MxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWdFeHBXcmFwcGVyLCBSZWdFeHBNYXRjaGVyV3JhcHBlciwgaXNCbGFua30gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7VXJsLCBSb290VXJsfSBmcm9tICcuLi8uLi91cmxfcGFyc2VyJztcbmltcG9ydCB7Um91dGVQYXRoLCBHZW5lcmF0ZWRVcmwsIE1hdGNoZWRVcmx9IGZyb20gJy4vcm91dGVfcGF0aCc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBSZWdleFNlcmlhbGl6ZXIgeyAocGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSk6IEdlbmVyYXRlZFVybDsgfVxuXG5leHBvcnQgY2xhc3MgUmVnZXhSb3V0ZVBhdGggaW1wbGVtZW50cyBSb3V0ZVBhdGgge1xuICBwdWJsaWMgaGFzaDogc3RyaW5nO1xuICBwdWJsaWMgdGVybWluYWw6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgc3BlY2lmaWNpdHk6IHN0cmluZyA9ICcyJztcblxuICBwcml2YXRlIF9yZWdleDogUmVnRXhwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlU3RyaW5nOiBzdHJpbmcsIHByaXZhdGUgX3NlcmlhbGl6ZXI6IFJlZ2V4U2VyaWFsaXplcikge1xuICAgIHRoaXMuaGFzaCA9IHRoaXMuX3JlU3RyaW5nO1xuICAgIHRoaXMuX3JlZ2V4ID0gUmVnRXhwV3JhcHBlci5jcmVhdGUodGhpcy5fcmVTdHJpbmcpO1xuICB9XG5cbiAgbWF0Y2hVcmwodXJsOiBVcmwpOiBNYXRjaGVkVXJsIHtcbiAgICB2YXIgdXJsUGF0aCA9IHVybC50b1N0cmluZygpO1xuICAgIHZhciBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgdmFyIG1hdGNoZXIgPSBSZWdFeHBXcmFwcGVyLm1hdGNoZXIodGhpcy5fcmVnZXgsIHVybFBhdGgpO1xuICAgIHZhciBtYXRjaCA9IFJlZ0V4cE1hdGNoZXJXcmFwcGVyLm5leHQobWF0Y2hlcik7XG5cbiAgICBpZiAoaXNCbGFuayhtYXRjaCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2gubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHBhcmFtc1tpLnRvU3RyaW5nKCldID0gbWF0Y2hbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBNYXRjaGVkVXJsKHVybFBhdGgsIFtdLCBwYXJhbXMsIFtdLCBudWxsKTtcbiAgfVxuXG4gIGdlbmVyYXRlVXJsKHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pOiBHZW5lcmF0ZWRVcmwgeyByZXR1cm4gdGhpcy5fc2VyaWFsaXplcihwYXJhbXMpOyB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3JlU3RyaW5nOyB9XG59XG4iXX0=