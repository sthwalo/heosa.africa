import Hero from '../components/Hero';
import Features from '../components/Features';
import EventsSlider from '../components/EventsSlider';
import { homeTimelineData } from '../data/timelineData';
import Timeline from '../components/Timeline';
import TimelineMobile from '../components/TimelineMobile';

const Home = () => {
  return (
    <main>
      <Hero />
      <div className="bg-gray-50">
        <div className="hidden md:block max-w-7xl mx-auto">
          <Timeline data={homeTimelineData} title="Key Dates" />
        </div>
        <TimelineMobile data={homeTimelineData} title="Key Dates" />
      </div>
      <EventsSlider />
      <Features />
    </main>
  );
};

export default Home;