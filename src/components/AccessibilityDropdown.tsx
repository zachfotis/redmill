'use client';
import { useEffect, useState } from 'react';
import { BiReset } from 'react-icons/bi';
import { FaRegEye, FaRegLightbulb, FaUniversalAccess } from 'react-icons/fa';
import { FaFont } from 'react-icons/fa6';
import { IoColorFillOutline, IoContrastSharp } from 'react-icons/io5';
import { MdOutlineLink } from 'react-icons/md';
import { PiMagnifyingGlassMinusBold, PiMagnifyingGlassPlusBold } from 'react-icons/pi';
import './AccessibilityDropdown.scss';

export default function AccessibilityDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState<string[]>([]);
  const [activeClass, setActiveClass] = useState('');
  const [initialBodyClasses, setInitialBodyClasses] = useState('');
  const [originalFontSizes, setOriginalFontSizes] = useState(new Map());

  useEffect(() => {
    setInitialBodyClasses(document.body.className);

  }, []);

  useEffect(() => {
    if (!initialBodyClasses) return;

    if (activeClass !== '') {
      document.body.className = activeClass;
    } else {
      document.body.className = initialBodyClasses;
    }
  }, [activeClass]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleFeature = (feature: string) => {
    const currentFeatures = [...activeFeature];
    if (activeFeature.includes(feature)) {
      currentFeatures.splice(currentFeatures.indexOf(feature), 1);
      setActiveFeature(currentFeatures);
    } else {
      if (feature === 'grayscale') {
        highContrast(false);
        negativeContrast(false);
        if (currentFeatures.includes('highContrast')) {
          currentFeatures.splice(currentFeatures.indexOf('highContrast'), 1);
        }
        if (activeFeature.includes('negativeContrast')) {
          currentFeatures.splice(currentFeatures.indexOf('negativeContrast'), 1);
        }
      } else if (feature === 'highContrast') {
        grayscale(false);
        negativeContrast(false);
        if (currentFeatures.includes('grayscale')) {
          currentFeatures.splice(currentFeatures.indexOf('grayscale'), 1);
        }
        if (currentFeatures.includes('negativeContrast')) {
          currentFeatures.splice(currentFeatures.indexOf('negativeContrast'), 1);
        }
      } else if (feature === 'negativeContrast') {
        grayscale(false);
        highContrast(false);
        lightBackground(false);
        if (currentFeatures.includes('grayscale')) {
          currentFeatures.splice(currentFeatures.indexOf('grayscale'), 1);
        }
        if (currentFeatures.includes('highContrast')) {
          currentFeatures.splice(currentFeatures.indexOf('highContrast'), 1);
        }
        if (currentFeatures.includes('lightBackground')) {
          currentFeatures.splice(currentFeatures.indexOf('lightBackground'), 1);
        }
      }
      currentFeatures.push(feature);
      setActiveFeature(currentFeatures);
    }
  };

  const changeFontSize = (element: HTMLElement, change: number) => {
    const style = window.getComputedStyle(element);
    let fontSize = parseFloat(style.fontSize);
    if (!originalFontSizes.has(element)) {
      setOriginalFontSizes(prev => new Map(prev).set(element, fontSize));
    }
    fontSize += change;
    element.style.fontSize = `${ fontSize }px`;
  };

  const increaseText = () => {
    document.querySelectorAll('body *').forEach(el => {
      if (el instanceof HTMLElement) {
        changeFontSize(el, 1);
      }
    });
  };
  const decreaseText = () => {
    document.querySelectorAll('body *').forEach(el => {
      if (el instanceof HTMLElement) {
        changeFontSize(el, -1);
      }
    });
  };

  const resetText = () => {
    document.querySelectorAll('body *').forEach(el => {
      if (el instanceof HTMLElement) {
        if (originalFontSizes.has(el)) {
          el.style.fontSize = `${ originalFontSizes.get(el) }px`;
        }
      }
    });
  };

  const grayscale = (enable: boolean) => {
    if (enable) {
      document.body.classList.add('grayscale');
    } else {
      document.body.classList.remove('grayscale');
    }
  };
  const highContrast = (enable: boolean) => {
    if (enable) {
      const elements = document.querySelectorAll('body *');
      elements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.classList.add('high-contrast');
        }
      });
    } else {
      const elements = document.querySelectorAll('body *');
      elements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.classList.remove('high-contrast');
        }
      });
    }
  };
  const negativeContrast = (enable: boolean) => {
    if (enable) {
      document.body.classList.add('negative-contrast');
    } else {
      document.body.classList.remove('negative-contrast');
    }
  };

  const lightBackground = (enable: boolean) => {
    if (enable) {
      document.body.classList.add('light-background');
    } else {
      document.body.classList.remove('light-background');
    }
  };
  const linksUnderline = (enable: boolean) => {
    const links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
      if (enable) {
        links[i].style.textDecoration = 'underline';
      } else {
        links[i].style.textDecoration = '';
      }
    }
  };
  const readableFont = (enable: boolean) => {
    if (enable) {
      document.body.style.fontFamily = 'Arial, sans-serif';
    } else {
      document.body.style.fontFamily = '';
    }
  };

  const reset = () => {
    setActiveFeature([]);
    setActiveClass('');

    grayscale(false);
    highContrast(false);
    negativeContrast(false);
    lightBackground(false);
    linksUnderline(false);
    readableFont(false);

    resetText();
  };

  return (
    <section
      style={ { background: 'transparent' } }
      className="relative z-50 ml-2">
      <div
        id="options-menu"
        role="button"
        tabIndex={ 0 }
        onClick={ toggleDropdown }
        className="rounded-md bg-blue-500 hover:bg-blue-600 border border-gray-300 shadow-sm px-4 py-2"
        aria-haspopup="true"
        aria-expanded={ isOpen }
        aria-controls="options-menu"
      >
        <FaUniversalAccess className="text-3xl text-white" />
      </div>
      { isOpen && (
        <div className="absolute top-full right-1/2 transform translate-x-1/2 lg:right-0 lg:transform-none lg:translate-x-0 overflow-hidden
         z-50 mt-1 w-fit min-w-[150px] rounded-md shadow-lg bg-white" style={ { backgroundColor: 'white', color: 'black' } }>
          <div className="flex flex-col justify-start items-center" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button onClick={ increaseText } aria-label="Increase text size"
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-stone-100 flex justify-start items-center gap-3"
              role="menuitem" tabIndex={ 0 }>
              <PiMagnifyingGlassPlusBold className="text-lg" />
              Μεγέθυνση κειμένου
            </button>
            <button onClick={ decreaseText } aria-label="Decrease text size"
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-stone-100 flex justify-start items-center gap-3"
              role="menuitem" tabIndex={ 0 }>
              <PiMagnifyingGlassMinusBold className="text-lg" />
              Σμίκρυνση κειμένου
            </button>
            <button
              onClick={ () => {
                toggleFeature('grayscale');
                grayscale(!activeFeature.includes('grayscale'));
              } }
              aria-label="Apply grayscale filter"
              className={ `w-full text-left px-4 py-2 text-sm flex justify-start items-center gap-3
               ${ activeFeature.includes('grayscale') ? 'bg-stone-200' : 'text-gray-700 hover:bg-stone-100' }` }
              role="menuitem" tabIndex={ 0 }>
              <IoColorFillOutline className="text-lg" />
              Κλίμακα του γκρι
            </button>
            <button
              onClick={ () => {
                toggleFeature('highContrast');
                highContrast(!activeFeature.includes('highContrast'));
              } }
              aria-label="Apply high contrast"
              className={ `w-full text-left px-4 py-2 text-sm flex justify-start items-center gap-3 
              ${ activeFeature.includes('highContrast') ? 'bg-stone-200' : 'text-gray-700 hover:bg-stone-100' }` }
              role="menuitem" tabIndex={ 0 }>
              <IoContrastSharp className="text-lg" />
              Υψηλή αντίθεση
            </button>
            <button
              onClick={ () => {
                toggleFeature('negativeContrast');
                negativeContrast(!activeFeature.includes('negativeContrast'));
              } }
              aria-label="Apply negative contrast"
              className={ `w-full text-left px-4 py-2 text-sm flex justify-start items-center gap-3 
              ${ activeFeature.includes('negativeContrast') ? 'bg-stone-200' : 'text-gray-700 hover:bg-stone-100' }` }
              role="menuitem" tabIndex={ 0 }>
              <FaRegEye className="text-lg" />
              Αρνητική αντίθεση
            </button>
            <button
              onClick={ () => {
                toggleFeature('lightBackground');
                lightBackground(!activeFeature.includes('lightBackground'));
              } }
              aria-label="Apply light background"
              className={ `w-full text-left px-4 py-2 text-sm flex justify-start items-center gap-3 
              ${ activeFeature.includes('lightBackground') ? 'bg-stone-200' : 'text-gray-700 hover:bg-stone-100' }` }
              role="menuitem" tabIndex={ 0 }>
              <FaRegLightbulb className="text-lg" />
              Φωτεινό φόντο
            </button>
            <button
              onClick={ () => {
                toggleFeature('linksUnderline');
                linksUnderline(!activeFeature.includes('linksUnderline'));
              } }
              aria-label="Underline links"
              className={ `w-full text-left px-4 py-2 text-sm flex justify-start items-center gap-3 
              ${ activeFeature.includes('linksUnderline') ? 'bg-stone-200' : 'text-gray-700 hover:bg-stone-100' }` }
              role="menuitem" tabIndex={ 0 }>
              <MdOutlineLink className="text-lg" />
              Υπογράμμιση συνδέσμων
            </button>
            <button
              onClick={ () => {
                toggleFeature('readableFont');
                readableFont(!activeFeature.includes('readableFont'));
              } }
              aria-label="Apply readable font"
              className={ `w-full text-left px-4 py-2 text-sm flex justify-start items-center gap-3 
              ${ activeFeature.includes('readableFont') ? 'bg-stone-200' : 'text-gray-700 hover:bg-stone-100' }` }
              role="menuitem" tabIndex={ 0 }>
              <FaFont className="text-lg" />
              Ευανάγνωστη γραμματοσειρά
            </button>
            <button
              onClick={ reset }
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-stone-100 flex justify-start items-center gap-3"
              role="menuitem" tabIndex={ 0 }
              aria-label="Reset all accessibility features">
              <BiReset className="text-lg" />
              Επαναφορά ρυθμίσεων
            </button>
          </div>
        </div>
      ) }
    </section>
  );
}
