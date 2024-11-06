import { useState, type FormEventHandler } from 'react';
import CopyCode from './copy-code';
import { Button } from './ui/button';
import { useDropzone } from 'react-dropzone-esm';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

function FileForm() {
  const [envKeys, setEnvKeys] = useState<string[]>();
  const [file, setFile] = useState<File>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    if (!file) {
      return toast.error('Select an env file');
    }

    const text = await file.text();

    const keys = text
      .split('\n')
      .map(key => {
        const eqIndex = key.indexOf('=');

        if (eqIndex === -1) return;

        return key.substring(0, eqIndex);
      })
      .filter(k => k !== undefined);

    setEnvKeys(keys);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'text/plain': ['.env', '.env.*'],
    },
    maxFiles: 1,
    onDropAccepted: sFiles => {
      setFile(sFiles[0]);
    },
    onDropRejected: () => toast.error('Invalid file type'),
  });

  return (
    <form
      className='flex flex-col items-center gap-3 max-w-[1000px]'
      onSubmit={handleSubmit}
    >
      <div className='grid grid-cols-2 justify-center gap-4'>
        <div
          {...getRootProps({
            className: cn(
              `
                flex flex-col border-dashed border-white justify-center items-center border-2 rounded-md cursor-pointer transition-opacity
                hover:opacity-80
              `,
              {
                'opacity-80': isDragActive,
              },
            ),
          })}
        >
          {file ? (
            <>
              <svg
                className='text-7xl'
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5zm-10.41 3H6V4h7v5h5v4.09c.33-.05.66-.09 1-.09s.67.04 1 .09V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h7.81c-.35-.61-.6-1.28-.72-2'
                />
              </svg>
              <p className='font-geologica'>.env File selected</p>
            </>
          ) : (
            <>
              <svg
                className='text-7xl'
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M20 18a1 1 0 0 1-1 1h-4a3 3 0 0 0-3 3a3 3 0 0 0-3-3H5a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3h4a2 2 0 0 1 2 2h2a2 2 0 0 1 2-2h4a3 3 0 0 0 3-3Zm0-12a1 1 0 0 0-1-1h-4a3 3 0 0 1-3-3a3 3 0 0 1-3 3H5a1 1 0 0 0-1 1H2a3 3 0 0 1 3-3h4a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h4a3 3 0 0 1 3 3Zm-8 6L9 8H7v8h2v-4l3 4h2V8h-2zm9-4l-2 5.27L17 8h-2l3 8h2l3-8zM1 8v8h5v-2H3v-1h2v-2H3v-1h3V8z'
                />
              </svg>
              <p className='font-geologica'>
                {isDragActive
                  ? 'Drop to add file'
                  : 'Drop or select an .env file'}
              </p>
            </>
          )}
          <input {...getInputProps()} />
        </div>
        <CopyCode envKeys={envKeys} />
      </div>
      <Button>Generate</Button>
    </form>
  );
}
export default FileForm;
