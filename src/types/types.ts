

export interface IProcessedFile {
  file: File,
  url: string,
  width: number,
  height: number
  orientation: 'horizontal' | 'vertical'
}

export interface IUploaderProps {
  files: IProcessedFile[],
  setFiles: (files: IProcessedFile[]) => void,
}

export interface ILayoutSlot {
  rowStart: number,
  rowEnd: number,
  colStart: number,
  colEnd: number,
  orientation: 'horizontal' | 'vertical'
}

export interface ILayoutTemplate {
  id: string,
  name: string,
  column: number,
  row: number,
  slots: ILayoutSlot[],
}