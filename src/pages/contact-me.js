import QueryForm_Content from '@/components/contact-page/Formcontent';
import Layout from '@/layout/Layout';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Layout>
      <Head>
            <title>Contact Naman Gupta</title>

      </Head>
        <section
          className="relative bg-cover bg-center bg-no-repeat h-[300px] flex items-center justify-center"
          style={{
            backgroundImage: `url('/Images/background-image.webp')`,
          }}
        >
          {/* Centered text */}
          <section className="py-16  text-center">
<h1 class="text-3xl md:text-4xl font-bold mb-2">Get in Touch with Naman Gupta</h1>
            <p class="text-lg md:text-xl font-light opacity-90">
                Let's connect and explore how my expertise can benefit your team or project.
            </p>
            <p class="text-sm md:text-base font-light opacity-80 mt-2">
                I look forward to hearing from you!
            </p>           
          </section>
        </section>

        <QueryForm_Content />
      </Layout>
    </>
  );
}
