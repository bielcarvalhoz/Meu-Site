class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"
        this.handleClick = this.handleClick.bind(this)
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${(index/7) + 0.2}s`
            }
        })
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animateLinks()
        let items = document.querySelector(".items")
        let btnconfig = document.getElementById("btnconfig")
        items.classList.remove('opacitychange')
        btnconfig.classList.remove('active')
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent()
        }
        return this
    }
}



function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

$(document).ready(function(){
    document.body.classList.add(getCookie('theme'))

    window.addEventListener('resize', function () {
        //var altura = window.innerHeight;
        var largura = window.innerWidth;
    
        if (largura < 999) {
            document.querySelector('.items').classList.remove('opacitychange');
            document.querySelector('#btnconfig').classList.remove('active');
        }
    });

    let selected = document.querySelector('#selecttheme').options

    for(item of selected){
        if(item.value == getCookie('theme')){
            item.selected = true
        } else {
            item.selected = false
        }
    }

    const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-list li")
    mobileNavbar.init()

    let btnconfig = document.getElementById("btnconfig")
    btnconfig.addEventListener("click", function(e) {
        let items = document.querySelector(".items")
        items.classList.toggle('opacitychange')
        if(!items.classList.contains('opacitychange')) {
            btnconfig.classList.remove('active')
        } else {
            btnconfig.classList.add('active')
        }
    })

    let mobileconfig = document.getElementById("mobileconfig")
    mobileconfig.addEventListener("click", function(e) {
        let items = document.querySelector(".items")
        items.classList.toggle('opacitychange')
        if(items.classList.contains('opacitychange')) {
            mobileconfig.classList.remove('active')
        } else {
            mobileconfig.classList.add('active')
        }
    })

    document.querySelector("#btnthemechange").addEventListener("click", function(e) {
        let theme = document.querySelector("#selecttheme").value
        document.body.classList = ''
        document.body.classList.add(theme)
        setCookie('theme', theme, 9999)
    })
})