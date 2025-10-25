export default defineAppConfig({
  title: 'Sink',
  email: 'dsman@qq.com',
  github: 'https://github.com/fmhgit/sink',
  twitter: 'https://s.isee.qzz.io',
  telegram: 'https://s.isee.qzz.io',
  mastodon: 'https://s.isee.qzz.io',
  blog: 'https://s.isee.qzz.io',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
