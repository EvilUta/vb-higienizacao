import { useEffect, useState } from 'react';

const whatsappUrl =
  'https://wa.me/5512992071944?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20para%20higieniza%C3%A7%C3%A3o%20de%20estofados%20em%20Ilhabela.';
const instagramUrl = 'https://www.instagram.com/v.b.higienizacao/';
const googleReviewsUrl = 'https://share.google/TLFWt8vjKD5mLMAFa';

const galleryMedia = Object.entries(
  import.meta.glob('../Assets/images/Antes_Depois/*.jpg', {
    eager: true,
    import: 'default',
  }),
)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([path, src], index) => ({
    id: path,
    src,
    alt: `Resultado real de higienização ${String(index + 1).padStart(2, '0')}`,
    title: `Foto ${String(index + 1).padStart(2, '0')}`,
  }));

const showcaseCards = [
  {
    title: 'Atendimento com resultado visível',
    description: 'Registro real de higienização mostrando o padrão de cuidado entregue pela V.B em atendimento residencial.',
    media: galleryMedia[0] ?? null,
  },
  {
    title: 'Acabamento valorizado após a limpeza',
    description: 'Mais um exemplo de estofado renovado, com aparência mais limpa, agradável e pronta para uso no dia a dia.',
    media: galleryMedia[1] ?? galleryMedia[0] ?? null,
  },
];

const benefits = [
  {
    title: 'Renovamos seu estofado',
    description: 'Limpeza profissional para devolver melhor aparência, conforto e sensação de cuidado ao seu estofado.',
  },
  {
    title: 'Melhoramos a qualidade do ar',
    description: 'A higienização ajuda a reduzir impurezas e odores, deixando o ambiente mais agradável no dia a dia.',
  },
  {
    title: 'Mais saúde para sua família ou hóspedes',
    description: 'Um processo pensado para promover bem-estar em casas, imóveis de temporada, Airbnb e hospedagens.',
  },
  {
    title: 'Atendimento em toda Ilhabela',
    description: 'Atendimento rápido pelo WhatsApp, com suporte ágil para quem busca praticidade e cuidado profissional.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Solicita o orçamento',
    description: 'Você envia uma mensagem pelo WhatsApp com fotos e recebe retorno rápido para entender o serviço ideal.',
  },
  {
    number: '02',
    title: 'Agendamento rápido',
    description: 'Definimos o melhor horário para o atendimento sem enrolação e com confirmação simples.',
  },
  {
    number: '03',
    title: 'Atendimento em casa',
    description: 'A higienização é feita no local com cuidado, eficiência e foco em resultado visível já no mesmo dia.',
  },
];

const proofItems = [
  'Mais de 1000 estofados higienizados com segurança',
  'Atendimento local em Ilhabela-SP',
  'Orçamento rápido direto no WhatsApp',
];

const reviewHighlights = [
  {
    author: 'Adriana M.',
    initials: 'AM',
    meta: 'há 1 mês',
    text: 'Atendimento excelente do começo ao fim. O colchão e o sofá ficaram com aparência renovada e o capricho no serviço chamou muita atenção.',
  },
  {
    author: 'BnB Guests',
    initials: 'BG',
    meta: 'há 1 mês',
    text: 'Serviço muito bem feito, com profissionalismo e resultado visível. Os estofados ficaram com aspecto de novos e o atendimento foi super cuidadoso.',
  },
  {
    author: 'Carla S.',
    initials: 'CS',
    meta: 'há 2 meses',
    text: 'Gostei bastante da rapidez no agendamento e do resultado final. O sofá secou rápido e a sala ficou com sensação de limpeza de verdade.',
  },
  {
    author: 'Renata P.',
    initials: 'RP',
    meta: 'há 2 meses',
    text: 'Chegaram no horário combinado, explicaram o processo e entregaram um resultado muito acima do que eu esperava. Recomendo com tranquilidade.',
  },
  {
    author: 'Marcos A.',
    initials: 'MA',
    meta: 'há 3 meses',
    text: 'Excelente opção para quem quer higienizar sem sair de casa. Atendimento educado, serviço organizado e estofado com outra cara depois da limpeza.',
  },
];

const aboutDifferentials = [
  'Atendimento rápido e personalizado',
  'Equipe uniformizada e equipada com EPIs',
  'Equipamentos profissionais de alta performance',
  'Produtos seguros, eficazes e aprovados cientificamente',
  'Serviço com responsável técnico',
  'Foco em qualidade premium',
];

const aboutServices = ['Sofás', 'Colchões', 'Poltronas', 'Tapetes', 'Lanchas', 'Veleiros', 'Veículos'];

const aboutAudience = [
  'Casas de alto padrão',
  'Imóveis de temporada',
  'Agências de locação',
  'Airbnb e hospedagens',
  'Clientes residenciais exigentes',
];

const aboutQualityItems = ['Ácaros', 'Fungos', 'Bactérias', 'Odores desagradáveis'];

const aboutReasons = [
  'Renovamos seu estofado',
  'Melhoramos a qualidade do ar',
  'Garantimos mais saúde para sua família ou hóspedes',
];

const highlights = [
  'Ilhabela-SP',
  'Orçamentos rápidos pelo WhatsApp',
  '1000+ estofados higienizados',
];

const navItems = [
  { href: '#beneficios', label: 'Por que escolher a V.B' },
  { href: '#antes-depois', label: 'Antes e depois' },
  { href: '#quem-somos', label: 'Quem somos' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contatos' },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.52 3.48A11.85 11.85 0 0 0 12.07 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.35-1.66a11.86 11.86 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.46-8.42Zm-8.45 18.3h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.22-3.77.99 1.01-3.68-.24-.38a9.88 9.88 0 0 1-1.52-5.2C2.14 6.43 6.6 1.97 12.08 1.97c2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.97c0 5.48-4.46 9.94-9.88 9.94Zm5.45-7.4c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.75-1.65-2.05-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.38-.27.3-1.04 1.02-1.04 2.48 0 1.45 1.06 2.85 1.2 3.05.15.2 2.08 3.17 5.04 4.45.7.3 1.25.48 1.68.62.7.22 1.33.19 1.83.11.56-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z"
      />
    </svg>
  );
}

function BrandLogo() {
  return (
    <div className="brand-logo" aria-label="V.B Higienização de Estofados">
      <img className="brand-logo__image" src="/imagem_sem_fundo.png" alt="V.B Higienização de Estofados" />
    </div>
  );
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const getWrappedGalleryIndex = (index) => {
    if (!galleryMedia.length) {
      return 0;
    }

    return (index + galleryMedia.length) % galleryMedia.length;
  };

  const currentGalleryMedia = galleryMedia[galleryIndex] ?? null;
  const formattedGalleryIndex = String(galleryIndex + 1).padStart(2, '0');
  const formattedGalleryTotal = String(galleryMedia.length).padStart(2, '0');
  const galleryProgress = galleryMedia.length ? ((galleryIndex + 1) / galleryMedia.length) * 100 : 0;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const closeGallery = () => setIsGalleryOpen(false);

  const openGallery = (index = 0) => {
    if (!galleryMedia.length) {
      return;
    }

    setIsMobileMenuOpen(false);
    setGalleryIndex(getWrappedGalleryIndex(index));
    setIsGalleryOpen(true);
  };

  const showPreviousMedia = () => {
    if (galleryMedia.length < 2) {
      return;
    }

    setGalleryIndex((current) => getWrappedGalleryIndex(current - 1));
  };

  const showNextMedia = () => {
    if (galleryMedia.length < 2) {
      return;
    }

    setGalleryIndex((current) => getWrappedGalleryIndex(current + 1));
  };

  const handleGalleryTouchStart = (event) => {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  };

  const handleGalleryTouchEnd = (event) => {
    if (touchStartX === null || galleryMedia.length < 2) {
      setTouchStartX(null);
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const deltaX = touchStartX - touchEndX;

    if (Math.abs(deltaX) > 48) {
      if (deltaX > 0) {
        showNextMedia();
      } else {
        showPreviousMedia();
      }
    }

    setTouchStartX(null);
  };

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const shouldLockPage = isMobileMenuOpen || isGalleryOpen;

    document.body.classList.toggle('menu-open', shouldLockPage);
    document.body.style.overflow = shouldLockPage ? 'hidden' : '';

    return () => {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    };
  }, [isGalleryOpen, isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen && !isGalleryOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsGalleryOpen(false);
        return;
      }

      if (isGalleryOpen && galleryMedia.length > 1) {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          showPreviousMedia();
        }

        if (event.key === 'ArrowRight') {
          event.preventDefault();
          showNextMedia();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen, isMobileMenuOpen, galleryIndex]);

  useEffect(() => {
    if (!isGalleryOpen || !galleryMedia.length) {
      return;
    }

    const nextImage = new Image();
    const previousImage = new Image();

    nextImage.src = galleryMedia[getWrappedGalleryIndex(galleryIndex + 1)].src;
    previousImage.src = galleryMedia[getWrappedGalleryIndex(galleryIndex - 1)].src;
  }, [galleryIndex, isGalleryOpen]);

  return (
    <>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Solicitar orçamento no WhatsApp">
        <WhatsAppIcon />
        <span>Chamar no WhatsApp</span>
      </a>

      <header className="topbar">
        <div className="topbar__inner">
          <a className="topbar__brand" href="#topo" aria-label="Voltar ao topo">
            <span className="topbar__brand-mark">V.B</span>
            <span className="topbar__brand-copy">
              <strong>Higienização</strong>
              <span>Atendimento local em Ilhabela-SP</span>
            </span>
          </a>

          <nav className="topbar__nav" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="topbar__cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            Orçamento rápido
          </a>

          <div className="topbar__mobile-actions">
            <a className="topbar__mobile-wa" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp">
              <WhatsAppIcon />
            </a>
            <button
              className={`topbar__menu-toggle${isMobileMenuOpen ? ' is-active' : ''}`}
              type="button"
              aria-label="Abrir menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <button
        className={`mobile-menu-overlay${isMobileMenuOpen ? ' is-open' : ''}`}
        type="button"
        aria-label="Fechar menu"
        onClick={closeMobileMenu}
      />

      <aside id="mobile-menu" className={`mobile-menu${isMobileMenuOpen ? ' is-open' : ''}`} aria-hidden={!isMobileMenuOpen}>
        <div className="mobile-menu__header">
          <div>
            <strong>Menu</strong>
            <span>Navegue rapidamente</span>
          </div>
          <button className="mobile-menu__close" type="button" aria-label="Fechar menu" onClick={closeMobileMenu}>
            <span />
            <span />
          </button>
        </div>

        <nav className="mobile-menu__nav" aria-label="Menu mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMobileMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="mobile-menu__cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMobileMenu}>
          Solicitar orçamento no WhatsApp
        </a>
        <a className="mobile-menu__secondary" href={instagramUrl} target="_blank" rel="noreferrer" onClick={closeMobileMenu}>
          Ver Instagram
        </a>
      </aside>

      <main className="page-shell">
        <section className="hero section" id="topo">
          <div className="hero__backdrop" />
          <div className="hero__content" data-reveal>
            <div className="hero__brand">
              <BrandLogo />
            </div>

            <div className="hero__copy">
              <span className="eyebrow">Ilhabela-SP • Atendimento em domicílio • Secagem rápida</span>
              <h1>Higienização de Estofados em Ilhabela com Secagem Rápida</h1>
              <p className="hero__lead">
                Mais de 1000 estofados higienizados com qualidade e segurança para devolver limpeza, conforto e boa impressão ao seu ambiente.
              </p>

              <div className="hero__highlights">
                {highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="hero__actions">
                <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Solicitar orçamento no WhatsApp
                </a>
                <a className="button button--secondary" href={instagramUrl} target="_blank" rel="noreferrer">
                  Ver Instagram
                </a>
              </div>

              <p className="hero__contact">Resposta rápida no WhatsApp: (12) 99207-1944</p>
            </div>
          </div>

          <div className="hero__card" data-reveal>
            <div className="hero-card__top">
              <span className="hero-card__tag">Serviço local premium</span>
              <span className="hero-card__score">Atendimento ágil</span>
            </div>
            <h2>Seu sofá limpo, cheiroso e pronto para uso mais rápido.</h2>
            <p>
              Ideal para quem quer renovar o estofado sem sair de casa, com atendimento pontual e resultado que valoriza o ambiente.
            </p>
            <div className="hero-card__stats">
              <div>
                <strong>1000+</strong>
                <span>serviços realizados</span>
              </div>
              <div>
                <strong>Atendimento</strong>
                <span>em Ilhabela e região</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section benefits" id="beneficios">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Por que escolher a V.B</span>
            <h2>Entregamos mais que limpeza.</h2>
            <p>
              Seu estofado merece mais do que limpeza, merece cuidado profissional, com atendimento rápido em toda Ilhabela.
            </p>
          </div>

          <div className="benefits__grid">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.title} data-reveal>
                <span className="benefit-card__badge">+</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="quem-somos">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Quem Somos</span>
            <h2>Referência em Ilhabela para higienização profissional de estofados.</h2>
            <p>
              A V.B Higienização de Estofados é reconhecida na região pelo padrão de atendimento, pela qualidade da execução e pela busca constante por
              resultado premium em cada serviço.
            </p>
          </div>

          <div className="about__hero" data-reveal>
            <div className="about__hero-copy">
              <p>
                Atuamos com excelência, foco em resultados e atendimento diferenciado, garantindo segurança, qualidade e satisfação em cada etapa do
                processo.
              </p>
              <p>
                Nosso trabalho combina técnica profissional, responsabilidade e cuidado com cada tecido para entregar limpeza profunda sem abrir mão da
                preservação do estofado.
              </p>
            </div>

            <div className="about__hero-points">
              <span>Empresa referência em Ilhabela</span>
              <span>Responsável técnico no serviço</span>
              <span>Qualidade premium do início ao fim</span>
            </div>
          </div>

          <div className="about__grid">
            <article className="about-card" data-reveal>
              <span className="about-card__eyebrow">Nossos Diferenciais</span>
              <h3>Estrutura profissional para um atendimento acima da média.</h3>
              <ul>
                {aboutDifferentials.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="about-card" data-reveal>
              <span className="about-card__eyebrow">Nossos Serviços</span>
              <h3>Higienização completa para diferentes tipos de estofados e superfícies.</h3>
              <ul>
                {aboutServices.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="about-card" data-reveal>
              <span className="about-card__eyebrow">Quem Atendemos</span>
              <h3>Excelência para imóveis residenciais, locações e hospedagens.</h3>
              <ul>
                {aboutAudience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="about-card" data-reveal>
              <span className="about-card__eyebrow">Qualidade e Segurança</span>
              <h3>Processo pensado para limpar, preservar e aumentar a vida útil do estofado.</h3>
              <p>
                Nosso processo ajuda a eliminar agentes prejudiciais e odores sem comprometer a integridade do tecido.
              </p>
              <ul>
                {aboutQualityItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section showcase" id="antes-depois">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Antes e depois</span>
            <h2>Resultado que chama atenção no primeiro olhar.</h2>
            <p>
              Veja alguns registros reais de atendimentos feitos pela V.B e navegue pela galeria completa para acompanhar mais resultados.
            </p>
          </div>

          <div className="showcase__grid">
            {showcaseCards.map((card, index) => (
              <article className="comparison-card" key={card.title} data-reveal>
                <div className={`comparison-card__frame${card.media ? ' comparison-card__frame--photo' : ' comparison-card__frame--before'}`}>
                  {card.media ? <img className="comparison-card__image" src={card.media.src} alt={card.media.alt} /> : null}
                </div>
                <div className="comparison-card__content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                {card.media ? (
                  <button className="comparison-card__link" type="button" onClick={() => openGallery(index)}>
                    Abrir foto em destaque
                  </button>
                ) : null}
              </article>
            ))}
          </div>

          <div className="showcase__actions" data-reveal>
            <button className="button button--primary showcase__more" type="button" onClick={() => openGallery(0)} disabled={!galleryMedia.length}>
              Ver mais fotos
            </button>
            <p className="showcase__hint">Galeria com {galleryMedia.length} fotos reais de atendimentos da V.B Higienização.</p>
          </div>
        </section>

        <section className="section steps" id="como-funciona">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Como funciona</span>
            <h2>Você resolve tudo em poucos minutos.</h2>
          </div>

          <div className="steps__grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number} data-reveal>
                <span className="step-card__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section proof">
          <div className="proof__panel" data-reveal>
            <div>
              <span className="eyebrow">Prova social</span>
              <h2>1000+ serviços realizados com atenção aos detalhes.</h2>
              <p>
                Esse volume de atendimentos mostra consistência, confiança e experiência prática em higienização de estofados para clientes em Ilhabela.
              </p>
            </div>

            <ul className="proof__list">
              {proofItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section reviews" id="avaliacoes" aria-labelledby="avaliacoes-titulo">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Avaliações em destaque</span>
            <h2 id="avaliacoes-titulo">Clientes satisfeitos que confiaram na V.B.</h2>
            <p>
              Selecionamos alguns comentários para mostrar a percepção de quem já contratou o serviço. Para ver o restante, basta abrir o perfil no
              Google.
            </p>
          </div>

          <div className="reviews__summary" data-reveal>
            <div>
              <strong>5,0</strong>
              <span>nota média no Google</span>
            </div>
            <div className="reviews__summary-stars" aria-label="Cinco estrelas">
              ★★★★★
            </div>
            <p>141 avaliações</p>
          </div>

          <div className="reviews__grid">
            {reviewHighlights.map((review) => (
              <article className="review-card" key={`${review.author}-${review.meta}`} data-reveal>
                <div className="review-card__header">
                  <div className="review-card__avatar" aria-hidden="true">
                    {review.initials}
                  </div>

                  <div className="review-card__identity">
                    <strong>{review.author}</strong>
                    <span>{review.meta}</span>
                  </div>
                </div>

                <div className="review-card__stars" aria-label="Avaliação de 5 estrelas">
                  ★★★★★
                </div>

                <p>{review.text}</p>
              </article>
            ))}
          </div>

          <div className="reviews__actions" data-reveal>
            <a className="button button--primary" href={googleReviewsUrl} target="_blank" rel="noreferrer">
              Ver mais avaliações no Google
            </a>
          </div>
        </section>        <section className="section cta-final" id="contato">
          <div className="cta-final__content" data-reveal>
            <span className="eyebrow">Agende sem complicação</span>
            <h2>Agende hoje mesmo sua higienização</h2>
            <p>
              Se o estofado perdeu aparência, cheiro ou conforto, este é o momento de resolver com atendimento rápido e orçamento pelo WhatsApp.
            </p>
            <a className="button button--primary button--large" href={whatsappUrl} target="_blank" rel="noreferrer">
              Quero meu orçamento agora
            </a>
          </div>
        </section>
      </main>

      {isGalleryOpen && currentGalleryMedia ? (
        <>
          <button className="gallery-modal-overlay is-open" type="button" aria-label="Fechar galeria" onClick={closeGallery} />

          <div className="gallery-modal is-open" role="dialog" aria-modal="true" aria-labelledby="gallery-title">
            <div className="gallery-modal__shell">
              <div className="gallery-modal__header">
                <div className="gallery-modal__header-copy">
                  <span className="gallery-modal__header-kicker" id="gallery-title">
                    V.B Galeria
                  </span>
                  <strong>Galeria V.B Higienização</strong>
                </div>

                <button className="gallery-modal__close" type="button" aria-label="Fechar galeria" onClick={closeGallery}>
                  <span />
                  <span />
                </button>
              </div>

              <div className="gallery-modal__viewer" onTouchStart={handleGalleryTouchStart} onTouchEnd={handleGalleryTouchEnd}>
                {galleryMedia.length > 1 ? (
                  <button className="gallery-modal__nav gallery-modal__nav--prev" type="button" aria-label="Foto anterior" onClick={showPreviousMedia}>
                    <span>‹</span>
                  </button>
                ) : null}

                <figure className="gallery-modal__figure">
                  <img key={currentGalleryMedia.src} className="gallery-modal__image" src={currentGalleryMedia.src} alt={currentGalleryMedia.alt} />
                </figure>

                {galleryMedia.length > 1 ? (
                  <button className="gallery-modal__nav gallery-modal__nav--next" type="button" aria-label="Próxima foto" onClick={showNextMedia}>
                    <span>›</span>
                  </button>
                ) : null}
              </div>

              <div className="gallery-modal__footer">
                <div className="gallery-modal__meta">
                  <span className="gallery-modal__caption">{currentGalleryMedia.title}</span>
                  <strong className="gallery-modal__counter">{formattedGalleryIndex} / {formattedGalleryTotal}</strong>
                </div>

                <div className="gallery-modal__progress" aria-hidden="true">
                  <span style={{ width: `${galleryProgress}%` }} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      <footer className="footer">
        <p>V.B Higienização de Estofados • Ilhabela-SP</p>
        <div className="footer__links">
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;










