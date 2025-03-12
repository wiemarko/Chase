document.addEventListener('DOMContentLoaded', async function () {
    const usdElement = document.getElementById('usd');
    const eurElement = document.getElementById('eur');
    const onsElement = document.getElementById('ons');
    const graElement = document.getElementById('gra');
    const ceyElement = document.getElementById('cey');
    const yarElement = document.getElementById('yar');
    const tamElement = document.getElementById('tam');
    const cumElement = document.getElementById('cum');
    const gbpElement = document.getElementById('gbp');
    const chfElement = document.getElementById('chf');
    const rubElement = document.getElementById('rub');
    const nokElement = document.getElementById('nok');
    const aedElement = document.getElementById('aed');
    const audElement = document.getElementById('aud');
    const sekElement = document.getElementById('sek');
    const jpyElement = document.getElementById('jpy');
    const kwdElement = document.getElementById('kwd');
    const bhdElement = document.getElementById('bhd');
    const sarElement = document.getElementById('sar');
    const dkkElement = document.getElementById('dkk');
    const ırrElement = document.getElementById('ırr');

    try {
      await fetchAndUpdateData(); // İlk veri çekme
    } catch (error) {
      console.error('Hata:', error);
      usdElement.textContent = 'Veri yüklenemedi';
      eurElement.textContent = 'Veri yüklenemedi';
      graElement.textContent = 'Veri yüklenemedi';
      onsElement.textContent = 'Veri yüklenemedi';
      ceyElement.textContent = 'Veri yüklenemedi';
      yarElement.textContent = 'Veri yüklenemedi';
      tamElement.textContent = 'Veri yüklenemedi';
      cumElement.textContent = 'Veri yüklenemedi';
      gbpElement.textContent = 'Veri yüklenemedi';
      chfElement.textContent = 'Veri yüklenemedi';
      rubElement.textContent = 'Veri yüklenemedi';
      nokElement.textContent = 'Veri yüklenemedi';
      aedElement.textContent = 'Veri yüklenemedi';
      audElement.textContent = 'Veri yüklenemedi';
      sekElement.textContent = 'Veri yüklenemedi';
      jpyElement.textContent = 'Veri yüklenemedi';
      kwdElement.textContent = 'Veri yüklenemedi';
      bhdElement.textContent = 'Veri yüklenemedi';
      sarElement.textContent = 'Veri yüklenemedi';
      dkkElement.textContent = 'Veri yüklenemedi';
      ırrElement.textContent = 'Veri yüklenemedi';
    }
  });

  // Veriyi 5 saniyede bir güncelleme
  setInterval(fetchAndUpdateData, 5000);

  // Veri çekme ve güncelleme işlemi
  async function fetchAndUpdateData() {
    try {
      const response = await fetch('https://finans.truncgil.com/v4/today.json');
      const data = await response.json();

      // Dolar ve Euro verilerini al ve 2 basamağa yuvarla
      const usdBuying = parseFloat(data.USD.Buying).toFixed(2);
      const eurBuying = parseFloat(data.EUR.Buying).toFixed(2);
      const onsBuying = parseFloat(data.ONS.Buying).toFixed(2);
      const graBuying = parseFloat(data.GRA.Buying).toFixed(2);
      const ceyBuying = parseFloat(data.CEY.Buying).toFixed(2);
      const yarBuying = parseFloat(data.YAR.Buying).toFixed(2);
      const tamBuying = parseFloat(data.TAM.Buying).toFixed(2);
      const cumBuying = parseFloat(data.CUM.Buying).toFixed(2);
      const gbpBuying = parseFloat(data.GBP.Buying).toFixed(2);
      const chfBuying = parseFloat(data.CHF.Buying).toFixed(2);
      const rubBuying = parseFloat(data.RUB.Buying).toFixed(2);
      const nokBuying = parseFloat(data.NOK.Buying).toFixed(2);
      const aedBuying = parseFloat(data.AED.Buying).toFixed(2);
      const audBuying = parseFloat(data.AUD.Buying).toFixed(2);
      const sekBuying = parseFloat(data.SEK.Buying).toFixed(2);
      const jpyBuying = parseFloat(data.JPY.Buying).toFixed(4);
      const kwdBuying = parseFloat(data.KWD.Buying).toFixed(2);
      const bhdBuying = parseFloat(data.BHD.Buying).toFixed(2);
      const sarBuying = parseFloat(data.SAR.Buying).toFixed(2);
      const dkkBuying = parseFloat(data.DKK.Buying).toFixed(2);
      const ırrBuying = parseFloat(data.IRR.Buying).toFixed(5);


      // HTML'deki elemanları güncelle
      document.getElementById('usd').textContent = `Dolar: ${usdBuying} TRY`;
      document.getElementById('eur').textContent = `Euro: ${eurBuying} TRY`;
      document.getElementById('ons').textContent = `Altın: ${onsBuying} TRY`;
      document.getElementById('gra').textContent = `Gram Altın: ${graBuying} TRY`;
      document.getElementById('cey').textContent = `Çeyrek Altın: ${ceyBuying} TRY`;
      document.getElementById('yar').textContent = `Yarım Altın: ${yarBuying} TRY`;
      document.getElementById('tam').textContent = `Tam Altın: ${tamBuying} TRY`;
      document.getElementById('cum').textContent = `Cumhuriyet Altını: ${cumBuying} TRY`;
      document.getElementById('gbp').textContent = `İngiliz Sterlini: ${gbpBuying} TRY`;
      document.getElementById('chf').textContent = `İsviçre Frangı: ${chfBuying} TRY`;
      document.getElementById('rub').textContent = `Rus Rublesi: ${rubBuying} TRY`;
      document.getElementById('nok').textContent = `Norveç Kronu: ${nokBuying} TRY`;
      document.getElementById('aed').textContent = `Birleşik Arap Emirlikleri: ${aedBuying} TRY`;
      document.getElementById('aud').textContent = `Avustralya Doları: ${audBuying} TRY`;
      document.getElementById('sek').textContent = `İsveç Kronu: ${sekBuying} TRY`;
      document.getElementById('jpy').textContent = `Japon Yeni: ${jpyBuying} TRY`;
      document.getElementById('kwd').textContent = `Kuveyt Dinarı: ${kwdBuying} TRY`;
      document.getElementById('bhd').textContent = `Bahreyn Dinarı: ${bhdBuying} TRY`;
      document.getElementById('sar').textContent = `Suudi Arabistan Riyali: ${sarBuying} TRY`;
      document.getElementById('dkk').textContent = `Danimarka Kronu: ${dkkBuying} TRY`;
      document.getElementById('ırr').textContent = `İran Riyali: ${ırrBuying} TRY`;


    } catch (error) {
      console.error('Veri çekme hatası:', error);
      document.getElementById('usd').textContent = 'Dolar: Veri bulunamadı TRY';
      document.getElementById('eur').textContent = 'Euro: Veri bulunamadı TRY';
      document.getElementById('ons').textContent = 'Altın: Veri bulunamadı TRY';
      document.getElementById('gra').textContent = 'Gram Altın: Veri bulunamadı TRY';
      document.getElementById('cey').textContent = 'Çeyrek Altın: Veri bulunamadı TRY';
      document.getElementById('gbp').textContent = 'İngiliz Sterlini: Veri bulunamadı TRY';
      document.getElementById('chf').textContent = 'İsviçre Frangı: Veri bulunamadı TRY';
      document.getElementById('rub').textContent = 'Rus Rublesi: Veri bulunamadı TRY';
      document.getElementById('nok').textContent = 'Norveç Kronu: Veri bulunamadı TRY';
      document.getElementById('aed').textContent = 'Birleşik Arap Emirlikleri: Veri bulunamadı TRY';
      document.getElementById('aud').textContent = 'Avustralya Doları: Veri bulunamadı TRY';
      document.getElementById('sek').textContent = 'İsveç Kronu: Veri bulunamadı TRY';
      document.getElementById('jpy').textContent = 'Japon Yeni: Veri bulunamadı TRY';
      document.getElementById('kwd').textContent = 'Kuveyt Dinarı: Veri bulunamadı TRY';
      document.getElementById('bhd').textContent = 'Bahreyn Dinarı: Veri bulunamadı TRY';
      document.getElementById('sar').textContent = 'Suudi Arabistan Riyali: Veri bulunamadı TRY';
      document.getElementById('dkk').textContent = 'Danimarka Kronu: Veri bulunamadı TRY';
      document.getElementById('ırr').textContent = 'İran Riyali: Veri bulunamadı TRY';
    }
  }