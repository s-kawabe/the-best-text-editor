import LexicalComposer from '@lexical/react/LexicalComposer'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import LexicalContentEditable from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import LexicalOnChangePlugin from '@lexical/react/LexicalOnChangePlugin'
import LexicalPlainTextPlugin from '@lexical/react/LexicalPlainTextPlugin'
import { $getRoot, $getSelection } from 'lexical'
import type { FC } from 'react'
import { useEffect } from 'react'

import { onError, theme } from './internal'

// type RichTextEditorViewProps = {} & RichTextEditorProps

const RichTextEditorView: FC = () => {
  const config = {
    theme,
    onError,
  }
  return <LexicalComposer initialConfig={config}></LexicalComposer>
}

// type RichTextEditorProps = {}

export const RichTextEditor: FC = () => {
  return <RichTextEditorView />
}
