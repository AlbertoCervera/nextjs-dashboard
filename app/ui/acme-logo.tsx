import {CodeBracketSquareIcon} from '@heroicons/react/24/outline';
import { montserrat} from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${montserrat.className} flex flex-row items-center  leading-none text-white`}
    >
      <CodeBracketSquareIcon className="h-12 w-12 invisible sm:visible" />
      <p className="text-[44px]">NextJs</p>
    </div>
  );
}
