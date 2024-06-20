import { toast } from 'sonner';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

function CopyButton({ textToCopy }: { textToCopy: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className='absolute top-2 right-2 z-20 text-white text-2xl bg-[#18191D] rounded-xl p-2'
            onClick={() => {
              navigator.clipboard.writeText(textToCopy);
              toast.success('Copied to clipboard', {
                icon: (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='1em'
                    height='1em'
                    viewBox='0 0 24 24'
                  >
                    <path
                      fill='currentColor'
                      d='M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2z'
                    />
                    <path
                      fill='currentColor'
                      fillRule='evenodd'
                      d='M6.5 4.037c-1.258.07-2.052.27-2.621.84C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122v-6c0-2.828 0-4.242-.879-5.121c-.569-.57-1.363-.77-2.621-.84V4.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zm9.012 8.511a.75.75 0 1 0-1.024-1.096l-3.774 3.522l-1.202-1.122a.75.75 0 0 0-1.024 1.096l1.715 1.6a.75.75 0 0 0 1.023 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                ),
              });
            }}
            type='button'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zM4 8q-.425 0-.712-.288T3 7t.288-.712T4 6t.713.288T5 7t-.288.713T4 8m0 3.5q-.425 0-.712-.288T3 10.5t.288-.712T4 9.5t.713.288T5 10.5t-.288.713T4 11.5M4 15q-.425 0-.712-.288T3 14t.288-.712T4 13t.713.288T5 14t-.288.713T4 15m0 3.5q-.425 0-.712-.288T3 17.5t.288-.712T4 16.5t.713.288T5 17.5t-.288.713T4 18.5M4 22q-.425 0-.712-.288T3 21t.288-.712T4 20t.713.288T5 21t-.288.713T4 22m3.5 0q-.425 0-.712-.288T6.5 21t.288-.712T7.5 20t.713.288T8.5 21t-.288.713T7.5 22m3.5 0q-.425 0-.712-.288T10 21t.288-.712T11 20t.713.288T12 21t-.288.713T11 22m3.5 0q-.425 0-.712-.288T13.5 21t.288-.712T14.5 20t.713.288t.287.712t-.288.713T14.5 22'
              />
            </svg>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy to clipboard</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
export default CopyButton;
