const transactions = {
  'transactions.reported': 'Reported',
  'transactions.noTrasaction': 'No transactions were found.',
  'transactions.noTrasactionForDate':
    'No transactions were found for the selected date.',
  'transactions.reportIssue': 'Report an issue',

  'transactions.error':
    'Something went wrong while fetching transactions. Please try again later.',

  'transaction.error': 'Something went wrong. Please try again later.',

  'transactions.entryMode.MANUAL': 'MANUAL',
  'transactions.entryMode.CHIP': 'CHIP',
  'transactions.entryMode.CONTACTLESS': 'CONTACTLESS',
  'transactions.entryMode.ECOMMERCE': 'ECOMMERCE',
  'transactions.entryMode.MAGNETSTRIP': 'MAGNETIC STRIPE',
  'transactions.entryMode.OTHERS': 'OTHERS',
  'transactions.entryMode.CARDONFILE': 'CARDONFILE',

  'transactions.details.card': 'Card',
  'transactions.details.physical': 'Physical',

  'transactions.cancelInvoiceInstallment': 'Cancel Invoice Installment',
  'transactions.advanceInvoiceInstallment': 'Advance Invoice Installment',

  'transactions.category.HEALTH': 'Health',
  'transactions.category.AGRICULTURE': 'Agriculture',
  'transactions.category.SERVICES': 'Services',
  'transactions.category.HOME': 'Home',
  'transactions.category.GENERAL': 'General',
  'transactions.category.AIRLINE': 'Airline',
  'transactions.category.CAR RENTAL': 'Car Rental',
  'transactions.category.HOTEL': 'Hotel',
  'transactions.category.TRANSPORT': 'Transport',
  'transactions.category.CRUISE': 'Cruise',
  'transactions.category.TRAVEL': 'Travel',
  'transactions.category.UTILITIES': 'Utilities',
  'transactions.category.MONEY': 'Money',
  'transactions.category.SUPPLIES': 'Supplies',
  'transactions.category.DRUGSTORE': 'Drugstore',
  'transactions.category.RETAIL': 'Retail',
  'transactions.category.FUEL': 'Fuel',
  'transactions.category.AUTOMOBILE': 'Automobile',
  'transactions.category.WHOLESALE': 'Wholesale',
  'transactions.category.DUTY FREE': 'Duty Free',
  'transactions.category.SUPERMARKET': 'Supermarket',
  'transactions.category.ELETRONICS': 'Eletronics',
  'transactions.category.FOOD': 'Food',
  'transactions.category.DIGITAL': 'Digital',
  'transactions.category.JEWELRY': 'Jewelry',
  'transactions.category.DIRECT SALES': 'Direct sales',
  'transactions.category.RENTAL': 'Rental',
  'transactions.category.PARKING': 'Parking',
  'transactions.category.LOTTERY': 'Lottey',
  'transactions.category.GAMBLING': 'Gambling',
  'transactions.category.ENTERTAINMENT': 'Entretainment',
  'transactions.category.SCHOOL': 'School',
  'transactions.category.ASSOCIATIONS': 'Associations',
  'transactions.category.FEES & FINES': 'Fees & Fines',

  'transactions.debit.TEF CASH IN TERCEIROS': 'TEF send to third parties',
  'transactions.debit.COMPRA A VISTA': 'Buy cash',
  'transactions.debit.COMPRA INTERNACIONAL': 'International buy',
  'transactions.debit.DEBITO PAGAMENTO': 'Invoice payment',
  'transactions.debit.PARCELADO SEM JUROS':
    'Interest-free installment purchase',
  'transactions.debit.PARCELA SEM JUROS': 'Interest-free purchase installment',
  'transactions.debit.PARCELADO COM JUROS':
    'Purchase in installments with interest',
  'transactions.debit.PARCELA COM JUROS': 'Purchase installment with interest',
  'transactions.debit.SAQUE': 'Withdraw',
  'transactions.debit.SAQUE INTERNACIONAL': 'International withdraw',
  'transactions.debit.PAGAMENTO': 'Pay',
  'transactions.debit.CARGA PRE PAGO': 'Prepaid recharge',
  'transactions.debit.VOUCHER DE CREDITO': 'Receiving credit via voucher',
  'transactions.debit.CREDITO SALARIO': 'Credit salary',
  'transactions.debit.INCLUSAO PAGAMENTO': 'Pay',
  'transactions.debit.ESTORNO PAGAMENTO': 'Payment reversal',
  'transactions.debit.ESTORNO ENCARGOS': 'Chargeback',
  'transactions.debit.ESTORNO MULTA': 'Fine reversal',
  'transactions.debit.ESTORNO ANUIDADE': 'Annuity chargeback',
  'transactions.debit.AJUSTE A CREDITO': 'Adjustment credit',
  'transactions.debit.AJUSTE A DEBITO': 'Adjustment debit',
  'transactions.debit.TRANSFERENCIA DEBITO': 'Transfer of value',
  'transactions.debit.TED CASH OUT': 'TED sent',
  'transactions.debit.TEF CASH OUT': 'TEF sent',
  'transactions.debit.ESTORNO TED CASH OUT': 'TED chargeback sent',
  'transactions.debit.ESTORNO TEF CASH OUT': 'TEF chargeback sent',
  'transactions.debit.TED CASH IN': 'TED received',
  'transactions.debit.TEF CASH IN': 'TEF received',
  'transactions.debit.Refund Parcial credito': 'Partial credit reversal',
  'transactions.debit.TRANSFERENCIA CREDITO': 'Credit card transfer',
  'transactions.debit.TED CASH IN TERCEIROS': 'TED received from third parties',
  'transactions.debit.TEF CASH IN TERCEIROS': 'TEF received from third parties',
  'transactions.debit.DOC CASH IN': 'DOC received',
  'transactions.debit.TRANSFERENCIA DEBITO ZERO': 'Zero debit transfer',
  'transactions.debit.REVERSAO TRANSF. DEBITO ZERO':
    'Zero debit transfer reversal',
  'transactions.debit.TED CASH OUT TERCEIROS': 'TED sent to third parties',
  'transactions.debit.TEF CASH OUT TERCEIROS': 'TEF sent to third parties',
  'transactions.debit.REVERSAO DE CREDITO': 'Credit reversal',
  'transactions.debit.REVERSAO DE DEBITO': 'Debit reversal',
  'transactions.debit.ENCARGOS REFINANCIAMENTO': 'Refinancing charges',
  'transactions.debit.JUROS DE MORA': 'Interest on late payments',
  'transactions.debit.MULTA': 'fine',
  'transactions.debit.IOF INTERNACIONAL': 'International purchase rate',
  'transactions.debit.IOF': 'tax',
  'transactions.debit.IOF SAQUE': 'Withdrawal fee',
  'transactions.debit.ENCARGOS SAQUE': 'Withdrawal charges',
  'transactions.debit.DEBITO DIF CAMBIAL': 'Exchange rate debt',
  'transactions.debit.CREDITO DIF CAMBIAL':
    'Foreign exchange difference credit',
  'transactions.debit.PAGAMENTO ADESAO': 'Membership payment',
  'transactions.debit.ESTORNO PAGAMENTO ADESAO':
    'Membership payment chargeback',
  'transactions.debit.CANCELAMENTO DE COMPRA': 'Purchase cancellation',
  'transactions.debit.CANC PARCELADO SEM JUROS':
    'Interest-free installment cancellation',
  'transactions.debit.CANC PARCELA SEM JUROS':
    'Cancellation of interest-free purchase installment',
  'transactions.debit.CANC PARCELADO COM JUROS':
    'Cancellation of installments with interest',
  'transactions.debit.CANC PARCELA COM JUROS':
    'Cancellation of purchase installment with interest',
  'transactions.debit.CANC COMPRA INTERNACIONAL':
    'International purchase cancellation',
  'transactions.debit.CANC IOF INTERNACIONAL':
    'Cancellation of international purchase fee',
  'transactions.debit.ESTORNO SAQUE INTERNACIONAL':
    'International withdrawal reversal',
  'transactions.debit.ESTORNO DEBITO PAGAMENTO': 'Debit payment reversal',
  'transactions.debit.ESTORNO SAQUE': 'Withdrawal reversal',
  'transactions.debit.CANC. CREDITO SALARIO': 'Credit cancellation salary',
  'transactions.debit.TARIFA RECARGA PRE PAGO': 'Prepaid recharge rate',
  'transactions.debit.ANUIDADE': 'Annuity',
  'transactions.debit.PERCENTUAL RECARGA PRE PAGO':
    'Prepaid recharge percentage charge',
  'transactions.debit.TARIFA SAQUE': 'Withdrawal fee',
  'transactions.debit.TARIFA EMISSAO CARTAO': 'Card issuance fee',
  'transactions.debit.ESTORNO ANUIDADE': 'Annuity collection chargeback',
  'transactions.debit.TARIFA PRE PAGO': 'Prepaid rate',
  'transactions.debit.ESTORNO TARIFA SAQUE INTER':
    'International withdrawal fee reversal',
  'transactions.debit.DEBITO PONTUACAO': 'Debit by score',
  'transactions.debit.CREDITO PONTUACAO': 'Credit by score',
  'transactions.debit.CONTRATO REFINANCIAMENTO': 'Refinancing contracting',
  'transactions.debit.TRANSFERENCIA': 'Transfer',
  'transactions.debit.CANC CREDITO PARCELAMENTO':
    'Credit cancellation in installments',
  'transactions.debit.BLOQUEIO JUDICIAL': 'Amount blocked by court order',
  'transactions.debit.REVERSAO BLOQUEIO JUDICIAL':
    'Cancellation of blocked amount by court order',
  'transactions.debit.PAGAMENTO NAO PROCESSADO BOLET':
    'Payment not processed via bank slip',
  'transactions.debit.CREDITO DEFINITIVO FRAUDE': 'Customer credit',
  'transactions.debit.ESTORNO TAXA': 'Chargeback fee',
  'transactions.debit.CONCESSAO DESCONTO': 'Discount grant',
  'transactions.debit.CONCESSAO DESCONTO - PARCEIRO':
    'Discount Grant - partner',
  'transactions.debit.CREDITO DEFINITIVO': 'Customer credit',
  'transactions.debit.RECUPERACAO VALORES': 'Recovery of values',
  'transactions.debit.DEBITO INSPETORIA OUTRO BANCO': 'Debt from another bank',
  'transactions.debit.DEBITO INSPETORIA': 'Inspection debt',
  'transactions.debit.TRANSFERENCIA JUDICIAL': 'Judicial transfer',
  'transactions.debit.ESTORNO PAG. NAO PROCESSADO':
    'Payment refund unprocessed',
  'transactions.debit.COBRANCA TAXA': 'Fee collection',
  'transactions.debit.CONTA FRIA - REC. APROPRIAR PF':
    'Person account value recovery, suspected cold account',
  'transactions.debit.CONTA FRIA - REC. APROPRIAR PJ':
    'Company account value recovery, suspected cold account',
  'transactions.debit.PAGAMENTO BOLETO': 'Bankslip payment',
  'transactions.debit.PAGAMENTO UTILITIES': 'Payment of covenants / utilities',
  'transactions.debit.ESTORNO PAGAMENTO BOLETO': 'bankslip payment reversal',
  'transactions.debit.ESTORNO PAGAMENTO UTILITIES':
    'Reversal of payment of covenants / utilities',
  'transactions.debit.ESTABELECIMENTO MODELO': 'Model Establishment',
  'transactions.credit.payment': 'Credit Card Payment',
  'transactions.group.general': 'General',
};

export default transactions;
