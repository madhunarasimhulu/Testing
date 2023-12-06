const currencyCodes = [
  {
    code: 'AED',
    number: '784',
  },
  {
    code: 'AFN',
    number: '971',
  },
  {
    code: 'ALL',
    number: '008',
  },
  {
    code: 'AMD',
    number: '051',
  },
  {
    code: 'ANG',
    number: '532',
  },
  {
    code: 'AOA',
    number: '973',
  },
  {
    code: 'ARS',
    number: '032',
  },
  {
    code: 'AUD',
    number: '036',
  },
  {
    code: 'AWG',
    number: '533',
  },
  {
    code: 'AZN',
    number: '944',
  },
  {
    code: 'BAM',
    number: '977',
  },
  {
    code: 'BBD',
    number: '052',
  },
  {
    code: 'BDT',
    number: '050',
  },
  {
    code: 'BGN',
    number: '975',
  },
  {
    code: 'BHD',
    number: '048',
  },
  {
    code: 'BIF',
    number: '108',
  },
  {
    code: 'BMD',
    number: '060',
  },
  {
    code: 'BND',
    number: '096',
  },
  {
    code: 'BOB',
    number: '068',
  },
  {
    code: 'BOV',
    number: '984',
  },
  {
    code: 'BRL',
    number: '986',
  },
  {
    code: 'BSD',
    number: '044',
  },
  {
    code: 'BTN',
    number: '064',
  },
  {
    code: 'BWP',
    number: '072',
  },
  {
    code: 'BYR',
    number: '974',
  },
  {
    code: 'BZD',
    number: '084',
  },
  {
    code: 'CAD',
    number: '124',
  },
  {
    code: 'CDF',
    number: '976',
  },
  {
    code: 'CHE',
    number: '947',
  },
  {
    code: 'CHF',
    number: '756',
  },
  {
    code: 'CHW',
    number: '948',
  },
  {
    code: 'CLF',
    number: '990',
  },
  {
    code: 'CLP',
    number: '152',
  },
  {
    code: 'CNY',
    number: '156',
  },
  {
    code: 'COP',
    number: '170',
  },
  {
    code: 'COU',
    number: '970',
  },
  {
    code: 'CRC',
    number: '188',
  },
  {
    code: 'CUC',
    number: '931',
  },
  {
    code: 'CUP',
    number: '192',
  },
  {
    code: 'CVE',
    number: '132',
  },
  {
    code: 'CZK',
    number: '203',
  },
  {
    code: 'DJF',
    number: '262',
  },
  {
    code: 'DKK',
    number: '208',
  },
  {
    code: 'DOP',
    number: '214',
  },
  {
    code: 'DZD',
    number: '012',
  },
  {
    code: 'EGP',
    number: '818',
  },
  {
    code: 'ERN',
    number: '232',
  },
  {
    code: 'ETB',
    number: '230',
  },
  {
    code: 'EUR',
    number: '978',
  },
  {
    code: 'FJD',
    number: '242',
  },
  {
    code: 'FKP',
    number: '238',
  },
  {
    code: 'GBP',
    number: '826',
  },
  {
    code: 'GEL',
    number: '981',
  },
  {
    code: 'GHS',
    number: '936',
  },
  {
    code: 'GIP',
    number: '292',
  },
  {
    code: 'GMD',
    number: '270',
  },
  {
    code: 'GNF',
    number: '324',
  },
  {
    code: 'GTQ',
    number: '320',
  },
  {
    code: 'GYD',
    number: '328',
  },
  {
    code: 'HKD',
    number: '344',
  },
  {
    code: 'HNL',
    number: '340',
  },
  {
    code: 'HRK',
    number: '191',
  },
  {
    code: 'HTG',
    number: '332',
  },
  {
    code: 'HUF',
    number: '348',
  },
  {
    code: 'IDR',
    number: '360',
  },
  {
    code: 'ILS',
    number: '376',
  },
  {
    code: 'INR',
    number: '356',
  },
  {
    code: 'IQD',
    number: '368',
  },
  {
    code: 'IRR',
    number: '364',
  },
  {
    code: 'ISK',
    number: '352',
  },
  {
    code: 'JMD',
    number: '388',
  },
  {
    code: 'JOD',
    number: '400',
  },
  {
    code: 'JPY',
    number: '392',
  },
  {
    code: 'KES',
    number: '404',
  },
  {
    code: 'KGS',
    number: '417',
  },
  {
    code: 'KHR',
    number: '116',
  },
  {
    code: 'KMF',
    number: '174',
  },
  {
    code: 'KPW',
    number: '408',
  },
  {
    code: 'KRW',
    number: '410',
  },
  {
    code: 'KWD',
    number: '414',
  },
  {
    code: 'KYD',
    number: '136',
  },
  {
    code: 'KZT',
    number: '398',
  },
  {
    code: 'LAK',
    number: '418',
  },
  {
    code: 'LBP',
    number: '422',
  },
  {
    code: 'LKR',
    number: '144',
  },
  {
    code: 'LRD',
    number: '430',
  },
  {
    code: 'LSL',
    number: '426',
  },
  {
    code: 'LTL',
    number: '440',
  },
  {
    code: 'LVL',
    number: '428',
  },
  {
    code: 'LYD',
    number: '434',
  },
  {
    code: 'MAD',
    number: '504',
  },
  {
    code: 'MDL',
    number: '498',
  },
  {
    code: 'MGA',
    number: '969',
  },
  {
    code: 'MKD',
    number: '807',
  },
  {
    code: 'MMK',
    number: '104',
  },
  {
    code: 'MNT',
    number: '496',
  },
  {
    code: 'MOP',
    number: '446',
  },
  {
    code: 'MRO',
    number: '478',
  },
  {
    code: 'MUR',
    number: '480',
  },
  {
    code: 'MVR',
    number: '462',
  },
  {
    code: 'MWK',
    number: '454',
  },
  {
    code: 'MXN',
    number: '484',
  },
  {
    code: 'MXV',
    number: '979',
  },
  {
    code: 'MYR',
    number: '458',
  },
  {
    code: 'MZN',
    number: '943',
  },
  {
    code: 'NAD',
    number: '516',
  },
  {
    code: 'NGN',
    number: '566',
  },
  {
    code: 'NIO',
    number: '558',
  },
  {
    code: 'NOK',
    number: '578',
  },
  {
    code: 'NPR',
    number: '524',
  },
  {
    code: 'NZD',
    number: '554',
  },
  {
    code: 'OMR',
    number: '512',
  },
  {
    code: 'PAB',
    number: '590',
  },
  {
    code: 'PEN',
    number: '604',
  },
  {
    code: 'PGK',
    number: '598',
  },
  {
    code: 'PHP',
    number: '608',
  },
  {
    code: 'PKR',
    number: '586',
  },
  {
    code: 'PLN',
    number: '985',
  },
  {
    code: 'PYG',
    number: '600',
  },
  {
    code: 'QAR',
    number: '634',
  },
  {
    code: 'RON',
    number: '946',
  },
  {
    code: 'RSD',
    number: '941',
  },
  {
    code: 'RUB',
    number: '643',
  },
  {
    code: 'RWF',
    number: '646',
  },
  {
    code: 'SAR',
    number: '682',
  },
  {
    code: 'SBD',
    number: '090',
  },
  {
    code: 'SCR',
    number: '690',
  },
  {
    code: 'SDG',
    number: '938',
  },
  {
    code: 'SEK',
    number: '752',
  },
  {
    code: 'SGD',
    number: '702',
  },
  {
    code: 'SHP',
    number: '654',
  },
  {
    code: 'SLL',
    number: '694',
  },
  {
    code: 'SOS',
    number: '706',
  },
  {
    code: 'SRD',
    number: '968',
  },
  {
    code: 'SSP',
    number: '728',
  },
  {
    code: 'STD',
    number: '678',
  },
  {
    code: 'SYP',
    number: '760',
  },
  {
    code: 'SZL',
    number: '748',
  },
  {
    code: 'THB',
    number: '764',
  },
  {
    code: 'TJS',
    number: '972',
  },
  {
    code: 'TMT',
    number: '934',
  },
  {
    code: 'TND',
    number: '788',
  },
  {
    code: 'TOP',
    number: '776',
  },
  {
    code: 'TRY',
    number: '949',
  },
  {
    code: 'TTD',
    number: '780',
  },
  {
    code: 'TWD',
    number: '901',
  },
  {
    code: 'TZS',
    number: '834',
  },
  {
    code: 'UAH',
    number: '980',
  },
  {
    code: 'UGX',
    number: '800',
  },
  {
    code: 'USD',
    number: '840',
  },
  {
    code: 'USN',
    number: '997',
  },
  {
    code: 'USS',
    number: '998',
  },
  {
    code: 'UYI',
    number: '940',
  },
  {
    code: 'UYU',
    number: '858',
  },
  {
    code: 'UZS',
    number: '860',
  },
  {
    code: 'VEF',
    number: '937',
  },
  {
    code: 'VND',
    number: '704',
  },
  {
    code: 'VUV',
    number: '548',
  },
  {
    code: 'WST',
    number: '882',
  },
  {
    code: 'XAF',
    number: '950',
  },
  {
    code: 'XAG',
    number: '961',
  },
  {
    code: 'XAU',
    number: '959',
  },
  {
    code: 'XBA',
    number: '955',
  },
  {
    code: 'XBB',
    number: '956',
  },
  {
    code: 'XBC',
    number: '957',
  },
  {
    code: 'XBD',
    number: '958',
  },
  {
    code: 'XBT',
  },
  {
    code: 'XCD',
    number: '951',
  },
  {
    code: 'XDR',
    number: '960',
  },
  {
    code: 'XFU',
  },
  {
    code: 'XOF',
    number: '952',
  },
  {
    code: 'XPD',
    number: '964',
  },
  {
    code: 'XPF',
    number: '953',
  },
  {
    code: 'XPT',
    number: '962',
  },
  {
    code: 'XTS',
    number: '963',
  },
  {
    code: 'XXX',
    number: '999',
  },
  {
    code: 'YER',
    number: '886',
  },
  {
    code: 'ZAR',
    number: '710',
  },
  {
    code: 'ZMW',
    number: '967',
  },
];

export default currencyCodes;
