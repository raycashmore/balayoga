const WORDS_PER_MINUTE = 220;

type LexicalNode = {
	text?: unknown;
	children?: unknown;
};

function countWords(node: LexicalNode): number {
	const ownWords = typeof node.text === 'string' ? node.text.split(/\s+/).filter(Boolean).length : 0;
	const children = Array.isArray(node.children) ? (node.children as LexicalNode[]) : [];
	return children.reduce((total, child) => total + countWords(child), ownWords);
}

export function estimateReadingMinutes(content: { root: LexicalNode } | null | undefined): number {
	if (!content) return 1;
	return Math.max(1, Math.round(countWords(content.root) / WORDS_PER_MINUTE));
}
