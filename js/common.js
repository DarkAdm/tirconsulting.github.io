$(document).ready(function(){
    /*Hide Button*/
    $('#Js-hideText').click(function(e){
        e.preventDefault();
        $('.HideInfoBlock').show(300);
    });
    $('#Js-hideTexte').click(function(e){
        e.preventDefault();
        $('.HideInfoBlock').hide(300);
    })
    /*WOW.JS*/
    new WOW().init();
    /*Portfolio*/
    $('.PortfolioMask a').hover(function(){
        $(this).parent().css({
            width:'100%',
            height:'100%',
            margin:'0',
            transition: 'all .4s'
        });
    });
    $('.PortfolioMask a').mouseout(function(){
        $(this).parent().css({
            width:'80%',
            height:'70%',
            margin:'60px',
            transition: 'all .4s'
        });
    });
    /*Close Small MENu*/
    $('#CloseSmallMenu').click(function(){
        $('.SmallMenu').hide(200);
    });
    /*Open Small Menu*/
    $('#OpenSmallMenu').click(function(){
        $('.SmallMenu').show(200);
    });
    /*Hover Iteam Shop*/
    $('.JS-Open').hover(function(){
        if($(window).width() <= '639'){
            $('.imgMask').hide();
        }else{
            $(this).next().toggle();
        }
    });
    /*Modal Consult*/
    $('#JS-Modale').click(function(e){
        $('#Modale').show();
    });
    /*Close Modale Const*/
    $('#ModaleClose').click(function(){
        $('#Modale').hide();
    })
    /*ADD Id*/
    $('.ShopIteam').each(function(index){
           $(this).attr('key',index);
       }) ;
    $('.ShopIteame').each(function(index){
           $(this).attr('key',index);
       }) ;
    var Base = [
        {
            id: 0,
            name: 'DAF XF 460',
            age: '2008',
            transmission: 'Механіка',
            life: '900тис.',
            price1: 'Ціна за кордоном 15500$.  ',
            price2:'Ціна на Україні 18000$.',
            price3:'Виртати за дорогу (приблизно 500$) в цю суму входить оплата доріг , віатол ,проживання і заправка.',
            price4: 'На ринку в України машини в такому стані коштують від 21500$ до 22000$.',
            info: ' Стан близкій до ідеалу , куплений з транспортної фірми Анджей корпорейтед  - Польща.Машинка їздила тільки на Німеччину.Перший власник , бралася з салону,всі сервіси проходила на власному СТО,яке знаходиться на цій фірмі.',
            img1: 'img/Portfolio/Dafxf1/daf1.jpg',
            img2: 'img/Portfolio/Dafxf1/daf2.jpg',
            img3: 'img/Portfolio/Dafxf1/daf3.jpg',
            img4: 'img/Portfolio/Dafxf1/daf4.jpg',
            img5: 'img/Portfolio/Dafxf1/daf5.jpg'
            
        },
        {
            id: 1,
            name: 'DAF XF 460 ',
            age: '2008',
            transmission: 'Механіка',
            life: '940тис.',
            price1: 'Ціна за кордоном 12500$. ',
            price2:'Ціна на Україні 15100$.',
            price3:'Виртати за дорогу (приблизно 800$) в цю суму входить оплата доріг , віатол ,проживання і заправка.',
            price4: 'На ринку в Україні машини в такому стані коштують від 19000$ до 20000$.',
            info: ' Стан добрий, в деяких місцях потрібно прибрати сліди корозії .Також потрібно замінити гідравлічний механізм піднесення кабіни (70$)і масла з фільтрами (200$).Був куплений з транспортної фірми - Томало Транс - Польща.Машинка їздила на Норвегію ,Данію,Швецію.Перший власник баралася з салону.Всі сервіси проходила на власному СТО, яке знаходиться на цій фірмі.',
            img1: 'img/Portfolio/Dafxf2/daf1.jpg',
            img2: 'img/Portfolio/Dafxf2/daf2.jpg',
            img3: 'img/Portfolio/Dafxf2/daf3.jpg',
            img4: 'img/Portfolio/Dafxf2/daf4.jpg',
            img5: 'img/Portfolio/Dafxf2/daf5.jpg'
        },
        {
            id: 2,
            name: 'DAF XF 460 ',
            age: '2010',
            transmission: 'Механіка',
            life: '940тис.',
            price1: 'Ціна за кордоном 18500$. ',
            price2:'Ціна на Україні 22000$.',
            price3:'Виртати за дорогу (приблизно 600$) в цю суму входить оплата доріг , віатол ,проживання і заправка.',
            price4: 'На ринку в Україні машини в такому стані коштують від 24500$ до 27000$.',
            info: ' Стан близкий до ідеалу , був куплений з транспортної фірми Павел енд компані транс  - Польща. Машинка їздила тільки на Німеччину і Іспанію. Перший власник , баралася з салону , всі сервіси проходила на власному СТО яке знаходиться на цій фірмі.',
            img1: 'img/Portfolio/Dafxf3/daf1.jpg',
            img2: 'img/Portfolio/Dafxf3/daf2.jpg',
            img3: 'img/Portfolio/Dafxf3/daf3.jpg',
            img4: 'img/Portfolio/Dafxf3/daf4.jpg',
            img5: 'img/Portfolio/Dafxf3/daf5.jpg'
        },
        {
            id: 3,
            name: 'DAF XF 460 ',
            age: '2009',
            transmission: 'Механіка',
            life: '845тис.',
            price1: 'Ціна за кордоном 16000$. ',
            price2:'Ціна на Україні 19000$.',
            price3:'Виртати за дорогу (приблизно 600$) в цю суму входить оплата доріг , віатол ,проживання і заправка.',
            price4: 'На ринку в Україні машини в такому стані коштують від 22500$ до 25000$.',
            info: ' Стан близкий до ідеалу , був куплений з транспортної фірми Павел енд компані транс  - Польща. Машинка їздила тільки на Німеччину . Перший власник , баралася з салону , всі сервіси проходила на власному СТО яке знаходиться на цій фірмі.',
            img1: 'img/Portfolio/Dafxf4/daf1.jpg',
            img2: 'img/Portfolio/Dafxf4/daf2.jpg',
            img3: 'img/Portfolio/Dafxf4/daf3.jpg',
            img4: 'img/Portfolio/Dafxf4/daf4.jpg',
            img5: 'img/Portfolio/Dafxf4/daf5.jpg'
        },
        {
            id: 4,
            name: 'SCANIA R440 ',
            age: '2008',
            transmission: 'Тіптронік',
            life: '960тис.',
            price1: 'Ціна за кордоном 14500$. ',
            price2:'Ціна на Україні 18000$.',
            price3:'Виртати за дорогу (приблизно 700$) в цю суму входить оплата доріг , віатол ,проживання і заправка.',
            price4: 'На ринку в Україні машини в такому стані коштують від 20500$ до 23000$.',
            info: ' Стан близкий до ідеалу , була куплений з транспортної фірми - Польща.  Перший власник , баралася з салону , всі сервіси проходила на офіційному СТО SCANIA.',
            img1: 'img/Portfolio/Scania/scania1.jpg',
            img2: 'img/Portfolio/Scania/scania2.jpg',
            img3: 'img/Portfolio/Scania/scania3.jpg',
            img4: 'img/Portfolio/Scania/scania4.jpg',
            img5: 'img/Portfolio/Scania/scania5.jpg'
        },
        {
            id: 5,
            name: 'DAF XF 460 ',
            age: '2009',
            transmission: 'Механіка',
            life: '920тис.',
            price1: 'Ціна за кордоном 15000$. ',
            price2:'Ціна на Україні 17000$.',
            price3:'Виртати за дорогу (приблизно 700$) в цю суму входить оплата доріг , віатол ,проживання і заправка.',
            price4: 'На ринку в Україні машини в такому стані коштують від 22000$ до 24000$.',
            info: ' Стан близкій до ідеалу , куплений з транспортної фірми Анджей корпорейтед  - Польща.Перший власник , бралася з салону,всі сервіси проходила на власному СТО,яке знаходиться на цій фірмі.',
            img1: 'img/Portfolio/Dafxf5/daf1.jpg',
            img2: 'img/Portfolio/Dafxf5/daf2.jpg',
            img3: 'img/Portfolio/Dafxf5/daf3.jpg',
            img4: 'img/Portfolio/Dafxf5/daf4.jpg',
            img5: 'img/Portfolio/Dafxf5/daf5.jpg'
        }
    ]
    var Base1 = [
        {
            id: 0,
            name: 'DAF XF 460 ',
            age: '2009',
            transmission: 'Механіка',
            life: '859тис.',
            price1: 'Ціна продажу - 22800$. ',
            price2: 'Стан ідеальний,куплений з транспортної фірми - Польща.Машинка їздила на Данію.Перший власник баралася з салону всі сервіси проходила на власному СТО яке знаходиться на цій фірмі.Ви можете оглянути автомобіль самостій.Залиште заявку або позвоніть нам.',
            img1: 'img/Sale/Dafxf/daf1.jpg',
            img2: 'img/Sale/Dafxf/daf2.jpg',
            img3: 'img/Sale/Dafxf/daf3.jpg',
            img4: 'img/Sale/Dafxf/daf4.jpg',
            img5: 'img/Sale/Dafxf/daf5.jpg',
        },
        {
            id: 1,
            name: 'DAF XF 460 ',
            age: '2008',
            transmission: 'Механіка',
            life: '914тис.',
            price1: 'Ціна продажу - 22000$. ',
            price2: 'Стан хороший.Обслуговування проводилось на власному СТО.Стоїть стандартна заводська гідравліка в робочому стані.Знос коліс 70%.Ви можете оглянути автомобіль самостій.Залиште заявку або позвоніть нам.',
            img1: 'img/Sale/Dafxf1/daf1.jpg',
            img2: 'img/Sale/Dafxf1/daf2.jpg',
            img3: 'img/Sale/Dafxf1/daf3.jpg',
            img4: 'img/Sale/Dafxf1/daf4.jpg',
            img5: 'img/Sale/Dafxf1/daf5.jpg',
        }
        
    ];
    $('.JS-Open').on('click',function(){
        var Iteam = $(this).parent().parent().attr('key');
        var Local = localStorage.setItem('Iteam', Iteam);
    });
    $('.JS-Opene').on('click',function(){
        var Iteam = $(this).parent().parent().attr('key');
        var Local = localStorage.setItem('Iteam1', Iteam);
    });
    Base.forEach(function(element){
        var LocalGet = localStorage.getItem('Iteam');
        //var LocalUrl = localStorage.getItem('Hr');
            if(LocalGet==element.id){
               $('#name').text(element.name);
               $('#age').text(element.age);
               $('#transmission').text(element.transmission);
               $('#life').text(element.life);
                $('#IImage1').attr('src',element.img1);
                $('#IImage2').attr('src',element.img2);
                $('#IImage3').attr('src',element.img3);
                $('#IImage4').attr('src',element.img4);
                $('#IImage5').attr('src',element.img5);
                $('#price1').text(element.price1);
                $('#price2').text(element.price2);
                $('#price3').text(element.price3);
                $('#price4').text(element.price4);
                $('#info').text(element.info);
            }
        });
     Base1.forEach(function(element){
        var LocalGet = localStorage.getItem('Iteam1');
       // var LocalUrl = localStorage.getItem('Hr');
            if(LocalGet==element.id){
               $('#name').text(element.name);
               $('#age').text(element.age);
               $('#transmission').text(element.transmission);
               $('#life').text(element.life);
                $('#IImage1').attr('src',element.img1);
                $('#IImage2').attr('src',element.img2);
                $('#IImage3').attr('src',element.img3);
                $('#IImage4').attr('src',element.img4);
                $('#IImage5').attr('src',element.img5);
                $('#price1').text(element.price1);
                $('#price2').text(element.price2);
            }
        });
    /*Slider autification*/
    $('.MySlyder').slick({
        nextArrow: '<i class="fa fa-arrow-right"></i>',
        prevArrow: '<i class="fa fa-arrow-left"></i>',
        autoplay: true,
        adaptiveHeight:true
    });
});
