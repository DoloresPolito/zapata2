'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../../i18nConfig';
import styles from "./style.module.css";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef(null);

  const handleChange = (newLocale) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (selectorRef.current && !selectorRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.selectorcontainer} ref={selectorRef}>
      <div
        className={styles.customselector}
        onClick={toggleDropdown}
      >
        {currentLocale.toUpperCase()}
      </div>
      <div className={`${styles.customoptions} ${isOpen ? styles.show : ''}`}>
        <div
          className={styles.customoption}
          onClick={() => handleChange('en')}
        >
          EN
        </div>
        <div
          className={styles.customoption}
          onClick={() => handleChange('es')}
        >
          ES
        </div>
      </div>
    </div>
  );
}