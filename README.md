# lexical(https://lexical.dev/) playground
https://github.com/facebook/lexical

```
yarn add lexical @lexical/react
```

https://codesandbox.io/s/5tncvy?file=/src/Editor.js
こちらのcodesandboxを参考にしている

## Node Tree

編集中のデータはノードという単位でツリー上に管理されている。
- RootNode
- LineBreakNode(\nを使わず改行を表現)
- ElementNode
- TextNode
- DecoratorNode
などがある

## Editor Selection
Selection はエディターの選択状態を表現している。
選択状態だけでなく、キャレット状態も Selection で管理されている。
よくあるエディタ上で選択中にのみ出てくる、
メニューバーなどはLexicalではSelectionの状態を取得することにより実現できる(?)

## memo
- LexicalComposerの最小構成では、太字と斜体のみがショートカット対応されてた。
