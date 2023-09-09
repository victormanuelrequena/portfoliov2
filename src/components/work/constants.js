const FASTWPAY = {
  id: 0,
  siteUrl: 'https://fastwpay.com',
  image: '/assets/companiesLogos/fastwpay.svg',
  name: 'Fastwpay',
  domain: 'fastwpay.com',
  description:
    'Fastwpay es una pagina web dedicada al manejo administrativo de un plugin de wordpress para pagos electronicos.',
  isASingleProject: true,
  projectImages: [
    '/assets/projects_images/fastywpay/Hero.png',
    '/assets/projects_images/fastywpay/the-best-pay-solution.png',
    '/assets/projects_images/fastywpay/how-to-install-activate.png',
    '/assets/projects_images/fastywpay/remember-to-install.png',
    '/assets/projects_images/fastywpay/free-to-install.png',
    '/assets/projects_images/fastywpay/countries-where-it-work.png',
    '/assets/projects_images/fastywpay/contact-form.png',
    '/assets/projects_images/fastywpay/login.png',
    '/assets/projects_images/fastywpay/signup.png',
    '/assets/projects_images/fastywpay/recover-password.png',
    '/assets/projects_images/fastywpay/dashboard.png',
    '/assets/projects_images/fastywpay/generate-api-key.png',
    '/assets/projects_images/fastywpay/list-api-key.png',
    '/assets/projects_images/fastywpay/account.png',
    '/assets/projects_images/fastywpay/not-found.png',
  ],
};

const GRIVER = {
  id: 1,
  siteUrl: 'https://griver.mx',
  image: '/assets/companiesLogos/griver.svg',
  name: 'Griver',
  domain: 'griver.mx',
  description: '',
  isASingleProject: false,
};

const PORTFOLIO = {
  id: 2,
  siteUrl: 'https://requena.dev',
  image: '/assets/vicLogo_purple.svg',
  name: 'Personal Website',
  domain: 'requena.dev',
};

const NEXTSTATION = {
  id: 3,
  siteUrl: 'https://nextstation.cl',
  image: 'https://s3.amazonaws.com/nextstation.cl/wp-content/uploads/2019/08/27185722/logo-black-45.png',
  name: 'NextStation',
  domain: 'nextstation.cl',
};

const GENIUS = {
  id: 4,
  siteUrl: 'https://geniuspro.io',
  image: '/assets/companiesLogos/genius.svg',
  name: 'Genius',
  domain: '',
  isASingleProject: false,
  projects: [
    {
      id: 41,
      name: 'Genius Builder',
      siteUrl: 'https://genius.builder.io',
      description: '',
      projectImages: [
        '/assets/projects_images/genius/genius-builder/login.png',
        '/assets/projects_images/genius/genius-builder/register.png',
        '/assets/projects_images/genius/genius-builder/forgot-password.png',
        '/assets/projects_images/genius/genius-builder/new-password.png',
        '/assets/projects_images/genius/genius-builder/new-password-successfully.png',
        '/assets/projects_images/genius/genius-builder/terms-privacy-policy.png',
        '/assets/projects_images/genius/genius-builder/how-it-works.png',
        '/assets/projects_images/genius/genius-builder/home.png',
        '/assets/projects_images/genius/genius-builder/plans-pricings.png',
        '/assets/projects_images/genius/genius-builder/faq.png',
        '/assets/projects_images/genius/genius-builder/help.png',
        '/assets/projects_images/genius/genius-builder/my-websites.png',
        '/assets/projects_images/genius/genius-builder/my-websites-2.png',
        '/assets/projects_images/genius/genius-builder/my-websites-4.png',
        '/assets/projects_images/genius/genius-builder/my-websites-3.png',
        '/assets/projects_images/genius/genius-builder/website-creation-1.png',
        '/assets/projects_images/genius/genius-builder/website-creation-2.png',
        '/assets/projects_images/genius/genius-builder/website-creation-3.png',
        '/assets/projects_images/genius/genius-builder/website-creation-3-expanded-view.png',
        '/assets/projects_images/genius/genius-builder/website-creation-3-click-template.png',
        '/assets/projects_images/genius/genius-builder/website-creation-4.png',
        '/assets/projects_images/genius/genius-builder/website-creation-5.png',
        '/assets/projects_images/genius/genius-builder/website-creation-cancel.png',
        '/assets/projects_images/genius/genius-builder/created-successfully-first-time.png',
        '/assets/projects_images/genius/genius-builder/created-successfully.png',
        '/assets/projects_images/genius/genius-builder/website-creation-creator-dashboard.png',
        '/assets/projects_images/genius/genius-builder/website-creation-creator-dashboard-start-video-chat.png',
        '/assets/projects_images/genius/genius-builder/website-creation-creator-dashboard-meeting.png',
        '/assets/projects_images/genius/genius-builder/getting-started.png',
        '/assets/projects_images/genius/genius-builder/webcreator-docs.png',
        '/assets/projects_images/genius/genius-builder/webcreator-do-it-yourself-docs.png',
        '/assets/projects_images/genius/genius-builder/account.png',
        '/assets/projects_images/genius/genius-builder/account-edit.png',
        '/assets/projects_images/genius/genius-builder/account-verify-email.png',
        '/assets/projects_images/genius/genius-builder/notifications.png',
        '/assets/projects_images/genius/genius-builder/not-found.png',
      ],
      isASingleProject: true,
    },
    {
      id: 42,
      name: 'Landing GDS',
      siteUrl: '',
      description: '',
      projectImages: [
        '/assets/projects_images/genius/gds-landing/home.png',
        '/assets/projects_images/genius/gds-landing/home-2.png',
        '/assets/projects_images/genius/gds-landing/learn-more.png',
        '/assets/projects_images/genius/gds-landing/our-team.png',
        '/assets/projects_images/genius/gds-landing/our-products.png',
      ],
      isASingleProject: true,
    },
    {
      id: 43,
      name: 'Lifted Meds',
      siteUrl: '',
      description: '',
      projectImages: [],
      isASingleProject: true,
    },
  ],
};

const YUFI = {
  id: 5,
  siteUrl: 'https://yufi.mx',
  image: '/assets/companiesLogos/yufi.webp',
  name: 'Yufi',
  domain: 'yufi.mx',
};

export const worksDataList = [FASTWPAY, GRIVER, PORTFOLIO, NEXTSTATION, GENIUS, YUFI];

export default {
  FASTWPAY,
  GRIVER,
  PORTFOLIO,
  NEXTSTATION,
  GENIUS,
  YUFI,
};
