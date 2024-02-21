"use strict";
const headers = document.querySelector(".header-observer");
const aboutText = document.querySelector(".about-text")

const observerCallback = function (entries) {
    const [entry] = entries;
 if (!entry.isIntersecting) headers.classList.add("header-sticky");
    else headers.classList.remove("header-sticky");
};

const observerOptions = {
 root: null,
 threshold: 0,
};

const headerObserver = new IntersectionObserver(observerCallback, observerOptions);

headerObserver.observe(aboutText);
