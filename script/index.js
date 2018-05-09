class PraiseButton {

    constructor(num, ele){
        this.num = num;
        this.ele = ele;
    }

    clickAction(){

        this.ele.click(() => {
            
            if(this.num < 10 ){

                this.ele.css('-webkit-filter', 'grayscale(0)');
                $('#animation').addClass('num');
                this.num = add(this.num);
                setTimeout(() => {
                    $('#animation').removeClass('num');
                }, 1000);

            }else {
                this.ele.css('-webkit-filter', 'grayscale(1)');
                this.num = 0
            }

            console.log(this.num)

        })

    }

}

class Thumb extends PraiseButton {

    constructor(num, ele){
        super(num, ele);
    }

}

export default {Thumb};