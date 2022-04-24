import AutoFocusPlugin from '@lexical/react/LexicalAutoFocusPlugin'
import LexicalComposer from '@lexical/react/LexicalComposer'
import LexicalContentEditable from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import LexicalOnChangePlugin from '@lexical/react/LexicalOnChangePlugin'
import LexicalRichTextPlugin from '@lexical/react/LexicalRichTextPlugin'
import type { FC } from 'react'

import { onChange, onError, Placeholder, theme } from './internal'
import styles from './RichTextEditor.module.scss'

// type RichTextEditorViewProps = {} & RichTextEditorProp

const RichTextEditorView: FC = () => {
  const config = {
    theme,
    onError,
  }
  return (
    <LexicalComposer initialConfig={config}>
      <div className={styles.editorContainer}>
        {/* for rich text editor plugin. default equipped key bind to bold and italic */}
        <LexicalRichTextPlugin contentEditable={<LexicalContentEditable />} placeholder={<Placeholder />} />
        {/* plugin that calls onChange whenever Lexical state is updated. */}
        <LexicalOnChangePlugin onChange={onChange} />
        {/* support for history stack management and undo / redo commands */}
        <HistoryPlugin />
        <AutoFocusPlugin />
      </div>
    </LexicalComposer>
  )
}

// type RichTextEditorProps = {}

export const RichTextEditor: FC = () => {
  return <RichTextEditorView />
}
