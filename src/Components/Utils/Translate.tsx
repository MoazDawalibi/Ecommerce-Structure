import React, { memo } from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import { useChangeLanguage } from '../../Hooks/useChangeLanguage';
import { useTranslation } from 'react-i18next'
const Translate: React.FC = () => {
  const { currentlanguage, changelanguage } = useChangeLanguage();
  const { t } = useTranslation();

  const EnLanguage = memo(() => (
    <div className="MenuChange" onClick={EnLanguageClickHandler}>
       <img alt='' src='../Layout/En.svg' width={20} height={20} /> 
      {t('En')}
    </div>
  ));
  
  const ArLanguage = memo(() => (
    <div  className="MenuChange" onClick={ArLanguageClickHandler}>
      <img alt='' src='../Layout/Ar.svg' width={20} height={20} /> 
      {t('Ar')}
    </div>
  ));


  
  const EnLanguageClickHandler = React.useCallback(() => {
    if(!(currentlanguage == 'en')){
      changelanguage('en');
      window.location.reload();
    }
  }, [changelanguage]);
  
  const ArLanguageClickHandler = React.useCallback(() => {
    if(!(currentlanguage == 'ar')){
      changelanguage('ar');
      window.location.reload();
    }  }, [changelanguage]);

 
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <EnLanguage />,
    },
    {
      key: '2',
      label: <ArLanguage />,
    },
  ];

  let languageComponent;

  switch (currentlanguage) {
    case 'en':
      languageComponent = <EnLanguage />;
      break;
    case 'ar':
      languageComponent = <ArLanguage />;
      break;
      break;
    default:
      languageComponent = null; // You can set a default component or handle this case as needed
  }

  return (
    <Space direction="vertical">
      <Dropdown menu={{ items }}  placement="top">
        <Button disabled>{languageComponent}</Button>
      </Dropdown>
    </Space>
  );
};

export default Translate;
