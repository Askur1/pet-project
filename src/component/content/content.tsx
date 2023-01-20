import './content.css';

import { Films } from '../Films/Films';
import { Filter } from '../Filter/Filter';

function Main() {
  return (
    <section className="content">
      <div className="container content__container">
        <Filter />
        <Films />
      </div>
    </section>
  );
}

export { Main };