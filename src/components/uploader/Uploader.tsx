import './uploader.scss'
import {useRef, useState} from 'react';

interface IProcessedFile {
  file: File,
  url: string,
  width: number,
  height: number
  orientation: 'horizontal' | 'vertical'
}

const Uploader = () => {

  const inputRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState<IProcessedFile[]>([])

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = async (e) => {
    e.preventDefault()
    setIsDragging(false)
    const result = await processFiles(e.dataTransfer.files)
    setFiles(result)
    console.log('Файлы получены')
  }

  const processFiles = async (fileList: FileList) => {
    return await Promise.all([...fileList].map(async (item) => {
      const bitmap = await createImageBitmap(item)
      return {
        file: item,
        url: URL.createObjectURL(item),
        width: bitmap.width,
        height: bitmap.height,
        orientation: bitmap.width > bitmap.height ? 'horizontal' : 'vertical',
      } as IProcessedFile
    }))
  }

  return (
    <div onDragOver={handleDragOver}
         onDragLeave={handleDragLeave}
         onDrop={handleDrop}
         className={isDragging ? 'drop drop-active' : 'drop'} > Перетащи фото сюда
      <input ref={inputRef} type="file" className="drop__input"/>
    </div>
  )
}

export default Uploader