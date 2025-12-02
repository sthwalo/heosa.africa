import Hero from '../components/Hero';
import Features from '../components/Features';
import EventsSlider from '../components/EventsSlider';
import { homeTimelineData } from '../data/timelineData';
import HorizontalTimeline from '../components/HorizontalTimeline';

const Home = () => {
  return (
    <main>
      <Hero />
      <div className="bg-gray-50">
        <HorizontalTimeline data={homeTimelineData} title="Key Dates" />
      </div>
      <EventsSlider />
      <Features />
    </main>
  );
};

export default Home;