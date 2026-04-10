export default {
	meta: {
		type: "suggestion",
		docs: {
			description: "Separate the type imports from the rest of the imports.",
			recommended: false,
		},
		fixable: "code",
		schema: [],
		messages: {
			mixedImports: "Mixed types imports and other imports cannot be together.",
		},
	},

	create(context) {
		return {
			ImportDeclaration(node) {
				if (!node.specifiers?.length)
					return

				const typeSpecifiers = []
				const valueSpecifiers = []

				node.specifiers.forEach((specifier) => {
					if (specifier.type === "ImportSpecifier" && specifier.importKind === "type") {
						typeSpecifiers.push(specifier)
					} else if (["ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier"].includes(specifier.type)) {
						valueSpecifiers.push(specifier)
					}
				})

				if (typeSpecifiers.length > 0 && valueSpecifiers.length > 0) {
					context.report({
						node,
						messageId: "mixedImports",
						fix(fixer) {
							const sourceCode = context.getSourceCode()
							const importPath = node.source.value
							const importKind = node.importKind === "type" ? "type " : ""

							const valueImportText = valueSpecifiers.length > 0
								? `import ${importKind}{ ${valueSpecifiers.map((spec) => sourceCode.getText(spec)).join(", ")} } from '${importPath}';`
								: ""

							const typeImportText = typeSpecifiers.length > 0
								? `import type { ${typeSpecifiers.map((spec) => spec.local.name).join(", ")} } from '${importPath}';`
								: ""

							const fixedText = [valueImportText, typeImportText].filter((text) => text).join("\n")

							return fixer.replaceText(node, fixedText)
						},
					})
				}
			},
		}
	},
}
