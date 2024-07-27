import Image from 'next/image';
import { TestimonialProps } from '../types/testimonial';
import { clsx } from 'clsx';

function Testimonial({
  imageUrl,
  name,
  status,
  headline,
  content,
  textColor,
  backgroundColor,
  gridArea,
  showQuote = false,
  reducedPadding = false,
  imageBorder = '',
  isFirstRow = false,
  isFirstCard = false,
}: Readonly<TestimonialProps>) {
  const articleClasses = clsx(
    gridArea,
    'relative p-8 pt-[26px]',
    reducedPadding && 'pb-[26px]',
    backgroundColor,
    'testimonial-shadow'
  );

  const blockquoteClasses = clsx(
    'grid',
    isFirstRow ? 'gap-4' : 'gap-6',
    isFirstCard ? 'max-sm:gap-10' : 'max-sm:gap-4'
  );

  return (
    <article className={articleClasses}>
      {showQuote && (
        <Image
          src={'/images/bg-pattern-quotation.svg'}
          alt=""
          width={104}
          height={102}
          className="absolute top-0 right-20 z-0 max-sm:right-6"
        />
      )}

      <header className="grid grid-cols-[auto_1fr] items-center gap-[17px] mb-[18px]">
        <Image
          src={imageUrl}
          alt={name}
          width={28}
          height={28}
          priority
          className={`rounded-full ${imageBorder}`}
        />
        <div className="grid gap-1">
          <p className={`text-name ${textColor}`}>{name}</p>
          <p className={`text-caption ${textColor}`}>{status}</p>
        </div>
      </header>
      <blockquote className={blockquoteClasses}>
        <p className={`text-headline ${textColor} z-10`}>{headline}</p>
        <p className={`text-body ${textColor}`}>{content}</p>
      </blockquote>
    </article>
  );
}

export default Testimonial;
