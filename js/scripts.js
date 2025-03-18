/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq");

    faqItems.forEach(item => {
        item.querySelector(".faq-question").addEventListener("click", function() {
            const isOpen = item.classList.contains("open");

            // Close all FAQs
            faqItems.forEach(faq => faq.classList.remove("open"));

            // Toggle the clicked FAQ
            if (!isOpen) {
                item.classList.add("open");
            }
        });
    });
});
