import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UseCases: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Header />

      <main className="flex-grow">
        <section className="w-full">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl sm:text-4xl font-semibold">
              Use Cases
            </h1>

            <p className="mt-4 text-slate-600 dark:text-slate-300">
              {/* Placeholder — content coming next */}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UseCases;

