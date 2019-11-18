((window) => {

    console.log('scripts loaded');

})(window);
/* 
import { debounce } from 'lodash';
import request from 'superagent';
import Breakjs from 'breakjs';
import validate from 'validate-js';

const MOBILE_NAV_CLASS = 'mobile-nav-active';
const layout = Breakjs({
    belowDesktop: 959,
    desktop: 960
});

function on(elem, event, fn) {
    if (elem.addEventListener) {
        elem.addEventListener(event, fn, false);
    } else {
        elem.attachEvent('on' + event, () => {
            return (fn.call(elem, window.event));
        });
    }
}

(function (window) {
    // console.time('app.js');
    const html = document.querySelector('html'),
        body = document.querySelector('body'),
        mainNav = document.querySelector('#main-nav'),
        mobileDrawer = document.querySelector('#nav-drawer'),
        contactForm = document.querySelector('#contact-beco'),
        contactFormMessage = document.querySelector('#form-message'),
        submitForm = document.querySelector('#submit-contact-form'),
        submitButton = document.querySelector('#submit-contact-form');

    let currentLayout,
        layoutChanged = false;

    function showNavLogo() {
        if (window.scrollY > 199 && currentLayout !== 'desktop') {
            mainNav.classList.add('show-logo')
        } else {
            mainNav.classList.remove('show-logo');
        }
    }

    showNavLogo();

    layout.addChangeListener(() => {
        currentLayout = layout.current();
        layoutChanged = true;
    });

    on(window, 'resize', debounce((e) => {
        if (layoutChanged) {
            if (mainNav.classList.contains(MOBILE_NAV_CLASS)) {
                body.classList.remove('no-scroll');
                html.classList.remove('no-scroll');
                mainNav.classList.remove(MOBILE_NAV_CLASS);
            }

            layoutChanged = false;
        }
    }, 250));

    on(window, 'scroll', showNavLogo);

    on(mobileDrawer, 'click', (e) => {
        if (mainNav.classList.contains(MOBILE_NAV_CLASS)) {
            body.classList.remove('no-scroll');
            html.classList.remove('no-scroll');
            mainNav.classList.remove(MOBILE_NAV_CLASS);
        } else {
            body.classList.add('no-scroll');
            html.classList.add('no-scroll');
            mainNav.classList.add(MOBILE_NAV_CLASS);
        }
    });

    if (contactForm !== null) {
        let errorElements = [],
            validator = new FormValidator('contact-beco', [
                {
                    name: 'first-name',
                    rules: 'required'
                },
                {
                    name: 'last-name',
                    rules: 'required'
                },
                {
                    name: 'company',
                    rules: 'required',
                },
                {
                    name: 'email',
                    rules: 'valid_email|required'
                }
            ], (errors, event) => {

                if (errors.length > 0) {

                    let i, el;

                    for (i = 0; i < errorElements.length; i++) {
                        el = errorElements[i];

                        if (errors.indexOf(el) == -1) {
                            el.element.classList.remove('error');
                            el.element.classList.add('validated');
                        }
                    }

                    errorElements = [];

                    for (i = 0; i < errors.length; i++) {
                        el = errors[i];
                        errorElements.push(el);

                        el.element.classList.add('error');
                        el.element.classList.remove('validated');
                    }

                    contactFormMessage.classList.add('form-message-error');
                }
                else {
                    const firstName = document.querySelector('#first-name'),
                        lastName = document.querySelector('#last-name'),
                        company = document.querySelector('#company'),
                        email = document.querySelector('#email'),
                        message = document.querySelector('#message');

                    firstName.classList.remove('error');
                    lastName.classList.remove('error');
                    company.classList.remove('error');
                    email.classList.remove('error');
                    message.classList.remove('error');

                    firstName.classList.add('validated');
                    lastName.classList.add('validated');
                    company.classList.add('validated');
                    email.classList.add('validated');
                    message.classList.add('validated');

                    const formData = {
                        action: 'send_contact_email',
                        firstName: firstName.value,
                        lastName: lastName.value,
                        company: company.value,
                        title: document.querySelector('#title').value,
                        emailAddress: email.value,
                        phone: document.querySelector('#phone').value,
                        emailOptIn: document.querySelector('#email-me').checked,
                        callOptIn: document.querySelector('#call-me').checked,
                        message: message.value
                    };

                    if (contactFormMessage.classList.contains('form-message-error')) {
                        contactFormMessage.classList.remove('form-message-error');
                    }

                    submitButton.classList.add('submitted');

                    request
                        .post('/wp-admin/admin-ajax.php')
                        .type('json')
                        .query(formData)
                        .end((err, res) => {
                            if (!err && res) {
                                const json = JSON.parse(res.text);

                                submitButton.classList.remove('submitted');

                                if (json.status === 'success') {
                                    contactFormMessage.classList.remove('form-message-error');
                                    contactFormMessage.classList.add('form-message-sent');
                                }
                            }
                        });
                }
                event.preventDefault();
            });
    }
    // console.timeEnd('app.js');
})(window);
 */