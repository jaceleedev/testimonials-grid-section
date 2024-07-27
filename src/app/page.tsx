import Testimonial from '@/components/Testimonial';
import { TestimonialProps } from '@/components/types/testimonial';

const testimonialData: TestimonialProps[] = [
  {
    imageUrl: '/images/image-daniel.jpg',
    name: 'Daniel Clifford',
    status: 'Verified Graduate',
    headline:
      'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
    content:
      '“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the  best - and most grueling - time of my life. Since completing the course, I’ve  successfully switched careers, working as a Software Engineer at a VR startup. ”',
    textColor: 'text-white',
    backgroundColor: 'bg-moderate-violet',
    gridArea: 'col-span-2 max-sm:col-span-1',
    showQuote: true,
    imageBorder: 'border-2 border-solid border-[#A775F1]',
  },
  {
    imageUrl: '/images/image-jonathan.jpg',
    name: 'Jonathan Walters',
    status: 'Verified Graduate',
    headline: 'The team was very supportive and kept me motivated',
    content:
      '“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. “',
    textColor: 'text-white',
    backgroundColor: 'bg-dark-grayish-blue',
    gridArea: 'col-span-1',
  },
  {
    imageUrl: '/images/image-jeanette.jpg',
    name: 'Jeanette Harmon',
    status: 'Verified Graduate',
    headline: 'An overall wonderful and rewarding experience',
    content:
      '“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”',
    textColor: 'text-dark-grayish-blue',
    backgroundColor: 'bg-white',
    gridArea: 'col-span-1 row-start-2 max-sm:row-start-auto',
    reducedPadding: true,
  },
  {
    imageUrl: '/images/image-patrick.jpg',
    name: 'Patrick Abrams',
    status: 'Verified Graduate',
    headline:
      'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
    content:
      '“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.  ”',
    textColor: 'text-white',
    backgroundColor: 'bg-dark-blackish-blue',
    gridArea: 'col-span-2 row-start-2 max-sm:col-span-1 max-sm:row-start-auto',
    reducedPadding: true,
    imageBorder: 'border-2 border-solid border-[#733FC8]',
  },
  {
    imageUrl: '/images/image-kira.jpg',
    name: 'Kira Whittle',
    status: 'Verified Graduate',
    headline: 'Such a life-changing experience. Highly recommended!',
    content:
      '“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!  ”',
    textColor: 'text-dark-grayish-blue',
    backgroundColor: 'bg-white',
    gridArea:
      'col-span-1 row-span-2 max-lg:col-span-3 max-lg:row-span-1 max-sm:col-span-1',
    reducedPadding: true,
  },
];

export default function Home() {
  return (
    <main className="flex justify-center items-center w-screen min-h-screen bg-light-grayish-blue max-lg:py-[71px] max-lg:px-6">
      <section className="grid grid-cols-4 grid-rows-[auto] gap-x-[30px] gap-y-6 max-w-[1110px] max-lg:grid-cols-3 max-sm:grid-cols-1">
        <h1 className="sr-only">Frontend Mentor Testimonials page</h1>
        {testimonialData.map((testimonial, index) => (
          <Testimonial
            key={testimonial.name}
            {...testimonial}
            isFirstRow={index < 2}
            isFirstCard={index === 0}
          />
        ))}
      </section>
    </main>
  );
}
