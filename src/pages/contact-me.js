import QueryForm_Content from '@/components/contact-page/Formcontent';
import Layout from '@/layout/Layout';

export default function ContactPage() {
  return (
    <>
      <Layout>
        <section
          className="relative bg-cover bg-center bg-no-repeat h-[300px] flex items-center justify-center"
          style={{
            backgroundImage: `url('/Images/background-image.webp')`,
          }}
        >
          {/* Centered text */}
          <section className="py-16  text-center">
            <h1 className="text-5xl font-bold mb-4 ">Let’s Connect</h1>
            {/* <p className="text-lg text-white max-w-3xl mx-auto">
              Thank you for your interest in connecting with me. Whether you're reaching out for
              business collaboration, a speaking engagement, or media coverage — I'm always excited
              to explore meaningful partnerships that create value.
            </p> */}
          </section>
        </section>

        <QueryForm_Content />
      </Layout>
    </>
  );
}
