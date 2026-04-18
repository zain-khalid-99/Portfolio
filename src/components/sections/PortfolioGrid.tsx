/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioGrid as Grid } from '../portfolio/PortfolioGrid';

export const PortfolioGrid = () => {
  return (
    <section id="portfolio" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-12 mb-20 text-center">
          <div className="flex flex-col items-center">
            <span className="text-[12px] font-bold text-brand uppercase tracking-[0.4em] mb-4">PORTFOLIO</span>
            <h2 className="uppercase">
              SELECTED WORK
            </h2>
          </div>
        </div>
        
        <Grid initialLimit={3} showFilters={false} />
      </div>
    </section>
  );
};
