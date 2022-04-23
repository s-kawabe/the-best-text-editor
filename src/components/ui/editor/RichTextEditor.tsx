import LexicalComposer from '@lexical/react/LexicalComposer'
import LexicalContentEditable from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import LexicalOnChangePlugin from '@lexical/react/LexicalOnChangePlugin'
import LexicalPlainTextPlugin from '@lexical/react/LexicalPlainTextPlugin'
import type { FC } from 'react'

import { MyCustomAutoFocusPlugin, onChange, onError, theme } from './internal'

// type RichTextEditorViewProps = {} & RichTextEditorProps

const RichTextEditorView: FC = () => {
  const config = {
    theme,
    onError,
  }
  return (
    <LexicalComposer initialConfig={config}>
      <LexicalPlainTextPlugin
        contentEditable={<LexicalContentEditable />}
        placeholder={<div>Enter some text...</div>}
      />
      <LexicalOnChangePlugin onChange={onChange} />
      <HistoryPlugin />
      <MyCustomAutoFocusPlugin />
    </LexicalComposer>
  )
}

// type RichTextEditorProps = {}

export const RichTextEditor: FC = () => {
  return <RichTextEditorView />
}
