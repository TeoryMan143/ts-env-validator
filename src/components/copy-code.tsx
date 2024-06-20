import hlg from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/github-dark-dimmed.min.css';
import { useEffect, useRef } from 'react';
import CopyButton from './copy-button';

function CopyCode({ envKeys }: { envKeys?: string[] }) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    hlg.registerLanguage('typescript', typescript);
    codeRef.current && hlg.highlightElement(codeRef.current);
  }, [codeRef.current, envKeys]);

  const codeText = `import { z } from 'zod'

const envSchema = z.object({
  ${
    !envKeys
      ? '// Select a file to generate the validation code'
      : envKeys.map(key => key + ': z.string(),').join('\n  ')
  }
})

envSchema.parse(process.env)

namespace NodeJS {
  interface ProcessEnv
    extends z.infer<typeof envSchema> {}
}`;

  return (
    <pre className='relative max-h-80 overflow-y-auto rounded-md min-w-[472px]'>
      <CopyButton textToCopy={codeText} />
      <code className='relative' ref={codeRef}>
        {codeText}
      </code>
    </pre>
  );
}
export default CopyCode;
