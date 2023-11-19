import React from 'react'
import TransactionStepItem from '../organism/TransactionStep/TransactionStepItem'

function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
        <div className="container-fluid">
            <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">It’s Really That<br/> Easy to Win the Game
            </h2>
            <div className="row gap-lg-0 gap-4" data-aos="fade-up">
                <TransactionStepItem image="transaction-step-1" title='1. Start' desc1='Pilih salah satu game' desc2='yang ingin kamu top up' />
                <TransactionStepItem image="transaction-step-2" title='2. Fill Up' desc1='Top up sesuai dengan' desc2='nominal yang sudah tersedia' />
                <TransactionStepItem image="transaction-step-3" title='3. Be a Winner' desc1='Siap digunakan untuk' desc2='improve permainan kamu' />
            </div>
        </div>
    </section>
  )
}

export default TransactionStep