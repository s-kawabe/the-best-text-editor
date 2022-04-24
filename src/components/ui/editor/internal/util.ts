import type { EditorState, LexicalEditor } from 'lexical'
import { $getRoot, $getSelection } from 'lexical'

export const theme = {
  ltr: 'ltr',
  rtl: 'rtl',
  placeholder: 'editorPlaceholder',
  paragraph: 'editorParagraph',
}

export const onError = (error: Error, editor: LexicalEditor): void => {
  console.error('something went wrong!')
  console.error('error: ', error)
  console.error('editor: ', editor)
}

export const onChange = (editorState: EditorState): void => {
  editorState.read(() => {
    const root = $getRoot()
    const selection = $getSelection()

    console.log(root, selection)
  })
}
