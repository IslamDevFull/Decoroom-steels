// /////////////////////////////////////////////////// animation scroll //////////////////////////////////////////////////
document.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById('nav').style.backgroundColor = 'rgb(3,15,28,1)'
  }
  else {
    document.getElementById('nav').style.backgroundColor = 'rgb(3,15,28,0.5)'
  }
})
// /////////////////////////////////////////////////// Menyu left drop //////////////////////////////////////////////////
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// /////////////////////////////////////////////////// Preloader //////////////////////////////////////////////////
document.body.onload = () => {
  setTimeout(() => {
    var preloader = document.getElementById('pageLoader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 2000)
}
// /////////////////////////////////////////////////// Lang //////////////////////////////////////////////////
document.getElementById('uz').addEventListener('click', () => {
  // ************************************Menyu******************************************** \\
  document.getElementById('lan').innerHTML = 'Uy';
  document.getElementById('lan1').innerHTML = 'Bizning ishlarimiz';
  document.getElementById('lan2').innerHTML = 'Kompaniya haqida';
  document.getElementById('lan3').innerHTML = 'Kontaktlar';
  document.getElementById('lan_1').innerHTML = 'Uy';
  document.getElementById('lan1_1').innerHTML = 'Bizning ishlarimiz';
  document.getElementById('lan2_1').innerHTML = 'Kompaniya haqida';
  document.getElementById('lan3_1').innerHTML = 'Kontaktlar';
  document.getElementById('lan4').innerHTML = 'Do`konimiz';
  document.getElementById('lan5').innerHTML = 'Qayta qo`ng`iroq';
  document.getElementById('lan4_1').innerHTML = 'Ofis manzili:';
  document.getElementById('lan5_1').innerHTML = 'O`zbekiston, P9XV+JV8, Buxoro, Buxoro Viloyati';
  // ************************************Header******************************************** \\
  document.getElementById('lan6').innerHTML = 'Zanglamaydigan temir';
  document.getElementById('lan7').innerHTML = 'innovatsiya, ishonchlilik, chidamlilik';
  document.getElementById('lan8').innerHTML = 'Narxini bilish';
  // ************************************content******************************************** \\
  document.getElementById('lan9').innerHTML = 'Kompaniya haqida';
  document.getElementById('lan10').innerHTML = 'Birja tashkil etilgan yil';
  document.getElementById('lan11').innerHTML = 'Yiliga mijozlar';
  document.getElementById('lan12').innerHTML = 'Mutaxassislarning o`rtacha yillik tajribasi';
  document.getElementById('lan13').innerHTML = 'Tugallangan buyurtmalar';
  document.getElementById('lan14').innerHTML = 'Biz vaqt sinovidan oёtadigan va makoningizning muhim qismiga aylanadigan asarlar yaratamiz. DECOOROM STEEL kompaniyasida biz dizayn nafaqat chiroyli, balki amaliy bo`lishi kerakligiga ishonamiz.';
  document.getElementById('lan15').innerHTML = 'Sizning makoningiz uchun metall san`ati';
  document.getElementById('lan16').innerHTML = 'Har bir tafsilot sizning uslubingizni aks ettiradi';
  document.getElementById('lan17').innerHTML = 'Biz bardoshli metalldan asarlar yaratamiz';
  document.getElementById('lan18').innerHTML = 'O`zi uchun gapiradigan metall';
  document.getElementById('lan19').innerHTML = 'Har bir mahsulotdagi uslub va funksionallik';
  document.getElementById('lan20').innerHTML = 'Biz sizning g`oyalaringizni hayotga tatbiq etamiz';
  document.getElementById('lan21').innerHTML = 'Jasur loyihalar uchun ijodiy echimlar';
  document.getElementById('lan22').innerHTML = 'Har bir satrda individuallik';
  document.getElementById('lan23').innerHTML = 'Sizning joyingiz bizning metallimizdir';
  document.getElementById('lan24').innerHTML = 'Har bir mahsulotda ishonchlilik va nafislik';
  document.getElementById('lan25').innerHTML = 'Metall san`at bilan uchrashganda';
  document.getElementById('lan26').innerHTML = 'Biz metallni zamonaviy echimlarga aylantiramiz';
  document.getElementById('lan27').innerHTML = 'Biz mahsulotlardan ko`proq narsani yaratamiz';
  document.getElementById('lan28').innerHTML = 'Sizning orzularingiz bizning haqiqatimiz';
  document.getElementById('lan29').innerHTML = 'Kelajakni metall bilan qurish';
  document.getElementById('lan30').innerHTML = 'Taassurot qoldiradigan dizayn';
  document.getElementById('lan31').innerHTML = 'Металл, который вдохновляет';
  document.getElementById('lan32').innerHTML = 'Sizning eng yovvoyi g`oyalaringiz poydevori';
  document.getElementById('lan33').innerHTML = 'Har qanday makon uchun zamonaviy echimlar';
  document.getElementById('lan34').innerHTML = 'Biz iz qoldiradigan mahsulotlarni yaratamiz';
  // ************************************content1******************************************** \\
  document.getElementById('lan35').innerHTML = 'Bizning afzalliklarimiz';
  document.getElementById('lan36').innerHTML = 'Faqat yuqori sifat';
  document.getElementById('lan37').innerHTML = 'ARZON';
  document.getElementById('lan38').innerHTML = 'Narxlar';
  document.getElementById('lan39').innerHTML = 'TEZ';
  document.getElementById('lan40').innerHTML = 'Hammasi o`z vaqtida';
  document.getElementById('lan41').innerHTML = 'KAFOLATLI';
  document.getElementById('lan42').innerHTML = 'Sifatlar';
  // ************************************content2******************************************** \\
  document.getElementById('lan43').innerHTML = 'Bizning mahsulotlarimiz';
  document.getElementById('lan44').innerHTML = 'Zanglamaydigan temirdan yasalgan tokchalar';
  document.getElementById('lan45').innerHTML = 'Sizning interyeringiz uchun zamonaviy va amaliy yechimga aylanadigan zanglamaydigan temirdan yasalgan tokchalarga buyurtma bering. Mustahkam, bardoshli va buyurtma asosida tayyorlangan tokchalarimiz har qanday uyga juda mos tushadi.';
  document.getElementById('lan46').innerHTML = 'Kreslo';
  document.getElementById('lan47').innerHTML = '"Steel Comfort" to`plamidagi stulimiz bilan o`ziga xos qulaylik va uslub muhitini yarating. Minimalist dizayn va maksimal qulaylikning mukammal kombinatsiyasi. Bardoshli zanglamaydigan temirdan yasalgan ramka chidamlilikni ta`minlaydi, yumshoq qoplama esa hashamatni oshiradi';
  document.getElementById('lan48').innerHTML = 'Oshxona tizimi';
  document.getElementById('lan49').innerHTML = '"Steel Gourmet" to`plamidagi oshxona tizimimiz yordamida uyingizda zamonaviy va funktsional markaz yarating. Ushbu minimalist zanglamaydigan temirdan va yog`ochdan tayyorlangan oshxona jihozi oqlangan dizayn va amaliylikni mukammal birlashtiradi.';
  // ************************************content3******************************************** \\
  document.getElementById('lan50').innerHTML = 'Mahsulotlarimiz haqida';
  document.getElementById('lan51').innerHTML = 'Panjara';
  document.getElementById('lan51_1').innerHTML = 'Panjara';
  document.getElementById('lan52').innerHTML = 'Zina panjaralari xavfsizlikni ta`minlash uchun zarurdir. Yopuvchi tuzilmalarning keng assortimenti orasida zanglamaydigantemirdan yasalgan zinapoyalar va tutqichlar keng talabga ega.<br> Bu chiroyli ko`rinishga ega va turli xil interyer uslublarini ideal tarzda to`ldiradigan, deyarli hech qanday texnik xizmat ko`rsatish va keyingi ta`mirlashni talab qilmaydigan bardoshli va ishonchli tuzilmalarni yaratishga imkon beruvchi bardoshli materialdir.';
  document.getElementById('lan52_1').innerHTML = 'Zina panjaralari xavfsizlikni ta`minlash uchun zarurdir. Yopuvchi tuzilmalarning keng assortimenti orasida zanglamaydigantemirdan yasalgan zinapoyalar va tutqichlar keng talabga ega.<br> Bu chiroyli ko`rinishga ega va turli xil interyer uslublarini ideal tarzda to`ldiradigan, deyarli hech qanday texnik xizmat ko`rsatish va keyingi ta`mirlashni talab qilmaydigan bardoshli va ishonchli tuzilmalarni yaratishga imkon beruvchi bardoshli materialdir.';
  document.getElementById('lan53').innerHTML = 'Kreslolar';
  document.getElementById('lan54').innerHTML = 'Zanglamaydigan temirdan yasalgan stullar ajoyib ishlash xususiyatlariga ega. Zanglamaydigan temirdan yasalgan stullar ulkan yuklar ta`sirida buzilmaydi va iste`molchiga cheksiz xizmat qiladi. <br> Zanglamaydigan temirdan yasalgan stullarga g`amxo`rlik qilish oson: uni suv va mato yordamida hech qanday harakat qilmasdan yuvish mumkin. Taklif etilgan namunalarning o`rindiqlari yumshoq yoki yog`ochdan yasalgan bo`lishi mumkin (xaridor har qanday dizayndagi zanglamaydigan temirdan stullarni tanlash imkoniyatiga ega). Metall ramka butun tuzilishni maxsus kuch bilan ta`minlaydi.';
  document.getElementById('lan55').innerHTML = 'Shkaflar';
  document.getElementById('lan55_1').innerHTML = 'Shkaflar';
  document.getElementById('lan56').innerHTML = 'Ovqatlanish korxonalari uchun shkaflar oshxona makonini to`g`ri tashkil etishning muhim elementidir. Bunday neytral uskunalar katta o`lchamdagi idishlarni, muzlatish yoki sovutishni talab qilmaydigan oziq-ovqat mahsulotlarini va oshxona anjomlarini saqlash uchun mo`ljallangan. <br> Neytral shkaflar ham issiq, ham sovuq ustaxonalarda ishlatilishi mumkin. Ba`zi hollarda ular echinish xonalariga o`rnatiladi va tarqatish liniyasiga o`rnatiladi yoki bar peshtaxtasi orqasiga o`rnatiladi. Ushbu toifadagi mebel oziq-ovqat va narsalarni saqlash uchun javob beradi. Xususiyatlari tufayli tarkibni yog , bug` va kondensatsiyadan himoya qiladi, bu oshxona joylari uchun muhimdir.';
  document.getElementById('lan56_1').innerHTML = 'Ovqatlanish korxonalari uchun shkaflar oshxona makonini to`g`ri tashkil etishning muhim elementidir. Bunday neytral uskunalar katta o`lchamdagi idishlarni, muzlatish yoki sovutishni talab qilmaydigan oziq-ovqat mahsulotlarini va oshxona anjomlarini saqlash uchun mo`ljallangan. <br> Neytral shkaflar ham issiq, ham sovuq ustaxonalarda ishlatilishi mumkin. Ba`zi hollarda ular echinish xonalariga o`rnatiladi va tarqatish liniyasiga o`rnatiladi yoki bar peshtaxtasi orqasiga o`rnatiladi. Ushbu toifadagi mebel oziq-ovqat va narsalarni saqlash uchun javob beradi. Xususiyatlari tufayli tarkibni yog , bug` va kondensatsiyadan himoya qiladi, bu oshxona joylari uchun muhimdir.';
  document.getElementById('lan57').innerHTML = 'Stol';
  document.getElementById('lan58').innerHTML = 'Umumiy ovqatlanish korxonalari oshxonasi uchun stol. U mahsulotlarni tayyorlash uchun ishlatiladi, chunki zanglamaydigan temirdan tozalash va qayta ishlash oson va talablarga javob beradi. <br> To`liq javon qo`shimcha saqlash uchun joydan foydalanishga imkon beradi (javon poldan 15 sm masofada o`rnatiladi, bu sizga oziq-ovqat mahsulotlarini saqlash imkonini beradi). Oyoqlarda tekis bo`lmagan sirtlarda barqaror o`rnatish uchun sozlanishi vintlar mavjud';
  document.getElementById('lan59').innerHTML = 'Yuvish vannalari';
  document.getElementById('lan59_1').innerHTML = 'Yuvish vannalari';
  document.getElementById('lan60').innerHTML = 'Oshxona anjomlari yuqori texnologiyali temirdan yasalgan qalinligi 1,2 mm - 1,5 mm bo`lgan materialning mukammal ishlash ko`rsatkichlari bilan. Metall vannaning chidamliligi va yuqori quvvat zaxirasi bor, uskunani tozalash oson va mustahkam ko`rinishga ega; Mutlaq yong`in xavfsizligi, namlik, mog`or va chiriyotganlarga chidamliligi mahsulotni odamlar gavjum joylarda ishlatish uchun xavfsiz qiladi. <br> Yuvish joylari davlat muassasalarining ajralmas qismi hisoblanadi: oshxonalar, sanatoriylar, pansionatlar, sog`lomlashtirish oromgohlari. Ko`p miqdordagi idishlar, sabzavotlar va mevalarni ehtiyotkorlik bilan qayta ishlash zarurati korxona egalarini funktsional va amaliy mahsulotlarni tanlashga majbur qiladi. Yuqori sifatli zanglamaydigan temirdan yasalgan yuvish vannasi sanoat miqyosidagi oshxonalar yoki xususiy hududlarni to`g`ri tartibga solish uchun eng maqbul echimdir.';
  document.getElementById('lan60_1').innerHTML = 'Oshxona anjomlari yuqori texnologiyali temirdan yasalgan qalinligi 1,2 mm - 1,5 mm bo`lgan materialning mukammal ishlash ko`rsatkichlari bilan. Metall vannaning chidamliligi va yuqori quvvat zaxirasi bor, uskunani tozalash oson va mustahkam ko`rinishga ega; Mutlaq yong`in xavfsizligi, namlik, mog`or va chiriyotganlarga chidamliligi mahsulotni odamlar gavjum joylarda ishlatish uchun xavfsiz qiladi. <br> Yuvish joylari davlat muassasalarining ajralmas qismi hisoblanadi: oshxonalar, sanatoriylar, pansionatlar, sog`lomlashtirish oromgohlari. Ko`p miqdordagi idishlar, sabzavotlar va mevalarni ehtiyotkorlik bilan qayta ishlash zarurati korxona egalarini funktsional va amaliy mahsulotlarni tanlashga majbur qiladi. Yuqori sifatli zanglamaydigan temirdan yasalgan yuvish vannasi sanoat miqyosidagi oshxonalar yoki xususiy hududlarni to`g`ri tartibga solish uchun eng maqbul echimdir.';
  // ************************************content4******************************************** \\
  document.getElementById('lan61').innerHTML = 'Bizning hamkorlarimiz';
  document.getElementById('lan62').innerHTML = 'Qayta qo`ng`iroqni buyurtma qiling';
  document.getElementById('lan63').innerHTML = '10 daqiqa ichida menejerlarimiz siz bilan bog`lanishadi';
  document.getElementById('lan64').placeholder = '*Ismingiz :';
  document.getElementById('lan65').placeholder = '*Telefon :';
  document.getElementById('lan66').placeholder = 'Izoh fa fikrlar :';
  document.getElementById('lan67').innerHTML = 'YUBORISH';
  // ************************************Footer******************************************** \\
  document.getElementById('lan68').innerHTML = 'Biz doimo aloqadamiz';
  document.getElementById('lan69').innerHTML = 'Ishonch telefon raqami:';
  document.getElementById('lan70').innerHTML = 'Ofis manzili:';
  document.getElementById('lan71').innerHTML = 'O`zbekiston, P9XV+JV8, Buxoro, Buxoro Viloyati';
  
  // ************************************border******************************************** \\
  document.getElementById('uz').style.borderBottom = '1px solid rgb(255, 80, 243)';
  document.getElementById('ru').style.borderBottom = 'none';
  document.getElementById('eng').style.borderBottom = 'none';
})
document.getElementById('ru').addEventListener('click', () => {
  // ************************************Menyu******************************************** \\
  document.getElementById('lan').innerHTML = 'Главная';
  document.getElementById('lan1').innerHTML = 'Наши работы';
  document.getElementById('lan2').innerHTML = 'О компании';
  document.getElementById('lan3').innerHTML = 'Контакты';
  document.getElementById('lan_1').innerHTML = 'Главная';
  document.getElementById('lan1_1').innerHTML = 'Наши работы';
  document.getElementById('lan2_1').innerHTML = 'О компании';
  document.getElementById('lan3_1').innerHTML = 'Контакты';
  document.getElementById('lan4').innerHTML = 'Наш магазин';
  document.getElementById('lan5').innerHTML = 'Обратная связь';
  document.getElementById('lan4_1').innerHTML = 'Адрес офиса:';
  document.getElementById('lan5_1').innerHTML = 'Узбекистан, P9XV+JV8, Buxoro, Buxoro Viloyati';
  // ************************************Header******************************************** \\
  document.getElementById('lan6').innerHTML = 'Нержавеющая сталь';
  document.getElementById('lan7').innerHTML = 'Инновации, Надежность, Долговечность';
  document.getElementById('lan8').innerHTML = 'Узнать цену';
  // ************************************content******************************************** \\
  document.getElementById('lan9').innerHTML = 'О Компании';
  document.getElementById('lan10').innerHTML = 'Год основания биржи';
  document.getElementById('lan11').innerHTML = 'Клиентов в год';
  document.getElementById('lan12').innerHTML = 'Лет средний опыт работы специалистов';
  document.getElementById('lan13').innerHTML = 'Выполненных заказов';
  document.getElementById('lan14').innerHTML = 'Мы создаем изделия, которые выдержат испытание временем и станут важной частью вашего пространства. В DECOOROM STEEL мы верим, что дизайн должен быть не только красивым, но и практичным.';
  document.getElementById('lan15').innerHTML = 'Искусство металла для вашего пространства';
  document.getElementById('lan16').innerHTML = 'Каждая деталь – отражение вашего стиля';
  document.getElementById('lan17').innerHTML = 'Создаем шедевры из прочного металла';
  document.getElementById('lan18').innerHTML = 'Металл, который говорит сам за себя';
  document.getElementById('lan19').innerHTML = 'Стиль и функциональность в каждом изделии';
  document.getElementById('lan20').innerHTML = 'Мы воплощаем ваши идеи в жизнь';
  document.getElementById('lan21').innerHTML = 'Креативные решения для смелых проектов';
  document.getElementById('lan22').innerHTML = 'Индивидуальность в каждой линии';
  document.getElementById('lan23').innerHTML = 'Ваше пространство – наш металл';
  document.getElementById('lan24').innerHTML = 'Надежность и элегантность в каждом изделии';
  document.getElementById('lan25').innerHTML = 'Когда металл встречается с искусством';
  document.getElementById('lan26').innerHTML = 'Превращаем металл в стильные решения';
  document.getElementById('lan27').innerHTML = 'Создаем больше, чем просто изделия';
  document.getElementById('lan28').innerHTML = 'Ваши мечты – наша реальность';
  document.getElementById('lan29').innerHTML = 'Строим будущее с металлом';
  document.getElementById('lan30').innerHTML = 'Дизайн, который впечатляет';
  document.getElementById('lan31').innerHTML = 'Металл, который вдохновляет';
  document.getElementById('lan32').innerHTML = 'Кузница ваших самых смелых идей';
  document.getElementById('lan33').innerHTML = 'Стильные решения для любого пространства';
  document.getElementById('lan34').innerHTML = 'Мы создаем изделия, которые оставляют след';
  // ************************************content1******************************************** \\
  document.getElementById('lan35').innerHTML = 'Наши преимущества';
  document.getElementById('lan36').innerHTML = 'Только высокое качество';
  document.getElementById('lan37').innerHTML = 'ГИБКИЕ';
  document.getElementById('lan38').innerHTML = 'Цены';
  document.getElementById('lan39').innerHTML = 'БЫСТРО';
  document.getElementById('lan40').innerHTML = 'Все точно в срок';
  document.getElementById('lan41').innerHTML = 'ГАРАНТИЯ';
  document.getElementById('lan42').innerHTML = 'Качества';
  // ************************************content2******************************************** \\
  document.getElementById('lan43').innerHTML = 'Наши продукты';
  document.getElementById('lan44').innerHTML = 'Cтеллажи из нержавеющей стали';
  document.getElementById('lan45').innerHTML = 'Закажите стеллажи из нержавеющей стали, которые станут стильным и практичным решением для вашего интерьера. Прочные, долговечные и изготовленные по индивидуальным параметрам, наши стеллажи идеально впишутся в любой дом.';
  document.getElementById('lan46').innerHTML = 'Кресло';
  document.getElementById('lan47').innerHTML = 'Создайте неповторимую атмосферу уюта и стиля с нашим креслом из коллекции "Steel Comfort". Идеальное сочетание минималистичного дизайна и максимального комфорта. Прочная рама из нержавеющей стали обеспечивает долговечность, а мягкая обивка добавляет роскоши';
  document.getElementById('lan48').innerHTML = 'Кухенная система';
  document.getElementById('lan49').innerHTML = 'Создайте стильный и функциональный центр вашего дома с нашей кухонной системой из коллекции "Steel Gourmet". Этот минималистичный кухонный блок из нержавеющей стали и дерева идеально сочетает в себе элегантный дизайн и практичность.';
  // ************************************content3******************************************** \\
  document.getElementById('lan50').innerHTML = 'О нашей продукции';
  document.getElementById('lan51').innerHTML = 'Перила';
  document.getElementById('lan51_1').innerHTML = 'Перила';
  document.getElementById('lan52').innerHTML = 'Ограждения лестниц – обязательное условие для обеспечения безопасности. Среди большого ассортимента ограждающих конструкций широко востребованы лестничные перила и поручни из нержавеющей стали.<br> Это прочный материал, позволяющий создавать стойкие и надежные конструкции, которые практически не нуждаются в уходе и последующем ремонте, при этом имеют красивые внешние данные и идеально дополняют различные интерьерные стили.';
  document.getElementById('lan52_1').innerHTML = 'Ограждения лестниц – обязательное условие для обеспечения безопасности. Среди большого ассортимента ограждающих конструкций широко востребованы лестничные перила и поручни из нержавеющей стали.<br> Это прочный материал, позволяющий создавать стойкие и надежные конструкции, которые практически не нуждаются в уходе и последующем ремонте, при этом имеют красивые внешние данные и идеально дополняют различные интерьерные стили.';
  document.getElementById('lan53').innerHTML = 'Стулья';
  document.getElementById('lan54').innerHTML = 'Стулья из нержавеющей стали обладают исключительными эксплуатационными характеристиками. Стулья из нержавейки не ломаются под воздействием огромных нагрузок и служат потребителю неограниченно долго. <br> Ухаживать за стульями из нержавейки несложно: она моется без всяких усилий с применением воды и тряпки. Сиденья предлагаемых образцов могут быть мягкими либо изготовленными из дерева (у покупателя имеется шанс выбрать стулья из нержавейки в любом исполнении). Металлический каркас обеспечивает всей конструкции особую прочность.';
  document.getElementById('lan55').innerHTML = 'Шкафчики';
  document.getElementById('lan55_1').innerHTML = 'Шкафчики';
  document.getElementById('lan56').innerHTML = 'Шкафы для заведений общепита — важный элемент правильной организации кухонного пространства. Такое нейтральное оборудование предназначено для хранения крупногабаритной посуды, пищевых продуктов, которые не требуют заморозки или охлаждения, кухонного инвентаря. <br> Нейтральные шкафы могут использоваться как в горячем, так и в холодном цеху. В некоторых случаях их устанавливают в раздевалках и встраивают в раздаточную ленту или монтируют за барной стойкой. Мебель такой категории подходит для хранения продуктов и вещей. Благодаря своим свойствам, она защищает содержимое от жира, пара и образования конденсата, что актуально для кухонных помещений.';
  document.getElementById('lan56_1').innerHTML = 'Шкафы для заведений общепита — важный элемент правильной организации кухонного пространства. Такое нейтральное оборудование предназначено для хранения крупногабаритной посуды, пищевых продуктов, которые не требуют заморозки или охлаждения, кухонного инвентаря. <br> Нейтральные шкафы могут использоваться как в горячем, так и в холодном цеху. В некоторых случаях их устанавливают в раздевалках и встраивают в раздаточную ленту или монтируют за барной стойкой. Мебель такой категории подходит для хранения продуктов и вещей. Благодаря своим свойствам, она защищает содержимое от жира, пара и образования конденсата, что актуально для кухонных помещений.';
  document.getElementById('lan57').innerHTML = 'Стол';
  document.getElementById('lan58').innerHTML = 'Стол для кухни предприятий общепита. Используется для приготовления продуктов тк нержавеющая сталь легко моется и обрабатывается, соответствует требованиям. <br> Сплошная полка в комплекте позволяет использовать место для дополнительного хранения (полка устанавливается на 15 см от пола, что позволяет хранить на ней продукты). Ножки имеют регулировочные винты для устойчивой установки на неровных поверхностях';
  document.getElementById('lan59').innerHTML = 'Ванны моечные';
  document.getElementById('lan59_1').innerHTML = 'Ванны моечные';
  document.getElementById('lan60').innerHTML = 'Кухонный инвентарь изготовлен из высокотехнологичной стали толщиной 1,2 мм – 1,5 мм с отличной эксплуатационной характеристикой материала. Металлическая ванна обладает долговечностью и высоким прочностным запасом, инвентарь прост в санитарно-гигиенической обработке и имеет солидный облик. Абсолютная пожарная безопасность, стойкость к влаге, плесени и грибку делает изделие безопасным для применения в местах большого скопления людей. <br> Моечные зоны являются неотъемлемой частью общественных учреждений: столовых, санаториев, пансионатов, оздоровительных лагерей. Необходимость тщательной обработки большого количества посуды, овощей и фруктов вынуждает владельцев заведения подбирать функциональные и практичные изделия. Качественная ванна моечная из нержавеющей стали – это самое оптимальное решение для грамотного обустройства кухонных помещений промышленных масштабов или частных территорий.';
  document.getElementById('lan60_1').innerHTML = 'Кухонный инвентарь изготовлен из высокотехнологичной стали толщиной 1,2 мм – 1,5 мм с отличной эксплуатационной характеристикой материала. Металлическая ванна обладает долговечностью и высоким прочностным запасом, инвентарь прост в санитарно-гигиенической обработке и имеет солидный облик. Абсолютная пожарная безопасность, стойкость к влаге, плесени и грибку делает изделие безопасным для применения в местах большого скопления людей. <br> Моечные зоны являются неотъемлемой частью общественных учреждений: столовых, санаториев, пансионатов, оздоровительных лагерей. Необходимость тщательной обработки большого количества посуды, овощей и фруктов вынуждает владельцев заведения подбирать функциональные и практичные изделия. Качественная ванна моечная из нержавеющей стали – это самое оптимальное решение для грамотного обустройства кухонных помещений промышленных масштабов или частных территорий.';
  // ************************************content4******************************************** \\
  document.getElementById('lan61').innerHTML = 'Наши партнёры';
  document.getElementById('lan62').innerHTML = 'Закажите обратный звонок';
  document.getElementById('lan63').innerHTML = 'В течении 10 минут, наш менеджер свяжется с Вами';
  document.getElementById('lan64').placeholder = '*Ваше имя :';
  document.getElementById('lan65').placeholder = '*Телефон :';
  document.getElementById('lan66').placeholder = 'Комментарии :';
  document.getElementById('lan67').innerHTML = 'ОТПРАВИТЬ';
  // ************************************Footer******************************************** \\
  document.getElementById('lan68').innerHTML = 'Мы всегда на связи';
  document.getElementById('lan69').innerHTML = 'Телефон горячей линии:';
  document.getElementById('lan70').innerHTML = 'Адрес офиса:';
  document.getElementById('lan71').innerHTML = 'Узбекистан, P9XV+JV8, Buxoro, Buxoro Viloyati';
  
  // ************************************border******************************************** \\
  document.getElementById('uz').style.borderBottom = 'none';
  document.getElementById('ru').style.borderBottom = '1px solid rgb(255, 80, 243)';
  document.getElementById('eng').style.borderBottom = 'none';
})
document.getElementById('eng').addEventListener('click', () => {
  // ************************************Menyu******************************************** \\
  document.getElementById('lan').innerHTML = 'Home';
  document.getElementById('lan1').innerHTML = 'Our works';
  document.getElementById('lan2').innerHTML = 'About';
  document.getElementById('lan3').innerHTML = 'Contacts';
  document.getElementById('lan_1').innerHTML = 'Home';
  document.getElementById('lan1_1').innerHTML = 'Our works';
  document.getElementById('lan2_1').innerHTML = 'About';
  document.getElementById('lan3_1').innerHTML = 'Contacts';
  document.getElementById('lan4').innerHTML = 'Shop';
  document.getElementById('lan5').innerHTML = 'Feedback';
  document.getElementById('lan4_1').innerHTML = 'Office address:';
  document.getElementById('lan5_1').innerHTML = 'Uzbekistan, P9XV+JV8, Bukhara, Bukhara Region';
  // ************************************Header******************************************** \\
  document.getElementById('lan6').innerHTML = 'Stainless steel';
  document.getElementById('lan7').innerHTML = 'Innovation, Reliability, Durability';
  document.getElementById('lan8').innerHTML = 'Find out the price';
  // ************************************content******************************************** \\
  document.getElementById('lan9').innerHTML = 'About the Company';
  document.getElementById('lan10').innerHTML = 'Year of foundation of the exchange';
  document.getElementById('lan11').innerHTML = 'Clients per year';
  document.getElementById('lan12').innerHTML = 'Average years of experience of specialists';
  document.getElementById('lan13').innerHTML = 'Completed orders';
  document.getElementById('lan14').innerHTML = 'We create products that will stand the test of time and become an important part of your space. At DECOOROM STEEL, we believe that design should not only be beautiful, but also practical.';
  document.getElementById('lan15').innerHTML = 'Metal art for your space';
  document.getElementById('lan16').innerHTML = 'Every detail is a reflection of your style';
  document.getElementById('lan17').innerHTML = 'We create masterpieces from durable metal';
  document.getElementById('lan18').innerHTML = 'Metal that speaks for itself';
  document.getElementById('lan19').innerHTML = 'Style and functionality in every product';
  document.getElementById('lan20').innerHTML = 'We bring your ideas to life';
  document.getElementById('lan21').innerHTML = 'Creative solutions for bold projects';
  document.getElementById('lan22').innerHTML = 'Individuality in every line';
  document.getElementById('lan23').innerHTML = 'Your space is our metal';
  document.getElementById('lan24').innerHTML = 'Reliability and elegance in every product';
  document.getElementById('lan25').innerHTML = 'When metal meets art';
  document.getElementById('lan26').innerHTML = 'We transform metal into stylish solutions';
  document.getElementById('lan27').innerHTML = 'We create more than just products';
  document.getElementById('lan28').innerHTML = 'Your dreams are our reality';
  document.getElementById('lan29').innerHTML = 'Building the future with metal';
  document.getElementById('lan30').innerHTML = 'Design that impresses';
  document.getElementById('lan31').innerHTML = 'Metal that inspires';
  document.getElementById('lan32').innerHTML = 'The forge of your boldest ideas';
  document.getElementById('lan33').innerHTML = 'Stylish solutions for any space';
  document.getElementById('lan34').innerHTML = 'We create products that leave a mark';
  // ************************************content1******************************************** \\
  document.getElementById('lan35').innerHTML = 'Our advantages';
  document.getElementById('lan36').innerHTML = 'Only high quality';
  document.getElementById('lan37').innerHTML = 'FLEXIBLE';
  document.getElementById('lan38').innerHTML = 'Prices';
  document.getElementById('lan39').innerHTML = 'FAST';
  document.getElementById('lan40').innerHTML = 'Everything is exactly on time';
  document.getElementById('lan41').innerHTML = 'GUARANTEE';
  document.getElementById('lan42').innerHTML = 'Qualities';
  // ************************************content2******************************************** \\
  document.getElementById('lan43').innerHTML = 'Our products';
  document.getElementById('lan44').innerHTML = 'Stainless steel shelving';
  document.getElementById('lan45').innerHTML = 'Order stainless steel shelving units that will become a stylish and practical solution for your interior. Strong, durable and made to individual parameters, our shelving units will fit perfectly into any home.';
  document.getElementById('lan46').innerHTML = 'Armchair';
  document.getElementById('lan47').innerHTML = 'Create a unique atmosphere of coziness and style with our chair from the "Steel Comfort" collection. The perfect combination of minimalist design and maximum comfort. The durable stainless steel frame ensures durability, and the soft upholstery adds luxury';
  document.getElementById('lan48').innerHTML = 'Kitchen system';
  document.getElementById('lan49').innerHTML = 'Create a stylish and functional centerpiece for your home with our kitchen system from the Steel Gourmet collection. This minimalist kitchen unit made of stainless steel and wood perfectly combines elegant design and practicality.';
  // ************************************content3******************************************** \\
  document.getElementById('lan50').innerHTML = 'About our products';
  document.getElementById('lan51').innerHTML = 'Railings';
  document.getElementById('lan51_1').innerHTML = 'Railings';
  document.getElementById('lan52').innerHTML = 'Stair railings are a must for ensuring safety. Among the wide range of enclosing structures, stainless steel stair railings and handrails are in high demand.<br> This is a durable material that allows you to create durable and reliable structures that practically do not require maintenance and subsequent repairs, while having beautiful appearance and ideally complement various interior styles.';
  document.getElementById('lan52_1').innerHTML = 'Stair railings are a must for ensuring safety. Among the wide range of enclosing structures, stainless steel stair railings and handrails are in high demand.<br> This is a durable material that allows you to create durable and reliable structures that practically do not require maintenance and subsequent repairs, while having beautiful appearance and ideally complement various interior styles.';
  document.getElementById('lan53').innerHTML = 'Chairs';
  document.getElementById('lan54').innerHTML = 'Stainless steel chairs have exceptional performance characteristics. Stainless steel chairs do not break under the influence of enormous loads and serve the consumer indefinitely. <br> It is easy to care for stainless steel chairs: they can be washed without any effort using water and a rag. The seats of the proposed samples can be soft or made of wood (the buyer has the chance to choose stainless steel chairs in any design). The metal frame provides the entire structure with special strength.';
  document.getElementById('lan55').innerHTML = 'Lockers';
  document.getElementById('lan55_1').innerHTML = 'Lockers';
  document.getElementById('lan56').innerHTML = 'Cabinets for catering establishments are an important element of the correct organization of the kitchen space. Such neutral equipment is intended for storing large-sized dishes, food products that do not require freezing or cooling, kitchen utensils. <br> Neutral cabinets can be used both in hot and cold shops. In some cases, they are installed in changing rooms and built into the dispensing belt or mounted behind the bar counter. Furniture of this category is suitable for storing food and things. Due to its properties, it protects the contents from grease, steam and condensation, which is important for kitchens.';
  document.getElementById('lan56_1').innerHTML = 'Cabinets for catering establishments are an important element of the correct organization of the kitchen space. Such neutral equipment is intended for storing large-sized dishes, food products that do not require freezing or cooling, kitchen utensils. <br> Neutral cabinets can be used both in hot and cold shops. In some cases, they are installed in changing rooms and built into the dispensing belt or mounted behind the bar counter. Furniture of this category is suitable for storing food and things. Due to its properties, it protects the contents from grease, steam and condensation, which is important for kitchens.';
  document.getElementById('lan57').innerHTML = 'Table';
  document.getElementById('lan58').innerHTML = 'Table for the kitchen of catering establishments. It is used for food preparation because stainless steel is easy to clean and process, and meets the requirements. <br> A solid shelf in the set allows you to use the space for additional storage (the shelf is installed 15 cm from the floor, which allows you to store food on it). The legs have adjusting screws for stable installation on uneven surfaces';
  document.getElementById('lan59').innerHTML = 'Washing baths';
  document.getElementById('lan59_1').innerHTML = 'Washing baths';
  document.getElementById('lan60').innerHTML = 'Kitchen equipment is made of high-tech steel with a thickness of 1.2 mm - 1.5 mm with excellent performance characteristics of the material. The metal bath has durability and a high strength reserve, the equipment is easy to sanitize and has a solid appearance. Absolute fire safety, resistance to moisture, mold and mildew makes the product safe for use in crowded places. <br> Washing areas are an integral part of public institutions: canteens, sanatoriums, boarding houses, health camps. The need to carefully process a large number of dishes, vegetables and fruits forces the owners of the establishment to select functional and practical products. A high-quality stainless steel sink is the best solution for the competent arrangement of industrial-scale kitchens or private areas.';
  document.getElementById('lan60_1').innerHTML = 'Kitchen equipment is made of high-tech steel with a thickness of 1.2 mm - 1.5 mm with excellent performance characteristics of the material. The metal bath has durability and a high strength reserve, the equipment is easy to sanitize and has a solid appearance. Absolute fire safety, resistance to moisture, mold and mildew makes the product safe for use in crowded places. <br> Washing areas are an integral part of public institutions: canteens, sanatoriums, boarding houses, health camps. The need to carefully process a large number of dishes, vegetables and fruits forces the owners of the establishment to select functional and practical products. A high-quality stainless steel sink is the best solution for the competent arrangement of industrial-scale kitchens or private areas.';
  // ************************************content4******************************************** \\
  document.getElementById('lan61').innerHTML = 'Our partners';
  document.getElementById('lan62').innerHTML = 'Request a call back';
  document.getElementById('lan63').innerHTML = 'Within 10 minutes, our manager will contact you.';
  document.getElementById('lan64').placeholder = '*Your name :';
  document.getElementById('lan65').placeholder = '*Telephone :';
  document.getElementById('lan66').placeholder = 'Comments :';
  document.getElementById('lan67').innerHTML = 'SEND';
  // ************************************Footer******************************************** \\
  document.getElementById('lan68').innerHTML = 'We are always in touch';
  document.getElementById('lan69').innerHTML = 'Hotline number:';
  document.getElementById('lan70').innerHTML = 'Office address:';
  document.getElementById('lan71').innerHTML = 'Uzbekistan, P9XV+JV8, Bukhara, Bukhara Region';
  
  // ************************************border******************************************** \\
  document.getElementById('uz').style.borderBottom = 'none';
  document.getElementById('ru').style.borderBottom = 'none';
  document.getElementById('eng').style.borderBottom = '1px solid rgb(255, 80, 243)';
})
