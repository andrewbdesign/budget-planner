import { numberWithCommas } from 'utils/numberFormatter';
import { Stats } from './types';

export const renderOverviewStats = (stats: Stats[]) => {
  return stats.map(({ title, value, id }) => {
    return (
      <div key={id} className="section">
        <h2>{title}</h2>
        <p>${numberWithCommas(value)}</p>
      </div>
    );
  });
};
