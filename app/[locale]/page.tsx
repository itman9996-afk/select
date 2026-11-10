import Link from 'next/link';
import { useLocale } from 'next-intl';

const categories = [
  { icon: '🌸', fa: 'زعفران ایرانی', en: 'Iranian Saffron', descFa: 'طلای سرخ ایران', descEn: 'The Red Gold of Iran' },
  { icon: '🥜', fa: 'آجیل و خشکبار', en: 'Nuts & Dried Fruits', descFa: 'طعم اصیل طبیعت', descEn: 'Nature’s Finest' },
  { icon: '🍬', fa: 'شیرینی سنتی', en: 'Traditional Sweets', descFa: 'میراث شیرین ایران', descEn: 'A Sweet Heritage' },
  { icon: '🌴', fa: 'خرما و محصولات طبیعی', en: 'Dates & Natural Foods', descFa: 'کیفیت از دل طبیعت', descEn: 'Naturally Exceptional' },
  { icon: '🍵', fa: 'چای و دمنوش', en: 'Tea & Herbal Infusions', descFa: 'آرامش در هر فنجان', descEn: 'A Moment of Calm' },
  { icon: '🍇', fa: 'میوه‌های خشک', en: 'Dried Fruits', descFa: 'میان‌وعده‌ای سالم', descEn: 'Naturally Delicious' },
];

const products = [
  { icon: '🌺', fa: 'زعفران نگین ممتاز', en: 'Premium Negin Saffron', tag: 'PREMIUM' },
  { icon: '🥜', fa: 'پسته اکبری', en: 'Akbari Pistachios', tag: 'BEST SELLER' },
  { icon: '🍯', fa: 'گز اصفهان', en: 'Isfahan Gaz', tag: 'TRADITIONAL' },
];

export default function HomePage() {
  const locale = useLocale();
  const fa = locale === 'fa';
  const t = (persian: string, english: string) => fa ? persian : english;

  return (
    <main className="bg-[#F8F6F0] text-[#142B43]">
      <section className="relative overflow-hidden min-h-[680px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F0] via-[#F1EBDD] to-[#E8DFCD]" />
        <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-[#C4A36B]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#142B43]/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 border border-[#B99A64]/40 rounded-full px-5 py-2 text-xs tracking-[0.18em] text-[#927342]">
              <span className="w-2 h-2 rounded-full bg-[#B99A64]" />
              IRANIAN HERITAGE · GLOBAL QUALITY
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] tracking-tight">
              {t('اصالت ایران،', 'The Essence of')}
              <span className="block text-[#B18C50] mt-2">
                {t('انتخاب جهان', 'Iran, Selected')}
              </span>
            </h1>

            <p className="text-lg leading-9 text-[#64717B] max-w-xl">
              {t(
                'منتخب‌ترین محصولات ایرانی، از زعفران و پسته تا شیرینی‌های اصیل؛ با کیفیتی شایسته بازارهای جهانی.',
                'Discover carefully selected Iranian products, from premium saffron and pistachios to traditional sweets, crafted for global markets.'
              )}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href={`/${locale}/products`} className="bg-[#142B43] text-white px-8 py-4 rounded-full hover:bg-[#203E5B] transition shadow-lg">
                {t('مشاهده محصولات', 'Explore Products')} <span className="ms-2">↗</span>
              </Link>
              <Link href={`/${locale}/contact`} className="border border-[#142B43]/25 px-8 py-4 rounded-full hover:border-[#B99A64] hover:text-[#927342] transition">
                {t('درخواست همکاری', 'Business Inquiry')}
              </Link>
            </div>

            <div className="flex gap-10 pt-8 border-t border-[#142B43]/10">
              <div><strong className="block text-3xl">۵+</strong><span className="text-sm text-[#7C858A]">{t('دسته محصول', 'Categories')}</span></div>
              <div><strong className="block text-3xl">۳</strong><span className="text-sm text-[#7C858A]">{t('بازار هدف', 'Target Markets')}</span></div>
              <div><strong className="block text-3xl">۱۰۰٪</strong><span className="text-sm text-[#7C858A]">{t('ریشه ایرانی', 'Iranian Origin')}</span></div>
            </div>
          </div>

          <div className="relative flex items-center justify-center min-h-[420px]">
            <div className="absolute w-[360px] h-[360px] md:w-[440px] md:h-[440px] rounded-full border border-[#B99A64]/30" />
            <div className="absolute w-[290px] h-[290px] md:w-[360px] md:h-[360px] rounded-full border border-[#B99A64]/20" />
            <div className="relative w-[270px] h-[330px] md:w-[330px] md:h-[400px] rounded-t-full rounded-b-[48%] bg-gradient-to-br from-[#D8C29A] via-[#B99A64] to-[#80623B] shadow-2xl flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute inset-3 border border-white/30 rounded-t-full rounded-b-[48%]" />
              <span className="text-8xl md:text-9xl drop-shadow-lg">🌺</span>
              <span className="text-white text-xs tracking-[0.35em] mt-8">IRAN SELECT</span>
              <span className="text-white/75 text-[10px] tracking-[0.2em] mt-2">PURE · AUTHENTIC · PREMIUM</span>
            </div>
            <div className="absolute bottom-8 right-0 md:right-8 bg-white/90 backdrop-blur rounded-2xl shadow-xl p-4">
              <span className="text-2xl">✦</span>
              <p className="text-xs tracking-widest mt-1">AUTHENTIC IRAN</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="text-center mb-14">
          <span className="text-[#B18C50] text-xs tracking-[0.3em]">OUR COLLECTION</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">{t('دسته‌بندی محصولات', 'Explore Our Categories')}</h2>
          <p className="text-[#7C858A] mt-4">{t('طعم‌ها و محصولات برگزیده از سراسر ایران', 'Exceptional products from across Iran')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {categories.map((item, index) => (
            <Link href={`/${locale}/products`} key={item.en} className="group bg-white rounded-2xl p-6 md:p-8 border border-[#142B43]/5 hover:border-[#B99A64]/50 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="h-28 md:h-36 rounded-xl bg-gradient-to-br from-[#F3EBDD] to-[#E8DDC9] flex items-center justify-center text-6xl group-hover:scale-[1.02] transition">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mt-5">{fa ? item.fa : item.en}</h3>
              <p className="text-sm text-[#92999D] mt-2">{fa ? item.descFa : item.descEn}</p>
              <span className="block text-[#B18C50] mt-4 text-sm">{t('مشاهده محصولات', 'Discover')} ↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#142B43] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
            <div>
              <span className="text-[#D0B27D] text-xs tracking-[0.3em]">SELECTED FOR YOU</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">{t('منتخب‌های ویژه', 'Featured Selection')}</h2>
            </div>
            <Link href={`/${locale}/products`} className="text-[#D0B27D] hover:text-white transition">{t('همه محصولات', 'View All Products')} ↗</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link href={`/${locale}/products`} key={product.en} className="group bg-white text-[#142B43] rounded-2xl overflow-hidden hover:-translate-y-1 transition shadow-lg">
                <div className="h-60 bg-gradient-to-br from-[#F4EBDD] to-[#D9C8A7] flex items-center justify-center text-8xl group-hover:scale-[1.02] transition">
                  {product.icon}
                </div>
                <div className="p-6">
                  <span className="text-[10px] tracking-[0.2em] text-[#B18C50]">{product.tag}</span>
                  <h3 className="text-xl font-bold mt-3">{fa ? product.fa : product.en}</h3>
                  <p className="text-sm text-[#92999D] mt-3">{t('برای دریافت اطلاعات و قیمت استعلام بگیرید.', 'Contact us for product details and pricing.')}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            { icon: '✦', titleFa: 'انتخاب باکیفیت', titleEn: 'Carefully Selected', descFa: 'تمرکز بر کیفیت و اصالت محصولات', descEn: 'A focus on quality and authenticity' },
            { icon: '◇', titleFa: 'ریشه در ایران', titleEn: 'Proudly Iranian', descFa: 'معرفی میراث و محصولات ارزشمند ایران', descEn: 'Sharing the finest of Iranian heritage' },
            { icon: '◎', titleFa: 'نگاه جهانی', titleEn: 'Global Perspective', descFa: 'تجربه‌ای حرفه‌ای برای خریداران جهانی', descEn: 'A professional experience for global buyers' },
          ].map((item) => (
            <div key={item.titleEn} className="px-5">
              <span className="text-4xl text-[#B18C50]">{item.icon}</span>
              <h3 className="text-xl font-bold mt-5">{fa ? item.titleFa : item.titleEn}</h3>
              <p className="text-[#7C858A] mt-3 leading-7">{fa ? item.descFa : item.descEn}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-[#B99A64] to-[#80623B] text-white p-10 md:p-16 text-center shadow-xl">
          <span className="text-xs tracking-[0.3em]">LET’S BUILD A CONNECTION</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-5">{t('به دنبال همکاری هستید؟', 'Looking for a Business Partner?')}</h2>
          <p className="mt-5 text-white/85 max-w-2xl mx-auto leading-8">
            {t('برای دریافت اطلاعات محصولات، شرایط سفارش عمده و شروع همکاری با ما در ارتباط باشید.', 'Get in touch for product information, wholesale inquiries and business opportunities.')}
          </p>
          <Link href={`/${locale}/contact`} className="inline-block mt-8 bg-white text-[#142B43] px-8 py-4 rounded-full font-semibold hover:bg-[#F8F6F0] transition">
            {t('ارتباط با ما', 'Contact Our Team')} ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
