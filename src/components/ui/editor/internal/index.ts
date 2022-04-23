import type { LexicalEditor } from 'lexical'

export const theme = {
  ltr: 'ltr',
  rtl: 'rtl',
  placeholder: 'editor-placeholder',
  paragraph: 'editor-paragraph',
}

export const onError = (error: Error, editor: LexicalEditor): void => {
  console.error('something went wrong!')
  console.error('error: ', error)
  console.error('editor: ', editor)
}
