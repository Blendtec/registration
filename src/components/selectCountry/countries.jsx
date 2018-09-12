import React from 'react';
import Country from './country/country';
import Aux from '../../hoc/Aux/Aux';
import de from '../../assets/flags/de.png';
import ca from '../../assets/flags/ca.png';
import en from '../../assets/flags/en.png';
import es from '../../assets/flags/es.png';
import it from '../../assets/flags/it.png';
import ja from '../../assets/flags/ja.png';
import ko from '../../assets/flags/ko.png';
import tw from '../../assets/flags/tw.png';
import zh from '../../assets/flags/zh.png';

const countries = (props) => {
  return (
    <Aux>
    <div id="choose-language-label">{props.t('CHOOSE_LANGUAGE')}</div>
      <ul className="no-bullets languages" id="language-switcher">
        <Aux>
          <Country setLanguage={() => props.setLanguage('de')} classes="de clickable" imageSrc={de} />
          <Country setLanguage={() => props.setLanguage('en')} classes="eng selected clickable" imageSrc={en} />
          <Country setLanguage={() => props.setLanguage('frCa')} classes="fr-ca clickable" imageSrc={ca} />
          <Country setLanguage={() => props.setLanguage('it')} classes="it clickable" imageSrc={it} />
          <Country setLanguage={() => props.setLanguage('jpn')} classes="jpn clickable" imageSrc={ja} />
          <Country setLanguage={() => props.setLanguage('ko')} classes="ko clickable" imageSrc={ko} />
          <Country setLanguage={() => props.setLanguage('spa')} classes="spa clickable" imageSrc={es} />
          <Country setLanguage={() => props.setLanguage('zh')} classes="zh clickable" imageSrc={zh} />
          <Country setLanguage={() => props.setLanguage('zhTw')} classes="zh-tw clickable" imageSrc={tw} />
        </Aux>
      </ul>
    </Aux>
  );
};

export default countries;
