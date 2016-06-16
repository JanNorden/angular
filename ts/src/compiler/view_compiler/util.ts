import {isPresent, isBlank} from 'angular2/src/facade/lang';

import * as o from '../output/output_ast';
import {
  CompileTokenMetadata,
  CompileDirectiveMetadata,
  CompileIdentifierMetadata
} from '../compile_metadata';
import {CompileView} from './compile_view';

export function getPropertyInView(property: o.Expression, viewPath: CompileView[]): o.Expression {
  if (viewPath.length === 0) {
    return property;
  } else {
    var viewProp: o.Expression = o.THIS_EXPR;
    for (var i = 0; i < viewPath.length; i++) {
      viewProp = viewProp.prop('declarationAppElement').prop('parentView');
    }
    if (property instanceof o.ReadPropExpr) {
      var lastView = viewPath[viewPath.length - 1];
      let readPropExpr: o.ReadPropExpr = property;
      // Note: Don't cast for members of the AppView base class...
      if (lastView.fields.some((field) => field.name == readPropExpr.name) ||
          lastView.getters.some((field) => field.name == readPropExpr.name)) {
        viewProp = viewProp.cast(lastView.classType);
      }
    }
    return o.replaceVarInExpression(o.THIS_EXPR.name, viewProp, property);
  }
}

export function injectFromViewParentInjector(token: CompileTokenMetadata,
                                             optional: boolean): o.Expression {
  var args = [createDiTokenExpression(token)];
  if (optional) {
    args.push(o.NULL_EXPR);
  }
  return o.THIS_EXPR.prop('parentInjector').callMethod('get', args);
}

export function getViewFactoryName(component: CompileDirectiveMetadata,
                                   embeddedTemplateIndex: number): string {
  return `viewFactory_${component.type.name}${embeddedTemplateIndex}`;
}


export function createDiTokenExpression(token: CompileTokenMetadata): o.Expression {
  if (isPresent(token.value)) {
    return o.literal(token.value);
  } else if (token.identifierIsInstance) {
    return o.importExpr(token.identifier)
        .instantiate([], o.importType(token.identifier, [], [o.TypeModifier.Const]));
  } else {
    return o.importExpr(token.identifier);
  }
}

export function createFlatArray(expressions: o.Expression[]): o.Expression {
  var lastNonArrayExpressions = [];
  var result: o.Expression = o.literalArr([]);
  for (var i = 0; i < expressions.length; i++) {
    var expr = expressions[i];
    if (expr.type instanceof o.ArrayType) {
      if (lastNonArrayExpressions.length > 0) {
        result =
            result.callMethod(o.BuiltinMethod.ConcatArray, [o.literalArr(lastNonArrayExpressions)]);
        lastNonArrayExpressions = [];
      }
      result = result.callMethod(o.BuiltinMethod.ConcatArray, [expr]);
    } else {
      lastNonArrayExpressions.push(expr);
    }
  }
  if (lastNonArrayExpressions.length > 0) {
    result =
        result.callMethod(o.BuiltinMethod.ConcatArray, [o.literalArr(lastNonArrayExpressions)]);
  }
  return result;
}

export function convertValueToOutputAst(value: any): o.Expression {
  if (value instanceof CompileIdentifierMetadata) {
    return o.importExpr(value);
  } else if (value instanceof o.Expression) {
    return value;
  } else {
    return o.literal(value);
  }
}
