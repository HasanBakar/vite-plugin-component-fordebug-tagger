import { Plugin } from 'vite';
import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import * as t from '@babel/types';

export function componentTagger(): Plugin {
  return {
    name: 'vite:component-forDebug-tagger',
    enforce: 'pre',
    apply: 'serve',
    transform(code, id) {
      if (!id.endsWith('.tsx') && !id.endsWith('.jsx')) return;

      const ast = parser.parse(code, {
        sourceType: 'module',
        plugins: ['jsx', 'typescript'],
      });

      const injectedNames = new Set<string>();

      traverse(ast, {
        FunctionDeclaration(path) {
          const name = path.node.id?.name;
          if (name && /^[A-Z]/.test(name)) injectedNames.add(name);
        },
        VariableDeclarator(path) {
          if (
            t.isIdentifier(path.node.id) &&
            /^[A-Z]/.test(path.node.id.name) &&
            (t.isArrowFunctionExpression(path.node.init) || t.isFunctionExpression(path.node.init))
          ) {
            injectedNames.add(path.node.id.name);
          }
        },
        ExportDefaultDeclaration(path) {
          const decl = path.node.declaration;
          if (t.isFunctionDeclaration(decl) && decl.id && /^[A-Z]/.test(decl.id.name)) {
            injectedNames.add(decl.id.name);
          }
        },
        ClassDeclaration(path) {
          const name = path.node.id?.name;
          if (name && /^[A-Z]/.test(name)) injectedNames.add(name);
        },
      });

      const tagNodes = Array.from(injectedNames).flatMap((name) => [
        t.expressionStatement(
          t.assignmentExpression(
            '=',
            t.memberExpression(t.identifier(name), t.identifier('displayName')),
            t.stringLiteral(name)
          )
        ),
        t.expressionStatement(
          t.callExpression(t.memberExpression(t.identifier('console'), t.identifier('log')), [
            t.stringLiteral(`[Render] ${name}`),
          ])
        ),
      ]);

      if (tagNodes.length > 0) {
        ast.program.body.push(...tagNodes);
      }

      const output = generate(ast, {}, code);
      return { code: output.code, map: null };
    },
  };
}
