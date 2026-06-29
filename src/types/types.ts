

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