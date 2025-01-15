import Hero from '../components/Hero';
import Features from '../components/Features';
import EventsSlider from '../components/EventsSlider';
import { homeTimelineData } from '../data/timelineData';
import Timeline from '../components/Timeline';

const Home = () => {
  return (
    <main>
      <Hero />
      <Timeline data={homeTimelineData} title="Key Dates" />
      <EventsSlider />
      <Features />
    </main>
  );
};

export default Home;