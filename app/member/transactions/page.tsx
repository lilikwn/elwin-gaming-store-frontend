import Sidebar from '@/components/organism/Sidebar/Sidebar'
import MainContent from '@/components/organism/Transactions/MainContent'
import React from 'react'

function MemberTransactions() {
  return (
    // <!-- Transactions -->
    <section className="transactions overflow-auto">
        <Sidebar />
        <MainContent />
    </section>
  )
}

export default MemberTransactions