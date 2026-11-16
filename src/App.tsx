
import { useState } from 'react';

import Header from './components/layout/Header/Header';
import Modal from './components/common/Modal/Modal';

import Hero from './features/Hero/Hero';
import Menu from './features/Menu/Menu';
import Story from './features/Story/Story';
import Footer from './components/layout/Footer/Footer';

type ModalType = 'map' | 'newsletter' | 'article' | 'menu' | null;

function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <>
      <Header />

      <div className="hero-wrapper">
        <Hero />
      </div>

      <main>
        <Menu onOpenModal={setActiveModal} />

        <Story onOpenModal={setActiveModal} />
      </main>

      <Footer />

      <Modal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        title={
          activeModal === 'map'
            ? 'Find Us'
            : activeModal === 'newsletter'
            ? 'Newsletter'
            : activeModal === 'article'
            ? 'Full Article'
            : 'Full Menu'
        }
      >
        {activeModal === 'map' && (
          <div style={{ width: '100%', aspectRatio: '16 / 9' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1615.9254597722654!2d-1.1339286902650432!3d52.63915745447631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb7314784b68c14c0!2sUn.titled!5e0!3m2!1sen!2suk!4v1575994684235!5m2!1sen!2suk"
              title="Restaurant location on Google Maps"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        )}

        {activeModal === 'newsletter' && (
          <p>
            Our newsletter is coming soon! Keep an eye out for exclusive
            offers and updates.
          </p>
        )}

        {activeModal === 'article' && (
          <p>
            Our full article is coming soon! Check back later for more
            information.
          </p>
        )}

        {activeModal === 'menu' && (
          <p>
            Our full menu is coming soon! Keep an eye out for our complete
            selection.
          </p>
        )}
      </Modal>
    </>
  );
}

export default App;
