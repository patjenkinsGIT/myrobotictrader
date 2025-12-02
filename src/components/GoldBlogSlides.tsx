import React from 'react';
import { blogStyles } from '../styles/blogStyles';

type SlideVariant =
  | 'returns-1928'
  | 'reality-check'
  | 'lost-decades'
  | 'irs-tax'
  | 'tax-impact'
  | 'storage-fees'
  | 'free-gold-trap'
  | 'coins-vs-bars'
  | 'celebrity-machine'
  | 'gold-vs-trading';

interface GoldBlogSlideProps {
  variant: SlideVariant;
}

// Slide container using shared blog styles
const SlideContainer: React.FC<{ children: React.ReactNode; source?: string }> = ({
  children,
  source
}) => (
  <div className={blogStyles.slideContainer}>
    {children}
    {source && (
      <p className={blogStyles.source}>
        Source: {source}
      </p>
    )}
  </div>
);

// Title component using shared styles
const SlideTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-8">
    <h3 className={blogStyles.slideTitle}>{title}</h3>
    {subtitle && <p className={blogStyles.slideSubtitle}>{subtitle}</p>}
  </div>
);

// Slide 1: Annualized Returns Since 1928
const Returns1928: React.FC = () => (
  <SlideContainer>
    <SlideTitle
      title="Annualized Returns Since 1928"
      subtitle="Nearly a century of data tells the story"
    />
    <div className="flex justify-center items-end gap-20 mt-8">
      {/* S&P 500 Bar - Bright Green (taller = 9.9%) */}
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-green-400 mb-2">9.9%</span>
        <div
          className="w-20 rounded-t-lg"
          style={{ height: '180px', backgroundColor: '#4ade80' }}
        ></div>
        <span className="text-green-400 font-medium mt-3">S&P 500</span>
      </div>
      {/* Gold Bar - Bright Yellow (shorter = 5.0%) */}
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-yellow-500 mb-2">5.0%</span>
        <div
          className="w-20 rounded-t-lg"
          style={{ height: '90px', backgroundColor: '#eab308' }}
        ></div>
        <span className="text-yellow-500 font-medium mt-3">Gold</span>
      </div>
    </div>
  </SlideContainer>
);

// Slide 2: 40-Year Reality Check
const RealityCheck: React.FC = () => (
  <SlideContainer source="Kiplinger">
    <SlideTitle
      title="40-Year Reality Check"
      subtitle="1984-2024 Returns: Nominal vs After Inflation"
    />
    <div className="flex justify-center items-end gap-6 md:gap-12 mt-8">
      {/* Gold Group */}
      <div className="text-center">
        <div className="flex items-end gap-2 justify-center">
          <div className="flex flex-col items-center">
            <span className={`text-lg font-bold ${blogStyles.gold} mb-2`}>4.3%</span>
            <div
              className="w-16 md:w-20 rounded-t-lg"
              style={{ height: '86px', background: blogStyles.barGold }}
            />
          </div>
          <div className="flex flex-col items-center">
            <span className={`text-lg font-bold ${blogStyles.negative} mb-2`}>1.5%</span>
            <div
              className="w-16 md:w-20 rounded-t-lg"
              style={{ height: '30px', background: blogStyles.barRed }}
            />
          </div>
        </div>
        <span className={`${blogStyles.goldBold} mt-4 block`}>GOLD</span>
      </div>

      {/* S&P Group */}
      <div className="text-center">
        <div className="flex items-end gap-2 justify-center">
          <div className="flex flex-col items-center">
            <span className={`text-lg font-bold ${blogStyles.positive} mb-2`}>11.6%</span>
            <div
              className="w-16 md:w-20 rounded-t-lg"
              style={{ height: '165px', background: blogStyles.barBlue }}
            />
          </div>
          <div className="flex flex-col items-center">
            <span className={`text-lg font-bold ${blogStyles.positive} mb-2`}>8.6%</span>
            <div
              className="w-16 md:w-20 rounded-t-lg"
              style={{ height: '122px', background: blogStyles.barGreen }}
            />
          </div>
        </div>
        <span className={`${blogStyles.blueBold} mt-4 block`}>S&P 500</span>
      </div>
    </div>
    <p className={`${blogStyles.muted} text-sm text-center mt-6`}>
      Darker = Nominal &nbsp;&nbsp;|&nbsp;&nbsp; Lighter = After Inflation
    </p>
  </SlideContainer>
);

// Slide 3: The Lost Decades
const LostDecades: React.FC = () => (
  <SlideContainer source="QuantifiedStrategies.com">
    <SlideTitle
      title="The Lost Decades"
      subtitle="Gold's 20-Year Nightmare: 1980-2000"
    />

    <div className="grid md:grid-cols-2 gap-6 mt-8">
      {/* Gold - declining */}
      <div className={`${blogStyles.card} text-center`}>
        <h4 className={`${blogStyles.goldBold} text-xl mb-4`}>GOLD</h4>
        <div className="flex items-center justify-center mb-4">
          <svg className={`w-16 h-16 ${blogStyles.negative}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
          </svg>
        </div>
        <p className={`${blogStyles.negativeBold} text-3xl md:text-4xl mb-2`}>-4.0%</p>
        <p className={`${blogStyles.muted} text-sm`}>Total return over 20 years</p>
        <p className={`${blogStyles.negative} text-xs mt-2`}>Lost money for TWO decades straight</p>
      </div>

      {/* S&P 500 - growing */}
      <div className={`${blogStyles.card} text-center`}>
        <h4 className={`${blogStyles.blueBold} text-xl mb-4`}>S&P 500</h4>
        <div className="flex items-center justify-center mb-4">
          <svg className={`w-16 h-16 ${blogStyles.positive}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <p className={`${blogStyles.positiveBold} text-3xl md:text-4xl mb-2`}>+1,200%</p>
        <p className={`${blogStyles.muted} text-sm`}>Total return over 20 years</p>
        <p className={`${blogStyles.positive} text-xs mt-2`}>Including the 1990s bull market</p>
      </div>
    </div>

    {/* Key stat box */}
    <div className={`${blogStyles.callout} mt-6 text-center max-w-2xl mx-auto`}>
      <p className="text-white font-bold text-base md:text-lg">
        Gold was the <span className={blogStyles.negative}>ONLY major asset class</span> with negative returns across two consecutive decades
      </p>
    </div>
  </SlideContainer>
);

// Slide 4: IRS Tax Treatment
const IrsTax: React.FC = () => (
  <SlideContainer source="IRS Topic 409">
    <SlideTitle
      title="IRS Tax Treatment"
      subtitle='Gold is taxed as a "Collectible" — same as art, rugs, and wine'
    />

    <div className="grid md:grid-cols-2 gap-6 mt-8">
      {/* Gold Card */}
      <div className={blogStyles.card}>
        <h4 className={`${blogStyles.goldBold} text-xl text-center mb-2`}>GOLD</h4>
        <p className={`${blogStyles.muted} text-sm text-center mb-4`}>Collectible Tax Rate</p>
        <p className={`${blogStyles.negativeBold} text-5xl md:text-6xl text-center mb-2`}>28%</p>
        <p className={`${blogStyles.muted} text-sm text-center mb-6`}>Maximum Rate</p>
        <ul className="text-white text-sm space-y-2">
          <li className="text-center">Art & Antiques</li>
          <li className="text-center">Rugs & Stamps</li>
          <li className="text-center">Wine & Coins</li>
        </ul>
      </div>

      {/* Stocks Card */}
      <div className={blogStyles.card}>
        <h4 className={`${blogStyles.positiveBold} text-xl text-center mb-2`}>STOCKS</h4>
        <p className={`${blogStyles.muted} text-sm text-center mb-4`}>Long-Term Capital Gains</p>
        <p className={`${blogStyles.positiveBold} text-5xl md:text-6xl text-center mb-2`}>0-20%</p>
        <p className={`${blogStyles.muted} text-sm text-center mb-6`}>Based on Income</p>
        <ul className="text-white text-sm space-y-2">
          <li className="text-center">0% (up to $44K)</li>
          <li className="text-center">15% ($44K-$492K)</li>
          <li className="text-center">20% (above $492K)</li>
        </ul>
      </div>
    </div>
  </SlideContainer>
);

// Slide 5: Real Tax Impact
const TaxImpact: React.FC = () => (
  <SlideContainer>
    <SlideTitle
      title="Real Tax Impact"
      subtitle="$100,000 Profit Scenario"
    />

    <div className="grid md:grid-cols-2 gap-6 mt-8">
      {/* Stocks */}
      <div className={`${blogStyles.card} p-8 text-center`}>
        <h4 className={`${blogStyles.positiveBold} text-xl mb-4`}>STOCKS</h4>
        <p className="text-white font-bold text-4xl md:text-5xl mb-2">$20,000</p>
        <p className={blogStyles.muted}>Tax Owed (20%)</p>
      </div>

      {/* Gold */}
      <div className={`${blogStyles.card} p-8 text-center`}>
        <h4 className={`${blogStyles.goldBold} text-xl mb-4`}>GOLD</h4>
        <p className={`${blogStyles.negativeBold} text-4xl md:text-5xl mb-2`}>$28,000</p>
        <p className={blogStyles.muted}>Tax Owed (28%)</p>
      </div>
    </div>

    {/* Difference callout */}
    <div className={`${blogStyles.calloutWarning} mt-6 text-center max-w-lg mx-auto`}>
      <p className={`${blogStyles.negativeBold} text-lg md:text-xl`}>
        That's $8,000 MORE to the IRS
      </p>
      <p className="text-white text-sm">on the exact same gain!</p>
    </div>
  </SlideContainer>
);

// Slide 6: Storage Fees
const StorageFees: React.FC = () => (
  <SlideContainer>
    <SlideTitle title="Storage Fees Eat Your Gains" />

    <div className="space-y-6 mt-8">
      <div className="flex items-baseline gap-4">
        <span className={`${blogStyles.goldBold} text-5xl md:text-6xl`}>0.5%</span>
        <span className="text-white text-xl">annual storage fee</span>
      </div>

      <div className="flex items-baseline gap-4">
        <span className="text-gray-500 text-3xl">=</span>
        <span className={`${blogStyles.negativeBold} text-3xl`}>$500/year</span>
        <span className={blogStyles.muted}>on $100,000</span>
      </div>
    </div>

    {/* 20 year box */}
    <div className={`${blogStyles.calloutWarning} mt-8 text-center`}>
      <p className={`${blogStyles.negativeBold} text-xl md:text-2xl mb-2`}>
        Over 20 years = $10,000+ in storage fees alone
      </p>
      <p className={`${blogStyles.muted} mb-2`}>With gold returning only ~5% annually...</p>
      <p className="text-white font-bold">Storage eats 10-20% of your total gains!</p>
    </div>
  </SlideContainer>
);

// Slide 7: Free Gold Trap
const FreeGoldTrap: React.FC = () => (
  <SlideContainer source="CFTC warns of 20-400% dealer markups">
    <SlideTitle
      title='The "Free Gold" Trap'
      subtitle="How 'free' gifts actually cost you thousands"
    />

    <div className="grid md:grid-cols-2 gap-8 mt-8">
      {/* Math steps */}
      <div className="space-y-4">
        <div className={blogStyles.divider + " flex justify-between"}>
          <span className={blogStyles.muted}>You invest:</span>
          <span className="text-white font-bold">$100,000</span>
        </div>
        <div className={blogStyles.divider + " flex justify-between"}>
          <span className={blogStyles.muted}>+ "Free" gold:</span>
          <span className={blogStyles.goldBold}>$10,000</span>
        </div>
        <div className={blogStyles.divider + " flex justify-between"}>
          <span className={blogStyles.muted}>Account shows:</span>
          <span className="text-white font-bold">$110,000</span>
        </div>
        <div className={blogStyles.divider + " flex justify-between"}>
          <span className={blogStyles.muted}>Try to sell:</span>
          <span className={blogStyles.negativeBold}>-25% markup</span>
        </div>
        <div className="flex justify-between">
          <span className={blogStyles.muted}>You get back:</span>
          <span className={blogStyles.negativeBold}>$82,500</span>
        </div>
      </div>

      {/* Result box */}
      <div className={`${blogStyles.card} flex flex-col justify-center`}>
        <p className={`${blogStyles.muted} text-sm text-center mb-2`}>YOUR "FREE" GIFT</p>
        <p className="text-white text-center mb-2">Actually cost you</p>
        <p className={`${blogStyles.negativeBold} text-5xl text-center mb-2`}>$17,500</p>
        <p className={`${blogStyles.muted} text-sm text-center`}>in hidden markups</p>
      </div>
    </div>
  </SlideContainer>
);

// Slide 8: Coins vs Bars
const CoinsVsBars: React.FC = () => (
  <SlideContainer source="CFTC Consumer Advisory">
    <SlideTitle
      title="Coins vs Bars: The Markup Game"
      subtitle="Why dealers push coins over bars"
    />

    <div className="grid md:grid-cols-2 gap-6 mt-8">
      {/* Coins */}
      <div className={blogStyles.card}>
        <h4 className={`${blogStyles.goldBold} text-xl text-center mb-4`}>COINS</h4>
        <p className={`${blogStyles.negativeBold} text-4xl md:text-5xl text-center mb-2`}>40-200%</p>
        <p className={`${blogStyles.muted} text-sm text-center mb-6`}>Premium Over Spot</p>
        <ul className="text-white text-sm space-y-2">
          <li className="text-center">"Rare" & "Collectible"</li>
          <li className="text-center">"Limited Edition"</li>
          <li className="text-center">"Certified" graded</li>
        </ul>
        <p className={`${blogStyles.negativeBold} text-sm text-center mt-4`}>= Higher dealer margins</p>
      </div>

      {/* Bars */}
      <div className={blogStyles.card}>
        <h4 className="text-white font-bold text-xl text-center mb-4">BARS</h4>
        <p className={`${blogStyles.positiveBold} text-4xl md:text-5xl text-center mb-2`}>2-5%</p>
        <p className={`${blogStyles.muted} text-sm text-center mb-6`}>Premium Over Spot</p>
        <ul className="text-white text-sm space-y-2">
          <li className="text-center">Simple, no "story"</li>
          <li className="text-center">Harder to markup</li>
          <li className="text-center">Lower commissions</li>
        </ul>
        <p className={`${blogStyles.positiveBold} text-sm text-center mt-4`}>= Dealers don't push these</p>
      </div>
    </div>
  </SlideContainer>
);

// Slide 9: Celebrity Trust Machine
const CelebrityMachine: React.FC = () => (
  <SlideContainer>
    <SlideTitle
      title="The Celebrity Trust Machine"
      subtitle="Same playbook, different face"
    />

    <div className="grid md:grid-cols-2 gap-6 mt-8">
      {/* William Devane */}
      <div className={`${blogStyles.card} p-4 md:p-6`}>
        <div className="flex justify-center mb-4">
          <img
            src="/blog-images/william-devane-gold.jpg"
            alt="William Devane in Rosland Capital commercial"
            className={blogStyles.avatarGold}
          />
        </div>
        <h4 className="text-white font-bold text-xl text-center mb-1">William Devane</h4>
        <p className={`${blogStyles.gold} text-center mb-1`}>Rosland Capital</p>
        <p className={`${blogStyles.muted} text-sm text-center mb-3`}>Since 2012</p>
        <ul className="text-white text-xs md:text-sm space-y-1">
          <li className="text-center">Known for: "24", "Knots Landing"</li>
          <li className="text-center">Heavy cable news presence</li>
          <li className="text-center">Target: Conservative retirees</li>
        </ul>
      </div>

      {/* Tom Selleck */}
      <div className={`${blogStyles.card} p-4 md:p-6`}>
        <div className="flex justify-center mb-4">
          <img
            src="/blog-images/tom-selleck-gold.jpg"
            alt="Tom Selleck in Goldco commercial"
            className={blogStyles.avatarGold}
          />
        </div>
        <h4 className="text-white font-bold text-xl text-center mb-1">Tom Selleck</h4>
        <p className={`${blogStyles.gold} text-center mb-1`}>Goldco</p>
        <p className={`${blogStyles.muted} text-sm text-center mb-3`}>Since 2023</p>
        <ul className="text-white text-xs md:text-sm space-y-1">
          <li className="text-center">Known for: "Magnum P.I.", "Blue Bloods"</li>
          <li className="text-center">Same cable news demographic</li>
          <li className="text-center">Target: Same retiree audience</li>
        </ul>
      </div>
    </div>

    <p className={`${blogStyles.negativeBold} text-center mt-6`}>
      Trusted TV actors → Target retirees → Costs passed to customers
    </p>
  </SlideContainer>
);

// Slide 10: Gold vs Autonomous Trading
const GoldVsTrading: React.FC = () => (
  <SlideContainer>
    <SlideTitle
      title="Gold vs Autonomous Trading"
      subtitle="Which would you choose?"
    />

    <div className="grid md:grid-cols-2 gap-6 mt-8">
      {/* Gold */}
      <div className={blogStyles.card}>
        <h4 className={`${blogStyles.goldBold} text-xl text-center mb-6`}>GOLD</h4>
        <div className="space-y-4">
          <div>
            <p className={`${blogStyles.muted} text-sm`}>Returns:</p>
            <p className={blogStyles.negativeBold}>~5% annually</p>
          </div>
          <div>
            <p className={`${blogStyles.muted} text-sm`}>Tax Rate:</p>
            <p className={blogStyles.negativeBold}>28% (Collectible)</p>
          </div>
          <div>
            <p className={`${blogStyles.muted} text-sm`}>Storage:</p>
            <p className={blogStyles.negativeBold}>Fees eat gains</p>
          </div>
          <div>
            <p className={`${blogStyles.muted} text-sm`}>Complexity:</p>
            <p className={blogStyles.negativeBold}>Dealers, markups</p>
          </div>
          <div>
            <p className={`${blogStyles.muted} text-sm`}>Sales:</p>
            <p className={blogStyles.negativeBold}>Celebrity spokesmen</p>
          </div>
        </div>
      </div>

      {/* My System */}
      <div className={blogStyles.card}>
        <h4 className={`${blogStyles.positiveBold} text-xl text-center mb-6`}>MY SYSTEM</h4>
        <div className="space-y-4">
          <div>
            <p className={`${blogStyles.muted} text-sm`}>Profits:</p>
            <p className={blogStyles.positiveBold}>$4,736.15</p>
          </div>
          <div>
            <p className={`${blogStyles.muted} text-sm`}>Trades:</p>
            <p className={blogStyles.positiveBold}>957 closed</p>
          </div>
          <div>
            <p className={`${blogStyles.muted} text-sm`}>Success:</p>
            <p className={blogStyles.positiveBold}>100% win rate</p>
          </div>
          <div>
            <p className={`${blogStyles.muted} text-sm`}>Storage:</p>
            <p className={blogStyles.positiveBold}>$0 (digital)</p>
          </div>
          <div>
            <p className={`${blogStyles.muted} text-sm`}>Transparency:</p>
            <p className={blogStyles.positiveBold}>Live dashboard</p>
          </div>
        </div>
      </div>
    </div>
  </SlideContainer>
);

// Main component with variant switch
export const GoldBlogSlide: React.FC<GoldBlogSlideProps> = ({ variant }) => {
  switch (variant) {
    case 'returns-1928':
      return <Returns1928 />;
    case 'reality-check':
      return <RealityCheck />;
    case 'lost-decades':
      return <LostDecades />;
    case 'irs-tax':
      return <IrsTax />;
    case 'tax-impact':
      return <TaxImpact />;
    case 'storage-fees':
      return <StorageFees />;
    case 'free-gold-trap':
      return <FreeGoldTrap />;
    case 'coins-vs-bars':
      return <CoinsVsBars />;
    case 'celebrity-machine':
      return <CelebrityMachine />;
    case 'gold-vs-trading':
      return <GoldVsTrading />;
    default:
      return null;
  }
};

export default GoldBlogSlide;
