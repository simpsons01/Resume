const vm = new Vue({
    el:"#app",
    data:{
        isPage: 1
    },
    methods:{
    //  handleScroll() {
    //    var distancePX = $(window).scrollTop();
    //    if(distancePX/this.windowHeight < 0){               
    //        this.isPage = 1
    //    }else if( 0 < distancePX/this.windowHeight && distancePX/this.windowHeight < 1){
    //        this.isPage = 2
    //    }else if( 1 < distancePX/this.windowHeight && distancePX/this.windowHeight < 2){ 
    //        this.isPage = 3
    //    }else if( 2 < distancePX/this.windowHeight && distancePX/this.windowHeight < 3){ 
    //        this.isPage = 4
    //    }
    //  },
     backtoPage(page) {
       this.isPage = page + 1
       $("html, body").animate({scrollTop: this.windowHeight*page}, 400);
     }
    },
    computed:{
       windowHeight() {
           return $(window).height()
       }
    },
    // created () {
    //  const vm = this
    //  $(window).scroll(function() {
    //     vm.handleScroll()
    //  });
    // },
    // destroyed () {
    //  const vm = this
    //  $(window).scroll(function() {
    //     vm.handleScroll()
    //  });
    // }
})