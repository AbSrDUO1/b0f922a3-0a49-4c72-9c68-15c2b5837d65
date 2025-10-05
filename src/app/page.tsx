"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          brand="SaaS MVP" 
          logoSrc="/images/logo.svg" 
          logoAlt="Logo" 
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How To Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]} 
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to SaaS MVP"
          subtitle="The best platform for your needs"
          contractAddress="0xabcd...efgh"
          copyButtonText="Copy"
          copiedText="Copied"
        />
      </div>
      <div id="about" data-section="about">
        <SocialsAbout
          title="About SaaS MVP"
          descriptions={["Delivering the best services in the industry.", "Empowering users with innovative solutions."]} 
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="Tokenomics Overview"
          description="Understanding the financial framework behind our project"
          tokenData={[
            { value: "Supply", description: "1,000,000" },
            { value: "Liquidity", description: "50% Locked" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="SaaS MVP Logo"
          logoText="SaaS MVP"
          columns={[
            { items: [
              { label: "Privacy Policy", onClick: () => {} },
              { label: "Terms of Service", onClick: () => {} }
            ]}
          ]}
          copyrightText="© 2023 SaaS MVP. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}