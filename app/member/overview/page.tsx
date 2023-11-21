import OverviewContent from '@/components/organism/OverviewContent/OverviewContent'
import Sidebar from '@/components/organism/Sidebar/Sidebar'
import React from 'react'

function MemberOverview() {
  return (
    // <!-- Overview -->
    <section className="overview overflow-auto">
        <Sidebar />
        <OverviewContent />
    </section>
  )
}

export default MemberOverview