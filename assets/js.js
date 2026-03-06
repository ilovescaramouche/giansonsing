const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
function loadLesson(num) {
    const contentBox = document.getElementById("lessonContent");

    switch (num) {
        case 1:
            contentBox.innerHTML = `
        <h2>Lesson 1: Mga Konsepto ng Pambansang Kaunlaran</h2>
        <ul>
          <li>Pagbabago – proseso ng pag-iiba sa lipunan at ekonomiya</li>
          <li>Pag-unlad – pagbabago tungo sa mataas na antas ng pamumuhay</li>
          <li>Pagsulong – pag-usad tungo sa layunin, pagpapaunlad ng kakayahan</li>
          <li>Ebolusyon – pagbabago sa loob ng mahabang panahon</li>
        </ul>
      `;
            break;

        case 2:
            contentBox.innerHTML = `
        <h2>Lesson 2: Dalawang Konsepto ng Pag-unlad (Todaro & Smith, 2012)</h2>
        <ul>
          <li>Tradisyunal – patuloy na pagtaas ng income per capita</li>
          <li>Makabago – malawakang pagbabago sa buong sistemang panlipunan</li>
        </ul>
      `;
            break;

        case 3:
            contentBox.innerHTML = `
        <h2>Lesson 3: Mga Salik at Palatandaan ng Pag-unlad</h2>
        <h3>Mga Salik</h3>
        <ul>
          <li>Likas na yaman</li>
          <li>Yamang-tao</li>
          <li>Kapital</li>
          <li>Teknolohiya at Inobasyon</li>
        </ul>
        <h3>Mga Palatandaan</h3>
        <ul>
          <li>Makatwiran at dinamikong kaayusan ng panlipunan</li>
          <li>Kasaganaan at kasarinlan</li>
          <li>Kalayaan sa kahirapan, hanapbuhay para sa lahat</li>
          <li>Sapat na mga lingkurang panlipunan</li>
          <li>Katarungang panlipunan</li>
        </ul>
      `;
            break;

        case 4:
            contentBox.innerHTML = `
        <h2>Lesson 4: Antas ng Kaunlaran ng Bansa</h2>
        <ul>
          <li>Maunlad na Bansa – mataas na GDP, income per capita, HDI</li>
          <li>Umuunlad na Bansa – may industriyang pinauunlad, hindi pantay ang GDP at HDI</li>
          <li>Papaunlad na Bansa – mababang antas ng agrikultura, GDP, income per capita, HDI</li>
        </ul>
      `;
            break;

        case 5:
            contentBox.innerHTML = `
        <h2>Lesson 5: Mga Tungkulin at Gampanin ng Mamamayan</h2>
        <h3>Tungkulin</h3>
        <ul>
          <li>Suportahan ang pamahalaan</li>
          <li>Sundin at igalang ang batas</li>
          <li>Alagaan ang kapaligiran</li>
          <li>Tumulong sa pagpuksa sa korapsyon</li>
          <li>Maging produktibo</li>
          <li>Tangkilikin ang produktong Pilipino</li>
        </ul>
        <h3>Gampanin</h3>
        <ul>
          <li>Pagbabayad ng buwis</li>
          <li>Tamang pagboto</li>
          <li>Pagnenegosyo at kooperatiba</li>
          <li>Pakikilahok sa pamamahala</li>
        </ul>
      `;
            break;

        case 6:
            contentBox.innerHTML = `
        <h2>Lesson 6: Agrikultura</h2>
        <p>Isang agham at sining na may kinalaman sa pagpaparami ng mga hayop at halaman.</p>
        <h3>Mga Gawain</h3>
        <ul>
          <li>Pagsasaka</li>
          <li>Pangingisda</li>
          <li>Paghahayupan</li>
          <li>Paggugubat</li>
        </ul>
        <h3>Kahalagahan</h3>
        <ul>
          <li>Pinagmumulan ng pagkain</li>
          <li>Hilaw na materyales</li>
          <li>Trabaho para sa Pilipino</li>
          <li>Dolyar para sa bansa</li>
        </ul>
      `;
            break;

        case 7:
            contentBox.innerHTML = `
        <h2>Lesson 7: Industriya</h2>
        <p>Tumutukoy sa pagproseso ng hilaw na materyal at paggawa ng produkto.</p>
        <h3>Sub-sektor</h3>
        <ul>
          <li>Pagmimina</li>
          <li>Pagmamanupaktura</li>
          <li>Konstruksyon</li>
          <li>Utilities</li>
        </ul>
      `;
            break;

        case 8:
            contentBox.innerHTML = `
        <h2>Lesson 8: Sektor ng Paglilingkod</h2>
        <p>Ang sektor na umaalalay sa produksyon, distribusyon, kalakalan, at pagkonsumo ng mga produkto sa loob o labas ng bansa.</p>
        <h3>Pormal na Sektor</h3>
        <ul>
          <li>Transportasyon, komunikasyon, imbakan</li>
          <li>Kalakalan</li>
          <li>Pananalapi (bangko, insurance, pamumuhunan)</li>
          <li>Paupahang bahay at real estate</li>
          <li>Paglilingkod ng pribado at pampubliko</li>
        </ul>
        <h3>Mga Ahensiya</h3>
        <ul>
          <li>DOLE – pangangalaga sa manggagawa</li>
          <li>OWWA – kapakanan ng OFW</li>
          <li>POEA – programa sa trabaho abroad</li>
          <li>TESDA – pagsasanay at kasanayan</li>
          <li>PRC – propesyonal na manggagawa</li>
          <li>CHED – pamantasan at kolehiyo</li>
        </ul>
        <h3>Mga Batas</h3>
        <ul>
          <li>Holiday Pay, Overtime Pay, Night Shift Differential</li>
          <li>RA 6727 – Wage Rationalization Act</li>
          <li>RA 1161 – Maternity Leave</li>
          <li>RA 8187 – Paternity Leave</li>
          <li>PD 851 – 13th Month Pay</li>
        </ul>
      `;
            break;

        case 9:
            contentBox.innerHTML = `
        <h2>Lesson 9: Impormal na Sektor</h2>
        <p>Sektor ng ekonomiya na walang pormal na dokumento o rehistro, kilala rin bilang underground economy.</p>
        <h3>Halimbawa</h3>
        <ul>
          <li>Nagtitinda sa kalsada</li>
          <li>Pedicab driver</li>
          <li>Karpintero</li>
          <li>Hindi rehistradong pampublikong sasakyan</li>
        </ul>
        <h3>Katangian</h3>
        <ul>
          <li>Hindi nakarehistro sa pamahalaan</li>
          <li>Hindi nagbabayad ng buwis</li>
          <li>Walang legal na balangkas</li>
        </ul>
        <h3>Kahalagahan</h3>
        <ul>
          <li>Sinasalo ang mamamayan na walang regular na trabaho</li>
          <li>Nagbibigay ng pagkakataon sa hanapbuhay</li>
          <li>Mura ang produkto at serbisyo</li>
        </ul>
        <h3>Mga Batas at Programa</h3>
        <ul>
          <li>RA 8425 – Social Reform and Poverty Alleviation Act</li>
          <li>RA 9710 – Magna Carta of Women</li>
          <li>PD 422 – Labor Code</li>
          <li>RA 7796 – TESDA Act</li>
          <li>RA 8282 – Social Security Act</li>
          <li>RA 7875 – National Health Insurance Act</li>
          <li>4Ps, DILP, SEA-K, ISLA, Cash-for-Work</li>
        </ul>
      `;
            break;

        case 10:
            contentBox.innerHTML = `
        <h2>Lesson 10: Kalakalang Panlabas</h2>
        <p>Palitan ng produkto at serbisyo sa pagitan ng mga bansa. Walang bansa ang kayang tugunan ang lahat ng pangangailangan nang walang tulong mula sa iba.</p>
        <h3>Uri</h3>
        <ul>
          <li>Bilateral – 2 bansa</li>
          <li>Bloc – organisasyon at bansa (APEC, ASEAN)</li>
        </ul>
        <h3>Dahilan</h3>
        <ul>
          <li>Pagkakaiba ng teknolohiya</li>
          <li>Pagkakaiba sa yaman</li>
          <li>Pagkakaiba sa panlasa</li>
          <li>Pagkakaiba sa halaga ng produksyon</li>
        </ul>
        <h3>Patakaran</h3>
        <ul>
          <li>Taripa – buwis sa inaangkat</li>
          <li>Kota – limitasyon sa produkto</li>
          <li>Subsidy – tulong ng gobyerno</li>
        </ul>
        <h3>Mga Organisasyon</h3>
        <ul>
          <li>WTO – World Trade Organization</li>
          <li>APEC – Asia-Pacific Economic Council</li>
          <li>ASEAN – Association of Southeast Asian Nations</li>
        </ul>
        <h3>Kabutihan</h3>
        <ul>
          <li>Mas maraming produkto sa pamilihan</li>
          <li>Mas mataas ang kalidad</li>
          <li>Lumalawak ang pamilihan</li>
        </ul>
        <h3>Di-kabutihan</h3>
        <ul>
          <li>Pagiging palaasa sa imported</li>
          <li>Pagkawala ng sariling pagkakakilanlan</li>
        </ul>
      `;
            break;
    }
}
