let previousValues = {
  usd: null,
  eur: null,
  ons: null,
  gra: null,
  cey: null,
  yar: null,
  tam: null,
  cum: null,
  gbp: null,
  chf: null,
  rub: null,
  nok: null,
  aed: null,
  aud: null,
  sek: null,
  jpy: null,
  kwd: null,
  bhd: null,
  sar: null,
  dkk: null,
  ırr: null
};



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


      updateElement('usd', usdBuying, `Dolar: ${usdBuying} TRY`);
      updateElement('eur', eurBuying, `Euro: ${eurBuying} TRY`);
      updateElement('ons', onsBuying, `Altın: ${onsBuying} TRY`);
      updateElement('gra', graBuying, `Gram Altın: ${graBuying} TRY`);
      updateElement('cey', ceyBuying, `Çeyrek Altın: ${ceyBuying} TRY`);
      updateElement('yar', yarBuying, `Yarım Altın: ${yarBuying} TRY`);
      updateElement('tam', tamBuying, `Tam Altın: ${tamBuying} TRY`);
      updateElement('cum', cumBuying, `Cumhuriyet Altını: ${cumBuying} TRY`);
      updateElement('gbp', gbpBuying, `İngiliz Sterlini: ${gbpBuying} TRY`);
      updateElement('chf', chfBuying, `İsviçre Frangı: ${chfBuying} TRY`);
      updateElement('rub', rubBuying, `Rus Rublesi: ${rubBuying} TRY`);
      updateElement('nok', nokBuying, `Norveç Kronu: ${nokBuying} TRY`);
      updateElement('aed', aedBuying, `Birleşik Arap Emirlikleri: ${aedBuying} TRY`);
      updateElement('aud', audBuying, `Avustralya Doları: ${audBuying} TRY`);
      updateElement('sek', sekBuying, `İsveç Kronu: ${sekBuying} TRY`);
      updateElement('jpy', jpyBuying, `Japon Yeni: ${jpyBuying} TRY`);
      updateElement('kwd', kwdBuying, `Kuveyt Dinarı: ${kwdBuying} TRY`);
      updateElement('bhd', bhdBuying, `Bahreyn Dinarı: ${bhdBuying} TRY`);
      updateElement('sar', sarBuying, `Suudi Arabistan Riyali: ${sarBuying} TRY`);
      updateElement('dkk', dkkBuying, `Danimarka Kronu: ${dkkBuying} TRY`);
      updateElement('ırr', ırrBuying, `İran Riyali: ${ırrBuying} TRY`);

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


function updateElement(id, newValue, text) {
  const element = document.getElementById(id);
  const oldValue = previousValues[id];

  element.textContent = text;


  if (oldValue !== null) {
      if (newValue > oldValue) {
          element.classList.remove('decrease');
          element.classList.add('increase'); // Yeşil
      } else if (newValue < oldValue) {
          element.classList.remove('increase');
          element.classList.add('decrease'); // Kırmızı
      } else {

          element.classList.remove('increase', 'decrease');
      }
  }


  previousValues[id] = newValue;
}

window.onload = function () {
  setTimeout(function () {
      document.getElementById('loading-page').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
  }, 3500); // 3.5 saniye
};

lottie.loadAnimation({
  container: document.getElementById('lottie-loader'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets9.lottiefiles.com/packages/lf20_raiw2hpe.json'
});


