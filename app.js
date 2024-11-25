// Todo----------------------------Switch Tab-----------------------------
const tabsBtn = document.querySelectorAll('.tabsBtn')
const tabsItem = document.querySelectorAll('.tabsItem')

tabsBtn.forEach((item) => {
    item.addEventListener('click', () => {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab")
        let currentTab = document.querySelector(tabId)

        if(!currentBtn.classList.contains('activeTab')) {
            tabsBtn.forEach((item2) => {
                item2.classList.remove('activeTab')
            });

            tabsItem.forEach((item3) => {
                item3.classList.remove('activeTab')
            });

            currentBtn.classList.add('activeTab')
            currentTab.classList.add('activeTab')
        }
    })
})

document.querySelector('.tabsBtn').click()

// Todo------------------------------Portfolio btn-----------------------------
// view to tab content on click tab buttons

const tabs = document.querySelectorAll('.tab')
const tabBtns = document.querySelectorAll('.tab2-btn')

const tab_Nav = function(tabBtnClick) {
    tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove('active')
    })

    tabs.forEach((tab) => {
        tab.classList.remove('active')
    })

    tabBtns[tabBtnClick].classList.add('active');
    tabs[tabBtnClick].classList.add('active')
}

tabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener('click', () => {
        tab_Nav(i);
    })
})

// -------------------------------------------------------
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel' ).mount();
  } );
