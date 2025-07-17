import Layout from '@/components/shared/Layout';
import HeroSection from '@/components/home/HeroSection';
import DeviceGrid from '@/components/home/DeviceGrid';
import AIAdvisorSection from '@/components/home/AIAdvisorSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DeviceGrid />
      <AIAdvisorSection />
    </Layout>
  );
};

export default Index;
