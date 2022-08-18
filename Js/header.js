window.onscroll = ()=>{
    if(this.scrollY > 1) {
        $('header').addClass('sticky_header')
    }else{
        $('header').removeClass('sticky_header');
    }  
}
