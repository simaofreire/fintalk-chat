'use client';

import { Card } from '@/components/ui/card';
import BottomBanner from './_components/bottom-banner';
import UpperBanner from './_components/upper-banner';

const Home = () => {
  return (
    <Card className="flex items-center h-screen justify-start p-4 sm:px-5 sm:justify-center max-w-[60rem]">
      <UpperBanner />

      <BottomBanner />
    </Card>
  );
};

export default Home;
