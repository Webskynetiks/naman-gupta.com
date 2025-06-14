import MediaPress from '@/components/media-page/Media';
import MediaHeadings from '@/components/Mediaheading';

import Layout from '@/layout/Layout';

export default function Media() {
  return (
    <>
      <Layout>
        <MediaPress />
        <MediaHeadings />
      </Layout>
    </>
  );
}
