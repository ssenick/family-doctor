// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';
import { formValidate, formSubmit, formSubmitAction, formFieldsInit } from './forms/forms.js';

/* ====== quiz===== */
export const quizElement = document.querySelector('#quiz');
export const categoriesBlock = document.querySelector('.categories');
export let stepIndex = 0;
export function qwiz(selector, categories, index = 0) {
  const formQuiz = selector.querySelector('#quiz-form'),
    steps = selector.querySelectorAll('.quiz__step'),
    doctorsInputs = selector.querySelectorAll('.slide-doctors__input'),
    btnSubmit = selector.querySelector('.form-block__button'),
    btnPrev = selector.querySelector('.quiz__link_prev'),
    btnNext = selector.querySelector('.quiz__link_next');

  //form
  formQuiz.addEventListener('submit', function (e) {
    e.preventDefault();
  });

  // События
  btnPrev.addEventListener('click', function (e) {
    if (index !== 0) {
      index--;
      refreshSteps();
    }
  });
  btnNext.addEventListener('click', function (e) {
    if (index === 0 && valideRadioForm(doctorsInputs)) {
      stepChangeInfo(doctorsInputs);
      index++;
      refreshSteps();
    }
  });
  btnSubmit.addEventListener('click', function (e) {
	  if (formValidate.getErrors(formQuiz) < 1) formQuiz.submit();
  });
  categories.addEventListener('click', function (e) {
    if (e.target && e.target.closest('.item-categories')) {
      const titleCategories = e.target.closest('.item-categories').querySelector('.item-categories__title').textContent;
      selector.querySelector('.step-quiz__title span').textContent = titleCategories;
    }
  });

  // Функции
  function refreshSteps() {
    steps.forEach((step) => {
      if (step.classList.contains('_active')) step.classList.remove('_active');
    });
    steps[index].classList.add('_active');
    if (index === 0) {
      btnPrev.textContent = 'Хотите выбрать другую услугу?';
      btnNext.textContent = 'Далее';
      btnSubmit.setAttribute('type', 'button');
      if (btnNext.hasAttribute('data-close')) btnNext.removeAttribute('data-close');
      setTimeout(() => {
        btnPrev.setAttribute('data-close', '');
      }, 0);
    } else {
      btnPrev.textContent = 'Хотите выбрать другого специалиста?';
      btnPrev.removeAttribute('data-close');
      btnNext.textContent = 'На главную';
      btnSubmit.setAttribute('type', 'submit');
      setTimeout(() => {
        btnNext.setAttribute('data-close', '');
      }, 0);
    }
  }
  function valideRadioForm(selectors) {
    let formValid = false;
    for (let i = 0; i < selectors.length; i++) {
      if (selectors[i].checked) formValid = true;
    }

    if (!formValid) alert('Выбери доктора!');
    return formValid;
  }
  function stepChangeInfo(radiosItems) {
    let slideDoctorsBody;
    let bodyItem;
    for (let i = 0; i < radiosItems.length; i++) {
      const elem = radiosItems[i];
      if (elem.checked) {
        bodyItem = elem.closest('.slider-quiz__slide.slide-doctors').querySelector('.slide-doctors__body');
        slideDoctorsBody = bodyItem.innerHTML;
      }
    }
    const name = bodyItem.querySelector('.slide-doctors__name').textContent,
      slideDoctors = selector.querySelector('.quiz__step.step-quiz.step-quiz_two').querySelector('.slide-doctors__body'),
      infoLabel = selector.querySelector('.quiz__step.step-quiz.step-quiz_two').querySelector('.info-step-quiz__label span'),
      infoTitleName = selector.querySelector('.quiz__step.step-quiz.step-quiz_two').querySelector('.step-quiz__title span');

    infoTitleName.textContent = name;
    infoLabel.textContent = name;
    slideDoctors.innerHTML = `${slideDoctorsBody}`;
  }
  refreshSteps();
}

if (quizElement && categoriesBlock) {
  qwiz(quizElement, categoriesBlock, stepIndex);
}
/* ====== quiz===== */
